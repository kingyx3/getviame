## ADDED Requirements

### Requirement: TRIP-001 Browse and add trips
The system SHALL permit free browsing and optional origin/destinations/dates, city/airport; no capacity input.

#### Scenario: No itinerary
- **WHEN** traveller browses without trip
- **THEN** eligible jobs visible

#### Scenario: Trip
- **WHEN** traveller adds routes/dates
- **THEN** eligible jobs filtered by compatibility

### Requirement: TRIP-002 Explain matching
The system SHALL show why jobs match without revealing private itinerary.

#### Scenario: Incompatible
- **WHEN** request cannot meet route/date
- **THEN** excluded from recommendations

### Requirement: TRIP-003 Group opportunities
The system SHALL recommend grouped purchases with independent orders.

#### Scenario: Similar jobs
- **WHEN** several requests match one product/trip
- **THEN** traveller can consider them together without combined payment


### Requirement: TRIP-004 Trip changes
The system SHALL recompute affected matches and notify without cancelling funded obligations; no capacity input.

#### Scenario: Trip cancelled
- **WHEN** funded order linked
- **THEN** alert and route to proper reschedule/cancel

#### Scenario: Unfunded
- **WHEN** trip date changes
- **THEN** recompute compatibility
