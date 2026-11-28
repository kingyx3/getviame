## ADDED Requirements


### Requirement: FLAG-001 Safe flags
The system SHALL enforce server-side environment-scoped flags, audited RBAC/dependencies and safe defaults; only approved low-risk agent actions; no bypass of legal/money gates or abandonment of obligations.

#### Scenario: Bypass
- **WHEN** admin or AI enables money without gates
- **THEN** deny and audit

#### Scenario: Disable
- **WHEN** feature off with existing obligations
- **THEN** block new exposure, maintain refunds/disputes/reconciliation

#### Scenario: Mismatch
- **WHEN** wrong environment
- **THEN** deny
