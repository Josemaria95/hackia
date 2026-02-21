---
title: "Recolección de datos de salud mental para modelos de riesgo"
aliases: [datos-salud-mental-riesgo, mental-health-risk-models, salud-mental-datos]
date: 2026-02-20
tags: [hipotesis, wellness, corporativo]
status: explorando
miro: ""
---

# Recolección de datos de salud mental para modelos de riesgo

## El problema

Las aseguradoras, mutuales y empleadores necesitan **predecir riesgo de salud mental** (burnout, depresión, ansiedad, rotación) pero dependen de datos reactivos: claims ya generados, licencias ya tomadas, renuncias ya ocurridas. Para cuando el dato existe, el daño ya está hecho.

**Los datos predictivos existen**, pero están fragmentados y son inaccesibles:

- **Cuestionarios clínicos** (PHQ-9, GAD-7, WHO-5, MBI) miden síntomas con precisión — pero las empresas los aplican una vez al año o nunca
- **Datos proxy** (ausentismo, engagement, horas extras) correlacionan con salud mental — pero nadie los cruza sistemáticamente
- **SUSESO/ISTAS-21** (obligatorio en Chile) y **NOM-035** (obligatorio en México) generan datos masivos — pero se usan para cumplimiento, no para predicción
- **Wearables** (HRV, sueño, cortisol) son los más predictivos — pero no están conectados a nada

El resultado: **USD 1 trillón/año** perdido globalmente en productividad por depresión y ansiedad no tratada (OMS). Las empresas gastan en wellness reactivo en vez de prevención basada en datos.

## Hipótesis

> Si creamos una plataforma que recolecte datos de salud mental de empleados de forma ética, continua y estructurada — cruzando cuestionarios validados, datos proxy del HRIS y señales de engagement — podemos construir modelos de riesgo que predigan burnout, depresión y rotación ANTES de que ocurran. Las aseguradoras, mutuales y empleadores pagarán por estos insights predictivos porque reducen claims y costos de rotación.

## Cómo funciona

### 1. Recolección multi-fuente

```
CUESTIONARIOS VALIDADOS          DATOS PROXY (HRIS)           ENGAGEMENT
PHQ-9, GAD-7, WHO-5             Ausentismo, rotación          Uso de la plataforma
SUSESO/ISTAS-21                 Horas extras, overtime        Frecuencia de check-ins
MBI (burnout)                   eNPS, pulse surveys           Patrones de interacción
Mini-SPIN (ansiedad social)     Uso de EAP/beneficios         Horarios de uso
         │                              │                            │
         └──────────────┬───────────────┘                            │
                        │                                            │
                   ┌────▼────────────────────────────────────────────▼──┐
                   │        PIPELINE DE DATOS UNIFICADO                 │
                   │  (normalización + encriptación + anonimización)    │
                   └────────────────────┬───────────────────────────────┘
                                        │
                        ┌───────────────┼───────────────┐
                        ▼               ▼               ▼
                   MODELO DE       DASHBOARD        BENCHMARKS
                   RIESGO          B2B              AGREGADOS
                   (predictivo)    (employer)       (industria)
```

### 2. Modelos de riesgo

- **Risk score individual** (visible solo para el empleado): "Tu nivel de riesgo de burnout es moderado — estas son acciones sugeridas"
- **Risk score agregado** (para el employer): "El equipo de Ventas tiene un 40% de riesgo alto de burnout en los próximos 3 meses"
- **Modelo actuarial** (para aseguradoras/mutuales): "Empresas con perfil X tienen Y% más de probabilidad de claims de salud mental"

### 3. Diferenciador: consentimiento y ética como feature

Inspirado en las lecciones de BetterHelp (multa USD 7.8M), Cerebral (USD 7M) y el reporte Duke University sobre venta de datos de salud mental:

- **El empleado es dueño de sus datos** — puede exportar, borrar, revocar en cualquier momento
- **El employer solo ve datos agregados** (mínimo 30 empleados por grupo) — NUNCA datos individuales
- **NUNCA se venden datos a terceros** — se venden insights y benchmarks
- **Privacy by Design** desde día 1 — preparado para Ley 21.719 (Chile, dic 2026) y GDPR

