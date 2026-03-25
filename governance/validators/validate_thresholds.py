#!/usr/bin/env python3
from __future__ import annotations

from common import Report, governance_root, load_structured, threshold_files


def main() -> int:
    report = Report()

    authority_path = governance_root() / "decision_rights" / "authority_matrix.yaml"
    authority = load_structured(authority_path)
    bound_ids = {row.get("threshold_id") for row in authority.get("threshold_bindings", [])}

    seen: set[str] = set()
    for path in threshold_files():
        data = load_structured(path)
        tid = data.get("threshold_id")
        if not tid:
            report.fail(f"{path.name}: missing threshold_id")
            continue

        if tid in seen:
            report.fail(f"duplicate threshold_id detected: {tid}")
        seen.add(tid)

        owner = str(data.get("owner_role", "")).strip()
        decision_holder = str(data.get("decision_holder_role", "")).strip()
        evidence = data.get("evidence_required") or []

        if not owner:
            report.fail(f"threshold {tid} has no owner")
        if not decision_holder:
            report.fail(f"threshold {tid} has no decision holder")
        if not evidence:
            report.fail(f"threshold {tid} has no evidence")

        if tid not in bound_ids:
            report.fail(f"threshold {tid} missing authority binding")

        trigger_type = str(data.get("trigger_type", "")).strip()
        if "metric" in trigger_type and not str(data.get("metric_source", "")).strip():
            report.flag(f"threshold {tid} uses metric trigger without metric_source")

        report.ok(f"threshold {tid} parsed")

    return report.emit()


if __name__ == "__main__":
    raise SystemExit(main())
