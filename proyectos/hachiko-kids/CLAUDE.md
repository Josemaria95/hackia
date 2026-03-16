# Hachiko Kids — Contexto para Claude Code

## Qué es
App móvil que ayuda a padres a entender patrones conductuales de sus hijos (4-12 años) a través de una mascota virtual. El niño cuida a su mascota respondiendo escenarios conductuales; el padre recibe resúmenes semanales con patrones y tips accionables.

**Pivot** del concepto original Hachiko Corporativo (bienestar adulto) hacia salud mental infantil.

**Estado actual**: Fase de planificación terminada. Documentación, landing page y assets de mascotas listos. MVP móvil aún no construido (0% código de app).

## Equipo
- **Edgar** — Experiencia directa en PIE (Programa de Integración Escolar del Mineduc). Coordinó médicos y colegios en CEAPSI. Conoce el flujo clínico-institucional desde adentro. Rol: assets, reclutamiento de familias/clínicos, canal B2B institucional.
- **Jose Muñoz** — Data Engineer (Databricks, Azure, Spark). Rol: desarrollo técnico del MVP con asistencia de IA.

## Propuesta de valor (lenguaje conductual, NO clínico)
> "Entiende por qué tu hijo se comporta así — a través de cómo cuida a su mascota."

**Regla de oro**: Fase 1 = "patrones conductuales" + "tips de crianza". NUNCA decir "detecta trastornos", "screening de salud mental" ni usar lenguaje clínico hacia padres. Lo clínico vive solo en el backend.

## Líneas rojas (no negociables)
1. NUNCA vender datos de niños
2. NUNCA usar muerte/abandono de mascota como castigo
3. NUNCA mostrar contenido que genere culpa/ansiedad
4. NUNCA compartir datos individuales con colegios sin consentimiento explícito
5. Si se detecta riesgo severo (autolesión, abuso) → protocolo de crisis inmediato

## Stack técnico

| Capa | Tecnología | Costo |
|------|-----------|-------|
| Mobile | React Native (Expo Go) | $0 |
| Backend | Supabase (free tier) | $0 |
| DB | PostgreSQL (Supabase) | $0 |
| API | Supabase Edge Functions | $0 |
| Auth | Supabase Auth (email/password) | $0 |
| Push | Expo Notifications | $0 |
| Assets | IA (Midjourney/Flux + Claude) | $0-50 |
| Landing | HTML estático (Vercel) | $0 |
| Dev Tools | Claude Code + Cursor | $0-20/mes |

## Esquema de DB (MVP)

```sql
-- 3 tablas core
parents (id UUID PK, email TEXT UNIQUE, created_at TIMESTAMP)
children (id UUID PK, parent_id UUID FK, name TEXT, mascot_type TEXT, mascot_name TEXT, age_group TEXT, created_at TIMESTAMP)
checkins (id UUID PK, child_id UUID FK, situation TEXT, situation_choice TEXT, emotion TEXT, created_at TIMESTAMP)
```

## API Endpoints (MVP)

```
POST /api/auth/signup        → { email, password } → { user_id, token }
POST /api/auth/login         → { email, password } → { user_id, token }
POST /api/children           → { parent_id, name, mascot_type, mascot_name, age_group } → { child_id }
POST /api/checkins           → { child_id, situation, situation_choice, emotion } → { checkin_id, pet_reaction }
GET  /api/summary/:child_id  → ?week=2026-W10 → { active_days, emotion_distribution, situation_choices, tip }
```

## Arquitectura de pantallas

### Experiencia niño (1 pantalla principal, 60-90 seg/sesión)
1. **MascotSelectionScreen** — Elegir especie (gato/perro/conejo/panda) + nombre
2. **DailyCheckInScreen** — Escenario conductual → elección → emoji emoción → reacción mascota → micro-actividad opcional → sticker diario

