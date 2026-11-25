# Design — Enable traveller discovery and offers

Draft; decisions not approved. Refer to domain-model.md, architecture.md, metrics.md and decision register.

Deterministic filter on sourcing/destination/date feasibility, rank with explainable signals; avoid exposing precise travel details publicly. Quote stores agreed amount, fee rate/base, FX provider/rate/time/direction, reference MSRP region/variant/currency/tax basis, quantity and cost assumptions. Show gross shopper total, net traveller receipt, estimated cost and margin separately. Tax refunds not guaranteed; unknown reference cost means no fabricated profit. Pending D-006 fee incidence; illustrative deduction: S$100 × 8% = S$8, receipt S$92 before cost; additive alternative must be separately approved. Atomic offer acceptance, one per request proposed.
