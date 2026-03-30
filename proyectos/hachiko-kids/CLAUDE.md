# Hachiko Kids — Contexto para Claude Code

## Qué es
App móvil que ayuda a padres a entender patrones conductuales de sus hijos (4-12 años) a través de una mascota virtual. El niño cuida a su mascota respondiendo escenarios conductuales; el padre recibe resúmenes semanales con patrones y tips accionables.

**Pivot** del concepto original Hachiko Corporativo (bienestar adulto) hacia salud mental infantil.

**Estado actual**: MVP funcional desplegado. App Android (APK via EAS Build) + Supabase backend + landing page + landing piloto. En fase de piloto con familias. Buscando activamente financiamiento (Start-Up Chile Ignite, Y Combinator S26, Techstars Healthcare, Platanus, y otros).

## Equipo
- **Edgar** — Experiencia directa en PIE (Programa de Integración Escolar del Mineduc). Coordinó médicos y colegios en CEAPSI. Conoce el flujo clínico-institucional desde adentro. Rol: assets, reclutamiento de familias/clínicos, canal B2B institucional.
- **José María Muñoz** — Data Engineer (Databricks, Azure, Spark). Rol: desarrollo técnico del MVP con asistencia de IA. Contacto: josemaria.munoz95@gmail.com

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
| Mobile | React Native (Expo) + EAS Build | $0 |
| Backend | Supabase (free tier) | $0 |
| DB | PostgreSQL (Supabase) | $0 |
| Auth | Supabase Auth (email/password) | $0 |
| Push | Expo Notifications | $0 |
| Updates | EAS Update (branch: preview) | $0 |
| Assets | IA (Midjourney/Flux + Claude) | $0-50 |
| Landing | HTML estático | $0 |
| Fonts | Fredoka + Inter (expo-google-fonts) | $0 |
| Dev Tools | Claude Code + Cursor | $0-20/mes |

## Deploy & distribución

| Recurso | URL / detalle |
|---------|---------------|
| Expo project ID | `e46b24fb-84f8-4168-81ef-99dc6d4cee06` |
| EAS Update branch | `preview` |
| Android APK (build) | https://expo.dev/accounts/jm95/projects/hachiko-kids/builds/69b9d92e-0c3a-4cc3-b667-93f6e3334ad0 |
| Android package | `com.jm95.hachikokids` |
| Supabase project | `zxwaxpattxlhxvqaawnq` |
| Landing principal | `landing/index.html` |
| Landing piloto | `landing-piloto/index.html` |

**Publicar un update** (las familias lo reciben sin reinstalar):
```bash
cd app && npx eas-cli update --branch preview --message "descripción"
```

**Crear un nuevo build** (solo si se cambian dependencias nativas):
```bash
cd app && npx eas-cli build --profile preview --platform android --non-interactive
```

## Esquema de DB (MVP)

```sql
-- 3 tablas core
parents (id UUID PK, email TEXT UNIQUE, created_at TIMESTAMP)
children (id UUID PK, parent_id UUID FK, name TEXT, mascot_type TEXT, mascot_name TEXT, age_group TEXT, created_at TIMESTAMP)
checkins (id UUID PK, child_id UUID FK, situation TEXT, situation_choice TEXT, emotion TEXT, created_at TIMESTAMP)

-- Emociones válidas: 'happy', 'sad', 'angry', 'scared', 'neutral'
-- (migración aplicada 2026-03-16: se reemplazó 'very_happy' por 'scared')
```

## Arquitectura de pantallas

### Experiencia niño (1 pantalla principal, 60-90 seg/sesión)
1. **MascotSelectionScreen** (`select-mascot.tsx`) — Ponerle nombre a Luna (mascota única)
2. **DailyCheckInScreen** (`checkin.tsx`) — Escenario conductual → elección → emoji emoción → reacción mascota → respiración opcional → sticker diario

### Experiencia padre (1 pantalla principal)
1. **AuthScreen** (`login.tsx`) — Login + registro email/password (mismo archivo)
2. **WeeklySummaryScreen** (`summary.tsx`) — Dato + Acción arriba, luego cards por dimensión expandibles + navegación semanal

## 5 dimensiones conductuales (en app)

