---
title: "Tamagotchi coach laboral — recolección de datos por gamificación (B2B2C)"
aliases: [tamagotchi-coach, coach-laboral-gamificado, tamagotchi-wellness]
date: 2026-02-24
tags: [hipotesis, wellness, corporativo]
status: explorando
miro: ""
---

# Tamagotchi coach laboral — recolección de datos por gamificación (B2B2C)

Evolución directa de [[2026-02-20-datos-salud-mental-modelos-riesgo]]. El problema no es técnico — es de diseño de motivación: **nadie ha construido un sistema donde el empleado quiera generar datos de salud mental voluntariamente porque obtiene algo valioso a cambio.**

## El reframe central

```
❌ "Responde este cuestionario sobre tu salud mental"
✅ "Tu mascota está agotada — ¿qué pasó hoy en el trabajo?"
```

El usuario no está siendo medido. Está cuidando algo. La recolección de datos ocurre como consecuencia del juego, no como objetivo explícito.

## Por qué fallan las plataformas actuales (Octalysis)

Las plataformas de wellness corporativo diseñan con solo 2 de los 8 Core Drives del marco Octalysis:

| Core Drive usado | Manifestación | Resultado |
|-----------------|---------------|-----------|
| **CD2** Desarrollo y realización | "Completa el survey, gana una insignia" | Aburrido — se abandona |
| **CD8** Evitar la pérdida | "Llena el formulario obligatorio" | Coercitivo — genera desconfianza |

Omiten los 6 restantes. El Tamagotchi los activa todos.

## Octalysis aplicado al Tamagotchi laboral

| CD | Impulsor | Cómo lo activa el Tamagotchi | Actor |
|----|----------|------------------------------|-------|
| **1** Épico y vocación | Blanco / Derecho | *"Estás contribuyendo a reducir la crisis de salud mental laboral en Chile"* — cada check-in agrega al benchmark nacional | Empleado |
| **2** Desarrollo y realización | Blanco / Izquierdo | El pet evoluciona. El coach mide "resiliencia laboral" como atributo que sube | Empleado |
| **3** Creatividad y feedback | Blanco / Derecho | El usuario decide cómo cuida al pet → el LLM responde con coaching inmediato. No hay respuestas "correctas" | Empleado |
| **4** Propiedad y posesión | Izquierdo | **El pet es del empleado.** Sus datos son suyos. Puede exportarlos, borrarlos, revocarlos. El employer nunca los ve individualmente | Empleado |
| **5** Influencia social y afinidad | Derecho | *"Tu equipo tiene el mejor índice de bienestar este mes"* — solo visible de forma agregada/anonimizada (N≥30) | Equipo |
| **6** Escasez e impaciencia | Negro | El coaching profundo tiene 2 sesiones/semana. Las intervenciones del LLM grande son limitadas → hacen sentir que el coaching vale | Empleado |
| **7** Impredecibilidad y curiosidad | Negro | *"¿Qué insight tendrá tu coach esta semana?"* El modelo genera narrativas distintas según patrones — nunca el mismo mensaje | Empleado |
| **8** Evitar la pérdida | Negro | *"Tu pet lleva 3 días enfermo — señal de semana intensa"* → el empleado quiere que su pet esté bien → hace check-in → genera dato | Empleado |

> Referencia del marco: `assets/Impulsores Principales (Core Drives) del Marco de Trabajo Octalysis - Table 1.csv`

## El Tamagotchi como instrumento de medición implícita

```
LO QUE EL USUARIO VE:             LO QUE EL SISTEMA MIDE:
─────────────────────             ────────────────────────
"Tu mascota está cansada"    →    PHQ-2 proxy: energía + estado de ánimo
"¿Comió hoy tu pet?"         →    Patrones de pausa / autocuidado
"Tu pet está estresada"      →    Overtime detectado en calendario
"Dale un abrazo a tu pet"    →    Regulación emocional + engagement
"Tu pet quiere dormir"       →    Ciclo de trabajo nocturno detectado
```

Cada interacción es un micro-datapoint estructurado. Ninguna parece un formulario.

## La tensión B2B2C: el conflicto de Core Drive 4

El núcleo de la problemática de diseño:

```
CONFLICTO DE PROPIEDAD (CD4)

Empresa/Mutual quiere "poseer":          Empleado quiere "poseer":
→ datos de comportamiento del equipo     → su privacidad
→ dashboard de riesgo                    → al Tamagotchi como objeto personal
→ predicción de siniestralidad           → historial de su coach

Solución: Privacy by Design satisface CD4 para ambos actores simultáneamente
```

```
EMPLEADO "posee"               EMPRESA/MUTUAL "posee"
────────────────               ─────────────────────
El Tamagotchi                  El dashboard de equipo
Su historial de coaching       Los benchmarks de industria
Sus datos exportables          La alerta de riesgo (agregada, N≥30)
El opt-out en cualquier        El ROI de la plataforma
momento

        NUNCA SE CRUZAN
```

## Arquitectura técnica: LLM + SLM en capas

