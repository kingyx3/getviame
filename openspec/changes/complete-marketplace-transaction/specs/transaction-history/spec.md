## ADDED Requirements

### Requirement: HIST-001 Role-scoped order and financial history
The system SHALL provide shopper/traveller timeline of contract versions, payment, receipt status, cancellation, refund, discount grant/redemption/expiry/restoration, dispute and settlement with amounts, status, dates and references; no private sourcing cost to shopper, no spendable settlement balance; finance staff reconcile immutable provider-linked journal.

#### Scenario: Pending
- **WHEN** refund API accepted but not final
- **THEN** display pending, not paid/refunded

#### Scenario: Other participant
- **WHEN** shopper requests private purchase cost
- **THEN** deny

#### Scenario: Reversal
- **WHEN** provider reverses payout
- **THEN** append correction and status history, preserve prior events

#### Scenario: Balance
- **WHEN** traveller views history
- **THEN** no spendable or withdrawable wallet