### Experiencia padre (1 pantalla principal)
1. **AuthScreen** — Registro email/password
2. **WeeklySummaryScreen** — Cards por dimensión (social, instrucciones, regulación, ánimo) + tip semanal + botón compartir con profesional

## 6 dimensiones conductuales

| Dimensión | Mecánica en app | Padre ve |
|-----------|----------------|----------|
| Seguimiento de instrucciones | "Luna necesita ordenar — ¿la ayudas?" | "Ayudó 4/5 veces esta semana" |
| Socialización | "Luna quiere jugar — ¿sola o con amigos?" | "Prefirió sola 3/5 días" |
| Conducta prosocial | "Otra mascota necesita el juguete de Luna" | "Compartió 2/4 veces" |
| Regulación emocional | "Luna está enojada — ¿qué quiere hacer?" | "Eligió respirar 2/3 veces" |
| Ánimo general | "¿Cómo se siente Luna hoy?" (5 emojis) | Progresión L😢M😠X😐J😄V😄 |
| Señales pasivas | Frecuencia, horario, duración | "Abre más después del colegio" |

## Micro-actividades (gameplay, no terapia)

| Actividad | Duración | Practica |
|-----------|----------|----------|
| Respirar con Luna | 30s | Respiración diafragmática |
| Sacudir energía | 15s | Descarga motora |
| Pintar sentimientos | 60s | Expresión emocional |
| Contar estrellas | 45s | Grounding/mindfulness |
| Ayudar a Luna a dormir | 60s | Relajación |

## Segmentación por edad
- **4-6 años (pre-lectores)**: 100% visual, 60-90 seg, padre cerca, 4 opciones de emoción
- **7-12 años (lectores)**: Visual + texto, 90-180 seg, autónomo, mascota personalizable

## Modelo de negocio

| Canal | Modelo | Prioridad | Timeline |
|-------|--------|-----------|----------|
| B2C Padres | Free + Premium $5/mes | 1 | Mes 1+ |
| B2B Clínicas | $5-12/paciente/mes | 2 | Mes 3+ |
| B2B Colegios PIE | $2-4/niño/mes | 3 | Mes 6+ |

**Free**: Escenario diario + emoción + resumen semanal básico + 1 sticker
**Premium ($5/mes)**: Resúmenes diarios + tips personalizados + alertas + compartir con profesional + evolución mascota + stickers extra

## Hipótesis de validación (por riesgo)

| # | Hipótesis | Riesgo | Criterio GO |
|---|-----------|--------|-------------|
| H1 | Niños usan mascota >4x/semana × 30 días | FATAL | >35% retención D30 |
| H2 | Padres valoran resúmenes + tips | ALTO | >70% abren resumen, ≥3/5 pagarían $5 |
| H3 | Clínicos encuentran datos útiles | MEDIO | ≥3/5 "absolutamente sí" |
| H4 | Datos correlacionan con SDQ | BAJO | Estudio N≥30 (futuro) |

## Estructura del proyecto

Las carpetas numeradas (`01_` a `06_`) son **fases de planificación** (metodología Idear/Simplificar/Prototipar/Validar). Las carpetas sin número (`app/`, `landing/`, `brand/`) son **artefactos de ejecución** — código, sitio web y assets de marca. No se numeran porque no representan un paso en la narrativa del proyecto.

