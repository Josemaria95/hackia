# Hachiko App — Memoria Completa del Proyecto

> Documento de contexto portátil para análisis externo.
> Generado: 2026-03-10

---

## 1. Qué es Hachiko

App B2B2C de bienestar laboral gamificada para el mercado chileno.

**Cadena de valor:** Mutuales de seguridad (ACHS, IST, Mutual de Seguridad) → Empresas → Empleados.

**Concepto:** El empleado interactúa con una mascota virtual (Tamagotchi-like). Los check-ins de bienestar están camuflados como cuidado de la mascota:
- "¿Cómo amaneció Hachiko?" → mide WHO-5 (bienestar)
- "¿Cuánta energía tiene tu pet?" → mide PHQ-2 (depresión)
- Stress marker (0-10) para percepción de estrés laboral

**Modelo de negocio:** Empleado usa gratis (subsidiado por empresa vía mutual). HR ve métricas agregadas. Mutual ve benchmarks entre empresas.

**Principio rector (no negociable):** Los datos individuales de un empleado NUNCA llegan a su empresa ni a la mutual. La privacidad es el moat del producto.

---

## 2. Stack Tecnológico

| Capa | Tech | Notas |
|------|------|-------|
| Mobile | React Native (Expo Router) | Empleado — mascota + check-in + coaching |
| Dashboards | React + TypeScript (Vite) | HR, Mutual, Admin (3 apps) |
| API | Cloudflare Workers + Hono | Edge, rate limiting, RBAC |
| Auth | Supabase Auth | JWT + RLS policies |
| DB | PostgreSQL 15 (Supabase) | pgsodium, RLS, audit logs inmutables |
| AI local | SmolLM2-135M-Instruct Q8 (145MB) | On-device, offline-first, ~90% interacciones |
| AI cloud | Claude Haiku (via CF AI Gateway) | ~10% interacciones, rate-limited, token budget |
| Package manager | pnpm 10 + Turborepo | Monorepo |
| Runtime | Node >= 20.19 | TypeScript strict, React 19.2 |

---

## 3. Arquitectura — Clean Architecture + Atomic Design

### Estructura del monorepo

```
packages/domain/              ← Entidades + Value Objects (CERO deps externas)
packages/use-cases/           ← Casos de uso (depende de domain + ports)
packages/ports/               ← Interfaces (CoachingPort, StoragePort, etc.)
packages/infrastructure/      ← Adaptadores (Supabase, Claude, SLM)
packages/ui-kit/              ← Componentes compartidos (stub por ahora)
apps/mobile/                  ← React Native (Expo Router) — empleado
apps/dashboard-hr/            ← React + Vite — HR Manager
apps/dashboard-mutual/        ← React + Vite — Mutual Admin
apps/dashboard-admin/         ← React + Vite — Super Admin
services/api/                 ← Cloudflare Workers + Hono
supabase/migrations/          ← 28 migrations SQL (timestamp-based)
```

**Regla de dependencia:** `domain` no importa nada de `infrastructure`. `use-cases` no importa nada de `apps/`. Las capas internas nunca dependen de las externas.

### UI — Atomic Design (dashboards)

```
atoms/       → UI pura, sin lógica de negocio
molecules/   → Combinación de átomos, estado local de UI permitido
organisms/   → Secciones completas, reciben datos via props
templates/   → Layouts sin datos reales
pages/       → Orquestan use cases via hooks (único nivel con lógica)
hooks/       → Llaman use cases, exponen datos a pages
```

---

## 4. Entidades de Dominio

### Employee
| Campo | Tipo | Notas |
|-------|------|-------|
| id | UUID | PK |
| userId | UUID | FK auth.users (Supabase Auth) |
| brandId | UUID | Tenant (empresa) |
| teamId | UUID \| null | FK teams |
| locale | es-CL \| es-MX \| es-CO \| es-AR \| en-US | |
| optedOutAt | Date \| null | Irreversible consent revocation |
| createdAt, updatedAt | Date | |