| Dimensión | Mecánica en app | Padre ve |
|-----------|----------------|----------|
| Seguimiento de instrucciones | "Luna necesita ordenar — ¿la ayudas?" | "Ayudó 4/5 veces esta semana" |
| Socialización | "Luna quiere jugar — ¿sola o con amigos?" | "Prefirió sola 3/5 días" |
| Conducta prosocial | "Otra mascota necesita el juguete de Luna" | "Compartió 2/4 veces" |
| Regulación emocional | "Luna está enojada — ¿qué quiere hacer?" | "Eligió respirar 2/3 veces" |
| Ánimo general | Emoción seleccionada por check-in | Timeline visual con círculos de colores por día |

## Micro-actividades (gameplay, no terapia)

| Actividad | Duración | Practica |
|-----------|----------|----------|
| Respirar con Luna | 30s (4 ciclos) | Respiración diafragmática |
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

Las carpetas numeradas (`01_` a `08_`) son **planificación**. Las carpetas sin número son **ejecución**: producto (`app/`, `landing/`, etc.) y contenido (`content/`).

```
hachiko-kids/
│
├── 📋 PLANIFICACIÓN
├── 01_vision/
│   └── manifiesto.md
├── 02_mercado/
│   ├── tam-sam-som.md
│   └── propuesta-de-valor.md
├── 03_personas/
│   ├── persona-nino.md
│   ├── persona-padre.md
│   └── persona-clinica.md
├── 04_producto/
│   ├── mvp-minimo.md
│   └── instrumentos-clinicos.md
├── 05_validacion/
│   └── plan-validacion.md
├── 06_estrategia/
│   └── go-to-market.md
├── 07_financiamiento/
│   ├── convocatorias.md              ← Repositorio de fondos, aceleradoras y ferias
│   └── calendario-convocatorias.md   ← Plan de preparación y postulación con fechas críticas
├── 08_agentes/
│   └── propuesta-subagentes.md       ← 10 subagentes IA para acelerar crecimiento (prioridad + prompts)
│
├── 🔧 PRODUCTO
├── app/                               ← MVP móvil (Expo + Supabase)
│   ├── app.json                      ← Config Expo + EAS project ID
│   ├── eas.json                      ← Perfiles de build (preview, production)
│   ├── .npmrc                        ← legacy-peer-deps=true (requerido por build)
│   ├── .env                          ← EXPO_PUBLIC_SUPABASE_URL + ANON_KEY
│   ├── supabase-schema.sql           ← Schema SQL (3 tablas + RLS)
│   ├── package.json
│   ├── tsconfig.json
│   ├── src/
│   │   ├── _layout.tsx              ← Root layout (fonts, auth listener, notifications)
│   │   ├── index.tsx                ← Redirect a login
│   │   ├── (auth)/
│   │   │   ├── _layout.tsx
│   │   │   └── login.tsx            ← Login + signup (mismo archivo)
│   │   └── (app)/
│   │       ├── checkin.tsx          ← Flujo principal niño (escenario→emoción→reacción→respirar→sticker)
│   │       ├── select-mascot.tsx    ← Nombrar a Luna
│   │       └── summary.tsx          ← Dashboard semanal padres
│   ├── lib/
│   │   ├── supabase.ts             ← Cliente Supabase + SecureStore
│   │   ├── scenarios.ts            ← Escenarios por dimensión
│   │   ├── pet-reactions.ts        ← Reacciones de Luna (reglas if/else)
│   │   ├── theme.ts                ← Colores, fuentes, tema
│   │   ├── notifications.ts        ← Push notifications (resumen lunes)
│   │   └── emojis.ts               ← Emojis para emotion picker
│   ├── components/
│   │   ├── PetDisplay.tsx           ← Luna con 5 estados de ánimo
│   │   ├── EmotionPicker.tsx        ← Selector de emoción (5 opciones)
│   │   ├── ScenarioCard.tsx         ← Tarjeta de escenario conductual
│   │   └── SummaryCard.tsx          ← Card expandible del dashboard (soporta detailContent ReactNode)
│   └── assets/
│       ├── logo.png
│       ├── icon.png
│       ├── splash-icon.png
│       └── android-icon-*.png
├── landing/
│   ├── index.html                    ← Landing principal (responsive, i18n ES/EN, Formspree + Google Sheets)
│   └── img/
│       └── gato.png                 ← Luna
├── landing-piloto/
│   └── index.html                    ← Landing para familias piloto (QR + APK download + instrucciones)
├── brand/                             ← Assets de marca
├── tumascota/                         ← Web tumascota
│
├── 📢 CONTENIDO (difusión + pitch + research)
└── content/
    ├── flyers/
    │   ├── flyer-clinica.html         ← Flyer A5 clínicas psicológicas
    │   └── .kntor-design-atomic/      ← Design system del flyer
    ├── reels/
    │   ├── reel-hachiko-kids.mp4
    │   ├── reel-hachiko-kids-final.mp4
    │   └── soundtrack_flyer.mp3
    ├── one-pager/
    │   ├── one-pager-hachiko-kids.html
    │   └── one-pager-hachiko-kids-v2.html
    ├── pitch/
    │   ├── guion_pitch1_inversionistas_v2.md    ← versión activa (spinpitch)
    │   ├── guion_pitch2_clinicas_colegios_v2.md ← versión activa
    │   ├── pitch1_inversionistas_v2.pptx
    │   ├── pitch2_clinicas_colegios_v2.pptx
    │   ├── hachiko-kids-research.pdf
    │   ├── one-pager-research.html / .md
    │   └── onboarding-prototype.html
    ├── video-demo/
    │   ├── guion-video-demo.md
    │   └── app-prototype.html
    └── research/
        ├── 169_princi_pal_A_Moral_Dilemma.pdf
        ├── Wang_2023_Data_autonomy_in.pdf
        ├── Autonomía_de_Datos_para_Niños.mp4
        ├── El_experimento_princi_pal.mp4
        ├── El_Tamagotchi_que_cuestiona_tu_moralidad.mp3
        └── IA_y_autonomía_de_datos_para_niños.m4a
```

