## ADDED Requirements

### Requirement: FUL-001 Receipt and private price evidence
The system SHALL accept traveller receipt evidence for funded orders, store protected originals and extract provenance-tagged price observations for internal use.

#### Scenario: Third party access
- **WHEN** an unrelated user or shopper requests a private receipt or observed retail price
- **THEN** access is denied unless a specifically approved disclosure applies

#### Scenario: Unclear receipt
- **WHEN** extraction or authenticity checks are uncertain
- **THEN** the receipt is flagged for review

### Requirement: FUL-002 Verified handover
The system SHALL record agreed handover method and actual verified delivery time with auditable evidence.

#### Scenario: Planned date only
- **WHEN** a proposed return date passes without handover evidence
- **THEN** the dispute clock does not start
