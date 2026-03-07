---
title: "User Journey — Empleado"
date: 2026-03-06
tags: [producto, wellness]
status: en-progreso
---

# User Journey — Empleado

Recorrido completo del empleado desde que escucha por primera vez sobre Hachiko hasta que se convierte en usuario activo y promotor. Incluye touchpoints, emociones esperadas y puntos criticos de abandono.

---

## 1. AWARENESS (Dia -7 a 0)

**Contexto**: HR anuncia Hachiko en la empresa.

| Touchpoint | Canal | Mensaje clave |
|------------|-------|---------------|
| Anuncio de HR | Email corporativo / Slack / Teams | "Tenemos una nueva app de bienestar — es un companero virtual que te ayuda a cuidar tu energia en el trabajo" |
| Poster / banner interno | Intranet / oficina | Imagen de la mascota + "Tu Refugio en el Bolsillo" |
| Sesion informativa (opcional) | Reunion de equipo (5 min) | HR explica que es voluntario, privado, y que la empresa nunca ve datos individuales |

**Emocion del empleado**: Curiosidad mezclada con escepticismo. "Otra cosa de RRHH?" / "Pero van a ver mis respuestas?"

**Punto critico de abandono**: Si el empleado percibe que es obligatorio o que HR vera sus datos, no descarga la app. El mensaje de privacidad es vital desde el primer contacto.

**Mitigacion**: Nunca usar lenguaje de "herramienta de medicion" ni "encuesta". Siempre posicionar como "companero" o "app personal". HR debe decir explicitamente: "Yo no veo nada tuyo".

---

## 2. ONBOARDING (Dia 1)

**Contexto**: El empleado descarga la app y la abre por primera vez.

| Paso | Duracion | Que ve el usuario | Que pasa en el backend |
|------|----------|-------------------|----------------------|
| 2.1 Crear cuenta | 30 seg | SSO con email empresarial (1 click) | Supabase Auth, asignacion a brand_id via dominio de email |
| 2.2 Elegir mascota | 45 seg | 3-4 opciones de apariencia base (forma, color). El usuario elige y le pone nombre. | Se crea el perfil del pet en la base de datos |
| 2.3 Tutorial | 60 seg | Animacion corta: "Yo soy [nombre del pet]. Tu me cuidas, yo te cuido." Muestra las 3 interacciones basicas. | Flag de tutorial completado |
| 2.4 Consentimiento | 45 seg | Pantalla clara con lenguaje amigable: que datos se recolectan, quien los ve (nadie individual), como revocar. Checkbox por tipo de dato. | Registro de consentimiento granular con timestamp |
| 2.5 Primer check-in | 60 seg | "Vamos a conocernos — como te sientes hoy?" presentado como la primera interaccion con el pet | PHQ-2 proxy: primer datapoint. El pet reacciona (se anima, bosteza, etc.) segun las respuestas |

**Duracion total del onboarding**: < 3 minutos

**Emocion del empleado**: Sorpresa positiva ("es bonito"), engagement inicial con la mascota, alivio al ver la pantalla de privacidad si es clara.

**Punto critico de abandono**: Si el onboarding toma mas de 5 minutos o pide demasiados permisos. Si la pantalla de consentimiento es un muro de texto legal.

**Mitigacion**: Onboarding en <3 min. Consentimiento en lenguaje simple con iconos visuales. Pedir solo permisos esenciales (notificaciones). Calendario se integra despues (S3).

---

## 3. PRIMERA SEMANA (Dia 1-7)

**Contexto**: El empleado esta en la fase de "novelty". La app es nueva, la curiosidad esta alta.

