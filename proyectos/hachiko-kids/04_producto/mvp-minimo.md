---
title: "Hachiko Kids — MVP Minimo (80/20)"
date: 2026-03-10
tags: [producto, wellness, educacion]
status: en-progreso
---

# MVP Minimo — Lo que valida el 80% con el 20% del esfuerzo

## Hipotesis a validar

> **H1:** "Ninos de 4-12 anos interactuaran voluntariamente con una mascota virtual al menos 4 veces por semana durante 30 dias."
>
> **H2:** "Los padres consideran util recibir un resumen semanal de patrones de comportamiento de su hijo con tips accionables."
>
> **H3 (Fase 2):** "Un profesional de salud infantil considera que los datos de comportamiento son un complemento util entre consultas."

Si H1 falla → no hay producto.
Si H2 falla → no hay quien pague (B2C).
H3 no bloquea el MVP — se valida despues con datos reales del piloto.

---

## INCLUIR (el 20%)

### Para el nino (1 pantalla principal)

| Feature | Detalle | Tiempo dev (con IA) |
|---------|---------|---------------------|
| Elegir mascota | 3-4 opciones (gato, perro, conejo, panda). Ponerle nombre. | 2-3 horas |
| Situacion + emocion | "¿Que quiere hacer [nombre]?" (situacion conductual) + "¿Como se siente?" (5 caritas) | 2-3 horas |
| Reaccion de mascota | Mascota reacciona a la decision del nino (5 reacciones visuales) | 2-3 horas |
| Micro-actividad | 1 actividad post-check-in: "Respira con [nombre]" (animacion simple) | 2-3 horas |
| Sticker diario | Cada dia que abre, gana 1 sticker para la mascota | 1-2 horas |

**Total nino:** ~1-1.5 dias de desarrollo
**Tiempo de uso:** 60-90 segundos/dia

### Para el padre (1 pantalla)

| Feature | Detalle | Tiempo dev (con IA) |
|---------|---------|---------------------|
| Crear cuenta | Email + password, vincular hijo | 1-2 horas |
| Resumen semanal | 7 emojis (uno por dia) + "emocion mas frecuente" + "dias activos" | 3-4 horas |
| Notificacion semanal | Push: "El resumen de [nombre hijo] esta listo" | 1 hora |

**Total padre:** ~1 dia de desarrollo

### Infra minima

| Feature | Detalle | Tiempo dev (con IA) |
|---------|---------|---------------------|
| Auth | Supabase Auth (padre se registra, hijo no necesita cuenta) | 1-2 horas |
| DB | 3 tablas: parents, children, checkins | 30 min (schema generado por IA) |
| API | 2 endpoints: POST /checkin, GET /summary/:childId | 1-2 horas |
| Deploy | Expo Go (sin app store), Supabase free | 30 min |

**Total infra:** ~0.5-1 dia

### Assets (generados por IA)

| Asset | Herramienta | Tiempo |
|-------|-------------|--------|
| 4 mascotas × 5 estados = 20 PNGs | Midjourney / DALL-E / Flux | 2-3 horas |
| 30+ stickers | Misma herramienta, estilo consistente | 1-2 horas |
| Iconos de emociones (5 caritas) | Generados o libres (Noto Emoji) | 30 min |
| Copy: reacciones de mascota (50+ frases) | Claude / GPT | 30 min |
| Copy: mensajes para padres | Claude / GPT | 30 min |

**Total assets:** ~0.5 dia

### Total MVP: ~3-4 dias de desarrollo (1 persona con IA)

> **Comparacion:** Sin IA ~9.5 dias. Con IA (Claude Code, Cursor, generacion de assets) ~3-4 dias. Reduccion ~60%.

---

## EXCLUIR (el 80% que no necesitamos ahora)

