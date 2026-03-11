---
title: "Hachiko — Propuesta de Arquitectura"
aliases: [hachiko-arch, hachiko-arquitectura]
date: 2026-02-27
tags: [producto, corporativo, wellness]
status: en-progreso
miro: ""
---

# Hachiko — Propuesta de Arquitectura

> **Objetivo**: Guía técnica de referencia para el equipo.
> Basada en los tres planos del producto: Emocional (B2C) · Organizacional (B2B) · Institucional (B2B2C).

---

## 0. Principio Rector

La arquitectura debe hacer **físicamente imposible** que los datos individuales de un empleado lleguen a su empresa, y que los datos de una empresa lleguen a otra. No es un requisito funcional — es la **razón de existencia del producto**.

```
REGLA INQUEBRANTABLE DE PRIVACIDAD
────────────────────────────────────────────────────────────────
Empleado     → ve SOLO sus propios datos
Empresa/HR   → ve SOLO datos agregados de su equipo (N ≥ 30)
Mutual       → ve SOLO benchmarks entre empresas (N ≥ 100 emp.)
────────────────────────────────────────────────────────────────
Estas fronteras se implementan en la capa de datos (RLS),
NO en la capa de presentación.
```

---

## 1. Visión General del Sistema

```
┌─────────────────────────────────────────────────────────────────┐
│                        CLIENTES                                 │
│  📱 Empleado (React Native)   🖥 HR Dashboard (React+TS)        │
│                               🏦 Mutual Dashboard (white-label) │
└──────────────┬────────────────────────┬────────────────────────┘
               │                        │
               ▼                        ▼
┌─────────────────────────────────────────────────────────────────┐
│                   API EDGE (Cloudflare Workers + Hono)          │
│  Auth Middleware · Rate Limiting · Multi-tenant Routing         │
│  RBAC: employee | hr_manager | mutual_admin | super_admin       │
└──────────────┬────────────────────────┬────────────────────────┘
               │                        │
       ┌───────┘                        └────────────┐
       ▼                                             ▼
┌─────────────────┐                    ┌─────────────────────────┐
│  DOMINIO B2C    │                    │   DOMINIO B2B / B2B2C   │
│  (Empleado)     │                    │   (HR + Mutual)         │
│                 │                    │                         │
│  Pet Engine     │                    │  Risk Score Service     │
│  Check-in svc   │                    │  Aggregate Service      │
│  Coach svc      │                    │  HRIS Sync Service      │
│  Instrument svc │                    │  Benchmark Service      │
└────────┬────────┘                    └──────────┬──────────────┘
         │                                        │
         └──────────────┬─────────────────────────┘
                        ▼
┌─────────────────────────────────────────────────────────────────┐
│                   CAPA DE DATOS                                 │
│  Supabase (PostgreSQL 15)                                       │
│  ├── RLS por brand_id + employee_id                             │
│  ├── pgsodium AES-256 en PII                                    │
│  └── audit_logs inmutables                                      │
└──────────────────────┬──────────────────────────────────────────┘
                       │ (jobs nocturnos / streaming)
                       ▼
┌─────────────────────────────────────────────────────────────────┐
│                   DATA PIPELINE (Fase 2-3)                      │
│  Azure Databricks + Spark → Delta Lake → ML Models             │
└─────────────────────────────────────────────────────────────────┘
```

---

## 2. Clean Architecture — Capas

Cada dominio (B2C, B2B, B2B2C) sigue la misma estructura de capas. Se comunican **únicamente** a través de interfaces definidas, nunca directamente.

```
┌─────────────────────────────────────────────────┐
│  4. PRESENTACIÓN (Controllers / API Handlers)   │  ← Hono routes
├─────────────────────────────────────────────────┤
│  3. APLICACIÓN (Use Cases / Services)           │  ← Lógica de negocio
├─────────────────────────────────────────────────┤
│  2. DOMINIO (Entities + Domain Services)        │  ← Reglas puras
├─────────────────────────────────────────────────┤
│  1. INFRAESTRUCTURA (Repositories / Adapters)   │  ← Supabase, Claude, SLM
└─────────────────────────────────────────────────┘
```

