# PHAROS Runbook SOP (Formal)

## Document Control

| Field | Value |
| --- | --- |
| SOP ID | PHAROS-SOP-001 |
| Title | PHAROS Governance Runbook SOP |
| Version | 1.1 |
| Status | Active |
| Effective date | 2026-03-25 |
| Owner | Governance Lead |
| Approver | Accountable Reviewer Authority |
| Review cadence | Quarterly or on material method change |
| Controlled location | `governance/pharos/PHAROS_RUNBOOK_CANONICAL.md` |
| Related machine contracts | `governance/pharos/pharos_case.schema.json` |

## 0. Governing Claim

PHAROS is the governance containment and admissibility method. It does not fabricate runtime implementation. It determines whether a governed action may proceed, under what conditions, by whose authority, with what proof.

## 0.1 Scope Clamp

This SOP governs case-level governance determinations for target systems. It does not replace InfraFabric implementation rules. InfraFabric operationalizes PHAROS determinations into repository objects, validators, manifests, and runtime boundary controls.

## 0.2 Controlling Sequence

**Pressure source -> Governing question -> Operational route -> Thresholds -> Decision rights -> Evidence path -> Disposition -> Re-entry triggers**

## 0.3 Layer Boundary

- PHAROS layer: admissibility, bounded claims, threshold logic, authority, disposition.
- InfraFabric layer: schemas, manifests, validators, boundary audits, change controls, evidence registries, local-first proof.

If these layers are collapsed, governance determinism degrades.

## 1. Applicability

This SOP applies when any system requires governance admissibility review for procurement, audit, launch, escalation, material model/workflow change, or claims scrutiny.

This SOP applies to:

- human-led review workflows
- agent-assisted review workflows
- hybrid review workflows where authority remains assigned to named human roles

## 2. Normative Requirements (Non-negotiable)

1. No governing question, no case.
2. No scope clamp, no admissibility.
3. No threshold owner, no threshold validity.
4. No threshold evidence, no threshold validity.
5. No canonical disposition enum, no disposition validity.
6. No claim-to-mechanism-to-workflow-to-controls-to-evidence crosswalk, no publishable claim.
7. No provenance integrity, no case promotion.
8. No runtime-boundary review for load-bearing rename, no rename promotion.

## 3. Roles and Authority

### 3.1 Accountable Reviewer

- Owns case integrity and admissibility decision.
- Arbitrates unresolved governance conflicts.
- Signs final disposition record.

### 3.2 System Owner

- Supplies operational truth for route and dependencies.
- Implements approved controls, gates, and remediation tasks.

### 3.3 Decision Holders

Per threshold, named roles must be assigned for:

- recommends
- approves
- overrides
- halts/suspends
- notified functions
- post hoc reviewer

### 3.4 Evidence Steward

- Maintains artifact retrievability and case linkage.
- Verifies dating, attribution, and storage policy compliance.

### 3.5 Governance Operations

- Runs validators.
- Maintains registries and schema compatibility.
- Enforces local-first proof gates.

## 4. Required Inputs and Controlled Artifacts

Minimum admissibility inputs:

- case header data
- pressure statement
- governing question
- scope boundary
- route map
- claims and non-claims register
- thresholds with decision holders and evidence requirements
- decision-rights matrix
- evidence references
- disposition draft
- re-entry trigger set

Controlled artifacts:

- `governance/pharos/pharos_case.schema.json`
- `governance/thresholds/threshold_registry.yaml`
- `governance/decision_rights/authority_matrix.yaml`
- `governance/evidence/evidence_register.yaml`
- `governance/infrafabric/CHANGE_TRIGGER_REGISTRY.yaml`
- `governance/infrafabric/status_enums.json`

## 5. Procedure

### Step 1. Open Case Record

- Objective: Create a traceable governance container.
- Required fields: case ID, date opened, target system, owner, requesting function, trigger type, accountable reviewer.
- Evidence artifact: intake case record.
- Exit condition: question "why now?" can be answered with a concrete trigger.

### Step 2. State Pressure Source