## ¿Para quién son valiosos estos datos?

| Actor | Qué quiere | Cuánto paga | Evidencia |
|-------|-----------|-------------|-----------|
| **Aseguradoras/Mutuales** | Modelos de riesgo para predecir claims de salud mental. Reducir costos de siniestralidad. | USD 1-3/asegurado/mes | Swiss Re + Wysa: partnership activa. Claims de salud mental subieron 14% entre 2022-2024. |
| **Empleadores (HR/Wellness)** | Dashboard de riesgo para prevenir burnout y rotación antes de que ocurran. ROI de intervenciones. | USD 5-15/empleado/mes | ROI: USD 3 ahorrados por cada USD 1 invertido en wellness. 95% de empresas que miden ROI ven retornos positivos. |
| **Mutuales chilenas (ACHS, IST, Mutual)** | Herramienta de intervención post-diagnóstico ISTAS-21. Datos agregados de efectividad de intervenciones. | Contrato anual | SUSESO obliga a mutuales a dar asistencia técnica. Hoy no tienen herramienta digital para intervención. |
| **Gobierno/Salud pública** | Epidemiología de salud mental laboral. Vigilancia poblacional. | Licitación pública | NIOSH recibió USD 20M para salud mental laboral. Chile fiscaliza activamente ISTAS-21. |
| **Farmacéuticas** (vía insights agregados) | Insights de mercado para antidepresivos/ansiolíticos. Poblaciones target. | Benchmarks premium | IQVIA facturó USD 15.4B en 2024 vendiendo datos de salud. |

## Modelo de negocio

```
REVENUE STREAMS:

1. SaaS B2B — Plataforma de recolección + dashboard (80%)
   USD 5-15/empleado/mes
   Incluye: cuestionarios, pipeline de datos, dashboard de riesgo,
   reportes agregados, alertas tempranas

2. Benchmarks agregados por industria (10-15%)
   Reportes anuales: "Estado de salud mental en tech Chile 2027"
   Solo datos estadísticos (N mínimo 100+ empresas)
   Compradores: consultoras, academia, gobierno

3. Partnership con mutuales/aseguradoras (5-10%)
   Mutual subsidia licencias → recibe datos de reducción de riesgo
   Modelo Swiss Re + Wysa adaptado a Chile

NUNCA:
✗ Vender datos individuales
✗ Compartir con adtech (Meta, Google, TikTok)
✗ Permitir que el employer vea datos de un empleado específico
✗ Usar datos para targeting publicitario
```

## Mercado

| Métrica | Valor | Fuente |
|---------|-------|--------|
| Pérdida global por salud mental laboral | USD 1 trillón/año | OMS |
| Corporate wellness market (global) | USD 68B | Múltiples |
| Corporate wellness market (LATAM) | USD 2B | Estimación |
| Mental health apps CAGR | 19% | Múltiples |
| Healthcare data monetization CAGR | ~15% | PharmiWeb |
| ROI de wellness corporativo | 3:1 | Wellhub |

**Mercado específico Chile**: Todas las empresas están obligadas a aplicar ISTAS-21 → ya hay presupuesto asignado para riesgos psicosociales → la puerta de entrada existe.

## Fit con el equipo

| | Edgar | Jose |
|---|-------|------|
| **Aporta** | Experiencia en CEAPSI (salud mental, coordinación de profesionales). Conoce el PIE (modelo análogo de intervención con datos). Sabe cómo funciona una licitación pública en Chile. Red en salud mental. | **Rol central.** Pipeline ETL multi-fuente (HRIS + cuestionarios + engagement). Modelos predictivos con Databricks/Spark. Dashboard B2B con Power BI. Conoce cómo empresas aprueban compras de software (ciclo de venta enterprise desde Baufest). Certificado Azure + Databricks. |
| **Gap** | No es psicólogo ni data scientist. No tiene red en aseguradoras/mutuales. | No tiene experiencia en modelos actuariales ni en el sector salud. No tiene red en RRHH ni aseguradoras. |

