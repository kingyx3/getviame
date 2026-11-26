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