### Pet (1:1 con Employee)
| Campo | Tipo | Notas |
|-------|------|-------|
| id | UUID | PK |
| employeeId | UUID | 1:1 |
| petName | string | Elegido por usuario |
| energy | 0-100 | Decae sin check-in |
| mood | 0-100 | Decae sin check-in |
| curiosity | 0-100 | |
| streakDays | number | Check-ins consecutivos |
| longestStreak | number | Record histórico |
| evolutionLevel | 0-5 | 0=Huevo, 5=Leyenda |
| lastCheckinAt | Date | Para calcular decay |
| accessories | JSONB | Items equipados (tienda) |
| badges | JSONB | Logros desbloqueados |

**Decay:** 48h sin check-in → energy -= 15, mood -= 10.

### CheckIn
| Campo | Tipo | Notas |
|-------|------|-------|
| id | UUID | PK |
| employeeId | UUID | FK |
| brandId, teamId | UUID | Para agregación |
| interactionType | daily \| weekly \| event | |
| phq2Proxy | 0-6 | PHQ-2 depression proxy |
| who5Proxy | 0-100 \| null | WHO-5 wellbeing proxy |
| stressMarker | 0-10 | Stress laboral |
| rawResponses | EncryptedPayload | pgsodium, nunca plaintext |
| deviceId | string | |
| submittedOffline | boolean | |
| checkedInAt | Date | |

### AggregatedScore (Value Object)
| Campo | Tipo | Notas |
|-------|------|-------|
| avgWho5 | number | Promedio WHO-5 del grupo |
| avgPhq2 | number | Promedio PHQ-2 del grupo |
| avgStress | number | Promedio stress del grupo |
| participationRate | number | % de empleados que hicieron check-in |
| highRiskCount | number | Empleados en riesgo |
| groupSize | number | **Debe ser >= 30** (throw si no) |

### CoachingSession
| Campo | Tipo | Notas |
|-------|------|-------|
| id | UUID | PK |
| employeeId | UUID | FK |
| aiProvider | string | "haiku" o "slm" |
| anonymizedContext | JSONB | Solo scores, nunca PII |
| transcriptEnc | encrypted | Conversación encriptada |
| triggerReason | string | Razón del coaching |
| status | string | |
| messageCount | number | |

### Errores de dominio
- `ConsentRevokedError`
- `DuplicateCheckInError`
- `EmployeeNotFoundError`
- `CoachingSessionLimitError`
- `PetNotFoundError`

---

## 5. Casos de Uso (12)

| Caso de Uso | Input → Output |
|-------------|----------------|
| CreateCheckIn | CreateCheckInInput → string (id) |
| GetCoaching | GetCoachingInput → { sessionId, response: CoachingResponse } |
| GetCoachingHistory | employeeId → CoachingSession[] (últimas 50) |
| GetTeamMetrics | (teamId, brandId, weeksBack) → TeamMetricsSafe[] |
| GetBenchmarks | (mutualId, monthsBack) → OrgBenchmark[] |
| GetPet | (userId, accessToken) → PetWithCoins \| null |
| InteractWithPet | (employeeId, type, accessToken) → InteractionResult |
| GetShopItems | (employeeId, accessToken) → ShopItem[] |
| PurchaseItem | (employeeId, itemId, accessToken) → PurchaseResult |
| EquipItem | (employeeId, itemId, equipped, accessToken) → void |
| GetBadges | (employeeId, accessToken) → BadgeRecord[] |
| RevokeConsent | userId → void (irreversible) |

---

## 6. Ports (Interfaces)

| Port | Métodos principales |
|------|---------------------|
| CheckInStoragePort | `create(input)` |
| PetStoragePort | `getPetWithCoins(employeeId, accessToken)` |
| CoachingPort | `getCoachingMessage(context)`, `createSession(params)`, `getHistory(id)`, `classifyEmotion(msg)`, `summarizeSession(msgs)` |
| TeamMetricsPort | `getTeamMetrics(teamId, brandId, weeks)`, `getBenchmarks(mutualId, months)` |
| ShopStoragePort | `getShopItems()`, `purchaseItem()`, `equipItem()` |
| BadgeStoragePort | `getBadges(employeeId, accessToken)` |
| InteractionPort | `performInteraction(employeeId, type, accessToken)` |
| ConsentRevocationPort | `revoke(userId)` |
| HRISPort | (integración con HRIS externos — futuro) |

