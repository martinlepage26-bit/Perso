# Evidence Retention and Retrieval

## Retention Baseline
- control-affecting artifacts: minimum 84 months
- operational telemetry artifacts: minimum 24 months
- disposition artifacts: same retention as control-affecting artifacts

## Retrieval Rule
Every artifact must be retrievable by `case_id` without human memory reconstruction.

## Storage Rule
Storage paths must be parameterized using `${case_id}` or equivalent manifest keys.
Absolute local machine paths are not admissible.