### Regla de dependencia
Las capas internas **nunca** importan de las capas externas.
El dominio no sabe que existe Supabase. El dominio no sabe que existe Cloudflare.

---

## 3. Dominios y Entidades

### 3.1 Entidades del Dominio

```typescript
// ── Empleado / Pet ─────────────────────────────────────────────
interface Employee {
  id: string              // UUID, nunca email en requests B2B
  brand_id: string        // FK → Organization (multi-tenant)
  team_id: string
  consent_version: string // versión del Privacy Manifesto aceptada
  opted_in_at: Date
  opted_out_at?: Date
}

interface Pet {
  employee_id: string     // 1-to-1 con Employee
  name: string
  evolution_level: number // 0-5: cría → adulto → leyenda
  energy: number          // 0-100 → input a PHQ-2 proxy
  mood: number            // 0-100 → input a WHO-5 proxy
  streak_days: number     // CD2: racha de check-ins
}

// ── Check-in / Instrumentos ────────────────────────────────────
interface CheckIn {
  id: string
  employee_id: string     // ENCRIPTADO en reposo
  timestamp: Date
  interaction_type: 'daily' | 'weekly' | 'event'
  raw_responses: EncryptedPayload  // pgsodium — nunca en claro en la DB pública
  computed_scores: {
    phq2_proxy: number    // 0-6
    who5_proxy: number    // 0-100
    stress_marker: number // 0-10
  }
  game_context: {         // lo que el usuario vio
    pet_state: string
    prompt_shown: string
    response_chosen: string
  }
}

// ── Organización (multi-tenant) ────────────────────────────────
interface Organization {
  brand_id: string        // UUID interno (nunca expuesto a mutual)
  name: string
  plan: 'starter' | 'professional' | 'enterprise'
  mutual_id?: string      // si viene del canal mutual
  hris_provider?: 'bamboohr' | 'buk' | 'workday'
  min_group_size: number  // default: 30 (N≥30 regla de privacidad)
}

// ── Risk Score (solo agregado) ─────────────────────────────────
interface TeamRiskScore {
  team_id: string
  computed_at: Date
  employee_count: number  // debe ser ≥ 30
  risk_level: 'low' | 'medium' | 'high' | 'critical'
  dimensions: {
    burnout_index: number
    engagement_index: number
    resilience_index: number
  }
  // NUNCA: employee_id, nombres, datos individuales
}
```

### 3.2 Value Objects críticos

```typescript
// Garantiza que el N≥30 se valide en el dominio, no en la presentación
class AggregatedScore {
  constructor(scores: EmployeeScore[], minGroupSize = 30) {
    if (scores.length < minGroupSize) {
      throw new InsufficientGroupSizeError(scores.length, minGroupSize)
    }
    // calcular...
  }
}

// EncryptedPayload: los raw_responses NUNCA se deserializan fuera
// de la capa de infraestructura con acceso a la clave pgsodium
class EncryptedPayload {
  private readonly ciphertext: Buffer
  // Solo Infrastructure puede crear/leer esta clase
}
```

---

## 4. Casos de Uso por Actor

### 4.1 Actor: Empleado

| Use Case | Descripción | SLM Local | LLM Cloud |
|----------|-------------|-----------|-----------|
| `DailyCheckIn` | Registra interacción con la mascota | ✅ 90% | ❌ |
| `WeeklyInstrument` | WHO-5 / PHQ-2 camuflados | ✅ presenta | ✅ scoring |
| `GetPetState` | Estado actual del pet (energía, mood, nivel) | ✅ | ❌ |
| `GetCoachInsight` | Micro-coaching rutinario | ✅ | ❌ |
| `GetDeepCoaching` | Sesión profunda (2x/semana, CD6) | ❌ | ✅ |
| `ExportMyData` | Derecho ARCO — portabilidad | ❌ | ❌ (solo infra) |
| `RevokeConsent` | Opt-out completo e irreversible | ❌ | ❌ (solo infra) |

### 4.2 Actor: HR Manager

