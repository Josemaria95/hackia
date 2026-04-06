---
title: "Fuente Recomendaciones — Biblioteca Digital Escolar MINEDUC"
date: 2026-04-06
tags: [producto, educacion]
status: completado
---

# Biblioteca Digital Escolar — Fuente para Motor de Recomendaciones

## Clasificación para el motor

| Criterio | Evaluación |
|----------|-----------|
| **Utilidad para recomendaciones** | **BAJA** |
| **Respaldo institucional** | Máximo — MINEDUC oficial |
| **Datos estructurados** | No — es catálogo de libros, no contenido de bienestar |
| **Determinístico** | No aplica — no tiene contenido emocional estructurado |
| **Evidencia base** | N/A para recomendaciones emocionales |

---

## Qué contenido podría servir (indirectamente)

### 1. Recomendación de lectura por estado emocional

El catálogo de 12,000+ libros podría alimentar un módulo de **bibliofilia emocional** — recomendar cuentos según el estado del niño:

```
REGLA (hipotética): IF emocion == "sad" AND edad IN [7,8,9]
  THEN recommend_libro: "¿Conocen 'El monstruo de colores'? Léanlo juntos — ayuda a nombrar emociones"
  CANAL: link a BDEscolar si el libro está en catálogo
  SOURCE: "Biblioteca Digital Escolar — MINEDUC"
```

Pero esto requiere:
1. Verificar qué títulos sobre emociones existen en el catálogo
2. Clasificarlos por emoción/situación
3. Validar disponibilidad (el catálogo cambia)

### 2. Accesibilidad como dato contextual

- Si el niño tiene modo dislexia activado → el motor sabe que hay NEE → ajustar complejidad de escenarios
- Text-to-speech disponible → recomendar audiolibros como actividad complementaria

---

## Reglas determinísticas extraíbles

```
REGLA 1: IF actividad_complementaria_requerida AND edad IN [7,8,9,10,11,12]
  THEN recommend: "Leer juntos antes de dormir fortalece el vínculo. BDEscolar tiene miles de libros gratis con el RUT de tu hijo"
  TYPE: actividad complementaria (no emocional directa)
  SOURCE: "MINEDUC — Biblioteca Digital Escolar"
```

Esto es todo. No hay más reglas extraíbles.

---

## Veredicto

**NO sirve para recomendaciones emocionales directas.** BDEscolar es una biblioteca de libros sin contenido estructurado de bienestar. Su valor es como **canal de distribución** (llegar a familias del sistema público) y como **dato contextual** (accesibilidad NEE), no como fuente de contenido para el motor de recomendaciones.

**Mejor uso**: mencionarla como recurso complementario en tips genéricos ("lee con tu hijo"), no como fuente de reglas determinísticas.

---

> Contexto: [[hachiko-proyecto-maestro]]
> Comparación: [[motor-recomendaciones-comparacion]]
