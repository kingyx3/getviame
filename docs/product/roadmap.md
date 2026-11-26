# Roadmap v0.3

No product work authorized; draft review and applicable decisions/clearance required. R-001 setup only.

| ID | Outcome | Dependencies | Status | OpenSpec change |
| --- | --- | --- | --- | --- |
| R-000 | Minimal scaffold | None | done (prior runtime checks recorded) | Baseline |
| R-001 | Official OpenSpec initialization/validation | R-000 | ready, setup only | Tooling |
| R-002 | Resolve remaining material decisions and approve revision | None | review | v0.3 |
| R-003 | Cost-gated PWA, auth, environments, agent operations/metrics | R-001/002 | blocked | establish-marketplace-foundation |
| R-004 | Sparse catalogue and request publication | R-003 | blocked | enable-product-requests |
| R-005 | Trips, matching, offers and indicative estimates | R-004 | blocked | enable-trip-matching |
| R-006 | SGD funding, receipt-triggered penalty/reopen, sequential handover/dispute, scheduled payouts/reviews | R-005 and D-007–011/013/015/022 | blocked | complete-marketplace-transaction |
| R-007 | Country discovery, cloned demand, referrals | R-004; credits need policy; referrer reward R-006 | blocked | grow-marketplace |
| R-006A | Individual SGD credit wallets, refund election, credit earnings incentive | R-005 and external D-010/013; D-015/022 approved; integrate with R-006 | blocked | enable-sgd-credit-wallets |
| R-008 | Bookmarks, collective buying, courier, itinerary integration, food, global corridors, recurrent orders, expanded cash redemption | R-006 and separate approvals | blocked | explore-marketplace-expansion |

Split into bounded increments; do not build blocked money/compliance paths. PWA, manual trip and sparse catalogue precede live payments; wallet desired scope, separate compliance-gated increment; cash-only pilot requires owner approval if wallet gate unresolved; promote through dev/stg/prod only after bootstrap approval.
