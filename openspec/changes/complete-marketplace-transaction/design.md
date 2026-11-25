# Design — Complete funded marketplace transaction

Draft; decisions not approved. Refer to domain-model.md, architecture.md, metrics.md and decision register.

Candidate PayNow Checkout with separate charges/transfers subject to Stripe approval, full payment after accepted offer before purchase. PayNow has no manual capture; 90-day refund submission limit and asynchronous outcomes; Stripe is not escrow. Provider KYC and account eligibility before funded commitment. Authoritative signed events, idempotency, ledger/reconciliation, explicit refund/reversal/payout failure states. Seven-day window begins at verified actual handover, server UTC; serialize dispute creation vs release. Block open disputes, failed evidence and missing payout eligibility. Private receipt original and derived prices not disclosed to parties by default (uploader's own submission handling to clarify). Receipt not conclusive authenticity; ops reviews. Meetup evidence proposed; courier later.
