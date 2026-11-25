# Architecture direction (proposed)

Existing runtime is the minimal Node HTTP scaffold; no product code changes authorized. Owner requires GCP, Google-only authentication, Stripe Connect/PayNow, GitHub Actions and dev/stg/prod deployment branches. Proposed cost-conscious architecture pending D-018/019: responsive TypeScript web app + modular monolith on Cloud Run, PostgreSQL (Cloud SQL), private Cloud Storage, Pub/Sub or Cloud Tasks and Cloud Scheduler for asynchronous jobs; BigQuery aggregate analytics, Cloud Logging/Monitoring. Choose framework and region after cost/traffic/privacy assessment. Avoid microservices until measured need.

Modules: identity/access, product intelligence, requests, trips/matching, offers/orders, money/reconciliation, fulfillment/evidence, dispute operations, reviews, growth/comms, analytics. Keep order and money state transactions consistent using DB constraints, durable outbox, idempotent commands; no floating point money. Version event and API contracts. Use provider adapters with mock/test mode; enforce access on server, not client. Private uploads signed/short lived, type/size limits, scan, redaction, audit, retention. AI inputs untrusted; deterministic schema/policy gates, confidence and human review; no agent authority to approve regulated items, funds or disputes. No scraping or partner access without rights.

## Deployment contract (proposed)
| Git branch | GitHub environment | Config | GCP isolation |
| --- | --- | --- | --- |
| dev | dev | .env.dev | dev project |
| stg | stg | .env.stg | stg project |
| prod | prod | .env.prod | prod project |

No deployment from main or other branches; PR promotion dev → stg → prod, protected branches, required tests, prod human approval. Promote immutable tested artifact digest where feasible; do not use different builds silently. Separate GCP projects, DB/buckets/accounts, OAuth callbacks, Stripe test vs live keys/webhook secrets, datasets and service identities. .env.* only public/non-sensitive config; tracked examples or explicit safe allowlist; existing gitignore excludes local env files until an approved config change. Never store secrets in Git, client bundle or logs; environment-scoped GitHub secrets, prefer short-lived GCP workload identity federation; app secrets injected at runtime via environment-isolated Secret Manager with approved mapping. Validate config/branch mapping before deployment and fail closed. Migration compatibility, backups, rollback and no automatic destructive migrations. No provision/deploy in this specs-only change.
