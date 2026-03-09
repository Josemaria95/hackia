---
title: "Plan Operativo — Hachiko (Semanas 1-8)"
date: 2026-03-08
tags: [estrategia, wellness, corporativo]
status: en-progreso
---

# Plan Operativo — Hachiko

> Horizonte: **8 semanas** (8 de marzo - 2 de mayo 2026)
> Alcance: tareas diarias/semanales, responsables, entregables concretos, herramientas
> Pregunta que responde: **Que hacemos hoy, manana y esta semana?**
>
> **RESTRICCION CRITICA:** Platanus Venture abre el 4 de marzo y cierra el **29 de marzo a las 23:59**. La aplicacion debe enviarse ANTES de esa fecha. Esto significa que el deck Platanus se construye en paralelo al MVP, sin datos de piloto — se apoya en research, demo funcional, equipo y narrativa.

---

## 1. Resumen del periodo

| Fase | Semanas | Foco |
|------|---------|------|
| **Sprint 1** | Sem 1 (Mar 8-14) | MVP core + outreach empresas + estructura deck Platanus |
| **Sprint 2** | Sem 2-3 (Mar 15-28) | Completar MVP demostrable + deck Platanus final + validacion clinica |
| **Sprint 3** | Sem 4 (Mar 29 - Abr 11) | **ENVIAR PLATANUS (Mar 29)** + lanzar pilotos + onboarding empresas |
| **Sprint 4** | Sem 5-8 (Abr 12 - May 2) | Piloto activo + recolectar datos + decision Go/No-Go del producto |

**Hito inamovible:** Aplicacion Platanus enviada antes del **sabado 29 de marzo a las 23:59**.

---

## 2. Sprint 1 — Semana 1 (Marzo 8-14)

### Meta: "Base tecnica + pipeline de empresas + narrativa Platanus definida"

---

#### JOSE — Tareas tech/datos

| # | Tarea | Entregable | Estimacion | Dia inicio | Dia fin |
|---|-------|-----------|-----------|-----------|---------|
| J1.1 | Crear repo + proyecto React Native (Expo) | Scaffold con navegacion basica | 0.5 dia | Lun 8 | Lun 8 |
| J1.2 | Setup Supabase: schema, RLS, auth con email corporativo | DB funcional con tablas core (users, pets, checkins, organizations) | 1 dia | Lun 8 | Mar 9 |
| J1.3 | API basica: Cloudflare Workers + Hono | Endpoints: POST /checkin, GET /pet-status, GET /dashboard | 1 dia | Mie 10 | Mie 10 |
| J1.4 | Pantalla de mascota: 4 estados (contenta, cansada, estresada, enferma) | Componente React Native con assets placeholder + transiciones | 2 dias | Jue 11 | Vie 12 |
| J1.5 | Diagrama de arquitectura para deck Platanus | Diagrama limpio del stack tecnico (1 slide) | 0.5 dia | Vie 13 | Vie 13 |

**Total estimado Jose Sprint 1:** 5 dias

#### EDGAR — Tareas producto/ventas/Platanus

| # | Tarea | Entregable | Estimacion | Dia inicio | Dia fin |
|---|-------|-----------|-----------|-----------|---------|
| E1.1 | Escribir one-pager de Hachiko | PDF de 1 pagina: problema, solucion, propuesta de piloto | 0.5 dia | Lun 8 | Lun 8 |
| E1.2 | Armar lista de 20 empresas target | Spreadsheet: empresa, tamano, contacto HR, via de acceso, estado | 0.5 dia | Lun 8 | Lun 8 |
| E1.3 | Contactar 10 empresas (emails + LinkedIn + red personal) | Mensajes enviados. Registro en spreadsheet. | Ongoing | Mar 9 | Vie 14 |
| E1.4 | Contactar 2 psicologos organizacionales (red CEAPSI) | Mensaje/llamada enviada. Reunion agendada. | 0.5 dia | Mar 9 | Mar 9 |
| E1.5 | Disenar flujo de onboarding + check-in en Miro | Wireframes: registro, tutorial, check-in, reacciones mascota | 1.5 dias | Mie 10 | Jue 11 |
| E1.6 | **Estructura del deck Platanus (10 slides)** | Narrativa definida: problema → insight → solucion → mercado → moats → equipo → ask. Textos draft. | 2 dias | Jue 12 | Vie 14 |
| E1.7 | Investigar formato y criterios de Platanus | Que buscan, que preguntan, proceso post-aplicacion | 0.5 dia | Lun 8 | Lun 8 |

