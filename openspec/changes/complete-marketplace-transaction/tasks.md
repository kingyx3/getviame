# Tasks (all implementation tasks blocked pending approval)
- [ ] 1.1 Review reconciled v0.9 and record approved revision, resolve nonpayment dependencies
- [ ] 1.2 OpenSpec strict validation and npm run check
- [ ] 2.1 Obtain written Stripe approval: actual account/charge topology, eligible individual KYC, custody, prepayment, retention and dispute extension, fee quote, rematch, late refund, payouts and promotions
- [ ] 2.2 Obtain Singapore payments counsel opinion and any required MAS approval/exemption; approve reserve and commercial economics
- [ ] 2.3 Review rounding, receipt/cancellation race, refund/reopen/expiry and mandatory exception terms; approve fallback if rematch not supported
- [ ] 2.4 Map PAY/FUL/DSP/REV requirements to acceptance tests in stripe-connect-launch-gates-v0.9.md
- [ ] 3.1 Implement approved bounded increment; validate synthetic sandbox happy path, partial/full refunds, expired/failed refund, payout failures, disputed hold, reprice/rematch, promo and idempotency
- [ ] 3.2 Verify reconciliation, test reports, security and independent review; no real funds before gates pass
- [ ] 3.3 Obtain acceptance; archive/sync only after verification; production separate human gate
