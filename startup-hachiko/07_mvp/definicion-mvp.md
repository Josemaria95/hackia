---
title: "Definicion del MVP"
date: 2026-03-06
tags: [producto, wellness, corporativo]
status: en-progreso
---

# Definicion del MVP

---

## Hipotesis Central a Validar

> "Los empleados usaran voluntariamente una app con mascota virtual para check-ins de bienestar, generando datos validos de salud mental, con >60% de participacion sostenida a 30 dias."

Esta hipotesis tiene 4 componentes que el MVP debe validar:

1. **Voluntariamente**: sin obligacion de HR, el empleado elige usar la app
2. **Mascota virtual**: la gamificacion con pet genera engagement superior a una encuesta tradicional
3. **Datos validos**: los instrumentos camuflados (PHQ-2, WHO-5) producen datos clinicamente utiles
4. **>60% sostenida**: la participacion no colapsa despues de la primera semana

---

## Scope del MVP: Que esta DENTRO

| Componente | Descripcion | Criterio de "listo" |
|-----------|-------------|---------------------|
| **Mascota virtual basica** | 4 estados emocionales (contenta, cansada, estresada, enferma). 1 apariencia base elegible. Animaciones simples de reaccion. | El pet responde visualmente al check-in del usuario |
| **Check-in diario** | 2-3 preguntas camufladas como cuidado del pet (PHQ-2 proxy). Duracion <2 min. | Genera datapoint diario almacenado en Supabase |
| **Check-in semanal (WHO-5)** | 5 preguntas presentadas como "review semanal del pet". | Score WHO-5 calculado y almacenado |
| **Coaching basico** | Respuestas predefinidas con variabilidad (templates + reglas). No requiere SLM ni LLM para el MVP — puede ser rule-based. | El usuario recibe un micro-tip relevante despues de cada check-in |
| **Dashboard HR basico** | Vista web: tasa de participacion, risk score promedio (N>=30), grafico de tendencia semanal. | HR puede ver metricas agregadas de su empresa |
| **Auth + multi-tenancy** | Login con email corporativo. RLS por brand_id. | Empleados de empresa A no ven datos de empresa B |
| **Consentimiento** | Pantalla de consentimiento en onboarding. Opt-out disponible en settings. | Registro de consentimiento con timestamp en base de datos |
| **Notificaciones** | Push notification diaria configurable (hora, activar/desactivar). | El usuario recibe recordatorio si no ha hecho check-in |

---

## Scope del MVP: Que esta FUERA

| Componente | Por que esta fuera | Cuando entra |
|-----------|-------------------|--------------|
| Evolucion visual del pet | Requiere diseno de 3 etapas de arte. No es critico para validar la hipotesis. | Post-MVP (mes 3-6, feature S1) |
| SLM local on-device | Complejidad tecnica alta para MVP. Rule-based es suficiente para validar. | Post-MVP (cuando se confirme engagement) |
| LLM cloud (Claude Haiku) | Costo y complejidad innecesarios en MVP. Templates + reglas validan el concepto. | Post-MVP (feature S2) |
| Integracion calendario | Requiere OAuth con Google/Microsoft. Agrega friccion al onboarding. | Post-MVP (feature S3) |
| Alertas tempranas para HR | Requiere definir thresholds y logica de alerta. El dashboard basico es suficiente. | Post-MVP (feature S4) |
| Rachas y niveles | Agradable pero no critico para validar la hipotesis central. | Post-MVP (feature S6) |
| Integracion HRIS | Complejidad de integracion, no es necesario para PMF. | Mes 6-12 (feature C1) |
| White-label | No se necesita hasta que haya contrato con mutual. | Mes 6-12 (feature C3) |
| Modelos predictivos (ML) | No hay datos suficientes. Thresholds simples bastan. | Mes 6-12 (feature C5) |
| Export de datos (ARCO) | Se puede hacer manualmente si alguien lo solicita en la fase piloto. | Post-MVP (feature S5) |

---

## Metricas de Exito del MVP