**Total estimado Edgar Sprint 1:** 5.5 dias + seguimiento continuo

#### AMBOS

| # | Tarea | Entregable | Cuando |
|---|-------|-----------|--------|
| A1.1 | Definir metricas de exito del piloto | Documento con targets: participacion, frecuencia, NPS, timeline | Lun 8 (1h) |
| A1.2 | Alinear narrativa Platanus | Acuerdo en: que historia contamos sin data de piloto? (research + demo + equipo + regulacion) | Mie 10 (1h) |
| A1.3 | Standup diario (15 min) | Sync rapido: que hice, que hare, bloqueos | Diario 9:00 AM |
| A1.4 | Sprint review | Demo MVP parcial + narrativa Platanus + pipeline empresas | Dom 14 (1h) |

---

### Entregables Sprint 1

| Entregable | Criterio de "listo" | Owner |
|-----------|-------------------|-------|
| App base: mascota + check-in + API | Mascota visible con 4 estados + check-in guardando en DB | Jose |
| Diagrama arquitectura para deck | 1 slide limpio del stack | Jose |
| One-pager PDF | Diseño limpio, 1 pagina, listo para enviar | Edgar |
| Pipeline de 20 empresas | Spreadsheet con estado de cada contacto | Edgar |
| 10 empresas contactadas | Mensajes enviados, al menos 3 respuestas | Edgar |
| Estructura deck Platanus | 10 slides con textos draft, sin pulir | Edgar |
| Psicologo contactado | Reunion agendada | Edgar |

---

## 3. Sprint 2 — Semanas 2-3 (Marzo 15-28)

### Meta: "MVP demostrable + deck Platanus TERMINADO + al menos 1 LOI de empresa"

Este es el sprint mas intenso. Hay dos tracks en paralelo: cerrar el MVP al punto de que sea demostrable (no necesita estar perfecto, pero si funcional de punta a punta) y terminar el deck de Platanus.

---

#### JOSE

| # | Tarea | Entregable | Estimacion | Dia inicio | Dia fin |
|---|-------|-----------|-----------|-----------|---------|
| J2.1 | Flujo de check-in diario (PHQ-2 proxy) | 2-3 preguntas camufladas, respuestas guardadas en Supabase, <2 min | 1.5 dias | Lun 15 | Mar 16 |
| J2.2 | Coaching rule-based: templates JSON | 20-30 respuestas categorizadas por tipo de check-in | 1 dia | Mie 17 | Mie 17 |
| J2.3 | Check-in semanal WHO-5 camuflado | 5 preguntas como "como amanecio tu pet esta semana" | 1 dia | Jue 18 | Jue 18 |
| J2.4 | Dashboard HR v0: participacion + risk score | Pagina React + TS: % participacion, risk promedio, grafico | 2 dias | Vie 19 | Lun 21 |
| J2.5 | Pantalla de consentimiento + multi-tenancy (RLS) | Texto claro, granular, registro con timestamp. Aislamiento por org. | 1.5 dias | Mar 22 | Mie 23 |
| J2.6 | Sistema de rachas basico | Contador de dias consecutivos. Streak freeze. | 0.5 dia | Jue 24 | Jue 24 |
| J2.7 | Notificaciones push basicas (Expo Notifications) | Notificacion diaria configurable (hora) | 0.5 dia | Jue 24 | Jue 24 |
| J2.8 | Testing + bug fixes | Testing con 5-10 personas cercanas. Fix bugs criticos. | 2 dias | Vie 25 | Lun 28 |
| J2.9 | Deploy beta | App en TestFlight + APK interno + Workers deployed | 0.5 dia | Lun 28 | Lun 28 |
| J2.10 | **Grabar video demo de 2-3 min para deck Platanus** | Screen recording del flujo completo: onboarding → check-in → mascota → dashboard HR | 0.5 dia | Mar 28 | Mar 28 |

