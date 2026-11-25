# Roadmap — v0.1

All product changes below are DRAFT / blocked from implementation until human approval of scope and applicable decisions. The proposed dependency graph is not an authorization queue. R-001 remains setup only.

| ID | Outcome | Dependencies | Status | OpenSpec change |
| --- | --- | --- | --- | --- |
| R-000 | Minimal application scaffold | None | done (local runtime checks previously recorded) | Baseline |
| R-001 | Initialize official OpenSpec integrations and validate specs | R-000 | ready (setup only) | Tooling setup |
| R-002 | Confirm MVP decisions and approve spec revision | None | review | Product v0.1 |
| R-003 | Environment, auth, operational and metrics foundation | R-001, R-002 | blocked | establish-marketplace-foundation |
| R-004 | Catalogue, request publication and policy moderation | R-003 | blocked | enable-product-requests |
| R-005 | Browse, manual trips, estimates and offer acceptance | R-004 | blocked | enable-trip-matching |
| R-006 | Fund order, receipt, handover, dispute, settlement, reviews | R-005; D-006–D-012 | blocked | complete-marketplace-transaction |
| R-007 | Country discovery, demand replication, referrals/comms | R-004; referral requires R-006 | blocked | grow-marketplace |
| R-008 | Courier, itinerary import, food, regional expansion, cash points | R-006 and relevant compliance/partner approval | blocked | explore-marketplace-expansion |

Pilot MVP is proposed as R-003–R-006; R-007 is early growth, with welcome comms in R-003. Split changes into independently reviewable vertical increments before implementation when dependencies and contracts are agreed. Promote one reviewed change at a time; do not start blocked money/compliance features. No product implementation authorized by this specification-only request.
