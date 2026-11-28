## ADDED Requirements

### Requirement: MET-001 Versioned events and aggregate access
The system SHALL record deduplicated versioned events and expose privacy-safe aggregates to agents.

#### Scenario: Duplicate
- **WHEN** the same event is received twice
- **THEN** aggregates count once

#### Scenario: Agent access
- **WHEN** an analysis agent queries metrics
- **THEN** only authorized sanitized results are available

### Requirement: COM-001 Welcome notification
The system SHALL send a welcome once through an auditable outbox.

#### Scenario: Repeated login
- **WHEN** an existing user signs in
- **THEN** no duplicate welcome is queued

### Requirement: OPS-001 Agent-operable routine operations
The system SHALL expose sanitized metrics, error/performance/cost/AI/reconciliation/support/feedback/deploy/test/spec coverage and audited runbooks and authorized nonprod actions.

#### Scenario: Diagnosis
- **WHEN** an authorized agent inspects a simulated failed job
- **THEN** redacted evidence and permitted remediation are available

#### Scenario: Restricted
- **WHEN** an agent requests raw receipts, secrets or production mutation
- **THEN** access is denied and audited

### Requirement: OPS-002 Cost guardrails
The system SHALL forecast aggregate recurring environment cost against under S$50/month, alert and bound nonessential workloads without compromising reconciliation.

#### Scenario: Forecast breach
- **WHEN** forecast crosses approved thresholds
- **THEN** alerts and approved throttles apply without disabling critical checks


### Requirement: OPS-003 Resilience and pilot readiness
The system SHALL test WCAG 2.2 AA target, mobile/offline, bounded search/pagination, load/SLO, backup/restore, queue recovery and rollback; approve measurable pilot thresholds and budgets before release, count AI infrastructure costs once.

#### Scenario: Recovery
- **WHEN** synthetic backup restored
- **THEN** integrity and approved RPO/RTO demonstrated

#### Scenario: Cost
- **WHEN** forecast exceeds approved envelope
- **THEN** escalate and throttle nonessential work, preserve critical safeguards

#### Scenario: Expansion
- **WHEN** mature cohorts fail reliability/contribution/support gates
- **THEN** no expansion
