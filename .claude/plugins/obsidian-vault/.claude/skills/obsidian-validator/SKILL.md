---
name: obsidian-validator
description: Audita la salud del vault Obsidian en el repositorio hackia. Valida frontmatter YAML, wikilinks, nodos huérfanos y compatibilidad Mermaid. Usar cuando el usuario quiera revisar el estado del vault, verificar que las notas estén correctamente formateadas o conectadas, o antes de hacer commit de archivos .md. También útil cuando se crean nuevas notas o se detectan problemas de conectividad en el Graph View de Obsidian.
---

# /obsidian-validator — Auditoría de salud del vault Obsidian

Eres un auditor experto del vault Obsidian en el repositorio `hackia`. Tu tarea es analizar todos los archivos `.md` del vault, validar que cumplan con las convenciones del proyecto y generar un reporte de salud con puntuación.

## Flujo de ejecución

### Paso 1: Escanear el vault

Usa la herramienta `Glob` con el patrón `**/*.md` en el directorio de trabajo actual. Filtra y excluye archivos cuya ruta contenga:
- `.claude/`
- `.git/`
- `hackia/hackia/` (carpeta interna de Obsidian)

### Paso 2: Leer y validar cada archivo

Por cada archivo `.md` encontrado, usa `Read` para leer su contenido y evalúa los siguientes criterios:

#### Criterio A — Frontmatter YAML completo (40 pts)
El archivo debe comenzar con un bloque `---` que contenga exactamente los 5 campos requeridos:
- `title`: string entre comillas
- `date`: formato `YYYY-MM-DD`
- `tags`: lista YAML `[tag1, tag2]`
- `status`: uno de los valores válidos (ver criterio B)
- `miro`: URL o string vacío `""`

Si `aliases` también está presente, es un punto positivo (mencionarlo en el reporte).

Puntuación proporcional: cada campo vale 8 pts. Si falta el bloque completo: 0 pts.

#### Criterio B — Status válido (10 pts)
El campo `status` debe ser exactamente uno de:
`idea`, `explorando`, `descartado`, `en-progreso`, `completado`

#### Criterio C — Wikilinks presentes y no rotos (20 pts)
- Debe existir al menos 1 wikilink `[[...]]` en el cuerpo del documento (10 pts)
- Todos los wikilinks deben apuntar a archivos `.md` que existan en el vault (10 pts)
  - Para cada `[[nombre]]`, buscar si existe `nombre.md` en alguna carpeta del vault
  - Ignorar display text: `[[nombre|texto]]` → buscar `nombre.md`

#### Criterio D — No es nodo huérfano (20 pts)
Al menos 1 otro archivo `.md` del vault debe referenciar este archivo con `[[nombre-del-archivo]]` donde `nombre-del-archivo` es el nombre del archivo sin extensión `.md`.

Si ningún otro archivo lo referencia: 0 pts + advertencia de huérfano.

#### Criterio E — Sin Mermaid no soportado (10 pts)
Si el archivo contiene bloques ` ```mermaid `, el tipo de diagrama declarado en la primera línea del bloque no debe ser:
- `mindmap`
- `timeline`

Tipos **soportados** en Obsidian: `flowchart`, `sequenceDiagram`, `classDiagram`, `stateDiagram`, `gantt`, `pie`, `erDiagram`, `gitGraph`

### Paso 3: Calcular scores

Para cada archivo, suma los puntos obtenidos (máximo 100).

**Score global del vault** = promedio de todos los archivos.

### Paso 4: Generar reporte

Presenta el reporte en este formato:

```
## 🔍 Reporte de salud — vault hackia
**Fecha:** YYYY-MM-DD
**Archivos analizados:** N

| Archivo | Score | Frontmatter | Status | Wikilinks | No huérfano | Mermaid OK |
|---------|-------|-------------|--------|-----------|-------------|------------|
| nombre.md | 90/100 | ✅ 40/40 | ✅ | ⚠️ rotos | ✅ | ✅ |

### Problemas encontrados

**nombre.md** (Score: XX/100)
- ❌ Faltan campos en frontmatter: [lista de campos]
- ⚠️ Wikilinks rotos: [[link1]], [[link2]]
- ⚠️ Nodo huérfano — ningún otro archivo lo referencia
- ❌ Mermaid no soportado: mindmap

### Score global del vault: XX/100
```

Usa emojis para el estado de cada criterio:
- ✅ = criterio cumplido completamente
- ⚠️ = cumplido parcialmente o advertencia
- ❌ = criterio fallido

### Paso 5: Ofrecer autocorrección

Después del reporte, pregunta al usuario:

> "¿Deseas que corrija automáticamente los problemas encontrados? Puedo:
> - Agregar campos faltantes en frontmatter (con valores placeholder)
> - Agregar `aliases` al frontmatter
> - Agregar sección '## Notas pendientes de crear' para wikilinks rotos
> - Agregar wikilink en README.md para nodos huérfanos
>
> Responde `sí` para corregir todos, o indica qué archivo(s) corregir primero."

Si el usuario confirma, realiza las correcciones con `Edit`, manteniendo el contenido existente. Para frontmatter incompleto, inserta los campos faltantes con valores placeholder apropiados. Nunca borres contenido existente.

## Notas importantes

- El vault es pequeño (< 20 archivos actualmente) — lee todos los archivos necesarios para el análisis de backlinks
- El directorio de trabajo es la raíz del repo `hackia/`
- Las carpetas válidas del vault son: `ideas/`, `proyectos/`, `prompts/`, `assets/`, `archivo/`
- `README.md` y `CLAUDE.md` en la raíz son parte del vault pero tienen reglas más flexibles
- Un wikilink `[[2026-02-19-viajes-corporativos-datos]]` es "roto" si no existe ese archivo aún — documenta como "nota pendiente" no como error crítico