- Objective: Name the active scrutiny source.
- Procedure: Write one paragraph with concrete pressure driver.
- Control check: pressure must be specific, not generic motivation.
- Evidence artifact: pressure statement record.
- Exit condition: reviewer can identify scrutiny origin without inference.

### Step 3. Write Governing Question

- Objective: Define one adjudicable question.
- Rule: sentence must begin with "This review determines whether".
- Control check: validator fails if missing or malformed.
- Evidence artifact: governing question field in case packet.
- Exit condition: reviewers can restate the same question with high fidelity.

### Step 4. Bound Scope

- Objective: Prevent boundary drift.
- Required fields: name/version, intended use, users, environments, inputs, outputs, dependencies, adjacent systems, excluded surfaces.
- Control check: in-scope and out-of-scope surfaces both required.
- Evidence artifact: scope note.
- Exit condition: governed object is explicit and testable.

### Step 5. Map Operational Route

- Objective: Anchor governance to workflow reality.
- Required route nodes:
1. input source
2. preprocessing/transformation
3. model or rules layer
4. retrieval/tool layer
5. human review point
6. output destination
7. logging layer
8. override path
9. incident/shutdown path
- Evidence artifact: route map and interface notes.
- Exit condition: third party can trace input-to-output path and control points.

### Step 6. Build Claims and Non-Claims Register

- Objective: Keep claim boundary narrower than proof.
- Required for supported claims:
1. mechanism reference
2. workflow reference
3. control references
4. evidence references
- Control check: claims without evidence crosswalk fail.
- Evidence artifact: claims register.
- Exit condition: no unsupported claim remains in supported set.

### Step 7. Define Thresholds

- Objective: Encode route-changing conditions.
- Required fields per threshold:
1. threshold ID
2. condition/trigger state
3. required action
4. decision holder
5. required evidence
6. notification path
7. effect type (`blocking`, `review_gating`, `advisory`, `halt_suspend`)
- Control check:
1. threshold without owner fails
2. threshold without evidence fails
- Evidence artifact: threshold map / registry entries.
- Exit condition: every escalation/halt/approval condition is operationally explicit.

### Step 8. Bind Decision Rights

- Objective: Make authority deterministic.
- Required dimensions:
1. recommends
2. approves
3. overrides
4. halts/suspends
5. notified functions
6. post hoc review
- Control check: every threshold must map to decision-rights entry.
- Evidence artifact: authority matrix.
- Exit condition: no threshold exists without named authority chain.

### Step 9. Define Evidence Path

- Objective: Ensure reconstruction without memory dependence.
- Artifact requirements:
1. dated
2. attributable
3. retrievable
4. linked to case ID
5. stored in approved location
- Evidence artifact: evidence register entries.
- Exit condition: independent reviewer can rebuild decision trail.

### Step 10. Cross-walk External Frameworks (Downstream)

- Objective: Translate internal packet into external language after coherence.
- Rule: cross-walk cannot substitute for internal control logic.
- Evidence artifact: crosswalk note or matrix.
- Exit condition: external mapping is traceable back to internal controls.

### Step 11. Hold Formal Review and Set Disposition

- Meeting order:
1. restate pressure
2. restate governing question
3. verify scope
4. walk route
5. test thresholds
6. verify decision rights
7. inspect evidence sufficiency
8. decide disposition

- Canonical disposition enums:
1. `approve`
2. `approve_with_conditions`
3. `defer_pending_evidence`
4. `restrict_scope`
5. `reject`
6. `suspend_pending_remediation`

- Control check: unsupported disposition value fails.
- Evidence artifact: signed disposition memo.
- Exit condition: case has explicit decision and rationale.

### Step 12. Bind Disposition into Operations

- Objective: convert decision into workflow reality.
- Required follow-through:
1. update gates
2. notify owners
3. update templates
4. activate monitoring
5. correct claims
6. track unresolved remediation
- Evidence artifact: implementation action log with owners and deadlines.
- Exit condition: disposition is active in system workflow.

### Step 13. Register Re-entry Triggers

