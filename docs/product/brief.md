# GetViaMe product brief v0.1

Status: product direction supplied by owner on 2026-11-25; detailed requirements proposed for review. No authorization to implement features yet.

## Vision
Cross-border marketplace connecting shoppers seeking overseas products (especially region-exclusive items) to travellers who can buy and deliver them. Frequent travellers, air crew, business travellers and holidaymakers can monetise existing journeys. Adapt useful Airfrov patterns without assuming its historical policies are valid today.

## Core journeys
1. Shopper searches or creates a product, attaches images/details, source country/region and retailer/location hints. Automated sanity checks (deterministic rules plus optional APIs/AI) assess quality and policy eligibility. Product-specific information is reused independently of requests. Shopper specifies quantity, willingness to pay, destination, ideal delivery dates and minimum acceptable expiry for food where legally enabled.
2. Traveller browses requests or adds trip details for matching. Sees agreed potential receipt in home currency, 8% fee and FX breakdown, reference MSRP and estimated earnings accounting for purchase costs and tax uncertainty. Proposes fulfilment/return dates; shopper accepts.
3. Recommended (pending D-006–D-010): funded order before traveller buys; receipt uploaded; agreed meetup or delivery; verified handover opens seven-day dispute window. Settlement only after expiry and no unresolved dispute; refund exceptions and provider rules apply.
4. Both parties exchange verified transaction reviews after success.
5. Discovery by country, “I want this too” repeat demand; referral and welcome comms. Longer-term: cash-redeemable/spendable points and itinerary integrations such as Wanderlog, including outbound and return opportunities.

## Owner-stated preferences
Google-only authentication; GCP; Stripe Connect and PayNow; 8% fee of price paid intended to cover processor fees; GitHub Actions deploying dev/stg/prod on merge to corresponding branches. Environment configuration via .env.dev/.env.stg/.env.prod (non-secret only); environment-scoped GitHub secrets. Referral $10 equivalent each, referrer rewarded after referee's first completed transaction, max five qualifying referees per referrer; referee trigger/conditions unresolved. Seven days from delivery/meetup for disputes, then traveller credited and ordinary refunds closed (subject to applicable law and exceptions). Receipt-derived retail prices private to platform until approved otherwise. Metrics available to agents for continuous improvement.

## Proposed initial scope, not approval
Singapore-first destination/payment/settlement, SGD, responsive web, one account for both roles, one traveller per order, non-food lawful goods, manual trip entry, mutual meetup confirmation, provider-managed funds, operations review queue. No internal cash wallet, food sale, delivery provider integration, itinerary partner integration, or global payout rollout until respective gates clear. Country featured discovery, demand cloning, referral and comms can follow core transaction pilot.

## Outcomes
Increase completed legitimate orders per active marketplace cohort, match speed and repeat usage while guarding dispute rates, fraud, settlement accuracy and contribution margin. No targets until pilot baseline. See metrics.md, decisions.md and roadmap.md.
