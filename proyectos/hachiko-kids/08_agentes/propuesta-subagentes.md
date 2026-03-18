---
title: "Propuesta de Subagentes IA — Hachiko Kids"
date: 2026-03-17
tags: [estrategia, producto, wellness, educacion]
status: en-progreso
---

# Propuesta de Subagentes IA — Hachiko Kids

Catálogo de subagentes especializados para acelerar el crecimiento de Hachiko Kids. Adaptado del catálogo original de Hachiko Corporativo (`startup-hachiko/18_subagents/`) al contexto del pivot infantil y la fase actual del proyecto.

**Estado del proyecto al momento de esta propuesta**: MVP desplegado (Android APK), piloto por arrancar con familias, pipeline activo de financiamiento (Salcobrand, ChileMass, Platanus, COPEC UC).

---

## Índice

| # | Subagente | Tipo | Prioridad |
|---|-----------|------|-----------|
| 1 | Pitch Deck Builder | Reutilizado | CRITICA |
| 2 | Grant Application Writer | NUEVO | CRITICA |
| 3 | Copy Writer (Kids) | Adaptado | ALTA |
| 4 | Pilot Analytics Agent | NUEVO | ALTA |
| 5 | UX Researcher | Reutilizado | ALTA |
| 6 | Parent Engagement Agent | NUEVO | MEDIA |
| 7 | Growth Hacker (Kids) | Adaptado | MEDIA |
| 8 | Clinical Validator | Reutilizado | MEDIA |
| 9 | Legal/Compliance (Menores) | Adaptado | MEDIA |
| 10 | Content Marketing Agent | NUEVO | BAJA |

---

## Fase 1: URGENTES (semana 17-22 marzo 2026)

### 1. Pitch Deck Builder

**Rol**: Creación y adaptación de narrativa para convocatorias, inversores y aceleradoras. Genera estructura slide-by-slide con speaker notes.

**Herramientas**: Read, Write, WebSearch.

**Output**: Narrativa estructurada por slide (título, bullets, dato clave, speaker notes). Adaptable por audiencia.

**Cuándo usarlo**:
- Al preparar la postulación a Open Salcobrand (ángulo salud infantil + farmacia)
- Al preparar ChileMass (ángulo internacionalización LATAM + USA hispano)
- Al preparar Platanus (ángulo startup tech early-stage + tracción)
- Antes de cualquier pitch a inversores o clínicos

**Prompt de ejemplo**:
```
Actúa como Pitch Deck Builder para Hachiko Kids. Lee el CLAUDE.md del proyecto
y 07_financiamiento/calendario-convocatorias.md.

Genera la narrativa para un deck de 10 slides para Open Salcobrand. Ángulo:
app de bienestar emocional infantil como complemento al ecosistema salud de
la farmacia. Para cada slide: título, 3-4 bullets, dato/métrica a destacar,
y speaker notes. Énfasis en: problema (salud mental infantil en Chile),
solución (mascota + datos), fit con Salcobrand (padres que van a la farmacia
por sus hijos), y plan de piloto 6 meses.
```

**Adaptación por convocatoria**:
| Convocatoria | Ángulo principal | Dato estrella |
|--------------|------------------|---------------|
| Salcobrand | Salud infantil + ecosistema farmacia | 1 de 4 niños en Chile tiene problemas conductuales |
| ChileMass | Internacionalización LATAM + USA hispano | TAM $2.7B salud mental infantil LATAM |
| Platanus | Startup tech + equipo + tracción piloto | MVP en 4 días con IA, costo $0 |
| COPEC UC | I+D aplicada + validación clínica | Correlación datos app vs SDQ |

---

### 2. Grant Application Writer (NUEVO)

**Rol**: Redacción de formularios de postulación, propuestas de piloto y justificaciones de fit para convocatorias específicas. Diferente del pitch deck: esto es prosa formal, no slides.

**Herramientas**: Read, Write, WebSearch, WebFetch.

**Output**: Documento de postulación listo para enviar (1-3 páginas según requerimiento), con secciones estándar: problema, solución, equipo, plan, métricas, presupuesto.