| Metrica | Target | Como se mide | Por que importa |
|---------|--------|-------------|-----------------|
| **Tasa de participacion a 30 dias** | >60% de empleados invitados hacen al menos 1 check-in/semana | Check-ins unicos / empleados registrados, semana 4 | Si no participan voluntariamente, la hipotesis falla |
| **Frecuencia de check-in** | >50% de participantes hacen 4+ check-ins/semana | Promedio de check-ins por usuario activo por semana | 4/semana indica habito formado (no solo curiosidad inicial) |
| **NPS empleados** | >30 | Encuesta NPS al dia 30 del piloto | Mide satisfaccion general y probabilidad de recomendar |
| **Percepcion de valor por HR** | Al menos 1 HR dice "pagaria por esto" | Entrevista cualitativa al dia 30 | Sin voluntad de pago no hay negocio |
| **Retencion semana 1 a semana 4** | >50% de los que hacen check-in en semana 1 siguen en semana 4 | Cohorte analysis | Mide si el engagement es sostenible o solo novelty |
| **Tiempo por check-in** | <2 minutos promedio | Analytics de sesion | Si toma mucho tiempo, la friccion matara la participacion |

---

## Timeline del MVP

```
SEMANA 1-2: Fundacion
─────────────────────
- Setup Supabase: schema, RLS, auth
- Setup Cloudflare Workers: API basica (checkin, pet status)
- Setup React Native: scaffold, navegacion, screens basicas
- Diseno de mascota: 4 estados basicos (puede ser placeholder art)
- Templates de coaching: 20-30 respuestas categorizadas

SEMANA 3-4: Core Features
──────────────────────────
- Check-in diario: UI + logica + almacenamiento
- Check-in semanal (WHO-5): UI + scoring
- Coaching rule-based: selector de template segun check-in
- Pet reactions: animaciones basicas (CSS/Lottie)
- Notificaciones push (basicas)

SEMANA 5: Dashboard + Auth
──────────────────────────
- Dashboard HR: React + TS, metricas agregadas
- Multi-tenancy: RLS por brand_id, testing de aislamiento
- Consentimiento: pantalla + registro en DB

SEMANA 6: Testing + Deploy
──────────────────────────
- Testing interno (Edgar + Jose + 5-10 personas cercanas)
- Fix de bugs criticos
- Deploy: Supabase hosted, Workers deployed, app en TestFlight/APK
- Preparar onboarding para primera empresa piloto
```

**Total estimado**: 4-6 semanas para prototipo funcional.

---

## Stack Tecnico Simplificado para MVP

| Componente | Tecnologia | Nota |
|-----------|-----------|------|
| App movil | React Native (Expo) | Expo simplifica el setup inicial. Se puede ejectar despues si es necesario. |
| Backend | Supabase (PostgreSQL + Auth + RLS) | Plan gratuito alcanza para MVP. Incluye auth, database y storage. |
| API | Cloudflare Workers + Hono | Plan gratuito: 100K requests/dia. Suficiente para 500 usuarios. |
| Dashboard | React + TypeScript + Vite | Deploy en Cloudflare Pages (gratis). |
| Coaching | Templates + reglas (JSON) | Sin IA para MVP. 20-30 templates categorizados por tipo de check-in. |
| Notificaciones | Expo Notifications | Push notifications basicas, sin servidor propio. |

**Costo estimado del MVP**: ~$0-25/mes (todo en tiers gratuitos o near-free).

---

## Lo que NO estamos construyendo para el MVP

Para evitar scope creep, esta lista es explicita:

1. **NO modelos de ML** — usamos thresholds simples (si WHO-5 < X, risk = alto)
2. **NO integracion HRIS** — datos solo de la app
3. **NO white-label** — una sola marca (Hachiko)
4. **NO coaching con IA** — templates rule-based
5. **NO evolucion del pet** — apariencia estatica
6. **NO export de datos** — se hace manual si alguien lo pide
7. **NO benchmarks de equipo** — solo metricas de empresa completa
8. **NO integracion calendario** — el contexto viene solo del check-in

El MVP es deliberadamente minimo. Su unico proposito es validar la hipotesis central.

---

> Documento maestro: [[hachiko-proyecto-maestro]]
> Features completas (MoSCoW): ver `06_product/features-priorizadas.md`
> Criterios de exito detallados: ver `07_mvp/criterios-exito.md`
> Experimentos de validacion: ver `07_mvp/experimentos-validacion.md`
> Equipo: [[perfil-edgar-recursos-estrategicos]] · [[perfil-jose-recursos-estrategicos]]
