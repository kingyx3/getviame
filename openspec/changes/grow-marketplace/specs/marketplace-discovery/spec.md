## ADDED Requirements

### Requirement: DISC-001 Featured products by country
The system SHALL display eligible featured products grouped by sourcing country or region.

#### Scenario: Unapproved product
- **WHEN** a product is removed or blocked
- **THEN** it is excluded from featured results

### Requirement: DISC-002 I want this too
The system SHALL allow a shopper to create their own request draft from an existing product without copying another user's private fields.

#### Scenario: Clone demand
- **WHEN** a shopper selects I want this too
- **THEN** a separate draft references the product and requires their own terms