**Cuándo usarlo**:
- Al completar formularios de postulación (Salcobrand, ChileMass, COPEC UC)
- Al redactar propuestas de piloto ("¿qué haría Hachiko dentro de X?")
- Al preparar justificaciones de impacto social/comercial

**Prompt de ejemplo — Salcobrand**:
```
Actúa como Grant Writer para Hachiko Kids. Lee CLAUDE.md y
07_financiamiento/calendario-convocatorias.md.

Redacta la propuesta de piloto para Open Salcobrand (7a versión, UDD Ventures).
Estructura:
1. Problema que resolvemos (salud mental infantil, brecha de detección)
2. Nuestra solución (app con mascota + dashboard padres)
3. Cómo se integra al ecosistema Salcobrand (padres en farmacia → herramienta digital)
4. Plan de piloto 6 meses (métricas, hitos, entregables)
5. Equipo (Edgar: experiencia PIE/clínica, Jose: tech/datos)
6. Por qué ahora (datos Chile, regulación, momentum IA)

Tono: profesional pero accesible. Máximo 2 páginas.
```

**Prompt de ejemplo — ChileMass**:
```
Actúa como Grant Writer para Hachiko Kids. Redacta la postulación a
ChileMass Emprende 2026. Ángulo: startup chilena de HealthTech infantil
con potencial de escalar a toda LATAM y mercado hispano en USA.

Incluye: visión de internacionalización, TAM por país, ventaja competitiva
(nadie combina mascota + datos + dashboard + español), plan para aprovechar
la inmersión en Boston (conexiones HealthTech, EdTech, VCs).
```

**Limitaciones**: Cada convocatoria tiene bases específicas. Siempre leer las bases completas antes de usar el agente. El output es un borrador — requiere revisión humana final.

---

### 3. Copy Writer (Kids)

**Rol**: Escritura de copy adaptado al contexto infantil: mensajes de Luna, reacciones de mascota, textos de onboarding, one-pager para padres, narrativa para video demo, copy de landing.

**Herramientas**: Read, Write.

**Output**: Banco de mensajes organizados por contexto y audiencia (niño vs padre vs inversor).

**Cuándo usarlo**:
- Al crear el one-pager del proyecto (material reutilizable para todas las postulaciones)
- Al escribir el guión del video demo (2 min: flujo niño + dashboard padre)
- Al generar nuevos escenarios conductuales para la app
- Al escribir copy de la landing piloto o landing principal

**Prompt de ejemplo — One-pager**:
```
Actúa como Copy Writer para Hachiko Kids. Lee el CLAUDE.md completo.

Genera un one-pager (1 página) para presentar Hachiko Kids a potenciales
aliados y convocatorias. Estructura:
- Headline (1 frase de impacto)
- Problema (3 líneas)
- Solución (3 líneas + screenshot conceptual)
- Cómo funciona (3 pasos: niño, mascota, padre)
- Diferenciación (1 tabla vs competidores)
- Equipo (2 líneas por fundador)
- Contacto

Tono: cálido, profesional, sin jerga clínica. Lenguaje conductual.
```

**Prompt de ejemplo — Video demo**:
```
Actúa como guionista para un video demo de 2 minutos de Hachiko Kids.
Estructura: 0:00-0:15 hook (problema), 0:15-0:45 flujo niño (Luna + escenario
+ emoción + respirar), 0:45-1:15 flujo padre (resumen semanal + tips),
1:15-1:45 diferenciación, 1:45-2:00 CTA. Incluye texto en pantalla y voz en off.
```

**Reglas del copy**:
- Para niños: frases cortas, palabras simples, todo es juego con Luna
- Para padres: conductual ("patrones de comportamiento"), NUNCA clínico ("trastorno", "screening")
- Para inversores: datos duros, mercado, tracción

---

## Fase 2: PILOTO (semana 3-6)

### 4. Pilot Analytics Agent (NUEVO)

**Rol**: Análisis de datos del piloto en Supabase. Genera reportes de retención, engagement, patrones conductuales y alertas. El subagente más importante para la decisión GO/NO-GO.

**Herramientas**: Read, Bash (SQL queries), Write.

**Output**: Reporte semanal con métricas clave, gráficos conceptuales (ASCII/texto), insights y recomendaciones de producto.