```
DISPOSITIVO (local — SLM, ej: Phi-4 o Qwen2.5-3B)
├── Game loop: estado del Tamagotchi, animaciones, micro-decisiones
├── Pattern detection: ¿cuándo escalar al LLM grande?
├── Micro-coaching rutinario: respuestas simples del coach
└── Tools locales:
    ├── get_calendar_events()      → detecta overtime, densidad de reuniones
    ├── log_interaction(event)     → logging offline-first
    └── compute_local_risk()       → score rápido sin red, sin costo de tokens

        ↓  solo cuando SLM detecta trigger (crisis, anomalía, sesión semanal)

CLOUD (LLM grande — Claude Haiku o similar, ~10% de interacciones)
├── Interpretación de señales complejas
├── Generación de intervención personalizada del coach
├── Actualización del modelo de riesgo agregado
└── Tools cloud:
    ├── push_aggregate_to_dashboard()   → nunca datos individuales
    ├── run_validated_instrument()      → PHQ-2, WHO-5 camuflado en el juego
    └── generate_coaching_insight()    → para el usuario, nunca para RRHH
```

El SLM maneja ~90% de las interacciones → costo de tokens mínimo. El LLM grande se activa solo en los momentos que importan.

## Tools que ejecuta el LLM coach

```python
def assess_work_context():
    """Analiza calendar + historial para detectar semana de alta presión"""

def serve_micro_checkin(instrument="WHO-5", disguise_as="pet_mood"):
    """Sirve items validados clínicamente como decisiones del juego"""

def detect_risk_pattern(days=14):
    """Detecta tendencias: burnout, desengagement, riesgo de renuncia"""

def generate_coaching_nudge(context, severity):
    """
    severity=low    → SLM local, mensaje genérico
    severity=medium → LLM cloud, coaching personalizado
    severity=high   → LLM cloud + alerta (con consentimiento previo del usuario)
    """

def push_team_aggregate():
    """Solo sube si N≥30 en el grupo. Nunca identifica individuos."""
```

## Intercambio de valor (por qué el empleado coopera)

```
EMPLEADO DA:                          EMPLEADO RECIBE:
────────────                          ────────────────
Micro-interacciones diarias      →    Coach laboral personalizado (CD3, CD7)
Señales de bienestar             →    Pet que evoluciona con él (CD4, CD2)
Participación en el colectivo    →    Benchmarks del equipo (CD5, CD1)
Atención al pet cuando "enferma" →    Intervención preventiva real (CD8)
```

## Arquitectura B2B2C con los 3 actores

```
MUTUAL/EMPRESA (B — compra y despliega)
│  Motivación: reducir siniestralidad y rotación
│  Distribuye el app a sus empleados (canal: mutual → empresa → empleado)
│  Recibe: dashboard de equipo (N≥30), benchmarks de industria, ROI medible
│
├──▶ despliega el app a sus empleados
│
EMPLEADO (C — usa diariamente)
│  Motivación: coach laboral + cuidar al pet
│  Genera datos implícitos de forma continua y voluntaria
│  El pet vive en su teléfono, no en el servidor de RRHH
│
├──▶ genera datos implícitos diariamente
│
SLM LOCAL (90% de interacciones)       LLM CLOUD (10% — momentos clave)
Game loop + micro-coaching rutinario   Coaching profundo personalizado
Pattern detection sin costo            Risk score → dashboard B2B
Tools locales (calendario, logs)       Tools cloud (agregados, alertas)
```

## Go-to-market: misma puerta de entrada que la idea madre

La distribución via mutuales (ACHS, IST, Mutual) sigue siendo la estrategia:

```
ISTAS-21 mide el PROBLEMA (obligatorio)
            ↓
El Tamagotchi es la SOLUCIÓN (intervención continua, no solo diagnóstico)
            ↓
La MUTUAL lo distribuye (ya tiene obligación de asistencia técnica)
            ↓
Los DATOS se acumulan (modelo mejora con cada empresa)
            ↓
BENCHMARKS por industria (nuevo asset estratégico)
```

## Preguntas abiertas

- [ ] ¿Qué SLM local tiene mejor balance tamaño/calidad para coaching en español? (Phi-4, Qwen2.5-3B, Llama 3.2-3B)
- [ ] ¿El pet vive en móvil (React Native) o web app primero?
- [ ] ¿Cuántos Core Drives se pueden activar en la sesión de onboarding para lograr retención en semana 1?
- [ ] ¿Cómo se diseña la "enfermedad del pet" sin que se sienta manipulador (CD8 ético)?
- [ ] ¿La mutual subsidia el app o el empleador lo compra directamente?
- [ ] ¿Qué pasa con los datos si el empleado cambia de empresa?

## Riesgos específicos de este approach

1. **CD8 mal implementado**: "Tu pet se muere si no usas el app" → manipulación, no motivación. El pet debe "mejorar lentamente" no "morir abruptamente".
2. **Percepción de vigilancia**: Si el empleado siente que el pet reporta al jefe → abandono masivo. El diseño visual debe reforzar constantemente que el pet es SUYO.
3. **Novelty effect**: Los Tamagotchi se abandonan. El LLM coach debe generar variedad genuina (CD7) para superar la curva de abandono de semana 3-4.
4. **Regulatorio (Ley 21.719)**: Datos de salud + IA en dispositivo local = territorio regulatorio complejo. Mitigación: el SLM local no sale del dispositivo.

---

> Evolución de [[2026-02-20-datos-salud-mental-modelos-riesgo]]
> Deep research base en [[datos-salud-mental-empleados-research]] · [[datos-salud-mental-clientes-research]]

→ Contexto: [[espacio-de-oportunidad]]
→ Equipo: [[perfil-edgar-recursos-estrategicos]] · [[perfil-jose-recursos-estrategicos]]
