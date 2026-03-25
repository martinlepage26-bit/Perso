#!/usr/bin/env python3
from __future__ import annotations

from pathlib import Path

from common import Report, governance_root, load_structured


def main() -> int:
    report = Report()

    manifest = load_structured(governance_root() / "infrafabric" / "runtime_boundary_manifest.yaml")
    runtime_sensitive = set(manifest.get("runtime_sensitive_identifiers", []))

    rename_path = governance_root() / "infrafabric" / "rename_requests.yaml"
    if not rename_path.exists():
        report.ok("No rename_requests.yaml found; no runtime rename actions pending.")
        return report.emit()

    rename_data = load_structured(rename_path)
    requests = rename_data.get("requests", []) if isinstance(rename_data, dict) else []
    if not requests:
        report.ok("No runtime rename requests declared.")
        return report.emit()

    for req in requests:
        old_id = req.get("old_identifier")
        runtime_hint = bool(req.get("runtime_sensitive", False))
        migration_plan = req.get("migration_plan")
        evidence_refs = req.get("evidence_refs") or []

        is_runtime_sensitive = runtime_hint or old_id in runtime_sensitive
        if is_runtime_sensitive and (not migration_plan or not evidence_refs):
            report.flag(
                f"runtime-sensitive rename flagged without migration plan/evidence: {old_id} -> {req.get('new_identifier')}"
            )
        else:
            report.ok(f"rename request checked: {old_id}")

    return report.emit()


if __name__ == "__main__":
    raise SystemExit(main())
