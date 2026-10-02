const test = require("node:test");
const assert = require("node:assert/strict");
const tutor = require("./layered-intelligence.js");

test("teaches broad concepts without AI", () => {
  const result = tutor.respond({ text: "Explain factoring", currentUnit: "polynomials" });
  assert.equal(result.escalate, false);
  assert.equal(result.lesson_ref, "polynomials");
  assert.match(result.message, /product/i);
});

test("gives one linear hint before a full solution", () => {
  const result = tutor.respond({ text: "Solve 2x + 5 = 17", attempts: 0, solutionRequested: false });
  assert.equal(result.kind, "hint");
  assert.equal(result.escalate, false);
  assert.doesNotMatch(result.message, /x = 6/);
});

test("provides and checks a requested linear solution locally", () => {
  const result = tutor.respond({ text: "Solve 2x + 5 = 17", attempts: 0, solutionRequested: true });
  assert.equal(result.kind, "worked_solution");
  assert.match(result.message, /x = 6/);
  assert.match(result.message, /Check/i);
});

test("factors a monic trinomial locally", () => {
  const result = tutor.respond({ text: "Factor x² + 7x + 12", attempts: 2, solutionRequested: false });
  assert.equal(result.escalate, false);
  assert.match(result.message, /\(x \+ 3\)\(x \+ 4\)|\(x \+ 4\)\(x \+ 3\)/);
});

test("escalates an unsupported detailed question", () => {
  const result = tutor.respond({ text: "My teacher used a strange method on this exact homework problem and I need you to compare every line because the denominator changes after substitution.", currentUnit: "rational" });
  assert.equal(result.escalate, true);
});
