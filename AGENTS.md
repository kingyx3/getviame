# GetViaMe — agent operating contract

## Start every session
1. Read this file, docs/product/brief.md, docs/product/roadmap.md and docs/product/decisions.md.
2. Read docs/engineering/architecture.md and openspec/config.yaml; inspect relevant current specs and active changes.
3. Run git status and npm run check. Preserve unrelated work. Inspect the base branch and any open PRs before starting.
4. Choose the highest-priority approved, unblocked roadmap item; if none exists, stop with a concise decision request. Do not infer a product from the repository name.

## Sources of truth
- Product intent and open questions: docs/product/brief.md.
- Human-approved decisions: docs/product/decisions.md.
- Priority and dependencies: docs/product/roadmap.md.
- Current accepted behavior: openspec/specs/.
- Proposed behavior: openspec/changes/<change-id>/; approved revision is the reviewed Git commit.
- Implementation conventions and verification: docs/engineering/.
If sources conflict, report the conflict. Do not silently overwrite an approved decision or treat a draft as approved.

## Change lifecycle
1. Explore intent and existing code. Record material ambiguities; continue independent work where safe.
2. Use the installed OpenSpec propose workflow (or create the equivalent artifacts manually): proposal.md, design.md, tasks.md and capability spec deltas. Use stable requirement IDs and GIVEN/WHEN/THEN scenarios. Avoid redundant specifications.
3. Map requirements to executable tests; record dependencies, migration/rollback, security, observability and non-goals as appropriate.
4. Obtain explicit human approval of new business behavior or material architectural decisions. Record approver, approved revision and scope in the change's decision record. Routine fixes within already-approved scope need no new product approval.
5. Implement in a dedicated branch/worktree. Prefer small vertical increments; run tests as tasks complete. No direct pushes to main during subsequent development.
6. Run OpenSpec strict validation, npm run check and all relevant new acceptance/integration/browser tests. If a gate cannot run, mark it BLOCKED, not PASS.
7. Have an independent reviewer or fresh agent session compare approved requirements against implementation and actual test evidence. Do not claim independence if unavailable.
8. Fix failures within three attempts per failure category, then escalate with evidence. Do not weaken tests or broaden scope to obtain a pass.
9. Open a PR with change ID, approval revision, test evidence, remaining risks and preview instructions. Archive/sync only after verification and acceptance (or an explicit delegated acceptance policy). Merge the spec delta and code together. Never archive incomplete work.
10. Update roadmap and durable handoff record; next session starts from Git, not conversation memory.

## Decision boundary
Autonomous: local implementation, tests, refactoring within approved scope, bug fixes that restore specified behavior, routine dependency choices consistent with the architecture.
Escalate: users/workflows/business rules, conflicting requirements, pricing, legal/privacy/security trade-offs, stack/vendor changes, irreversible migrations, changes to approved acceptance criteria, budget or scope expansion, production deployment.
Ask one consolidated question per blocked decision: context, options, recommendation, impact, and what can continue. Do not invent approval. Do not make public commits containing secrets, private data, credentials or confidential product details.

## Parallel work
One owner per change and isolated worktree per agent. Define file and capability ownership before parallel execution. Do not parallelize overlapping contracts, schema migrations or conflicting spec deltas. Integrate and revalidate against the current base. Never force-push or delete another agent's work.

## Completion evidence
Each completed requirement has a test or an explicit documented manual verification; record command, result, commit SHA and any unverified areas. Task checkboxes reflect evidence, not intentions. No production access, deployment, or external spending without authorization.
