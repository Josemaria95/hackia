---
title: "Fuente Recomendaciones — Convivencia para la Ciudadanía MINEDUC"
date: 2026-04-06
tags: [producto, educacion, wellness]
status: completado
---

# Convivencia para la Ciudadanía MINEDUC — Fuente para Motor de Recomendaciones

## Clasificación para el motor

| Criterio | Evaluación |
|----------|-----------|
| **Utilidad para recomendaciones** | **MEDIA-ALTA** (para canal B2B) |
| **Respaldo institucional** | Máximo — MINEDUC oficial + Ley de Convivencia Escolar 2025 |
| **Datos estructurados** | Parcial — recursos de bienestar escolar por categoría |
| **Determinístico** | Parcial — orientaciones por situación escolar |
| **Evidencia base** | Ley de Convivencia Escolar 2025 + PBSE obligatorio |

---

## Qué contenido sirve para recomendaciones

### 1. Programas de Bienestar Socioemocional (PBSE) — Marco regulatorio

La Ley de Convivencia Escolar 2025 obliga a colegios a implementar PBSE. Esto crea demanda regulatoria que Hachiko Kids puede satisfacer:

```
REGLA B2B: IF colegio_necesita_PBSE == true
  THEN posicionar Hachiko Kids como: "Herramienta certificable para cumplir requisitos PBSE — datos de bienestar por alumno"
  SOURCE: "Ley de Convivencia Escolar 2025 — MINEDUC"
```

### 2. Recursos de bienestar y salud mental escolar

Para recomendaciones a profesionales (canal B2B clínicas/colegios):

```
REGLA B2B: IF profesional_ve_patron_grupal (baja regulación en curso completo)
  THEN recommend: "Considerar intervención de clima de aula. MINEDUC tiene orientaciones en convivenciaparaciudadania.mineduc.cl"
  SOURCE: "Convivencia para la Ciudadanía — MINEDUC"

REGLA B2B: IF colegio_PIE AND patron_bullying_detectado
  THEN recommend: "Protocolo de convivencia escolar del MINEDUC disponible para intervención inmediata"
  SOURCE: "MINEDUC — Bienestar y Salud Mental Escolar"
```

---

## Limitaciones

- Enfocado en **contexto escolar** — no en crianza/hogar. Las recomendaciones son para profesionales, no padres.
- Es marco regulatorio, no contenido de tips. Útil para posicionamiento B2B, no para motor B2C.
- Nuevo (2025) — puede cambiar en implementación.

## Veredicto

**Sirve para recomendaciones: SÍ, exclusivamente en canal B2B.** La Ley de Convivencia Escolar 2025 es el hallazgo regulatorio más importante — crea demanda obligatoria de herramientas de bienestar en colegios. Para el motor B2C (padres), no aporta tips directos.

---

> Contexto: [[hachiko-proyecto-maestro]]
> Comparación: [[motor-recomendaciones-comparacion]]
