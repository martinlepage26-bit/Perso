#!/usr/bin/env python3
from __future__ import annotations

from pathlib import Path

import jsonschema

from common import Report, governance_root, load_structured, parse_args


def main() -> int:
    args = parse_args("governance/cases/examples/CASE-2026-POLICY-DRAFT-001.yaml")
    report = Report()

    root = governance_root().parent
    case_path = root / args.case
    schema_path = governance_root() / "pharos" / "pharos_case.schema.json"
    enum_path = governance_root() / "infrafabric" / "status_enums.json"

    case = load_structured(case_path)
    schema = load_structured(schema_path)
    enums = load_structured(enum_path)

    try:
        jsonschema.validate(case, schema)
        report.ok("Case satisfies JSON schema contract.")
    except jsonschema.ValidationError as exc:
        report.fail(f"Schema validation error at {'/'.join(str(x) for x in exc.absolute_path)}: {exc.message}")
        return report.emit()

    question = str(case.get("governing_question", "")).strip()
    if not question:
        report.fail("missing governing question")
    elif not question.startswith("This review determines whether"):
        report.fail("governing question does not use required prefix")
    else:
        report.ok("Governing question present and correctly anchored.")

    threshold_ids = {t.get("threshold_id") for t in case.get("thresholds", [])}
    rights_ids = {d.get("threshold_id") for d in case.get("decision_rights", [])}

    missing_rights = sorted(x for x in threshold_ids if x not in rights_ids)
    if missing_rights:
        report.fail(f"thresholds without decision-rights bindings: {', '.join(missing_rights)}")
    else:
        report.ok("All thresholds have decision-rights bindings.")

    for threshold in case.get("thresholds", []):
        tid = threshold.get("threshold_id", "<unknown>")
        if not str(threshold.get("decision_holder", "")).strip():
            report.fail(f"threshold {tid} has no decision holder")
        if not threshold.get("evidence_required"):
            report.fail(f"threshold {tid} has no evidence")

    disposition = case.get("disposition", {}).get("status")
    if disposition not in enums.get("disposition", []):
        report.fail(f"unsupported status enum: {disposition}")
    else:
        report.ok("Disposition status enum is canonical.")

    for claim in case.get("claims", {}).get("supported", []):
        cid = claim.get("claim_id", "<unknown>")
        if not claim.get("controls_refs"):
            report.fail(f"supported claim {cid} has no control crosswalk")
        if not claim.get("evidence_refs"):
            report.fail(f"supported claim {cid} has no evidence crosswalk")

    return report.emit()


if __name__ == "__main__":
    raise SystemExit(main())
