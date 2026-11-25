## ADDED Requirements

### Requirement: ENV-001 Branch-bound deployment
The system SHALL bind dev/stg/prod merges to their matching GitHub environments and isolated config and secrets.

#### Scenario: Staging merge
- **WHEN** a reviewed merge reaches stg
- **THEN** only stg deployment is eligible

#### Scenario: Mismatch
- **WHEN** the environment config or identity is inconsistent
- **THEN** deployment fails before cloud mutation

### Requirement: ENV-002 Protected production
The pipeline SHALL require passing checks and authorized production promotion and never expose secrets.

#### Scenario: Unapproved release
- **WHEN** production approval is absent
- **THEN** deployment does not proceed
