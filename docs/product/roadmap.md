# Roadmap v0.12 — comprehensive reconciliation draft
Founder approved policy defaults Q127–205 for this specification PR, not product implementation or spend. Current accepted behavior remains scaffold. Review revision and applicable gates before each bounded increment.

| ID | Outcome | Dependencies | Status | OpenSpec change |
| --- | --- | --- | --- | --- |
| R-000 | Minimal scaffold | None | done | Baseline |
| R-001 | Pin/install official OpenSpec, strict validation and CI | R-000 | ready, setup only | Tooling |
| R-002 | Review v0.12 reconciliation and authorise bounded revisions | None | review | v0.12 |
| R-003 | Cost-gated PWA, auth, environments, lifecycle, security, flags and ops | R-001/002, approved bootstrap/cost | blocked | establish-marketplace-foundation |
| R-004 | Sparse catalogue, search, request publication, eligibility and moderation | R-003, approved policies | blocked | enable-product-requests |
| R-005 | Manual trips, matching, offers/selection and messaging; no binding acceptance | R-004 | blocked | enable-trip-matching |
| R-007A | Featured discovery and independent cloned requests | R-004 | blocked pending revision approval only | enable-marketplace-discovery |
| R-006A | Bounded Stripe technical/sandbox evaluation, no live funds | R-002, explicit evaluation authority | blocked | complete-marketplace-transaction |
| R-006 | Verified funding/acceptance, fulfilment, cancellation, disputes, settlement/history/reviews | R-005/006A, mandatory technical/legal/cost gates | blocked | complete-marketplace-transaction |
| R-009 | Controlled live pilot, then measured expansion | R-006, all applicable launch approvals | blocked | complete-marketplace-transaction |
| R-007 | Platform-funded referral discounts | R-006, separate AC-17/funding/clearance | blocked | grow-marketplace |
| R-008 | Bookmarks, collective buying, courier, itinerary, food, new corridors, recurring orders, future cards | separate approvals and evidence | blocked | explore-marketplace-expansion |

R-005 selection is nonbinding; no mock acceptance in production. R-007A independent of referral/payment gates. R-006A sandbox permission does not approve production implementation, acceptance or release. All applicable AC-01–16/PAY-001–013 pass before R-006 acceptance/live release; AC-17 additionally required for referrals; no funded rematching, wallets or live money before approvals. Pilot scope, thresholds, reserve and external clearances recorded privately with redacted evidence. Split unrelated expansion into separate approved changes before implementation; preserve existing rights if flags disabled.
