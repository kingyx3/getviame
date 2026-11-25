# Decision register — v0.1

Owner direction 2026-11-25 establishes product purpose, primary journey and preferences below; detailed changes remain DRAFT. Record explicit approval with revision, date and scope before implementation. Recommendations are not approvals.

| ID | Topic | Status | Proposed answer / clarification |
| --- | --- | --- | --- |
| D-001 | Purpose / audience | Owner supplied | Overseas shopping via existing travellers; frequent travellers and shoppers |
| D-002 | Primary journey | Owner supplied | Request → offer with dates → shopper acceptance → handover → 7-day dispute window → settlement → reviews |
| D-003 | MVP scope | Open | Singapore-first, lawful non-food goods, web, meetup, one traveller per request, no wallet; confirm |
| D-004 | Launch geography and roles | Open | Singapore destination, SGD shopper payments and SG-eligible traveller payouts; global source locations; any account can be both roles; confirm supported traveller residency |
| D-005 | Operations and success | Open | Admin-assisted moderation/disputes initially; budget, target traffic, launch corridors and performance SLOs to confirm |
| D-006 | 8% fee incidence and base | Blocking | Recommend 8% deducted from total agreed item price (S$100 paid → S$92 traveller before cost), vs 8% added to traveller agreed amount (S$108 shopper); clarify delivery/tax treatment, rounding/refunds/fee GST and whether extra fees are ever permitted |
| D-007 | Funding and contract | Blocking | Full PayNow payment after shopper accepts offer, before purchase; traveller fronts retail cost; define payment timeout, max lead time, stock failure, changed price, cancellation, partial fulfilment |
| D-008 | Handover | Blocking | Mutual in-app confirmation / one-time code and time-stamped evidence; meetup MVP vs courier; define no-show, refusal, confirmation timeout and disputed delivery clock |
| D-009 | Dispute/refund rules | Blocking | 7×24 hours from verified delivery timestamp, freeze release on open dispute, operations adjudication; clarify early acceptance, outcomes, fault, fee refund, legal/fraud exceptions and appeals |
| D-010 | Payment provider and compliance | Blocking | Confirm Stripe Connect charge type, merchant of record, KYC, liable party, funding/transfer timing, provider limits, refund deadline and settlement corridors with Stripe and counsel; no claim of escrow |
| D-011 | Food / controlled goods | Blocking | Exclude from live MVP until jurisdiction-specific legal import/sale and operational clearance. Clarify permitted categories, importer of record, customs/tax cost allocation, passenger/crew restrictions |
| D-012 | Product and receipt policy | Open | Separate catalogue/requests; provenance-tagged MSRP; AI suggests not certifies; private originals and extracted prices, authorized staff only (uploader can submit their own evidence); confirm receipt required, redaction, retention, sources and image rights |
| D-013 | Points and balances | Blocking | Separate provider payout status from promotional credit; defer withdrawable/spendable stored value until written legal/provider clearance. Confirm whether points represent earnings, rebates, purchased funds or all three |
| D-014 | Referral | Open | $10 SGD-equivalent each, first completed transaction and max 5 qualifying referrals per referrer. Recommend both rewarded after first undisputed settled order; confirm referee trigger, role eligibility, minimum spend, expiry, spend-only/cash and reversals |
| D-015 | Matching / offer terms | Open | One accepted full-quantity offer, fixed shopper ceiling, editable only before acceptance, deterministic country/date filter; confirm negotiation, counteroffers, partial quantities and multiple products |
| D-016 | Reviews and messaging | Open | Verified two-way 1–5 star reviews, blind until both submit or deadline; in-app order communication; confirm review deadline, moderation and contact reveal |
| D-017 | Travel planner integrations | Open | Manual trip first; explicit opt-in itinerary import through permitted APIs only; partner access and both-leg matching later |
| D-018 | Technical stack | Open | Proposed modular monolith on GCP Cloud Run + PostgreSQL Cloud SQL + Cloud Storage; TypeScript web stack to choose; confirm cost/region |
| D-019 | Branch and environment topology | Open | Proposed dev integration branch, stg promotion, prod promotion; main documentation baseline until migration; all deployment merges through PR; confirm whether main remains docs-only or becomes default dev |
| D-020 | Trust / onboarding | Open | Google auth only, provider KYC before accepting funded jobs, age/legal eligibility and terms, admin RBAC, welcome email; confirm age, identity verification and communications provider |
| E-001 | Temporary runtime | Provisional | Existing Node HTTP scaffold remains unchanged |
| E-002 | Source control | Owner direction | Specs/code same GitHub repo; environment deployment via GHA. No live deployment authorized yet |

Decision record: ID; date; status; question; options and trade-offs; resolution; approver and revision; affected changes and follow-up. Never substitute an agent recommendation for approval.
