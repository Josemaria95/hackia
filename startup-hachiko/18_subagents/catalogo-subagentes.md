---
title: "Catalogo de Subagentes IA"
date: 2026-03-06
tags: [producto, wellness]
status: en-progreso
---

# Catalogo de Subagentes IA — Hachiko

10 subagentes especializados para construir y operar Hachiko. Cada uno tiene un rol definido, herramientas asociadas, output esperado y un prompt de ejemplo para invocarlo.

---

## Indice

| # | Nombre | Rol principal |
|---|--------|--------------|
| 1 | Research Agent | Investigacion de mercado, papers, estadisticas |
| 2 | Competitor Analyst | Analisis profundo de competidores |
| 3 | Copy Writer | Escritura de copy para la app |
| 4 | Data Architect | Diseno de schemas, pipelines, queries |
| 5 | UX Researcher | Analisis de entrevistas y feedback |
| 6 | Legal/Compliance | Cumplimiento normativo y privacidad |
| 7 | Pitch Deck Builder | Presentaciones para inversores |
| 8 | Sprint Planner | Organizacion y seguimiento de sprints |
| 9 | Clinical Validator | Validez psicometrica de instrumentos |
| 10 | Growth Hacker | Estrategias de crecimiento y experimentacion |

---

## 1. Research Agent

**Rol**: Investigacion de mercado, busqueda de papers academicos, estadisticas relevantes y tendencias del sector.

**Herramientas**: WebSearch, WebFetch, Read.

**Output**: Resumen estructurado con fuentes citadas, datos clave y recomendaciones.

**Cuando usarlo**:
- Al explorar un nuevo mercado o segmento.
- Al validar un dato estadistico (ej: costo del ausentismo en Chile).
- Al buscar papers sobre gamificacion en salud mental.

**Prompt de ejemplo**:
```
Actua como Research Agent especializado en healthtech y bienestar laboral.
Investiga: Cual es el costo anual del ausentismo por salud mental en empresas
chilenas? Busca datos de la SUSESO, ACHS y papers academicos recientes.
Entrega un resumen con cifras, fuentes y fecha de publicacion.
```

**Limitaciones**: Los datos pueden estar desactualizados. Siempre verificar la fecha de la fuente. No reemplaza investigacion primaria (entrevistas).

---

## 2. Competitor Analyst

**Rol**: Analisis profundo de competidores directos e indirectos. Pricing, features, posicionamiento, funding, reviews.

**Herramientas**: WebSearch, WebFetch, Read.

**Output**: Ficha competitiva estandarizada con: nombre, pais, modelo de negocio, pricing, features clave, funding, fortalezas, debilidades, diferenciacion vs Hachiko.

**Cuando usarlo**:
- Al evaluar un nuevo competidor que aparece en el radar.
- Al actualizar el landscape competitivo antes de un pitch.
- Al comparar features especificas.

**Prompt de ejemplo**:
```
Actua como Competitor Analyst. Analiza a Spring Health (springhealth.com).
Investiga: modelo de negocio, pricing publico, features principales,
funding total, clientes mencionados, reviews en G2/Capterra.
Compara con Hachiko: donde somos mas fuertes y donde mas debiles.
Formato: ficha competitiva estandarizada.
```

**Limitaciones**: Pricing B2B rara vez es publico. Reviews pueden estar sesgados. El analisis es una foto del momento.

---

## 3. Copy Writer

**Rol**: Escritura de copy para la app: mensajes de la mascota, tips de coaching, textos de onboarding, notificaciones push, microcopy de UI.

**Herramientas**: Read, Write.

**Output**: Banco de mensajes organizados por contexto (estado emocional, momento del dia, etapa de evolucion del pet).

**Cuando usarlo**:
- Al disenar las interacciones de la mascota con el usuario.
- Al crear el flujo de onboarding.
- Al escribir notificaciones push que no sean molestas.

**Prompt de ejemplo**:
```
Actua como Copy Writer para Hachiko. La mascota es un companero empatico,
nunca juzga, y habla en primera persona. Escribe 10 mensajes de check-in
matutino variados para un empleado que ha mostrado estres moderado
en los ultimos 3 dias. Tono: calido, breve (<30 palabras), sin ser
condescendiente. No uses emojis.
```

