# Runtime Boundary Audit

## Claim
Naming and conceptual cleanup are permitted only where runtime/load-bearing identifiers are not impacted.

## Boundary Classes
1. Conceptual-only surfaces: prose labels, explanatory headings, narrative descriptions.
2. Load-bearing governance surfaces: threshold IDs, case IDs, trigger IDs, status enums.
3. Runtime surfaces: file paths consumed by validators, registry keys, workflow route node keys.

## Audit Checks
- If rename touches runtime-sensitive identifier (`case_id`, `threshold_id`, `trigger_id`, `disposition.status`, route node keys), require migration plan and evidence.
- If rename is conceptual-only, document as non-load-bearing and proceed.
- If uncertain, classify as runtime-sensitive and block until proven safe.

## Required Evidence for Runtime Renames
- migration note with before/after mapping
- impacted validator list
- replayed validator run proving no unresolved references
- case/evidence registry backfill note

## Current Posture
No runtime-sensitive rename approved by default.
