# hackia — Contexto para Claude Code

## ¿Qué es este repo?
Repositorio de brainstorming colaborativo entre Edgar y Jose Muñoz.
Captura ideas, explora proyectos y genera prototipos rápidos con IA.

## El equipo
- **Edgar** — Fundador de kntor.travel. Licenciado en Matemáticas (UCV). 7+ años en Newstilo Travel (Jefe de Sucursal → Gerente de Ventas → Gerente de Operaciones → Gerente de Sistemas). Domina SABRE, AMADEUS, KIU y ERPs de agencia (Witwan). Conoce el supply de travel desde adentro: GDS, consolidadores B2B, bloqueos aéreos, OBTs y el ciclo completo de una reserva corporativa. Último año trabajó en CEAPSI (centro de salud mental) coordinando médicos y colegios en la licitación del Programa de Integración Escolar (PIE) — programa del Mineduc que financia especialistas para niños con NEE en colegios públicos; hizo coordinación operativa y control de calidad del proceso. Certificado en AI Agents y Claude Code. **Su propósito: educación de calidad adaptada a cada persona** — cualquier idea con componente de enseñanza, aprendizaje personalizado o acceso a conocimiento lo activa profundamente.
- **Jose Muñoz** — Data Engineer en Baufest (consultora de datos con clientes enterprise en LATAM y EE.UU.). Ha trabajado en BI y analytics en empresas de retail, educación, logística y minería. Domina Databricks, Azure, Apache Spark, Delta Lake, Power BI y SAP como fuente de datos. Su ventaja no es ser insider corporativo sino haber visto por dentro cómo muchas empresas grandes estructuran sus datos, toman decisiones de compra tecnológica y aprueban proyectos. Su expertise es corporativo/datos, NO en travel. **Su propósito: tecnología y producto que genuinamente ayude a la gente** — evalúa las ideas por su impacto humano real, no solo por su viabilidad técnica.

> Perfiles detallados con red de contactos y habilidades por hipótesis en `equipo/`.

## Espacio de problemas
- Industria primaria: **Travel** (turismo, hospitalidad, experiencias)
- Industria secundaria: **Corporativo / HR** (viajes de negocios, beneficios para empleados, gestión de gastos)
- El cruce entre ambas es el área de mayor oportunidad: Edgar cubre el lado travel, Jose cubre el lado corporativo — juntos tienen los dos lados del problema

## Criterio para evaluar ideas
1. ¿Resuelve un dolor real en travel?
2. ¿Tiene ángulo B2B o datos que lo haga escalable?
3. ¿Ambos perfiles del equipo son relevantes para construirlo?
4. ¿El mercado combinado (travel + corporativo) es suficientemente grande?

## Estructura
- `ideas/` — Problemas, hipótesis y soluciones organizadas por industria (11 archivos, hub central: `espacio-de-oportunidad.md`)
- `equipo/` — Perfiles estratégicos del equipo: qué sabe cada uno, su red y cómo aplica a las hipótesis
- `proyectos/` — Ideas con tracción, en desarrollo activo
  - `hachiko-proyecto-maestro.md` — Documento central del proyecto Hachiko
  - `hachiko-arquitectura.md` — Arquitectura técnica completa
  - `datos-salud-mental-propuesta-proyecto.md` — MindRisk (ahora parte de Hachiko)
  - `hachiko-pitch-deck.html` — Presentación HTML
  - `hachiko-kids/` — Pivot a salud mental infantil (11 docs, 6 secciones)
- `startup-hachiko/` — Playbook operativo completo (52 archivos, 20 secciones numeradas + planes + presentaciones)
- `hachiko-app-memory.md` — Especificación técnica completa de la app (stack, API, schema, IA)
- `deepresearch/` — TAM/SAM/SOM y análisis competitivo por hipótesis (9 archivos)
- `assets/` — Brand book, research competitivo, Octalysis CSV, PDFs de perfiles
- `prompts/` — Biblioteca de prompts reutilizables
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

### Convención de tags

Los tags combinan **tipo** (qué es la nota) + **industria** (en qué mercado). Ejemplo: `tags: [hipotesis, travel, corporativo]`

**Tags de tipo** (obligatorio, uno por nota):