**Total estimado Jose Sprint 2:** 11 dias (2 semanas, apretado pero factible)

#### EDGAR

| # | Tarea | Entregable | Estimacion | Dia inicio | Dia fin |
|---|-------|-----------|-----------|-----------|---------|
| E2.1 | Escribir copy de mascota: mensajes y reacciones | Banco de 40+ mensajes: saludos, reacciones, tips, estados del pet | 2 dias | Lun 15 | Mar 16 |
| E2.2 | Preparar propuesta de piloto (para empresas) | Documento de 2 paginas: que es, que mide, como funciona, compromisos | 1 dia | Mie 17 | Mie 17 |
| E2.3 | Seguimiento empresas + confirmar LOIs | Calls/demos con interesados. Objetivo: 1-2 LOIs firmadas. | Ongoing | Lun 15 | Vie 28 |
| E2.4 | Reunion con psicologo (validacion clinica) | Presentar instrumentos camuflados. Recoger feedback. Documentar. | 1 dia | Sem 2 o 3 |
| E2.5 | **Completar deck Platanus: slides finales** | 10 slides pulidas con diseño. Datos de mercado, equipo, producto, ask. | 3 dias | Lun 22 | Mie 25 |
| E2.6 | **Integrar demo/screenshots del MVP en deck** | Screenshots reales o video link del MVP funcional | 0.5 dia | Mar 28 | Mar 28 |
| E2.7 | **Rellenar formulario de aplicacion Platanus** | Formulario online completo, revisado por ambos | 1 dia | Jue 27 | Vie 28 |
| E2.8 | Entrevistas con 2-3 HR managers (discovery) | Seguir guia de entrevistas. Documentar findings para deck. | Ongoing | Lun 15 | Vie 28 |

**Total estimado Edgar Sprint 2:** 8.5 dias + seguimiento continuo

#### AMBOS

| # | Tarea | Cuando |
|---|-------|--------|
| A2.1 | Standup diario | Diario 9:00 AM |
| A2.2 | **Revision intermedia del deck Platanus** | Dom 22 (1h) — revisar narrativa, datos, gaps |
| A2.3 | **Revision FINAL del deck Platanus** | Vie 28 (2h) — ultima pasada, ensayar pitch verbal |
| A2.4 | Sprint review: demo MVP + deck terminado | Vie 28 (1h) |

---

### Entregables Sprint 2

| Entregable | Criterio de "listo" | Owner | Deadline |
|-----------|-------------------|-------|----------|
| MVP funcional y deployado | Check-in diario + semanal + mascota + dashboard + auth + consentimiento | Jose | Lun 28 |
| Video demo de 2-3 min | Flujo completo grabado, listo para incluir en aplicacion | Jose | Mar 28 |
| Deck Platanus terminado | 10 slides finales con diseño, datos, equipo, ask, screenshots del MVP | Edgar | Vie 28 |
| Formulario Platanus llenado | Todos los campos completos, revisado por ambos | Edgar | Vie 28 |
| 1+ LOI de empresa para piloto | Empresa comprometida a piloto de 30 dias | Edgar | Vie 28 |
| Feedback clinico documentado | Documento con opinion del psicologo + ajustes necesarios | Edgar | Vie 28 |

---

## HITO: Enviar aplicacion Platanus — Sabado 29 de Marzo (antes de 23:59)

**Que incluye la aplicacion (sin datos de piloto):**