| Use Case | Descripción | Restricción |
|----------|-------------|-------------|
| `GetTeamRiskDashboard` | Dashboard agregado por equipo | N ≥ 30 |
| `GetEarlyWarningAlerts` | Alertas anonimizadas de riesgo alto | N ≥ 30 |
| `GetMonthlyReport` | PDF para CFO | Solo tendencias agregadas |
| `SyncHRIS` | Pull de ausentismo, overtime, rotación | Solo metadatos, no PII |

### 4.3 Actor: Mutual Admin

| Use Case | Descripción | Restricción |
|----------|-------------|-------------|
| `GetIndustryBenchmark` | Benchmark por sector | N ≥ 100 empresas |
| `GetRiskModel` | Modelo predictivo actuarial | Solo por cohorte |
| `GetWhiteLabelConfig` | Configurar branding propio | Solo su brand_id |
| `GetComplianceReport` | Reporte Circular N°3243 | Datos anonimizados |

---

## 5. Esquema de Base de Datos (Supabase / PostgreSQL 15)

### 5.1 Tablas principales

```sql
-- ── ORGANIZACIONES (multi-tenant root) ────────────────────────
CREATE TABLE organizations (
  brand_id      UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name          TEXT NOT NULL,
  plan          TEXT CHECK (plan IN ('starter','professional','enterprise')),
  mutual_id     UUID REFERENCES mutuals(id),
  min_group_n   INT DEFAULT 30,
  created_at    TIMESTAMPTZ DEFAULT now()
);

-- ── EMPLEADOS ──────────────────────────────────────────────────
-- PII encriptada con pgsodium (email, nombre)
CREATE TABLE employees (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  brand_id        UUID NOT NULL REFERENCES organizations(brand_id),
  team_id         UUID NOT NULL REFERENCES teams(id),
  -- PII encriptada:
  email_enc       BYTEA,           -- pgsodium.crypto_aead_det_encrypt
  name_enc        BYTEA,
  --
  consent_version TEXT NOT NULL,
  opted_in_at     TIMESTAMPTZ NOT NULL,
  opted_out_at    TIMESTAMPTZ,     -- si no es NULL → acceso revocado
  created_at      TIMESTAMPTZ DEFAULT now()
);

-- Row Level Security: empleado solo ve sus propios datos
ALTER TABLE employees ENABLE ROW LEVEL SECURITY;
CREATE POLICY employee_isolation ON employees
  USING (id = auth.uid()::UUID);

-- ── CHECK-INS ──────────────────────────────────────────────────
CREATE TABLE check_ins (
  id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  employee_id       UUID NOT NULL REFERENCES employees(id),
  brand_id          UUID NOT NULL REFERENCES organizations(brand_id),
  interaction_type  TEXT NOT NULL,
  -- Raw responses encriptadas (pgsodium):
  raw_responses_enc BYTEA NOT NULL,
  -- Scores computados (anonimizables):
  phq2_proxy        NUMERIC(4,2),
  who5_proxy        NUMERIC(5,2),
  stress_marker     NUMERIC(4,2),
  -- Contexto del juego (no PII):
  pet_state         JSONB,
  prompt_shown      TEXT,
  created_at        TIMESTAMPTZ DEFAULT now()
);

-- RLS: empleado solo lee sus propios check-ins
ALTER TABLE check_ins ENABLE ROW LEVEL SECURITY;
CREATE POLICY checkin_employee_read ON check_ins
  FOR SELECT USING (employee_id = auth.uid()::UUID);
-- HR: solo puede leer check_ins de su brand (y solo agregados, via view)
CREATE POLICY checkin_hr_read ON check_ins
  FOR SELECT USING (
    brand_id IN (
      SELECT brand_id FROM hr_managers WHERE user_id = auth.uid()
    )
    AND employee_id != auth.uid()::UUID  -- nunca ve los suyos propios como HR
  );

-- ── SCORES AGREGADOS DE EQUIPO (safe to share with HR) ─────────
CREATE TABLE team_risk_scores (
  id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  team_id        UUID NOT NULL REFERENCES teams(id),
  brand_id       UUID NOT NULL REFERENCES organizations(brand_id),
  computed_at    TIMESTAMPTZ NOT NULL,
  employee_count INT NOT NULL CHECK (employee_count >= 30),
  risk_level     TEXT CHECK (risk_level IN ('low','medium','high','critical')),
  burnout_index  NUMERIC(5,2),
  engagement_idx NUMERIC(5,2),
  resilience_idx NUMERIC(5,2)
  -- NUNCA: employee_id, datos individuales
);

-- ── AUDIT LOG (inmutable) ──────────────────────────────────────
CREATE TABLE data_access_logs (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  accessed_by UUID NOT NULL,       -- user_id del que accedió
  actor_role  TEXT NOT NULL,       -- 'employee' | 'hr' | 'mutual' | 'system'
  resource    TEXT NOT NULL,       -- qué tabla/recurso
  action      TEXT NOT NULL,       -- 'read' | 'write' | 'export'
  brand_id    UUID,
  accessed_at TIMESTAMPTZ DEFAULT now()
);
-- Nadie puede hacer DELETE en esta tabla (ni superadmin)
CREATE RULE no_delete_audit AS ON DELETE TO data_access_logs DO INSTEAD NOTHING;
```

