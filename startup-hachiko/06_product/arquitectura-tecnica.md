---
title: "Arquitectura Tecnica"
date: 2026-03-06
tags: [producto, wellness, corporativo]
status: en-progreso
---

# Arquitectura Tecnica

> Resumen ejecutivo de la arquitectura de Hachiko. Para detalles completos, ver [[hachiko-proyecto-maestro]] seccion 6.

---

## Diagrama de Arquitectura (Vista General)

```
DISPOSITIVO (Empleado)                EDGE                    BACKEND                  ANALYTICS
========================    =====================    =======================    ====================

 React Native App           Cloudflare Workers       Supabase                   Azure Databricks
 ┌──────────────────┐       + Hono                   ┌───────────────────┐       ┌────────────────┐
 │                  │       ┌─────────────────┐      │                   │       │                │
 │  Game Loop       │       │                 │      │  PostgreSQL 15    │       │  Spark ETL     │
 │  (mascota UI)    │──────>│  API Gateway    │─────>│  + RLS            │──────>│  Delta Lake    │
 │                  │       │  Rate Limiting  │      │  + pgsodium       │       │  ML Models     │
 │  SLM Local       │       │  Auth Verify    │      │                   │       │  (Fase 2-3)    │
 │  (Phi-4 /        │       │                 │      │  Auth (RBAC)      │       │                │
 │   Qwen2.5-3B)    │       └─────────────────┘      │  Realtime         │       └────────────────┘
 │                  │               │                │  Storage          │               │
 │  Offline-first   │               │                │                   │               │
 │  Cache           │               ▼                │  Audit Logs       │               ▼
 └──────────────────┘       ┌─────────────────┐      └───────────────────┘       ┌────────────────┐
                            │  Claude Haiku   │                                  │  Dashboard     │
                            │  (LLM Cloud)    │                                  │  React + TS    │
                            │  ~10% de        │                                  │  (HR / Mutual) │
                            │  interacciones  │                                  └────────────────┘
                            └─────────────────┘
```

---

## Flujo de Datos: De Check-in a Dashboard

Un check-in del empleado recorre el siguiente camino:

```
1. EMPLEADO hace check-in en la app
   │
   ▼
2. SLM LOCAL procesa la respuesta
   ├── Genera respuesta del coaching (micro-tip)
   ├── Actualiza estado del pet (animacion)
   ├── Calcula risk score local (compute_local_risk)
   └── Evalua: necesita escalar al LLM cloud?
       │
       ├── NO (90% de los casos): log_interaction(event) → cache local
       │   Sync asincrono cuando hay conexion → API
       │
       └── SI (10%): trigger detectado (crisis, anomalia, sesion semanal)
           │
           ▼
3. API EDGE (Cloudflare Workers + Hono)
   ├── Verifica autenticacion (JWT Supabase)
   ├── Rate limiting por usuario
   ├── Rutea: datos estructurados → Supabase
   │         consulta LLM → Claude Haiku
   │
   ▼
4. SUPABASE (Backend)
   ├── Inserta check-in en tabla con RLS (aislamiento por brand_id)
   ├── Encripta PII con pgsodium (AES-256)
   ├── Registra en audit log (data_access_logs)
   └── Actualiza metricas agregadas en tiempo real
       │
       ▼
5. DATABRICKS (Analytics — batch, no real-time)
   ├── ETL: extrae datos de Supabase via CDC o API
   ├── Agrega por empresa, equipo, industria (nunca individual)
   ├── Calcula risk scores agregados (N>=30)
   ├── Genera benchmarks y tendencias
   └── Alimenta modelos predictivos (Fase 2-3)
       │
       ▼
6. DASHBOARD HR / MUTUAL (React + TypeScript)
   ├── Muestra metricas agregadas: participacion, risk score, tendencia
   ├── Alertas tempranas anonimizadas (si N>=30 y tendencia negativa 3+ semanas)
   └── Export de reportes (PDF, CSV)
```

**Regla critica**: En ningun punto del flujo un dato individual del empleado llega al dashboard. Solo agregados con N>=30.

---

## Capas de Seguridad

| Capa | Tecnologia | Que protege |
|------|-----------|-------------|
| **Encriptacion en reposo** | pgsodium (AES-256) en Supabase | PII y datos de check-in almacenados |
| **Encriptacion en transito** | TLS 1.3 | Toda comunicacion entre dispositivo, API y backend |
| **Aislamiento multi-tenant** | Supabase RLS (Row-Level Security) | Cada empresa solo ve sus propios datos agregados. Aislamiento por brand_id a nivel de fila. |
| **Autenticacion** | Supabase Auth + JWT | SSO con email corporativo, RBAC (empleado, HR admin, mutual admin) |
| **Audit logs** | Tabla data_access_logs (append-only) | Registro inmutable de quien accedio a que datos y cuando |
| **Rate limiting** | Cloudflare Workers | Proteccion contra abuso de API y ataques de fuerza bruta |
| **SLM local** | Procesamiento on-device | Datos sensibles procesados localmente sin enviar al cloud en el 90% de interacciones |
| **Consentimiento** | Tabla de consentimiento con timestamps | Registro granular de que consintio el usuario, revocable en cualquier momento |

---

## Decision Tree: SLM Local vs. LLM Cloud

