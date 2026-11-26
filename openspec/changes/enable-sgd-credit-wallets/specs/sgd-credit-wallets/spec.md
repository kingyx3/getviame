## ADDED Requirements

### Requirement: WAL-001 Individual SGD balances and source restrictions
The system SHALL maintain per-user SGD credit balances with separate source lots for refund principal, earnings principal, earnings bonus and promotional credits, and separate cash payable. Real-fund issuance and redemption SHALL remain disabled until an approved custody and legal/provider model exists.

#### Scenario: Before clearance
- **WHEN** a user attempts to use a real-money wallet without approved model
- **THEN** the operation is unavailable and no funds are taken or issued

#### Scenario: Source-specific balance
- **WHEN** a user has referral and refund credits
- **THEN** the system distinguishes available, reserved, pending and applicable restrictions and never applies referral expiry to refund principal

### Requirement: WAL-002 Atomic credit reservation and redemption
The system SHALL reserve and redeem eligible credit against an accepted order atomically, record source and remaining tender, and reconcile ledger/backing; no negative balance or unauthorized transfer.

#### Scenario: Concurrent redemption
- **WHEN** two orders attempt to reserve the same S$10 credit
- **THEN** no more than S$10 is reserved across both

#### Scenario: Failed checkout
- **WHEN** remaining tender fails and approved checkout reservation expires
- **THEN** eligible reserved credit is released exactly once

#### Scenario: Reconciliation mismatch
- **WHEN** wallet liabilities and approved backing do not reconcile
- **THEN** affected money movements are blocked and an operator alerted

### Requirement: WAL-003 Optional eligible credit refunds
The system SHALL offer voluntary credit refunds only with approved legal/provider model and explicit informed consent; otherwise honor the original-method refund under applicable policy. Credit issuance is distinct from provider refund status and cannot duplicate principal.

#### Scenario: Traveller cancels
- **WHEN** an eligible funded order is cancelled by traveller and the shopper explicitly elects approved credit refund
- **THEN** refundable principal is credited exactly once, the job can reopen per policy, and no duplicate provider refund is initiated

#### Scenario: Original-method choice
- **WHEN** shopper chooses original-method refund or credit refund is not permitted
- **THEN** the appropriate provider refund is processed and no duplicate wallet credit is issued

#### Scenario: Promotional tender
- **WHEN** an order funded in part with referral credit is refunded
- **THEN** promotional value is restored or reversed under approved source rules, not paid as cash

### Requirement: WAL-004 Elective traveller earnings credits
The system SHALL allow an eligible traveller to elect platform credits with an approved +2% incentive funded by platform fee rather than scheduled cash payout, only after settlement eligibility. The election terms and amounts SHALL be disclosed and auditable.

#### Scenario: Illustrative gross-basis election pending D-022 approval
- **WHEN** an eligible S$100 order reaches settlement and gross-basis 2 percentage point policy is approved and elected
- **THEN** S$92 earned principal plus S$2 bonus are credited once, and no S$92 cash payout is initiated

#### Scenario: Cash election
- **WHEN** traveller chooses cash and order is eligible
- **THEN** cash obligation enters scheduled payout without bonus

#### Scenario: Open dispute
- **WHEN** an order has unresolved dispute or its sequential dispute window has not elapsed
- **THEN** neither earned credits nor cash settlement is released

### Requirement: WAL-005 Credit tender and fee accounting
The system SHALL preserve original processing fees as costs, calculate external payment due from approved credit use, and distinguish issued credit liabilities from realized revenue or savings.

#### Scenario: Credit use
- **WHEN** an eligible S$100 order uses S$80 permitted credit and S$20 PayNow
- **THEN** the system requests only S$20 external collection subject to approved tender model and retains the separate credit obligation and fee records
