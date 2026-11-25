# Decision register

Record a decision only after an authorized human explicitly resolves it, or label an engineering assumption as provisional. A proposal's approval is scoped to a specific revision; material revisions require renewed approval.

| ID | Topic | Status | Decision / next action |
| --- | --- | --- | --- |
| D-001 | Product and audience | Open | Human to describe purpose and users |
| D-002 | Core journey | Open | Human to describe primary workflow |
| D-003 | MVP scope | Open | Human to confirm capabilities and non-goals |
| D-004 | Platform, data and constraints | Open | Clarify as discovery progresses |
| D-005 | Operations and success measures | Open | Clarify before relevant implementation |
| E-001 | Temporary development runtime | Provisional | Node.js 22+ built-in HTTP server; not a permanent stack decision |
| E-002 | Source control | Provisional | Keep specs and code together, branch/PR for subsequent changes |

## Decision record format
- ID, date, status (open/proposed/approved/rejected/superseded)
- Question and why it matters
- Options, recommendation and trade-offs
- Resolution, approver and approval reference
- Affected requirements, changes and follow-up actions

Do not record an agent's recommendation as a human approval.