## Flujo de datos (check-in diario)

```
Niño abre app → Escenario ("Luna quiere jugar — ¿sola o con amigos?")
  → Niño elige → Emoji emoción → POST /checkins (con error handling)
  → Backend genera reacción mascota → FE anima
  → Opción: "Respirar con Luna" (4 ciclos) o "Siguiente"
  → Sticker estrella → AsyncStorage marca día como done (key: checkin-{childId}-YYYY-MM-DD)
  → Total: ~90 segundos

Lunes 10am → Push notification al padre → Padre abre resumen
  → Dashboard: Dato + Acción (arriba, visible) → 5 cards por dimensión expandibles
  → Ánimo: círculos de colores por día (promedio si hay varios check-ins)
  → Navegación semanal con flechas ◀ ▶
```

## Bugs corregidos (2026-03-16)

| Bug | Fix | Archivo |
|-----|-----|---------|
| AsyncStorage key con child undefined | Guard clause en `todayKey()` | `checkin.tsx` |
| todayKey con getMonth() 0-indexed | Cambiado a ISO `YYYY-MM-DD` | `checkin.tsx` |
| Sin auth state listener | `onAuthStateChange` redirige a login en SIGNED_OUT | `_layout.tsx` |
| Queries sin error handling | try/catch + estado error + botón "Reintentar" | `checkin.tsx`, `summary.tsx` |
| Signup sin verificar data.user | Guard antes de navegar | `login.tsx` |
| Notificación falla silenciosa | `console.warn` en catch | `checkin.tsx` |
| Summary vacío sin mensaje | Estado vacío con mensaje amigable | `summary.tsx` |
| DB constraint con 'very_happy' | Migración: reemplazado por 'scared' | Supabase + `supabase-schema.sql` |
| Emojis no renderizan en custom fonts | Reemplazados por círculos de colores (View components) | `summary.tsx` |
| Dashboard: Dato/Acción ocultos abajo | Movidos arriba de las dimensiones | `summary.tsx` |
| Ánimo: múltiples entradas por día | Promedio de scores por día, un indicador por día | `summary.tsx` |

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

## Financiamiento activo (Mar 2026)

Pipeline de postulaciones en `07_financiamiento/`. Detalle completo en `calendario-convocatorias.md`.

