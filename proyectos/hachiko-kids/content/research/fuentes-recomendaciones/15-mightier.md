---
title: "Fuente Recomendaciones — Mightier"
date: 2026-04-06
tags: [producto, wellness]
status: completado
---

# Mightier — Fuente para Motor de Recomendaciones

## Clasificación para el motor

| Criterio | Evaluación |
|----------|-----------|
| **Utilidad para recomendaciones** | **NULA** (como fuente de contenido) / **ALTA** (como referente de modelo) |
| **Respaldo institucional** | Máximo — Harvard Medical School + Boston Children's Hospital |
| **Datos estructurados** | Propietario — biofeedback cardíaco |
| **Determinístico** | Sí — su modelo ES determinístico (estrés cardíaco → dificultad del juego) |
| **Evidencia base** | Estudios clínicos publicados |

---

## Por qué NO sirve como fuente de contenido

Mightier es un **competidor/referente** con modelo propietario (hardware + software). Su contenido no es accesible ni replicable.

### Lo que SÍ sirve: modelo de lógica determinística

Mightier demuestra que el enfoque determinístico funciona clínicamente:

```
MODELO MIGHTIER (referencia, no copiar):
  INPUT: frecuencia cardíaca del niño (sensor físico)
  REGLA: IF heart_rate > umbral_estrés THEN juego se dificulta
  EFECTO: niño aprende a calmarse para avanzar en el juego
  RESULTADO: autorregulación medible

MODELO HACHIKO (adaptación sin hardware):
  INPUT: elecciones conductuales del niño (check-in)
  REGLA: IF choice == "impulsiva" THEN mascota reacciona con tristeza + ofrece micro-actividad
  EFECTO: niño asocia respuesta calmada con bienestar de la mascota
  RESULTADO: autorregulación vía empatía con mascota
```

La diferencia: Mightier usa **biofeedback físico** ($50/mes + hardware). Hachiko usa **biofeedback conductual** ($5/mes, sin hardware). Mismo principio determinístico, acceso 10x más barato.

---

## Veredicto

**NO sirve como fuente de recomendaciones.** Es referente y competidor (solo USA, solo inglés). Su valor es **validar que el modelo determinístico de regulación emocional funciona clínicamente** (Harvard + Boston Children's). Esto es argumento para inversores: "Mightier demostró que funciona con hardware de $50/mes. Nosotros lo hacemos accesible por $5/mes sin hardware."

---

> Contexto: [[hachiko-proyecto-maestro]]
> Comparación: [[motor-recomendaciones-comparacion]]
