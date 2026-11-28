## ADDED Requirements


### Requirement: POL-001 Eligibility and launch controls
The system SHALL apply versioned category/corridor and traveller allowlists; hold unlisted goods for AI-assisted classification and human approval; food/high-risk goods blocked until cleared; require approved customs/import/transport, consumer, IP and product obligations before live launch.

#### Scenario: Unknown
- **WHEN** unlisted category submitted
- **THEN** hold pending review

#### Scenario: Food
- **WHEN** no clearance
- **THEN** blocked

#### Scenario: Policy change
- **WHEN** category becomes ineligible
- **THEN** stop new exposure and review existing obligations

#### Scenario: Pilot
- **WHEN** no legal eligibility evidence
- **THEN** no live funding
