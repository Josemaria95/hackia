---
title: "Fuente Recomendaciones — Save the Children"
date: 2026-04-06
tags: [producto, educacion, wellness]
status: completado
---

# Save the Children — Fuente para Motor de Recomendaciones

## Clasificación para el motor

| Criterio | Evaluación |
|----------|-----------|
| **Utilidad para recomendaciones** | **MEDIA-BAJA** |
| **Respaldo institucional** | Alto — ONG internacional con respaldo gubernamental |
| **Datos estructurados** | Parcial — guía de salud mental descargable con secciones |
| **Determinístico** | Parcial — la guía tiene secciones por tema pero no protocolos IF-THEN |
| **Evidencia base** | Basado en evidencia, metodología piloto→escala |

---

## Qué contenido sirve para recomendaciones

### 1. Guía de Salud Mental y Emocional

Recurso descargable con secciones por tema:

| Sección de la guía | Señal en Hachiko | Recomendación extraíble |
|---|---|---|
| Ansiedad infantil | Emoción "scared" recurrente | "La ansiedad es una alarma que a veces se activa sin peligro real. Ayúdale a nombrarla: 'Parece que tu alarma se encendió'" |
| Regulación emocional | Baja regulación en check-ins | "Los niños aprenden a regular emociones de los adultos que los rodean. Tu calma es su modelo" |
| Señales de alerta | Patrón de riesgo (múltiples indicadores) | "Algunas señales sugieren que tu hijo podría beneficiarse de apoyo profesional" |

**Fuente**: https://www.savethechildren.es/escuela/guia/salud-mental-emocional-ninos-ninas-adolescentes

### 2. Modelo piloto → evidencia → escala

No es contenido para el motor pero informa la metodología de validación:
- Probar recomendaciones en grupo pequeño → medir efectividad → escalar las que funcionan.

---

## Reglas determinísticas extraíbles

```
REGLA 1: IF emocion == "scared" > 3 veces/semana AND edad IN [6,7,8]
  THEN recommend: "La ansiedad es como una alarma que se enciende sin peligro. Dile: 'Tu alarma se encendió, pero estás seguro/a conmigo'"
  SOURCE: "Basado en guía de salud mental — Save the Children"

REGLA 2: IF padre_engagement alto AND patron_positivo sostenido
  THEN recommend: "Estás haciendo un gran trabajo observando a tu hijo. La disciplina positiva es un camino, no un destino"
  TYPE: refuerzo al padre
  SOURCE: "Save the Children — Disciplina Positiva"
```

---

## Limitaciones

- **Presencia limitada en Chile** — los programas son principalmente de España. Las recomendaciones tendrían menos resonancia local.
- La guía es general, no específica para el formato app/gamificación.
- No tiene instrumentos de medición propios adaptables.
- Sin API ni datos estructurados.

## Veredicto

**Sirve para recomendaciones: PARCIALMENTE.** La guía de salud mental emocional tiene contenido útil pero genérico. Mejor como fuente complementaria para tips sobre ansiedad y disciplina positiva. No es fuente primaria — MINEDUC y UNICEF tienen contenido más específico y con mayor respaldo local.

---

> Contexto: [[hachiko-proyecto-maestro]]
> Comparación: [[motor-recomendaciones-comparacion]]
