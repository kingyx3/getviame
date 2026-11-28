## ADDED Requirements

### Requirement: REQ-001 Create request
The system SHALL record variant, quantity, user-selected total SGD budget, source/destination, ideal delivery dates and conditional permitted food expiry.

#### Scenario: Valid
- **WHEN** authenticated shopper submits complete eligible details
- **THEN** request created for review

#### Scenario: Invalid
- **WHEN** quantity, currency or dates invalid
- **THEN** submission rejected with actionable feedback

### Requirement: REQ-002 Policy-gated publication
The system SHALL prevent prohibited, controlled or unapproved food categories from live publication and audit moderation.

#### Scenario: Blocked category
- **WHEN** unapproved food submitted
- **THEN** cannot become live job

### Requirement: REQ-003 Editable drafts
The system SHALL preserve accepted order snapshot when a request is edited.

#### Scenario: Accepted offer
- **WHEN** shopper edits accepted request
- **THEN** agreed snapshot unchanged

### Requirement: REQ-004 Minimum job amount and expiry
The system SHALL enforce S$10 minimum total job and accepted offer, not per unit, and expire infeasible requests at shopper deadline.

#### Scenario: Multiple units
- **WHEN** five units total S$10
- **THEN** minimum check passes

#### Scenario: Below minimum
- **WHEN** request or offer total S$9.99
- **THEN** publication or acceptance rejected

#### Scenario: Deadline
- **WHEN** open request deadline passes
- **THEN** request expires and cannot accept new offers


### Requirement: REQ-005 Order cap and editing
The system SHALL enforce initial configurable S$500 gross maximum on requests/offers/funding with authorised reviewed exceptions before checkout and exposure coverage; material edits invalidate affected offers; minor edits preserve; eligible unexpired unfunded requests may close/reopen.

#### Scenario: Above cap
- **WHEN** S$500.01 without approved exception
- **THEN** reject

#### Scenario: Boundary
- **WHEN** S$500 and other rules pass
- **THEN** allow

#### Scenario: Edit
- **WHEN** quantity/variant/deadline materially changes
- **THEN** invalidate offers and notify

#### Scenario: Reopen
- **WHEN** eligible closed unfunded request reopens
- **THEN** new offers permitted, old consent not reused
