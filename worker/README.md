# A. L. S. Tutor AI service

This Worker supplies the governed, step-by-step AI tutor at `https://api.alstutor.com/api/tutor`.

## Controls

- Cloudflare Workers AI runs `@cf/openai/gpt-oss-20b`; no model API key is stored in the site or repository.
- Exact-origin CORS permits the production custom domain and the GitHub Pages address.
- Request validation caps a turn to eight short messages and 4,000 combined characters.
- Per-IP rate limit: 8 requests per 60 seconds.
- A Durable Object enforces a hard ceiling of 50 model requests per UTC day. It stores only the UTC date and aggregate request count; it does not store IP addresses, student messages, or replies. The rate limiter uses the request IP as a temporary rate-limit key.
- Chat exists in browser memory only and is cleared on refresh. The Worker does not write prompts or replies to storage or logs.
- The deterministic Practice feature remains responsible for scored answers and progress evidence. The AI tutor cannot record mastery.
- If the model returns malformed data or requests a complete solution before it is allowed, the Worker returns a guided hint instead.
- Static lessons and Practice continue to work when the AI service is unavailable.

This is a zero-cost deployment: keep the Cloudflare account on the Workers Free plan, do not enable paid overages, do not add prepaid AI Gateway credits, and do not attach a paid model key. The tutor stops after 50 requests per UTC day. Cloudflare’s 10,000-Neuron free daily AI allocation is shared with any other Workers AI use on that account; if that free allocation is unavailable, do not upgrade or add credits. The tutor must remain paused until the next reset. The build does not change billing settings or incur a charge.

## First activation

1. Confirm the Cloudflare account remains on the Workers Free plan, with no paid overages or prepaid AI credits enabled. Then open Workers & Pages and deploy the Worker from this folder using Wrangler.
2. Confirm the `AI` binding and `DAILY_BUDGET` Durable Object migration are present in `wrangler.toml`.
3. The custom domain is `api.alstutor.com`; Cloudflare creates its DNS record and certificate when the Worker is deployed.
4. Test the AI tutor from `https://alstutor.com`. No student account or ChatGPT login is involved. If free AI capacity is unavailable, leave the tutor paused; do not upgrade or add credits.

For CLI deployment: `cd worker && npx wrangler deploy`. Cloudflare credentials and an active zone are required in that account.

