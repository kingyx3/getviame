# Change preparation template

Use the official OpenSpec propose workflow when installed. This reference is deliberately outside openspec/changes so it does not appear as an active change.

## proposal.md
Why now; user outcome; scope; non-goals; affected capabilities; dependencies; decisions needed; approval reference.

## design.md
Current state; proposed approach; alternatives; interfaces/data; risks; migration/rollback if applicable; verification strategy.

## specs/<capability>/spec.md
Use the native OpenSpec delta format:

```markdown
## ADDED Requirements

### Requirement: CAP-001 Descriptive name
The system SHALL provide observable behavior.

#### Scenario: A concrete outcome
- **WHEN** an actor takes an action
- **THEN** the observable result occurs
```

Use MODIFIED/REMOVED sections only where existing requirements change. Preserve stable identifiers and include complete modified requirements. Add success, failure and boundary scenarios as appropriate.

## tasks.md
- [ ] Establish tests for CAP-001
- [ ] Implement the smallest complete vertical increment
- [ ] Run tests and strict spec validation
- [ ] Independently review the approved behavior and evidence
- [ ] Record acceptance and archive readiness

## decision record
Maintain the approval reference, unresolved questions, scope, approved revision and reviewer evidence in the change's supporting notes or linked PR. Do not archive until policy gates pass.
