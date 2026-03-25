#!/usr/bin/env python3
from __future__ import annotations

from common import Report, governance_root, load_structured, parse_args, threshold_files


def main() -> int:
    args = parse_args("governance/cases/examples/CASE-2026-POLICY-DRAFT-001.yaml")
    report = Report()

    root = governance_root().parent
    case = load_structured(root / args.case)
    enums = load_structured(governance_root() / "infrafabric" / "status_enums.json")

    status = case.get("disposition", {}).get("status")
    if status not in enums.get("disposition", []):
        report.fail(f"unsupported disposition enum: {status}")
    else:
        report.ok("Disposition enum is canonical.")

    allowed_effects = set(enums.get("threshold_effect", []))
    for path in threshold_files():
        data = load_structured(path)
        effect = data.get("effect")
        tid = data.get("threshold_id", path.name)
        if effect not in allowed_effects:
            report.fail(f"threshold {tid} has unsupported effect enum: {effect}")

    return report.emit()


if __name__ == "__main__":
    raise SystemExit(main())
