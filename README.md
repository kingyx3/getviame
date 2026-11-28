# GetViaMe

A specification-first application under development. This initial scaffold intentionally contains no product functionality.

## Quick start

Requires Node.js 22+ and npm for the scaffold; OpenSpec 2.2.0 requires Node.js >=22.20.0. Use a supported current Node 22 patch (`nvm install 22`).

```sh
npm start
npm test
```

Open http://localhost:3000. The only endpoints are the placeholder home page and GET /health. Use PORT to change the port.

## OpenSpec

Install OpenSpec locally in your development environment and generate the official skills for your coding agent:

```sh
npm install -g @fission-ai/openspec@2.2.0
openspec init --tools codex,claude
openspec config profile
openspec update
openspec validate --all --strict
```

CI also runs the pinned OpenSpec strict validation. The CLI release and package metadata are recorded in docs/engineering/verification.md; local generated agent integrations still need installation and review.

Choose the expanded profile if you want the verification skill. Commit generated agent integrations and record the OpenSpec version in the same setup change. Do not commit local credentials.

Before implementing any product behaviour, read AGENTS.md and docs/product/brief.md. The first step is product discovery, not building speculative features.

## Development

`npm test` runs the built-in Node test runner; `npm run check` checks syntax and runs tests. No external runtime dependencies. The temporary web shell is deliberately replaceable after product requirements are clarified.