| Elemento | Que mostramos | Fuente |
|----------|--------------|--------|
| **Problema** | $1 trillon OMS, ISTAS-21 mide pero no previene, <5% adoption de EAPs | Research ya hecho |
| **Insight** | Gamificacion + mascota = recoleccion voluntaria de datos | Octalysis, estado del arte |
| **Producto** | Demo funcional del MVP (video + screenshots) | MVP Sprint 2 |
| **Mercado** | TAM $500M Chile, SAM $50M, SOM $250K-500K Ano 1 | TAM/SAM/SOM ya hecho |
| **Canal** | Mutuales (270K empresas) + B2B directo | Mercado Chile ya investigado |
| **Moats** | Datos longitudinales, canal mutuales, compliance Ley 21.719, confianza | Plan estrategico |
| **Equipo** | Edgar (ops + salud mental + ventas) + Jose (data eng + corporativo) | Perfiles ya documentados |
| **Traccion temprana** | LOIs de empresas interesadas, feedback de HR managers, validacion clinica | Outreach Sprint 1-2 |
| **Ask** | $150-300K para 18 meses de runway: producto + primeros clientes + piloto mutual | Financiero modelado |

**Nota:** No tener datos de piloto NO es un deal-breaker para Platanus. Ellos invierten en equipos y mercados, no solo en metricas. Lo que importa: narrativa clara, equipo fuerte, mercado grande con regulacion favorable, y un MVP que demuestre capacidad de ejecucion.

---

## 4. Sprint 3 — Semana 4+ (Marzo 29 - Abril 11)

### Meta: "Platanus enviado + pilotos lanzados + primeros datos reales"

---

#### JOSE

| # | Tarea | Entregable |
|---|-------|-----------|
| J3.1 | Mejorar UX basado en feedback de testing | Ajustes de UI: colores de marca, transiciones, legibilidad |
| J3.2 | Pipeline datos: risk score simple | Logica de thresholds: WHO-5 < X = riesgo alto. Calculo automatico. |
| J3.3 | Monitorear metricas diarias del piloto (cuando inicie) | Dashboard interno: registros, check-ins, retention, errores |
| J3.4 | Fix bugs reportados por usuarios del piloto | Hotfixes desplegados en <24h |
| J3.5 | Implementar tracking de metricas clave | WACE, DAU/MAU, session duration, check-in completion rate |

#### EDGAR

| # | Tarea | Entregable |
|---|-------|-----------|
| E3.1 | **Enviar aplicacion Platanus** (si no se hizo el sabado 29) | Aplicacion enviada antes de las 23:59 del 29 de marzo |
| E3.2 | Preparar onboarding para pilotos | Guia para HR: como comunicar a empleados, link de descarga, FAQ |
| E3.3 | Escribir comunicacion de lanzamiento | Email/Slack template que HR envia a empleados |
| E3.4 | Lanzar piloto en empresa(s) confirmada(s) | Onboarding completado, empleados usando la app |
| E3.5 | Monitorear participacion diaria del piloto | Reporte diario a Jose con observaciones cualitativas |
| E3.6 | Seguimiento empresas restantes del pipeline | Nuevos LOIs, demos, propuestas |

#### AMBOS

| # | Tarea | Cuando |
|---|-------|--------|
| A3.1 | Standup diario | Diario 9:00 AM |
| A3.2 | Sprint review: estado del piloto + pipeline | Vie Abr 11 (1h) |

---

## 5. Sprint 4 — Semanas 5-8 (Abril 12 - Mayo 2)

### Meta: "Datos del piloto + decision Go/No-Go + preparar para entrevistas Platanus"

---

#### JOSE

| # | Tarea | Entregable |
|---|-------|-----------|
| J4.1 | Monitorear + iterar piloto activo | Ajustes semanales basados en data real |
| J4.2 | Analisis de cohortes semana 1 vs 2 vs 3 | Graficos de retencion por cohorte |
| J4.3 | Analisis final de datos del piloto | Reporte: participacion, frecuencia, retention, risk scores |
| J4.4 | Calcular NPS del piloto | Encuesta NPS enviada + resultado calculado |
| J4.5 | Visualizaciones para entrevistas Platanus | Graficos limpios con data real del piloto |

#### EDGAR

