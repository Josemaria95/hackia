---
title: "Plan de Validacion"
date: 2026-03-06
tags: [estrategia, wellness]
status: en-progreso
---

# Plan de Validacion — Hachiko

Hipotesis ordenadas por nivel de riesgo (de mayor a menor). Cada hipotesis tiene un test definido, metrica de exito y timeline.

Metodologia general: Lean Startup (build-measure-learn), entrevistas Jobs-to-be-Done, smoke tests y concierge MVP.

---

## H1 — La mas riesgosa

**"Los empleados usaran voluntariamente una app con mascota virtual para hacer check-ins diarios de salud mental, con una tasa de participacion >60% sostenida por 30+ dias."**

- **Test**: Piloto con 50-100 empleados en 1-2 empresas reales.
- **Metricas**:
  - Tasa de participacion (% de empleados registrados que hacen al menos 1 check-in/semana).
  - Frecuencia de check-ins por empleado por semana.
  - Curva de retencion: Dia 7, Dia 14, Dia 30.
- **Criterio de exito**: >60% de participacion semanal al Dia 30.
- **Criterio de fracaso**: <30% al Dia 14.
- **Timeline**: Sprint 2 (semanas 3-4).
- **Owner**: Ambos.

---

## H2

**"Los HR managers pagaran $6-14 USD/empleado/mes por datos agregados de riesgo de salud mental presentados en un dashboard."**

- **Test**: Presentar mockup del dashboard + resultados del piloto a 5 HR managers. Preguntar disposicion a pagar y sensibilidad al precio.
- **Metricas**:
  - Numero de HR managers que dicen "si pagaria".
  - Rango de precio aceptable (Van Westendorp o pregunta directa).
  - Objeciones principales.
- **Criterio de exito**: Al menos 3 de 5 HR managers confirman disposicion a pagar en el rango $6-14.
- **Criterio de fracaso**: 0-1 de 5 dispuestos a pagar.
- **Timeline**: Sprint 2 (semanas 3-4), despues de tener datos del piloto.
- **Owner**: Edgar.

---

## H3

**"Los instrumentos clinicos camuflados (WHO-5, PHQ-2 integrados como interacciones con la mascota) producen senales validas de salud mental comparables con los instrumentos estandar."**

- **Test**: Revision por asesor clinico (psicologo organizacional) de los instrumentos camuflados. Correlacion con instrumentos estandar si es posible en el piloto.
- **Metricas**:
  - Validacion o rechazo por parte del asesor clinico.
  - Correlacion entre respuestas camufladas y respuestas estandar (si se mide en paralelo).
- **Criterio de exito**: El asesor clinico confirma que los instrumentos camuflados capturan las dimensiones correctas.
- **Criterio de fracaso**: El asesor clinico indica que la camuflacion distorsiona las respuestas de forma significativa.
- **Timeline**: Sprint 1-2 (semanas 1-4).
- **Owner**: Edgar (contacto con clinicos).

---

## H4

**"Las mutuales necesitan y adoptaran una herramienta digital de prevencion continua post-ISTAS-21."**

- **Test**: Entrevistar a 2-3 contactos en mutuales (ACHS, Mutual de Seguridad, IST). Entender su proceso actual, presupuesto y disposicion a adoptar herramientas externas.
- **Metricas**:
  - Nivel de interes (escala cualitativa: frio/tibio/caliente).
  - Confirmacion de presupuesto disponible.
  - Timeline de decision de la mutual.
- **Criterio de exito**: Al menos 1 mutual muestra interes activo y tiene presupuesto.
- **Criterio de fracaso**: Las 3 mutuales indican que no compran herramientas externas o que el ciclo es >12 meses.
- **Timeline**: Mes 2-3.
- **Owner**: Edgar.

---

## H5

**"El equipo puede construir un MVP funcional en 4 semanas."**

- **Test**: Ejecucion real de Sprint 1 y Sprint 2.
- **Metricas**:
  - MVP deployado y funcionando.
  - Features minimas: mascota, check-in, dashboard basico.
  - Testeabilidad: al menos 10 personas pueden usarlo.
- **Criterio de exito**: MVP funcional deployado al final de la semana 4.
- **Criterio de fracaso**: Al final de la semana 4 no hay app usable.
- **Timeline**: Sprint 1 (semanas 1-2) + Sprint 2 (semanas 3-4).
- **Owner**: Jose (tech), Edgar (contenido y diseno).

---

## Metodos de validacion

### Lean Startup (Build-Measure-Learn)
- Construir lo minimo necesario para testear cada hipotesis.
- Medir con metricas cuantitativas definidas arriba.
- Aprender y decidir: GO / NO-GO / PIVOTAR.

### Entrevistas Jobs-to-be-Done
- Para H2 y H4: entender el "job" que HR y mutuales necesitan resolver.
- Formato semi-estructurado, 30-45 minutos.
- Guia detallada en [[guia-entrevistas]].

### Smoke Tests
- Para H1: antes del piloto completo, testear con 5-10 personas cercanas si la mecanica de la mascota genera engagement.
- Landing page con video conceptual para medir interes.

### Concierge MVP
- Si el MVP tech no esta listo a tiempo, hacer check-ins manuales via WhatsApp con la misma estructura (mascota como sticker + preguntas).
- Permite validar H1 sin depender de H5.

---

## Orden de ejecucion

```
Semana 1-2 (Sprint 1):
  H5: Construir MVP
  H3: Contactar asesor clinico, enviar instrumentos para revision

Semana 3-4 (Sprint 2):
  H1: Piloto con empleados
  H2: Entrevistas con HR managers
  H5: Iterar MVP basado en feedback

Mes 2-3:
  H4: Entrevistas con mutuales
  H1/H2: Analisis de resultados del piloto
```

---

## Decision framework

Al finalizar cada hipotesis:

| Resultado | Accion |
|-----------|--------|
| **GO** (metricas superan criterio de exito) | Avanzar a siguiente etapa |
| **NO-GO** (metricas por debajo del criterio de fracaso) | Pivotar o descartar |
| **ZONA GRIS** (entre ambos criterios) | Iterar con cambios y re-testear |

Los resultados se documentan en [[resultados]].

---

> Resultados: [[resultados]]
> Encuesta empleados: [[encuesta-empleados]]
> Guia de entrevistas: [[guia-entrevistas]]
> Proyecto maestro: [[hachiko-proyecto-maestro]]
> Equipo: [[perfil-edgar-recursos-estrategicos]] · [[perfil-jose-recursos-estrategicos]]
