# Tasks (all implementation tasks blocked pending approval)
- [ ] 1.1 Review reconciled v0.12, record founder approval scope and approved specification revision; resolve nonpayment dependencies
- [ ] 1.2 OpenSpec strict validation and npm run check
- [ ] 2.1 Obtain written Stripe approval of actual SG individual direct-charge account configuration, exclusive payout/refund authority, charge merchant and risk/fee responsibilities, retention/dispute/closure/late-refund paths and full pricing
- [ ] 2.2 Obtain Singapore counsel opinion and any required regulatory clearance, approve reserve and commercial economics
- [ ] 2.3 Resolve rounding, receipt/cancellation race, refund/reopen and mandatory exception terms, account disconnect and control loss runbook
- [ ] 2.4 After separate R-006A sandbox evaluation authorisation, verify provider-side payout restriction across every exposed path, current control fingerprint and failure handling (AC-01–03)
- [ ] 2.5 Verify independent platform-funded refund shortfall path including first-ever order, fee reversal ordering, full and partial refunds without merchant action and original payer fallback (AC-04–07)
- [ ] 2.6 Verify multi-order account payout cap and serialization, weekly payout/reconciliation, failed/unknown payout and dispute deadlines (AC-08–10)
- [ ] 2.7 Verify account drift, deauthorisation, closure, merchant refund events and preserved obligations; test replacement fresh funding, duplicate/late callback and no cross-merchant reuse (AC-11–13)
- [ ] 2.8 Verify signed Connect event and scoped account authorization, idempotency/concurrency, reserve coverage and kill switch, independent security/finance review (AC-14–16)
- [ ] 2.9 Promotion funding/REF tests separately gated; do not enable promotions until pass (AC-17)
- [ ] 3.1 After applicable provider/counsel gates and separate implementation approval, implement bounded increment and run all mapped automated tests + sandbox/provider configuration tests; document exact configuration, provider IDs, evidence and limits
- [ ] 3.2 All applicable mandatory ACs passed; independent reviewer verifies evidence, no mock-only pass for provider-side controls; failed/unverified gate blocks release, no waivers
- [ ] 3.3 Obtain acceptance; archive/sync only after verification; live enablement separately human approved and configuration unchanged

- [ ] 2.10 Verify AC-18–24: multi-charge amendment, cent allocations, disjoint liabilities, cancellation challenge, evidence/code/dispute, post-payout recovery and continuity, promo-only and history. Map PAY-014–018/FUL-004–005/DSP-004/REV-003/HIST-001 to executable tests.
- [ ] 3.4 Approve private pilot cohort, financial exposure and measurable reliability/contribution/support guardrails, current legal/consumer/customs/privacy/insurance terms and human launch permission; independently review redacted evidence. No production enablement until all applicable gates pass.
