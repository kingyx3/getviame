## ADDED Requirements

### Requirement: EXP-001 Cash and stored value gate
The system SHALL keep cash-redeemable points and spendable traveller balances disabled until applicable legal and provider clearance and approved ledger/reconciliation design.

#### Scenario: No approval
- **WHEN** a user attempts to activate cash redemption before clearance
- **THEN** the feature is unavailable

### Requirement: EXP-002 Trip integrations gate
The system SHALL require approved partner access and explicit user consent before importing itineraries for outbound and return job matching.

#### Scenario: Consent absent
- **WHEN** an integration attempts to import trip data without consent
- **THEN** no itinerary is imported

### Requirement: EXP-003 Food and corridor gate
The system SHALL require jurisdiction/category eligibility and operational clearance before enabling commercial food or new payout/import corridors.

#### Scenario: Unapproved corridor
- **WHEN** a request involves a new unapproved regulated category or corridor
- **THEN** it cannot enter a live funded transaction

### Requirement: EXP-004 Courier gate
The system SHALL require approved logistics provider, cost, liability and delivery proof policy before enabling arranged delivery.

#### Scenario: No provider
- **WHEN** no approved courier service is configured
- **THEN** only approved fulfilment modes are offered