| # | Tarea | Entregable |
|---|-------|-----------|
| E4.1 | Entrevistar 3-5 HR managers (piloto + no piloto) | Transcripciones, insights documentados en [[resultados]] |
| E4.2 | Distribuir encuesta empleados | Google Forms, 50+ respuestas objetivo |
| E4.3 | Recoger testimonios cualitativos | 5-10 quotes de usuarios sobre la experiencia |
| E4.4 | Compilar resultados en [[resultados]] | Cada hipotesis con resultado, aprendizaje, decision |
| E4.5 | Actualizar deck con metricas reales (para entrevistas Platanus) | Version 2 del deck con proof points del piloto |
| E4.6 | Preparar one-pager actualizado con metricas | Version 2 del one-pager con data real |
| E4.7 | Comenzar outreach con proof points | Usar data del piloto como argumento de venta |

#### AMBOS

| # | Tarea | Cuando |
|---|-------|--------|
| A4.1 | Ensayo de pitch para entrevistas Platanus | Lun Abr 14 y Lun Abr 21 |
| A4.2 | Decision Go/No-Go formal del producto | Lun Abr 28 |
| A4.3 | Sprint review: cierre de fase de validacion | Vie May 2 |

### Criterios Go/No-Go (decision del lunes 28 de abril)

| Criterio | GO | NO-GO | Nuestro resultado |
|---------|-----|-------|-------------------|
| Empresas que aceptaron piloto | >=2 | 0 | _pendiente_ |
| Participacion semanal Dia 14+ | >60% | <40% | _pendiente_ |
| Frecuencia check-in | >4/semana en >50% usuarios | <2/semana | _pendiente_ |
| NPS empleados | >30 | <0 | _pendiente_ |
| HR "pagaria por esto" | >=1 | 0 de 5 | _pendiente_ |
| Validacion clinica | Aprobada (con o sin ajustes) | Rechazada | _pendiente_ |

**Regla:** GO si cumplimos 4 de 6. NO-GO si cualquier criterio critico falla (participacion <40% O rechazo clinico).

**Nota sobre Platanus:** Para cuando se haga el Go/No-Go del producto, ya deberiamos saber si Platanus nos invito a entrevistas. Si si, el deck se actualiza con datos del piloto. Si no, seguimos con plan B (CORFO, bootstrapping, clientes pagos).

---

## 6. Rutinas operativas

### Diarias

| Rutina | Hora | Duracion | Participantes |
|--------|------|---------|--------------|
| Standup | 9:00 AM | 15 min | Edgar + Jose |
| Revision metricas del piloto (cuando activo) | 8:00 PM | 10 min | Jose |

**Formato standup:**
1. Que hice ayer
2. Que hare hoy
3. Bloqueos

### Semanales

| Rutina | Dia | Duracion | Participantes |
|--------|-----|---------|--------------|
| Sprint review / demo | Viernes | 1 hora | Edgar + Jose |
| Revision pipeline de ventas | Lunes | 30 min | Edgar (Jose opcional) |
| Sync de producto | Miercoles | 30 min | Edgar + Jose |

### Al final de cada sprint

| Rutina | Duracion | Output |
|--------|---------|--------|
| Sprint review | 1h | Demo + revision de metricas |
| Sprint retro | 30 min | 1-3 mejoras para el proximo sprint |
| Sprint planning | 1h | Tareas del proximo sprint priorizadas |

---

## 7. Herramientas operativas

| Herramienta | Uso | Costo |
|------------|-----|-------|
| **GitHub** | Repositorio de codigo + issues | Gratis |
| **Supabase** | Base de datos + auth + API | Gratis (free tier) |
| **Expo / React Native** | App movil | Gratis |
| **Cloudflare Workers** | API edge | Gratis (100K req/dia) |
| **Miro** | Wireframes, brainstorming | Gratis (3 boards) |
| **Google Sheets** | Pipeline de ventas, tracking manual | Gratis |
| **Google Forms** | Encuestas empleados | Gratis |
| **Figma** | Diseno UI (si necesario) | Gratis (starter) |
| **Claude Code** | Desarrollo, documentacion, prototipos | Incluido |
| **LinkedIn** | Outreach, content marketing | Gratis (premium opcional) |
| **WhatsApp** | Comunicacion rapida con HR de pilotos | Gratis |
| **Notion o este vault (Obsidian)** | Documentacion interna | Gratis |

---

## 8. Checklist semanal de salud operativa

Cada viernes, antes del sprint review, revisar:

