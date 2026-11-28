# Roadmap v0.9 — payment-reconciled draft

No product work authorized; draft review and applicable decisions/clearance required. R-001 setup only.

| ID | Outcome | Dependencies | Status | OpenSpec change |
| --- | --- | --- | --- | --- |
| R-000 | Minimal scaffold | None | done (prior runtime checks recorded) | Baseline |
| R-001 | Official OpenSpec initialization/validation | R-000 | ready, setup only | Tooling |
| R-002 | Resolve remaining material decisions and approve revision | None | review | v0.9 |
| R-003 | Cost-gated PWA, auth, environments, agent operations/metrics | R-001/002 | blocked | establish-marketplace-foundation |
| R-004 | Sparse catalogue and request publication | R-003 | blocked | enable-product-requests |
| R-005 | Trips, matching, offers and indicative estimates | R-004 | blocked | enable-trip-matching |
| R-006 | Stripe Connect SGD funding, refunds/rematch, receipt-triggered penalty, sequential handover/dispute, weekly settlement | R-005, D-006–011/013/015; Stripe/counsel and cost gates | blocked | complete-marketplace-transaction |
| R-007 | Country discovery, cloned demand, platform-funded referral discounts | R-004; R-006 for paid reward and promotion funding; D-014 clearance | blocked | grow-marketplace |
| R-008 | Bookmarks, collective buying, courier, itinerary integration, food, global corridors, recurrent orders, future card auth | R-006 and separate approvals | blocked | explore-marketplace-expansion |

Split into bounded increments; do not build blocked money/compliance paths. PWA, manual trip and sparse catalogue precede live payments; wallet proposal withdrawn before acceptance; original-tender refunds required; referral discounts remain gated; promote through dev/stg/prod only after bootstrap approval.
