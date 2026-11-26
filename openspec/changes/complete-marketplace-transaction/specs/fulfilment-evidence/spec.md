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
The system SHALL record actual meetup report, evidence, shopper confirmation and reminders with approved clock.

#### Scenario: Planned date only
- **WHEN** return date passes without actual report/evidence
- **THEN** clock does not start

### Requirement: FUL-003 Delivery report, reminders and auto-confirmation
The system SHALL notify shopper after eligible report and auto-confirm only after seven days of silence under approved evidence/clock policy.

#### Scenario: Early confirmation
- **WHEN** shopper confirms within seven days
- **THEN** receipt confirmed without early release

#### Scenario: Silence
- **WHEN** seven days elapse with no response/dispute/exception
- **THEN** auto-confirm once and audit

#### Scenario: Contested/no-show
- **WHEN** credible no-show evidence or dispute exists
- **THEN** block confirmation and release, escalate
