## ADDED Requirements

### Requirement: REF-001 Referral rewards
The system SHALL grant eligible referee S$10 spend-only at registration and referrer S$10 after first qualifying completed transaction, max five qualifying referees and 180-day expiry.

#### Scenario: Completion
- **WHEN** first qualifying order completes
- **THEN** referrer grant once

#### Scenario: Cap reached
- **WHEN** sixth referee qualifies
- **THEN** no sixth referrer grant

#### Scenario: Replay
- **WHEN** qualifying event repeated
- **THEN** no duplicate credit or notification

### Requirement: REF-002 Referral communication
The system SHALL send deduplicated success notification after confirmed grant.

#### Scenario: Grant fails
- **WHEN** reward unsuccessful
- **THEN** no success email

### Requirement: REF-003 Registration grant and expiry
The system SHALL grant eligible registration credit once separately from referrer award and enforce configurable qualifying threshold, expiry and approved abuse controls.

#### Scenario: Registration replay
- **WHEN** registration event repeats
- **THEN** at most one S$10 referee credit

#### Scenario: Expired
- **WHEN** credit expires
- **THEN** cannot fund new purchase

#### Scenario: Below threshold
- **WHEN** order below qualifying threshold
- **THEN** no referrer reward for that order

### Requirement: REF-004 Referral redemption minimum
The system SHALL permit redemption of a S$10 referral credit only against an eligible order with agreed gross total of at least S$50. Stacking and permitted remaining tender are subject to approved wallet rules.

#### Scenario: Below redemption minimum
- **WHEN** a shopper attempts to redeem S$10 referral credit against S$49.99
- **THEN** redemption is denied without debiting credit

#### Scenario: Boundary
- **WHEN** a shopper applies a valid S$10 referral credit to an eligible S$50 order
- **THEN** value threshold passes and S$40 remains due in permitted tender, subject to other approved rules
