#!/usr/bin/env python3
from __future__ import annotations

import argparse
import csv
import json
import re
import sys
from dataclasses import dataclass, field
from pathlib import Path
from typing import Any

import yaml


@dataclass
class Report:
    failures: list[str] = field(default_factory=list)
    flags: list[str] = field(default_factory=list)
    passes: list[str] = field(default_factory=list)

    def fail(self, message: str) -> None:
        self.failures.append(message)

    def flag(self, message: str) -> None:
        self.flags.append(message)

    def ok(self, message: str) -> None:
        self.passes.append(message)

    def emit(self) -> int:
        for msg in self.passes:
            print(f"PASS: {msg}")
        for msg in self.flags:
            print(f"FLAG: {msg}")
        for msg in self.failures:
            print(f"FAIL: {msg}")
        return 1 if self.failures else 0


def load_structured(path: Path) -> Any:
    text = path.read_text(encoding="utf-8")
    if path.suffix.lower() == ".json":
        return json.loads(text)
    return yaml.safe_load(text)


def load_csv(path: Path) -> list[dict[str, str]]:
    with path.open("r", encoding="utf-8", newline="") as handle:
        return list(csv.DictReader(handle))


def repo_root() -> Path:
    return Path(__file__).resolve().parents[2]


def governance_root() -> Path:
    return repo_root() / "governance"


def threshold_files() -> list[Path]:
    root = governance_root() / "thresholds"
    return sorted(p for p in root.glob("T*.yaml") if p.is_file())


def has_absolute_path(value: str) -> bool:
    if not isinstance(value, str):
        return False
    patterns = [
        r"^/",
        r"^[A-Za-z]:\\",
        r"^\\\\",
        r"/home/",
        r"\\wsl\.localhost\\",
    ]
    return any(re.search(pattern, value) for pattern in patterns)


def parse_args(default_case: str | None = None) -> argparse.Namespace:
    parser = argparse.ArgumentParser()
    if default_case:
        parser.add_argument("--case", default=default_case)
    else:
        parser.add_argument("--case", required=True)
    return parser.parse_args()
