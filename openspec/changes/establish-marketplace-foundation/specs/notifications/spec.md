## ADDED Requirements


### Requirement: COM-002 Transactional communication
The system SHALL use deduplicated outbox, in-app and approved email/PWA channels, delivery status, bounded retries/dead-letter and authorised recovery; notify purchase, cancellation, dispute, handover and settlement events.

#### Scenario: Retry
- **WHEN** same event replayed
- **THEN** one logical notice per recipient/channel

#### Scenario: Failure
- **WHEN** provider unavailable
- **THEN** retry then alert, no false delivery

#### Scenario: Stale
- **WHEN** confirmed or disputed order reminder runs
- **THEN** suppress