```
INTERACCION DEL USUARIO
        │
        ▼
   Es check-in rutinario?
        │
   SI ──┤──── SLM LOCAL (Phi-4 / Qwen2.5-3B)
        │     - Genera respuesta del coaching con templates + variabilidad
        │     - Actualiza pet
        │     - Log local
        │     - Costo: $0 (on-device)
        │
   NO ──┤
        │
        ▼
   Que tipo de trigger?
        │
        ├── Sesion semanal de coaching ──── LLM CLOUD (Claude Haiku)
        │   - 2 sesiones/semana maximo
        │   - Insight personalizado con contexto de semanas anteriores
        │
        ├── Anomalia detectada ──── LLM CLOUD
        │   - Score de riesgo elevado (3+ dias consecutivos)
        │   - Patron inusual vs. baseline del usuario
        │
        ├── Crisis signal ──── LLM CLOUD + ALERTA
        │   - Respuestas que mapean a PHQ-2 >= 5
        │   - Genera recurso de ayuda inmediato
        │   - NO notifica a HR (privacidad del empleado)
        │   - Sugiere linea de ayuda profesional
        │
        └── WHO-5 semanal ──── SLM LOCAL (scoring) + LLM CLOUD (insight)
            - El scoring del WHO-5 es deterministico (SLM)
            - La interpretacion narrativa usa LLM cloud
```

**Proporcion esperada**: ~90% SLM local / ~10% LLM cloud. Esto mantiene el costo de tokens en un rango viable para el modelo de negocio.

---

## Diseno de API (Endpoints Clave)

| Endpoint | Metodo | Descripcion | Auth |
|----------|--------|-------------|------|
| `/api/v1/checkin` | POST | Registrar check-in diario (PHQ-2 proxy) | JWT empleado |
| `/api/v1/checkin/weekly` | POST | Registrar check-in semanal (WHO-5) | JWT empleado |
| `/api/v1/coaching/session` | POST | Solicitar sesion de coaching LLM cloud | JWT empleado |
| `/api/v1/coaching/tip` | GET | Obtener micro-tip del SLM (puede ser offline-first) | JWT empleado |
| `/api/v1/pet/status` | GET | Estado actual del pet (apariencia, nivel, racha) | JWT empleado |
| `/api/v1/pet/evolve` | POST | Trigger de evolucion del pet (server-side validation) | JWT empleado |
| `/api/v1/dashboard/overview` | GET | Metricas agregadas para HR (participacion, risk score, tendencia) | JWT HR admin |
| `/api/v1/dashboard/alerts` | GET | Alertas tempranas anonimizadas | JWT HR admin |
| `/api/v1/dashboard/export` | GET | Export de reporte (PDF/CSV) | JWT HR admin |
| `/api/v1/consent` | GET/PUT | Leer y actualizar consentimiento granular | JWT empleado |
| `/api/v1/data/export` | GET | Export de datos personales (derechos ARCO) | JWT empleado |
| `/api/v1/data/delete` | DELETE | Solicitar eliminacion de datos personales | JWT empleado |

Todos los endpoints pasan por Cloudflare Workers (rate limiting, auth verification) antes de llegar a Supabase.

---

## Infraestructura

| Componente | Servicio | Justificacion |
|-----------|---------|---------------|
| **Base de datos** | Supabase (PostgreSQL 15 managed) | RLS nativo, pgsodium, Auth integrado, Realtime, plan gratuito para MVP |
| **API Edge** | Cloudflare Workers + Hono | Latencia baja (edge global), rate limiting nativo, costo por request (economico en MVP) |
| **LLM Cloud** | Claude Haiku (Anthropic) | Costo/token bajo, calidad suficiente para coaching, API confiable |
| **SLM Local** | Phi-4 o Qwen2.5-3B (on-device) | Procesamiento local, sin costo de tokens, privacidad por defecto |
| **Analytics** | Azure Databricks + Apache Spark | Jose tiene expertise directo. Pipeline ETL robusto, Delta Lake para historicos. |
| **Frontend movil** | React Native | Cross-platform (iOS + Android) con un solo codebase |
| **Dashboard web** | React + TypeScript | Stack estandar, facil de contratar, comparte logica con el API |
| **Storage** | Supabase Storage | Avatares del pet, assets, exports de datos |

---

## Consideraciones de Escalabilidad

| Escala | Usuarios estimados | Consideracion |
|--------|-------------------|---------------|
| **MVP** (5 empresas) | 200-500 | Supabase free/pro es suficiente. Workers gratuito alcanza. |
| **Fase 1** (20 empresas) | 2,000-5,000 | Supabase Pro. Evaluar read replicas. Databricks con cluster on-demand. |
| **Fase 2** (mutual + directo) | 10,000-50,000 | Supabase Team. Connection pooling (PgBouncer). CDN para assets del pet. Workers paid plan. |
| **Fase 3** (multi-mutual) | 100,000+ | Evaluar migration a infra propia (Kubernetes) o Supabase Enterprise. Databricks dedicado. |

El diseno multi-tenant con RLS escala bien hasta ~50,000 usuarios sin cambios arquitecturales mayores. Mas alla de eso, se evalua sharding por mutual.

---

> Arquitectura detallada: [[hachiko-proyecto-maestro]] seccion 6
> Stack del equipo: [[perfil-jose-recursos-estrategicos]] (data/infra) · [[perfil-edgar-recursos-estrategicos]] (producto/app)
> Contexto: [[espacio-de-oportunidad]]