**Limitaciones**: El copy debe ser revisado por el asesor clinico para evitar mensajes que puedan ser contraproducentes en casos de riesgo alto.

---

## 4. Data Architect

**Rol**: Diseno de modelo de datos, schemas de base de datos, pipelines ETL, queries de analytics.

**Herramientas**: Read, Write, Bash.

**Output**: Migraciones SQL, diagramas de datos (texto), queries optimizadas, documentacion de schemas.

**Cuando usarlo**:
- Al disenar el modelo de datos de Supabase.
- Al crear el pipeline de agregacion para el dashboard de HR.
- Al definir como se almacenan los check-ins y scores.

**Prompt de ejemplo**:
```
Actua como Data Architect para Hachiko. Tenemos Supabase (PostgreSQL).
Disena el schema para almacenar: check-ins diarios, respuestas WHO-5
camufladas, scores de riesgo calculados, y datos agregados por equipo.
Incluye: tablas, relaciones, indices recomendados, y Row Level Security
policies para garantizar que un empleado solo vea sus datos.
```

**Limitaciones**: El diseno debe validarse contra los requisitos de privacidad (Ley 21.719). Jose es el owner de este subagente.

---

## 5. UX Researcher

**Rol**: Analisis de entrevistas, encuestas y feedback de usuarios. Sintesis de insights y recomendaciones de producto.

**Herramientas**: Read, Write.

**Output**: Insights estructurados, personas actualizadas, recomendaciones priorizadas, mapas de afinidad.

**Cuando usarlo**:
- Despues de realizar entrevistas con HR managers o empleados.
- Despues del piloto, al analizar feedback.
- Al sintetizar resultados de la encuesta pre-piloto.

**Prompt de ejemplo**:
```
Actua como UX Researcher. Aqui estan las notas de 5 entrevistas con
HR managers [pegar notas]. Sintetiza: patrones comunes, citas textuales
clave, dolores principales, nivel de interes en Hachiko, y recomendaciones
para ajustar el producto o el pitch. Formato: mapa de afinidad + insights
priorizados.
```

**Limitaciones**: La calidad del analisis depende de la calidad de las notas. Siempre grabar entrevistas (con permiso) como backup.

---

## 6. Legal/Compliance

**Rol**: Revision de cumplimiento normativo: Ley 21.719 (proteccion de datos Chile), ISTAS-21, NOM-035 (Mexico), GDPR (si aplica).

**Herramientas**: WebSearch, Read.

**Output**: Checklist de cumplimiento, gaps identificados, recomendaciones de implementacion.

**Cuando usarlo**:
- Al disenar features de privacidad y consentimiento.
- Antes de lanzar en un nuevo pais.
- Al preparar la politica de privacidad.

**Prompt de ejemplo**:
```
Actua como asesor de compliance para Hachiko. Revisa los requisitos de la
Ley 21.719 de proteccion de datos personales de Chile. Hachiko recolecta:
estado emocional diario, respuestas a WHO-5, datos de uso de la app.
Los datos individuales nunca se comparten con el empleador. Los datos
agregados si. Genera un checklist de cumplimiento y marca que requisitos
ya cubrimos y cuales son gaps.
```

**Limitaciones**: No reemplaza asesoria legal formal. Usar como guia inicial, luego validar con abogado.

---

## 7. Pitch Deck Builder

**Rol**: Creacion y refinamiento de narrativa para inversores. Estructura de slides, storytelling, datos clave.

**Herramientas**: Read, Write.

**Output**: Narrativa estructurada slide por slide, speaker notes, datos a incluir.

**Cuando usarlo**:
- Al preparar la aplicacion a Platanus Venture.
- Al preparar un pitch para angels o VCs.
- Al refinar el storytelling despues de feedback.

**Prompt de ejemplo**:
```
Actua como Pitch Deck Builder. Hachiko aplica a Platanus Venture.
Lee el proyecto maestro [referencia] y los resultados del piloto [referencia].
Genera la narrativa para un deck de 10-12 slides. Para cada slide:
titulo, puntos clave (3-4 bullets), dato o metrica a destacar,
y speaker notes (lo que diremos al presentar). Enfasis en:
problema regulatorio, insight de gamificacion, traccion del piloto.
```

