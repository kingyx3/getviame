# Complete funded marketplace transaction
Status: DRAFT / NOT APPROVED FOR IMPLEMENTATION. Owner direction through v0.9. External gates in docs/product/stripe-connect-launch-gates-v0.9.md and decisions.md.
## Why
Secure SGD order payment, fulfilment and settlement without a customer-money wallet.
## Scope and dependencies
R-005; D-006–012/013/015/016/020. Stripe Connect selected, PayNow-first proposed, actual charge type and custody contract blocked. Confirmed funding before purchase; receipt-triggered penalty, original-tender refunds, consent-based funded rematch, sequential delivery/dispute clocks, weekly cash payouts, auditable fees/reconciliation. Referrals separately gated in grow-marketplace. No stored-value wallet, deferred cards/PayLah, no FX or additional provider.
## Capabilities
### New Capabilities
- `marketplace-payments`: marketplace payments
- `fulfilment-evidence`: fulfilment evidence
- `disputes-reviews`: disputes reviews
### Modified Capabilities
None.
## Impact
Proposed behavior only. Existing application unchanged. No live provisioning or product implementation authorized.