- Objective: make case re-open conditions explicit.
- Minimum triggers:
1. model swap
2. vendor change
3. new data source
4. new tool access
5. new jurisdiction
6. expanded user base
7. expanded autonomy
8. incident/near miss
9. material claims change
10. audit finding
11. evidence failure
- Control check: case must include at least one trigger from registry.
- Evidence artifact: trigger register linkage.
- Exit condition: re-open conditions are explicit and monitorable.

## 6. Validation and Acceptance Gates

Case promotion to "review-ready" requires all checks passing:

1. missing governing question -> FAIL
2. missing scope clamp -> FAIL
3. threshold without owner -> FAIL
4. threshold without evidence -> FAIL
5. unsupported status enum -> FAIL
6. provenance drift -> FAIL
7. claims without evidence crosswalk -> FAIL
8. hardcoded metrics/source paths -> FLAG
9. runtime-sensitive rename without migration plan -> FLAG/FAIL per severity

Run local proof before any deployment assumption:

```bash
./governance/validators/run_all.sh --case governance/cases/examples/CASE-2026-POLICY-DRAFT-001.yaml
```

## 7. Records and Retention

Minimum record set per case:

1. case record
2. pressure statement
3. governing question
4. scope note
5. route map
6. claims/non-claims register
7. threshold map
8. decision-rights matrix
9. evidence register
10. cross-walk note
11. disposition memo
12. re-entry trigger register

Retention and retrieval controls are governed by:

- `governance/evidence/retention_and_retrieval.md`
- `governance/evidence/evidence_register.yaml`

## 8. Exception Handling and Nonconformance

If a case cannot meet a mandatory requirement:

1. mark status `defer_pending_evidence` or `suspend_pending_remediation`
2. document deviation reason
3. assign remediation owner and deadline
4. define additional evidence requirement
5. re-run validation before promotion

No exception may bypass governing question, threshold ownership, or evidence binding.

## 9. Root-Cause Integration Rule

RCA is diagnostic and optional unless triggered by:

- incident
- near miss
- repeated override
- evidence failure
- failed review gate

When triggered, RCA findings must map to updates in one or more of:

- scope
- threshold design
- decision-rights assignment
- route mapping
- evidence architecture

## 10. Quality Assurance Tests

The packet is acceptable only if all tests pass:

1. Clarity: third party can state the reviewed question.
2. Determinism: route changes are tied to explicit conditions.
3. Accountability: authority at each control point is identifiable.
4. Reconstruction: artifacts can reproduce decision history.
5. Boundedness: claims are narrower than evidence support.

## 11. Failure Modes to Monitor

- scope inflation
- vague governing question
- rhetorical thresholds
- responsibility language without authority assignment
- missing/inaccessible evidence
- cross-walk before internal coherence
- claims outrunning proof
- one-time packet with no re-entry logic

## 12. Transfer Rule

Transfer structure only. Regenerate determinations for each new system.

Do not reuse prior packet conclusions by name substitution for:

- pressure source
- governing question
- route map
- thresholds
- decision rights
- evidence path

## Appendix A. One-Page Operational Case Sheet

Case ID:  
Date opened:  
Accountable reviewer:  
Target system:  
System owner:  
Trigger type:  
Requesting function:  

Pressure source:  
Governing question:  
Secondary questions:  

Intended use:  
In-scope surfaces:  
Out-of-scope surfaces:  
Inputs:  
Outputs:  
Dependencies:  
Environments:  

Input source:  
Processing layer:  
Model/rules/retrieval layer:  
Tool/external dependency:  
Human review point:  
Output destination:  
Logging point:  
Override path:  
Incident path:  

Supported claims:  
Unsupported/prohibited claims:  

Thresholds:  
Decision rights:  
Evidence required:  

Cross-walk targets:  

Disposition (`approve|approve_with_conditions|defer_pending_evidence|restrict_scope|reject|suspend_pending_remediation`):  
Conditions/remediation:  
Owners:  
Review date:  
Next review date:  

Re-entry triggers:  
