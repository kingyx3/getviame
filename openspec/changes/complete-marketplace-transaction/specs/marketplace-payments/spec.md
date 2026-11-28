## ADDED Requirements

### Requirement: PAY-001 Funded commitment
The system SHALL accept an offer only once verified provider funding and any approved platform promotion backing cover the agreed total; no traveller purchase before funded.
#### Scenario: Pending checkout
- **WHEN** checkout redirect occurs without verified confirmation
- **THEN** order remains awaiting funding and no binding acceptance
#### Scenario: Confirmed
- **WHEN** matching signed provider success and eligible funding verified
- **THEN** request becomes funded once
#### Scenario: Late duplicate payment
- **WHEN** competing payment succeeds after reservation expired or another offer funded
- **THEN** no second acceptance; reconcile and return surplus through approved refund process

### Requirement: PAY-002 Audit and reconcile
The system SHALL maintain immutable SGD cents, tender allocations, original payment dates, fees, provider IDs, balance journal, source-specific promotion entries and reconciliation; no customer-money wallets or arbitrary transfers.
#### Scenario: Replay
- **WHEN** provider event replayed
- **THEN** no duplicate movement
#### Scenario: Mismatch
- **WHEN** provider totals disagree
- **THEN** affected settlement blocked and operator alerted without suppressing owed refunds

### Requirement: PAY-003 Provider-gated settlement
The system SHALL release normal traveller payment only after separate seven-day dispute deadline following physical delivery confirmation/auto-confirmation, no open dispute, eligibility and provider gates; enforce permitted retention/refund horizon from original payment.
#### Scenario: Window open
- **WHEN** confirmation has not occurred or fewer than seven days since confirmation
- **THEN** no release
#### Scenario: Open dispute near deadline
- **WHEN** dispute unresolved and provider retention deadline approaches
- **THEN** no automatic seller release; alert human for approved exception, stop new incompatible commitments
#### Scenario: Eligible
- **WHEN** deadline elapsed and all gates pass
- **THEN** one eligible connected-account obligation reserved for weekly payout; provider payout tracked to actual completion

### Requirement: PAY-004 Refund exceptions
The system SHALL initiate authorised full/partial refunds on original direct charges without requiring merchant action, restore eligible promotional tender separately, record provider outcome, preserve mandatory refund rights beyond native API period and prohibit wallet substitution.
#### Scenario: Pending
- **WHEN** Stripe refund asynchronous
- **THEN** show pending, not refunded
#### Scenario: Expired or failed
- **WHEN** original refund fails or provider window elapsed
- **THEN** approved human-reviewed return-to-verified-payer process, no duplicate refund or arbitrary recipient
#### Scenario: Mixed tender
- **WHEN** eligible S$100 order funded S$70 cash and S$30 promotion cancelled before receipt
- **THEN** S$70 monetary refund and eligible S$30 promo restoration, never S$100 cash refund

### Requirement: PAY-005 SGD-only fee and cost allocation
The system SHALL use SGD minor units only, fee max(100 cents, half-up 9% gross), minimum S$10 order, no FX and platform bears ordinary processor fees.
#### Scenario: Other currency
- **WHEN** collection or payout requires conversion
- **THEN** blocked in launch corridor
#### Scenario: Minimum job
- **WHEN** S$10 normal order completed
- **THEN** gross fee S$1 and traveller cash obligation S$9 before sourcing costs
#### Scenario: Typical job
- **WHEN** S$100 normal order completed
- **THEN** gross fee S$9, traveller S$91, provider fees borne separately by platform

### Requirement: PAY-006 Cancellation and unfunded reopening
The system SHALL track traveller cancellation and reopen eligible request unfunded; initiate full applicable original-tender refund, retain cancelled agreement and require fresh verified direct charge for any replacement. Funded rematching SHALL NOT be available in MVP.
#### Scenario: Traveller cancels
- **WHEN** traveller cancels a funded order
- **THEN** initiate full applicable refund, retain historical order and reopen if eligible; refund status tracked independently until final
#### Scenario: Replacement
- **WHEN** shopper selects a replacement traveller
- **THEN** new immutable agreement and fresh verified funding on replacement merchant account required; prior charge never reused or reassigned
#### Scenario: Late refund or duplicate
- **WHEN** original refund remains pending or an old event is replayed after replacement
- **THEN** original liability remains tracked; no second refund, acceptance or reassignment

### Requirement: PAY-007 Receipt-triggered cancellation compensation
The system SHALL disclose 20% of gross cancellation penalty inclusive platform fee after valid traveller purchase receipt submission (not physical delivery confirmation); before receipt no penalty; preserve legal and evidence exceptions and source-proportional refund.
#### Scenario: Before receipt
- **WHEN** shopper cancels before eligible receipt
- **THEN** no compensation or fee, full applicable original-method refund
#### Scenario: After receipt
- **WHEN** shopper cancels valid S$100 fully cash-funded order after eligible receipt under approved terms
- **THEN** refund S$80, S$11 traveller compensation and S$9 gross platform fee before processor costs
#### Scenario: Invalid or late receipt
- **WHEN** receipt invalid or submitted after effective cancellation
- **THEN** no retrospective penalty; contested evidence reviewed

### Requirement: PAY-008 Weekly cash payouts
The system SHALL aggregate eligible obligations by traveller into weekly SGD bank payouts using approved provider controls, excluding disputed, ineligible and refunded principal.
#### Scenario: Batch
- **WHEN** multiple eligible obligations for same traveller are due
- **THEN** one weekly payout if supported; amount equals sum, actual status reconciled
#### Scenario: Disputed or failed
- **WHEN** obligation is disputed or payout fails
- **THEN** do not mark paid; exclude ineligible amount and reconcile failure without duplicate movement

