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
| GMV | agreed item value on completed orders, SGD minor units at launch; future currencies reported separately; report refunds separately |
| Net revenue | fee revenue less processing, refunds of fees, credits and applicable tax accounting |
| Contribution | net revenue less variable support, fraud/loss, delivery subsidy and incentives |
| Repeat usage | users with another completed order within 30/90 days / matured first-order users |
| Marketplace density | eligible supply / active requests by corridor, dates and category |
| Product intelligence | validated catalogue reuse, duplicate rate, price coverage/freshness, validation false rejection |
| Referral | qualified unique referrals / invitees, reward cost per incremental completed user |
| Guardrails | prohibited-listing escape, privacy incidents, fraud loss, payment discrepancies, error rate, p95 latency, cost/order |

Events: user_signed_in, request_submitted/published/rejected, trip_created, offer_submitted/accepted, payment_confirmed/failed, receipt_uploaded/reviewed, price_observation_created, traveller_cancelled, request_reopened, handover_reported, handover_reminder_sent, handover_confirmed, handover_auto_confirmed, handover_verified, dispute_opened/resolved, transfer_created/failed, payout_confirmed, order_completed/reversed, review_submitted, referral_registered/qualified/credited/reversed, demand_cloned. Each has event_id, version, occurred_at UTC, environment, relevant opaque IDs, correlation_id, dedupe key; financial totals derive from reconciled ledger/provider not client analytics. Separate environment datasets. Document owners, dimensions, time windows and data quality checks.

Agents use read-only aggregate views or sanitized exports (scheduled sanitized metrics snapshot; BigQuery on demand if cost-approved); no live payment credentials, raw receipt or customer PII. Minimum cohort suppression, RBAC, access audit and retention. Agent workflow: baseline → identify bottleneck with evidence and uncertainty → propose an OpenSpec change/experiment with hypothesis, primary metric, guardrails and rollback → human approval for policy/scope → implement/test → compare mature cohorts and record findings. No autonomous fee, risk, policy or production changes. Do not optimize GMV at expense of losses or customer safety.

## v0.2 additional operational measures
Catalogue field/MSRP coverage by source/confidence, enrichment cost per successful field, completion for unknown-MSRP jobs, receipt extraction quality, stale references; traveller cancellation rate (cancelled accepted orders / accepted orders by mature cohort), reopen-to-rematch, refund completion, shopper confirmation time, auto-confirmation rate and subsequent disputes/fraud; reward grant/redemption/expiry/reversal, contribution per S$10-minimum job; cloud/API/AI cost and forecast vs S$50, support themes, feedback, logs/latency, CI/deploy/test/spec coverage. Read-only sanitized snapshots and runbooks per agent-operations.md; no raw PII or secrets.

## v0.3 measures
Report-to-confirmation manual/auto, confirmation-to-dispute deadline, deadline-to-settlement, early disputes, overdue deliveries and acceptance-to-delivery ≤30 days; invalid receipts, penalty incidence and compensation, unrecovered processing fees. Refund election and re-spend, credit liabilities by source, backing and reserved/available/reversed, payout batch latency/failure, bonus election and contribution after incentive, actual processor fees avoided. S$50 referral redemption boundary and abuse. Credit issuance is not revenue or savings. Measure repeat demand for potential recurrent orders, not automatic purchases. Sanitized aggregates only.
