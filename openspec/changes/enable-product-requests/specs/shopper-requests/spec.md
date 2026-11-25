## ADDED Requirements

### Requirement: REQ-001 Create request
The system SHALL record product, quantity, shopper price ceiling/currency, source location, destination and ideal dates as request-specific fields, with expiry constraints only for permitted food categories.

#### Scenario: Valid request
- **WHEN** an authenticated shopper submits eligible complete details
- **THEN** a request is created for review

#### Scenario: Invalid inputs
- **WHEN** quantity, price or dates are invalid
- **THEN** submission fails with actionable validation feedback

### Requirement: REQ-002 Policy-gated publication
The system SHALL prevent prohibited, controlled or unapproved food categories from live publication and audit moderation decisions.

#### Scenario: Blocked category
- **WHEN** a request is submitted for an unapproved food or restricted category
- **THEN** it cannot become visible as a fulfilment job

### Requirement: REQ-003 Editable drafts
The system SHALL prevent modification of accepted order terms by editing a request.

#### Scenario: Accepted offer
- **WHEN** a shopper edits an already accepted request
- **THEN** agreed order snapshot remains unchanged
