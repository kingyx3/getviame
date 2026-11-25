## ADDED Requirements

### Requirement: OFR-001 Transparent estimates
The system SHALL show prospective traveller receipt in home currency, platform fee at the approved 8% base, FX provenance and estimated earnings from reference costs with uncertainty.

#### Scenario: Reference available
- **WHEN** a traveller views a request with MSRP and FX data
- **THEN** the quote separates receipt, costs and estimated margin

#### Scenario: Missing MSRP
- **WHEN** no reliable reference price is available
- **THEN** margin is marked unavailable rather than fabricated

### Requirement: OFR-002 Submit and accept offers
The system SHALL permit an eligible traveller to propose dates and terms and the request owner to accept an eligible offer atomically.

#### Scenario: Competing offers
- **WHEN** two offers are accepted concurrently for one request
- **THEN** at most one order is reserved under the proposed one-offer policy

#### Scenario: Self dealing
- **WHEN** a shopper tries to accept their own traveller offer
- **THEN** the system rejects it
