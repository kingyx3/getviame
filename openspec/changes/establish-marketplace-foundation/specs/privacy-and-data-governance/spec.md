## ADDED Requirements


### Requirement: PRIV-001 Protect personal data
The system SHALL enforce purpose, consent, RBAC, retention, access/correction/deletion requests, breach response and approved AI/vendor handling; no public contacts or raw receipt/PII in agent logs.

#### Scenario: Cross-account
- **WHEN** unrelated user requests private data
- **THEN** deny and audit

#### Scenario: Retention
- **WHEN** approved retention expires without hold
- **THEN** delete/anonymise and audit

#### Scenario: Incident
- **WHEN** suspected breach reported
- **THEN** activate approved response and human escalation
