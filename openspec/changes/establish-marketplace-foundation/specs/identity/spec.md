## ADDED Requirements

### Requirement: ID-001 Google-only login
The system SHALL authenticate using Google only and link identity by verified issuer and subject.

#### Scenario: Valid login
- **WHEN** Google returns a valid verified identity
- **THEN** the system creates or resumes one account

#### Scenario: Invalid identity
- **WHEN** a token is expired or invalid
- **THEN** access is denied without creating an account

### Requirement: ID-002 Dual marketplace roles and operator access
The system SHALL support shopper and traveller actions on one account and enforce explicit privileged roles server-side.

#### Scenario: Both roles
- **WHEN** a valid user changes marketplace mode
- **THEN** the same identity is retained

#### Scenario: Unauthorized operator
- **WHEN** a non-operator invokes a moderation operation
- **THEN** the operation is denied
