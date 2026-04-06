---
title: "Fuente Recomendaciones — Chile Crece Contigo / PASMI"
date: 2026-04-06
tags: [producto, wellness]
status: completado
---

# Chile Crece Contigo / PASMI — Fuente para Motor de Recomendaciones

## Clasificación para el motor

| Criterio | Evaluación |
|----------|-----------|
| **Utilidad para recomendaciones** | **MEDIA** |
| **Respaldo institucional** | Máximo — Min. Desarrollo Social + FONASA |
| **Datos estructurados** | No directamente — es programa de salud pública, no contenido digital |
| **Determinístico** | No — protocolos clínicos internos, no públicos |
| **Evidencia base** | Sistema de salud pública chileno |

---

## Qué contenido sirve para recomendaciones

### 1. PASMI como referencia para derivación

PASMI atiende niños de 5-9 años con trastornos de ansiedad, ánimo y comportamiento a través del sistema público. El motor puede usarlo como recurso de derivación:

```
REGLA: IF patron_riesgo == true AND edad IN [5,6,7,8,9] AND sistema_salud == "FONASA"
  THEN recommend: "Tu hijo podría beneficiarse del programa PASMI — apoyo gratuito en salud mental para niños de 5-9 años en tu consultorio"
  LINK: crececontigo.gob.cl
  PRIORITY: alta
  SOURCE: "Chile Crece Contigo — PASMI"
```

### 2. Complemento entre sesiones clínicas

Para niños que ya están en PASMI, Hachiko Kids puede posicionarse como herramienta complementaria:

```
REGLA: IF usuario_indica_atencion_profesional == true
  THEN adjust_recomendaciones: modo "complemento clínico" — tips que refuerzan sin contradecir tratamiento
  ALSO: "Comparte los patrones de Hachiko con el profesional que atiende a tu hijo — puede ser útil para el seguimiento"
  SOURCE: "Protocolo de complemento — basado en Chile Crece Contigo"
```

---

## Limitaciones

- **Los protocolos clínicos de PASMI no son públicos** — no se puede extraer contenido directo.
- Es un programa presencial de salud pública — no tiene formato digital aprovechable.
- Solo cubre 5-9 años con FONASA — no toda la población de Hachiko Kids.
- No hay API ni contenido digital estructurado.

## Veredicto

**Sirve para recomendaciones: PARCIALMENTE, como recurso de derivación.** PASMI es importante como referencia de "a dónde ir si se necesita ayuda profesional", especialmente para familias FONASA. No es fuente de contenido para tips de crianza.

---

> Contexto: [[hachiko-proyecto-maestro]]
> Comparación: [[motor-recomendaciones-comparacion]]
