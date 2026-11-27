## ADDED Requirements

### Requirement: DSP-001 Seven-day dispute window
The system SHALL accept eligible disputes during confirmation and within the separate seven-day clock after recorded receipt confirmation and freeze settlement until authorized resolution.

#### Scenario: Timely dispute
- **WHEN** participant raises dispute before the dispute deadline (including before confirmation)
- **THEN** block release, preserve evidence

#### Scenario: Boundary race
- **WHEN** dispute and release concurrent at deadline
- **THEN** approved timing applied atomically and audited

### Requirement: DSP-002 AI-assisted human resolution
The system SHALL present evidence and AI recommendations, authorized human alone approves exceptional financial outcomes, compensation and account restrictions.

#### Scenario: AI recommendation
- **WHEN** AI suggests partial refund
- **THEN** no refund until authorized approval

### Requirement: REV-001 Verified two-way reviews
The system SHALL allow one star/text review per participant per completed order, blind until both submit or deadline.

#### Scenario: Unrelated
- **WHEN** non-participant submits review
- **THEN** reject

#### Scenario: Duplicate
- **WHEN** second review same participant/order
- **THEN** reject

### Requirement: REV-002 Reputation and protected communication
The system SHALL provide in-app messaging without automatic contact disclosure and six verified reputation signals: completed count, rating, on-time, cancellation, identity, experienced badge; approved sample thresholds.

#### Scenario: Sparse history
- **WHEN** insufficient sample
- **THEN** rates suppressed or marked insufficient

### Requirement: DSP-003 Sequential confirmation and dispute deadlines
The system SHALL start the seven-day dispute window at recorded manual or automatic receipt confirmation and permit disputes before confirmation.

#### Scenario: Dispute after auto-confirm
- **WHEN** shopper disputes on day 10 after report auto-confirmed day 7
- **THEN** dispute is timely and settlement blocked

#### Scenario: Delayed auto-confirm job
- **WHEN** the day 7 job records valid confirmation on day 8
- **THEN** the separate dispute clock starts day 8 and is not backdated
