#!/usr/bin/env python3
from __future__ import annotations

from common import Report, governance_root, load_csv, load_structured, parse_args


def main() -> int:
    args = parse_args("governance/cases/examples/CASE-2026-POLICY-DRAFT-001.yaml")
    report = Report()

    root = governance_root().parent
    case = load_structured(root / args.case)
    evidence_register = load_structured(governance_root() / "evidence" / "evidence_register.yaml")
    crosswalk_rows = load_csv(governance_root() / "maps" / "control_to_evidence_crosswalk.csv")

    artifacts = {a.get("artifact_id"): a for a in evidence_register.get("artifacts", [])}
    controls_in_crosswalk = {row.get("control_id") for row in crosswalk_rows}

    for claim in case.get("claims", {}).get("supported", []):
        cid = claim.get("claim_id", "<unknown>")
        refs = claim.get("evidence_refs") or []
        if not refs:
            report.fail(f"claim {cid} has no evidence crosswalk")
            continue
        missing = [ref for ref in refs if ref not in artifacts]
        if missing:
            report.fail(f"claim {cid} references missing evidence artifacts: {', '.join(missing)}")

        supporting = [aid for aid, art in artifacts.items() if cid in (art.get("supports", {}).get("claims") or [])]
        if not supporting:
            report.fail(f"claim {cid} has no evidence register artifact mapping")

    for threshold in case.get("thresholds", []):
        tid = threshold.get("threshold_id", "<unknown>")
        if tid not in controls_in_crosswalk:
            report.fail(f"threshold {tid} missing control->evidence crosswalk row")

        required = threshold.get("evidence_required") or []
        missing = [ref for ref in required if ref not in artifacts]
        if missing:
            report.fail(f"threshold {tid} references missing evidence artifacts: {', '.join(missing)}")

        supporting = [aid for aid, art in artifacts.items() if tid in (art.get("supports", {}).get("thresholds") or [])]
        if not supporting:
            report.fail(f"threshold {tid} has no supporting artifact in evidence register")

    report.ok("Evidence linkage checks executed.")
    return report.emit()


if __name__ == "__main__":
    raise SystemExit(main())