**Cuándo usarlo**:
- Cada lunes durante el piloto (reporte semanal)
- Cuando se necesite un análisis ad-hoc ("¿los de 4-6 años usan más que los de 7-12?")
- Para preparar métricas de tracción para las postulaciones

**Prompt de ejemplo — Reporte semanal**:
```
Actúa como Pilot Analytics Agent para Hachiko Kids.
Supabase project: zxwaxpattxlhxvqaawnq.

Genera el reporte de la semana [fecha]. Incluye:
1. Usuarios activos (niños que hicieron ≥1 check-in)
2. Check-ins totales y promedio por niño
3. Retención: D1, D3, D7 (% que volvió)
4. Distribución de emociones (happy/sad/angry/scared/neutral)
5. Dimensión más y menos elegida
6. Flags: niños que no usaron en >3 días
7. Top 3 insights
8. 1 recomendación de producto

Formato: tabla + bullets. Compara con semana anterior si hay datos.
```

**Prompt de ejemplo — Análisis específico**:
```
Analiza si hay diferencia de engagement entre niños de 4-6 años vs 7-12 años.
Métricas: frecuencia de uso, duración estimada (proxy: check-ins/día),
emociones más frecuentes, dimensiones preferidas. ¿Hay evidencia para
ajustar la experiencia por grupo de edad?
```

**Métricas clave a trackear** (del CLAUDE.md):

| Métrica | Target | Query base |
|---------|--------|------------|
| Aperturas/semana por niño | >4 | COUNT check-ins por child_id por semana |
| Retención D7 | >60% | % children con check-in en día 7 vs día 1 |
| Retención D14 | >45% | % children con check-in en día 14 vs día 1 |
| Retención D30 | >35% | % children con check-in en día 30 vs día 1 |
| Emoción más frecuente | — | MODE(emotion) agrupado por semana |
| Padre abre resumen | >70% | (requiere tracking adicional en app) |

---

### 5. UX Researcher

**Rol**: Síntesis de entrevistas con padres piloto, análisis de feedback cualitativo, identificación de fricciones y oportunidades de mejora.

**Herramientas**: Read, Write.

**Output**: Insights priorizados, citas textuales clave, mapa de afinidad, recomendaciones de producto.

**Cuándo usarlo**:
- Después de cada ronda de entrevistas con padres (semanal durante piloto)
- Al sintetizar respuestas de encuestas post-piloto
- Al preparar la narrativa de "voz del cliente" para postulaciones

**Prompt de ejemplo**:
```
Actúa como UX Researcher para Hachiko Kids. Aquí están las notas de
entrevistas con 5 padres del piloto [pegar notas].

Sintetiza:
1. Patrones comunes (qué valoran, qué frustra, qué sorprende)
2. Citas textuales clave (verbatim de padres)
3. Fricciones del producto (momentos donde abandonan o se confunden)
4. Nivel de disposición a pagar ($5/mes)
5. Sugerencias de features más pedidas
6. Recomendaciones para siguiente iteración

Formato: mapa de afinidad + insights priorizados por impacto.
```

---

### 6. Parent Engagement Agent (NUEVO)

**Rol**: Generación de contenido semanal para mantener a los padres comprometidos durante el piloto. Tips de crianza, mensajes push, copy de resúmenes semanales personalizados.

**Herramientas**: Read, Write.

**Output**: Banco de tips por dimensión conductual, templates de notificaciones push, mensajes de resumen semanal.

**Cuándo usarlo**:
- Al generar el contenido semanal de tips para padres
- Al diseñar la estrategia de retención vía notificaciones push
- Al crear mensajes de re-engagement para padres inactivos

**Prompt de ejemplo — Tips semanales**:
```
Actúa como Parent Engagement Agent para Hachiko Kids. Lee las 5 dimensiones
conductuales del CLAUDE.md.

Genera 3 tips de crianza por dimensión (15 total) para padres de niños de 4-8 años.
Cada tip debe ser:
- Accionable (algo que el padre puede hacer hoy)
- Breve (2-3 frases máximo)
- Positivo (sin culpa, sin "deberías")
- Basado en evidencia conductual (no clínica)

Formato: dimensión → tip → ejemplo concreto.
```

