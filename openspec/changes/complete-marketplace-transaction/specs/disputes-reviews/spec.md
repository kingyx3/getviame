## ADDED Requirements

### Requirement: DSP-001 Seven-day dispute window
The system SHALL accept eligible disputes from funded acceptance, during confirmation and within the separate seven-day clock after recorded receipt confirmation and freeze settlement until authorized resolution.

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
The system SHALL allow one star/text review per participant per completed order, blind until both submit or 14 days from completion.

#### Scenario: Unrelated
- **WHEN** non-participant submits review
- **THEN** reject

#### Scenario: Duplicate
- **WHEN** second review same participant/order
- **THEN** reject

### Requirement: REV-002 Reputation and protected communication
The system SHALL provide in-app messaging without automatic contact disclosure and six verified reputation signals: completed count, rating, on-time, cancellation, identity, experienced badge; rate display after five eligible orders.

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

### Requirement: DSP-004 Dispute lifecycle and appeal
The system SHALL allow either participant and authorised protective review from funding until deadline; first response target one business day, resolution target seven days where possible, prioritise provider cutoff; permit one evidence-based appeal and preserve statutory rights; reason-coded human resolution and elevated-risk maker-checker, no AI-authorised exceptional finance.

#### Scenario: Early
- **WHEN** traveller disputes before delivery
- **THEN** open case, freeze affected settlement

#### Scenario: Appeal
- **WHEN** new evidence submitted on first appeal
- **THEN** review without waiving mandatory rights; freeze where liability remains unresolved

#### Scenario: Cutoff
- **WHEN** unresolved case approaches provider deadline
- **THEN** prioritise approved fallback, no automatic release

#### Scenario: Late statutory claim
- **WHEN** outside ordinary dispute clock but mandatory rights may apply
- **THEN** review via approved late-refund procedure

### Requirement: REV-003 Review boundaries
The system SHALL reveal reviews only once both submit or 14 days from completion; rates displayed only after five eligible orders; moderate abusive content with audit.

#### Scenario: Four orders
- **WHEN** eligible sample four
- **THEN** suppress rates or label insufficient

#### Scenario: Five orders
- **WHEN** eligible sample five
- **THEN** display calculated verified rates

#### Scenario: Deadline
- **WHEN** only one review submitted and 14 days elapsed
- **THEN** reveal according to moderation rules