| Convocatoria | Cierre | Inversión | Equity | Status |
|--------------|--------|-----------|--------|--------|
| Open Salcobrand (UDD Ventures) | 22 mar 2026 | Piloto 6 meses | 0% | VENCIDA |
| ChileMass Emprende (CORFO) | ~fines mar 2026 | Inmersión Boston | 0% | ALTA — requiere persona jurídica |
| CORFO Capital Semilla Temprano | 28 mar 2026 | $35M CLP | 0% | ALTA — requiere persona jurídica |
| I+D para Innovar (COPEC UC) | 6 abr 2026 | I+D | 0% | MEDIA — base científica |
| **Y Combinator S26** | **4 may 2026** | **$500K** | **7% + MFN** | **ALTA — video 1 min requerido** |
| **Start-Up Chile — Ignite** | **7 may 2026** | **$27K + $22K** | **0%** | **ALTA — máxima prioridad** |
| **Techstars Healthcare** | **10 jun 2026** | **$220K** | **5% + MFN** | **MEDIA — post-YC** |
| Platanus | Temprana 30 mar / General 30 abr 2026 | USD $200K | 7% (SAFE post-money) | MEDIA — requiere full-time al iniciar programa (jun 2026) |
| AceleraLatam (ALGEN) | Por confirmar | ~$300K red | Coinversión | MEDIA |
| Magical | Rolling | $125K | Nota | MEDIA |
| Rockstart LATAM | 2026 por anunciar | $100K | 6% | MEDIA |
| Embarca | Rolling | $50K + follow-on | 10% | MEDIO-ALTO |
| Parallel18 | ~jun 2026 | $100K | SAFE | MEDIA — requiere incorporación USA |
| LAN Accelerator | 2026 por abrir | $150K | SAFE | BAJA |
| UTEC Ventures | Por confirmar | $25K | Nota | BAJA |
| Microsoft for Startups | Sin cierre | $150K créditos | 0% | BAJA |

**BLOQUEANTES**:
- Persona jurídica en Chile (ChileMass/ProChile/CORFO Semilla)
- Decisión full-time (Platanus)
- Decisión relocalización SF 3 meses (YC)
- Video founders 1 min (YC — sin esto no se puede postular)

**Materiales pendientes**: Pitch deck base, one-pager, video demo app, video founders 1 min (YC), métricas del piloto.

## Dependencias principales (app)

```json
"expo": "~54.0.0",
"react-native": "0.81.5",
"@supabase/supabase-js": "^2.49.1",
"expo-router": "~6.0.23",
"expo-notifications": "~0.32.16",
"expo-updates": "~29.0.16",
"expo-font": "~14.0.11",
"expo-splash-screen": "^55.0.10",
"@expo-google-fonts/fredoka": "^0.4.1",
"@expo-google-fonts/inter": "^0.4.2",
"@react-native-async-storage/async-storage": "2.2.0",
"expo-secure-store": "~15.0.8"
```

## Convenciones de desarrollo
- Lenguaje de UI para padres: siempre conductual ("no sigue instrucciones"), nunca clínico ("déficit atencional")
- El niño NUNCA debe sentirse evaluado — todo es juego con la mascota
- Sesiones cortas: 60-90 seg máx para 4-6 años, 90-180 seg para 7-12
- La mascota NUNCA muere, se enferma ni se va — siempre positiva
- Assets de mascota: Luna con 5 estados emocionales (happy, sad, angry, scared, neutral)
- Reacciones de mascota: reglas simples (if/else), NO requiere LLM en MVP
- Emojis no funcionan con fuentes custom (Fredoka/Inter) en React Native — usar View components con colores
- SummaryCard acepta `detailContent` (ReactNode) para contenido visual expandible
- `.npmrc` con `legacy-peer-deps=true` es requerido para que EAS Build funcione
- Variables de entorno `EXPO_PUBLIC_*` están configuradas en EAS (environment: preview)
- Nuevo build necesario si se agregan/cambian dependencias nativas (expo-font, expo-splash-screen, expo-updates ya incluidos)

## Generación de PDFs (Chrome headless)

```bash
# Comando correcto — sin headers/footers, path absoluto obligatorio
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome \
  --headless --disable-gpu --no-pdf-header-footer \
  --print-to-pdf="/ruta/absoluta/archivo.pdf" \
  "file:///ruta/absoluta/archivo.html"
```
- Flag correcto: `--no-pdf-header-footer` (NO `--print-to-pdf-no-header`)
- Sin path absoluto en `--print-to-pdf`, Chrome guarda en `~/` — siempre usar ruta absoluta

## Datos y referencias

- Referencias bibliográficas generadas por LLMs deben verificarse antes de commitear — títulos de reportes de mercado (Grand View, Allied, etc.) son frecuentemente parafraseados o inventados
- Dato verificado para crisis salud mental: "+31% atenciones urgencia (2021-2023), 235.705 → 307.407" — Portilla-Saavedra et al. (2025), Terapia Psicológica 43(2). El "72% (2019-2023)" que circulaba era no verificable
- Convocatorias de fuentes secundarias (agregadores, posts LinkedIn) requieren verificación directa en el sitio oficial antes de incluirlas como activas — Wayra Colombia no fue verificable