### 5.2 Vista segura para HR (N≥30 enforced en DB)

```sql
-- La vista solo retorna datos si el equipo tiene ≥ 30 empleados activos
CREATE VIEW team_dashboard_safe AS
  SELECT
    t.id AS team_id,
    t.name AS team_name,
    o.brand_id,
    COUNT(e.id) AS employee_count,
    AVG(c.phq2_proxy) AS avg_phq2,
    AVG(c.who5_proxy) AS avg_who5,
    AVG(c.stress_marker) AS avg_stress,
    DATE_TRUNC('week', c.created_at) AS week
  FROM teams t
  JOIN organizations o ON t.brand_id = o.brand_id
  JOIN employees e ON e.team_id = t.id AND e.opted_out_at IS NULL
  JOIN check_ins c ON c.employee_id = e.id
  WHERE created_at >= now() - interval '12 weeks'
  GROUP BY t.id, t.name, o.brand_id, DATE_TRUNC('week', c.created_at)
  HAVING COUNT(e.id) >= 30;  -- N≥30 enforced en la query, no en el código
```

---

## 6. Arquitectura de IA en Capas

### 6.1 Decision Tree SLM → LLM

```
Empleado abre app
       │
       ▼
[SLM local — Phi-4 o Qwen2.5-3B]
       │
       ├─ check-in diario rutinario → responde SLM (90%)
       │     └─ actualiza estado pet localmente
       │
       ├─ detecta patrón de riesgo?
       │     ├─ NO → micro-coaching del SLM (< 200 tokens)
       │     └─ SÍ → marca evento → cola de sync
       │
       ├─ ¿es sesión semanal profunda? (WHO-5 completo)
       │     └─ SÍ → llama a LLM cloud (10%)
       │
       └─ ¿anomalía detectada? (3+ días sin check-in, scores críticos)
             └─ SÍ → trigger LLM + notificación soft al empleado
```

### 6.2 Interfaz del AI Service

```typescript
// Puerto de dominio — el dominio no sabe si es SLM o LLM
interface CoachingPort {
  getMicroCoaching(context: PetContext): Promise<CoachingResponse>
  getDeepCoaching(history: CheckInHistory): Promise<DeepCoachingSession>
  scoreInstruments(responses: GameResponses): Promise<ClinicalScores>
  detectRiskTrigger(patterns: BehaviorPattern[]): Promise<RiskTrigger | null>
}

// Adaptador SLM (infraestructura)
class LocalSLMAdapter implements CoachingPort {
  // Corre en dispositivo — sin costo de tokens, offline-first
  async getMicroCoaching(ctx: PetContext): Promise<CoachingResponse> { ... }
  async detectRiskTrigger(p: BehaviorPattern[]): Promise<RiskTrigger | null> { ... }
  // Delega al LLM cloud para deep coaching:
  async getDeepCoaching(h: CheckInHistory): Promise<DeepCoachingSession> {
    return cloudLLMAdapter.getDeepCoaching(h)
  }
}

// Adaptador LLM Cloud (Claude Haiku)
class ClaudeHaikuAdapter implements CoachingPort {
  private rateLimiter = new WeeklyRateLimiter(2)  // CD6: 2 sesiones/semana
  async getDeepCoaching(history: CheckInHistory): Promise<DeepCoachingSession> {
    await this.rateLimiter.check(history.employeeId)
    // Llamada a Claude con system prompt del coach laboral
    // Los datos enviados son anonimizados — solo scores, nunca PII
  }
}
```

