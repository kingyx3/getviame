## ADDED Requirements

### Requirement: CAT-001 Separate catalogue identity
The system SHALL store reusable product and regional listing information independently of each shopper request.

#### Scenario: Reuse
- **WHEN** two shoppers request the same reviewed variant
- **THEN** both reference a reusable product without sharing private request data

### Requirement: CAT-002 Sanity check and provenance
The system SHALL validate required product fields and image references and record validation provenance, including exclusivity as a claim unless verified.

#### Scenario: Uncertain match
- **WHEN** automated validation cannot establish product identity or policy eligibility
- **THEN** the candidate is routed for review rather than invented or auto-published
