## ADDED Requirements

### Requirement: OFR-001 Transparent estimates
The system SHALL show gross SGD, inclusive max(S$1, 9% gross rounded half-up to cents) fee, SGD net, optional home-currency display and optional estimates with source/time and uncertainty; exact traveller net before sourcing costs; estimates never set price or trigger provider FX.

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
The system SHALL permit competing full-quantity SGD offers/counteroffers and shopper choice; one active funded accepted order atomically; only the request owner can select an offer and pending checkout is not acceptance.

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

### Requirement: OFR-004 Maximum accepted delivery lead time
The system SHALL permit advance requests but reject offer acceptance when the agreed delivery deadline exceeds 30 days from acceptance or a stricter approved provider limit.

#### Scenario: Advance request
- **WHEN** a shopper requests a product months in advance
- **THEN** publication remains possible subject to request expiry and policy

#### Scenario: Acceptance exceeds limit
- **WHEN** delivery is more than 30 days after acceptance
- **THEN** acceptance is rejected and new dates or later acceptance required

#### Scenario: Boundary
- **WHEN** delivery is exactly 30 days after acceptance and other constraints pass
- **THEN** lead-time validation passes

#### Scenario: Pending checkout
- **WHEN** a selected offer is awaiting verified payment or approved promotional funding
- **THEN** reserve only that owner's request for up to the approved 15-minute checkout window if necessary; no traveller purchase commitment until funded


### Requirement: OFR-005 Offer lifecycle
The system SHALL allow prices above/equal/below budget by consent, default 48h expiry configurable within request deadline, withdrawal before funding except active checkout, inactive competing offers after funding and reconfirm on reopening.

#### Scenario: Expiry
- **WHEN** earlier of 48h default or request deadline reached
- **THEN** cannot select

#### Scenario: Withdraw
- **WHEN** active checkout
- **THEN** deny ordinary withdrawal until resolved

#### Scenario: Competing
- **WHEN** one offer funded
- **THEN** others inactive and notified; reopen requires reconfirmation

#### Scenario: Lower
- **WHEN** lower eligible price accepted
- **THEN** use agreed price

### Requirement: OFR-006 Selection and amendments
The system SHALL separate nonbinding R-005 selection from R-006 verified acceptance; no mock production acceptance; funded amendment requires bilateral consent, verified additional funding or original-tender refund, immutable versions and original 30-day cap.

#### Scenario: Selection
- **WHEN** owner selects before payment enabled
- **THEN** nonbinding selection only

#### Scenario: Increase
- **WHEN** additional payment pending/failed
- **THEN** original agreement remains effective

#### Scenario: Decrease
- **WHEN** approved reduction
- **THEN** recalculate fee and obligation, track original-tender refund

#### Scenario: Late
- **WHEN** amendment exceeds original 30 days
- **THEN** reject