### 6.3 Rate Limiting ético (CD6)

```typescript
// Cloudflare Workers KV para rate limiting edge
// El límite vive en la API, no en el cliente (no se puede manipular)
const DEEP_COACHING_LIMIT = 2  // sesiones / semana

class EdgeRateLimiter {
  async checkAndConsume(employeeId: string, action: 'deep_coaching'): Promise<boolean> {
    const key = `rl:${employeeId}:${action}:${getWeekKey()}`
    const count = await KV.get(key) ?? 0
    if (count >= DEEP_COACHING_LIMIT) return false
    await KV.put(key, count + 1, { expirationTtl: 7 * 24 * 3600 })
    return true
  }
}
```

---

## 7. API Edge — Rutas Principales (Hono + Cloudflare Workers)

```typescript
// src/api/routes.ts

const app = new Hono()

// ── Middleware global ────────────────────────────────────────
app.use('*', authMiddleware)          // Supabase JWT verify
app.use('*', tenantMiddleware)        // extrae brand_id del token
app.use('*', auditLogMiddleware)      // escribe en data_access_logs

// ── B2C: Empleado ────────────────────────────────────────────
const employee = app.basePath('/v1/employee')

employee.get('/pet',            getPetStateHandler)
employee.post('/checkin',       createCheckInHandler)
employee.get('/coaching/micro', getMicroCoachingHandler)
employee.post('/coaching/deep', getDeepCoachingHandler)  // rate-limited
employee.get('/data/export',    exportMyDataHandler)     // derecho ARCO
employee.delete('/consent',     revokeConsentHandler)

// ── B2B: HR Manager ──────────────────────────────────────────
const hr = app.basePath('/v1/hr')
hr.use('*', roleGuard('hr_manager'))

hr.get('/dashboard',            getTeamDashboardHandler)  // usa view N≥30
hr.get('/alerts',               getEarlyWarningsHandler)
hr.get('/reports/monthly',      getMonthlyReportHandler)

// ── B2B2C: Mutual Admin ──────────────────────────────────────
const mutual = app.basePath('/v1/mutual')
mutual.use('*', roleGuard('mutual_admin'))

mutual.get('/benchmarks/:industry',  getIndustryBenchmarkHandler)
mutual.get('/risk-model',            getRiskModelHandler)
mutual.get('/compliance/circular3243', getComplianceReportHandler)

// ── Webhooks HRIS ────────────────────────────────────────────
app.post('/webhooks/hris/bamboohr',  bambooHRWebhookHandler)
app.post('/webhooks/hris/buk',       bukWebhookHandler)
```

---

## 8. Monorepo — Estructura de Carpetas

