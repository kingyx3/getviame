# Marketplace metrics and agent improvement contract (proposed)

North star: number of successfully completed, undisputed legitimate orders per rolling 30 days; report cohort and corridor alongside it. Define completed from authoritative order state and exclude test, fraud, duplicate and reversed orders. No target values until baseline.

| Metric | Definition / denominator |
| --- | --- |
| Activation | new users posting valid request or submitting eligible offer within 7 days / new signed-in users |
| Request fill | requests receiving funded acceptance / eligible published requests in same cohort |
| Time to offer / match | median and p90 from publish to first eligible offer / acceptance; report censored open requests |
| Funded conversion | confirmed funded orders / selected offers |
| Completion | completed orders / funded orders by mature cohort |
| On-time handover | handovers within agreed window / verified handovers |
| Disputes | orders with dispute / delivered orders whose window matured |
| Settlement reliability | paid payouts / eligible payouts; latency p50/p95; reconciliation exceptions count/value |
| GMV | gross contracted value inclusive of fee on completed orders; report seller proceeds and platform gross fees separately, SGD minor units at launch; future currencies reported separately; report refunds separately |
| Net revenue | fee revenue less processing, refunds of fees, credits and applicable tax accounting |
| Contribution | net revenue less variable support, fraud/loss, delivery subsidy and incentives |
| Repeat usage | users with another completed order within 30/90 days / matured first-order users |
| Marketplace density | eligible supply / active requests by corridor, dates and category |
| Product intelligence | validated catalogue reuse, duplicate rate, price coverage/freshness, validation false rejection |
| Referral | qualified unique referrals / invitees, reward cost per incremental completed user |
| Guardrails | prohibited-listing escape, privacy incidents, fraud loss, payment discrepancies, error rate, p95 latency, cost/order |

Events: user_signed_in, request_submitted/published/rejected, trip_created, offer_submitted/selected/checkout_reserved/accepted, payment_confirmed/failed, receipt_uploaded/reviewed, price_observation_created, traveller_cancelled, request_reopened, handover_reported, handover_reminder_sent, handover_confirmed, handover_auto_confirmed, handover_verified, dispute_opened/resolved, application_fee_recorded/refunded, reimbursement_created/failed, refund_requested/confirmed/failed, payout_reserved/pending/failed, payout_confirmed, order_completed/reversed, review_submitted, referral_registered/qualified/credited/reversed, demand_cloned. Each has event_id, version, occurred_at UTC, environment, relevant opaque IDs, correlation_id, dedupe key; financial totals derive from reconciled ledger/provider not client analytics. Separate environment datasets. Document owners, dimensions, time windows and data quality checks.

Agents use read-only aggregate views or sanitized exports (scheduled sanitized metrics snapshot; BigQuery on demand if cost-approved); no live payment credentials, raw receipt or customer PII. Minimum cohort suppression, RBAC, access audit and retention. Agent workflow: baseline → identify bottleneck with evidence and uncertainty → propose an OpenSpec change/experiment with hypothesis, primary metric, guardrails and rollback → human approval for policy/scope → implement/test → compare mature cohorts and record findings. No autonomous fee, risk, policy or production changes. Do not optimize GMV at expense of losses or customer safety.

## v0.2 additional operational measures
Catalogue field/MSRP coverage by source/confidence, enrichment cost per successful field, completion for unknown-MSRP jobs, receipt extraction quality, stale references; traveller cancellation rate (cancelled accepted orders / accepted orders by mature cohort), reopen-to-rematch, refund completion, shopper confirmation time, auto-confirmation rate and subsequent disputes/fraud; reward grant/redemption/expiry/reversal, contribution per S$10-minimum job; cloud/API/AI cost and forecast vs S$50, support themes, feedback, logs/latency, CI/deploy/test/spec coverage. Read-only sanitized snapshots and runbooks per agent-operations.md; no raw PII or secrets.

## Current payment measures (v0.12)
Report-to-confirmation manual/auto, confirmation-to-dispute deadline, deadline-to-settlement, early disputes, overdue deliveries and acceptance-to-delivery ≤30 days; invalid receipts, penalty incidence and compensation, unrecovered processing fees. Original-method refund success/latency and late cases; reopen-to-replacement conversion, time-to-replacement, fresh collection costs, duplicate/late refunds and expired holds; unauthorised payout attempts and control drift, account disconnects, merchant-initiated refunds, shortfall funding latency, unresolved refund liabilities and provider balance discrepancies; payout batch latency/failure, active paid travellers/month, payouts per traveller, exact fees by order/payout, negative-balance and reserve exposure; restricted promotion grants/commitments/reservations/redemption/restoration/expiry, platform subsidy and contribution after incentives. S$50 referral redemption boundary and abuse. Promotional grant issuance is not revenue or savings. Track effective cost per completed order including cancelled attempts, active-account fees, payout fees, refund costs and tax; distinguish collected principal from earned platform fee. Measure repeat demand for potential recurrent orders, not automatic purchases. Sanitized aggregates only.

Pilot readiness: report mature cohorts, exposure, receipt validity, verified handover, disputes, cancellation challenge, refund completion, contribution after all variable costs, support first response/resolution, moderation workload and reliability. Before expansion approve measurable thresholds and sample sizes against actual baseline; no fabricated baseline or autonomous scope expansion. Track selected-to-funded conversion without duplicate selection retries, cancellations by reason/role, offer expiry and stale matches, grant issuance/unlock/restoration/grace and cost by corridor. Actual AI infrastructure costs counted once in aggregate S$50 forecast; separate payment, marketing and AI reporting under approved allocations.