---

## 7. API — Endpoints

### Employee (`/v1/employee/`)
| Método | Path | Handler |
|--------|------|---------|
| POST | /checkin | createCheckInHandler |
| GET | /pet | getPetHandler |
| POST | /pet/interact | petInteractHandler |
| DELETE | /consent | revokeConsentHandler |
| POST | /coaching | createCoachingHandler |
| POST | /coaching/classify | classifyEmotionHandler |
| POST | /coaching/summarize | summarizeSessionHandler |
| GET | /coaching/history | getCoachingHistoryHandler |
| GET | /shop | getShopHandler |
| POST | /shop/purchase | purchaseItemHandler |
| PUT | /shop/equip | equipItemHandler |
| GET | /badges | getBadgesHandler |

### HR Manager (`/v1/hr/`)
| Método | Path | Handler |
|--------|------|---------|
| GET | /team/:teamId/metrics | getTeamMetricsHandler (param: weeksBack) |

### Mutual Admin (`/v1/mutual/`)
| Método | Path | Handler |
|--------|------|---------|
| GET | /benchmarks | getBenchmarksHandler (param: monthsBack) |

### Admin (`/v1/admin/`)
| Método | Path | Handler |
|--------|------|---------|
| GET/POST/PUT | /users, /users/:id | CRUD usuarios |
| GET/POST/PUT | /organizations, /organizations/:id | CRUD organizaciones |
| GET | /audit-logs | Logs de acceso |
| GET | /stats | Estadísticas generales |

### Middleware Chain
1. **authMiddleware** — JWT verification (jose + Supabase JWKS)
2. **tenantMiddleware** — Extrae userId, userRole, brandId, mutualId del JWT
3. **roleGuard(role)** — RBAC (employee, hr_manager, mutual_admin, super_admin)
4. **rateLimitMiddleware** — Cloudflare KV, sliding window
5. **auditLogMiddleware** — Log inmutable post-respuesta
6. **tokenBudgetMiddleware** — Budget mensual LLM ($0.15/usuario)
7. **errorMiddleware** — Mapea errores de dominio a HTTP status

---

## 8. Rate Limits

| Acción | Límite |
|--------|--------|
| Check-ins | 3/día |
| Coaching | 10/día + 2/semana (DB trigger) |
| Pet interact | 20/día |
| Shop purchase | 20/día |
| Token budget | $0.15/mes por empleado (429 si excede) |

---

## 9. Base de Datos (Supabase/PostgreSQL 15)

### Tablas principales

| Tabla | Descripción |
|-------|-------------|
| organizations | Empresas. brand_id (PK), name, plan, mutual_id, active |
| teams | Equipos. id, brand_id, name, parent_team_id, active |
| employees | id, user_id (FK auth.users), brand_id, team_id, email_enc (pgsodium), name_enc, opted_out_at |
| pets | 1:1 con employee. energy, mood, curiosity, streak, evolution_level, accessories, badges |
| check_ins | phq2_proxy, who5_proxy, stress_marker, raw_responses_enc, device_id, submitted_offline |
| coaching_sessions | ai_provider, anonymized_context (JSONB), transcript_enc, status, message_count |
| data_access_logs | INMUTABLE. accessor_id, role, brand_id, resource_type, action, created_at |
| pet_interactions | interaction_type (feed\|play\|cuddle\|treat), stats_delta (JSONB), coins_spent |
| badges / employee_badges | Sistema de logros |
| emotional_patterns | Patrones emocionales detectados por SLM |
| token_usage | Tracking mensual de costos LLM por empleado |
| offline_queue | Cola de sincronización |
| hr_managers | FK a organizations |

### Views seguras (enforzan N>=30)
- `team_metrics_safe` — HAVING COUNT(*) >= 30. HR solo ve esto.
- `organization_benchmarks_safe` — Para mutual admins.

