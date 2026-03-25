# PHAROS Case Template (Human-Readable)

## 0. Case Header
- Case ID:
- Case version:
- Date opened:
- Trigger type:
- Requesting function:
- Accountable reviewer:
- Target system name:
- Target system version:
- System owner:

## 1. Pressure + Question
- Pressure source:
- Governing question (must start with "This review determines whether"):
- Secondary questions:

## 2. Scope
- Intended use:
- In-scope surfaces:
- Out-of-scope surfaces:
- Users:
- Environments:
- Inputs:
- Outputs:
- Dependencies:
- Adjacent systems:

## 3. Operational Route
- Input source:
- Preprocessing/transform:
- Model/rules layer:
- Retrieval/tool use:
- Human review point:
- Output destination:
- Logging layer:
- Override path:
- Incident/shutdown path:

## 4. Claims Discipline
### Supported claims
- Claim ID:
  - Claim text:
  - Mechanism ref:
  - Workflow ref:
  - Controls refs:
  - Evidence refs:

### Unsupported/prohibited claims
- Claim text:

## 5. Threshold Map
- Threshold ID:
  - Condition:
  - Trigger value/state:
  - Required action:
  - Decision holder:
  - Evidence required:
  - Notify:
  - Escalation path:

## 6. Decision Rights
For each threshold, name:
- Recommends:
- Approves:
- Overrides:
- Halts/Suspends:
- Notified:
- Post-hoc review:
- Remediation owner:

## 7. Evidence Register
For each artifact:
- Artifact ID:
- Artifact type:
- Supports claim/control/threshold:
- Owner:
- Storage location:
- Retention:
- Retrieval method:
- Sensitivity class:
- Human sign-off required:

## 8. Crosswalk Targets
- Internal policy controls:
- Procurement:
- Audit:
- NIST AI RMF:
- ISO/IEC 42001:
- EU AI Act:
- Other:

## 9. Disposition
- Status (canonical enum only):
- Rationale:
- Conditions/remediation:
- Decided by:
- Decision date:

## 10. Re-entry Triggers
- Trigger ID:
- Condition:
- Required re-entry action:

## 11. Implementation Actions
- Action ID:
  - Owner:
  - Deadline:
  - Evidence of completion:

## 12. Provenance
- Repository commit:
- Artifact index hash:
- Packet digest:
