# Complete funded marketplace transaction
Status: DRAFT / NOT APPROVED FOR IMPLEMENTATION. Owner direction through v0.12. External gates in docs/product/direct-charge-acceptance-v0.11.md and decisions.md.
## Why
Secure SGD order payment, fulfilment and settlement without a customer-money wallet.
## Scope and dependencies
R-005/006A; D-006–012/013/015/016/020. Stripe Connect direct charges selected for design, Stripe-managed pricing/risk preferred subject to verified stable configuration, PayNow-only MVP, actual contract and controls blocked. Confirmed funding before purchase; receipt-triggered penalty, original-tender refunds, unfunded reopening and fresh replacement payment, sequential delivery/dispute clocks, weekly cash payouts, auditable fees/reconciliation. Referrals separately gated in grow-marketplace. Mandatory acceptance criteria PAY-001–018 and direct-charge-acceptance-v0.11.md; no waiver or mock-only proof for provider control gates. No funded rematch or stored-value wallet, deferred cards/PayLah, no FX or additional provider.
## Capabilities
### New Capabilities
- `marketplace-payments`: marketplace payments
- `fulfilment-evidence`: fulfilment evidence
- `disputes-reviews`: disputes reviews
- `transaction-history`: role-scoped transaction history

### Modified Capabilities
None.
## Impact
Proposed behavior only. Existing application unchanged. No live provisioning or product implementation authorized.

R-006A authorised sandbox evaluation is a separate gate; no live funds. Apply AC-01–24 in the acceptance matrix (AC-17/23 promotional only); pilot and continuity requirements before live enablement.
