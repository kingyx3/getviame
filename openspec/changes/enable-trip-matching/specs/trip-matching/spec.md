## ADDED Requirements

### Requirement: TRIP-001 Browse and add trips
The system SHALL allow travellers to browse open jobs without adding a trip and optionally record trip country/region, origin, destination and dates.

#### Scenario: No itinerary
- **WHEN** a traveller browses without trip details
- **THEN** eligible open jobs are visible

#### Scenario: Trip supplied
- **WHEN** a traveller adds dates and destinations
- **THEN** eligible jobs can be filtered by location and delivery compatibility

### Requirement: TRIP-002 Explain matching
The system SHALL show why a job matches and not expose private itinerary details to other users without authorization.

#### Scenario: Incompatible request
- **WHEN** a request cannot meet supplied route/date constraints
- **THEN** it is excluded from recommended matches
