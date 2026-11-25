## ADDED Requirements

### Requirement: DSP-001 Seven-day dispute window
The system SHALL accept eligible disputes within seven days of verified handover and freeze settlement until authorized resolution.

#### Scenario: Timely dispute
- **WHEN** a participant raises a dispute within the approved window
- **THEN** settlement is blocked and evidence is preserved

#### Scenario: Boundary race
- **WHEN** a dispute and release are processed concurrently at the deadline
- **THEN** the approved timing rule is applied atomically with an audit trail

### Requirement: REV-001 Verified two-way reviews
The system SHALL allow each participant to review the other once for a successfully completed order.

#### Scenario: Unrelated user
- **WHEN** a non-participant submits a review
- **THEN** the review is rejected

#### Scenario: Duplicate review
- **WHEN** a participant submits a second review for the same subject/order
- **THEN** no duplicate review is created