| Tag | Uso |
|-----|-----|
| `estrategia` | Notas macro, visión general, análisis del mercado |
| `hipotesis` | Una apuesta específica a validar |
| `mercado` | Análisis de competidores o tamaño de mercado |
| `producto` | Especificación técnica o prototipo |

**Tags de industria** (puede haber varios por nota):

| Tag | Mercado |
|-----|---------|
| `travel` | Turismo, hospitalidad, experiencias |
| `corporativo` | Empresas, HR, gestión de gastos |
| `wellness` | Salud, bienestar |
| `nomadas` | Trabajo remoto, nómadas digitales |
| `educacion` | Programas educativos, intercambios |

## Reglas al ayudar
- Antes de crear una nota, verificar que tenga frontmatter completo
- Usar `[[wikilinks]]` para conectar conceptos relacionados
- Nunca borrar archivos — sugerir mover a `archivo/`
- Si se genera código o prototipo, guardar el prompt en `prompts/`
- Commits descriptivos: mencionar qué idea avanzó

## Stack
- Miro: pensamiento visual (siempre primero)
- Obsidian: escritura y linking de ideas — el vault apunta a la raíz del repo (`hackia/`)
- Claude Code: vibecoding, prototipado y generación

## Setup de Obsidian
- El vault de Obsidian ES la raíz del repo (`hackia/`)
- La carpeta `.obsidian/` existe en la raíz pero está en `.gitignore` — cada usuario tiene su propia configuración local
- Para abrir: Obsidian → "Open another vault" → seleccionar la carpeta `hackia/`
- Todo archivo `.md` en la raíz y subcarpetas es visible desde Obsidian

## Flujo estándar
Miro → ideas/ → (tracción) → proyectos/ → vibecoding → prompts/

Al evaluar una idea, consultar `equipo/` para saber quién puede ejecutar qué parte y qué gaps hay.

---

## Estructura del vault Obsidian (auditada 2026-03-12)

### Inventario de archivos

| Carpeta | Archivos | Descripcion |
|---------|----------|-------------|
| `ideas/` | 11 archivos `.md` | 1 hub estrategico (`espacio-de-oportunidad.md`) + 10 hipotesis |
| `equipo/` | 2 archivos `.md` | Perfiles de Edgar y Jose con habilidades por hipotesis |
| `deepresearch/` | 9 archivos `.md` | TAM/SAM/SOM y analisis competitivo por hipotesis |
| `proyectos/` | 4 archivos + `hachiko-kids/` (en crecimiento activo) | Proyecto Hachiko + pivot Kids |
| `startup-hachiko/` | 52 archivos `.md` + 2 `.html` | Playbook operativo: 20 secciones + planes + presentaciones |
| `assets/` | 4 archivos + 2 PDFs | Brand book, research YC, Octalysis, perfiles |
| raiz | `hachiko-app-memory.md` | Especificacion tecnica completa de la app |
| **Total** | **~139+ archivos** (verificar con `find . -name "*.md" \| wc -l`) | |

### Mapa de relaciones (wikilinks)

```
espacio-de-oportunidad.md  (hub central — nodo de mayor grado)
├── ideas/2026-02-19-viajes-corporativos-datos.md ←→ deepresearch/viajes-corporativos-datos-research.md
├── ideas/2026-02-19-travel-wellness.md           ←→ deepresearch/travel-wellness-research.md
├── ideas/2026-02-19-nomadas-digitales.md          ←→ deepresearch/nomadas-digitales-research.md
├── ideas/2026-02-19-travel-educacion.md           ←→ deepresearch/travel-educacion-research.md
├── ideas/2026-02-20-ruta-viva-salud-mental-cultural-b2b2c.md ←→ deepresearch/ruta-viva-salud-mental-cultural-research.md
├── ideas/2026-02-20-datos-salud-mental-modelos-riesgo.md      ←→ deepresearch/datos-salud-mental-empleados-research.md
├── ideas/2026-02-20-hospedaje-guia-compatriotas.md            ←→ deepresearch/hospedaje-compatriotas-research.md
├── ideas/2026-02-20-recomendacion-restaurantes-nacionalidad.md ←→ deepresearch/restaurantes-nacionalidad-research.md
├── ideas/2026-02-20-comunidad-salud-mental-viajes-gamificacion.md (brainstorming, sin deep research propio)
├── ideas/2026-02-24-tamagotchi-coach-laboral.md (convergio en Hachiko)
├── equipo/perfil-edgar-recursos-estrategicos.md
└── equipo/perfil-jose-recursos-estrategicos.md

hachiko-proyecto-maestro.md (documento central del proyecto activo)
├── hachiko-arquitectura.md
├── hachiko-app-memory.md (spec tecnica)
├── startup-hachiko/ (20 secciones operativas)
└── hachiko-kids/ (pivot infantil)
```

