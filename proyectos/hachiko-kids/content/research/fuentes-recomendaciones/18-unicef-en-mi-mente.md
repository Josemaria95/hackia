---
title: "Fuente Recomendaciones — UNICEF En Mi Mente"
date: 2026-04-06
tags: [producto, wellness]
status: completado
---

# UNICEF "En Mi Mente" — Fuente para Motor de Recomendaciones

## Clasificación para el motor

| Criterio | Evaluación |
|----------|-----------|
| **Utilidad para recomendaciones** | **BAJA** |
| **Respaldo institucional** | Máximo — UNICEF |
| **Datos estructurados** | No — podcast + artículos web |
| **Determinístico** | No — contenido narrativo, no protocolos |
| **Evidencia base** | UNICEF (basado en evidencia) |

---

## Qué contenido podría servir

### 1. Podcast como recurso externo recomendable

```
REGLA: IF padre_engagement == "alto" AND patron_preocupacion detectado
  THEN recommend: "UNICEF tiene el podcast 'En Mi Mente' — co-creado con jóvenes, con herramientas prácticas de salud mental"
  TYPE: recurso externo
  SOURCE: "UNICEF — En Mi Mente"
```

### 2. Plataforma "Una Mente Sana Importa"

Contenido de salud mental en español:

```
REGLA: IF padre_busca_mas_informacion == true
  THEN recommend: "Explora los recursos de UNICEF en 'Una Mente Sana Importa' — información confiable sobre bienestar emocional infantil"
  TYPE: recurso externo
  SOURCE: "UNICEF"
```

---

## Veredicto

**Sirve para recomendaciones: MARGINALMENTE, como recurso externo.** El podcast y la plataforma son buenos para recomendar a padres que quieren profundizar, pero no tienen la estructura necesaria para alimentar reglas determinísticas. El contenido principal de UNICEF para el motor está en [[02-unicef-chile]] (CCD, SITAN, guías).

---

> Contexto: [[hachiko-proyecto-maestro]]
> Comparación: [[motor-recomendaciones-comparacion]]
