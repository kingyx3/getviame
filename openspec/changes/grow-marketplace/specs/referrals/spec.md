## ADDED Requirements

### Requirement: REF-001 Referral rewards
The system SHALL support a $10-equivalent reward for each party under approved qualification policy and cap referrer awards at five qualifying referees.

#### Scenario: First eligible completion
- **WHEN** a referred user's first qualifying transaction completes
- **THEN** each eligible reward is recorded at most once subject to approved terms

#### Scenario: Cap reached
- **WHEN** a sixth referee qualifies for the same referrer
- **THEN** no sixth referrer reward is granted

#### Scenario: Replayed event
- **WHEN** a qualifying order event is replayed
- **THEN** no duplicate credit or notification is issued

### Requirement: REF-002 Referral communication
The system SHALL issue a deduplicated successful referral notification after confirmed reward grant.

#### Scenario: Grant fails
- **WHEN** reward creation is unsuccessful
- **THEN** no success email is sent
