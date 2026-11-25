## ADDED Requirements

### Requirement: MET-001 Versioned events and aggregate access
The system SHALL record deduplicated versioned business events and expose privacy-safe read-only aggregate metrics to agents.

#### Scenario: Duplicate event
- **WHEN** the same event is received twice
- **THEN** aggregates count it once

#### Scenario: Agent access
- **WHEN** an analysis agent queries metrics
- **THEN** only authorized sanitized aggregates are available

### Requirement: COM-001 Welcome notification
The system SHALL send a welcome message once per new account through an auditable outbox.

#### Scenario: Repeated login
- **WHEN** an existing user signs in again
- **THEN** no duplicate welcome message is queued
