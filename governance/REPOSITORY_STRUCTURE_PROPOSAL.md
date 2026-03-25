# Repository Structure Proposal

## Claim
This structure keeps governance determination (PHAROS) separate from operationalization machinery (InfraFabric) while preserving shared traceability.

```
/governance/
  /pharos/
  /infrafabric/
  /thresholds/
  /decision_rights/
  /evidence/
  /cases/
  /validators/
  /maps/
```

## Why This Structure
- `pharos/` defines governance grammar and case contract.
- `infrafabric/` defines build discipline, boundary audits, enums, and trigger controls.
- `thresholds/`, `decision_rights/`, and `evidence/` hold load-bearing registries.
- `cases/` separates templates, examples, active, and closed packets.
- `validators/` enforces admissibility and anti-drift controls.
- `maps/` preserves crosswalk legibility for reconstruction.
