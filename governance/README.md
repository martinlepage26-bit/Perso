# PHAROS -> InfraFabric Governance Infrastructure

## Claim
This directory operationalizes PHAROS governance into inspectable InfraFabric build objects without collapsing governance and fabrication.

## Layer Split
- `pharos/`: governance logic and case contract.
- `infrafabric/`: implementation discipline, enums, boundary audits, trigger registry.
- `thresholds/`, `decision_rights/`, `evidence/`: load-bearing control registries.
- `cases/`: case instances and templates.
- `validators/`: admissibility checks.
- `maps/`: crosswalks between governance logic and runtime objects.

## Local Proof Commands
```bash
./governance/validators/run_all.sh --case governance/cases/examples/CASE-2026-POLICY-DRAFT-001.yaml
```

Individual checks:
```bash
python3 governance/validators/validate_case.py --case governance/cases/examples/CASE-2026-POLICY-DRAFT-001.yaml
python3 governance/validators/validate_thresholds.py
python3 governance/validators/validate_evidence_links.py --case governance/cases/examples/CASE-2026-POLICY-DRAFT-001.yaml
python3 governance/validators/validate_status_enums.py --case governance/cases/examples/CASE-2026-POLICY-DRAFT-001.yaml
python3 governance/validators/validate_provenance.py --case governance/cases/examples/CASE-2026-POLICY-DRAFT-001.yaml
python3 governance/validators/validate_runtime_boundaries.py
```
