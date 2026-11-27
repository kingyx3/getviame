# Enable individual SGD credit wallets

Status: DRAFT / NOT APPROVED FOR IMPLEMENTATION. Owner explicitly wants per-user credit wallets and elective credit earnings incentive, and asks about credit refunds to reduce repeat processing fees.

## Why
Allow shoppers and travellers to recycle spending and reduce unnecessary repeat collection charges while preserving refund rights and auditable liabilities.

## Scope
SGD-only wallet accounts, source-specific credit accounting, balance view and reservation/redemption, optional refund election, optional traveller earnings credit election with +2% from platform fee. No live custody before written legal/provider clearance. R-005 prerequisite and integration with R-006 payments/referral; D-010/013/014/015/022. No arbitrary top-up, peer transfer, cash redemption or expiry of principal without separate approved policy.

## Capabilities
### New Capabilities
- `sgd-credit-wallets`: per-user source-specific balances, funding and settlement elections.
### Modified Capabilities
None (integration contract with parallel proposed payments and referral deltas; coordinate before implementation).

## Impact
Requires approved licensed issuer/custody, reconciled backing, provider settlement/refund compatibility, anti-abuse, explicit consent and audited monetary integrity. No production or real-fund changes authorized.
