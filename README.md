# hackia

Repositorio de brainstorming y prototipado entre Edgar y Jose Munoz. Evalua oportunidades en el cruce de travel, corporativo, wellness y datos -- con el objetivo de encontrar un producto B2B vendible a nivel startup.

---

## El equipo

| | Edgar | Jose |
|---|-------|------|
| **Rol actual** | Fundador de kntor.travel (agencia B2B/B2C) | Data Engineer en Baufest (consultora enterprise LATAM/EE.UU.) |
| **Expertise** | Supply de travel: GDS (SABRE, AMADEUS), consolidadores B2B, OBTs, ERPs de agencia. Gestion de recursos publicos en educacion (PIE/CEAPSI) | Pipelines de datos enterprise: Databricks, Azure, Spark, Power BI, SAP como fuente. Procesos de compra corporativa de tecnologia |
| **Acceso** | Agencias, aerolineas, proveedores tech de travel, clientes corporativos activos | Clientes enterprise de Baufest, red de data engineers Chile/Peru |
| **Motivacion** | Educacion adaptada a cada persona -- filtra ideas por si el producto se adapta al usuario | Producto que resuelva un problema real -- rechaza construir herramientas que nadie va a usar |

La ventaja: Edgar consigue datos del lado proveedor de travel que un equipo tech no puede obtener. Jose los convierte en producto que una empresa compraria. Ambos saben que la solucion debe ser B2B.

Perfiles detallados: `equipo/perfil-edgar-recursos-estrategicos.md` / `equipo/perfil-jose-recursos-estrategicos.md`

---

## Hipotesis activas

| Prioridad | Hipotesis | Status | Score | Idea | Deep Research |
|-----------|-----------|--------|-------|------|---------------|
| 0 | **Ruta Viva** -- Bienestar emocional + exploracion cultural (B2B2C) | explorando | 8.0/10 | `ideas/2026-02-20-ruta-viva-salud-mental-cultural-b2b2c.md` | `deepresearch/ruta-viva-salud-mental-cultural-research.md` |
| 0 | **Datos salud mental** -- Modelos de riesgo para aseguradoras/empleadores | explorando | por evaluar | `ideas/2026-02-20-datos-salud-mental-modelos-riesgo.md` | `deepresearch/datos-salud-mental-empleados-research.md` |
| 0.5 | **Hospedaje compatriotas** -- Marketplace viajero + compatriota residente | explorando | 6.8/10 | `ideas/2026-02-20-hospedaje-guia-compatriotas.md` | `deepresearch/hospedaje-compatriotas-research.md` |
| 0.5 | **Restaurantes por nacionalidad** -- Recomendacion gastronomica cultural | explorando | 6.2/10 | `ideas/2026-02-20-recomendacion-restaurantes-nacionalidad.md` | `deepresearch/restaurantes-nacionalidad-research.md` |
| 1 | **Bienestar + viajes corporativos** -- Dashboard de bienestar en viajes de negocios | explorando | 8/10 | `ideas/2026-02-19-viajes-corporativos-datos.md` / `ideas/2026-02-19-travel-wellness.md` | `deepresearch/viajes-corporativos-datos-research.md` / `deepresearch/travel-wellness-research.md` |
| 2 | **Travel x Educacion** -- Transparencia en intercambios + digitalizacion PIE | idea | 6/10 | `ideas/2026-02-19-travel-educacion.md` | `deepresearch/travel-educacion-research.md` |
| 3 | **Travel x Nomadismo** -- Infraestructura de datos para nomadas digitales | idea | 7/10 | `ideas/2026-02-19-nomadas-digitales.md` | `deepresearch/nomadas-digitales-research.md` |

Nota: tambien existe `ideas/2026-02-20-comunidad-salud-mental-viajes-gamificacion.md` como brainstorming de variantes que alimento Ruta Viva.

Hub estrategico con contexto completo: `ideas/espacio-de-oportunidad.md`

---

## Estructura del repo

```
hackia/
├── ideas/              # 10 archivos: 1 hub + 9 hipotesis
│   └── espacio-de-oportunidad.md   # Hub central (nodo de mayor grado)
├── equipo/             # 2 perfiles estrategicos (Edgar + Jose)
├── deepresearch/       # 8 archivos: TAM/SAM/SOM y analisis competitivo
├── proyectos/          # Ideas con traccion en desarrollo activo
├── prompts/            # Prompts reutilizables para Claude Code
├── assets/             # PDFs de perfiles, screenshots de Miro, imagenes
├── archivo/            # Ideas descartadas o pausadas (nunca se borran)
└── .claude/            # Configuracion de Claude Code y plugins
```

### Vault de Obsidian

Este repo ES el vault de Obsidian. Para abrirlo: Obsidian -> "Open another vault" -> seleccionar `hackia/`.

La carpeta `.obsidian/` esta en `.gitignore` -- cada colaborador tiene su propia configuracion local.

Cada archivo `.md` es un nodo en el Graph View de Obsidian. Las conexiones principales:

```
espacio-de-oportunidad (hub central)
├── 9 hipotesis en ideas/
├── 2 perfiles en equipo/
└── 8 deep research en deepresearch/

Cada hipotesis linkea a:
  → espacio-de-oportunidad (contexto)
  → perfil-edgar + perfil-jose (equipo)
  → su deep research correspondiente

Cada deep research linkea a:
  → su idea principal
  → espacio-de-oportunidad (contexto)
```

---

## Forma de trabajo

### 1. Miro primero, Obsidian despues
- El pensamiento visual va en Miro antes de escribir nada
- Screenshots de Miro van en `assets/`
- Las notas en Obsidian son el registro escrito de lo que se decidio en Miro

### 2. Un concepto por archivo
Cada hipotesis, cada perfil, cada research es su propio `.md`. Nunca mezclar ideas en un mismo archivo. Esto hace que cada concepto sea un nodo navegable en Obsidian Graph View.

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
- `CLAUDE.md` en la raiz da contexto automatico en cada sesion
- Deep research con agentes paralelos para evaluar mercados
- Vibecoding para prototipar MVPs
- Prompts reutilizables en `prompts/`

### 4. Nunca borrar, siempre archivar
Las ideas descartadas se mueven a `archivo/`, no se eliminan. El historial de decisiones tiene valor.

### 5. Commits descriptivos
Cada commit dice que idea avanzo y que cambio, no solo "update".

---

## Convenciones de nombres

| Tipo | Carpeta | Formato | Ejemplo |
|------|---------|---------|---------|
| Ideas / hipotesis | `ideas/` | `YYYY-MM-DD-nombre.md` | `2026-02-19-travel-wellness.md` |
| Hub estrategico | `ideas/` | `espacio-de-oportunidad.md` | (uno solo) |
| Perfiles | `equipo/` | `perfil-nombre-recursos-estrategicos.md` | `perfil-edgar-recursos-estrategicos.md` |
| Deep research | `deepresearch/` | `nombre-idea-research.md` | `travel-wellness-research.md` |
| Proyectos | `proyectos/` | `nombre-proyecto/README.md` | `travel-benefits/README.md` |
| Prompts | `prompts/` | `contexto-accion.md` | `ui-generar-landing.md` |
| Assets | `assets/` | `YYYY-MM-DD-descripcion.ext` | `2026-02-19-miro-flujo.png` |

---

## Flujo estandar

```
Miro → ideas/ → deep research → (validacion) → proyectos/ → vibecoding → prompts/
```

Al evaluar una idea, consultar `equipo/` para saber quien ejecuta que parte y `deepresearch/` para los numeros de mercado.