### Requirement: PAY-009 External clearance and financial safeguards
The system SHALL default live collection and promotional funding off until applicable written provider/counsel approval, verified cost/funding model, approved stable direct-charge configuration and every applicable mandatory acceptance criterion in direct-charge-acceptance-v0.11.md passes with revision-specific evidence. No waiver by feature flag, admin or AI. Keep refunds and existing obligations operational when new commitments paused.
#### Scenario: Missing approval
- **WHEN** user attempts live collection without required signoff
- **THEN** unavailable and no funds taken
#### Scenario: Reserve breached
- **WHEN** platform-funded cancellation loss reserve falls below approved threshold
- **THEN** alert and apply approved admission controls, never deny owed refunds

### Requirement: PAY-010 Exclusive payout control and connected-account isolation
The system SHALL admit live funding only to verified eligible individual connected accounts using approved direct-charge configuration, with exclusive authorised platform initiation of ordinary payouts and proven protection against merchant bypass or unrelated activity consuming ineligible funds. SHALL verify provider-side controls, not merely hide UI or set manual schedule.
#### Scenario: Merchant bypass
- **WHEN** traveller attempts automatic schedule change, manual/instant payout, payout via Dashboard, embedded component, API or another exposed integration
- **THEN** unauthorised payout cannot execute; verify all available paths under selected real provider configuration before live onboarding
#### Scenario: Mixed eligible and held orders
- **WHEN** S$91 eligible, S$91 ineligible and S$182 available with no other liabilities
- **THEN** payout cannot exceed S$91; ineligible amount remains reserved
#### Scenario: Configuration drift
- **WHEN** payout control, account capability, access or isolation cannot be verified or changes unexpectedly
- **THEN** block new commitments and unsafe payouts, alert, preserve refund and existing obligations through approved runbook

### Requirement: PAY-011 Refund authority and independently funded shortfalls
The system SHALL demonstrate authorised platform-triggered full and partial refunds without merchant intervention, verify available funds, reconcile separate fee reversals and reimbursements, preserve approved traveller net, and independently fund ordinary refund costs from platform-owned resources including first order. SHALL NOT rely on future sales, merchant cooperation, unapproved top-ups, account debits or Stripe loss coverage.
#### Scenario: Full refund first order
- **WHEN** first-ever S$100 cash order at illustrative 1.3% processing fee has S$91 available in traveller account and full refund owed
- **THEN** approved funding and fee reversal path returns S$100 to original payer, returns S$7.70 application fee and funds S$1.30 platform cost, traveller suffers no fee loss; authoritative refund outcome verified
#### Scenario: Partial refund
- **WHEN** valid post-receipt cancellation of same S$100 order occurs
- **THEN** refund S$80, traveller receives S$11, platform retains S$7.70 net of S$1.30 processor fee before other costs; no incorrect automatic application fee refund
#### Scenario: Insufficient or unavailable balance
- **WHEN** charge proceeds pending, refund fails, reimbursement or fee reversal fails, or prior payout reduced balance
- **THEN** track liability and approved funding/verified-payer fallback; no false success or duplicate refund, no loss shifted to traveller for ordinary fees
#### Scenario: Reserve insufficient
- **WHEN** platform cannot prove available approved funding covers required exposure
- **THEN** stop new exposure, escalate, continue fulfilling existing obligations; never fund shortfall from another customer's principal

### Requirement: PAY-012 Account lifecycle and external activity safeguards
The system SHALL protect outstanding refund and payout obligations during account deauthorisation, closure, restriction, bank-detail changes, merchant refunds or provider intervention using verified controls and approved contingency procedures. SHALL not assume merchant disconnection can be prevented or paid-out funds recovered.
#### Scenario: Disconnect or closure
- **WHEN** traveller attempts disconnect or account closure with unresolved obligations
- **THEN** verify provider control/approved fallback preserves obligations even if API access lost; quarantine new orders and escalate; no unsafe release
#### Scenario: Unexpected refund
- **WHEN** merchant or provider initiates refund outside platform workflow
- **THEN** reconcile authoritative event and fee effect, stop inconsistent payout, update order and notify/escalate without duplicate refund or suppressing lawful refunds
#### Scenario: Retention deadline
- **WHEN** unresolved dispute approaches actual provider cutoff or refund period ends
- **THEN** approved human-reviewed resolution/late-refund path operates without automatic early seller payout or arbitrary alternate recipient

### Requirement: PAY-013 Financial integrity and mandatory acceptance evidence
The system SHALL scope direct-charge operations to verified immutable connected-account/order and environment, validate signed Connect events, serialize account-level refund/payout reservations and order-level receipt/dispute/cancellation races, and reconcile unknown provider outcomes before retries. Provider-side gates require evidence of actual selected stable configuration and applicable permission, not mocked success alone.
#### Scenario: Race and replay
- **WHEN** simultaneous payout, refund, dispute or duplicate provider event occurs
- **THEN** no double payout/refund or release of ineligible funds; preserve actual provider status and audit
#### Scenario: Cross-account spoof
- **WHEN** mismatching connected-account ID, charge, amount, currency or environment is submitted
- **THEN** no money movement and security event recorded
#### Scenario: Unverified gate
- **WHEN** any mandatory applicable technical gate fails, lacks evidence or changes after validation
- **THEN** release/live enablement blocked; existing obligations continue under approved fallback; no override to mark passed
