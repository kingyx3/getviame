# Decision register v0.3

Owner answers 2026-11-26 in owner-answers-v0.2.md. Confirmed directions constrain specs; PR remains draft, no implementation approved. External clearance independent.

| ID | Status | Resolution / remaining question |
| --- | --- | --- |
| D-001/002 | Confirmed | Marketplace; accessibility > discovery > earnings > savings |
| D-003/004 | Confirmed | Singapore destination, SGD only, eligible travellers primarily SG round trips, PWA, both roles, one variant/full quantity, global extensibility |
| D-005 | Partial | AI-assisted admin and metrics, infrastructure < S$50/month; traffic/SLO and cost scope open |
| D-006 | Confirmed / details open | Inclusive 8% of agreed total, S$10 minimum job, traveller bears all costs; fee rounding/GST/refund treatment open; estimates nonbinding |
| D-007 | Partial | Fund after acceptance before purchase; traveller fronts cost; reprice by consent; advance requests allowed, acceptance-to-delivery ≤30 days. No shopper cancellation penalty until eligible receipt submitted; then 20% to traveller, disclosed to both. Proposed gross order base; receipt evidence, consent/dispute, fee allocation, goods/return rights, statutory exceptions and funding timeout open |
| D-008/009 | Confirmed direction / details open | Sequential: actual delivery report, immediate prompt/day 3/day 6 reminders, eligible auto-confirm day 7 if silent; manual/auto confirmation starts separate 7×24h dispute period. No early release; open disputes/evidence exceptions block; early disputes allowed. UTC half-open deadlines proposed; evidence, no-show, delayed jobs/appeal rules open |
| D-010 | External BLOCK | Stripe/counsel confirm SGD custody, MoR, charge type, KYC, liability, 30-day delivery + up to 14-day confirmation/dispute + dispute extension and payout/refund horizon; scheduled payouts/no FX. No escrow claim; licensed wallet partner may be required |
| D-011 | External BLOCK | Food gated; configurable eligible categories/corridors. Traveller bears lawful import costs and declares as required; importer of record, restrictions/crew eligibility need clearance |
| D-012 | Confirmed / details open | Sparse searchable parent/variant catalogue, user confirmed enrichment; MSRP optional/nonbinding, receipt mandatory reviewed exception; uploader/staff access, private extracted prices; retention and source rights open |
| D-013 | Confirmed intent / external BLOCK | Individual SGD credit wallets, separate refund principal, earnings principal, bonus, referral and cash payable. Optional refund credits and +2% credit incentive require approved provider/legal model. Withdrawals, expiry, top-ups, transfers and backing by source open. Scheduled cash payouts subject to provider |
| D-014 | Partial | S$10 spend-only referee at registration, S$10 referrer first qualifying completed transaction, cap 5, 180 days; minimum S$50 order to redeem S$10 referral credit. Proposed one referral grant per order; qualification threshold, stacking/co-pay, fraud/reversals and credit classification open |
| D-015 | Partial | Competing counteroffers, full quantity, one active order, grouped opportunities separate, no capacity. Traveller cancellation reopens/tracks rate. Owner asks about refund credits; recommend informed optional credit refund only if approved, original-method refund otherwise; fresh acceptance/funding, no duplicate obligations. Recurrent orders future only |
| D-016 | Confirmed / details open | Blind stars/text, in-app messaging, six reputation signals with minimum sample; deadline/thresholds/moderation open |
| D-017 | Confirmed | Manual trips, opt-in permitted partner import later including both directions |
| D-018 | Delegated | Cost-first GCP Singapore serverless PWA, Firestore instead of fixed Cloud SQL for pilot; ADR review, cost and transaction gates |
| D-019 | Confirmed | Feature PRs to dev, dev→stg→prod, no main deployment, prod human approval; bootstrap not executed |
| D-020 | Confirmed / details open | Google, 18+, KYC, admin RBAC, welcome; provider terms/communications vendor open |
| D-021 | Confirmed | Agent routine ops, diagnostics, test/review/PR and metrics proposals; human material policy, exceptional financial decisions, spending and production approval |
| D-022 | Partial | Elect credits for +2% from platform fee; proposed 2 percentage points of gross (92% cash vs 94% credit, 6% gross fee); confirm base, election timing, reversibility, bonus spend-only and no bonus on penalties/refunds |
| E-001 | Provisional | Minimal runtime unchanged |
| E-002 | Confirmed | Same repo and environment-bound GHA, no live deployment authorized |

Remaining priority: wallet provider/legal arrangement and source-specific withdrawal/expiry; optional refund election; D-022 bonus base; penalty base/evidence/financial allocation; referral stacking/qualification; payout cadence. Record scope/revision and affected requirements; policy preference is not provider/legal clearance.
