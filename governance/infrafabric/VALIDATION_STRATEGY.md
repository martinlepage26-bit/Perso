# Validation Strategy

## Claim
Governance packets are admissible only when machine checks pass and evidence crosswalks are complete.

## Required Validator Set
- `validate_case.py`
- `validate_thresholds.py`
- `validate_evidence_links.py`
- `validate_status_enums.py`
- `validate_provenance.py`
- `validate_runtime_boundaries.py`

## Enforcement Targets
- missing governing question -> FAIL
- thresholds without owners -> FAIL
- thresholds without evidence -> FAIL
- unsupported status enums -> FAIL
- provenance drift -> FAIL
- hardcoded metrics or source paths -> FLAG
- runtime-sensitive renames without migration plan -> FLAG
- claims without evidence crosswalk -> FAIL

## Local-first Rule
Run validators locally against active case packets before any deployment assumptions or external assurance claims.