| Dia | Interaccion | Duracion | Que experimenta |
|-----|-------------|----------|-----------------|
| 1 | Check-in post-onboarding | 90 seg | El pet reacciona a sus respuestas. Primer micro-tip de coaching. |
| 2 | Notificacion push (AM) | — | "Tu pet esta despertando — como amaneciste?" |
| 2 | Check-in diario | 90 seg | Preguntas ligeramente diferentes al dia 1. El pet muestra una animacion nueva. |
| 3-5 | Check-ins diarios | 90 seg | El pet empieza a mostrar personalidad (reacciones distintas). Coaching varia cada dia. |
| 6 | Check-in + micro-insight | 2 min | "Esta semana tu energia fue mas alta los miercoles — interesante, no?" |
| 7 | WHO-5 semanal | 3 min | "Es fin de semana — hagamos un review de como estuvo tu semana". 5 preguntas camufladas. Resumen visual. |

**Emocion del empleado**: Engagement alto por novedad. Empieza a generar vinculo con el pet (le puso nombre, lo eligio). Primeros micro-momentos de valor ("ese tip estuvo bueno").

**Punto critico de abandono**: Si las preguntas se sienten repetitivas o si el coaching es generico ("duerme bien, toma agua"). Si las notificaciones son molestas.

**Mitigacion**: SLM genera variabilidad en preguntas y respuestas (CD7). Coaching contextualizado al check-in del dia. Notificaciones configurables (frecuencia, horario).

---

## 4. FORMACION DE HABITO (Semana 2-4)

**Contexto**: La novedad baja. Aqui se decide si el usuario se queda o abandona.

| Semana | Evento clave | Mecanica |
|--------|-------------|----------|
| 2 | Racha de 7 dias | "Tu pet lleva una semana contigo. Esta creciendo." Celebracion visual. (CD2) |
| 2 | WHO-5 semanal #2 | Comparacion con semana anterior: "Tu energia subio vs. la semana pasada." |
| 3 | Primer insight de patron | LLM cloud (primera sesion): "He notado que los lunes tu energia baja — quieres que exploremos por que?" (CD3) |
| 3 | Racha de 14 dias | Badge de "cuidador dedicado". El pet muestra una micro-evolucion (cambio sutil de apariencia). |
| 4 | WHO-5 #4 — tendencia mensual | Grafico de 4 semanas. "Asi ha estado tu bienestar este mes." Primer momento de auto-conocimiento real. |
| 4 | Coaching profundo #2 | LLM cloud: insight personalizado basado en 4 semanas de datos. Significativamente mas valioso que semana 1. |

**Emocion del empleado**: Transicion de curiosidad a habito. El pet se siente "suyo" (CD4). Los insights empiezan a tener profundidad. Sensacion de "esto realmente me conoce".

**Punto critico de abandono**: Semana 3 es la mas peligrosa. La novedad se agoto, el habito aun no esta formado. Si el usuario se salta 2-3 dias, el riesgo de abandono permanente es alto.

**Mitigacion**: CD8 suave (el pet "se ve cansado" despues de 2 dias sin check-in, pero se recupera rapido al volver). CD7 (sorpresa del pet en semana 3). Coaching LLM cloud como "recompensa" en semana 3 — algo nuevo que no habia visto antes. Notificacion de reenganche: "Tu pet te extrana — solo toma 90 segundos."

---

## 5. ENGAGEMENT SOSTENIDO (Mes 2+)

**Contexto**: El usuario supero la barrera de los 30 dias. El habito esta formado.

| Evento | Timing | Impacto |
|--------|--------|---------|
| Evolucion del pet (bebe -> joven) | Dia 30 | Momento de celebracion. El pet cambia de apariencia significativamente. (CD2) |
| Benchmark de equipo | Mes 2 (si N>=30) | "Tu equipo tiene un indice de bienestar del 72% — por encima del promedio de la empresa." (CD5) |
| Coaching cada vez mas personalizado | Continuo | Con 60+ dias de datos, el LLM identifica patrones complejos: estacionalidad, correlaciones con eventos laborales. |
| Insights proactivos | Semanal | "Las ultimas 3 semanas tu energia baja los jueves — coincide con [reunion recurrente]." |
| El check-in se vuelve ritual | Diario | El usuario abre la app por iniciativa propia, no por notificacion. "Como esta mi pet hoy?" |

