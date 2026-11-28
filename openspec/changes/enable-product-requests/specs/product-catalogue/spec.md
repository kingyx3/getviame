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


### Requirement: CAT-004 Catalogue maintenance and safe enrichment
The system SHALL require name/category/variant and image/reference/meaningful description; reviewed duplicate merge/corrections, material variant versions, regional availability confidence and immutable snapshots; public-source MSRP only; validate rights, files/URLs, SSRF and untrusted AI output.

#### Scenario: Merge
- **WHEN** approved duplicate merge
- **THEN** canonical references resolve, snapshots unchanged

#### Scenario: Change
- **WHEN** material variant changes
- **THEN** new variant/version

#### Scenario: Untrusted
- **WHEN** URL resolves to private address or AI invents facts
- **THEN** block fetch or mark unverified, no auto-publication

#### Scenario: Availability
- **WHEN** reference unverified
- **THEN** label unverified, no stock promise