- [ ] Standup se hizo todos los dias esta semana?
- [ ] Tareas del sprint estan al dia? (>80% completadas)
- [ ] Pipeline de empresas actualizado?
- [ ] Metricas del piloto revisadas? (si aplica)
- [ ] Algun bloqueo sin resolver hace >2 dias?
- [ ] Ambos fundadores durmieron >6h promedio esta semana? (riesgo #9: burnout)
- [ ] Algo cambio que requiera re-priorizar?

---

## 9. Protocolo de emergencia

### Si el MVP se retrasa >1 semana

1. Reducir scope: solo check-in diario + mascota basica (sin dashboard, sin WHO-5 semanal)
2. Dashboard se reemplaza por Google Sheets manual en la primera semana del piloto
3. Jose dedica 100% a cerrar MVP, Edgar cubre todo lo demas

### Si ninguna empresa acepta piloto

1. Ofrecer incentivo: dashboard gratuito de por vida para early adopters
2. Usar red personal directa: empresas donde trabajan amigos/conocidos
3. Concierge MVP: simular la experiencia via WhatsApp (sin app) para validar el concepto

### Si el piloto tiene <40% participacion en semana 1

1. Entrevistar a 5 empleados para entender por que no participan
2. Ajustar frecuencia de notificaciones
3. Reforzar comunicacion de privacidad ("esto NO lo ve tu jefe")
4. Si semana 2 no mejora: considerar ajuste de mecanica o target

### Si un fundador se enferma o no puede continuar >3 dias

1. El otro fundador prioriza solo tareas criticas (1-2 por dia)
2. Notificar a empresas piloto si hay impacto en timeline
3. Resumir al volver: documento de estado actualizado en el vault

---

## 10. Calendario visual (8 semanas)

```
SEMANA 1 (Mar 8-14)     SEMANA 2 (Mar 15-21)     SEMANA 3 (Mar 22-28)     ★ SABADO 29 MARZO ★
═══════════════════     ═══════════════════════   ═══════════════════════   ═══════════════════
Jose: Setup + mascota   Jose: Check-in + coach    Jose: Consent + rachas   ENVIAR PLATANUS
  + API + diagrama        + WHO-5 + dashboard       + testing + deploy     antes 23:59
Edgar: One-pager +      Edgar: Copy + propuesta     + video demo
  lista empresas +        piloto + discovery HR   Edgar: Deck final +
  outreach + estructura Edgar: Psicologo reunion    formulario Platanus
  deck Platanus                                     + integrar screenshots
REVIEW: Dom 14 -------> REVIEW DECK: Dom 22 ---> REVIEW FINAL: Vie 28 --> ★ DEADLINE ★

SEMANA 4 (Mar 29-Abr 4) SEMANA 5 (Abr 5-11)     SEMANAS 6-8 (Abr 12 - May 2)
═══════════════════════ ═══════════════════════   ═══════════════════════════════
Post-Platanus + pilotos PILOTO EN VIVO            PILOTO EN VIVO + ANALISIS
Jose: UX polish +       Jose: Monitorear +        Jose: Cohortes + NPS + analisis
  risk score + monitor    fix bugs + tracking       final + viz para entrevistas
Edgar: Onboarding +     Edgar: Participacion +    Edgar: Entrevistas HR + encuesta
  lanzar piloto +         feedback cualitativo      + compilar resultados + outreach
  pipeline empresas                                 con proof points
                        REVIEW: Vie 11 ---------> GO/NO-GO: Lun 28
                                                   REVIEW FINAL: Vie May 2
```

---

> Plan estrategico (3 anos): ver `planes/plan-estrategico.md`
> Plan tactico (12 meses): ver `planes/plan-tactico.md`
> OKR Q1: [[okr-q1]]
> Sprints detallados: [[sprint-1]] · [[sprint-2]]
> Criterios de exito: ver `07_mvp/criterios-exito.md`
> Proyecto maestro: [[hachiko-proyecto-maestro]]
> Equipo: [[perfil-edgar-recursos-estrategicos]] · [[perfil-jose-recursos-estrategicos]]
