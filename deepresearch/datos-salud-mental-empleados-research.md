---
title: "Deep Research: Datos de salud mental de empleados — mercado, actores y regulación"
aliases: [datos-salud-mental, mental-health-data, employee-wellness-data]
date: 2026-02-20
tags: [mercado, wellness, corporativo]
status: explorando
miro: ""
---

# Deep Research: Datos de salud mental de empleados — mercado, actores y regulación

> Investigación exhaustiva sobre qué datos de salud mental de empleados existen, quién los valora, quién los recolecta/vende, y cuál es el marco legal. Preparada como insumo estratégico para [[2026-02-20-ruta-viva-salud-mental-cultural-b2b2c|Ruta Viva]].

---

## 1. ¿Qué datos de salud mental de un empleado existen?

Los datos de salud mental de empleados se pueden clasificar en cuatro grandes categorías según su naturaleza, fuente y sensibilidad.

### 1.1 Datos directos: cuestionarios y escalas clínicas validadas

Instrumentos estandarizados usados en programas de wellness corporativo, EAPs, o investigación:

| Instrumento | Qué mide | Items | Tiempo | Uso típico |
|---|---|---|---|---|
| **PHQ-9** (Patient Health Questionnaire) | Depresión (9 síntomas DSM-5). Scores 0-27: leve (5), moderado (10), severo (20+) | 9 | 3 min | Screening en EAPs, plataformas digitales |
| **GAD-7** (Generalized Anxiety Disorder) | Ansiedad generalizada. Scores 0-21. | 7 | 2 min | Screening corporativo, apps de wellness |
| **WHO-5** (Well-Being Index) | Bienestar general. Validado en español por OMS. | 5 | 2 min | Check-ins periódicos, reportes B2B |
| **UCLA Loneliness Scale (ULS-8)** | Soledad subjetiva. Confiabilidad α = .84-.94. | 8 | 2 min | Programas de conexión social |
| **Maslach Burnout Inventory (MBI)** | Burnout (agotamiento emocional, despersonalización, realización personal) | 22 | 10 min | Investigación, programas de prevención |
| **SUSESO/ISTAS-21** (Chile) | Riesgos psicosociales laborales (5 dimensiones). Validado en Chile. | 20 (corta) / 139 (completa) | 5-30 min | **Obligatorio** en Chile para todas las empresas |
| **Mini-SPIN** | Ansiedad social (screening rápido) | 3 | 1 min | Onboarding en apps |
| **Big Five — Openness (BFI-2-XS)** | Apertura a la experiencia | 3 | 1 min | Perfiles de personalidad |
| **LSAS** (Liebowitz Social Anxiety Scale) | Ansiedad social detallada | 24 | 10 min | Evaluación clínica |
| **K10/K6** (Kessler) | Distress psicológico general | 10/6 | 3 min | Vigilancia epidemiológica poblacional |

