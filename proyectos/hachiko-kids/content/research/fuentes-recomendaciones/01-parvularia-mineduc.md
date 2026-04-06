---
title: "Fuente Recomendaciones — Subsecretaría Educación Parvularia MINEDUC"
date: 2026-04-06
tags: [producto, educacion, wellness]
status: completado
---

# Parvularia MINEDUC — Fuente para Motor de Recomendaciones

## Clasificación para el motor

| Criterio | Evaluación |
|----------|-----------|
| **Utilidad para recomendaciones** | **ALTA** |
| **Respaldo institucional** | Máximo — Gobierno de Chile (Subsecretaría oficial) |
| **Datos estructurados** | Sí — 14 fichas con escenarios + respuestas + orientaciones |
| **Determinístico** | Sí — las fichas siguen lógica IF situación THEN orientación |
| **Evidencia base** | BCEP (Bases Curriculares Educación Parvularia) + DIA |

---

## Qué contenido sirve para recomendaciones

### 1. Maletín Socioemocional (14 fichas pedagógicas)

Recurso central. Cada ficha tiene estructura que se mapea directamente a reglas determinísticas:

| Ficha (temática) | Input en Hachiko (señal del niño) | Output recomendación (tip para padre) |
|---|---|---|
| Manejo de pataletas | Niño elige "Luna está enojada → gritar/golpear" | "Cuando tu hijo muestra frustración, valida su emoción antes de pedir que se calme. Guía MINEDUC: nombrar la emoción juntos" |
| Contención emocional | Niño elige emociones negativas 3+ días seguidos | "Técnica de contención: estar presente sin intentar resolver. Guía MINEDUC: acompañar sin juzgar" |
| Familiarización al jardín | Niño elige "Luna no quiere ir" | "La ansiedad de separación es normal. Guía MINEDUC: ritual de despedida corto y predecible" |
| Comunicación familia-escuela | Patrón de socialización baja en check-ins | "Conversa con la educadora sobre cómo interactúa en el jardín. Guía MINEDUC: preguntas específicas para la reunión" |

**Fuente directa**: https://parvularia.mineduc.cl/maletin-socioemocional/

### 2. DIA Parvularia — 4 dimensiones de rúbrica

Las 4 dimensiones del DIA se pueden mapear 1:1 a las 5 dimensiones de Hachiko Kids:

| Dimensión DIA (MINEDUC) | Dimensión Hachiko Kids | Cómo alimenta recomendaciones |
|---|---|---|
| Comunicación emocional | Ánimo general + Regulación emocional | Si el niño no varía emociones en 7 días → recomendar ejercicios de vocabulario emocional (MINEDUC) |
| Autorregulación | Regulación emocional | Si elige respuestas impulsivas >60% → recomendar técnicas de pausa (ficha contención MINEDUC) |
| Participación colaborativa | Socialización + Conducta prosocial | Si elige "sola" >80% → normalizar + sugerir juego paralelo (orientaciones MINEDUC) |
| Resolución de conflictos | Seguimiento instrucciones + Conducta prosocial | Si no comparte/no sigue instrucciones → recomendar modelaje (ficha comunicación MINEDUC) |

**Fuente directa**: https://diagnosticointegral.agenciaeducacion.cl/dia_parvularia.html

### 3. Claves para la contención emocional (PDF)

Estrategias prácticas que se convierten en tips accionables:

- **Regla**: Si el niño muestra emoción "angry" + elige respuesta agresiva → Tip: "Técnica del semáforo emocional: Rojo (para), Amarillo (piensa), Verde (actúa). Fuente: Subsecretaría Ed. Parvularia"
- **Regla**: Si el niño muestra emoción "scared" 3+ veces/semana → Tip: "El miedo es una emoción protectora. Pregúntale qué le preocupa sin minimizar. Fuente: MINEDUC"
- **Regla**: Si el niño muestra emoción "sad" + baja socialización → Tip: "Acompañar sin intentar 'arreglar'. Estar presente es suficiente. Fuente: MINEDUC"

**Fuente directa**: https://parvularia.mineduc.cl/wp-content/uploads/2020/11/Claves-para-la-contencion-emocional.pdf

### 4. BCEP — Ámbito Desarrollo Personal y Social

Marco legitimador para las recomendaciones. Permite declarar:
> "Las recomendaciones de Hachiko Kids están alineadas con las Bases Curriculares de Educación Parvularia del Ministerio de Educación de Chile (ámbito Desarrollo Personal y Social)"

Núcleos de aprendizaje mapeables:
- **Identidad y autonomía** → Dimensión "Seguimiento de instrucciones"
- **Convivencia y ciudadanía** → Dimensiones "Socialización" + "Conducta prosocial"
- **Corporalidad y movimiento** → Micro-actividades ("Sacudir energía", "Respirar con Luna")

---

## Reglas determinísticas extraíbles

```
REGLA 1: IF emocion == "angry" AND choice == "agresiva" FOR 3+ days
  THEN recommend: "Técnica del semáforo emocional" (Contención Emocional MINEDUC)
  PRIORITY: alta
  SOURCE: "Subsecretaría de Educación Parvularia, MINEDUC"

REGLA 2: IF dimension_socializacion < 30% AND edad IN [4,5,6]
  THEN recommend: "El juego paralelo es normal a esta edad" (Maletín Socioemocional)
  PRIORITY: media
  SOURCE: "Maletín Socioemocional, MINEDUC"

REGLA 3: IF emocion == "sad" FOR 5+ days consecutivos
  THEN recommend: "Acompañar sin juzgar — estar presente es suficiente" (Contención MINEDUC)
  PRIORITY: alta
  ALSO: flag para dashboard padre como "patrón a observar"
  SOURCE: "Claves para la Contención Emocional, MINEDUC"

REGLA 4: IF dimension_regulacion < 40% AND micro_actividad_uso == 0
  THEN recommend: "Invita a tu hijo a hacer 'Respirar con Luna' juntos" (BCEP Corporalidad)
  PRIORITY: media
  SOURCE: "BCEP — Corporalidad y Movimiento, MINEDUC"
```

---

## Limitaciones

- Contenido enfocado en **0-6 años** — Hachiko Kids cubre hasta 12. Las fichas del Maletín aplican bien para 4-6 pero necesitan adaptación para 7-12.
- El DIA es voluntario y cualitativo — no provee baremos cuantitativos. Las reglas deben usar umbrales propios de Hachiko Kids.
- Las fichas están en PDF — requieren extracción manual y catalogación en base de datos de recomendaciones.
- No hay API ni formato digital estructurado.

---

> Contexto: [[hachiko-proyecto-maestro]]
> Comparación: [[motor-recomendaciones-comparacion]]
