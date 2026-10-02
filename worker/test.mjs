import test from "node:test";
import assert from "node:assert/strict";
import worker, { DailyBudget } from "./index.mjs";

function makeRequest(body, origin = "https://alstutor.com", method = "POST") {
  return new Request("https://api.alstutor.com/api/tutor", {
    method,
    headers: { Origin: origin, "Content-Type": "application/json", "CF-Connecting-IP": "192.0.2.1" },
    body: method === "POST" ? JSON.stringify(body) : undefined
  });
}
function validBody() {
  return { messages: [{ role: "user", content: "Solve x + 4 = 9. I tried subtracting 4." }], attempt_count: 1, solution_requested: false };
}
function mockEnv(result) {
  const env = { modelCalled: false };
  env.AI = { run: async (_model, input) => { env.modelCalled = true; env.lastInput = input; return result; } };
  Object.assign(env, {
    TUTOR_LIMITER: { limit: async () => ({ success: true }) },
    DAILY_BUDGET: {
      idFromName: () => "daily-total",
      get: () => ({ fetch: async () => new Response(null, { status: 204 }) })
    }
  });
  return env;
}

test("rejects an unapproved web origin before model invocation", async () => {
  const env = mockEnv({});
  const response = await worker.fetch(makeRequest(validBody(), "https://example.com"), env);
  assert.equal(response.status, 403);
  assert.equal(env.modelCalled, false);
});

test("serves an approved CORS preflight without calling AI", async () => {
  const response = await worker.fetch(makeRequest(null, "https://alstutor.com", "OPTIONS"), mockEnv({}));
  assert.equal(response.status, 204);
  assert.equal(response.headers.get("Access-Control-Allow-Origin"), "https://alstutor.com");
});

test("validates response shape and returns a governed tutor reply", async () => {
  const env = mockEnv({ response: JSON.stringify({ kind: "hint", message: "Subtract 4 from each side.", next_prompt: "What do you get?", lesson_ref: null }) });
  const response = await worker.fetch(makeRequest(validBody()), env);
  assert.equal(response.status, 200);
  assert.equal((await response.json()).kind, "hint");
  assert.equal(env.lastInput.max_tokens, 500);
});

test("blocks a premature worked solution with a safe guided hint", async () => {
  const env = mockEnv({ response: JSON.stringify({ kind: "worked_solution", message: "x equals 5", next_prompt: null, lesson_ref: null }) });
  const response = await worker.fetch(makeRequest(validBody()), env);
  const result = await response.json();
  assert.equal(result.kind, "hint");
  assert.doesNotMatch(result.message, /x equals 5/i);
});

test("applies per-IP rate limiting", async () => {
  const env = mockEnv({});
  env.TUTOR_LIMITER.limit = async () => ({ success: false });
  const response = await worker.fetch(makeRequest(validBody()), env);
  assert.equal(response.status, 429);
  assert.equal(env.modelCalled, false);
});

test("daily budget stops requests after 50", async () => {
  let usage = null;
  const state = { storage: { transaction: async (fn) => fn({ get: async () => usage, put: async (_key, value) => { usage = value; } }) } };
  const budget = new DailyBudget(state);
  for (let i = 0; i < 50; i++) assert.equal((await budget.fetch(new Request("https://budget.internal/check", { method: "POST" }))).status, 204);
  assert.equal((await budget.fetch(new Request("https://budget.internal/check", { method: "POST" }))).status, 429);
  assert.equal(usage.count, 50);
});

test("rejects oversized or malformed conversation input", async () => {
  const env = mockEnv({});
  const bad = { messages: [{ role: "user", content: "x".repeat(1201) }], attempt_count: 0 };
  const response = await worker.fetch(makeRequest(bad), env);
  assert.equal(response.status, 400);
});

