# hackia

Repositorio de brainstorming colaborativo entre Edgar y Jose Muñoz.
Captura ideas, explora proyectos y genera prototipos rápidos con IA.

---

## El equipo

- **Edgar** — Perfil comercial en turismo. Conoce el producto, el cliente, la distribución y la operación del sector travel.
- **Jose Muñoz** — Analista de Datos Sr. en entorno corporativo (nivel grandes empresas tipo Bimbo). Conoce pipelines de datos, métricas de negocio y cómo funcionan los procesos internos de una corporación grande: RRHH, gastos, beneficios para empleados. Su expertise es corporativo, no en travel.

El cruce entre ambos perfiles es el área de mayor oportunidad: Edgar cubre el lado travel, Jose cubre el lado corporativo.

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
├── .obsidian/      # Config local de Obsidian (en .gitignore, no se versiona)
├── ideas/          # Problemas, hipótesis y soluciones por industria
├── equipo/         # Perfiles estratégicos: qué aporta cada integrante
├── proyectos/      # Ideas con tracción que se están desarrollando
├── prompts/        # Prompts reutilizables para Claude Code
├── assets/         # Screenshots de Miro, imágenes, recursos
└── archivo/        # Ideas descartadas o pausadas (no borrar)
```

---

## Setup de Obsidian

El vault de Obsidian apunta a la **raíz de este repo**.

Para abrirlo: Obsidian → "Open another vault" → seleccionar la carpeta `hackia/`.

La carpeta `.obsidian/` está en `.gitignore` — cada colaborador tiene su propia configuración local (tema, paneles, zoom). No se versiona para evitar conflictos.

---

## Assets del equipo

| Perfil | Rol | Nota |
|--------|-----|------|
| Edgar | Travel / supply / comercial | `equipo/perfil-edgar-recursos-estrategicos.md` |
| Jose Muñoz | Datos / corporativo / consultoría enterprise | `equipo/perfil-jose-recursos-estrategicos.md` |

## Ideas activas

| Nota | Status | Tipo | Área |
|------|--------|------|------|
| `2026-02-19-espacio-de-oportunidad` | explorando | hub estratégico | Travel × Corporativo |
| `2026-02-19-viajes-corporativos-datos` | idea | hipótesis | Travel × Corporativo/HR |
| `2026-02-19-nomadas-digitales` | idea | hipótesis | Travel × Nomadismo |
| `2026-02-19-travel-wellness` | idea | hipótesis | Travel × Wellness |
| `2026-02-19-travel-educacion` | idea | hipótesis | Travel × Educación |

---

## Flujo de trabajo

```
Miro → ideas/ → (si tiene tracción) → proyectos/ → vibecoding con Claude
```

1. Sesión en Miro para pensar visualmente
2. Capturar en `ideas/` con frontmatter completo
3. Si la idea tiene potencia, mover o linkear desde `proyectos/`
4. Vibecoding con Claude Code para prototipar
5. Guardar prompts útiles en `prompts/`

---

## Convenciones de nombres

| Tipo | Carpeta | Formato | Ejemplo |
|------|---------|---------|---------|
| Ideas / hipótesis | `ideas/` | `YYYY-MM-DD-nombre-idea.md` | `2026-02-19-espacio-de-oportunidad.md` |
| Perfiles de equipo | `equipo/` | `perfil-nombre.md` | `perfil-edgar-recursos-estrategicos.md` |
| Proyectos | `proyectos/` | `nombre-proyecto/README.md` | `travel-benefits/README.md` |
| Prompts | `prompts/` | `contexto-accion.md` | `ui-generar-landing.md` |
| Assets visuales | `assets/` | `YYYY-MM-DD-descripcion.png` | `2026-02-19-miro-flujo.png` |
