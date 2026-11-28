## ADDED Requirements


### Requirement: ACC-001 Account lifecycle
The system SHALL enforce expiring revocable sessions, safe recovery and suspension/deletion; block new commitments while preserving obligations and lawful retention.

#### Scenario: Suspension
- **WHEN** participant has unresolved order and is suspended
- **THEN** new activity blocked, existing obligations remain accessible through approved channels

#### Scenario: Revocation
- **WHEN** session or role revoked
- **THEN** subsequent privileged calls denied

#### Scenario: Deletion
- **WHEN** deletion requested with outstanding obligations
- **THEN** block new activity and retain necessary records
