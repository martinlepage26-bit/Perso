#!/usr/bin/env python3
from __future__ import annotations

import re

from common import Report, governance_root, has_absolute_path, load_structured, parse_args, threshold_files


def main() -> int:
    args = parse_args("governance/cases/examples/CASE-2026-POLICY-DRAFT-001.yaml")
    report = Report()

    root = governance_root().parent
    case = load_structured(root / args.case)
    evidence = load_structured(governance_root() / "evidence" / "evidence_register.yaml")

    case_id = case.get("case_id")

    # Provenance drift must fail.
    for artifact in evidence.get("artifacts", []):
        aid = artifact.get("artifact_id", "<unknown>")
        linked = str(artifact.get("provenance", {}).get("linked_case_id", "")).strip()
        if linked and linked not in {"${case_id}", case_id}:
            report.fail(f"provenance drift: artifact {aid} linked_case_id={linked} != {case_id}")

    # Hardcoded source paths must be flagged.
    route = case.get("route", {})
    for key, value in route.items():
        if isinstance(value, str) and has_absolute_path(value):
            report.flag(f"hardcoded source path in route.{key}: {value}")

    for artifact in evidence.get("artifacts", []):
        uri = str(artifact.get("storage_uri", ""))
        aid = artifact.get("artifact_id", "<unknown>")
        if has_absolute_path(uri):
            report.flag(f"hardcoded storage path in {aid}: {uri}")

    # Hardcoded metrics should be flagged.
    numeric_literal = re.compile(r"\b\d+(?:\.\d+)?\b")
    for path in threshold_files():
        data = load_structured(path)
        tid = data.get("threshold_id", path.name)
        trigger_type = str(data.get("trigger_type", ""))
        trigger_value = str(data.get("trigger_value_or_state", ""))
        if "metric" in trigger_type and numeric_literal.search(trigger_value):
            if "configured." not in trigger_value and "policy." not in trigger_value:
                report.flag(f"hardcoded metric literal in threshold {tid}: {trigger_value}")

    report.ok("Provenance checks executed.")
    return report.emit()


if __name__ == "__main__":
    raise SystemExit(main())
