## ADDED Requirements

### Requirement: PAY-001 Funded commitment
The system SHALL require confirmed eligible provider payment before traveller buys.

#### Scenario: Pending
- **WHEN** checkout redirect without verified confirmation
- **THEN** order remains awaiting funding

#### Scenario: Verified
- **WHEN** signed matching success event received
- **THEN** funded once

### Requirement: PAY-002 Audit and reconcile
The system SHALL record immutable SGD amounts, fees, provider IDs and balanced journal/reconciliation without customer spendable funds before clearance.

#### Scenario: Replay
- **WHEN** provider event replayed
- **THEN** no duplicate money movement

#### Scenario: Mismatch
- **WHEN** provider totals disagree
- **THEN** settlement blocked, operator alerted

### Requirement: PAY-003 Provider-gated settlement
The system SHALL release only after approved seven-day deadline and valid receipt confirmation/auto-confirmation, no open dispute, eligibility and provider gates.

#### Scenario: Window open
- **WHEN** fewer than seven days since approved clock start
- **THEN** no release

#### Scenario: Open dispute
- **WHEN** window expires with unresolved dispute
- **THEN** settlement blocked

#### Scenario: Eligible
- **WHEN** deadline elapsed, confirmation valid and all gates pass
- **THEN** one idempotent transfer; payout tracked separately

### Requirement: PAY-004 Refund exceptions
The system SHALL apply approved cancellation, dispute and mandatory refund policy with provider outcomes separate.

#### Scenario: Pending refund
- **WHEN** refund asynchronous
- **THEN** not falsely shown successful

#### Scenario: Window expired
- **WHEN** ordinary refund request after deadline
- **THEN** closure rule applies without suppressing law/fraud/provider exceptions

### Requirement: PAY-005 SGD-only contract and no payment FX
The system SHALL use agreed SGD only, inclusive fee and no Stripe FX; cash wallet gated.

#### Scenario: Other currency
- **WHEN** payment/payout requires conversion
- **THEN** blocked in launch corridor

#### Scenario: Minimum job
- **WHEN** eligible S$10 order funded
- **THEN** gross fee S$0.80, traveller obligation S$9.20 before costs

### Requirement: PAY-006 Cancellation and reopening
The system SHALL allow free shopper cancellation before purchase, post-purchase consent/dispute and only approved disclosed penalty; traveller cancellation records rate and reopens eligible job without duplicating obligations.

#### Scenario: Traveller cancels
- **WHEN** accepted order unfulfilled and cancelled
- **THEN** record cancellation once, resolve original financial state and reopen per approved safety rules

#### Scenario: Penalty unapproved
- **WHEN** no applicable approved penalty
- **THEN** no charge

#### Scenario: New traveller
- **WHEN** replacement offer accepted
- **THEN** new immutable agreement; no silent reuse of prior funds
