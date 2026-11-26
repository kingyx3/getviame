## ADDED Requirements

### Requirement: CAT-001 Separate catalogue identity
The system SHALL store reusable parent products, variants and regional listings independently from request snapshots.

#### Scenario: Reuse
- **WHEN** two shoppers request same reviewed variant
- **THEN** both reference it without sharing private request data

### Requirement: CAT-002 Sanity check and provenance
The system SHALL validate required fields/images, record provenance and exclusivity claims, and request confirmation of suggested enrichment.

#### Scenario: Uncertain match
- **WHEN** validation cannot establish identity or eligibility
- **THEN** route for review without fabricated fields or automatic publication

### Requirement: CAT-003 Progressive catalogue enrichment
The system SHALL support searchable products without active requests or known MSRP, progressively capture user/public/private receipt observations and keep restricted observations private.

#### Scenario: Cold start
- **WHEN** valid request has no MSRP
- **THEN** publication remains possible and estimates marked unavailable

#### Scenario: New receipt
- **WHEN** credible regional price extracted
- **THEN** internal observation recorded separately from public MSRP and order price