```
hachiko-kids/
├── CLAUDE.md                          ← Este archivo
├── README.md                          ← Índice maestro del proyecto
├── .gitignore                         ← Ignora .obsidian/, node_modules/, .expo/, dist/
├── 01_vision/
│   └── manifiesto.md                 ← Misión, valores, líneas rojas
├── 02_mercado/
│   ├── tam-sam-som.md                ← TAM $5-8B global, SAM $230M LATAM, SOM Year 1 $66K ARR
│   └── propuesta-de-valor.md         ← Props por segmento (niño, padre, clínico)
├── 03_personas/
│   ├── persona-nino.md               ← Emilia, 7 años
│   ├── persona-padre.md              ← Carolina, 34, ejecutiva
│   └── persona-clinica.md            ← Dra. Marcela Soto, psicóloga infantil
├── 04_producto/
│   ├── mvp-minimo.md                 ← Spec MVP, stack, timeline 4 días, wireframes
│   └── instrumentos-clinicos.md      ← 6 dimensiones + micro-actividades + jerarquía comunicacional
├── 05_validacion/
│   └── plan-validacion.md            ← 4 hipótesis, GO/NO-GO, timeline 6 semanas
├── 06_estrategia/
│   └── go-to-market.md               ← Posicionamiento, pricing, canales, unit economics, roadmap 5 meses
├── app/                               ← MVP móvil (Expo + Supabase) — por construir
│   └── .gitkeep
├── landing/
│   ├── index.html                    ← Landing page completa (responsive, formulario Formspree)
│   └── img/
│       ├── gato.png                  ← Mascota kawaii
│       ├── perro.png
│       ├── conejo.png
│       └── panda.png
└── mascotas-app.png                  ← Mockup/screenshot referencia
```

## Flujo de datos (check-in diario)

```
Niño abre app → Escenario ("Luna quiere jugar — ¿sola o con amigos?")
  → Niño elige → Emoji emoción → POST /checkins
  → Backend genera reacción mascota → FE anima
  → Micro-actividad opcional → Sticker diario
  → Total: ~90 segundos

Lunes 10am → Backend agrega checkins de la semana
  → Genera resumen (social, instrucciones, regulación, ánimo)
  → Push notification al padre → Padre abre resumen
  → Tip: "Los lunes son más difíciles. Intenta un ritual de despedida."
```

## Métricas clave MVP

| Métrica | Target |
|---------|--------|
| Aperturas diarias niño | >4/semana |
| Retención D7 | >60% |
| Retención D14 | >45% |
| Retención D30 | >35% |
| Duración sesión | 60-120 seg |
| Padre abre resumen | >70% lunes |
| Padre percibe valor | ≥3/5 "pagaría $5" |
| Conversión free→premium | 15% mes 3 |
| NPS padres | >50 |

## Competencia (LATAM)

| Competidor | Gap vs Hachiko |
|------------|---------------|
| Finch | Solo adultos, sin B2B, sin datos clínicos |
| Breathe Think Do (Sesame) | Sin datos continuos, sin dashboard padre |
| Mightier | Hardware caro, solo inglés, solo USA |
| Luca (Chile) | Solo académico, no emocional |

**Ventaja**: Nadie combina mascota + datos emocionales + dashboard padre + canal clínico en español.

## Roadmap (acelerado con IA)

| Semana | Hito |
|--------|------|
| 0 | Smoke test + entrevistas clínicos + concept test |
| 1-2 | Build MVP (4 días con Claude Code) |
| 3 | Lanzar piloto 20-30 niños |
| 3-6 | Piloto 30 días + iteraciones rápidas |
| 7 | GO/NO-GO |
| Mes 2 | App Store + content marketing |
| Mes 3 | B2B clínicas (2-3 pilotos) |
| Mes 5 | $5-10K MRR target, considerar funding |

## Convenciones de desarrollo
- Lenguaje de UI para padres: siempre conductual ("no sigue instrucciones"), nunca clínico ("déficit atencional")
- El niño NUNCA debe sentirse evaluado — todo es juego con la mascota
- Sesiones cortas: 60-90 seg máx para 4-6 años, 90-180 seg para 7-12
- La mascota NUNCA muere, se enferma ni se va — siempre positiva
- Assets de mascotas: 4 especies × 5 estados emocionales = 20 PNGs
- Reacciones de mascota: reglas simples (if/else), NO requiere LLM en MVP
- MVP = Expo Go (sin App Store), Supabase free tier, $0-20/mes total