## Diferenciación vs. competencia

| Competidor | Qué hace | Qué le falta |
|------------|---------|-------------|
| **Spring Health** (USD 3.3B) | Assessment de 12 condiciones + terapia | No vende modelos de riesgo a terceros. No cruza con datos proxy del HRIS. |
| **Lyra Health** (USD 5.6B) | Wellness B2B2C + analytics | Analytics son internos, no vendidos como producto de datos. |
| **Betterfly** (Chile, USD 1B) | Hábitos saludables → seguros de vida | Gamificación de hábitos físicos, no salud mental. No construye modelos de riesgo. |
| **Cuéntame** (México) | IA para riesgos psicosociales (NOM-035) | Regional. No cruza con datos del HRIS. Sin modelo actuarial. |
| **IQVIA/Optum** | Brokers de datos de salud (claims) | Datos reactivos (claims ya generados). No predictivos. No tienen datos de wellness digital. Problemas éticos serios. |

**El gap**: Nadie cruza datos de cuestionarios clínicos + datos proxy del HRIS + señales de engagement digital para crear modelos de riesgo predictivos de salud mental — con un modelo ético de privacidad.

## Puerta de entrada: SUSESO/ISTAS-21

La estrategia de go-to-market más fuerte para Chile:

```
ISTAS-21 mide el PROBLEMA → datos de riesgo psicosocial (obligatorio)
                  │
                  ▼
Esta plataforma es la SOLUCIÓN → intervención + monitoreo continuo
                  │
                  ▼
Las MUTUALES lo distribuyen → ya tienen obligación de asistencia técnica
                  │
                  ▼
Los DATOS se acumulan → modelos de riesgo mejoran con cada empresa
                  │
                  ▼
BENCHMARKS por industria → nuevo asset estratégico en el mercado
```

## Riesgos principales

1. **Regulatorio**: La Ley 21.719 (Chile, dic 2026) endurece dramáticamente los requisitos para datos de salud. Mitigación: diseñar cumpliendo desde el día 1.
2. **Confianza**: Un solo incidente de privacidad destruye el negocio (ver BetterHelp). Mitigación: Privacy by Design, nunca vender datos individuales, transparencia radical.
3. **Adopción B2B en LATAM**: Ciclo de venta enterprise es largo (4-8 meses). Mitigación: entrar vía mutuales (ya tienen presupuesto y obligación) o pilotos gratuitos.
4. **Cold start de datos**: Los modelos de riesgo necesitan volumen para ser predictivos. Mitigación: empezar con cuestionarios validados (valor inmediato sin modelo) → acumular datos → construir modelos.
5. **Ético**: La línea entre "herramienta de bienestar" y "vigilancia laboral" es delgada. Mitigación: el empleado es dueño de sus datos, el employer solo ve agregados, opt-out en cualquier momento.

## Preguntas abiertas

- [ ] ¿Las mutuales chilenas (ACHS, IST, Mutual) comprarían una herramienta digital de intervención post-ISTAS-21?
- [ ] ¿Cuántos datos se necesitan para que un modelo de riesgo de burnout sea estadísticamente útil?
- [ ] ¿Las aseguradoras en LATAM ya usan modelos de riesgo de salud mental, o es demasiado temprano?
- [ ] ¿El SUSESO permitiría integrar datos de ISTAS-21 con una plataforma privada?
- [ ] ¿Existe un dataset público de claims de salud mental en Chile para entrenar un modelo inicial?
- [ ] ¿Las empresas en Chile realmente implementan intervenciones post-ISTAS-21 o solo cumplen por cumplir?

---

> Deep research detallado en [[datos-salud-mental-empleados-research]] · [[datos-salud-mental-clientes-research]]

→ Contexto: [[espacio-de-oportunidad]]
→ Equipo: [[perfil-edgar-recursos-estrategicos]] · [[perfil-jose-recursos-estrategicos]]
