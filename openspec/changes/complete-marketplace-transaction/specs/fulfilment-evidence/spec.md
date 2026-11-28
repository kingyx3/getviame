## ADDED Requirements

### Requirement: FUL-001 Receipt and private price evidence
The system SHALL require receipt for funded orders unless authorized exception, store protected originals and internal provenance-tagged observations.

#### Scenario: Third party
- **WHEN** unrelated user or shopper requests private receipt/observed price
- **THEN** deny absent approved disclosure

#### Scenario: Unclear
- **WHEN** extraction/authenticity uncertain
- **THEN** flag for review

### Requirement: FUL-002 Verified handover
The system SHALL record actual meetup report, evidence, shopper confirmation and separate confirmation/dispute deadlines.

#### Scenario: Planned date only
- **WHEN** return date passes without actual report/evidence
- **THEN** clock does not start

### Requirement: FUL-003 Delivery report, reminders and auto-confirmation
The system SHALL notify shopper immediately after eligible report, remind on day 3 and 6 if unresolved, and auto-confirm after seven silent days under approved evidence rules; confirmation starts a separate seven-day dispute window.

#### Scenario: Early confirmation
- **WHEN** shopper confirms within seven days
- **THEN** receipt confirmed and separate seven-day dispute starts without early release

#### Scenario: Silence
- **WHEN** seven days elapse with no response/dispute/exception
- **THEN** auto-confirm once and audit; separate seven-day dispute window starts at recorded confirmation

#### Scenario: Contested/no-show
- **WHEN** credible no-show evidence or dispute exists
- **THEN** block confirmation and release, escalate

#### Scenario: Reminder retry
- **WHEN** day 3 or day 6 reminder is replayed
- **THEN** notification deduplicates and is suppressed when confirmed or disputed

#### Scenario: Sequential silent timeline
- **WHEN** eligible report occurs day 0, shopper remains silent and auto-confirmation is recorded day 7
- **THEN** settlement cannot be eligible before day 14 and all other gates pass

### Requirement: FUL-004 Valid purchase evidence and notice
The system SHALL accept receipt only after verified funding, match order/product/quantity/merchant/date, allocate shared receipt lines without duplicate claim, apply deterministic clear-case checks and human review of uncertain/alternative evidence; notify shopper, preserve effective submit/cancel times; no retrospective penalty from later evidence.

#### Scenario: Before funding
- **WHEN** receipt submitted pre-funding
- **THEN** reject as purchase evidence

#### Scenario: Shared receipt
- **WHEN** two orders claim same line quantity
- **THEN** prevent over-allocation

#### Scenario: Pending review
- **WHEN** shopper cancels while prior submission under review
- **THEN** hold disputed penalty determination, preserve effective timestamps and route to review

#### Scenario: Alternative
- **WHEN** receipt unavailable
- **THEN** review alternative proof; no automatic penalty without validated grounds

#### Scenario: Notice
- **WHEN** valid purchase submission recorded
- **THEN** notify shopper distinctly from delivery confirmation

### Requirement: FUL-005 Handover and condition
The system SHALL require authentic goods matching agreed condition; provide voluntary transaction-specific single-use code as confirmation, manual confirmation or reviewed alternative evidence; auto-confirm only with sufficient actual-delivery evidence and no contrary evidence. Mutually agreed reschedule/extension within original 30 days; private meetup details.

#### Scenario: Code
- **WHEN** shopper voluntarily supplies valid code at actual handover
- **THEN** record confirmation and start separate seven-day dispute clock

#### Scenario: Replay
- **WHEN** code used twice or for wrong order
- **THEN** reject and audit

#### Scenario: Unsupported
- **WHEN** traveller reports delivery without sufficient evidence
- **THEN** no auto-confirm or release

#### Scenario: No-show
- **WHEN** either misses meetup
- **THEN** reschedule by mutual consent within cap or escalate

#### Scenario: Condition
- **WHEN** materially incorrect or counterfeit reported
- **THEN** dispute and human review