**Prompt de ejemplo — Notificaciones push**:
```
Genera 10 variantes de notificación push para el resumen semanal del lunes.
Criterios: <50 caracteres, cálido, que invite a abrir sin generar ansiedad.
Ejemplos del tono: "Luna tuvo una buena semana" (no "Revisa los resultados de tu hijo").
```

---

## Fase 3: CRECIMIENTO (mes 2+)

### 7. Growth Hacker (Kids)

**Rol**: Estrategias de adquisición B2C adaptadas al nicho de padres preocupados por el bienestar emocional de sus hijos. Canales orgánicos primero (bajo presupuesto).

**Herramientas**: WebSearch, Read, Write.

**Output**: Experimentos de growth definidos (hipótesis, métrica, test), análisis de canales, estrategia de referidos.

**Cuándo usarlo**:
- Al diseñar la estrategia de adquisición post-piloto
- Al optimizar la conversión de la landing page
- Al diseñar el programa de referidos entre padres

**Prompt de ejemplo**:
```
Actúa como Growth Hacker para Hachiko Kids. Nuestro target: padres de
niños 4-12 años en Chile, preocupados por comportamiento o bienestar emocional.
Presupuesto de marketing: $0 (solo orgánico por ahora).

Propone 5 experimentos de growth ordenados por esfuerzo/impacto:
1. Canal (Instagram, TikTok, grupos WhatsApp de apoderados, pediatras, etc.)
2. Formato de contenido
3. Hipótesis
4. Métrica de éxito
5. Esfuerzo estimado (horas)

Priorizar canales donde padres chilenos ya buscan información sobre crianza.
```

**Canales prioritarios para Chile**:
- Grupos de WhatsApp de apoderados (colegios)
- Instagram de crianza (@crianzarespetuosa.cl, etc.)
- TikTok parenting (contenido educativo corto)
- Pediatras y psicólogos infantiles como canal de referencia
- Grupos Facebook de mamás/papás por comuna

---

### 8. Clinical Validator

**Rol**: Validación de los escenarios conductuales con psicólogos infantiles. Evaluación de si los datos de la app tienen correlación con instrumentos clínicos (SDQ, CBCL).

**Herramientas**: WebSearch, Read, Write.

**Output**: Evaluación de validez de los escenarios, recomendaciones para ajustar dimensiones, diseño del estudio de correlación (H4).

**Cuándo usarlo**:
- Al preparar el pitch para clínicos (H3: "¿encuentran estos datos útiles?")
- Al diseñar el estudio de correlación con SDQ (H4)
- Al agregar o modificar escenarios conductuales

**Prompt de ejemplo**:
```
Actúa como Clinical Validator especializado en psicología infantil.
Hachiko Kids evalúa 5 dimensiones conductuales a través de escenarios
de juego con una mascota virtual. Lee la sección "5 dimensiones
conductuales" del CLAUDE.md.

Evalúa:
1. ¿Las 5 dimensiones cubren los dominios principales del SDQ?
2. ¿Los escenarios son apropiados para niños de 4-12 años?
3. ¿Qué dimensiones faltan o están sobre-representadas?
4. ¿Cómo diseñarías un estudio de correlación app vs SDQ (N≥30)?
5. Papers relevantes sobre gamificación de screening conductual infantil.
```

---

### 9. Legal/Compliance (Menores)

**Rol**: Cumplimiento normativo específico para datos de menores de edad. Chile (Ley 21.719), COPPA (si se expande a USA), políticas de App Store/Play Store para apps dirigidas a niños.

**Herramientas**: WebSearch, Read, Write.

**Output**: Checklist de cumplimiento, gaps identificados, política de privacidad borrador, requisitos para publicar en stores.

**Cuándo usarlo**:
- Antes de publicar en Google Play / App Store (mes 2)
- Al redactar la política de privacidad
- Al evaluar expansión a otros países

**Prompt de ejemplo**:
```
Actúa como asesor de compliance para Hachiko Kids (app para niños 4-12 años).

Hachiko recolecta: emociones diarias, elecciones en escenarios conductuales,
nombre del niño (solo primer nombre), edad aproximada (grupo 4-6 o 7-12).
NO recolecta: fotos, ubicación, contactos, audio, video.
Los datos se almacenan en Supabase (servidores USA).

Genera:
1. Checklist de cumplimiento Ley 21.719 (Chile) para datos de menores
2. Requisitos COPPA si expandimos a USA
3. Requisitos Google Play "Designed for Families"
4. Requisitos App Store "Kids Category"
5. Borrador de política de privacidad (español)
6. Gaps actuales y recomendaciones
```