| Feature | Por que no |
|---------|-----------|
| SLM on-device | Overkill. Rule-based es suficiente para reacciones |
| LLM cloud coaching | Costo innecesario. Actividades pre-armadas |
| Unity 3D mascota | PNG/SVG estaticos con 5 estados es suficiente |
| Evolucion de mascota | Validar enganche primero, evolucion despues |
| Dashboard clinico | Fase 2 — primero validar con padres |
| Offline sync | WiFi en casa es suficiente para piloto |
| Encriptacion pgsodium | Piloto con datos minimos, sin PII sensible |
| Multi-tenancy complejo | 1 tabla parents, 1 tabla children |
| Tienda de items | Sticker diario es suficiente para validar recompensa |
| Badges/logros | Un solo sticker de participacion basta |
| HRIS/integraciones | No existen aun los clientes |
| Rate limiting | <100 usuarios, innecesario |
| Audit logs | Post-validacion |

---

## Stack minimo

| Capa | Tecnologia | Costo |
|------|-----------|-------|
| Mobile | React Native (Expo Go) | $0 |
| Backend | Supabase (free tier) | $0 |
| API | Supabase Edge Functions o directo al DB | $0 |
| Assets | 5 PNGs por mascota × 4 mascotas = 20 imagenes | $0 (Midjourney/DALL-E/Flux) |
| Copy | 50+ reacciones mascota, mensajes padres | $0 (Claude/GPT) |
| Push | Expo Notifications | $0 |
| Coding assistant | Claude Code / Cursor | $0-20/mes |
| **Total** | | **$0-20/mes** |

---

## Flujo del MVP

```
DIA 1 (padre):
  Descarga app → Crea cuenta → Agrega nombre del hijo → Listo

DIA 1 (nino):
  Abre app → Elige mascota → Pone nombre
  → "Luna quiere jugar — ¿sola o con amigos?" (situacion)
  → "¿Cómo se siente Luna?" (carita)
  → Luna reacciona → "Respira con Luna" → Sticker ⭐
  → Fin (90 segundos)

DIA 2-30 (nino):
  Abre app → Situacion del dia (rotativa: compartir, ordenar, jugar, enojarse...)
  → "¿Como se siente Luna?" → Carita → Reaccion
  → Micro-actividad → Sticker → Fin

CADA LUNES (padre):
  Push: "Resumen semanal de Luna"
  → Abre → Ve patrones de comportamiento:
     🤝 Socialización: prefirió jugar sola 3/5 días
     📋 Instrucciones: ayudó a ordenar 4/5 veces
     😊 Ánimo: más contenta hacia el fin de semana
  → Tip: "Los lunes son más difíciles. Un ritual de despedida puede ayudar."
  → Cierra (45 segundos)
```

---

## Opcion aun mas rapida: Concierge MVP con IA (1 dia)

Si queremos validar ANTES de escribir codigo:

| Hora | Accion |
|------|--------|
| Manana | Generar 20 imagenes de mascota con Midjourney/DALL-E (4 mascotas × 5 emociones). Generar copy de reacciones con Claude (50 frases en 10 min). |
| Tarde | Crear grupo WhatsApp con 10 padres. Enviar primera imagen de mascota + 5 emojis. |
| Dia 2-14 | Cada dia a las 16:00, enviar imagen de mascota + 5 emojis. Padre le muestra al nino, nino elige emoji, padre responde. |

**Costo:** $0. **Tiempo:** 1 dia de setup (vs 3 sin IA).
**Riesgo:** Friccion de WhatsApp puede matar engagement artificial.

### Opcion intermedia: Bot de WhatsApp (2 dias)

Con IA se puede automatizar el concierge:

| Dia | Accion |
|-----|--------|
| 1 | Crear bot WhatsApp (Twilio/WhatsApp Business API) que envia imagen de mascota diaria + recibe emoji de respuesta. Claude Code genera el bot en horas. |
| 2 | Testear + activar con 10 familias. Bot envia automatico a las 16:00, registra respuestas en Google Sheets. |
| 3-14 | Medir automaticamente. Sin intervencion manual diaria. |

**Costo:** ~$5-15 (Twilio). **Tiempo:** 2 dias.
**Ventaja:** Elimina la friccion de enviar manualmente + datos mas limpios.

---

## Wireframes conceptuales

### Pantalla nino (situacion conductual)

