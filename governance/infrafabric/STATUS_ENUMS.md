# Canonical Status Enums

## PHAROS Disposition Enum (authoritative)
- `approve`
- `approve_with_conditions`
- `defer_pending_evidence`
- `restrict_scope`
- `reject`
- `suspend_pending_remediation`

## Threshold Effect Enum
- `blocking`
- `review_gating`
- `advisory`
- `halt_suspend`

## Validator Semantics
- `PASS`: condition satisfied
- `FAIL`: non-admissible; must be fixed
- `FLAG`: risk signal; requires reviewer adjudication
