---
title: "Fuente Recomendaciones — EducarChile"
date: 2026-04-06
tags: [producto, educacion, wellness]
status: completado
---

# EducarChile — Fuente para Motor de Recomendaciones

## Clasificación para el motor

| Criterio | Evaluación |
|----------|-----------|
| **Utilidad para recomendaciones** | **MEDIA** |
| **Respaldo institucional** | Alto — Fundación Chile + MINEDUC |
| **Datos estructurados** | Parcial — artículos y cursos, no protocolos paso a paso |
| **Determinístico** | Parcial — habilidades definidas (CASEL-like) pero sin reglas explícitas |
| **Evidencia base** | Bases Curriculares de Orientación + priorización curricular 2023-2025 |

---

## Qué contenido sirve para recomendaciones

### 1. Marco de habilidades socioemocionales

EducarChile define 5 habilidades socioemocionales alineadas con el currículum:

| Habilidad EducarChile | Dimensión Hachiko | Regla posible |
|---|---|---|
| Autoconocimiento | Ánimo general | IF niño elige misma emoción siempre → "Explorar más emociones con tu hijo. Pregunta: '¿Cómo te sentiste cuando...?'" |
| Autogestión | Regulación emocional | IF regulación baja → "Enseña la técnica de 'parar y pensar': cuenta hasta 5 antes de actuar" |
| Conciencia social | Socialización | IF socialización baja → "Juegos cooperativos ayudan. EducarChile recomienda actividades donde todos ganan" |
| Relaciones interpersonales | Conducta prosocial | IF prosocial alta → refuerzo: "Tu hijo muestra empatía — nombra lo que hace bien" |
| Toma de decisiones responsable | Seguimiento instrucciones | IF instrucciones baja → "Ofrece 2 opciones válidas en vez de una orden. Decidir fortalece la autonomía" |

### 2. Contenido de convivencia escolar (canal B2B)

Para recomendaciones dirigidas a profesionales (no padres):

```
REGLA B2B: IF colegio_usuario == true AND patron_agresion detectado
  THEN recommend_profesional: "Revisar estrategias de EducarChile para convivencia escolar: mediación entre pares"
  SOURCE: "EducarChile — Convivencia escolar y bienestar colectivo"

REGLA B2B: IF multiples_ninos_mismo_curso con baja_socializacion
  THEN recommend_profesional: "Patrón grupal detectado — considerar intervención de clima de aula"
  SOURCE: "EducarChile — Salud mental y convivencia escolar"
```

### 3. Asignatura de Orientación (curricular)

La priorización curricular 2023-2025 mantiene Orientación como asignatura. Esto legitima que Hachiko Kids puede declarar:
> "Alineado con los objetivos de la asignatura de Orientación del currículum nacional chileno"

---

## Reglas determinísticas extraíbles

```
REGLA 1: IF dimension_socializacion < 40% AND edad IN [7,8,9]
  THEN recommend: "A esta edad las amistades se vuelven importantes. Invita a un amigo a casa — el juego 1:1 es más fácil que en grupo"
  SOURCE: "EducarChile — Habilidades sociales en la infancia"

REGLA 2: IF dimension_regulacion mejorando (tendencia positiva 2+ semanas)
  THEN recommend: "Tu hijo está aprendiendo a manejar sus emociones. Sigue nombrando lo que observas: 'Vi que te calmaste solo, eso es difícil y lo hiciste bien'"
  TYPE: refuerzo positivo
  SOURCE: "EducarChile — Educación emocional"
```

---

## Limitaciones

- **Audiencia es docentes, no padres** — los recursos no están diseñados para tips parentales directos. Requieren traducción de lenguaje profesional a lenguaje de crianza.
- Sin protocolos paso a paso — son artículos y cursos, no fichas accionables como MINEDUC Parvularia.
- Sin API ni datos estructurados — todo es contenido web.
- Más útil como **referencia de legitimación** que como fuente directa de reglas.

---

## Veredicto

**Sirve para recomendaciones: PARCIALMENTE.** Mejor como marco de referencia y legitimación curricular que como fuente directa de tips. Las 5 habilidades socioemocionales son un buen framework para organizar las dimensiones, pero las recomendaciones específicas deben venir de fuentes más accionables (MINEDUC Parvularia, UNICEF, FAI).

---

> Contexto: [[hachiko-proyecto-maestro]]
> Comparación: [[motor-recomendaciones-comparacion]]
