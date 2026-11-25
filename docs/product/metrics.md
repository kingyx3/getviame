# Marketplace metrics and agent improvement contract (proposed)

North star: number of successfully completed, undisputed legitimate orders per rolling 30 days; report cohort and corridor alongside it. Define completed from authoritative order state and exclude test, fraud, duplicate and reversed orders. No target values until baseline.

| Metric | Definition / denominator |
| --- | --- |
| Activation | new users posting valid request or submitting eligible offer within 7 days / new signed-in users |
| Request fill | requests receiving accepted offer / eligible published requests in same cohort |
| Time to offer / match | median and p90 from publish to first eligible offer / acceptance; report censored open requests |
| Funded conversion | confirmed funded orders / accepted offers |
| Completion | completed orders / funded orders by mature cohort |
| On-time handover | handovers within agreed window / verified handovers |
| Disputes | orders with dispute / delivered orders whose window matured |
| Settlement reliability | paid payouts / eligible payouts; latency p50/p95; reconciliation exceptions count/value |
| GMV | agreed item value on completed orders, normalized with recorded FX; report refunds separately |
| Net revenue | fee revenue less processing, refunds of fees, credits and applicable tax accounting |
| Contribution | net revenue less variable support, fraud/loss, delivery subsidy and incentives |
| Repeat usage | users with another completed order within 30/90 days / matured first-order users |
| Marketplace density | eligible supply / active requests by corridor, dates and category |
| Product intelligence | validated catalogue reuse, duplicate rate, price coverage/freshness, validation false rejection |
| Referral | qualified unique referrals / invitees, reward cost per incremental completed user |
| Guardrails | prohibited-listing escape, privacy incidents, fraud loss, payment discrepancies, error rate, p95 latency, cost/order |

Events: user_signed_in, request_submitted/published/rejected, trip_created, offer_submitted/accepted, payment_confirmed/failed, receipt_uploaded/reviewed, handover_verified, dispute_opened/resolved, transfer_created/failed, payout_confirmed, order_completed/reversed, review_submitted, referral_qualified/credited, demand_cloned. Each has event_id, version, occurred_at UTC, environment, relevant opaque IDs, correlation_id, dedupe key; financial totals derive from reconciled ledger/provider not client analytics. Separate environment datasets. Document owners, dimensions, time windows and data quality checks.

Agents use read-only aggregate views or sanitized exports (proposed BigQuery views and scheduled metrics snapshot); no live payment credentials, raw receipt or customer PII. Minimum cohort suppression, RBAC, access audit and retention. Agent workflow: baseline → identify bottleneck with evidence and uncertainty → propose an OpenSpec change/experiment with hypothesis, primary metric, guardrails and rollback → human approval for policy/scope → implement/test → compare mature cohorts and record findings. No autonomous fee, risk, policy or production changes. Do not optimize GMV at expense of losses or customer safety.
