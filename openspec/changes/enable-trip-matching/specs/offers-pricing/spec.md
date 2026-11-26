## ADDED Requirements

### Requirement: OFR-001 Transparent estimates
The system SHALL show gross SGD, inclusive 8% fee, SGD net, optional home-currency display and estimated margin, with source/time and uncertainty; estimates never set price or trigger provider FX.

#### Scenario: Reference available
- **WHEN** MSRP and FX data available
- **THEN** quote separates receipt, cost and margin

#### Scenario: Missing MSRP
- **WHEN** no reliable price
- **THEN** margin unavailable, offer permitted

#### Scenario: Price differs
- **WHEN** MSRP differs from chosen price
- **THEN** system does not override chosen price

### Requirement: OFR-002 Submit and accept offers
The system SHALL permit competing full-quantity SGD offers/counteroffers and shopper choice; one active accepted order atomically.

#### Scenario: Concurrent
- **WHEN** two offers accepted simultaneously
- **THEN** at most one active order

#### Scenario: Self dealing
- **WHEN** shopper accepts own offer
- **THEN** reject

#### Scenario: Counteroffer
- **WHEN** traveller offers S$110 against S$100
- **THEN** shopper must explicitly accept or decline

### Requirement: OFR-003 Cost responsibility and minimum
The system SHALL require total >=S$10, acknowledgement of lawful import costs, and consent to revised price. Traveller retains cost savings.

#### Scenario: Terms missing
- **WHEN** traveller has not acknowledged terms
- **THEN** cannot enter funded commitment

#### Scenario: Savings
- **WHEN** actual costs lower than estimate
- **THEN** agreed shopper total and traveller receipt unchanged

#### Scenario: Below minimum
- **WHEN** offer total S$9.99
- **THEN** offer rejected