**Líneas rojas** (del CLAUDE.md, no negociables):
- NUNCA vender datos de niños
- NUNCA compartir datos individuales sin consentimiento
- Protocolo de crisis si se detecta riesgo severo

---

### 10. Content Marketing Agent (NUEVO)

**Rol**: Creación de contenido educativo sobre crianza positiva y bienestar emocional infantil para redes sociales. Posiciona a Hachiko Kids como referente en el tema.

**Herramientas**: Read, Write, WebSearch.

**Output**: Calendario de contenido mensual, posts listos para publicar, infografías (texto/estructura), guiones de reels/TikToks.

**Cuándo usarlo**:
- Al planificar el contenido mensual de redes sociales
- Al crear material educativo reutilizable
- Al preparar contenido para el blog/landing

**Prompt de ejemplo**:
```
Actúa como Content Marketing Agent para Hachiko Kids.
Target: padres chilenos de niños 4-12, nivel socioeconómico medio,
activos en Instagram y TikTok.

Genera un calendario de contenido para 2 semanas (10 posts):
- 4 posts educativos (tips de crianza por dimensión conductual)
- 3 posts de producto (cómo funciona la app, testimonios)
- 2 posts de engagement (preguntas, encuestas)
- 1 post de autoridad (dato estadístico + insight)

Para cada post: texto, hashtags, formato sugerido (carrusel, reel, story),
y CTA. Tono: cercano, empático, sin jerga clínica.
```

---

## Combinaciones recomendadas

Algunos subagentes son más poderosos cuando se combinan:

| Combinación | Para qué | Caso de uso |
|-------------|----------|-------------|
| Pitch Deck + Grant Writer | Postulación completa | Salcobrand, ChileMass |
| Pilot Analytics + UX Researcher | Reporte integral del piloto | Decisión GO/NO-GO |
| Clinical Validator + Pilot Analytics | Preparar H3 y H4 | Pitch a clínicos |
| Growth Hacker + Content Marketing | Estrategia de adquisición | Post-piloto |
| Copy Writer + Parent Engagement | Retención durante piloto | Semanas 3-6 |

---

## Plan de activación sugerido

| Semana | Subagentes a activar | Entregable principal |
|--------|---------------------|---------------------|
| 17-22 mar | 1 (Pitch Deck) + 2 (Grant Writer) + 3 (Copy Writer) | Postulaciones Salcobrand + ChileMass + one-pager |
| 23-31 mar | 2 (Grant Writer) para COPEC UC + Platanus | Propuestas de I+D y application Platanus |
| Semana 3 piloto | 4 (Pilot Analytics) + 5 (UX Researcher) | Primer reporte semanal |
| Semana 4-6 | 4 + 5 + 6 (Parent Engagement) | Reportes + tips + retención |
| Mes 2 | 7 (Growth) + 9 (Legal) + 10 (Content) | Estrategia de lanzamiento público |
| Mes 3 | 8 (Clinical Validator) | Preparación canal B2B clínicas |

---

## Notas generales

- Todos los subagentes se invocan desde Claude Code usando los prompts de ejemplo.
- Los outputs deben guardarse en las carpetas correspondientes del proyecto.
- Los subagentes marcados como "NUEVO" no existen en el catálogo de `startup-hachiko/` y son específicos para el contexto Kids.
- Ningún subagente reemplaza juicio humano en decisiones críticas (clínicas, legales, estratégicas, financieras).
- **Decisión pendiente para Edgar y Jose**: Priorizar los 3 subagentes urgentes (1, 2, 3) esta semana y definir quién es owner de cada uno.

---

> Contexto: [[hachiko-proyecto-maestro]]
> Catálogo original: `startup-hachiko/18_subagents/catalogo-subagentes.md`
> Financiamiento: [[convocatorias]] · [[calendario-convocatorias]]
> Equipo: [[perfil-edgar-recursos-estrategicos]] · [[perfil-jose-recursos-estrategicos]]
