# hackia — Contexto para Claude Code

## ¿Qué es este repo?
Repositorio de brainstorming colaborativo entre Edgar y Jose Muñoz.
Captura ideas, explora proyectos y genera prototipos rápidos con IA.

## El equipo
- **Edgar** — Perfil comercial en turismo. Conoce el producto, el cliente, la distribución y la operación del sector travel.
- **Jose Muñoz** — Analista de datos en entorno corporativo. Conoce pipelines, métricas, decisiones basadas en datos y cómo funciona una empresa por dentro.

## Espacio de problemas
- Industria primaria: **Travel** (turismo, hospitalidad, experiencias)
- Industria secundaria: **Corporativo / HR** (viajes de negocios, beneficios para empleados, gestión de gastos)
- El cruce entre ambas es el área de mayor oportunidad: los dos perfiles cubren exactamente los dos lados del problema

## Criterio para evaluar ideas
1. ¿Resuelve un dolor real en travel?
2. ¿Tiene ángulo B2B o datos que lo haga escalable?
3. ¿Ambos perfiles del equipo son relevantes para construirlo?
4. ¿El mercado combinado (travel + corporativo) es suficientemente grande?

## Estructura
- `ideas/` — Ideas crudas con frontmatter Obsidian
- `proyectos/` — Ideas con tracción, en desarrollo activo
- `prompts/` — Biblioteca de prompts reutilizables
- `assets/` — Screenshots de Miro e imágenes
- `archivo/` — Ideas descartadas o pausadas (nunca borrar)

## Formato de notas (siempre)
Todas las notas deben incluir este frontmatter YAML:
```yaml
---
title: "Nombre"
date: YYYY-MM-DD
tags: []
status: idea | explorando | descartado | en-progreso | completado
miro: https://miro.com/...
---
```

## Reglas al ayudar
- Antes de crear una nota, verificar que tenga frontmatter completo
- Usar `[[wikilinks]]` para conectar conceptos relacionados
- Nunca borrar archivos — sugerir mover a `archivo/`
- Si se genera código o prototipo, guardar el prompt en `prompts/`
- Commits descriptivos: mencionar qué idea avanzó

## Stack
- Miro: pensamiento visual (siempre primero)
- Obsidian: escritura y linking de ideas
- Claude Code: vibecoding, prototipado y generación

## Flujo estándar
Miro → ideas/ → (tracción) → proyectos/ → vibecoding → prompts/
