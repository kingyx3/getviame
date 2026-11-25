# Architecture baseline

Status: temporary scaffold; permanent stack not chosen.

The current app is a dependency-free Node.js HTTP process serving a placeholder page and health status. Source: src/server.mjs; tests: test/server.test.mjs. It binds to loopback for local development; no production configuration exists.

This is deliberately not a framework, database, domain model, authentication strategy, deployment platform or UI design-system decision. Replace or extend the runtime through an approved OpenSpec change after product discovery.

## Engineering defaults
- Prefer the simplest viable modular design and clear boundaries.
- Keep observable behavior in capability specs; put implementation rationale here or in change design artifacts.
- Use explicit interfaces and migrations when data appears; document compatibility and rollback.
- Treat auth, authorization, tenant isolation, privacy and external side effects as requirements when relevant, not assumptions.
- Never introduce paid services or production dependencies without a scoped decision.
- Keep reproducible local checks and CI; add type checking, linting, browser automation and security scanning when the chosen stack makes them applicable.