```
┌─────────────────────────┐
│                         │
│      🐱 Luna            │
│   [imagen mascota]      │
│                         │
│  Luna quiere jugar...   │
│                         │
│  🧸 Sola   👫 Con un    │
│             amigo       │
│  👥 Con muchos amigos   │
│                         │
└─────────────────────────┘
```

### Pantalla nino (emocion + reaccion)

```
┌─────────────────────────┐
│                         │
│  ¿Cómo se siente Luna? │
│                         │
│  😄  😐  😢  😠  😨    │
│                         │
│  → Luna se acurruca     │
│  "Está bien estar       │
│   triste a veces"       │
│                         │
│  [Respirar con Luna 🌬] │
│        ⭐ +1 sticker    │
└─────────────────────────┘
```

### Pantalla padre (resumen semanal conductual)

```
┌──────────────────────────┐
│  Semana de Luna          │
│  (3-9 marzo)             │
│                          │
│  🤝 Socialización        │
│  Prefirió jugar sola 3/5 │
│                          │
│  📋 Instrucciones        │
│  Ayudó a ordenar 4/5     │
│                          │
│  😤 Regulación           │
│  Eligió "respirar" 2/3   │
│                          │
│  😊 Ánimo                │
│  L😢 M😠 M😐 J😄 V😄    │
│                          │
│  💡 "Los lunes parecen   │
│  más difíciles. Un ritual│
│  de despedida de 2 min   │
│  puede ayudar."          │
│                          │
│  Dias activos: 5/7       │
└──────────────────────────┘
```

---

## Cronograma (acelerado con IA)

| Dia | Jose | Edgar |
|-----|------|-------|
| 1 | Setup Expo + Supabase + schema (Claude Code genera scaffold completo) | Generar assets mascota (Midjourney/DALL-E: 20 PNGs). Generar copy reacciones (Claude: 50+ frases) |
| 2 | Pantalla mascota + check-in + reaccion (IA genera componentes base) | Contactar 10 familias + 2 clinicos. One-pager del piloto |
| 3 | Resumen semanal padre + push notification | Seguimiento familias. Disenar onboarding flow |
| 4 | Testing + bug fixes + deploy Expo Go | Onboarding primeras familias piloto |
| 5-34 | Monitorear datos. Bug fixes. Iteraciones rapidas | Recoger feedback. Entrevistas semanales padres. Analizar metricas |

**Total build:** 4 dias (vs 10 sin IA). Piloto arranca dia 5.

### Que hace la IA en cada paso

| Tarea | Herramienta IA | Ahorro |
|-------|---------------|--------|
| Scaffold proyecto (Expo + Supabase + API) | Claude Code | 1 dia → 2 horas |
| Componentes React Native | Claude Code / Cursor | 3 dias → 4-6 horas |
| Schema DB + migrations | Claude Code | 0.5 dia → 15 min |
| Assets visuales (mascotas, stickers, emojis) | Midjourney / DALL-E / Flux | Dias (diseñador) → 2-3 horas |
| Copy (reacciones mascota, mensajes padres, onboarding) | Claude / GPT | 1 dia → 30 min |
| Encuesta pre-piloto (Google Forms) | Claude genera preguntas + estructura | 2 horas → 15 min |
| Analisis de datos piloto | Claude analiza CSV/Sheets | Horas → minutos |
| Contenido marketing (posts Instagram/TikTok) | Claude / GPT + Canva AI | 1 semana → 1 dia batch |
| Bot WhatsApp (concierge) | Claude Code genera en Twilio | 2-3 dias → 2 horas |

---

## Decision post-piloto

| Resultado | Accion |
|-----------|--------|
| Ninos usan >4 dias/semana + padres valoran resumen conductual + tips utiles | **GO** — Invertir en producto real. Fase 2: validar con clinicos. |
| Ninos usan pero padres no miran resumen | Probar formato distinto (WhatsApp, push con resumen inline) |
| Padres valoran pero ninos no enganchan | Redisenar mecanica de mascota / situaciones |
| Nadie usa | Pivotar o descartar concepto |

---

> Contexto: [[hachiko-kids]]
> Equipo: [[perfil-edgar-recursos-estrategicos]] · [[perfil-jose-recursos-estrategicos]]
