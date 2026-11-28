## ADDED Requirements


### Requirement: MSG-001 Private messaging
The system SHALL provide authenticated in-app messaging, private contact/meetup data only to relevant participants, reporting/blocking and rate limits per SAFE-001.

#### Scenario: Guest
- **WHEN** visitor messages
- **THEN** require login

#### Scenario: Other user
- **WHEN** unrelated user accesses thread
- **THEN** deny

#### Scenario: Report
- **WHEN** unsafe message reported
- **THEN** route to moderation
