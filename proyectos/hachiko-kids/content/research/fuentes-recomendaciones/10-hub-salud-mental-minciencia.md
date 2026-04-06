---
title: "Fuente Recomendaciones — Hub Salud Mental MinCiencia"
date: 2026-04-06
tags: [producto, wellness]
status: completado
---

# Hub Salud Mental MinCiencia — Fuente para Motor de Recomendaciones

## Clasificación para el motor

| Criterio | Evaluación |
|----------|-----------|
| **Utilidad para recomendaciones** | **MEDIA** |
| **Respaldo institucional** | Máximo — Ministerio de Ciencia, Gobierno de Chile |
| **Datos estructurados** | Parcial — 12 recursos digitales, algunos con formato de cápsulas |
| **Determinístico** | Parcial — cápsulas por tema, no protocolos IF-THEN |
| **Evidencia base** | Gobierno de Chile + instituciones académicas |

---

## Qué contenido sirve para recomendaciones

### 1. "Pequeños consejos para grandes problemas"

Recurso específico de mindfulness y regulación emocional para niños:

```
REGLA 1: IF emocion == "angry" AND micro_actividad_completada == false
  THEN recommend: "MinCiencia recomienda: cuando tu hijo está enojado, invítalo a respirar lento 4 veces. 'Inflamos un globo imaginario juntos'"
  SOURCE: "Pequeños consejos para grandes problemas — MinCiencia Chile"

REGLA 2: IF patron_ansiedad detectado AND edad IN [8,9,10,11,12]
  THEN recommend: "La ansiedad se puede manejar. MinCiencia tiene cápsulas gratuitas de mindfulness para niños"
  TYPE: recurso externo
  SOURCE: "Hub Salud Mental — saludmental.minciencia.gob.cl"
```

### 2. "Salud Telemental" — comunidad escolar

Cápsulas sobre bullying, autolesiones para contexto escolar:

```
REGLA B2B: IF patron_riesgo_escolar detectado (múltiples niños mismo curso)
  THEN recommend_profesional: "MinCiencia tiene recursos de Salud Telemental para intervención escolar"
  SOURCE: "Hub Salud Mental — MinCiencia"
```

---

## Limitaciones

- Las 12 cápsulas son contenido estático — no se actualizan frecuentemente.
- No hay API ni formato estructurado para integración.
- Contenido breve (cápsulas) — no tiene la profundidad de UNICEF o FAI.
- Más útil como **referencia externa** ("visita este recurso") que como fuente de reglas internas.

## Veredicto

**Sirve para recomendaciones: PARCIALMENTE.** Útil como recurso externo recomendable ("MinCiencia tiene...") y como validación institucional de que el gobierno chileno prioriza salud mental infantil. No es fuente primaria para reglas del motor.

---

> Contexto: [[hachiko-proyecto-maestro]]
> Comparación: [[motor-recomendaciones-comparacion]]
