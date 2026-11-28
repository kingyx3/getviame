## ADDED Requirements

### Requirement: DISC-001 Featured products by country
The system SHALL show eligible ranked featured products by country/region with operator override.

#### Scenario: Blocked
- **WHEN** product removed or blocked
- **THEN** excluded

#### Scenario: Override
- **WHEN** authorized operator changes eligible ranking
- **THEN** audit change

### Requirement: DISC-002 I want this too
The system SHALL create separate request draft from product without copying private user data.

#### Scenario: Clone
- **WHEN** shopper selects I want this too
- **THEN** separate draft requires own terms

### Requirement: DISC-003 Future demand modes
The system SHALL reserve bookmarks and collective buying for separate approved specs.

#### Scenario: Unapproved collective
- **WHEN** user requests shared purchase before approval
- **THEN** no combined order/payment
