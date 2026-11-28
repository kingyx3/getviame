## ADDED Requirements

### Requirement: PAY-001 Funded commitment
The system SHALL accept an offer only once verified provider funding and any approved platform promotion backing cover the agreed total; no traveller purchase before funded.
#### Scenario: Pending checkout
- **WHEN** checkout redirect occurs without verified confirmation
- **THEN** order remains awaiting funding and no binding acceptance
#### Scenario: Confirmed
- **WHEN** matching signed provider success and eligible funding verified
- **THEN** request becomes funded once
#### Scenario: Late duplicate payment
- **WHEN** competing payment succeeds after reservation expired or another offer funded
- **THEN** no second acceptance; reconcile and return surplus through approved refund process

### Requirement: PAY-002 Audit and reconcile
The system SHALL maintain immutable SGD cents, tender allocations, original payment dates, fees, provider IDs, balance journal, source-specific promotion entries and reconciliation; no customer-money wallets or arbitrary transfers.
#### Scenario: Replay
- **WHEN** provider event replayed
- **THEN** no duplicate movement
#### Scenario: Mismatch
- **WHEN** provider totals disagree
- **THEN** affected settlement blocked and operator alerted without suppressing owed refunds

### Requirement: PAY-003 Provider-gated settlement
The system SHALL release normal traveller payment only after separate seven-day dispute deadline following physical delivery confirmation/auto-confirmation, no open dispute, eligibility and provider gates; enforce permitted retention/refund horizon from original payment.
#### Scenario: Window open
- **WHEN** confirmation has not occurred or fewer than seven days since confirmation
- **THEN** no release
#### Scenario: Open dispute near deadline
- **WHEN** dispute unresolved and provider retention deadline approaches
- **THEN** no automatic seller release; alert human for approved exception, stop new incompatible commitments
#### Scenario: Eligible
- **WHEN** deadline elapsed and all gates pass
- **THEN** one idempotent allocation/transfer and eligible weekly payout tracked separately

### Requirement: PAY-004 Refund exceptions
The system SHALL refund monetary amounts to original method, restore eligible promotional tender separately, record provider outcome, preserve mandatory refund rights beyond native API period and prohibit wallet substitution.
#### Scenario: Pending
- **WHEN** Stripe refund asynchronous
- **THEN** show pending, not refunded
#### Scenario: Expired or failed
- **WHEN** original refund fails or provider window elapsed
- **THEN** approved human-reviewed return-to-verified-payer process, no duplicate refund or arbitrary recipient
#### Scenario: Mixed tender
- **WHEN** eligible S$100 order funded S$70 cash and S$30 promotion cancelled before receipt
- **THEN** S$70 monetary refund and eligible S$30 promo restoration, never S$100 cash refund

### Requirement: PAY-005 SGD-only fee and cost allocation
The system SHALL use SGD minor units only, fee max(100 cents, half-up 9% gross), minimum S$10 order, no FX and platform bears ordinary processor fees.
#### Scenario: Other currency
- **WHEN** collection or payout requires conversion
- **THEN** blocked in launch corridor
#### Scenario: Minimum job
- **WHEN** S$10 normal order completed
- **THEN** gross fee S$1 and traveller cash obligation S$9 before sourcing costs
#### Scenario: Typical job
- **WHEN** S$100 normal order completed
- **THEN** gross fee S$9, traveller S$91, provider fees borne separately by platform

### Requirement: PAY-006 Cancellation and funded rematching
The system SHALL track traveller cancellation and reopen eligible request; full applicable refund or explicit shopper-consented, provider-approved reuse only against same request until original request expiry or earlier legal/provider deadline, with new agreement, price consent and original clock preserved.
#### Scenario: Traveller cancels
- **WHEN** cancelled and no valid rematch consent
- **THEN** full applicable refund, historical order retained; reopen if eligible
#### Scenario: Replacement
- **WHEN** shopper accepts eligible replacement with valid consent and remaining funding horizon
- **THEN** allocate only once to new immutable agreement and adjust price by consent, no second charge on reused principal
#### Scenario: Deadline or withdrawal
- **WHEN** consent withdrawn, request expires, or approved retention limit reached first
- **THEN** promptly initiate applicable refund; open eligible request may remain unfunded
#### Scenario: Insufficient horizon
- **WHEN** new agreement cannot fit original payment's permitted lifecycle
- **THEN** do not reuse funds; follow approved refund/fresh-payment exception

### Requirement: PAY-007 Receipt-triggered cancellation compensation
The system SHALL disclose 20% of gross cancellation penalty inclusive platform fee after valid traveller purchase receipt submission (not physical delivery confirmation); before receipt no penalty; preserve legal and evidence exceptions and source-proportional refund.
#### Scenario: Before receipt
- **WHEN** shopper cancels before eligible receipt
- **THEN** no compensation or fee, full applicable original-method refund
#### Scenario: After receipt
- **WHEN** shopper cancels valid S$100 fully cash-funded order after eligible receipt under approved terms
- **THEN** refund S$80, S$11 traveller compensation and S$9 gross platform fee before processor costs
#### Scenario: Invalid or late receipt
- **WHEN** receipt invalid or submitted after effective cancellation
- **THEN** no retrospective penalty; contested evidence reviewed

### Requirement: PAY-008 Weekly cash payouts
The system SHALL aggregate eligible obligations by traveller into weekly SGD bank payouts using approved provider controls, excluding disputed, ineligible and refunded principal.
#### Scenario: Batch
- **WHEN** multiple eligible obligations for same traveller are due
- **THEN** one weekly payout if supported; amount equals sum, actual status reconciled
#### Scenario: Disputed or failed
- **WHEN** obligation is disputed or payout fails
- **THEN** do not mark paid; exclude ineligible amount and reconcile failure without duplicate movement

### Requirement: PAY-009 External clearance and financial safeguards
The system SHALL default live collection, rematching and promotional funding off until applicable written provider/counsel approval, verified cost/funding model, approved configuration and tests; keep refunds and existing obligations operational when new commitments paused.
#### Scenario: Missing approval
- **WHEN** user attempts live collection or rematch without required signoff
- **THEN** unavailable and no funds taken or reused
#### Scenario: Reserve breached
- **WHEN** platform-funded cancellation loss reserve falls below approved threshold
- **THEN** alert and apply approved admission controls, never deny owed refunds
