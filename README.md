# hackia

Repositorio de brainstorming y prototipado entre Edgar y Jose Muñoz. Evalúa oportunidades en el cruce de travel, corporativo y datos — con el objetivo de encontrar un producto B2B vendible a nivel startup.

---

## El equipo

| | Edgar | Jose |
|---|-------|------|
| **Rol actual** | Fundador de kntor.travel (agencia B2B/B2C) | Data Engineer en Baufest (consultora enterprise LATAM/EE.UU.) |
| **Expertise** | Supply de travel: GDS (SABRE, AMADEUS), consolidadores B2B, OBTs, ERPs de agencia. Gestión de recursos públicos en educación (PIE/CEAPSI) | Pipelines de datos enterprise: Databricks, Azure, Spark, Power BI, SAP como fuente. Procesos de compra corporativa de tecnología |
| **Acceso** | Agencias, aerolíneas, proveedores tech de travel, clientes corporativos activos | Clientes enterprise de Baufest, red de data engineers Chile/Perú |
| **Motivación** | Educación adaptada a cada persona — filtra ideas por si el producto se adapta al usuario | Producto que resuelva un problema real — rechaza construir herramientas que nadie va a usar |

La ventaja: Edgar consigue datos del lado proveedor de travel que un equipo tech no puede obtener. Jose los convierte en producto que una empresa compraría. Ambos saben que la solución debe ser B2B.

Perfiles detallados: `equipo/perfil-edgar-recursos-estrategicos.md` · `equipo/perfil-jose-recursos-estrategicos.md`

---

## Hipótesis activas

| Prioridad | Hipótesis | Status | Score | Deep research |
|-----------|-----------|--------|-------|---------------|
| 🔴 1 | Bienestar + gestión de viajes corporativos | explorando | 8/10 | `deepresearch/viajes-corporativos-datos-research.md` · `deepresearch/travel-wellness-research.md` |
| 🟡 2a | Transparencia en programas de intercambio | idea | 6/10 | `deepresearch/travel-educacion-research.md` |
| 🟡 2b | Digitalización de gestión del PIE | sin evaluar | — | pendiente |
| 🟢 3 | Infraestructura de datos para nómadas | idea | 7/10 | `deepresearch/nomadas-digitales-research.md` |

Hub estratégico con contexto completo: `ideas/2026-02-19-espacio-de-oportunidad.md`

---

## Estructura del repo

```
hackia/
├── ideas/          # Hipótesis y problemas organizados por industria
├── equipo/         # Perfiles estratégicos del equipo
├── deepresearch/   # TAM/SAM/SOM y análisis competitivo por hipótesis
├── proyectos/      # Ideas con tracción en desarrollo activo
├── prompts/        # Prompts reutilizables para Claude Code
├── assets/         # PDFs de perfiles, screenshots de Miro, imágenes
├── archivo/        # Ideas descartadas o pausadas (nunca se borran)
└── .claude/        # Configuración de Claude Code y plugins
```

---

## Forma de trabajo

### 1. Miro primero, Obsidian después
- El pensamiento visual va en Miro antes de escribir nada
- Screenshots de Miro van en `assets/`
- Las notas en Obsidian son el registro escrito de lo que se decidió en Miro

### 2. Un concepto por archivo
Cada hipótesis, cada perfil, cada research es su propio `.md`. Nunca mezclar ideas en un mismo archivo. Esto hace que cada concepto sea un nodo navegable en Obsidian Graph View.

Formato de todas las notas:
```yaml
---
title: "Nombre"
date: YYYY-MM-DD
tags: [tipo, industria1, industria2]
status: idea | explorando | descartado | en-progreso | completado
miro: ""
---
```

Tags de tipo: `estrategia`, `hipotesis`, `mercado`, `producto`
Tags de industria: `travel`, `corporativo`, `wellness`, `nomadas`, `educacion`

### 3. Claude Code como copiloto
- `CLAUDE.md` en la raíz da contexto automático en cada sesión
- Deep research con agentes paralelos para evaluar mercados
- Vibecoding para prototipar MVPs
- Prompts reutilizables en `prompts/`

### 4. Nunca borrar, siempre archivar
Las ideas descartadas se mueven a `archivo/`, no se eliminan. El historial de decisiones tiene valor.

### 5. Commits descriptivos
Cada commit dice qué idea avanzó y qué cambió, no solo "update".

---

## Setup de Obsidian

El vault es la **raíz de este repo**. Para abrirlo: Obsidian → "Open another vault" → seleccionar `hackia/`.

La carpeta `.obsidian/` está en `.gitignore` — cada colaborador tiene su propia configuración local.

Recomendaciones para Graph View:
- Activar "Tags" en Graph Settings para ver nodos de color por industria
- El nodo `espacio-de-oportunidad` debe ser el de mayor grado (más conexiones)

---

## Convenciones de nombres

| Tipo | Carpeta | Formato | Ejemplo |
|------|---------|---------|---------|
| Ideas / hipótesis | `ideas/` | `YYYY-MM-DD-nombre.md` | `2026-02-19-travel-wellness.md` |
| Perfiles | `equipo/` | `perfil-nombre-recursos-estrategicos.md` | `perfil-edgar-recursos-estrategicos.md` |
| Deep research | `deepresearch/` | `nombre-idea-research.md` | `travel-wellness-research.md` |
| Proyectos | `proyectos/` | `nombre-proyecto/README.md` | `travel-benefits/README.md` |
| Prompts | `prompts/` | `contexto-accion.md` | `ui-generar-landing.md` |
| Assets | `assets/` | `YYYY-MM-DD-descripcion.ext` | `2026-02-19-miro-flujo.png` |

---

## Flujo estándar

```
Miro → ideas/ → deep research → (validación) → proyectos/ → vibecoding → prompts/
```

Al evaluar una idea, consultar `equipo/` para saber quién ejecuta qué parte y `deepresearch/` para los números de mercado.
