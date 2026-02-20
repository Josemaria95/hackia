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
- `ideas/` — Problemas, hipótesis y soluciones organizadas por industria
- `equipo/` — Perfiles estratégicos del equipo: qué sabe cada uno, su red y cómo aplica a las hipótesis
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
