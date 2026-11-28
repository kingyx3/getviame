# Decision register v0.11 — payment-reconciled draft

Owner evidence through owner-answers-v0.11.md. Later explicit decisions prevail; historical records unchanged. Confirmed directions constrain specs; PR remains draft, no implementation approved. External clearance independent.

| ID | Status | Resolution / remaining question |
| --- | --- | --- |
| D-001/002 | Confirmed | Marketplace; accessibility > discovery > earnings > savings |
| D-003/004 | Confirmed | Singapore destination, SGD only, eligible travellers primarily SG round trips, PWA, both roles, one variant/full quantity, global extensibility |
| D-005 | Partial | AI-assisted admin and metrics, infrastructure < S$50/month; traffic/SLO and cost scope open |
| D-006 | Confirmed / details open | Inclusive max(S$1, 9% gross half-up cents), min S$10 order, initial configurable S$500 maximum with reviewed exceptions; traveller bears sourcing costs, exact net shown; platform absorbs processing costs. GST treatment and final price adjustment details open |
| D-007 | Confirmed direction / details open | Verified funding = acceptance before purchase; 15-minute pending reservation if needed, owner only; max30-day delivery, advance requests; explicit repricing consent. Full original-tender refund before valid traveller purchase receipt; after receipt 20% gross inclusive fee, 80% source-proportional refund; validity, rounding edge cases and legal exceptions require review |
| D-008/009 | Confirmed direction / details open | Sequential: actual delivery report, immediate prompt/day 3/day 6 reminders, eligible auto-confirm day 7 if silent; manual/auto confirmation starts separate 7×24h dispute period. No early release; open disputes/evidence exceptions block; early disputes allowed. UTC half-open deadlines proposed; evidence, no-show, delayed jobs/appeal rules open |
| D-010 | Direct-charge design approved / external and technical BLOCK | Stripe Connect direct charges, Stripe-managed pricing/risk preferred if eligible, hosted onboarding and controlled weekly manual payout. Merchant of record traveller subject to contract/counsel. Exact stable account configuration, exclusive payout control, platform-initiated full/partial refunds, verified shortfall funding, account lifecycle, 44+day retention/dispute exceptions, late refunds, pricing/reserve and regulatory clearance mandatory. See direct-charge-acceptance-v0.11.md |
| D-011 | External BLOCK | Food gated; configurable eligible categories/corridors. Traveller bears lawful import costs and declares as required; importer of record, restrictions/crew eligibility need clearance |
| D-012 | Confirmed / details open | Sparse searchable parent/variant catalogue, user confirmed enrichment; MSRP optional/nonbinding, receipt mandatory reviewed exception; uploader/staff access, private extracted prices; retention and source rights open |
| D-013 | Confirmed removal / external BLOCK for payments | No customer-money or earnings wallet, top-ups, P2P, withdrawals or stored-value refund; original-method monetary refunds, restricted platform-funded discounts only; settlement history not spendable. Q121 supersedes Q101/102/115 |
| D-014 | Confirmed direction / external BLOCK | S$10 referee at eligible registration, S$10 referrer pending on first paid >=S$50 gross order with some customer-origin funds, unlock after successful completion/dispute clearance; cap 15; 180-day grant expiry. Stack on gross >=S$50 up to 100%; no cash conversion; S$500 cumulative committed face-value tranches, pause new enrolments and honour existing commitments. Off until funding/legal/abuse controls approved |
| D-015 | Confirmed direction | Competing full-quantity offers, one active funded order. Traveller cancellation tracks rate, full applicable original-tender refund and eligible request reopens unfunded. Replacement requires fresh agreement and verified funding. No funded rematching, reuse or reassigning old charge in MVP. |
| D-016 | Confirmed / details open | Blind stars/text, in-app messaging, six reputation signals with minimum sample; deadline/thresholds/moderation open |
| D-017 | Confirmed | Manual trips, opt-in permitted partner import later including both directions |
| D-018 | Delegated | Cost-first GCP Singapore serverless PWA, Firestore instead of fixed Cloud SQL for pilot; ADR review, cost and transaction gates |
| D-019 | Confirmed | Feature PRs to dev, dev→stg→prod, no main deployment, prod human approval; bootstrap not executed |
| D-020 | Confirmed / details open | Google, 18+, KYC, admin RBAC, welcome; provider terms/communications vendor open |
| D-021 | Confirmed | Agent routine ops, diagnostics, test/review/PR and metrics proposals; human material policy, exceptional financial decisions, spending and production approval |
| D-022 | Superseded / removed | Traveller earnings credits and +2% incentive removed; weekly eligible cash payouts only |
| E-001 | Provisional | Minimal runtime unchanged |
| E-002 | Confirmed | Same repo and environment-bound GHA, no live deployment authorized |

Remaining payment gates: written Stripe contract/technical approval and SG counsel opinion; exact direct-charge account configuration, pricing and reserve; all mandatory payout/refund/lifecycle/shortfall/late-refund tests; approved payment and promotional terms, rounding/expiry/exception details. Q122 payment method exclusivity and Q124 future reauthorisation not explicitly approved. Future card auth on offer selection/capture at valid purchase receipt deferred. No new financial or production authority.
