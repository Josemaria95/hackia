# hackia

Repositorio de brainstorming colaborativo entre Edgar y Jose Muñoz.
Captura ideas, explora proyectos y genera prototipos rápidos con IA.

---

## Reglas del juego

### 1. Miro primero
- El pensamiento visual va en Miro antes de escribir
- Cada nota debe incluir el link al board de Miro correspondiente en el frontmatter
- Screenshots de Miro van en `assets/`

### 2. Escritura en formato Obsidian
Todas las notas siguen este frontmatter:

```yaml
---
title: "Nombre de la idea"
date: YYYY-MM-DD
tags: [tag1, tag2]
status: idea | explorando | descartado | en-progreso | completado
miro: https://miro.com/...
---
```

- Usar `[[wikilinks]]` para conectar ideas entre sí
- Un concepto por archivo, sin mezclar ideas
- Nunca borrar notas — moverlas a `archivo/` si ya no aplican

### 3. Full vibecoding con Claude Code
- Claude Code es el copiloto principal para prototipar
- Cada sesión de vibecoding genera su propia nota en `proyectos/`
- Los prompts reutilizables se guardan en `prompts/`
- Si algo funciona, documentar qué prompt lo generó

### 4. Repositorio optimizado para Claude Code
- `CLAUDE.md` en la raíz da contexto a Claude en cada sesión
- Commits descriptivos: qué idea avanzó, no solo "update"
- Una carpeta por proyecto cuando hay más de 3 archivos relacionados
- `prompts/` es la biblioteca — reusar antes de crear desde cero

### 5. Carpetas

```
hackia/
├── ideas/          # Ideas crudas, sin filtro
├── proyectos/      # Ideas con tracción que se están desarrollando
├── prompts/        # Prompts reutilizables para Claude Code
├── assets/         # Screenshots de Miro, imágenes, recursos
└── archivo/        # Ideas descartadas o pausadas (no borrar)
```

---

## Flujo de trabajo

```
Miro → idea/ → (si tiene tracción) → proyectos/ → vibecoding con Claude
```

1. Sesión en Miro para pensar visualmente
2. Capturar en `ideas/` con frontmatter completo
3. Si la idea tiene potencia, mover o linkear desde `proyectos/`
4. Vibecoding con Claude Code para prototipar
5. Guardar prompts útiles en `prompts/`

---

## Convenciones de nombres

| Tipo | Formato | Ejemplo |
|------|---------|---------|
| Ideas | `YYYY-MM-DD-nombre-idea.md` | `2026-02-19-app-habitos.md` |
| Proyectos | `nombre-proyecto/README.md` | `habits-tracker/README.md` |
| Prompts | `contexto-accion.md` | `ui-generar-landing.md` |
| Assets | `YYYY-MM-DD-descripcion.png` | `2026-02-19-miro-flujo.png` |