### Convenciones de wikilinks

Cada nota debe tener al final un bloque de navegacion con este formato:

**Para ideas (hipotesis):**
```markdown
> Deep research detallado en [[nombre-del-research]]

→ Contexto: [[espacio-de-oportunidad]] (Prioridad X)
→ Equipo: [[perfil-edgar-recursos-estrategicos]] · [[perfil-jose-recursos-estrategicos]]
```

**Para deep research:**
```markdown
→ Idea principal: [[nombre-de-la-idea|Titulo corto]]
→ Contexto: [[espacio-de-oportunidad]]
```

**Para perfiles de equipo:**
```markdown
[[espacio-de-oportunidad]]
```

**Reglas de wikilinks:**
- Usar la forma mas corta posible (sin prefijo de carpeta): `[[nombre-del-archivo]]`, NO `[[carpeta/nombre-del-archivo]]`
- Obsidian resuelve automaticamente los links por nombre de archivo unico (aliases ayudan)
- Los aliases en frontmatter permiten referenciar un archivo por su nombre corto
- Toda idea debe linkar a `espacio-de-oportunidad` y a ambos perfiles de equipo
- Todo deep research debe linkar a su idea principal y a `espacio-de-oportunidad`
- `espacio-de-oportunidad` es el hub: debe linkar a todas las ideas, todos los deep research y ambos perfiles

### Prioridades actuales (Mar 2026)

**Proyecto activo: Hachiko** — convergencia de Ruta Viva + datos salud mental + tamagotchi coach laboral.
App B2B2C de bienestar emocional gamificado para empleados. Ver `proyectos/hachiko-proyecto-maestro.md`.

| Prioridad | Idea / Proyecto | Status |
|-----------|----------------|--------|
| **ACTIVO** | **Hachiko** — bienestar emocional B2B2C (mascota + datos + mutuales) | en-progreso |
| **ACTIVO** | **Hachiko Kids** — pivot a salud mental infantil | en-progreso |
| pausada | Hospedaje entre compatriotas | 6.8/10 |
| pausada | Restaurantes segun nacionalidad | 6.2/10 |
| pausada | Bienestar + gestion de viajes corporativos | 8/10 |
| pausada | Travel x Educacion (intercambios + PIE) | 6/10 |
| pausada | Travel x Nomadismo | 7/10 |

### Estructura de startup-hachiko/ (playbook operativo)

20 secciones numeradas que cubren el ciclo completo de la startup:

| Secciones | Contenido |
|-----------|-----------|
| `01_vision/` – `05_buyer_persona/` | Vision, research, mercado Chile, competidores LATAM, 4 buyer personas |
| `06_product/` – `07_mvp/` | Arquitectura, features, user journey, MVP, experimentos |
| `08_strategy/` – `10_sprints/` | Estrategia general, Plan B, Platanus, OKRs Q1, sprints 1-2 |
| `11_data_detection/` – `12_psychology_gamification/` | Modelo datos, privacidad, senales smartphone, Octalysis, mecanicas |
| `13_business_model/` – `15_growth_strategy/` | Modelo negocio, pricing, unit economics, revenue, growth |
| `16_validation/` – `17_surveys/` | Plan validacion, encuestas, guia entrevistas |
| `18_subagents/` – `20_next_steps/` | Catalogo subagentes, riesgos, checklist Platanus, roadmap |
| `planes/` | Plan estrategico + tactico + operativo |
| `presentaciones/` | Presentacion HTML + version "para dummies" |

## Git — reglas de staging

- NUNCA commitear `images/`, `.claude/settings.local.json`
- `.claude/settings.json` SÍ se commitea — configuracion compartida del equipo
- Siempre hacer `git add` de archivos especificos, nunca `git add -A` o `git add .`
