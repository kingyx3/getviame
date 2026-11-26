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
The system SHALL release only after the separate seven-day dispute deadline following actual receipt confirmation/auto-confirmation, no open dispute, eligibility and provider gates.

#### Scenario: Window open
- **WHEN** receipt confirmation has not occurred or fewer than seven days have passed since confirmation
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
The system SHALL allow penalty-free shopper cancellation before eligible receipt submission, then 20% compensation payable to traveller under approved disclosed terms and exceptions; traveller cancellation records rate and reopens eligible job without duplicating obligations.

#### Scenario: Traveller cancels
- **WHEN** accepted order unfulfilled and cancelled
- **THEN** record cancellation once, resolve original financial state and reopen per approved safety rules

#### Scenario: Penalty unapproved
- **WHEN** no eligible receipt or applicable approved penalty
- **THEN** no charge

#### Scenario: New traveller
- **WHEN** replacement offer accepted
- **THEN** new immutable agreement; no silent reuse of prior funds

### Requirement: PAY-007 Receipt-triggered cancellation compensation
The system SHALL disclose the 20% penalty to both parties before commitment; no penalty applies before eligible traveller receipt submission and thereafter compensation is payable to traveller under approved terms and legal/dispute exceptions.

#### Scenario: Before receipt
- **WHEN** shopper cancels before eligible receipt submission
- **THEN** no cancellation penalty is charged

#### Scenario: After receipt
- **WHEN** shopper cancels after eligible receipt submission under approved terms
- **THEN** 20% of approved penalty base is allocated to traveller and refundable amount calculated with audit breakdown

#### Scenario: Invalid or late receipt
- **WHEN** a receipt is invalid or submitted after effective cancellation
- **THEN** no retrospective penalty applies and disputed evidence enters review

### Requirement: PAY-008 Scheduled cash payouts
The system SHALL accumulate eligible cash obligations and schedule provider-supported SGD payouts, excluding credit-elected obligations.

#### Scenario: Payout batch
- **WHEN** eligible cash obligations reach approved schedule
- **THEN** authorized provider payout instructions are idempotent and actual status reconciled

#### Scenario: Disputed or credit-elected
- **WHEN** obligation is under dispute or settled into credits
- **THEN** it is excluded from cash payout batch
