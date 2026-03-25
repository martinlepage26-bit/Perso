# Canonical PHAROS -> InfraFabric Object Map

| PHAROS Layer Element | InfraFabric Object | Runtime Binding | Validation Gate | Evidence Binding |
|---|---|---|---|---|
| Pressure source | `pharos_case.pressure_source` | Case activation context | Non-empty, specific text | Intake memo (`EV-*`) |
| Governing question | `pharos_case.governing_question` | Primary decision contract | Required prefix + schema required | Review agenda + signed memo |
| Route | `pharos_case.route` + `maps/route_map_template.md` | Input->output workflow path | Required nodes present | Route map artifact |
| Thresholds | `thresholds/*.yaml` + `pharos_case.thresholds` | Route state transitions | Owner + evidence + action required | Threshold decision log |
| Decision rights | `decision_rights/authority_matrix.yaml` + `pharos_case.decision_rights` | Authority and escalation path | Threshold coverage complete | Authority approval records |
| Evidence path | `evidence/evidence_register.yaml` | Artifact storage and retrieval | Retrievable, linked, dated, attributable | Evidence registry entries |
| Disposition | `pharos_case.disposition.status` | Governance state machine | Canonical enum only | Disposition memo |
| Re-entry triggers | `infrafabric/CHANGE_TRIGGER_REGISTRY.yaml` | Case reopening controls | Trigger ID + owner + evidence | Change event log |
| Claims discipline | `pharos_case.claims.supported[]` | Public/internal claim surface | Claim->control->evidence crosswalk required | Claim crosswalk registry |
