## ADDED Requirements

### Requirement: REF-001 Referral rewards
The system SHALL grant eligible referee S$10 promotional discount at registration and record S$10 pending referrer reward on first qualifying funded order >=S$50 gross with actual customer-origin payment; unlock only after successful completion and dispute clearance. Cap 15 qualifying referrals per referrer.
#### Scenario: Qualification
- **WHEN** referee funds first qualifying order with actual customer payment
- **THEN** pending reward recorded once and not spendable until clearance
#### Scenario: Cancelled order
- **WHEN** qualifying order cancelled or invalid
- **THEN** reward not unlocked; legitimate later qualification evaluated under approved rules
#### Scenario: Cap
- **WHEN** sixteenth referee qualifies
- **THEN** no sixteenth grant
#### Scenario: Fully promotional order
- **WHEN** order paid only by promotions
- **THEN** no new referrer reward

### Requirement: REF-002 Referral communication
The system SHALL send deduplicated accurate pending/unlocked notifications.
#### Scenario: Grant fails
- **WHEN** reward unsuccessful
- **THEN** no success notification

### Requirement: REF-003 Registration grant and expiry
The system SHALL issue eligible registration discount once and enforce 180-day expiry per issued grant and approved anti-abuse rules.
#### Scenario: Replay
- **WHEN** registration repeats
- **THEN** at most one S$10 grant
#### Scenario: Expired
- **WHEN** grant expires
- **THEN** unavailable for new purchase

### Requirement: REF-004 Referral redemption minimum
The system SHALL permit stacking eligible promotional discounts up to gross on orders >=S$50; no fixed cash co-pay for redemption, subject to valid provider minimum and approved subsidy funding. No cash conversion.
#### Scenario: Below threshold
- **WHEN** gross S$49.99
- **THEN** redemption denied
#### Scenario: Full stacking
- **WHEN** S$50 order uses five eligible S$10 grants and sufficient platform funding
- **THEN** no shopper collection, S$45.50 seller cash obligation funded by platform
#### Scenario: Concurrency
- **WHEN** two checkouts reserve same S$10 grant
- **THEN** no more than S$10 reserved

### Requirement: REF-005 Committed campaign budget
The system SHALL reserve promised promotional face value atomically within approved cumulative S$500 tranches; pause new enrolment at boundary, honour existing obligations, no autonomous increase.
#### Scenario: First tranche
- **WHEN** 25 pairs have S$20 each committed
- **THEN** next pair blocked until approved tranche expansion
#### Scenario: Existing promise
- **WHEN** campaign paused and admitted reward becomes eligible
- **THEN** existing legitimate commitment honoured once
