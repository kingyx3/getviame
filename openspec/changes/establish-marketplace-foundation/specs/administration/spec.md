## ADDED Requirements


### Requirement: ADM-001 Scoped operator console
The system SHALL provide queues for catalogue/categories, accounts, moderation, receipts, disputes/appeals, financial exceptions, support and cost; privileged MFA, finance segregation, audit and elevated-risk maker-checker.

#### Scenario: Privilege
- **WHEN** ordinary operator attempts exceptional refund
- **THEN** deny and audit

#### Scenario: Checker
- **WHEN** maker approves own elevated-risk action
- **THEN** deny

#### Scenario: AI
- **WHEN** AI recommends exceptional finance or policy
- **THEN** human approval required
