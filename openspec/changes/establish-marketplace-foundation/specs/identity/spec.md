## ADDED Requirements

### Requirement: ID-001 Google-only login
The system SHALL authenticate using Google only and link by verified issuer and subject.

#### Scenario: Valid login
- **WHEN** Google returns valid verified identity
- **THEN** one account is created or resumed

#### Scenario: Invalid identity
- **WHEN** the token is expired or invalid
- **THEN** access is denied without account creation

### Requirement: ID-002 Dual marketplace roles and operator access
The system SHALL support both roles per account and enforce server-side privileged access.

#### Scenario: Both roles
- **WHEN** a user switches modes
- **THEN** identity is retained

#### Scenario: Unauthorized operator
- **WHEN** a non-operator invokes moderation
- **THEN** access is denied

### Requirement: ID-003 Age eligibility and PWA
The system SHALL provide installable responsive PWA and require approved 18+ participation eligibility; offline money commands are not queued.

#### Scenario: Underage
- **WHEN** the age declaration is under 18
- **THEN** participation is denied

#### Scenario: Offline mutation
- **WHEN** the user attempts a funded-order action offline
- **THEN** it is not shown as complete or queued for unsafe replay
