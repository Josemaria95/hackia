---
title: "Modelo de Datos Conceptual"
date: 2026-03-06
tags: [producto, wellness, corporativo]
status: en-progreso
---

# Modelo de Datos Conceptual

## Resumen

Modelo de datos para Hachiko, disenado con Privacy by Design. La arquitectura separa estrictamente los datos individuales (encriptados, accesibles solo por el usuario) de los datos agregados (accesibles por HR, solo si N>=30).

---

## Schema Conceptual

### Tablas Core

```
organizations
├── id              UUID PK
├── name            TEXT NOT NULL
├── plan_tier       TEXT (free|starter|pro|enterprise)
├── mutual_id       UUID FK nullable (mutual asociada)
├── created_at      TIMESTAMPTZ

users
├── id              UUID PK
├── org_id          UUID FK -> organizations
├── role            TEXT (employee|hr|admin)
├── created_at      TIMESTAMPTZ
├── consent_status  TEXT (granted|revoked|pending)
├── consent_date    TIMESTAMPTZ

pets
├── id              UUID PK
├── user_id         UUID FK -> users (1:1)
├── name            TEXT
├── species         TEXT (perro|gato|conejo -- futuro: mas opciones)
├── evolution_stage TEXT (bebe|joven|adulto)
├── health_state    TEXT (feliz|neutral|cansado|triste)
├── streak_days     INT DEFAULT 0
├── xp              INT DEFAULT 0

checkins
├── id              UUID PK
├── user_id         UUID FK -> users
├── pet_id          UUID FK -> pets
├── type            TEXT (daily|weekly)
├── responses       JSONB (respuestas camufladas, encriptadas)
├── risk_score      FLOAT (0.0 - 1.0, calculado server-side)
├── created_at      TIMESTAMPTZ

coaching_sessions
├── id              UUID PK
├── user_id         UUID FK -> users
├── trigger         TEXT (routine|escalation)
├── model           TEXT (slm|llm)
├── content         TEXT (encriptado)
├── created_at      TIMESTAMPTZ

team_aggregates
├── id              UUID PK
├── org_id          UUID FK -> organizations
├── team_hash       TEXT (hash anonimo del equipo)
├── period          TEXT (daily|weekly|monthly)
├── avg_risk_score  FLOAT
├── participation_rate FLOAT
├── n_employees     INT (solo se genera si N >= 30)
├── created_at      TIMESTAMPTZ

consent_logs
├── id              UUID PK
├── user_id         UUID FK -> users
├── action          TEXT (grant|revoke)
├── scope           TEXT (checkins|passive_signals|all)
├── created_at      TIMESTAMPTZ

data_access_logs
├── id              UUID PK
├── accessor_id     UUID FK -> users
├── resource        TEXT (tabla/campo accedido)
├── action          TEXT (read|export|delete)
├── created_at      TIMESTAMPTZ
```

---

## Seguridad

### Row Level Security (RLS)

- **Aislamiento multi-tenant**: cada query filtrada por `org_id` automaticamente
- **Empleados**: solo ven sus propios datos (`user_id = auth.uid()`)
- **HR**: solo ven `team_aggregates` de su organizacion (nunca datos individuales)
- **Admin**: acceso a configuracion de organizacion, no a datos de empleados

### Encriptacion

- **At rest**: pgsodium AES-256 para columnas PII (`responses`, `content` en coaching)
- **In transit**: TLS 1.3 en todas las conexiones
- **Columnas encriptadas**: `checkins.responses`, `coaching_sessions.content`

### Reglas de integridad

- Datos individuales NUNCA se cruzan con `team_aggregates`
- `team_aggregates` solo se genera si `n_employees >= 30`
- `data_access_logs` es una tabla append-only (inmutable)
- `consent_logs` es append-only — el estado actual se deriva del ultimo registro

---

## Flujo de Datos

```
1. Usuario hace check-in
   └── INSERT checkins (responses encriptado con pgsodium)

2. SLM local procesa check-in
   ├── Si es rutina → INSERT coaching_sessions (model='slm')
   └── Si detecta trigger → paso 3

3. Escalacion a LLM cloud
   └── INSERT coaching_sessions (model='llm', trigger='escalation')
   └── Datos enviados anonimizados (sin user_id ni org_id)

4. Batch nocturno (cron job)
   ├── Calcula risk_score por usuario (actualiza checkins)
   ├── Agrega por equipo (solo si N >= 30)
   └── INSERT team_aggregates

5. Dashboard HR
   └── SELECT FROM team_aggregates WHERE org_id = X
   └── NUNCA accede a checkins ni coaching_sessions

6. Pipeline analitico (Databricks)
   └── ETL desde team_aggregates (datos ya agregados)
   └── Benchmarks entre organizaciones (solo si N >= 100 empresas)
```

---

## Indices sugeridos

```sql
CREATE INDEX idx_checkins_user_date ON checkins(user_id, created_at DESC);
CREATE INDEX idx_checkins_type ON checkins(type);
CREATE INDEX idx_team_agg_org_period ON team_aggregates(org_id, period, created_at DESC);
CREATE INDEX idx_pets_user ON pets(user_id);
CREATE INDEX idx_consent_user ON consent_logs(user_id, created_at DESC);
```

---

## Consideraciones para el MVP

- **Sprint 1**: schema basico sin encriptacion pgsodium (usar Supabase RLS nativo)
- **Sprint 2**: agregar multi-tenancy y batch de `team_aggregates`
- **Post-MVP**: implementar encriptacion pgsodium, audit trail completo, pipeline Databricks

---

> Senales que alimentan el modelo: [[senales-smartphone]]
> Privacidad y cumplimiento: [[privacidad-etica]]
> Proyecto maestro: [[hachiko-proyecto-maestro]]