**Limitaciones**: El deck final debe hacerse en la herramienta de presentacion (Canva, Google Slides). Este agente genera la narrativa, no el diseno visual.

---

## 8. Sprint Planner

**Rol**: Organizacion de tareas, estimaciones, seguimiento de sprints, priorizacion.

**Herramientas**: Read, Write.

**Output**: Sprint backlog priorizado, estimaciones en horas, dependencias, criterios de aceptacion.

**Cuando usarlo**:
- Al inicio de cada sprint (cada 2 semanas).
- Cuando hay que repriorizar por cambio de contexto.
- Al hacer retrospectiva del sprint anterior.

**Prompt de ejemplo**:
```
Actua como Sprint Planner para Hachiko. Equipo: 2 personas (Edgar: producto/ventas,
Jose: tech/datos). Sprint de 2 semanas. Objetivos del sprint: MVP con mascota +
check-in + dashboard basico. Lee el roadmap [referencia] y genera: backlog
priorizado con tareas, estimacion en horas, asignacion (Edgar/Jose), dependencias,
y definicion de "done" para cada tarea.
```

**Limitaciones**: Las estimaciones son aproximadas. Equipo de 2 personas significa que las tareas deben ser granulares y realistas.

---

## 9. Clinical Validator

**Rol**: Revision de instrumentos clinicos camuflados, evaluacion de validez psicometrica, recomendaciones de diseno de check-ins.

**Herramientas**: WebSearch, Read.

**Output**: Evaluacion de validez, riesgos de la camuflacion, recomendaciones para ajustar las preguntas.

**Cuando usarlo**:
- Al disenar los check-ins y cuestionarios camuflados.
- Al recibir feedback del asesor clinico.
- Al validar que los scores de riesgo tienen base clinica.

**Prompt de ejemplo**:
```
Actua como Clinical Validator. Hachiko camufla el WHO-5 como interacciones
con la mascota. Por ejemplo, "Como se siente tu mascota hoy?" mapea a
"Como te has sentido tu en las ultimas 2 semanas?" del WHO-5. Revisa:
1) Se mantiene la validez del instrumento? 2) Que riesgos tiene esta
camuflacion? 3) Que papers existen sobre gamificacion de instrumentos
clinicos? 4) Recomendaciones para mejorar el mapeo.
```

**Limitaciones**: Este agente NO reemplaza a un psicologo organizacional. Todo output debe ser validado por un profesional clinico. Edgar es responsable de conseguir esa validacion.

---

## 10. Growth Hacker

**Rol**: Ideacion y analisis de estrategias de crecimiento, experimentacion de canales, optimizacion de conversion.

**Herramientas**: WebSearch, Read, Write.

**Output**: Experimentos de growth definidos (hipotesis, metrica, test), analisis de canales, recomendaciones de optimizacion.

**Cuando usarlo**:
- Al buscar nuevos canales de adquisicion.
- Al optimizar conversion en alguna etapa del funnel.
- Al disenar el programa de referidos.

**Prompt de ejemplo**:
```
Actua como Growth Hacker para Hachiko. Nuestro funnel actual:
Lead (LinkedIn outreach) -> Demo -> Piloto 30 dias -> Pago.
Conversion demo->piloto es 50% pero piloto->pago es solo 30%.
Analiza: por que podria estar fallando la conversion post-piloto?
Propone 3 experimentos concretos para mejorar piloto->pago,
con hipotesis, metrica de exito, y esfuerzo estimado.
```

**Limitaciones**: Los experimentos de growth requieren volumen para ser estadisticamente significativos. Con pocos clientes, priorizar aprendizaje cualitativo.

---

## Notas generales

- Todos los subagentes se invocan desde Claude Code usando prompts estructurados.
- Se pueden combinar: ej. Research Agent + Competitor Analyst para un landscape completo.
- Los outputs deben guardarse en las carpetas correspondientes del vault.
- Ningun subagente reemplaza juicio humano en decisiones criticas (clinicas, legales, estrategicas).

---

> Proyecto maestro: [[hachiko-proyecto-maestro]]
> Equipo: [[perfil-edgar-recursos-estrategicos]] · [[perfil-jose-recursos-estrategicos]]
