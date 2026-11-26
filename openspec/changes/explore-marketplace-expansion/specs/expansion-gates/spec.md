## ADDED Requirements

### Requirement: EXP-001 Cash and stored value gate
The system SHALL keep cash-redeemable points and spendable traveller balances disabled until legal/provider clearance and approved ledger.

#### Scenario: No approval
- **WHEN** user activates cash redemption before clearance
- **THEN** unavailable

### Requirement: EXP-002 Trip integrations gate
The system SHALL require partner permission and explicit consent for itinerary imports both directions.

#### Scenario: No consent
- **WHEN** integration attempts import without consent
- **THEN** no data imported

### Requirement: EXP-003 Food and corridor gate
The system SHALL require eligibility and operational clearance before commercial food/new payout or import corridors.

#### Scenario: Unapproved
- **WHEN** request involves unapproved regulated category/corridor
- **THEN** cannot become funded live transaction

### Requirement: EXP-004 Courier gate
The system SHALL require provider, cost, liability and proof policy before arranged delivery.

#### Scenario: No provider
- **WHEN** no approved courier configured
- **THEN** only approved modes offered

### Requirement: EXP-005 Bookmarks and collective purchasing
The system SHALL enable future modes via separately approved specs; collective requires allocation/refund rules.

#### Scenario: Unapproved collective
- **WHEN** collective buy requested before approval
- **THEN** no combined obligation