**Emocion del empleado**: Vinculo emocional con el pet. Valoracion del coaching como "algo que realmente me ayuda". Sensacion de propiedad sobre sus datos de bienestar. Orgullo por la racha.

**Punto critico de abandono**: Monotonia si no hay variedad (CD7 debe estar activo). Cambio de trabajo (churn natural). Evento de desconfianza ("me entere que HR ve mis datos" — rumor falso).

**Mitigacion**: Eventos estacionales (C4). Evolucion del pet (S1). Recordatorios periodicos de privacidad in-app ("recuerda: solo tu ves esto"). Coaching que sigue sorprendiendo (LLM cloud nunca repite la misma estructura).

---

## 6. RETENCION A LARGO PLAZO (Mes 3+)

Las mecanicas que mantienen al usuario activo mas alla del mes 3:

| Core Drive | Mecanica de retencion | Ejemplo |
|------------|----------------------|---------|
| CD7 — Impredecibilidad | Sorpresas del pet, coaching variado, eventos estacionales | "Tu pet encontro algo hoy..." (mini-evento inesperado) |
| CD2 — Desarrollo | Evolucion del pet (joven -> adulto a los 90 dias), niveles de cuidador | Badge de "cuidador experto" a los 90 dias |
| CD3 — Creatividad | Cada sesion de coaching es unica. El usuario influye en las respuestas del LLM. | "La semana pasada me dijiste X — esta semana quiero explorar Y" |
| CD4 — Propiedad | El pet es del empleado. Sus datos son suyos. Puede exportarlos, borrarlos. | "Tu historial de bienestar de 6 meses — descargalo cuando quieras" |
| CD5 — Social | Benchmarks anonimizados de equipo | "Tu equipo mejoro 8% este mes vs. el anterior" |
| CD8 — Perdida | La racha, el estado del pet | "Racha de 45 dias — no la pierdas" (suave, nunca punitivo) |

---

## 7. ADVOCACY (Organico)

**Contexto**: El usuario se convierte en promotor de Hachiko dentro de la empresa.

| Senhal de advocacy | Como ocurre | Impacto |
|--------------------|-------------|---------|
| Recomendacion verbal | "Oye, bajate la app del pet, esta buena" — en la conversacion de oficina | Crecimiento organico dentro de la empresa. La participacion sube sin esfuerzo de HR. |
| Comentario en reunion | "Vi en Hachiko que el equipo viene bien este mes" (usando benchmark anonimizado) | Normaliza hablar de bienestar. Cambia la cultura gradualmente. |
| Solicitud a HR | "Podemos tener Hachiko en mi nueva empresa?" (si cambia de trabajo) | Expansion B2B organica. Referral gratuito. |
| Defensa del producto | Si alguien cuestiona la privacidad: "Yo lo uso hace 6 meses, nunca paso nada" | El usuario se convierte en embajador de confianza. Mas poderoso que cualquier comunicado de HR. |

---

## Resumen de Puntos Criticos de Abandono

| Momento | Riesgo | Mitigacion principal |
|---------|--------|---------------------|
| Pre-descarga | Percepcion de vigilancia | Mensaje explicito de HR: "yo no veo nada tuyo" |
| Onboarding | Friccion, demasiados permisos | <3 min, permisos minimos, consentimiento claro |
| Semana 1 | Coaching generico, notificaciones molestas | Variabilidad (CD7), configuracion de notificaciones |
| Semana 3 | Novedad agotada, habito no formado | CD8 suave, sorpresa del pet, primera sesion LLM cloud |
| Mes 2+ | Monotonia | Eventos estacionales, evolucion del pet, coaching profundo |
| Cualquier momento | Rumor de falta de privacidad | Recordatorios in-app, Privacy Manifesto publico |

---

> Documento maestro: [[hachiko-proyecto-maestro]]
> Features priorizadas: ver `06_product/features-priorizadas.md`
> Equipo: [[perfil-edgar-recursos-estrategicos]] · [[perfil-jose-recursos-estrategicos]]
