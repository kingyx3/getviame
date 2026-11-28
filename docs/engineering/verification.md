# Verification and handoff

## Current checks
- npm run check: syntax check plus Node test suite.
- npm test: HTTP integration tests using ephemeral loopback ports.
- openspec validate --all --strict: structural validation after the CLI is installed.
- CI: .github/workflows/ci.yml runs the runtime check. v0.12 PR adds a pinned strict-validation CI step; confirm actual run before marking PASS.

| Requirement | Test |
| --- | --- |
| BASE-001 | test/server.test.mjs — home renders placeholder HTML |
| BASE-002 | test/server.test.mjs — health returns machine-readable status |
| BASE-003 | test/server.test.mjs — unknown routes and unsupported methods are rejected |

Future changes MUST provide requirement IDs mapped to tests or explicit manual verification. Add actual negative cases and browser tests where the behavior needs them. Structural OpenSpec validation alone is not implementation verification.

## Handoff format (per PR / change)
- Change ID, branch, base SHA and approved spec revision.
- Completed tasks and outstanding blockers.
- Requirement-to-test mapping, actual command output summaries and execution commit.
- Independent review result, unresolved risks and preview instructions.
- Next eligible action; do not claim a gate ran if it did not.

The initial scaffold is not production-ready. No product, security or deployment acceptance is implied.

## Initial verification record — 2026-11-25
- Tested source revision: 62afc5f8ec1ee879827b2e9453a42f15c9cb2971.
- Node v22.16.0: `node --check src/server.mjs && node --test` passed (3 tests, 0 failures). Both local file blob hashes matched the published GitHub files.
- OpenSpec strict validation: BLOCKED — npm registry DNS unavailable in the execution environment, so the CLI and generated skills could not be installed. Run the README setup steps locally; do not mark this gate passed until it runs.
- Hosted CI: unconfirmed; no combined statuses returned at inspection time.
- Independent review: not performed; no product behavior or deployment approved.

## v0.12 reconciliation handoff (2026-11-28)
Base `59b17335ad2004eb8bffb80fea1f9b92e93f4418`; founder approval scope in docs/product/owner-answers-v0.12.md, PR #3. Only specification/CI configuration changed, no product implementation. OpenSpec pin 2.2.0 verified against official release https://github.com/Fission-AI/OpenSpec/releases/tag/v2.2.0 and package.json at tag v2.2.0 (Node >=22.20.0). npm registry and GitHub clone DNS failed in local environment; local CLI installation, agent integration generation, git status, runtime and strict validation BLOCKED locally. Hosted CI must establish install/check/strict validation; no assumption of success. Independent review, external gates, application acceptance tests and launch approval pending. Next: inspect actual CI and fix within approved scope; review revision; generate official agent integration in a working development environment; authorise bounded nonfinancial increments only after applicable gates. No tests checked off without evidence.