### Encriptación
- PII (email, name): `pgsodium.crypto_aead_det_encrypt`
- raw_responses de check-ins: siempre `EncryptedPayload`
- Transcripts de coaching: encriptados
- Keys en Supabase Vault, referenciadas por key_id

### RLS Policies
- Empleado: solo sus propios datos (`employee_id = auth.uid()`)
- HR: solo vía views agregadas (nunca datos crudos)
- Mutual: nunca acceso directo a tablas de empleados
- `data_access_logs`: append-only (RULES impiden DELETE/UPDATE)

---

## 10. IA — Arquitectura Dual

### SLM On-Device (90% interacciones)
- **Modelo:** SmolLM2-135M-Instruct Q8 (145MB)
- **Runtime:** llama.rn (requiere native build)
- **EmotionProcessor:** Clasifica 7 emociones (Sadness, Fear, Anger, Joy, Disgust, Surprise, Neutral) con intensity y confidence (0-0.99)
- **GBNF Grammar:** Fuerza output JSON estructurado
- **PromptAssembler:** Combina personalidad + patrones emocionales + resumen última sesión + scores actuales + historial conversación (max 6 mensajes)
- **Datos:** TODO se procesa on-device. Nunca sale PII del dispositivo.

### Cloud Fallback (10% interacciones)
- **Modelo:** Claude Haiku vía Cloudflare AI Gateway
- **Adapter:** Soporta `reasoning_content` de modelos de razonamiento
- **Datos enviados:** SOLO scores anonimizados (phq2, who5, stress, streak). NUNCA PII.
- **Budget:** $0.15/mes/empleado. 429 si se excede.
- **Fallback:** Si API falla → respuesta genérica hardcodeada.

---

## 11. Mobile — Offline-First

### Sync Manager
- `syncPendingCheckIns()` — Encripta, POST a API, retry hasta 5 veces
- `syncPendingInteractions()` — POST pet interactions
- `syncChatSessions()` — Upload sesiones completadas con mensajes
- **Estrategia de conflictos:** Server-wins. Duplicados (409) se marcan como synced sin actualizar local.

### Local DB (SQLite)
- `pending_checkins` — status (pending|failed|exhausted), retry_count
- `cached_pet` — employee_id → JSON, is_stale flag
- `pending_interactions` — interaction_type, retry_count
- `chat_sessions`, `chat_messages`, `emotional_memory` — Conversaciones locales

### Offline Crypto
- SHA-256 CTR stream cipher (Hermes no soporta SubtleCrypto AES-GCM)
- Key en expo-secure-store (Keychain/Keystore)

### Optimistic Updates (Pet)
```
feed:   energy +8,  mood +2, curiosity +0
play:   energy -3,  mood +5, curiosity +8
cuddle: energy +2,  mood +8, curiosity +1
treat:  energy +5,  mood +5, curiosity +3  (cuesta 15 coins)
```

### Estructura Mobile
```
app/(auth)/    → login, signup, reset-password
app/(tabs)/    → home/pet, checkin, coaching, profile
app/           → onboarding, debug, shop
src/atoms/     → SliderInput, PetSprite
src/molecules/ → PetStatusCard, PetActions, CheckInQuestion, CoachingInput,
                 OfflineBanner, ModelStatusBadge, EvolutionProgress,
                 ShopGrid, BadgeGrid, StreakCalendar, DecayBanner
src/slm/       → EmotionProcessor, prompt-assembler, cloud fallback
src/sync/      → sync-manager, local-db, chat-db, offline-crypto, optimistic-pet
```

---

## 12. Dashboards

### Dashboard HR
- **LoginPage** — Supabase Auth
- **TeamDashboardPage** — KPI grid (avg PHQ-2, WHO-5, participation, risk), trend charts (12 semanas), risk panel, privacy banner si N<30, selector de semanas (1-52)