**Fuentes**: [NAM — Survey Instruments for Burnout](https://nam.edu/product/valid-and-reliable-survey-instruments-to-measure-burnout-well-being-and-other-work-related-dimensions/), [SUSESO/ISTAS-21](https://www.suseso.cl/606/w3-article-19640.html), [PHQ-9 MDCalc](https://www.mdcalc.com/calc/1725/phq9-patient-health-questionnaire9).

### 1.2 Datos indirectos / proxy: señales del comportamiento laboral

Datos que no miden salud mental directamente pero son **correlatos fuertes**:

| Tipo de dato                           | Fuente                                                         | Qué indica                                                                                                                    | Sensibilidad |
| -------------------------------------- | -------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ------------ |
| **Ausentismo**                         | HRIS (Workday, BambooHR, SAP)                                  | Depresión, burnout, ansiedad. Depresión causa ~$44B/año en ausentismo solo en EE.UU.                                          | Media        |
| **Presentismo**                        | Output/hora, tasas de error, deliverables vs. horas trabajadas | Empleados presentes pero operando bajo capacidad. Costos ocultos superan al ausentismo.                                       | Media        |
| **Rotación de personal**               | HRIS                                                           | Burnout, insatisfacción, problemas de cultura                                                                                 | Baja         |
| **Engagement scores**                  | Pulse surveys (Qualtrics, Culture Amp, Glint/Viva)             | Correlación directa con bienestar. Top quartile = +18% productividad, +23% profitabilidad ([Gallup](https://www.gallup.com)). | Media        |
| **eNPS** (Employee Net Promoter Score) | Encuestas internas                                             | Proxy de bienestar y sentido de pertenencia                                                                                   | Baja         |
| **Uso de beneficios EAP**              | Plataforma EAP                                                 | Tasa de utilización típica: 3-5% (EAP tradicional) vs. 20%+ (plataformas modernas como Spring Health)                         | Alta         |
| **Horas trabajadas / overtime**        | Sistemas de tracking, calendarios                              | Riesgo de burnout                                                                                                             | Media        |
| **Patrones de comunicación**           | Slack/Teams analytics (con consentimiento)                     | Aislamiento social, desconexión del equipo                                                                                    | Media-Alta   |
| **Uso de licencias médicas**           | HRIS + mutuales de seguridad                                   | Frecuencia y duración de licencias por salud mental                                                                           | Alta         |

**Fuentes**: [AIHR — Employee Wellbeing Metrics](https://www.aihr.com/blog/employee-wellbeing-metrics/), [Workhuman — Wellbeing Metrics](https://www.workhuman.com/blog/employee-wellbeing-metrics/), [Modern Health — Cost of Poor Mental Health](https://www.modernhealth.com/post/cost-of-poor-mental-health-in-workplace).

### 1.3 Datos biométricos: wearables y sensores

| Tipo de dato | Dispositivo | Qué indica sobre salud mental | Sensibilidad |
|---|---|---|---|
| **HRV** (Heart Rate Variability) | Apple Watch, Oura, Whoop, Garmin | Estrés, activación del sistema nervioso autónomo. HRV bajo = estrés crónico. | Alta |
| **Patrones de sueño** | Todos los wearables | Insomnio correlaciona con depresión y ansiedad. Calidad de sueño = predictor de burnout. | Alta |
| **Actividad física** | Fitbit, Apple Watch, Whoop | Sedentarismo correlaciona con depresión. Reducción de actividad = señal de alerta. | Media |
| **Cortisol** | Apple Watch Series X (2025, nuevo) | Estrés fisiológico directo. Primera medición no invasiva de cortisol en wearable consumer. | Muy alta |
| **EDA** (Electrodermal Activity) | Fitbit Sense, Empatica | Respuesta de estrés agudo | Alta |
| **Temperatura corporal** | Oura, Apple Watch | Alteraciones circadianas vinculadas a trastornos del ánimo | Media |

**Mercado de dispositivos de tracking de estrés**: USD 2,843M en 2025, proyectado a USD 5,291M para 2035 (CAGR 6.4%) — [Future Market Insights](https://www.futuremarketinsights.com/reports/stress-tracking-devices-market).

**Fuentes**: [Thryve — Stress-Detecting Wearables](https://www.thryve.health/blog/stress-detecting-wearables), [MDPI — Smartwatches for Stress](https://www.mdpi.com/1999-4893/18/7/419).

### 1.4 Datos de plataformas digitales

| Tipo de dato | Fuente | Qué indica | Sensibilidad |
|---|---|---|---|
| **Frecuencia de uso de app de meditación** | Headspace, Calm | Engagement con wellness, pero también posible señal de estrés | Media |
| **Temas de terapia digital** | Spring Health, Lyra, BetterHelp, Talkspace | Condiciones específicas (ansiedad, depresión, trauma, relaciones) | Muy alta |
| **Resultados de assessments clínicos** | Spring Health (12 condiciones), Lyra | Diagnósticos de salud mental | Muy alta |
| **Progreso terapéutico** | Woebot, Wysa (CBT digital) | Evolución de síntomas | Muy alta |
| **Patrones de uso de app** | Cualquier app de wellness | Horarios de uso, frecuencia, abandono, sesiones nocturnas | Media |
| **Transcripciones de chatbot** | Wysa, Woebot, Talkspace | Contenido emocional explícito | Muy alta |
| **Claims de seguros** | Aseguradoras, Optum | Diagnósticos CIE-10, prescripciones, hospitalizaciones por salud mental | Muy alta |

**Fuentes**: [Spring Health — Assessment](https://www.springhealth.com/blog/what-is-an-eap), [OpenUp — EAP Guide](https://openup.com/blog/what-is-an-eap-employee-assistance-programme/).

### Tabla resumen: clasificación de datos

| Categoría | Tipo de dato | Fuente | Sensibilidad | Facilidad de recolección |
|---|---|---|---|---|
| **Directos** | PHQ-9, GAD-7, WHO-5, MBI | Cuestionarios en apps/plataformas | **Alta** | Media (requiere participación voluntaria) |
| **Directos** | SUSESO/ISTAS-21 | Protocolo obligatorio Chile | **Alta** | Alta (obligatorio por ley) |
| **Proxy** | Ausentismo, rotación, engagement | HRIS, pulse surveys | **Media** | Alta (ya se recolecta) |
| **Proxy** | Productividad, horas extras | Sistemas de tracking | **Media** | Alta |
| **Biométricos** | HRV, sueño, actividad, cortisol | Wearables | **Alta** | Baja (requiere dispositivo + consentimiento) |
| **Plataforma** | Uso de EAP, terapia digital | Proveedores de wellness | **Muy alta** | Media (depende de adopción) |
| **Plataforma** | Claims de salud mental | Aseguradoras | **Muy alta** | Baja (datos propietarios) |
| **Plataforma** | Transcripciones, chat logs | Apps de terapia digital | **Muy alta** | Media (se genera automáticamente) |

---

## 2. ¿Para quién son valiosos estos datos?

### 2.1 Empresas / Empleadores

**¿Por qué les importa?**

El costo de NO atender la salud mental de los empleados es enorme:

| Métrica | Valor | Fuente |
|---|---|---|
| Pérdida global por depresión y ansiedad laboral | **USD 1 trillón/año** en productividad perdida | [OMS](https://www.who.int/news-room/fact-sheets/detail/mental-health-at-work) |
| Costo de salud mental no tratada (EE.UU.) | **USD 477.5B** anuales para la economía | [Deloitte](https://www.deloitte.com/us/en/insights/industry/health-care/economic-burden-mental-health-inequities.html) |
| Costo de enfermedad mental (EE.UU.) | **USD 282B** anuales (equivalente a una recesión promedio) | [Yale](https://news.yale.edu/2024/04/22/novel-study-quantifies-immense-economic-costs-mental-illness-us) |
| Caída de productividad por depresión no tratada | **35%** | [Modern Health](https://www.modernhealth.com/post/cost-of-poor-mental-health-in-workplace) |
| Costo de ausentismo por depresión (EE.UU.) | **USD 44B/año** | [CareATC](https://www.careatc.com/blog/the-hidden-productivity-costs-of-mental-health-in-the-workplace) |
| Costo global del burnout en healthcare | **USD 322B/año** | [PLANSPONSOR](https://www.plansponsor.com/the-workplace-mental-health-crisis-of-2025/) |
| Proyección exceso de gasto por inequidad en salud mental (EE.UU., 2040) | **>USD 1.3 trillón** | [Deloitte](https://www.deloitte.com/us/en/insights/industry/health-care/economic-burden-mental-health-inequities.html) |

**¿Qué métricas usan hoy?**
- Ausentismo, rotación, engagement (eNPS), uso de EAP, costos de healthcare.
- **Lo que les falta**: datos predictivos (quién va a tener burnout antes de que pase), correlación entre intervenciones específicas y resultados, métricas de conexión social y cultura.

**¿Cuánto pagarían?**
- Plataformas de wellness B2B2C: USD 5-15/empleado/mes (USD 60-180/año).
- ROI esperado: **USD 3 ahorrados por cada USD 1 invertido** ([Wellhub](https://wellhub.com/en-us/blog/press-releases/study-reveals-strong-return-on-investment-for-corporate-wellness-programs/)).
- 95% de empresas que miden ROI ven retornos positivos. 77% reportan ROI >100%.

### 2.2 Aseguradoras de salud

**¿Cómo usan datos de salud mental?**

Las aseguradoras están cada vez más interesadas en datos de salud mental por tres razones:

1. **Pricing/Risk Assessment**: Los claims de salud mental van en aumento. El costo por paciente subió **14% entre 2022 y 2024** ([Holmes Murphy](https://www.holmesmurphy.com/blog/evolving-mental-health-coverage-in-2025/)).

2. **Reducción de claims**: Programas de wellness reducen claims médicos en **USD 190 por cada USD 100 invertidos** (ROI 1.9x). La reducción neta de claims es del **13.5%** ([PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC11800021/)).

3. **Prevención como estrategia de negocio**: La salud mental es comorbilidad con condiciones físicas crónicas. Tratar la salud mental reduce gastos en salud física por vías biológicas directas e indirectas (mejores hábitos de salud).

**Ejemplo concreto: Swiss Re + Wysa**

Swiss Re (la reaseguradora más grande del mundo) se asoció con Wysa para crear **Wysa Assure**, una app de salud mental diseñada específicamente para aseguradoras:
- Usa chatbot de IA basado en terapia cognitivo-conductual.
- Incluye un **sistema propietario de risk scoring** de salud mental.
- Acelera el retorno al trabajo, reduciendo costos de claims de discapacidad.
- Ya está disponible en tres continentes con aseguradoras como MassMutual (EE.UU.), Ascenda (Australia), y Momentum (Sudáfrica).
- **Fuente**: [Swiss Re — Wysa Assure](https://www.swissre.com/reinsurance/our-capabilities/life-health-re/wysa-assure-insurance-mental-wellbeing-app.html).

**¿Compran datos de terceros?**

Sí. Optum (subsidiaria de UnitedHealth) opera una base de datos masiva de claims (Clinformatics Data Mart) con datos desidentificados de médicos, farmacia y laboratorio desde el año 2000. Las aseguradoras también compran datos agregados de plataformas de wellness para ajustar sus modelos actuariales.

### 2.3 Agencias de viajes / Travel industry

**¿Les interesan datos de bienestar de empleados?**

El cruce wellness-travel es un mercado en explosión:

| Métrica | Valor | Fuente |
|---|---|---|
| Mercado global de wellness travel | **USD 1.3 trillón** proyectado 2025 | Global Wellness Institute |
| Mercado de bleisure travel | **USD 816B** en 2025, proyectado USD 962B en 2026 | [Corporate Traveler](https://www.corporatetraveler.us/en-us/resources/insights/wellness-trends-business-travel) |
| % viajeros de negocios que mezclan leisure | **54%** tomaron 2+ viajes bleisure en 2024 | Corporate Traveler |
| % que quieren extender viaje de negocios | **89%** | Corporate Traveler |

**¿Hay conexión entre wellness corporativo y travel?**

Sí, en múltiples formas:
- **Incentive travel**: Wellness retreats como recompensa para top performers. "A diferencia de rewards financieros que se olvidan rápido, un wellness retreat permite recargar energía genuinamente" ([BeFitreat](https://befitreat.com/why-employee-wellness-retreats-are-the-new-corporate-benefit/)).
- **Corporate wellness retreats**: Empresas asociándose con hoteles/destinos wellness para offsites que combinan trabajo + bienestar (masajes, meditación, fitness, naturaleza).
- **Bleisure**: El 89% de viajeros corporativos quieren extender su viaje para incluir ocio.

**¿Usan datos de bienestar para personalizar viajes?** No directamente aún. Pero la tendencia hacia **personalización AI-driven** en travel abre la puerta a recomendar destinos y experiencias basándose en perfiles de bienestar. Este es exactamente el cruce que Ruta Viva podría explotar.

### 2.4 Gobierno / Salud pública

**¿Los gobiernos compran datos agregados de salud mental poblacional?**

No los "compran" en el sentido comercial, pero sí los recolectan y usan extensivamente:

**Estados Unidos — NIOSH/CDC**:
- NIOSH desarrolló el **Worker Well-Being Questionnaire (WellBQ)** para evaluación integrada del bienestar laboral.
- Recibió **USD 20M** del American Rescue Plan Act (2021) para una campaña nacional sobre salud mental de trabajadores de salud.
- Mantiene programas de vigilancia epidemiológica ocupacional con datos centralizados.
- **Fuente**: [NIOSH Data Gateway](https://www.cdc.gov/niosh/data/).

**Unión Europea — EU-OSHA**:
- Programa europeo de vigilancia de riesgos psicosociales en el trabajo.
- Encuestas ESENER (European Survey of Enterprises on New and Emerging Risks).

**Chile — SUSESO + Mutuales de Seguridad**:
- El **Protocolo de Vigilancia de Riesgos Psicosociales** (obligatorio desde 2013) genera una base de datos nacional masiva.
- El instrumento SUSESO/ISTAS-21 se aplica a **todas las empresas en Chile**.
- Los datos son procesados por las mutuales administradoras (ACHS, IST, Mutual de Seguridad).
- La Dirección del Trabajo y SUSESO fiscalizan el cumplimiento — en una operación fiscalizaron **140 empresas** simultáneamente.
- Desde septiembre 2016 (Circular N° 3243), las mutuales tienen responsabilidades explícitas en asistencia técnica y seguimiento.
- **Fuentes**: [SUSESO — ISTAS-21](https://www.suseso.cl/606/w3-article-19640.html), [Dirección del Trabajo](https://www.dt.gob.cl/portal/1626/w3-article-109081.html), [Mutual.cl](https://www.mutual.cl).

**México — NOM-035**:
- La NOM-035-STPS-2018 obliga a **todas las empresas en México** a identificar, analizar y prevenir factores de riesgo psicosocial.
- Evaluaciones obligatorias cada 2 años.
- Multas por incumplimiento: USD 1,364 a USD 27,291.
- **Fuente**: [DOF — NOM-035](https://www.dof.gob.mx/nota_detalle.php?codigo=5541828&fecha=23/10/2018).

### 2.5 Farmacéuticas

**¿Usan datos de salud mental?**

Sí, extensivamente a través de intermediarios de datos:

- **IQVIA** (33% del mercado global de health analytics): Ofrece Data-as-a-Service con datos de prescripciones, claims y EHR. Las farmacéuticas usan esto para:
  - Identificar poblaciones target para antidepresivos y ansiolíticos.
  - Medir market share de medicamentos psiquiátricos.
  - Optimizar lanzamientos y operaciones de campo.
  - Real-world evidence para ensayos clínicos.
- **Optum** (24.8% del mercado): Base de datos de claims desidentificados.
- Las farmacéuticas gastan miles de millones en datos de IQVIA y Optum. IQVIA reportó **USD 15.4B en revenue en 2024** (toda la empresa, no solo salud mental).
- **Fuente**: [IQVIA Wikipedia](https://en.wikipedia.org/wiki/IQVIA), [6sense — IQVIA Market Share](https://6sense.com/tech/health-analytics/iqvia-market-share).

### 2.6 Investigadores / Academia

**¿Qué datasets de salud mental laboral existen?**

| Dataset                                      | Alcance                                                                   | Acceso                   | Uso                                    |
| -------------------------------------------- | ------------------------------------------------------------------------- | ------------------------ | -------------------------------------- |
| **Mental Health America Work Health Survey** | 75,000+ encuestas desde 2015. 3,915 en 2024 across 21 industrias (EE.UU.) | Reportes públicos        | Benchmark de bienestar laboral         |
| **Open Sourcing Mental Illness (OSMI)**      | Salud mental en tech, 2017-2021                                           | Público en ScienceDirect | Prevalencia y actitudes en sector tech |
| **Healthy Minds Study**                      | 96,000+ estudiantes universitarios (2024-2025, EE.UU.)                    | Reportes                 | Salud mental estudiantil               |
| **SUSESO/ISTAS-21 data** (Chile)             | Datos nacionales de riesgos psicosociales de todas las empresas           | Vía mutuales/SUSESO      | Vigilancia epidemiológica              |
| **ESENER** (EU-OSHA)                         | Encuesta europea de riesgos emergentes                                    | Público                  | Comparaciones internacionales          |
| **Gallup State of the Global Workplace**     | 160+ países, engagement y bienestar                                       | Reportes                 | Benchmark global                       |

**Fuentes**: [MHA 2024 Research](https://mhanational.org/2024-workplace-wellness-research/), [ScienceDirect — OSMI Dataset](https://www.sciencedirect.com/science/article/pii/S2352340924003469), [Mind Share Partners 2025 Report](https://www.mindsharepartners.org/2025-mental-health-at-work-report).

---

## 3. ¿Quién ya recolecta y/o vende estos datos?

### 3.1 Plataformas de wellness B2B

| Empresa | Funding | Valuación | Qué datos recolecta | ¿Los vende? | Controversias |
|---|---|---|---|---|---|
| **[Spring Health](https://www.springhealth.com)** | USD 509M | USD 3.3B | Assessment de 12 condiciones de salud mental, progreso terapéutico, engagement. | No vende. Provee reportes agregados a employers. | Sin controversias públicas. |
| **[Lyra Health](https://www.lyrahealth.com)** | USD 907M | USD 5.6B | Engagement, tendencias de salud mental, ROI via Lyra Connect (AI-powered). 26% reducción en claims reportada. | No vende. Usa internamente para optimizar servicios. Analytics agregados para clientes B2B. | Sin controversias públicas. |
| **[Headspace](https://www.headspace.com)** | USD 321M | ~USD 3B | Nombre, email, Facebook ID, uso de app, datos de meditación. Comparte con Google y Facebook para targeting de ads. | **Comparte** datos de uso con terceros para publicidad personalizada. No "vende" según su definición. | Mozilla lo etiquetó como "Privacy Not Included" — comparte datos con Meta/Google para ads. |
| **[Calm](https://www.calm.com)** | ~USD 218M | ~USD 2B | Geolocalización, datos biométricos, datos de salud emocional (moods, emociones, salud física y mental). | Recolecta datos sensibles de salud. Política de privacidad amplia. | Mozilla: recolecta "highly-sensitive health information." |
| **[Wellhub (ex-Gympass)](https://wellhub.com)** | USD 868M | USD 2.4B | Enrollment, utilización, engagement por ubicación. Dashboard en tiempo real para empresas. | No vende datos de individuos. Reportes agregados para clientes B2B. | Sin controversias mayores. |
| **[Personify Health (ex-Virgin Pulse)](https://personifyhealth.com)** | Acquired | — | Health questionnaire, screening de salud, actividades wellness completadas. Info de salud confidencial, no compartida de forma identificable. | Datos agregados para empleadores. Resultados individuales no compartidos con la empresa. | Transición de marca en 2025. |

### 3.2 Empresas de people analytics

| Empresa | Qué recolecta | ¿Vende datos? | Notas |
|---|---|---|---|
| **[Qualtrics](https://www.qualtrics.com)** | Engagement, wellbeing, inclusión, experiencia de empleado. | No vende datos de clientes. Publica investigación agregada (ej: Mental Health at Work Report). | Controles granulares de privacidad. |
| **[Culture Amp](https://www.cultureamp.com)** | Encuestas de engagement, DEI analytics, predicción de rotación. | No vende datos individuales. Usa datos agregados para benchmarks. | Tiene modelo predictivo de turnover (6 meses). |
| **[Visier](https://www.visier.com)** | People analytics integrados con HRIS. | No vende datos. Plataforma SaaS. | Énfasis en analytics para decisiones de HR. |
| **Microsoft Viva (Glint)** | Engagement, productividad, wellbeing via Microsoft 365. | No vende. Datos dentro del ecosistema Microsoft. | Integrado con Teams, Outlook. |

### 3.3 Brokers de datos de salud

**Este es el sector más problemático éticamente.**

| Empresa/Actor | Qué hace | Datos de salud mental | Precio | Controversias |
|---|---|---|---|---|
| **[IQVIA](https://www.iqvia.com)** | Mayor broker de datos de salud del mundo (33% market share en health analytics). | Claims, prescripciones, EHR desidentificados. Incluye diagnósticos de salud mental, prescripciones psiquiátricas. | Contratos de millones de USD con farmas. | Cuestionado por alcance de desidentificación. |
| **[Optum](https://www.optum.com)** (UnitedHealth) | Base de datos Clinformatics Data Mart. 24.8% market share. | Claims administrativos desidentificados desde 2000. Incluye salud mental. | Suscripciones enterprise. | Conflicto de intereses: es subsidiaria de la mayor aseguradora de EE.UU. |
| **Data brokers no regulados** | Múltiples firmas que venden listas de personas con condiciones de salud mental. | Datos de depresión, ADHD, ansiedad, bipolaridad, insomnio + demografía (edad, zip code, ingreso, estado civil, etc.). | **USD 275 por 5,000 registros agregados** hasta **USD 75,000-100,000 por acceso anual individualizado** | **Reporte de Duke University (2023)**: 11 de 37 brokers contactados estaban dispuestos a vender datos de salud mental. Sin regulación federal en EE.UU. |

**Fuente clave**: [Duke University — Data Brokers and Mental Health Data](https://techpolicy.sanford.duke.edu/data-brokers-and-the-sale-of-americans-mental-health-data/), [Washington Post](https://www.washingtonpost.com/technology/2023/02/13/mental-health-data-brokers/), [NBC News](https://www.nbcnews.com/tech/security/researcher-tried-buy-mental-health-data-was-surprisingly-easy-rcna70071).

### 3.4 Wearables

| Empresa | Datos recolectados | Uso corporativo | ¿Comparten/venden? |
|---|---|---|---|
| **Fitbit/Google** | Actividad, sueño, HR, HRV, SpO2 | Programas corporativos de wellness | Datos pueden ser transferidos a aseguradoras, wellness admins, y el propio fabricante. Google tiene acceso a datos de Fitbit. |
| **Apple Health** | Todos los biométricos (sueño, HRV, cortisol en 2025, actividad) | Menos integración corporativa directa (Apple prioriza privacidad) | Apple no vende datos. Datos en dispositivo. Pero apps de terceros pueden acceder con permiso. |
| **Oura** | Sueño, HRV, temperatura, readiness score | Emergente en wellness corporativo | Oura mantiene datos en su plataforma. API disponible para integraciones. |
| **Whoop** | HRV, strain, recovery, sueño | Programas de rendimiento corporativo | API disponible via Spike API. Datos estandarizados para integración. |

**Riesgo legal**: Los datos biométricos de wearables frecuentemente **no están protegidos por HIPAA** porque los empleados los comparten voluntariamente y los receptores no son "covered entities". HIPAA solo aplica a health plans, healthcare providers, y clearinghouses ([HR Defense Blog](https://www.hrdefenseblog.com/2025/06/fitbits-at-work-navigating-the-legal-risks-of-wearables-in-corporate-wellness-programs/)).

### 3.5 Apps de salud mental con controversias de privacidad

| App | Controversia | Multa/Consecuencia | Fuente |
|---|---|---|---|
| **BetterHelp** | Compartió datos sensibles (emails, IPs, respuestas de salud) con Facebook, Snapchat, Criteo y Pinterest para ads, violando sus propias promesas de privacidad. | **USD 7.8M** (FTC, 2023). Prohibición de compartir datos de salud para publicidad. Primera acción FTC con reembolsos a consumidores por datos de salud. | [FTC — BetterHelp](https://www.ftc.gov/news-events/news/press-releases/2023/07/ftc-gives-final-approval-order-banning-betterhelp-sharing-sensitive-health-data-advertising) |
| **Cerebral** | Compartió info de clientes (nombres, contacto, fecha de nacimiento, respuestas de assessments de salud mental, detalles de tratamiento) con Google, TikTok y Meta para ads. | **USD 7M** (FTC, 2024). | [FTC via Yahoo Finance](https://finance.yahoo.com/news/the-mental-health-app-data-privacy-problem-is-getting-worse-161425472.html) |
| **GoodRx** | Compartió datos de prescripciones y condiciones de salud con Facebook, Google y Criteo para ads. | **USD 1.5M** civil penalty + USD 25M settlement. Primera acción bajo Health Breach Notification Rule. | [FTC — GoodRx](https://www.ftc.gov/news-events/news/press-releases/2023/02/ftc-enforcement-action-bar-goodrx-sharing-consumers-sensitive-health-info-advertising) |
| **Talkspace** | Ex-empleados reportaron que transcripciones de terapia eran "minadas" para insights de marketing. Programa con NYC ($26M) filtró datos de teens a TikTok, Meta y Snap via tracking pixels. | Investigación senatorial (2022). Controversia de privacidad con programa escolar de NYC. | [K-12 Dive](https://www.k12dive.com/news/talkspace-nyc-data-privacy-teenspace/727070/) |
| **Premom** (Easy Healthcare) | Compartió datos de salud reproductiva con terceros. | Acción FTC (mayo 2023). Segunda acción bajo HBNR. | [FTC](https://www.ftc.gov/legal-library/browse/cases-proceedings/2023090-goodrx-holdings-inc) |

**Patrón alarmante**: Mozilla Foundation en su reporte "Privacy Not Included" (2023) encontró que la **mayoría de apps de salud mental tienen prácticas de privacidad deficientes** — [Mozilla](https://www.mozillafoundation.org/en/privacynotincluded/articles/are-mental-health-apps-better-or-worse-at-privacy-in-2023/).

### 3.6 Empresas LATAM

| Empresa | País | Qué hace | Funding | Modelo |
|---|---|---|---|---|
| **[Betterfly](https://betterfly.com)** | Chile | Plataforma de beneficios que convierte hábitos saludables en seguros de vida y donaciones. B2B2C. +3,000 empresas (Rappi, Samsung, Natura, Sodexo). | USD 125M (Series C, 2022). Valuación: **USD 1B** (unicornio). | Tracking de actividad → rewards. Datos de hábitos de salud y actividad. |
| **[Cuéntame](https://cuentame.com.mx)** | México | Usa IA para identificar riesgos psicosociales. Mide niveles de estrés. Acceso a psicólogos. Presencia en México, Colombia, Chile. | No público | B2B. Cumple con NOM-035. |
| **[Yerbo](https://yerbo.co)** | Argentina | Herramienta para evitar burnout en empresas tech. Clientes: Nubank, GitLab. Fundador reconocido por Forbes 30 Under 30 Argentina. | No público | B2B. Analytics de burnout. |
| **[Vittude](https://vittude.com)** | Brasil | Terapia online B2B. Clientes corporativos crecieron **300%** post-COVID. | No público | B2B2C. Matching con terapeutas. |

**Fuentes**: [Contxto — LATAM Mental Health Startups](https://contxto.com/en/startups/latam-startups-that-focus-on-mental-health/), [Latin America Reports](https://www.latinamericareports.com/top-15-healthtech-startups-operating-in-latam/8310/).

---

## 4. ¿Está permitido? Marco legal y regulatorio

### 4.1 Estados Unidos

#### HIPAA: ¿aplica a datos de wellness de empleados?

**Depende de la estructura del programa**:

| Estructura | ¿HIPAA aplica? | Implicación |
|---|---|---|
| Wellness como parte de un group health plan | **Sí** | Datos son PHI (Protected Health Information). Protecciones completas. |
| Wellness ofrecido directamente por el empleador (no via health plan) | **No** | Los datos NO son PHI. No hay protección HIPAA. |
| Wearables proporcionados por el empleador | **Generalmente no** | Empleados comparten datos voluntariamente. Receptores no son "covered entities". |
| Apps de meditación/wellness (Calm, Headspace) | **No** | No son healthcare providers ni health plans. |

**Fuente**: [HHS — HIPAA and Workplace Wellness](https://www.hhs.gov/hipaa/for-professionals/privacy/workplace-wellness/index.html).

#### ADA (Americans with Disabilities Act)

- Participación en programas de wellness **debe ser voluntaria**, no condición de empleo.
- No se puede **coaccionar** a empleados para revelar información de salud mental.
- Si el empleador accede accidentalmente a datos de EAP, debe tener cuidado de no discriminar a empleados con discapacidades mentales.
- **Fuente**: [EEOC — Wellness Programs](https://www.eeoc.gov/regulations/sample-notice-employer-sponsored-wellness-programs).

#### FTC: enforcement creciente (2023-2025)

La FTC ha intensificado dramáticamente su enforcement sobre datos de salud mental:

| Caso | Año | Multa | Precedente |
|---|---|---|---|
| GoodRx | 2023 | USD 1.5M | Primera acción bajo Health Breach Notification Rule |
| BetterHelp | 2023 | USD 7.8M | Primera devolución de fondos por compromiso de datos de salud |
| Cerebral | 2024 | USD 7M | Confirmó que datos de mental health assessments son "health data" |
| Health Breach Notification Rule (actualización) | 2024 | — | Regla endurecida para apps de salud digital |

**Washington My Health My Data Act** (2023) y legislación similar en Nevada (2024) codificaron las acciones de la FTC, creando protecciones estatales explícitas para datos de salud del consumidor.

#### ¿Es legal vender datos anonimizados de wellness?

**Técnicamente sí**, si se cumple con la desidentificación HIPAA (cuando aplica):

- **Safe Harbor**: Eliminar 18 identificadores específicos (nombre, dirección, SSN, fecha de nacimiento, zip code completo, etc.).
- **Expert Determination**: Obtener opinión de un experto estadístico de que el riesgo de reidentificación es "muy pequeño".

**PERO**: Una vez desidentificados, los datos **ya no están protegidos por HIPAA** y pueden venderse libremente. Esto es lo que hacen IQVIA y Optum — [HHS De-identification Guidance](https://www.hhs.gov/hipaa/for-professionals/special-topics/de-identification/index.html).

**El problema**: Stanford HAI ha documentado que la desidentificación **no es verdadera anonimización** — con IA se puede reidentificar datos con **99.98% de precisión** combinando con otras fuentes — [Stanford HAI](https://hai.stanford.edu/news/de-identifying-medical-patient-data-doesnt-protect-our-privacy).

### 4.2 Unión Europea — GDPR

#### Artículo 9: datos de salud como categoría especial

- Datos de salud mental son **"categoría especial"** bajo Art. 9 GDPR.
- El procesamiento está **prohibido por defecto**, con excepciones limitadas.

**Bases legales permitidas para datos de salud mental de empleados**:

| Base legal | Aplicabilidad | Notas |
|---|---|---|
| **Consentimiento explícito** (Art. 9.2.a) | Problemático para empleadores | En relación laboral hay **desequilibrio de poder** — el consentimiento puede no ser "libre". Los reguladores europeos son escépticos del consentimiento como base legal en contexto laboral. |
| **Obligación en derecho laboral** (Art. 9.2.b) | Viable | Si la ley nacional exige evaluación de riesgos psicosociales (como en Francia, España). |
| **Interés público en salud** (Art. 9.2.i) | Limitado | Solo para salud pública. No para beneficio comercial de la empresa. |
| **Medicina preventiva/laboral** (Art. 9.2.h) | Viable | Con profesional médico sujeto a secreto profesional. |

**¿Se pueden vender datos de salud mental bajo GDPR?**

**En la práctica, no.** El GDPR establece explícitamente que el procesamiento de datos de salud por interés público **"no debe resultar en que terceros procesen datos personales para otros propósitos como empleadores o compañías de seguros y banca"**.

**Fuentes**: [Art. 9 GDPR](https://gdpr-info.eu/art-9-gdpr/), [ICO — Workers' Health Information](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/employment/information-about-workers-health/data-protection-and-workers-health-information/).

### 4.3 Chile

#### Ley 19.628 (vigente hasta diciembre 2026)

- Ley de protección de datos personales actual, considerada **débil** comparada con estándares internacionales.
- Reconoce datos sensibles (incluyendo salud) pero con enforcement limitado.
- Sin autoridad autónoma de protección de datos.

#### Ley 21.719 (nueva, publicada 13 diciembre 2024, vigente desde 1 diciembre 2026)

**Cambio radical en protección de datos en Chile:**

| Aspecto | Ley 19.628 (actual) | Ley 21.719 (nueva) |
|---|---|---|
| **Autoridad** | Sin autoridad independiente | Crea **Agencia de Protección de Datos Personales** |
| **Consentimiento** | Genérico | Libre, informado, específico, inequívoco. Revocable en cualquier momento. |
| **Datos sensibles** | Reconocidos pero poco protegidos | Datos de salud = **categoría especial**. Requieren consentimiento explícito o excepción legal. |
| **Datos de salud** | Sin regulación específica | Instituciones deben implementar **encriptación, acceso limitado**, consentimiento explícito. Excepciones solo para emergencia o interés público. |
| **Sanciones** | Mínimas | Multas significativas (por definir en reglamento) |
| **Nivel** | Insuficiente | **Comparable a GDPR** |

**Fuentes**: [BCN — Ley 21.719](https://www.bcn.cl/leychile/navegar?idNorma=1209272), [InfoProtección](https://www.infoproteccion.com/leyes-ciberseguridad/chile/todo-lo-que-debe-saber-sobre-la-ley-21719-en-chile-proteccion-de-datos-personales/), [ValorPyme](https://www.valorpyme.cl/blog/tratamiento-datos-personales-trabajadores-ley-21719).

#### Protocolo de Vigilancia de Riesgos Psicosociales (SUSESO/ISTAS-21)

- **Obligatorio desde 2013** para todas las empresas e instituciones públicas en Chile.
- Mide 5 dimensiones de riesgo psicosocial.
- Datos son confidenciales y anónimos en su diseño.
- Los cuestionarios completados y resultados deben preservarse como **medio de verificación**.
- La Dirección del Trabajo y SUSESO fiscalizan activamente.
- **Implicación para Ruta Viva**: Las empresas chilenas ya están acostumbradas a medir riesgos psicosociales. Ruta Viva podría posicionarse como **complemento al ISTAS-21** — el protocolo mide el problema, Ruta Viva es la intervención.

### 4.4 México

#### NOM-035-STPS-2018

- **Obligatoria para todos los centros de trabajo en México** (>15 empleados).
- Requiere identificación, análisis y prevención de factores de riesgo psicosocial.
- Evaluaciones cada 2 años mínimo.
- Multas: USD 1,364 a USD 27,291 por incumplimiento.
- **Fuente**: [DOF — NOM-035](https://www.dof.gob.mx/nota_detalle.php?codigo=5541828&fecha=23/10/2018).

#### LFPDPPP (Ley Federal de Protección de Datos Personales)

- Datos de salud = categoría especial que requiere **consentimiento escrito expreso**.
- Obligación de aviso de privacidad antes de recolectar datos.
- Multas: hasta **320,000x el salario mínimo diario**.
- **Fuente**: [Mexico Privacy Law Guide](https://secureprivacy.ai/blog/mexico-privacy-law-lfpdppp-2025).

### 4.5 Colombia

#### Ley 1581 de 2012

- Datos sensibles (incluyendo salud) requieren consentimiento expreso.
- Multas: hasta **2,000 salarios mínimos mensuales**.
- **Fuente**: [MyData-Trust — Colombia](https://www.mydata-trust.com/colombia/).

### 4.6 Brasil

#### LGPD (Lei Geral de Proteção de Dados)

- Inspirada en GDPR. Vigente desde septiembre 2020.
- Requiere consentimiento explícito para datos sensibles de empleados.
- Requiere DPO (Data Protection Officer) para datos sensibles.
- Multas: hasta **2% del revenue en Brasil o R$50M** (~USD 10M) por violación.
- **Fuente**: [Endpoint Protector — LATAM](https://www.endpointprotector.com/blog/data-protection-regulations-in-latin-america/).

### Tabla resumen: regulación por jurisdicción

| Jurisdicción | ¿Datos de salud mental son sensibles? | ¿Se puede recolectar con consentimiento? | ¿Se puede vender? | Enforcement |
|---|---|---|---|---|
| **EE.UU. (HIPAA)** | Solo si son PHI (vía health plan) | Sí, si voluntario | Sí si desidentificado (HIPAA Safe Harbor) | Moderado (FTC endureciendo) |
| **EE.UU. (FTC)** | Sí (enforcement reciente) | Sí | No sin consentimiento explícito (post-BetterHelp) | **Alto y creciente** |
| **UE (GDPR)** | **Sí** (Art. 9) | Difícil en contexto laboral (poder desigual) | **Prácticamente no** | Muy alto |
| **Chile (actual)** | Sí pero débil | Sí | Zona gris | Bajo |
| **Chile (Ley 21.719, dic 2026)** | **Sí** (comparable a GDPR) | Consentimiento explícito requerido | **Muy restringido** | Alto (nueva Agencia) |
| **México** | **Sí** (NOM-035 + LFPDPPP) | Consentimiento escrito | Muy restringido | Moderado |
| **Colombia** | **Sí** | Consentimiento expreso | Restringido | Moderado |
| **Brasil** | **Sí** (LGPD) | Consentimiento explícito | Restringido | Alto |

---

## 5. ¿Se puede vender data de salud mental?

### 5.1 Estado actual: sí, pero cada vez más restringido

**La realidad incómoda**: Hoy, en Estados Unidos, se pueden comprar datos de salud mental de millones de personas por unos pocos cientos de dólares. El reporte de Duke University (2023) demostró que 11 de 37 brokers contactados vendían datos que incluían depresión, ADHD, ansiedad, bipolaridad, y más, con precios entre USD 275 (5,000 registros agregados) y USD 100,000 (acceso anual individualizado).

**Pero la tendencia es clara**: el enforcement está cerrando estas puertas.

### 5.2 Diferencia entre "vender datos" vs. "vender insights"

| Modelo | Ejemplo | Riesgo legal | Riesgo ético |
|---|---|---|---|
| **Vender datos individuales identificables** | Broker vende lista de personas con depresión + nombre + dirección | **Muy alto** (ilegal bajo GDPR, ilegal creciente en EE.UU.) | **Inaceptable** |
| **Vender datos desidentificados** | IQVIA vende claims desidentificados a farmacéuticas | **Medio** (legal bajo HIPAA Safe Harbor, pero Stanford muestra que reidentificación es posible con 99.98% accuracy) | **Alto** (falsa sensación de privacidad) |
| **Vender datos agregados/estadísticos** | "30% de empleados en industria X reportan burnout moderado-severo" | **Bajo** (no hay individuos identificables) | **Bajo** (si el grupo es suficientemente grande) |
| **Vender insights/benchmarks** | "Empresas que implementan X intervención reducen burnout en Y%" | **Muy bajo** | **Muy bajo** |
| **Modelo SaaS donde datos son del cliente** | Plataforma cobra por el software, employer es dueño de sus datos | **Mínimo** | **Mínimo** (si hay transparencia con empleados) |

### 5.3 ¿Qué nivel de anonimización es suficiente?

**HIPAA Safe Harbor** requiere eliminar 18 identificadores. Pero:

- Stanford HAI demostró que la desidentificación HIPAA es insuficiente: "Practicamos desidentificación como se interpretó en 1996 y luego nos quejamos de que eliminar 18 identificadores seleccionados hace años no funciona para mantener la privacidad en 2021" (Prof. Nigam Shah).
- Con IA, se puede reidentificar datos "anonimizados" con **99.98% de precisión** combinando con otras fuentes.
- **K-anonymity** (donde cada registro es indistinguible de al menos k-1 otros registros) es una mejora, pero tampoco es infalible.

**El estándar real debería ser**: datos verdaderamente agregados (nunca individuales), con grupos mínimos de 50-100 personas, sin posibilidad de drill-down a nivel individual.

### 5.4 Modelos donde el usuario es dueño de sus datos

**Data cooperatives y data vaults** emergentes:

| Modelo | Ejemplo | Cómo funciona |
|---|---|---|
| **Data cooperative** | MIDATA (Suiza), SAOS | Usuarios son copropietarios de una cooperativa sin fines de lucro que gestiona sus datos. Deciden colectivamente con quién compartir. |
| **Data vault personal** | Citizen Health, Seqster | Usuarios recolectan sus datos de salud (EHR, wearables, genómica) en "vaults" seguros. Eligen con quién compartir y pueden recibir compensación. |
| **Consent platform** | Modelo propuesto en npj Digital Medicine (2025) | Plataforma donde el usuario controla granularmente qué datos comparte, con quién, y por cuánto tiempo. |

**Mercado**: El healthcare data monetization market está proyectado a crecer a **CAGR ~15%** — [PharmiWeb](https://www.pharmiweb.com/press-release/2026-02-13/healthcare-data-monetization-market-2030-innovations-fueling-life-sciences-research).

### 5.5 Controversias recientes: lecciones aprendidas

| Caso | Qué pasó | Lección |
|---|---|---|
| **BetterHelp/FTC (2023)** | Compartió datos de salud mental con Meta, Snapchat y Criteo para targeting de ads. | **La confianza del usuario es el activo #1**. Perderla destruye el negocio. |
| **Cerebral/FTC (2024)** | Compartió nombres, DOB, respuestas de assessments con TikTok y Google para ads. | **Los datos de assessments de salud mental SON datos de salud**, aunque la app no sea proveedor médico. |
| **Talkspace/NYC (2024)** | Programa de $26M para teens filtró datos a TikTok, Meta y Snap via tracking pixels. | **Incluso tracking pixels pueden filtrar datos sensibles**. Due diligence de privacidad es obligatoria. |
| **Duke Report (2023)** | Data brokers vendían datos de salud mental de americanos por $275-$100K. | **El mercado de datos de salud mental no regulado existe y es activo**. |
| **Facebook/mental health (ongoing)** | Meta acusada de diseñar algoritmos que dañan la salud mental de adolescentes y recolectar datos de salud sin consentimiento. | **Las big tech son los mayores recolectores silenciosos de datos de salud mental** (via comportamiento en plataforma). |

---

## 6. Implicaciones para Ruta Viva

### 6.1 ¿Qué datos podría recolectar legalmente Ruta Viva?

Dado el marco regulatorio, Ruta Viva puede recolectar **con consentimiento explícito e informado**:

| Dato | Legal en Chile (2026) | Legal en LATAM | Sensibilidad | Recomendación |
|---|---|---|---|---|
| Cuestionarios de bienestar (UCLA-8, WHO-5) | Sí, con consentimiento explícito | Sí, con consentimiento | Alta | **Recolectar** — core del producto |
| Índice de apertura cultural (custom) | Sí | Sí | Media | **Recolectar** — diferenciador único |
| Engagement con desafíos | Sí | Sí | Baja | **Recolectar** — métrica operativa |
| Datos de comunidad (interacciones, check-ins) | Sí | Sí | Media | **Recolectar** con controles |
| Creencias limitantes declaradas | Sí, con consentimiento | Sí, con consentimiento | Media-Alta | **Recolectar** con cuidado |
| Datos de wearables (si integración) | Sí, con consentimiento explícito | Sí, con consentimiento | Alta | **No prioritario para MVP** |
| Claims de seguro | No (no es su dato) | No | Muy alta | **No recolectar** |

### 6.2 ¿Podría Ruta Viva vender datos agregados/anónimos?

**Respuesta corta: técnicamente posible, estratégicamente incorrecto.**

**Argumentos a favor**:
- Datos cruzados de bienestar + cultura son únicos en el mercado (nadie más los tiene).
- Aseguradoras (como Swiss Re), farmacéuticas, y gobiernos pagarían por insights agregados.
- En Chile actual (Ley 19.628), es zona gris pero no explícitamente prohibido para datos agregados.

**Argumentos en contra (y estos pesan más)**:
- La Ley 21.719 (vigente dic 2026) endurece dramáticamente los requisitos. Vender datos sensibles requerirá consentimiento explícito y una base legal sólida.
- El riesgo reputacional es **existencial**: las controversias de BetterHelp, Cerebral y Talkspace demuestran que perder la confianza del usuario destruye el negocio.
- El mercado B2B valora la **confianza** sobre todo — si los empleadores descubren que Ruta Viva vende datos de sus empleados, pierden a todos sus clientes.
- La tendencia regulatoria global va en dirección contraria a la venta de datos de salud.

### 6.3 ¿Es mejor modelo SaaS donde los datos son del cliente?

**Sí. Inequívocamente.**

El modelo más seguro, ético y sostenible para Ruta Viva es:

```
Ruta Viva = plataforma SaaS

- El EMPLEADOR es dueño de los datos de sus empleados (agregados).
- El EMPLEADO es dueño de sus datos individuales.
- Ruta Viva NUNCA vende datos a terceros.
- Ruta Viva cobra por el SOFTWARE y los INSIGHTS, no por los datos.
- Los reportes B2B son agregados (mínimo 30-50 empleados por grupo).
- El empleado puede exportar/borrar sus datos en cualquier momento.
```

**Ventajas de este modelo**:
1. **Cumplimiento regulatorio** nativo (GDPR-ready, Ley 21.719-ready).
2. **Confianza** como ventaja competitiva: "Nosotros NO somos BetterHelp."
3. **Simplicidad legal**: no necesitas navegar 5 jurisdicciones de venta de datos.
4. **Alineación con propósito**: Jose y Edgar quieren "tecnología que genuinamente ayude a la gente" — vender datos de salud mental no encaja con eso.

### 6.4 ¿Cuál es el modelo más ético y sostenible?

**Modelo recomendado: "Ethical SaaS + Insight Marketplace"**

```
Revenue streams de Ruta Viva:

1. SUSCRIPCIÓN B2B (80-90% del revenue)
   - USD 5-15/empleado/mes
   - Incluye: plataforma, desafíos, gamificación,
     comunidad, dashboard B2B con métricas agregadas

2. BENCHMARKS ANÓNIMOS (10-15% del revenue)
   - Vender INSIGHTS (no datos) basados en datos agregados
   - Ejemplo: "Benchmark de bienestar cultural en industria tech Chile 2027"
   - Solo estadísticas agregadas con N mínimo de 100+ empresas
   - Compradores: consultoras, academia, gobierno
   - NUNCA datos individuales ni de empleadores específicos

3. PARTNERSHIPS (5-10% del revenue)
   - Aseguradoras que subsidien licencias a cambio de métricas agregadas
   - Modelo Swiss Re + Wysa: la aseguradora paga la plataforma,
     recibe datos de reducción de riesgo (agregados)

NUNCA:
- Vender datos individuales
- Compartir datos con adtech (Meta, Google, TikTok)
- Permitir que el empleador vea datos individuales de un empleado
- Usar datos para targeting publicitario
```

### 6.5 ¿Hay ventaja competitiva en datos cruce bienestar + cultura?

**Sí, y es significativa.** Ruta Viva tendría un dataset que NADIE más en el mundo tiene:

| Dato único | Quién lo querría | Por qué no existe hoy |
|---|---|---|
| Correlación entre exposición cultural y reducción de soledad | Investigadores, OMS, gobiernos | Nadie ha medido esto sistematicamente |
| Impacto de contacto intercultural en bienestar laboral | Empresas, consultoras de DEI | DEI no mide bienestar; wellness no mide cultura |
| Efecto de gamificación cultural en apertura psicológica | Academia, diseñadores de intervenciones | Es una intervención nueva sin precedente |
| Índice de apertura cultural por ciudad/industria | Municipalidades, organizaciones de integración | No existe un benchmark estándar |
| ROI de wellness cultural vs. meditación vs. terapia | CFOs, aseguradoras | No hay datos comparativos |

**Este dataset propio es más valioso como asset estratégico interno** (para mejorar el producto, publicar investigación, ganar credibilidad) que como producto de datos vendible.

### 6.6 Recomendaciones concretas para Ruta Viva

1. **Diseñar para privacidad desde el día 1** (Privacy by Design):
   - Consentimiento explícito, granular y revocable.
   - Datos en Supabase con encriptación (ya diseñado en el schema existente).
   - RLS por brand_id (multi-tenant aislado).
   - Aviso de privacidad claro: "Tus datos son tuyos. Tu empresa solo ve métricas agregadas."

2. **Prepararse para Ley 21.719 desde ahora**:
   - Aunque entra en vigencia en diciembre 2026, diseñar cumpliendo desde el MVP.
   - Nombrar un responsable de protección de datos (aunque sea interno).
   - Implementar derecho de acceso, rectificación, cancelación y portabilidad.

3. **Posicionarse como la alternativa ética**:
   - Publicar un "Privacy Manifesto" — diferencarse explícitamente de BetterHelp/Cerebral.
   - Nunca usar tracking pixels de Meta/Google en la plataforma.
   - Buscar certificación (SOC 2 cuando escale, o al menos publicar prácticas de seguridad).

4. **Monetizar insights, no datos**:
   - Publicar reportes anuales: "Estado del bienestar cultural en LATAM" (gratuito, con datos agregados).
   - Vender benchmarks por industria a consultoras/aseguradoras.
   - Los datos crudos nunca salen de la plataforma.

5. **Buscar partnership con aseguradoras estilo Swiss Re**:
   - Las mutuales chilenas (ACHS, IST, Mutual) son obligadas a dar asistencia técnica en riesgos psicosociales.
   - Ruta Viva como **herramienta de intervención** post-diagnóstico ISTAS-21.
   - La mutual subsidia la licencia → reduce claims → todos ganan.

6. **Usar el Protocolo SUSESO/ISTAS-21 como puerta de entrada**:
   - Todas las empresas en Chile DEBEN medir riesgos psicosociales.
   - Ruta Viva se posiciona como: "El ISTAS-21 mide el problema. Nosotros somos la solución."
   - Integración: importar resultados ISTAS-21 → diseñar rutas culturales personalizadas.

---

## 7. Mapa resumen: valor de datos por actor

### Matriz: tipos de datos x actores que los valoran

| Tipo de dato | Empleador | Aseguradora | Gobierno | Farma | Academia | Travel |
|---|---|---|---|---|---|---|
| **Cuestionarios clínicos** (PHQ-9, GAD-7, WHO-5) | Alto / $$ | Alto / $$$ | Alto / $ | Alto / $$$ | Alto / $ | Bajo / — |
| **Escalas de burnout** (MBI) | **Muy alto** / $$$ | Alto / $$ | Alto / $$ | Medio / $$ | Alto / $ | Bajo / — |
| **Riesgos psicosociales** (ISTAS-21) | Alto / $$ (obligatorio) | Medio / $ | **Muy alto** / $$$ | Bajo / — | Alto / $ | Bajo / — |
| **Ausentismo / presentismo** | **Muy alto** / $$$ | Alto / $$ | Medio / $ | Bajo / — | Medio / $ | Bajo / — |
| **Engagement / eNPS** | **Muy alto** / $$$ | Medio / $ | Bajo / — | Bajo / — | Medio / $ | Bajo / — |
| **Uso de EAP / terapia digital** | Alto / $$ | **Muy alto** / $$$ | Medio / $ | Alto / $$ | Alto / $$ | Bajo / — |
| **Biométricos** (HRV, sueño, cortisol) | Medio / $$ | Alto / $$ | Medio / $ | **Muy alto** / $$$ | Alto / $$ | Medio / $ |
| **Claims de seguro de salud mental** | Medio / $ | **Muy alto** / $$$ | Alto / $$ | **Muy alto** / $$$ | Alto / $$ | Bajo / — |
| **Datos de wellness cultural** (Ruta Viva) | Alto / $$ | Medio / $ (nuevo) | Alto / $$ | Bajo / — | **Muy alto** / $$ | **Alto** / $$ |
| **Correlación bienestar-cultura** (único) | Alto / $$$ | Medio / $$ | Alto / $$ | Bajo / — | **Muy alto** / $$$ | Medio / $ |

**Leyenda**: Nivel de interés / Disposición a pagar ($ = bajo, $$ = medio, $$$ = alto)

### Resumen ejecutivo del valor de datos para Ruta Viva

```
DATOS MÁS VALIOSOS PARA RUTA VIVA:
═══════════════════════════════════

1. Correlación bienestar-cultura (ÚNICO, nadie más lo tiene)
   → Valor: asset estratégico interno + credibilidad investigativa
   → Monetización: publicaciones, conferencias, benchmarks

2. Métricas de wellness pre/post intervención cultural
   → Valor: prueba de ROI para vender a empresas
   → Monetización: SaaS B2B (USD 5-15/empleado/mes)

3. Índice de apertura cultural por industria/ciudad
   → Valor: benchmark nuevo en el mercado
   → Monetización: reportes anuales, partnerships con gobierno

4. Datos de engagement con desafíos culturales
   → Valor: optimización de producto + retención
   → Monetización: indirecta (mejor producto = más clientes)

MODELO RECOMENDADO:
═══════════════════
✓ SaaS B2B (datos propiedad del cliente)
✓ Insights agregados (benchmarks por industria)
✓ Partnership con mutuales chilenas
✗ NUNCA vender datos individuales
✗ NUNCA compartir con adtech
✗ NUNCA acceso del employer a datos individuales
```

---

## Fuentes principales

### Reportes y estudios
- [Duke University — Data Brokers and Mental Health Data (2023)](https://techpolicy.sanford.duke.edu/data-brokers-and-the-sale-of-americans-mental-health-data/)
- [Stanford HAI — De-Identifying Medical Patient Data (2023)](https://hai.stanford.edu/news/de-identifying-medical-patient-data-doesnt-protect-our-privacy)
- [Deloitte — Economic Burden of Mental Health Inequities](https://www.deloitte.com/us/en/insights/industry/health-care/economic-burden-mental-health-inequities.html)
- [Yale — Economic Costs of Mental Illness in the US (2024)](https://news.yale.edu/2024/04/22/novel-study-quantifies-immense-economic-costs-mental-illness-us)
- [OMS — Mental Health at Work](https://www.who.int/news-room/fact-sheets/detail/mental-health-at-work)
- [Mind Share Partners — 2025 Mental Health at Work Report](https://www.mindsharepartners.org/2025-mental-health-at-work-report)
- [Wellhub — ROI of Corporate Wellness](https://wellhub.com/en-us/blog/press-releases/study-reveals-strong-return-on-investment-for-corporate-wellness-programs/)
- [PMC — ROI of Enhanced Behavioral Health Services](https://pmc.ncbi.nlm.nih.gov/articles/PMC11800021/)
- [Lyra Health — 2025 State of Workforce Mental Health](https://www.lyrahealth.com/2025-state-of-workforce-mental-health-report/)

### Regulación
- [HHS — HIPAA and Workplace Wellness](https://www.hhs.gov/hipaa/for-professionals/privacy/workplace-wellness/index.html)
- [HHS — HIPAA De-identification Guidance](https://www.hhs.gov/hipaa/for-professionals/special-topics/de-identification/index.html)
- [FTC — BetterHelp Final Order](https://www.ftc.gov/news-events/news/press-releases/2023/07/ftc-gives-final-approval-order-banning-betterhelp-sharing-sensitive-health-data-advertising)
- [FTC — GoodRx Enforcement](https://www.ftc.gov/news-events/news/press-releases/2023/02/ftc-enforcement-action-bar-goodrx-sharing-consumers-sensitive-health-info-advertising)
- [Art. 9 GDPR](https://gdpr-info.eu/art-9-gdpr/)
- [BCN Chile — Ley 21.719](https://www.bcn.cl/leychile/navegar?idNorma=1209272)
- [SUSESO — ISTAS-21](https://www.suseso.cl/606/w3-article-19640.html)
- [DOF México — NOM-035](https://www.dof.gob.mx/nota_detalle.php?codigo=5541828&fecha=23/10/2018)

### Industria
- [Swiss Re — Wysa Assure](https://www.swissre.com/reinsurance/our-capabilities/life-health-re/wysa-assure-insurance-mental-wellbeing-app.html)
- [Spring Health — CNBC Disruptor 50](https://www.cnbc.com/2024/05/14/spring-health-cnbc-disruptor-50.html)
- [Mozilla — Privacy Not Included: Mental Health Apps](https://www.mozillafoundation.org/en/privacynotincluded/articles/are-mental-health-apps-better-or-worse-at-privacy-in-2023/)
- [Contxto — LATAM Mental Health Startups](https://contxto.com/en/startups/latam-startups-that-focus-on-mental-health/)
- [Future Market Insights — Stress Tracking Devices](https://www.futuremarketinsights.com/reports/stress-tracking-devices-market)
