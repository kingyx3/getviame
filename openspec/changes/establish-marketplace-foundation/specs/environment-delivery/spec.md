## ADDED Requirements

### Requirement: ENV-001 Branch-bound deployment
The system SHALL bind dev/stg/prod merges to corresponding environments, isolated config and secrets; feature PRs target dev after bootstrap.

#### Scenario: Staging merge
- **WHEN** a reviewed merge reaches stg
- **THEN** only stg deployment is eligible

#### Scenario: Mismatch
- **WHEN** config or identity mismatches the branch
- **THEN** deployment fails before cloud mutation

### Requirement: ENV-002 Protected production
The pipeline SHALL require passing checks and authorized production promotion, without exposing secrets.

#### Scenario: Unapproved release
- **WHEN** prod approval absent
- **THEN** deployment does not proceed
