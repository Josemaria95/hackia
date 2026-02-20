#!/usr/bin/env python
"""
PostToolUse hook: valida archivos .md del vault Obsidian hackia.
Recibe JSON por stdin, emite systemMessage si hay problemas de formato.
Siempre sale con código 0 (PostToolUse no puede bloquear).
"""
import json
import sys
import re
from pathlib import Path


VALID_STATUSES = {"idea", "explorando", "descartado", "en-progreso", "completado"}
REQUIRED_FIELDS = ["title", "date", "tags", "status", "miro"]
UNSUPPORTED_MERMAID = {"mindmap", "timeline"}
EXCLUDE_DIRS = {".claude", ".git", ".obsidian"}


def is_excluded(path: Path) -> bool:
    """Verifica si la ruta pertenece a un directorio excluido."""
    parts = path.parts
    return any(part in EXCLUDE_DIRS for part in parts)


def parse_frontmatter(content: str) -> tuple[dict, str]:
    """Extrae el frontmatter YAML y devuelve (campos, cuerpo)."""
    match = re.match(r"^---\s*\n(.*?)\n---\s*\n", content, re.DOTALL)
    if not match:
        return {}, content

    fm_text = match.group(1)
    body = content[match.end():]
    fields = {}

    for field in REQUIRED_FIELDS + ["aliases"]:
        m = re.search(rf"^{field}\s*:\s*(.+)", fm_text, re.MULTILINE)
        if m:
            fields[field] = m.group(1).strip().strip('"').strip("'")

    return fields, body


def find_vault_mds(vault_root: Path, exclude: Path) -> list[Path]:
    """Encuentra todos los .md del vault, excluyendo carpetas de sistema."""
    all_mds = []
    for md in vault_root.rglob("*.md"):
        if not is_excluded(md.relative_to(vault_root)) and md != exclude:
            all_mds.append(md)
    return all_mds


def check_wikilinks(body: str, vault_root: Path) -> tuple[list[str], list[str]]:
    """
    Devuelve (wikilinks_encontrados, wikilinks_rotos).
    Un wikilink está roto si no existe ningún .md con ese nombre en el vault.
    """
    raw_links = re.findall(r"\[\[([^\]]+)\]\]", body)
    found = []
    broken = []

    for link in raw_links:
        target = link.split("|")[0].strip()
        found.append(target)
        matches = [
            m for m in vault_root.rglob(f"{target}.md")
            if not is_excluded(m.relative_to(vault_root))
        ]
        if not matches:
            broken.append(f"[[{target}]]")

    return found, broken


def check_orphan(file_stem: str, other_mds: list[Path]) -> bool:
    """Devuelve True si algún archivo referencia [[file_stem]]."""
    pattern = re.compile(rf"\[\[{re.escape(file_stem)}(\|[^\]]+)?\]\]")
    for md in other_mds:
        try:
            content = md.read_text(encoding="utf-8", errors="replace")
            if pattern.search(content):
                return True
        except OSError:
            pass
    return False


def check_mermaid(content: str) -> list[str]:
    """Devuelve lista de tipos Mermaid no soportados encontrados."""
    blocks = re.findall(r"```mermaid\s+(\w+)", content, re.IGNORECASE)
    return [t for t in blocks if t.lower() in UNSUPPORTED_MERMAID]


def validate_file(path: Path, vault_root: Path) -> list[str]:
    """Valida un archivo .md y devuelve lista de advertencias."""
    warnings = []

    try:
        content = path.read_text(encoding="utf-8", errors="replace")
    except OSError as e:
        return [f"❌ No se pudo leer el archivo: {e}"]

    # --- Frontmatter ---
    fields, body = parse_frontmatter(content)

    if not fields and not re.match(r"^---", content):
        warnings.append("❌ Frontmatter YAML no encontrado — agrega bloque --- con title, date, tags, status, miro")
    else:
        missing = [f for f in REQUIRED_FIELDS if f not in fields]
        if missing:
            warnings.append(f"⚠️  Frontmatter incompleto — faltan: {', '.join(missing)}")

        status = fields.get("status", "")
        if status and status not in VALID_STATUSES:
            warnings.append(
                f"⚠️  Status inválido: '{status}' — válidos: {', '.join(sorted(VALID_STATUSES))}"
            )

        date_val = fields.get("date", "")
        if date_val and not re.match(r"^\d{4}-\d{2}-\d{2}$", date_val):
            warnings.append(f"⚠️  Fecha con formato incorrecto: '{date_val}' — debe ser YYYY-MM-DD")

        if "aliases" not in fields:
            warnings.append("💡 Sugerencia: agrega `aliases` al frontmatter para mejorar Graph View")

    # --- Wikilinks ---
    wikilinks, broken = check_wikilinks(body, vault_root)

    if not wikilinks:
        warnings.append("⚠️  Sin wikilinks [[...]] — el nodo quedará aislado en Graph View")
    elif broken:
        warnings.append(f"⚠️  Wikilinks rotos (archivo no existe): {', '.join(broken)}")

    # --- Nodo huérfano ---
    other_mds = find_vault_mds(vault_root, exclude=path)
    if not check_orphan(path.stem, other_mds):
        warnings.append(
            f"⚠️  Nodo huérfano: ninguna otra nota tiene [[{path.stem}]] — "
            f"agregar backlink desde README.md u otra nota relacionada"
        )

    # --- Mermaid no soportado ---
    bad_mermaid = check_mermaid(content)
    if bad_mermaid:
        warnings.append(
            f"❌ Mermaid no soportado en Obsidian: {', '.join(bad_mermaid)} — "
            f"usar: flowchart, sequenceDiagram, classDiagram, stateDiagram, gantt, pie"
        )

    return warnings


def main():
    try:
        raw = sys.stdin.read()
        data = json.loads(raw)
    except (json.JSONDecodeError, ValueError):
        sys.exit(0)

    tool_input = data.get("tool_input", {})
    cwd = data.get("cwd", "")

    file_path_str = tool_input.get("file_path") or tool_input.get("path", "")
    if not file_path_str:
        sys.exit(0)

    path = Path(file_path_str)

    # Solo archivos .md
    if path.suffix.lower() != ".md":
        sys.exit(0)

    # Excluir directorios de sistema
    if is_excluded(path):
        sys.exit(0)

    # Verificar que existe
    if not path.exists():
        sys.exit(0)

    vault_root = Path(cwd) if cwd else path.parent

    warnings = validate_file(path, vault_root)

    if warnings:
        rel = path.name
        lines = [f"🔍 Obsidian Validator — `{rel}`"] + [f"  {w}" for w in warnings]
        print(json.dumps({"systemMessage": "\n".join(lines)}))

    sys.exit(0)


if __name__ == "__main__":
    main()