### Dashboard Mutual
- **LoginPage**
- **CompanyBenchmarksPage** — Tabla de empresas con sort (avg PHQ-2, WHO-5, stress, # empleados), selector de meses
- **MutualReportsPage** — Reportes agregados
- **RiskTrendsPage** — Tendencias de riesgo
- **SectorOverviewPage** — Overview por sector

### Dashboard Admin
- CRUD de usuarios y organizaciones
- Audit logs
- Estadísticas generales

---

## 13. Roles y Permisos

| Rol | Puede ver | NUNCA puede ver |
|-----|-----------|-----------------|
| employee | Sus propios datos, su pet, su coaching | Datos de otros empleados |
| hr_manager | Scores agregados de su equipo (N>=30) | Datos individuales de empleados |
| mutual_admin | Benchmarks entre empresas (N>=100 emp.) | Datos de empresas individuales, datos de empleados |
| super_admin | Todo (vía dashboard admin) | — |

---

## 14. Compliance y Privacidad

- **Ley 21.719** (Chile, dic 2026) — Protección de datos personales
- **Circular N°3243** — Normativa de seguridad
- **ISTAS-21** — Instrumento de riesgo psicosocial
- **NOM-035** (México, Fase 3) — Futuro
- **N>=30:** Enforceado en SQL views (HAVING COUNT >= 30) Y en Value Object AggregatedScore
- **PII encriptada:** pgsodium en reposo, nunca plaintext
- **Audit log inmutable:** Toda lectura de datos de empleados queda registrada
- **Opt-out irreversible:** DELETE /v1/employee/consent desvincula datos del índice
- **LLM:** Solo scores anonimizados, nunca PII al cloud

---

## 15. Convenciones de Código

- TypeScript strict mode, sin `any`, sin `!` non-null assertions
- Nombres en inglés para código; comentarios y docs en español
- Archivos: kebab-case carpetas, PascalCase componentes React, camelCase funciones
- Commits: Conventional Commits (feat:, fix:, chore:, refactor:, test:)
- Branches: feature/, fix/, chore/ → PRs a main
- Migrations: siempre timestamp YYYYMMDD_HHMMSS (nunca secuencial)
- Env vars faltantes: console.warn (nunca throw en release)

---

## 16. Comandos

```bash
pnpm dev                # Todos los workspaces
pnpm dev:mobile         # Solo mobile (Expo)
pnpm dev:api            # Solo API (Wrangler)
pnpm dev:hr             # Solo dashboard HR
pnpm lint               # ESLint monorepo
pnpm typecheck          # tsc --noEmit
pnpm test               # Vitest + Playwright
pnpm test:domain        # Tests de dominio (sin servicios)
pnpm db:migrate         # Aplica migrations
pnpm db:reset           # Reset DB local
pnpm db:types           # Regenera tipos TS desde schema
pnpm deploy:api         # wrangler deploy
pnpm deploy:hr          # Cloudflare Pages (HR)
pnpm deploy:mutual      # Cloudflare Pages (Mutual)
pnpm deploy:all         # Deploy todo
```

---

## 17. Dependencias Clave

- **pnpm 10.30.3** + Turborepo 2.8
- **React 19.2** (override global)
- **TypeScript 5.9**
- **Vitest 4.0** (testing)
- **ESLint 10** + typescript-eslint 8.56
- **Prettier 3.8**
- **@azesmway/react-native-unity 1.0.11** (patched — mascota 3D via Unity)
- **@shopify/react-native-skia** (animaciones)
- **jose** (JWT verification en Workers)
- **hono** (framework API)

---

## 18. Estado Actual y Trabajo Reciente

Los últimos commits muestran:
1. **AI Gateway** — Soporte para modelos de razonamiento (content + reasoning_content)
2. **Unity Bridge** — Emociones SLM → mascota 3D, interacciones, background transparente
3. **Observabilidad** — Logs de invocación en Worker
4. **Diagnóstico** — Logs en CoachingAdapter y cloud-fallback
5. **OTA Updates** — Fix para SDK 55 (requiere --branch main)

El proyecto tiene estructura completa: dominio modelado, 12 casos de uso, API con RBAC, mobile con SLM + sync offline, 3 dashboards con Atomic Design, y 28 migrations. El ui-kit compartido está aún como stub.
