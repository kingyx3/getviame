## ADDED Requirements

### Requirement: PAY-001 Funded commitment
The system SHALL require confirmed eligible provider payment before instructing a traveller to buy.

#### Scenario: Pending payment
- **WHEN** a checkout redirect returns without verified provider confirmation
- **THEN** the order remains awaiting funding

#### Scenario: Verified payment
- **WHEN** a signed matching success event is received
- **THEN** the order becomes funded exactly once

### Requirement: PAY-002 Audit and reconcile
The system SHALL record immutable agreed amounts, fee breakdown, provider IDs and reconciliation events without storing spendable customer funds.

#### Scenario: Duplicate webhook
- **WHEN** a provider event is replayed
- **THEN** no duplicate money movement occurs

#### Scenario: Mismatch
- **WHEN** provider totals disagree with recorded obligations
- **THEN** settlement is blocked and an operator is alerted

### Requirement: PAY-003 Provider-gated settlement
The system SHALL release eligible traveller amounts only after the seven-day dispute window and approved provider/legal gates, with open disputes blocking release.

#### Scenario: Window open
- **WHEN** fewer than seven days have elapsed since verified delivery
- **THEN** no release is initiated

#### Scenario: Dispute open
- **WHEN** the window expires with an unresolved dispute
- **THEN** settlement remains blocked

#### Scenario: Eligible release
- **WHEN** the window expires with no open dispute and all prerequisites pass
- **THEN** one idempotent transfer is initiated and payout status tracked separately

### Requirement: PAY-004 Refund exceptions
The system SHALL apply approved cancellation, dispute and mandatory refund policy while tracking provider refund outcomes separately.

#### Scenario: Refund pending
- **WHEN** provider refund is asynchronous
- **THEN** the order does not falsely show a successful refund

#### Scenario: Ordinary window expired
- **WHEN** a normal refund request arrives after the window
- **THEN** the approved closure policy applies without suppressing legal, fraud or provider exceptions
