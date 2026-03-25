# InfraFabric Implementation Rules (v1.0)

## Claim
InfraFabric is the operationalization discipline for PHAROS governance logic. It is not the governance method itself.

## Scope Clamp
InfraFabric owns repository objects, schemas, validators, manifests, runtime boundary audits, change controls, and local-first proof. PHAROS owns admissibility, thresholds, authority, disposition, and bounded claims.

## Build Rules
1. Preserve strong governance materials; operationalize them.
2. No blind renames across runtime-sensitive surfaces.
3. Every control must reference evidence artifacts.
4. Every threshold must reference decision rights.
5. Every disposition must use canonical enum values.
6. Every supported claim must crosswalk to mechanism, workflow node, controls, and evidence.
7. Local proof before deployment assumptions.

## Required Infra Objects
- `pharos_case.schema.json` (machine contract)
- `thresholds/*.yaml` (route change gates)
- `decision_rights/authority_matrix.yaml` (authority bindings)
- `evidence/evidence_register.yaml` (artifact retrievability)
- `infrafabric/CHANGE_TRIGGER_REGISTRY.yaml` (re-entry controls)
- `validators/*.py` (admissibility checks)
- `infrafabric/runtime_boundary_manifest.yaml` (load-bearing boundary map)

## Failure Semantics
A case is non-admissible if any validator emits `FAIL`.
`FLAG` indicates a governance risk requiring reviewer action before promotion.