```
hachiko/
├── apps/
│   ├── mobile/             # React Native (Expo) — empleado
│   │   ├── src/
│   │   │   ├── features/
│   │   │   │   ├── pet/          # UI mascota + animaciones
│   │   │   │   ├── checkin/      # Flujo de check-in
│   │   │   │   └── coaching/     # Coach UI
│   │   │   ├── slm/              # Adaptador SLM local (Phi-4)
│   │   │   └── sync/             # Cola offline-first
│   │   └── package.json
│   │
│   ├── dashboard-hr/       # React + TypeScript — HR
│   │   └── src/
│   │       ├── features/
│   │       │   ├── team-risk/    # Gráficas agregadas
│   │       │   ├── alerts/       # Alertas tempranas
│   │       │   └── reports/      # PDF export
│   │       └── components/       # Design system Hachiko
│   │
│   └── dashboard-mutual/   # React + TypeScript — white-label
│       └── src/
│           ├── features/
│           │   ├── benchmarks/
│           │   ├── risk-model/
│           │   └── whitelabel/   # theme override por brand
│           └── components/
│
├── packages/
│   ├── domain/             # Entidades + Value Objects (cero deps externas)
│   │   ├── employee/
│   │   ├── pet/
│   │   ├── checkin/
│   │   └── risk-score/
│   │
│   ├── use-cases/          # Casos de uso (depende solo de domain + ports)
│   │   ├── employee/
│   │   ├── hr/
│   │   └── mutual/
│   │
│   ├── ports/              # Interfaces (CoachingPort, StoragePort, HRISPort)
│   │
│   ├── infrastructure/     # Adaptadores concretos
│   │   ├── supabase/       # Repositorios PostgreSQL
│   │   ├── claude/         # Claude Haiku adapter
│   │   ├── slm/            # Phi-4 / Qwen adapter
│   │   └── hris/           # BambooHR, Buk adapters
│   │
│   └── ui-kit/             # Design system compartido (colores Hachiko, Fredoka/Outfit)
│
├── services/
│   └── api/                # Cloudflare Workers + Hono
│       ├── src/
│       │   ├── routes/
│       │   ├── middleware/  # auth, tenant, audit, rate-limit
│       │   └── handlers/
│       └── wrangler.toml
│
├── data/                   # Fase 2-3: pipeline ML
│   ├── pipelines/          # Databricks notebooks + Spark jobs
│   ├── models/             # scikit-learn, XGBoost
│   └── migrations/         # Supabase SQL migrations (0001-N)
│
└── supabase/
    ├── migrations/
    │   ├── 0001_organizations.sql
    │   ├── 0002_employees.sql
    │   ├── 0003_check_ins.sql
    │   ├── 0004_risk_scores.sql
    │   └── 0005_audit_logs.sql
    ├── seed/
    └── functions/          # Edge Functions para jobs pesados
```

---

## 9. Flujo de Datos Completo (Fase 1 MVP)

```
EMPLEADO (móvil)                  API EDGE              SUPABASE
──────────────────────────────────────────────────────────────────
1. Abre app
2. SLM detecta estado → genera
   prompt de check-in para el pet
3. Empleado responde (ej: "Hachiko
   está cansado hoy")
                    ──POST /checkin──►
                                      4. authMiddleware verifica JWT
                                      5. tenantMiddleware extrae brand_id
                                      6. auditLogMiddleware → log
                                      7. CheckInHandler:
                                         - ScoreInstruments(responses)
                                         - EncryptPayload(raw_responses)
                                         - INSERT check_ins
                                         - UpdatePetState
                                      ◄──200 + nuevo estado del pet──
8. Animación de mascota reacciona
   (squish, sonrisa, abrazo)
9. SLM genera micro-coaching
   (< 200 tokens, sin red)

[Si trigger de riesgo detectado]
                    ──POST /coaching/deep──►
                                      10. RateLimiter.check(2x/week)
                                      11. ClaudeHaikuAdapter:
                                          - anonimizar scores (sin PII)
                                          - llamar Claude Haiku
                                          - generar coaching personalizado
                                      ◄──coaching response──
12. Empleado recibe insight del coach
```

---

## 10. Roadmap Técnico por Fase

### Fase 1 (M0-6): MVP — Foco en confianza y retención

| Prioridad | Componente | Descripción |
|-----------|------------|-------------|
| P0 | `supabase/migrations/` | Schema completo con RLS desde día 1 |
| P0 | `services/api/` | Auth + tenant + audit middleware |
| P0 | `apps/mobile` pet + checkin | Game loop básico (3 interacciones) |
| P0 | WHO-5 / PHQ-2 camuflados | Implementar en `use-cases/employee` |
| P0 | Dashboard HR básico | View N≥30 + gráfica de tendencia |
| P1 | SLM local (Phi-4) | Micro-coaching offline-first |
| P1 | Claude Haiku | Deep coaching (2x/semana) |
| P2 | Export de datos | Derecho ARCO para el empleado |

### Fase 2 (M6-12): Canal Mutual

