# Logical domain model (proposed, not physical schema)

User (Google subject, locale, display currency) can act in either role; provider-connected account and KYC status separate; operator roles are privileged.
Product (canonical identity, brand, variant, category, attributes, image references) has many regional listings (country/region, retailer, source link, exclusivity claim, confidence) and reference price observations (amount, currency, time, source, tax inclusion). Product identities are distinct from user listings and request snapshots.
Request (shopper, product/variant snapshot, source region, destination, quantity, willingness-to-pay amount/currency and price basis, deadline/window, expiry minimum if permitted, moderation state) has many Offers.
Trip (traveller, origin, destinations, arrival/departure dates, destination for handover, visibility) can match many requests. Offer (traveller, trip optional, proposed return/delivery dates, amount/currency, expiry, quote version) belongs to a request.
Order is an immutable accepted commercial snapshot of request + offer + quote, exactly one per request in proposed MVP. Track fulfilment, payment, dispute and settlement independently. No self-trading.
PaymentAttempt/ProviderEvent/Transfer/Refund/Payout track external identifiers, amount/currency, timestamps and idempotency. Internal journal records obligations and reconciliation, not a customer cash wallet. Money represented in integer minor units; FX decimal rates with explicit direction and timestamp.
Receipt (order, private object, uploader, review status, extracted data and provenance) feeds restricted PriceObservation; a receipt is evidence, not proof of authenticity by itself.
Handover (order, mode, proposed/verified time, evidence, parties); Dispute (reason, evidence, status, operator resolution, audit); Review (order, reviewer, subject, rating/text, moderation); Referral (referrer, referee, qualification order, reward status); PromotionalCredit (separate from payout; disabled until policy approval).
Event (versioned type, opaque identifiers, time, environment, correlation ID) feeds aggregate metrics; do not put PII, receipts, precise itinerary or secrets into agent analytics.

## Proposed state boundaries
Request: draft → pending_review → open → reserved → closed; expired/cancelled terminal paths. Reservation expires or reopens only per policy; accepted terms cannot be mutated.
Offer: submitted → accepted/rejected/withdrawn/expired. Atomic compare-and-set prevents double acceptance.
Order fulfillment: awaiting_funding → funded → purchased → handover_pending → delivered → completed; cancelled/failed/disputed paths controlled by policy.
Payment: pending → confirmed → refunded/partially_refunded or failed; settlement: not_eligible → eligible → transfer_pending → transferred → payout_pending → paid or failed/reversed; only authoritative provider events confirm external status.
Dispute: none → open → investigating → resolved (outcome and audit). Open disputes block eligibility. Verified delivery timestamp, not proposed date, starts 7-day interval; scheduler and dispute creation serialize around deadline.
Do not equate "funded" with payout; "completed" requires terminal order outcome and settlement rule as approved. Exact cancellation/partial/refund paths remain blocked D-007–D-010.
