---
title: "Tandem: At-Home Behavior Assessment Using Multimodal Signals from the Parent-Child Dyad"
date: 2026-04-01
tags: [similar-hachiko, behavioral-assessment, parent-child, mobile-app, machine-learning, audio, at-home, screening]
status: verificado
fuente: Proceedings of the ACM on Interactive Mobile Wearable and Ubiquitous Technologies (IMWUT)
year: 2025
---

# Tandem: Evaluación Conductual en Casa Usando Señales Multimodales Padre-Hijo

## Referencia completa

**Autores:** Manasa Kalanadhabhatta, Tauhidur Rahman, Adam S. Grabell, Deepak Ganesan

**Año:** 2025 (publicado diciembre 2025)

**Revista:** Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies (IMWUT / UbiComp)

**DOI:** 10.1145/3770705

**URL:** https://dl.acm.org/doi/10.1145/3770705

**Disponibilidad:** ACM Digital Library. Verificar acceso abierto.

**Calidad:** Revisado por pares. IMWUT/UbiComp es la conferencia/journal de mayor impacto en computación ubicua e interacción móvil.

---

## Resumen

Tandem es una aplicación de smartphone que permite sesiones de juego estructurado en casa para realizar evaluaciones conductuales de alta precisión y escalables. Captura señales de audio y fisiológicas durante sesiones de juego padre-hijo, y usa machine learning para clasificar el riesgo conductual en niños pequeños. La investigación demuestra que las características de interacción diádica (padre-hijo juntos) son más predictivas que las características individuales por separado.

---

## Qué hace exactamente

- **Plataforma**: Aplicación de smartphone.
- **Mecánica**: El niño y el padre juegan juntos (sesión de juego estructurado). La app graba audio y datos fisiológicos durante la sesión.
- **Procesamiento**: Algoritmos de ML extraen características de la interacción diádica (cómo se coordinan padre e hijo vocalmente) y características fisiológicas (sincronía).
- **Evaluación**: Clasifica el riesgo conductual automáticamente, sin que el padre complete cuestionarios.
- **Resultados de ML**:
  - Características de audio diádico: **F1 = 0.87**
  - Características de sincronía fisiológica: **F1 = 0.91**

---

## Población objetivo

- **Edad:** Niños pequeños (rango no especificado explícitamente, pero contexto sugiere preescolares / edad escolar temprana).
- **N:** No especificado en los resultados del abstract disponible.
- **Diagnóstico:** Conducta en riesgo (sin diagnóstico previo necesario).

---

## Resultados y validación

- Clasificación de riesgo conductual con F1=0.87 usando solo señales de audio durante juego padre-hijo.
- Sincronía fisiológica alcanza F1=0.91.
- Las características diádicas superan significativamente a las características individuales (del niño o del padre por separado).
- Sentada las bases para herramientas de screening conductual en casa, automatizadas y no intrusivas.

---

## Similitudes con Hachiko Kids

- **Evaluación conductual en casa** — mismo ambiente (doméstico, no clínico).
- **Sin cuestionarios directos** — los datos se generan de la interacción natural, como en Hachiko donde el niño "juega" y genera logs.
- **Machine learning sobre logs de interacción** — exactamente el enfoque futuro de Hachiko (ML sobre logs de check-in).
- **Screening automático** — el sistema detecta riesgo sin intervención del clínico, análogo a los patrones que Hachiko reporta al padre.
- **Papel activo del padre** — el padre es parte del sistema de captura de datos.

---

## Diferencias con Hachiko Kids

- **Sin mascota** — Tandem no gamifica la experiencia para el niño.
- **Señales pasivas** (audio + fisiología) vs. señales activas de Hachiko (elecciones, emociones seleccionadas).
- **Requiere sensores fisiológicos** — más complejo que solo una app.
- **No hay dashboard para padres** — los datos van al sistema de clasificación, no a una interfaz de resumen para padres.
- **Sin reporte de emociones por el niño** — captura señales externas, no auto-reporte.
- **Sesión puntual de juego estructurado** vs. monitoreo diario longitudinal de Hachiko.

---

## Limitaciones reportadas

- Requiere sensores fisiológicos además del smartphone — barrera de adopción.
- Privacidad: graba audio de interacciones familiares — problema ético sensible.
- Sin seguimiento longitudinal en el paper publicado.
- Validación contra escalas clínicas no detallada en el abstract disponible.

---

## Por qué es relevante para Hachiko

Tandem demuestra que **los datos de interacción padre-hijo en casa, procesados con ML, predicen riesgo conductual con alta precisión**. Esto valida la premisa de Hachiko de que los datos del juego diario pueden detectar patrones conductuales. La diferencia clave: Hachiko usa señales activas (elecciones del niño en escenarios) que son más interpretables y no requieren sensores externos ni grabación de audio — menor barrera de adopción y menos fricción ética.
