---
title: "Matriz de Riesgos"
date: 2026-03-06
tags: [estrategia, wellness, corporativo]
status: en-progreso
---

# Matriz de Riesgos — Hachiko

Escala: Probabilidad (1-5) e Impacto (1-5). Score = Probabilidad x Impacto.

---

## Matriz completa

| # | Riesgo | Prob. | Impacto | Score | Mitigacion | Owner |
|---|--------|-------|---------|-------|-----------|-------|
| 1 | Mutuales no compran (burocracia, ciclo largo) | 3 | 5 | 15 | Canal directo B2B como backup; pilotos gratuitos para generar traccion sin depender de mutuales | Edgar |
| 2 | Baja participacion empleados (<40%) | 3 | 5 | 15 | Check-ins de <2 minutos; valor inmediato (tip de coaching); el pet es SUYO, no de la empresa | Ambos |
| 3 | CD8 mal implementado (pet manipulador, culpa) | 4 | 3 | 12 | Pet decae suavemente, nunca muere; recovery rapido tras reconexion; sin mensajes de culpa | Edgar |
| 4 | Abandono semana 3-4 (novelty effect) | 4 | 4 | 16 | CD7 activo (impredecibilidad y curiosidad); variedad via LLM; eventos sorpresa; evolucion del pet | Jose |
| 5 | Incidente de privacidad (leak de datos) | 2 | 5 | 10 | Privacy by Design desde dia 1; RLS en Supabase; pentesting antes de piloto; plan de DPO | Jose |
| 6 | Percepcion de vigilancia ("el pet reporta al jefe") | 3 | 5 | 15 | Mensajes explicitos de privacidad en onboarding; el pet es TUYO; datos individuales nunca visibles para HR | Ambos |
| 7 | Spring Health / Modern Health entran a Chile | 2 | 4 | 8 | Velocidad de ejecucion; canal mutual como barrera; regulacion local (ISTAS-21) como ventaja | Ambos |
| 8 | Cold start de datos (modelos sin volumen) | 4 | 3 | 12 | Thresholds simples primero (reglas, no ML); valor inicial viene del coaching, no de prediccion | Jose |
| 9 | Equipo de 2 personas (burnout fundadores) | 4 | 4 | 16 | Scope minimo viable; automatizar con IA (subagentes); aplicar a Platanus para funding y contratar | Ambos |
| 10 | Regulatorio (Ley 21.719 bloquea el modelo) | 2 | 5 | 10 | Disenar compliance desde dia 1; asesor legal temprano; datos agregados nunca re-identificables | Edgar |
| 11 | Instrumentos camuflados invalidados clinicamente | 3 | 4 | 12 | Validacion clinica temprana (Sprint 1); backup: check-ins explicitos con opt-in | Edgar |
| 12 | Platanus rechaza la aplicacion | 3 | 3 | 9 | Plan B: CORFO Semilla Inicia, angel investors chilenos, bootstrapping con primeros clientes | Ambos |

---

## Mapa de calor

### Critico (Score >15)
- **#4** — Abandono semana 3-4 (novelty effect) — Score 16
- **#9** — Equipo de 2 personas (burnout fundadores) — Score 16

### Alto (Score 12-15)
- **#1** — Mutuales no compran — Score 15
- **#2** — Baja participacion empleados — Score 15
- **#6** — Percepcion de vigilancia — Score 15
- **#3** — CD8 mal implementado — Score 12
- **#8** — Cold start de datos — Score 12
- **#11** — Instrumentos camuflados invalidados — Score 12

### Medio (Score 8-11)
- **#5** — Incidente de privacidad — Score 10
- **#10** — Regulatorio Ley 21.719 — Score 10
- **#12** — Platanus rechaza — Score 9
- **#7** — Competidores internacionales entran a Chile — Score 8

### Bajo (Score <8)
- Ninguno identificado actualmente.

---

## Top 3 prioridades de mitigacion

### Prioridad 1: Abandono por novelty effect (#4, Score 16)
- Es el riesgo mas critico porque si los empleados abandonan, no hay datos, no hay producto.
- Mitigacion activa: disenar el sistema de evolucion del pet con CD7 (impredecibilidad) desde el MVP.
- Indicador de alerta temprana: caida de >20% en check-ins semanales entre semana 2 y semana 3.
- Plan de contingencia: si ocurre en piloto, iterar mecanica antes de escalar.

### Prioridad 2: Burnout de fundadores (#9, Score 16)
- Equipo de 2 personas construyendo tech + vendiendo + validando simultaneamente.
- Mitigacion: scope minimo radical (solo lo necesario para validar H1-H5); uso intensivo de subagentes IA.
- Indicador de alerta: si alguno trabaja >60 horas/semana por >2 semanas consecutivas.
- Plan de contingencia: pausar features, priorizar solo validacion.

### Prioridad 3: Participacion y percepcion (#1, #2, #6 — empate en Score 15)
- Estos tres riesgos estan interconectados: si empleados perciben vigilancia, no participan; si no participan, HR no paga; si HR no paga, mutuales no ven valor.
- Mitigacion integrada: Privacy by Design como pilar de marca, no solo como feature tecnico.
- El messaging de privacidad debe estar en cada touchpoint: onboarding, notificaciones, dashboard.

---

## Cadencia de revision

| Frecuencia | Actividad |
|-----------|----------|
| Mensual | Revision completa de la matriz: actualizar probabilidades e impactos |
| Post-piloto | Revision especial: actualizar #1, #2, #4, #6 con datos reales |
| Pre-Platanus | Revision especial: tener mitigaciones documentadas para el pitch |

---

> Roadmap: [[roadmap]]
> Plan de validacion: [[plan-validacion]]
> Proyecto maestro: [[hachiko-proyecto-maestro]]
> Equipo: [[perfil-edgar-recursos-estrategicos]] · [[perfil-jose-recursos-estrategicos]]