| Prioridad | Componente | Descripción |
|-----------|------------|-------------|
| P0 | White-label engine | Theme override por mutual_id |
| P0 | HRIS integration | BambooHR + Buk webhooks |
| P1 | Databricks pipeline | ETL: Supabase → Delta Lake |
| P1 | Risk model v1 | Regresión logística (thresholds simples) |
| P2 | Benchmark service | Agregación multi-empresa por industria |

### Fase 3 (M12-18): ML Real + México

| Prioridad | Componente | Descripción |
|-----------|------------|-------------|
| P0 | Gradient boosting model | AUC > 0.75, NOM-035 adaptado |
| P0 | Risk scoring API | Para aseguradoras (solo agregado) |
| P1 | Primer benchmark público | Pipeline de anonimización N≥100 emp. |

---

## 11. Decisiones Clave y Trade-offs

| Decisión | Elección | Alternativa descartada | Razón |
|----------|----------|------------------------|-------|
| Base de datos | Supabase (PostgreSQL + RLS) | Firebase, MongoDB | RLS nativo = privacidad enforced en DB, no en código |
| API runtime | Cloudflare Workers + Hono | Node.js tradicional | Edge = latencia mínima en LATAM, sin cold starts |
| AI architecture | SLM local + LLM cloud | Solo LLM cloud | Costo de tokens: 90% SLM = ~10x más barato a escala |
| Auth | Supabase Auth (JWT + RBAC) | Auth0, Clerk | Integrado con RLS = consistencia de seguridad |
| Monorepo | Turborepo | Multi-repo | Dominio compartido entre apps sin duplicación |
| Encriptación PII | pgsodium AES-256 | Encriptación en app layer | Si la DB se compromete, los datos siguen protegidos |
| Multi-tenancy | brand_id en RLS | Schema separado por tenant | Escala mejor, queries más simples, RLS garantiza aislamiento |

---

## 12. Señales de Alerta Arquitectural

```
🚨 RED FLAGS a evitar:
──────────────────────────────────────────────────────────────
✗ NUNCA filtrar N<30 en el frontend (siempre en la DB/API)
✗ NUNCA enviar employee_id a endpoints de HR o Mutual
✗ NUNCA guardar raw_responses sin encriptar en la DB
✗ NUNCA hacer JOIN entre check_ins y datos de empresa en un
  endpoint accesible por la mutual
✗ NUNCA usar el mismo RLS policy para empleado y HR manager
✗ NUNCA desplegar sin audit logs activos
──────────────────────────────────────────────────────────────

✅ GREEN FLAGS (señales de que la arquitectura está sana):
──────────────────────────────────────────────────────────────
✓ El dominio (packages/domain) no tiene imports de Supabase ni Claude
✓ La view team_dashboard_safe tiene HAVING COUNT >= 30
✓ data_access_logs tiene regla de no-delete
✓ Los tests del dominio no requieren levantar ningún servicio externo
✓ Revocar consentimiento de un empleado borra su employee_id de todos
  los índices accesibles (los datos se vuelven huérfanos, no se borran)
```

---

## 13. Stack Completo Consolidado

```
LAYER               TECH                    NOTES
──────────────────────────────────────────────────────────────────
Mobile              React Native (Expo)     iOS + Android desde Fase 1
Dashboards          React + TypeScript      Vite, Tailwind CSS
API Edge            Cloudflare Workers      Hono framework, KV para rate limiting
Auth                Supabase Auth           JWT, RLS policies, RBAC
Database            PostgreSQL 15           Via Supabase, pgsodium, RLS
AI Local            Phi-4 / Qwen2.5-3B     On-device, offline-first
AI Cloud            Claude Haiku            Rate limited, solo momentos clave
Data Pipeline       Azure Databricks        Spark, Delta Lake (Fase 2)
ML Models           Python                  scikit-learn, XGBoost (Fase 2)
Package Manager     Turborepo + pnpm        Monorepo
CI/CD               GitHub Actions          Cloudflare deploy automático
Observability       Cloudflare Analytics    + Supabase Dashboard
```

---

→ Documento maestro: [[hachiko-proyecto-maestro]]
→ Contexto: [[espacio-de-oportunidad]]
→ Equipo: [[perfil-edgar-recursos-estrategicos]] · [[perfil-jose-recursos-estrategicos]]
