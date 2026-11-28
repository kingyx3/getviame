# v0.12 decision-to-requirement and verification handoff
Founder approved Q127–205 in owner-answers-v0.12.md, base main 59b17335, PR #3. This matrix is a coverage map of proposed acceptance cases, not evidence of implementation. Existing requirement IDs and AC-01–17 retained; all applicable tests/approval gates remain open. For each mapped requirement implement scenario-level executable tests or documented manual/external verification, record command, outcome, commit and independent reviewer. Do not archive a partially verified change.

| Decision group | Proposed requirement IDs | Required verification |
| --- | --- | --- |
| Q127–132, 196 | ID-001–004, ACC-001, PRIV-001, POL-001 | Guest read-only, unauthorised/duplicate/underage/eligibility, session revoke, restricted lifecycle obligations, retention |
| Q133–139 | CAT-001–004, FUL-001/004, PRIV-001 | Missing MSRP, duplicate/merge/version, provenance, regional availability, rights/SSRF/upload/AI isolation |
| Q140–147 | REQ-003–005, OFR-002–006, TRIP-001–004, PAY-001/014 | Editing/expiry/reservation/withdrawal/competing funding, selection not acceptance, trip change, consent and provider amendment |
| Q148–155 | PAY-005/009/011/014–018, REQ-005, OFR-001/006, REF-007 | S$10/S$500 boundaries, exact seller net/fee/tax, residual cash, multi-charge and consent, no unsupported collection |
| Q156–161 | FUL-001/004, PAY-007/016, COM-002 | Receipt match, shared quantity, timestamp races, uncertain evidence, notification, invalid/late evidence |
| Q162–165 | PAY-006/007/016, SAFE-001, DSP-004 | All initiator/phase cancellations, compensation challenge, no post-delivery penalty workflow, restrictions/appeal |
| Q166–170 | FUL-002/003/005, MSG-001, PRIV-001 | Code replay/wrong order, manual or sufficient evidence, no-show, 30-day limit, privacy |
| Q171–177 | DSP-001–004, ADM-001, PAY-003/004/016/017 | Early/timely dispute, deadline race, delayed job, response/resolution targets, cutoff, appeal, human maker-checker |
| Q178–183 | PAY-009–013/015/017; AC-01–16,18–22,24 | Exclusive payout control, account isolation, reserve and exposure, disjoint liability, actual fee/recovery, insolvency continuity, no instant payout |
| Q184–191 | REF-001–007, PAY-018; AC-17/23 | Attribution, grant order/expiry/unlock/restoration, cumulative tranche, fraud/requalify, promo-only and mixed refund |
| Q192–197 | POL-001, SAFE-001, ACC-001, PRIV-001, OPS-003, FLAG-001 | Eligibility allowlist, food/high-risk, messaging safety, deletion obligations, pilot |
| Q198–205 | DISC-001–003, MET-001, OPS-001–003, ADM-001 | Pilot corridor/product selection, acquisition measurement, cost forecasts, human support escalation and expansion guardrails |
| Restored historical | REQ-005, ID-004, FUL-004/005, REV-001–003, HIST-001, COM-002, FLAG-001, POL-001, SAFE-001 | Cap, guest, shopper KYC, code, notices, 14-day reviews, five eligible orders, history, flags, category review and cancellation restrictions |

Legal/contractual evidence remains separate: exact merchant role, Singapore payment-services perimeter and necessary regulator action, tax treatment, lawful eligibility/employment/customs/transport, consumer remedies, category-specific product law, privacy/IP and insurance, actual Stripe controls and cost/independent reserve/continuity. Do not put private operating thresholds or confidential evidence in public Git; reference redacted approval records. Foundation features depending on payments implement only approved nonfinancial interfaces first; test full obligations with R-006; no false completion. No business operation or real funds authorised by this PR.
