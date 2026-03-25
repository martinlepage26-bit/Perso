#!/usr/bin/env bash
set -euo pipefail

python3 governance/validators/validate_case.py "$@"
python3 governance/validators/validate_thresholds.py
python3 governance/validators/validate_evidence_links.py "$@"
python3 governance/validators/validate_status_enums.py "$@"
python3 governance/validators/validate_provenance.py "$@"
python3 governance/validators/validate_runtime_boundaries.py
