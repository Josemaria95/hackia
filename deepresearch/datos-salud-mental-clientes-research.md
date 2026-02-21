---
title: "Deep Research: Datos de salud mental de clientes/consumidores — mercado, actores y regulación"
aliases: [datos-salud-mental-clientes, consumer-mental-health-data, mental-health-consumer-research]
date: 2026-02-21
tags: [mercado, wellness, corporativo]
status: explorando
miro: ""
---

# Deep Research: Datos de salud mental de clientes/consumidores — mercado, actores y regulación

> Investigación exhaustiva sobre qué datos de salud mental de **clientes y consumidores** existen, quién los valora, quién los recolecta/vende, y cuál es el marco legal. Este research complementa el [[datos-salud-mental-empleados-research|research de datos de empleados]] cubriendo el lado B2C: pacientes, asegurados, estudiantes, usuarios de apps y consumidores generales.

→ Idea principal: [[2026-02-20-datos-salud-mental-modelos-riesgo|Datos de salud mental para modelos de riesgo]]
→ Research complementario: [[datos-salud-mental-empleados-research|Deep Research: Datos de empleados]]

---

## 1. ¿Qué datos de salud mental de clientes/consumidores existen?

A diferencia de los datos de empleados (donde la relación laboral define el contexto), los datos de consumidores se generan en la interacción de una persona con servicios de salud, apps, plataformas digitales, aseguradoras, redes sociales y dispositivos personales. Son datos más dispersos, más sensibles y, paradójicamente, más abundantes.

### 1.1 Datos generados por apps de salud mental (D2C)

Las apps de salud mental orientadas al consumidor son la fuente más rica y más controversial de datos de salud mental fuera del sistema clínico tradicional.

| App | Usuarios | Datos que recolecta | Modelo de datos | Controversia |
|-----|----------|---------------------|-----------------|-------------|
| **BetterHelp** | 4M+ | Cuestionarios de salud mental (depresión, ansiedad, trauma), transcripciones de terapia, datos demográficos, email, IP, Facebook ID, respuestas de assessments | Compartió datos con Meta, Snapchat, Criteo para ads | **Multa FTC USD 7.8M (2023)**. Prohibición de compartir datos de salud para publicidad. |
| **Talkspace** | 2M+ | Historia médica, detalles de sesiones de terapia, tracking de síntomas, notas de progreso clínico, device IDs | Ex-empleados reportaron que transcripciones eran "minadas" para marketing | Programa NYC ($26M) filtró datos de teens a TikTok, Meta y Snap via tracking pixels |
| **Cerebral** | 1M+ | Nombres, fecha de nacimiento, respuestas de assessments de salud mental, detalles de tratamiento | Compartió con Google, TikTok y Meta para ads | **Multa FTC USD 7M (2024)** |
| **Headspace** | 70M+ downloads | Nombre, email, Facebook ID, uso de app, datos de meditación, geolocalización | Comparte datos de uso con Google y Facebook para targeting de ads | Mozilla: "Privacy Not Included" |
| **Calm** | 100M+ downloads | Geolocalización, datos biométricos, datos de salud emocional (moods, emociones, salud física y mental), patrones de sueño | Recolecta datos sensibles de salud con política de privacidad amplia | Mozilla: "recolecta highly-sensitive health information" |
| **Wysa** | 5M+ | Moods, emociones, texto de conversaciones, perfil de salud mental, historial de conversaciones (retenido hasta 10 años) | Sesiones anónimas sin login; datos agregados para investigación | HIPAA-compliant para B2B; D2C bajo privacy policy |
| **Woebot** | 2M+ | Patrones de síntomas, cambios en comportamiento, conversaciones de CBT digital | Anonimiza conversaciones; usado principalmente via employers | HIPAA-compliant para B2B |

**Volumen del mercado**: El mercado de apps de salud mental alcanzó USD 7.24B en 2025, proyectado a USD 22.51B para 2033 (CAGR ~17%). El mercado digital de salud mental en EE.UU. fue USD 7.46B en 2025, proyectado a USD 47.13B para 2035 (CAGR 20.25%).

**Fuentes**: [Technavio — Mental Health Apps Market](https://www.technavio.com/report/mental-health-apps-market-analysis), [SkyQuest — Mental Health Apps Market](https://www.skyquestt.com/report/mental-health-apps-market), [Consumer Reports — Mental Health Apps Privacy](https://www.consumerreports.org/health/health-privacy/mental-health-apps-and-user-privacy-a7415198244/), [Yahoo Finance — Mental Health Data Privacy Problem](https://finance.yahoo.com/news/the-mental-health-app-data-privacy-problem-is-getting-worse-161425472.html).

### 1.2 Datos de aseguradoras (claims, diagnósticos, prescripciones)

Las aseguradoras de salud y vida generan uno de los datasets más completos de salud mental de consumidores, aunque son datos **reactivos** (se generan después del evento clínico).

| Tipo de dato | Fuente | Contenido | Sensibilidad |
|-------------|--------|-----------|-------------|
| **Claims médicos** | Aseguradoras de salud (UnitedHealth, Cigna, Aetna, FONASA, ISAPREs) | Diagnósticos CIE-10 (F32.x depresión, F41.x ansiedad, etc.), fechas de servicio, procedimientos, costos | Muy alta |
| **Claims de farmacia** | PBMs (Express Scripts, CVS Caremark) | Prescripciones psiquiátricas (SSRIs, benzodiacepinas, antipsicóticos), dosificación, adherencia, cambios de medicación | Muy alta |
| **Claims de discapacidad** | Aseguradoras de vida/disability (MetLife, Prudential, Swiss Re) | Duración de incapacidad, diagnóstico, pronóstico de retorno al trabajo | Muy alta |
| **Datos de underwriting** | Aseguradoras de vida | Historial de diagnósticos, hospitalizaciones psiquiátricas, intentos de suicidio, medicación actual | Muy alta |
| **Datos de programas de wellness** | Aseguradoras con wellness integrado | Engagement con programas de bienestar, resultados de screening, uso de recursos de salud mental | Alta |

**Dimensión del mercado de claims**: El porcentaje de claims de seguro con diagnóstico de salud mental creció del 11.83% al 17.43% entre 2017 y 2022. El costo de servicios de salud mental aumentó 69% en ese período. El costo por paciente de salud mental subió 14% entre 2022 y 2024.

**Datos actuariales**: Los modelos actuariales para salud mental aplican ajustes en incrementos del 25% sobre la prima estándar. La falta de datos granulares hace que el underwriting de salud mental sea más lento que para condiciones físicas. Hay más de 200 formas clasificadas de enfermedad mental, complicando la modelización.

**Fuentes**: [Holmes Murphy — Mental Health Coverage 2025](https://www.holmesmurphy.com/blog/evolving-mental-health-coverage-in-2025/), [British Actuarial Journal — Mental Health in Life Insurance](https://www.cambridge.org/core/journals/british-actuarial-journal/article/mental-health-working-party-data-and-modelling-considerations-for-mental-health-in-life-insurance/0CB30139A7BF08173523294D59527EB4), [Washington State Insurance Commissioner — Mental Health Cost Trends](https://www.insurance.wa.gov/laws-rules/legislation-and-rulemaking/legislative-committees-and-work-groups/behavioral-health-services-federal-grant/mental-health-service-cost-and-use-trends).

### 1.3 Datos de redes sociales (señales comportamentales implícitas)

Las redes sociales son la fuente más masiva y más éticamente problemática de datos de salud mental de consumidores. No son datos declarados sino **inferidos** del comportamiento digital.

| Señal | Plataforma | Correlación con salud mental | Uso actual |
|-------|-----------|------------------------------|-----------|
| **Sentiment de publicaciones** | Twitter/X, Facebook, Reddit | Textos con lenguaje negativo, repetición de frases → correlación con depresión | Investigación académica, vigilancia epidemiológica |
| **Patrones temporales** | Todas | Posts nocturnos, cambios bruscos de frecuencia → señales de insomnio, ansiedad | Modelos de ML detectan depresión con alta precisión |
| **Estética visual** | Instagram | Imágenes oscuras, filtros de bajo contraste → correlación con depresión | Investigación (no aplicado comercialmente de forma directa) |
| **Engagement patterns** | Todas | Aislamiento digital (dejar de interactuar), scrolling compulsivo | Diseño de algoritmos (controversia Meta) |
| **Contenido consumido** | TikTok, YouTube | Búsqueda repetida de contenido sobre ansiedad, trauma, suicidio | Algoritmos de recomendación (amplificación) |
| **Grafos sociales** | Facebook, WhatsApp | Reducción de conexiones sociales activas → correlación con soledad | Interno de las plataformas |

**El caso Meta**: Más de 40 estados de EE.UU. demandaron a Meta en 2023, alegando que diseñó sus plataformas para ser adictivas y dañar la salud mental de menores. Documentos internos (filtrados por Frances Haugen, 2021) mostraron que **Meta sabía que Instagram empeoraba la imagen corporal, ansiedad y depresión en adolescentes**. Para febrero 2026, el MDL incluye más de 1,700 casos. Meta recolecta datos comportamentales de 3.9B+ usuarios que constituyen, en efecto, el mayor dataset implícito de salud mental del mundo, aunque nunca es descrito como tal.

**Fuentes**: [PMC — Mental Health Analysis in Social Media](https://pmc.ncbi.nlm.nih.gov/articles/PMC9810253/), [Springer — Emotional Sentiment Analysis](https://link.springer.com/article/10.1007/s13278-022-01000-9), [PBS — States Sue Meta](https://www.pbs.org/newshour/politics/more-than-40-states-sue-meta-claiming-its-social-platforms-are-addictive-and-harm-childrens-mental-health), [Motley Rice — Facebook Mental Health Lawsuit](https://www.motleyrice.com/social-media-lawsuits/meta/facebook).

### 1.4 Datos de patrones de compra (e-commerce)

La correlación entre patrones de consumo y salud mental es bidireccional y crecientemente estudiada.

| Patrón de compra | Correlación | Evidencia |
|------------------|-------------|-----------|
| **Compras impulsivas nocturnas** | Ansiedad, insomnio, depresión | 54% de personas con problemas de salud mental sienten que sitios de e-commerce facilitan gastar más de lo que pueden |
| **Aumento súbito de gasto** | Fase maníaca (bipolaridad), estrés agudo | Money & Mental Health Policy Institute (UK): relación documentada |
| **Compras repetitivas de "retail therapy"** | Depresión, baja autoestima | 70% de consumidores con respuesta emocional fuerte a publicidad compran más |
| **Abandono de compras habituales** | Apatía, anhedonia (depresión) | Señal indirecta de retirada social |
| **Compras de alcohol/medicamentos OTC** | Automedicación, abuso de sustancias | Correlación documentada pero éticamente inmanejable para targeting |

**Mercado de neuromarketing**: El mercado global de neuromarketing crecerá de USD 1.5B (2020) a USD 21.3B para 2030. El mercado de emotional analytics alcanzó USD 5.1B en 2025. Dos tercios de los marketers planean aumentar inversión en tecnologías de neuromarketing (EEG, eye-tracking).

**Controversia fundamental**: Usar datos de compra para inferir estado de salud mental del consumidor **cruza una línea ética significativa**. No hay regulación específica que lo prohíba (los datos de compra no son "datos de salud" bajo HIPAA), pero la convergencia con datos de salud crea riesgos regulatorios crecientes bajo las nuevas leyes de privacidad de consumidores de salud (Washington MHMDA, Nevada SB 370).

**Fuentes**: [Money & Mental Health — Online Shopping](https://www.moneyandmentalhealth.org/online-shopping-mental-health/), [Frontiers — Depression, Anxiety and Shopping Addiction](https://www.frontiersin.org/journals/public-health/articles/10.3389/fpubh.2024.1382910/full), [Amra & Elma — Emotional Marketing Statistics 2025](https://www.amraandelma.com/emotional-marketing-statistics/).

### 1.5 Datos de wearables del consumidor

Los wearables consumer (no corporativos) generan datos fisiológicos con valor predictivo creciente para salud mental.

| Biomarcador | Dispositivo | Valor predictivo para salud mental | Madurez |
|------------|------------|-----------------------------------|---------|
| **HRV** (Heart Rate Variability) | Apple Watch, Oura, Whoop, Garmin, Fitbit | HRV bajo sostenido → estrés crónico, depresión. ML alcanza hasta 99% de precisión en predicción de estrés con HRV + otros biomarcadores | Alta |
| **Patrones de sueño** | Todos los wearables | Insomnio → depresión y ansiedad. Disrupciones del sueño → predictor de episodios maníacos. Asociación moderada con síntomas depresivos | Alta |
| **Cortisol** (no invasivo) | Smartwatches experimentales (biosensores de sudor) | Cortisol elevado → estrés fisiológico directo. Patrón "gold standard" de estrés. Wearables con nanopartículas de oro en PDMS para detección en sudor | Emergente (2025-2026) |
| **EDA** (Electrodermal Activity) | Fitbit Sense, Empatica | Respuesta de estrés agudo. Complemento de HRV para detección multimodal | Media |
| **Actividad física** | Todos | Sedentarismo sostenido → correlación con depresión. Reducción súbita de actividad → señal de alerta | Alta |
| **Temperatura corporal** | Oura, Apple Watch | Alteraciones circadianas → trastornos del ánimo | Media |

**Mercado**: El mercado global de smart wearables genera datos de salud a escala masiva. Más del 50% de wearables en 2025 incorporan IA para predicciones de salud. El mercado de dispositivos de tracking de estrés: USD 2,843M (2025), proyectado a USD 5,291M (2035) con CAGR de 6.4%.

**Limitaciones**: Faltan protocolos estandarizados para validar señales fisiológicas de wearables como indicadores de salud mental. El Garmin stress score mostró solo valor predictivo marginal para estrés subjetivo. Los modelos funcionan bien en laboratorio pero la generalizabilidad a contextos reales es limitada.

**Fuentes**: [PMC — Assessing Stress Levels vs. Wearable Measurements](https://pmc.ncbi.nlm.nih.gov/articles/PMC12647429/), [MDPI — Smartwatches for Stress](https://www.mdpi.com/1999-4893/18/7/419), [PMC — ML Fatigue Classification HRV + Cortisol](https://pmc.ncbi.nlm.nih.gov/articles/PMC12602915/), [Future Market Insights — Stress Tracking Devices](https://www.futuremarketinsights.com/reports/stress-tracking-devices-market).

### 1.6 Datos de telemedicina y EHR (Electronic Health Records)

Los registros electrónicos de salud y las plataformas de telemedicina son la fuente más clínicamente rigurosa de datos de salud mental del consumidor.

| Tipo de dato | Fuente | Contenido | Sensibilidad |
|-------------|--------|-----------|-------------|
| **Diagnósticos formales** | EHR (Epic, Cerner, Valant) | CIE-10 codificado, criterios DSM-5 | Muy alta |
| **Notas clínicas** | EHR + telemedicina | Observaciones del profesional, plan de tratamiento, evolución | Muy alta |
| **Resultados de screening** | Plataformas de telemedicina (Amwell, MDLive, Teladoc) | PHQ-9, GAD-7, PCL-5 (PTSD), AUDIT (alcohol) | Alta |
| **Datos de prescripción** | EHR + farmacias | Medicación, dosificación, cambios, adherencia | Muy alta |
| **Transcripciones de sesiones** | Plataformas con IA (Talkspace, BetterHelp, Cerebral) | Texto completo de sesiones terapéuticas | Extremadamente alta |
| **Datos de engagement** | Plataformas de telemedicina | Frecuencia de citas, cancelaciones, no-shows, sesiones nocturnas | Media-Alta |

**Mercado de behavioral health EHR**: USD 3.56B en 2024, proyectado a USD 14.22B para 2034 (CAGR 14.85%). En EE.UU., USD 286.74M en 2024, creciendo a CAGR de 10.37%.

**LATAM**: El mercado de virtual care solutions en LATAM fue USD 1.75B en 2024, proyectado a USD 24.2B para 2034 (CAGR 30.4%). El segmento de behavioral care representó el 43% del revenue en 2024. LATAM tiene solo 8.2 profesionales de salud mental por 100,000 personas (Centroamérica, México, Caribe Latino), creando una enorme brecha que la telemedicina está llenando.

**Plataformas LATAM relevantes**:
- **1DOC3** (Colombia): USD 10M Series B (enero 2025), expandiendo behavioral health en LATAM
- **Zenklub** (Brasil): Lanzó herramienta de matching terapéutico con IA (diciembre 2024)
- **Pura Mente** (Argentina): App de meditación/mindfulness, 1M+ usuarios
- **Vittude** (Brasil): Terapia online B2B, clientes corporativos crecieron 300% post-COVID

**Fuentes**: [NOVA One Advisor — LATAM Virtual Care Market](https://www.novaoneadvisor.com/report/latin-america-virtual-care-solutions-market), [Grand View Research — LATAM Telehealth](https://www.grandviewresearch.com/industry-analysis/latin-america-telehealth-market-report), [Towards Healthcare — Behavioral Health EHR Market](https://www.towardshealthcare.com/insights/behavioral-health-ehr-market-sizing).

### Tabla resumen: clasificación de datos de consumidores

| Categoría | Tipo de dato | Fuente | Sensibilidad | Volumen | Valor predictivo |
|-----------|-------------|--------|-------------|---------|-----------------|
| **Apps de salud mental** | Assessments, moods, transcripciones de chatbot, progreso terapéutico | BetterHelp, Talkspace, Wysa, Woebot, Calm, Headspace | Muy alta | Alto (100M+ usuarios combinados) | Alto |
| **Claims de seguro** | Diagnósticos CIE-10, prescripciones, costos, duración de incapacidad | Aseguradoras, PBMs | Muy alta | Muy alto (miles de millones de claims/año) | Alto (pero reactivo) |
| **Redes sociales** | Sentimiento, patrones temporales, engagement, contenido consumido | Meta, X, TikTok, Reddit | Media-Alta (inferido, no declarado) | Masivo (3.9B+ usuarios Meta) | Medio (correlación, no causalidad) |
| **E-commerce** | Patrones de compra, horarios, categorías, frecuencia | Amazon, Mercado Libre, Shopify stores | Media | Masivo | Bajo-Medio (indicador indirecto) |
| **Wearables** | HRV, sueño, actividad, EDA, cortisol | Apple Watch, Oura, Fitbit, Whoop | Alta | Creciente (500M+ wearables activos) | Alto (fisiológico directo) |
| **EHR / Telemedicina** | Diagnósticos, notas clínicas, prescripciones, resultados de screening | Epic, Cerner, Teladoc, plataformas LATAM | Muy alta | Alto (80% consumidores EE.UU. usaron telemedicina al menos una vez) | Muy alto |

---

## 2. ¿Quién valora estos datos y cuánto paga?

### 2.1 Aseguradoras de vida y salud (modelos actuariales)

**El comprador más obvio y con mayor disposición de pago.**

Las aseguradoras necesitan datos de salud mental de consumidores para:

1. **Pricing y risk assessment**: Ajustar primas basándose en riesgo real de claims de salud mental. Los claims de salud mental crecieron del 11.83% al 17.43% de todos los claims entre 2017-2022.
2. **Reducción de claims**: Intervención temprana reduce costos. Programas de wellness reducen claims en USD 190 por cada USD 100 invertidos (ROI 1.9x).
3. **Modelos predictivos**: Pasar de modelos reactivos (claims ya generados) a modelos predictivos (quién va a generar claims).
4. **Underwriting automatizado**: LexisNexis Risk Classifier combina datos médicos y no-médicos para scoring de riesgo de mortalidad. Munich Re ya utiliza estos modelos.

**El caso Swiss Re + Wysa**:
- Swiss Re (la reaseguradora más grande del mundo) se asoció con Wysa para crear **Wysa Assure**.
- Modelo B2B2C: la aseguradora distribuye la app a sus asegurados.
- Incluye **sistema propietario de risk scoring** de salud mental.
- Disponible en tres continentes: MassMutual (EE.UU.), Ascenda (Australia), Eagle Insurance (Mauritius), Momentum (Sudáfrica).
- Beneficios reportados: acelera retorno al trabajo, reduce costos de claims de discapacidad.

**Disposición de pago**: USD 1-5/asegurado/mes (modelo SaaS B2B2C) + contratos de datos agregados de millones de USD para modelos actuariales.

**¿Cuánto pagarían por datos de terceros?**
- **Datos de claims desidentificados**: Contratos de millones de USD anuales (IQVIA, Optum).
- **Datos predictivos de wellness digital**: Emergente, sin pricing establecido. El modelo Swiss Re + Wysa sugiere que pagan por la plataforma + datos integrados, no por datasets crudos.
- **Risk scores de salud mental**: LexisNexis Risk Classifier con datos médicos es producto premium para life insurance underwriting.

**Fuentes**: [Swiss Re — Wysa Assure](https://www.swissre.com/reinsurance/our-capabilities/life-health-re/wysa-assure-insurance-mental-wellbeing-app.html), [LexisNexis — Risk Classifier with Medical Data](https://www.munichre.com/us-life/en/insights/product-innovation/lexisnexis-risk-classifier-medical-data.html), [Insurance Thought Leadership — Behavioral Insurance](https://www.insurancethoughtleadership.com/underwriting/behavioral-insurance-reshapes-risk-models).

### 2.2 Farmacéuticas (market sizing, patient identification)

**El segundo comprador más grande, con presupuestos masivos.**

Las farmacéuticas usan datos de salud mental de consumidores para:

| Uso | Descripción | Valor |
|-----|------------|-------|
| **Market sizing** | ¿Cuántas personas tienen depresión no tratada en Chile? ¿Cuál es el mercado para un nuevo ansiolítico? | Estratégico — define inversión de I+D |
| **Patient identification** | ¿Quiénes son candidatos para un nuevo tratamiento? ¿Dónde están geográficamente? | Muy alto — define estrategia de lanzamiento |
| **Real-world evidence (RWE)** | ¿Cómo funcionan los medicamentos fuera del ensayo clínico? ¿Cuál es la adherencia real? | Alto — exigido por FDA/EMA post-aprobación |
| **Market share** | ¿Qué porcentaje de pacientes con depresión usan SSRI vs. SNRI vs. terapia? | Alto — define estrategia comercial |
| **Competitive intelligence** | ¿Cómo se comportan los pacientes que cambian de mi medicamento al de la competencia? | Medio-Alto |

**¿Cuánto pagan?**
- IQVIA facturó **USD 15.4B en revenue en 2024** (toda la empresa). Tiene 31.85% del market share en health analytics.
- Optum: 23.54% del market share.
- Contratos farmacéuticos con IQVIA para datos desidentificados: **USD 1M-50M+ anuales** dependiendo del alcance.
- El mercado global de de-identified health data fue **USD 8.09B en 2024**, proyectado a USD 13.59B para 2030 (CAGR 9.07%).
- El segmento de farmacéuticas es el que crece más rápido como comprador de estos datos.

**Fuentes**: [Grand View Research — De-identified Health Data Market](https://www.grandviewresearch.com/industry-analysis/de-identified-health-data-market-report), [6sense — IQVIA Market Share](https://6sense.com/tech/health-analytics/iqvia-market-share).

### 2.3 Gobiernos (vigilancia epidemiológica)

**Comprador con menor capacidad de pago pero con mandato público.**

Los gobiernos no "compran" datos en sentido comercial (generalmente), pero sí:

| Mecanismo | País/Organización | Qué buscan | Presupuesto |
|-----------|------------------|-----------|------------|
| **Vigilancia epidemiológica** | CDC/SAMHSA (EE.UU.) | Prevalencia de condiciones, tendencias temporales, disparidades | SAMHSA + ONC invirtieron USD 20M+ en health IT para behavioral health (2024) |
| **Population health analytics** | OMS, PAHO, OPS | Datos comparativos internacionales, carga de enfermedad | Mercado de population health analytics: USD 3.6B (2025), proyectado a USD 16.46B (2032) |
| **Encuestas nacionales** | Chile (SUSESO), México (NOM-035) | Riesgos psicosociales poblacionales | Financiado con presupuesto público |
| **Licitaciones de software** | Mutuales chilenas (ACHS, IST, Mutual) | Herramientas de intervención post-diagnóstico | Contratos anuales |
| **Reportes OECD** | OECD Health at a Glance | Benchmarks internacionales de salud mental | Cuotas de membresía |

**Dato clave**: En 2025, el CDC experimentó disrupciones en sus datos de salud mental (remoción temporal de archivos BRFSS y YRBSS, despidos de personal de SAMHSA NSDUH) — luego restaurados por orden judicial. Esto subraya la fragilidad de la infraestructura de datos de salud mental gubernamental y la oportunidad para fuentes alternativas.

**Fuentes**: [CDC — Mental Health Data Sources](https://www.cdc.gov/mental-health/about-data/mental-health-data-sources.html), [OECD — Health at a Glance 2025: Mental Health](https://www.oecd.org/en/publications/health-at-a-glance-2025_8f9e3f98-en/full-report/mental-health_24af6094.html), [PAHO — Surveillance of NCDs and Mental Health](https://www.paho.org/en/topics/surveillance-and-monitoring-ncds-and-mental-health).

### 2.4 Empresas de marketing (segmentación por estado emocional)

**El comprador más controversial.**

El marketing emocional es una industria multimillonaria que busca capturar el estado emocional del consumidor para optimizar campañas:

| Métrica | Valor | Fuente |
|---------|-------|--------|
| Mercado de emotional analytics | **USD 5.1B** (2025) | Múltiples |
| Mercado de neuromarketing | USD 1.5B (2020) → **USD 21.3B** (2030) | Múltiples |
| % consumidores que compran más con respuesta emocional fuerte | **70%** | Múltiples |
| % marketers que aumentarán inversión en neuromarketing | **~66%** | Múltiples |

**Cómo usan datos de salud mental (de forma implícita)**:
- **Targeting de mood**: Facebook Ads permite segmentar por intereses como "ansiedad", "depresión", "terapia" — no es dato de salud formal, pero es proxy directo.
- **Retargeting post-vulnerabilidad**: Usuarios que buscan contenido sobre salud mental reciben ads de apps, suplementos, terapia.
- **Diseño de nudges**: Plataformas de e-commerce usan "nudges personalizados" que son más difíciles de resistir para personas con problemas de salud mental (54% reportan que sitios facilitan gastar más de lo que pueden).

**Por qué es controversial**: Segmentar publicidad hacia personas vulnerables usando datos que infieren estado de salud mental es una forma de explotación, aunque técnicamente no viola HIPAA (los datos de comportamiento online no son PHI). Sin embargo, la tendencia regulatoria (FTC, Washington MHMDA) va en dirección de restringir estos usos.

**Fuentes**: [Amra & Elma — Emotional Marketing Statistics 2025](https://www.amraandelma.com/emotional-marketing-statistics/), [Amra & Elma — Neural Marketing Statistics 2025](https://www.amraandelma.com/neural-marketing-statistics/).

### 2.5 Investigadores y academia

**Compradores con menor presupuesto pero alto valor de legitimación.**

| Dataset / Fuente | Alcance | Acceso | Uso |
|-----------------|---------|--------|-----|
| **IQVIA Real-World Data** | Claims desidentificados globales | Licencia académica (reducida) | RWE, epidemiología, ensayos virtuales |
| **Optum Clinformatics** | Claims desde 2000 (EE.UU.) | Suscripción | Estudios de cohorte, análisis de outcomes |
| **Healthy Minds Study** | 96,000+ estudiantes universitarios (2024-2025) | Reportes públicos | Salud mental estudiantil |
| **MHA Work Health Survey** | 75,000+ encuestas desde 2015 | Reportes públicos | Benchmark de bienestar |
| **Datos de apps (Wysa, Woebot)** | Millones de conversaciones anonimizadas | Partnerships de investigación | NLP para detección de depresión, validación de intervenciones |
| **Reddit / Twitter datasets** | Posts públicos sobre salud mental | Scraping (zonas grises éticas) | Sentiment analysis, detección temprana |

**Fuentes**: [JMIR Mental Health — Surveillance and Epidemiology](https://mental.jmir.org/themes/836-mental-health-surveillance-and-epidemiology/2024), [DATA.GOV — Mental Health Datasets](https://catalog.data.gov/dataset/?tags=mental-health).

### 2.6 Plataformas de fintech (credit scoring basado en salud mental)

**El comprador más emergente y potencialmente más peligroso.**

El alternative credit scoring está creciendo agresivamente, incorporando datos no tradicionales:

| Dato usado en credit scoring | ¿Incluye salud mental? | Regulación |
|------------------------------|----------------------|-----------|
| Pagos de servicios públicos | No directamente | Aceptado |
| Comportamiento de dispositivo móvil | Indirectamente (patrones de uso) | Zona gris |
| Actividad en redes sociales | Potencialmente (sentiment) | Controversial |
| Psychometric testing | Traits financieros, no salud mental per se | Regulado éticamente |
| Historial de compras | Correlación indirecta | Zona gris |

**Estado actual**: Un estudio en Kenia (2025) mostró que psychometric testing aumentó tasas de aceptación de crédito en 5% mejorando predicción de repago. Pero estos tests miden rasgos financieros (conscientiousness, risk aversion), NO condiciones de salud mental.

**Riesgo**: Si el alternative credit scoring incorpora datos que son proxies de salud mental (patrones de compra impulsiva, uso de apps de salud mental, etc.), se crea un ciclo de discriminación: personas con depresión → peor credit score → peor acceso a crédito → más estrés → peor salud mental.

**Regulación emergente**: Gartner proyecta que 60% de instituciones financieras incorporarán IA generativa en decisiones de crédito para 2027. EU AI Act (2024) y CFPB open banking rule (2026) exigen transparencia y equidad en modelos de scoring.

**Fuentes**: [Django Stars — Alternative Credit Scoring](https://djangostars.com/blog/alternative-credit-scoring/), [RiskSeal — Alternative Credit Scoring Trends 2026](https://riskseal.io/blog/future-trends-in-alternative-credit-scoring-for-fintech), [WEF — AI Credit Scoring Models](https://www.weforum.org/stories/2025/10/how-responsibly-deploying-ai-credit-scoring-models-can-progress-financial-inclusion/).

---

## 3. ¿Quién ya recolecta y/o vende estos datos?

### 3.1 Brokers de datos de salud

**Los intermediarios más grandes y problemáticos.**

| Empresa | Market Share | Qué vende | Datos de salud mental | Precio | Controversia |
|---------|-------------|-----------|----------------------|--------|-------------|
| **IQVIA** | 31.85% (health analytics) | Claims desidentificados, prescripciones, EHR, datos de mercado | Diagnósticos de salud mental, prescripciones psiquiátricas, prevalencia por geografía | Contratos de USD 1M-50M+/año con farmas | Cuestionado por alcance de desidentificación |
| **Optum** (UnitedHealth) | 23.54% | Clinformatics Data Mart: claims desde 2000 | Claims de salud mental desidentificados | Suscripciones enterprise | Conflicto de intereses: subsidiaria de la mayor aseguradora de EE.UU. |
| **LexisNexis Risk Solutions** | Líder en risk scoring | Risk Classifier: datos médicos + no-médicos para scoring de mortalidad | Historial de prescripciones, claims médicos, datos de laboratorio integrados con records públicos | Producto premium para underwriting | Integración de datos médicos con datos de consumidor para scoring |
| **Data brokers no regulados** | Fragmentado | Listas de personas con condiciones de salud mental + demografía | Depresión, ADHD, ansiedad, bipolaridad, insomnio + edad, zip code, ingreso, estado civil, net worth, credit score | **USD 275 por 5,000 registros agregados** hasta **USD 75,000-100,000 por acceso anual individualizado** | **Reporte Duke University (2023)**: 11 de 37 brokers contactados vendían datos de salud mental |

**Mercado de data brokers**: USD 294.27B en 2025, proyectado a USD 448.32B para 2031 (CAGR 7.27%). El segmento de healthcare crece más rápido: CAGR 14.34%.

**Mercado de healthcare data monetization**: USD 581M-981M en 2024 (según fuente), proyectado a USD 1.16B-2.79B para 2030-2031 (CAGR 14.9%-16.09%).

**Hallazgos clave del reporte Duke University (2023)**:
- 11 de 37 brokers contactados estaban dispuestos a vender datos de salud mental.
- Los 10 brokers más comprometidos ofrecían datos que incluían: depresión, ADHD, ansiedad, bipolaridad, insomnio.
- Los datos incluían demografía detallada: etnicidad, edad, género, zip code, religión, hijos, estado civil, net worth, credit score, fecha de nacimiento, status de padre/madre soltero.
- Los brokers preguntaban el propósito de compra, pero **no verificaban** las respuestas ni hacían background checks.
- No existe un set de mejores prácticas de la industria para el manejo de datos de salud mental.

**Fuentes**: [Duke University — Data Brokers and Mental Health Data](https://techpolicy.sanford.duke.edu/data-brokers-and-the-sale-of-americans-mental-health-data/), [NBC News — Buying Mental Health Data](https://www.nbcnews.com/tech/security/researcher-tried-buy-mental-health-data-was-surprisingly-easy-rcna70071), [Mordor Intelligence — Data Broker Market](https://www.mordorintelligence.com/industry-reports/data-broker-market), [Markets and Markets — Healthcare Data Monetization](https://www.marketsandmarkets.com/ResearchInsight/healthcare-data-monetization-market.asp).

### 3.2 Apps de salud mental con modelos de monetización de datos

| App | Qué datos monetiza | Cómo | A quién |
|-----|---------------------|------|---------|
| **BetterHelp** | Emails, IPs, respuestas de salud, questionnaire data | Compartía con Meta, Snapchat, Criteo para targeting de ads | Adtech (hasta multa FTC 2023) |
| **Cerebral** | Nombres, DOB, respuestas de assessments, detalles de tratamiento | Compartía con Google, TikTok, Meta via tracking pixels | Adtech (hasta multa FTC 2024) |
| **Headspace** | Datos de uso, Facebook ID, engagement | Comparte con Google y Facebook para ads personalizados | Adtech (actual) |
| **Calm** | Geolocalización, biométricos, datos de salud emocional | Política de privacidad amplia que permite uso extensivo | No claro |
| **Talkspace** | Device IDs, datos de sesiones (via persistent identifiers) | Colabora con plataformas de terceros para marketing | Adtech + partnerships |

**Patrón alarmante**: Mozilla Privacy Not Included (2023) encontró que **la mayoría de apps de salud mental tienen prácticas de privacidad deficientes**. Consumer Reports encontró que BetterHelp, Sanity & Self, Talkspace y Wysa enviaban datos a Facebook.

**Modelo alternativo emergente**: Apps como Wysa y Woebot están pivotando hacia B2B2C puro (la aseguradora o el employer paga, los datos son del usuario). Wysa Assure (con Swiss Re) es el ejemplo más exitoso de este modelo.

**Fuentes**: [FTC — BetterHelp](https://www.ftc.gov/news-events/news/press-releases/2023/07/ftc-gives-final-approval-order-banning-betterhelp-sharing-sensitive-health-data-advertising), [Mozilla — Mental Health Apps Privacy](https://www.mozillafoundation.org/en/privacynotincluded/articles/are-mental-health-apps-better-or-worse-at-privacy-in-2023/), [Private Internet Access — Privacy Dangers of Mental Health Apps](https://www.privateinternetaccess.com/blog/privacy-dangers-mental-health-apps/).

### 3.3 Redes sociales (datos implícitos)

| Plataforma | Usuarios | Datos de salud mental que genera | ¿Los monetiza? |
|-----------|---------|--------------------------------|---------------|
| **Meta (Facebook/Instagram)** | 3.9B+ | Comportamiento que infiere estado emocional, vulnerabilidad, engagement con contenido de salud mental, datos de menores | No vende "datos de salud mental" explícitamente, pero el targeting por intereses funciona como proxy. **1,700+ demandas** por daño a salud mental de menores. |
| **TikTok** | 1.5B+ | Contenido consumido sobre salud mental, patrones de uso, datos de menores | Algoritmo amplifica contenido de salud mental. Receptora de datos filtrados de Cerebral y Talkspace (sin su conocimiento explícita). |
| **X (Twitter)** | 600M+ | Posts públicos con contenido emocional, patrones temporales | Dataset más usado en investigación académica de salud mental (posts públicos). No vende datos de salud mental directamente. |
| **Reddit** | 500M+ | Posts en r/depression, r/anxiety, r/mentalhealth con contenido altamente personal | Datos públicos usados masivamente en investigación. Reddit vende acceso a API. |

**Fuentes**: [Springer — Emotional Sentiment Analysis of Social Media for Mental Health](https://link.springer.com/article/10.1007/s13278-022-01000-9), [PMC — Social Media, Big Data, and Mental Health](https://pmc.ncbi.nlm.nih.gov/articles/PMC4815031/).

### 3.4 Aseguradoras con programas de wellness para asegurados

| Modelo | Ejemplo | Cómo funciona | Datos generados |
|--------|---------|--------------|-----------------|
| **B2B2C app de salud mental** | Swiss Re + Wysa (Wysa Assure) | Aseguradora distribuye app a asegurados. Risk scoring integrado. | Moods, screening de salud mental, engagement, risk scores |
| **"Data for discounts"** | Aseguradoras que ofrecen descuentos por compartir datos de wearables | En 2025, modelo emergente donde policyholders comparten health metrics a cambio de pricing personalizado | HRV, sueño, actividad, stress levels |
| **Wellness rewards** | Momentum (Sudáfrica) + Wysa via Multiply Rewards | Asegurados acceden a Wysa como beneficio del programa de rewards | Uso de app, progreso, engagement |
| **Subsidio de plataforma** | Modelo mutual chilena (propuesto) | Mutual subsidia licencia de plataforma de intervención post-ISTAS-21 | Datos de intervención, métricas de resultado |

**Fuentes**: [Swiss Re — Mental Health Insurance](https://www.swissre.com/campaigns/mental-health.html), [SAS — Insurance Predictions 2025](https://www.sas.com/en_us/news/press-releases/2024/december/insurance-predictions-2025.html), [ITC Asia — Insurtech and Health Tech](https://asia.insuretechconnect.com/articles/bridging-gap-insurtech-health-tech-revolutionizing-mental-health-care-insurance).

### 3.5 Plataformas de telemedicina en LATAM

| Plataforma | País | Datos que genera | Funding | Usuarios |
|-----------|------|------------------|---------|---------|
| **1DOC3** | Colombia | Consultas de behavioral health, diagnósticos, prescripciones | USD 10M Series B (2025) | Expansión LATAM |
| **Zenklub** | Brasil | Matching terapéutico IA, sesiones, progreso | No público | Corporate + consumer |
| **Pura Mente** | Argentina | Meditación, mindfulness, engagement, moods | No público | 1M+ usuarios |
| **Vittude** | Brasil | Matching terapéutico, sesiones, empresas cliente | No público | B2B2C, 300% crecimiento post-COVID |
| **Betterfly** | Chile | Hábitos saludables (no salud mental directamente), datos de actividad → seguros de vida | USD 125M Series C (USD 1B valuación) | 3,000+ empresas |
| **Cuéntame** | México | IA para riesgos psicosociales, niveles de estrés, acceso a psicólogos | No público | B2B, México/Colombia/Chile |

**Ecosistema insurtech LATAM**: 536 insurtechs activas en 2025. USD 200M en funding. Brasil, México y Chile lideran. La integración health tech + insurtech está emergiendo como tendencia clave.

**Fuentes**: [Intelligent Health — HealthTech LATAM](https://www.intelligenthealth.tech/2024/08/22/five-healthtech-companies-revolutionising-healthcare-in-latin-america/), [MAPFRE — Insurtech LATAM 2025](https://www.mapfre.com/en/insights/innovation/insurtech-latin-america-2025-2026/), [FFNews — LATAM Insurtech 2025](https://ffnews.com/newsarticle/insurtech/latam-insurtech-sector-closes-2025-with-530-companies-and-us200-million-in-funding/).

---

## 4. Marco legal para datos de salud mental de consumidores

### 4.1 Estados Unidos: HIPAA, FTC y las nuevas leyes estatales

#### ¿HIPAA aplica a apps de salud mental del consumidor?

**En la mayoría de los casos, NO.**

| Escenario | ¿HIPAA aplica? | Protección real |
|-----------|---------------|----------------|
| App de terapia pagada directamente por el consumidor (BetterHelp D2C) | **No** — la app no es "covered entity" ni "business associate" | Mínima (solo FTC y leyes estatales) |
| App ofrecida via plan de salud del employer (BetterHelp B2B) | **Sí** — es parte del health plan | HIPAA completa |
| App de meditación (Calm, Headspace) | **No** — no es healthcare provider ni health plan | Mínima |
| Wearable del consumidor (Apple Watch, Fitbit) | **No** — el consumidor comparte voluntariamente | Ninguna bajo HIPAA |
| Plataforma de telemedicina con prescripción (Cerebral) | **Sí** — actúa como healthcare provider | HIPAA aplica |
| Datos de claims de aseguradora | **Sí** — aseguradoras son covered entities | HIPAA completa |

**Fuente**: [FTC — Health Privacy](https://www.ftc.gov/business-guidance/privacy-security/health-privacy).

#### FTC: el nuevo sheriff de datos de salud mental del consumidor

La FTC ha emergido como el regulador más activo para datos de salud mental de consumidores, llenando el vacío que HIPAA deja:

| Acción | Año | Target | Multa | Precedente clave |
|--------|-----|--------|-------|-----------------|
| GoodRx | 2023 | Datos de prescripciones compartidos con Meta, Google, Criteo | USD 1.5M civil penalty + USD 25M settlement | **Primera acción bajo Health Breach Notification Rule** |
| BetterHelp | 2023 | Datos de salud mental compartidos con Meta, Snapchat, Criteo | **USD 7.8M** (con reembolsos a consumidores) | Datos de assessments de salud mental = datos de salud |
| Cerebral | 2024 | Datos de assessments + tratamiento compartidos con Google, TikTok, Meta | **USD 7M** | Confirmó que assessments de salud mental son "health data" |
| **Health Breach Notification Rule (actualizada)** | **Julio 2024** | Todas las apps de salud no cubiertas por HIPAA | N/A (regla, no caso) | **Expandió cobertura a TODAS las apps de salud digital** |

**Cambio fundamental (julio 2024)**: La FTC actualizó la Health Breach Notification Rule para cubrir explícitamente:
- Apps de salud y wellness no cubiertas por HIPAA
- Websites que trackean condiciones de salud mental
- Dispositivos conectados a internet que recolectan datos de salud
- Cualquier disclosure no autorizado (incluyendo vía tracking pixels) ahora constituye "breach"
- Notificación obligatoria en **60 días** desde descubrimiento
- Para breaches de 500+ registros: notificación simultánea a la FTC

**Fuentes**: [FTC — Updated Health Breach Notification Rule](https://www.ftc.gov/business-guidance/blog/2024/04/updated-ftc-health-breach-notification-rule-puts-new-provisions-place-protect-users-health-apps), [FTC — Consumer Health Information](https://www.ftc.gov/business-guidance/blog/2024/04/consumer-health-information-handle-extreme-care), [HIPAA Journal — FTC HBNR Final Rule](https://www.hipaajournal.com/ftc-health-breach-notification-rule-final-rule-2024/).

#### Leyes estatales: Washington MHMDA y Nevada SB 370

A partir de marzo 2024, dos estados crearon protecciones específicas para datos de salud del consumidor:

| Ley | Estado | Vigente desde | Cobertura | Derechos del consumidor | Private right of action |
|-----|--------|--------------|-----------|------------------------|------------------------|
| **My Health My Data Act** | Washington | 31 marzo 2024 | Toda entidad que recolecte, comparta o venda "consumer health data" (incluye salud mental) | Confirmar recolección, acceder, eliminar, retirar consentimiento | **Sí** — el consumidor puede demandar directamente |
| **SB 370** | Nevada | 31 marzo 2024 | Similar a Washington pero definición más estrecha | Confirmar, acceder, eliminar, retirar consentimiento. Respuesta en 45 días. | No — violaciones = trade practices |

**Implicación**: Estas leyes codifican a nivel estatal las acciones de la FTC. Cualquier empresa que recolecte datos de salud mental de consumidores en Washington debe cumplir con estándares más estrictos que HIPAA en ciertos aspectos (no exige ser "covered entity" — aplica a CUALQUIER empresa).

**Fuentes**: [Orrick — Washington and Nevada Consumer Health Privacy Laws](https://www.orrick.com/en/Insights/2024/03/Nevada-and-Washington-Consumer-Health-Privacy-Laws-Take-Effect-March-31), [Goodwin — MHMDA Guide](https://www.goodwinlaw.com/en/insights/publications/2024/03/alerts-technology-hltc-my-health-my-data-act-mhmda), [Morse Law — Consumer Health Data Law](https://www.morse.law/news/its-not-just-hipaa-anymore-heres-what-you-need-to-know-about-the-new-consumer-health-data-laws/).

### 4.2 Unión Europea: GDPR

Los datos de salud mental de consumidores son **categoría especial** bajo Art. 9 GDPR:

| Aspecto | Regulación |
|---------|-----------|
| **Clasificación** | Datos de salud = categoría especial. Prohibido procesar por defecto. |
| **Bases legales permitidas** | Consentimiento explícito (difícil en contexto de desbalance de poder), obligación legal, interés público en salud, medicina preventiva con profesional bajo secreto |
| **¿Se pueden vender?** | **Prácticamente no.** GDPR prohíbe explícitamente que el procesamiento de datos de salud por interés público "resulte en que terceros procesen datos personales para otros propósitos como empleadores o compañías de seguros y banca." |
| **Enforcement 2024-2025** | 2,245 multas GDPR acumuladas totalizando EUR 5.65B. Healthcare: 237 multas por EUR 22.8M. Caso notable: farmacia sueca multada EUR 3.2M por metapixels que filtraron datos de clientes a Meta. |
| **Apps de salud mental** | Deben cumplir GDPR si procesan datos de residentes de la UE. Requieren DPO, evaluación de impacto, consentimiento granular. |

**Fuentes**: [Art. 9 GDPR](https://gdpr-info.eu/art-9-gdpr/), [CMS — GDPR Enforcement Tracker](https://cms.law/en/deu/publication/gdpr-enforcement-tracker-report/life-science-healthcare), [Skillcast — Biggest GDPR Fines 2025](https://www.skillcast.com/blog/biggest-gdpr-fines-2025).

### 4.3 Chile: Ley 19.628 (actual) + Ley 21.719 (nueva, dic 2026)

| Aspecto | Ley 19.628 (vigente) | Ley 21.719 (1 dic 2026) |
|---------|---------------------|------------------------|
| **Datos de salud** | Sensibles pero débilmente protegidos | **Categoría especial** comparable a GDPR |
| **Consentimiento** | Genérico | Libre, informado, específico, inequívoco. Revocable en cualquier momento |
| **Autoridad** | Sin autoridad independiente | **Agencia de Protección de Datos Personales** (autónoma) |
| **Sanciones** | Mínimas | Hasta **20,000 UTM (~USD 1.39M)**. Suspensión de uso de datos hasta 30 días |
| **Apps de salud mental** | Zona gris | Requieren consentimiento explícito, encriptación, acceso limitado |
| **Venta de datos de salud** | No explícitamente regulada | **Muy restringida** — requiere base legal sólida + consentimiento explícito |
| **Derechos del consumidor** | Acceso y rectificación (limitados) | Acceso, rectificación, cancelación, **portabilidad** |
| **Impacto en modelo de datos** | Bajo | **Alto** — toda plataforma que recolecte datos de salud de consumidores deberá adaptarse |

**Implicación para la idea**: Toda plataforma que opere en Chile recolectando datos de salud mental de consumidores (pacientes, asegurados, usuarios de apps) debe estar preparada para la Ley 21.719 desde ahora. El diseño "privacy by design" no es opcional — es requisito legal a partir de diciembre 2026.

**Fuentes**: [BCN — Ley 21.719](https://www.bcn.cl/leychile/navegar?idNorma=1209272), [Netsus — Ley 21.719](https://netsus.com/ley-de-proteccion-de-datos-en-chile/), [EMOL — Protección de Datos 2026](https://www.emol.com/noticias/Economia/2025/05/07/1165678/proteccion-de-datos-personales.html).

### 4.4 México: LFPDPPP

| Aspecto | Regulación |
|---------|-----------|
| **Datos de salud** | Categoría sensible que requiere **consentimiento escrito expreso** |
| **Aviso de privacidad** | Obligatorio antes de recolectar cualquier dato personal |
| **Apps de salud mental** | Deben incluir aviso de privacidad claro, obtener consentimiento escrito para datos de salud |
| **Sanciones** | Hasta 320,000x salario mínimo diario |
| **Enforcement** | Moderado — INAI (Instituto Nacional de Transparencia) |

**Fuentes**: [Secure Privacy — Mexico LFPDPPP Guide](https://secureprivacy.ai/blog/mexico-privacy-law-lfpdppp-2025).

### 4.5 Brasil: LGPD

| Aspecto | Regulación |
|---------|-----------|
| **Datos de salud** | Categoría sensible (datos sensíveis) — incluye datos relativos a salud y biométricos |
| **Base legal** | Consentimiento libre, específico, informado e inequívoco. O protección de la salud por profesionales de salud |
| **Apps de salud mental** | Deben cumplir LGPD si procesan datos de residentes brasileños. Requieren DPO. |
| **Enforcement** | ANPD (incrementando actividad). Consumer authorities más activas. Healthcare: 40% de hospitales auditados sin encriptación; multas totales BRL 12M (~USD 2.4M) |
| **Sanciones** | Hasta 2% del revenue en Brasil o **R$50M (~USD 10M)** por violación |

**Fuentes**: [ICLG — Brazil Data Protection 2025-2026](https://iclg.com/practice-areas/data-protection-laws-and-regulations/brazil), [IBA — Protection of Health Data in Brazil](https://www.ibanet.org/protections-health-data-brazilds).

### 4.6 Colombia: Ley 1581 de 2012

| Aspecto | Regulación |
|---------|-----------|
| **Datos de salud** | Categoría sensible. Procesamiento prohibido por defecto, salvo con autorización explícita del titular |
| **Transferencias internacionales** | Datos médicos pueden intercambiarse cuando el tratamiento lo requiera por razones de salud pública |
| **Enforcement** | SIC (Superintendencia de Industria y Comercio) |
| **Sanciones** | Hasta 2,000 salarios mínimos mensuales |

**Fuentes**: [Función Pública — Ley 1581](https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=49981), [SIC — FAQ Protección de Datos](https://www.sic.gov.co/preguntas-frecuentes-pdp).

### Tabla resumen: regulación de datos de salud mental de consumidores por jurisdicción

| Jurisdicción | ¿Datos de salud mental son sensibles? | ¿HIPAA/equivalente aplica a apps consumer? | ¿Se puede vender? | Enforcement (2025) | Tendencia |
|-------------|--------------------------------------|-------------------------------------------|-------------------|--------------------|-----------|
| **EE.UU. (HIPAA)** | Solo si son PHI (via covered entity) | **No** para la mayoría de apps D2C | Sí si desidentificado | Bajo (no cubre apps) | Estable |
| **EE.UU. (FTC)** | **Sí** (post-2023 enforcement) | **Sí** (HBNR actualizada julio 2024) | No sin consentimiento explícito | **Muy alto y creciente** | Endureciendo |
| **EE.UU. (Washington MHMDA)** | **Sí** | **Sí** (cualquier empresa) | Requiere consentimiento | Alto (private right of action) | Nueva ley |
| **UE (GDPR)** | **Sí** (Art. 9) | Sí (cualquier procesador) | **Prácticamente no** | Muy alto (EUR 5.65B acumuladas) | Estable alto |
| **Chile (actual 19.628)** | Sí pero débil | No hay equivalente | Zona gris | Bajo | En transición |
| **Chile (Ley 21.719, dic 2026)** | **Sí** (comparable a GDPR) | Aplica a cualquier empresa | **Muy restringido** | Alto (nueva Agencia) | Endureciendo dramáticamente |
| **México (LFPDPPP)** | **Sí** | Aplica a apps | Muy restringido | Moderado | Estable |
| **Brasil (LGPD)** | **Sí** | Aplica a apps | Restringido | Alto y creciente | Endureciendo |
| **Colombia (Ley 1581)** | **Sí** | Aplica con consentimiento | Restringido | Moderado | Estable |

---

## 5. Modelos éticos de recolección de datos de salud mental de consumidores

### 5.1 Data cooperatives

| Modelo | Ejemplo | Cómo funciona | Aplicación a salud mental |
|--------|---------|--------------|--------------------------|
| **Cooperativa de datos** | **MIDATA** (Suiza, fundada 2015) | Usuarios son copropietarios de una cooperativa sin fines de lucro. Recolectan datos de salud (EPR, wearables, apps) en una plataforma segura. Deciden colectivamente con quién compartir. Desarrollada por ETH Zurich y Bern University of Applied Sciences. | Usuarios de apps de salud mental podrían almacenar sus datos (moods, screening, progreso) en una cooperativa. Investigadores acceden con consentimiento colectivo. La cooperativa no tiene incentivo de vender a adtech. |
| **Cooperativa regional** | MIDATA (expandiendo a Alemania, Bélgica, Holanda, UK) | Misma infraestructura, cooperativas nacionales independientes. | Modelo replicable en LATAM: "MIDATA Chile" o "MIDATA LATAM" para datos de salud mental |

**Principios clave de MIDATA**:
- Todos los datasets encriptados; solo el titular tiene acceso a sus datos individuales
- Cada acceso a datos es registrado (audit log)
- Estructura cooperativa sin fines de lucro
- Open source
- Transparencia en gobernanza

**Fuentes**: [MIDATA.coop](https://www.midata.coop/en/home/), [Platform Cooperativism Consortium — MIDATA Podcast](https://platform.coop/blog/do-you-want-to-learn-more-about-health-data-cooperatives-listen-to-this-podcast-about-midata-coop/), [PMC — Potentials and Challenges of HDC Model](https://pmc.ncbi.nlm.nih.gov/articles/PMC6159824/).

### 5.2 Consent-first platforms

Plataformas donde el consumidor controla granularmente qué datos comparte, con quién, y por cuánto tiempo:

| Principio | Implementación |
|-----------|---------------|
| **Consentimiento granular** | El usuario elige: "Comparto mis datos de screening de ansiedad con investigadores de la U. de Chile por 12 meses" |
| **Revocabilidad** | Revocar consentimiento en cualquier momento. Los datos dejan de ser accesibles. |
| **Compensación** | El usuario puede recibir compensación (monetaria o en servicios) por compartir datos |
| **Transparencia** | Dashboard visible: quién accedió a qué datos, cuándo |
| **Portabilidad** | Exportar todos los datos en formato estándar (FHIR, CSV) |

### 5.3 User-owned data vaults

| Modelo | Ejemplo | Cómo funciona |
|--------|---------|--------------|
| **Data vault personal** | Citizen Health, Seqster | Usuarios agregan datos de salud (EHR, wearables, genómica, apps) en "vaults" encriptados. Eligen con quién compartir. Pueden recibir compensación. |
| **Personal Health Record (PHR)** | Apple Health Records, Google Health | Datos médicos del consumidor en su dispositivo. El consumidor decide con qué apps compartir. |
| **Blockchain-based** | Modelos experimentales | Datos de salud en blockchain con smart contracts que controlan acceso. Inmutabilidad del audit trail. |

### 5.4 Differential privacy

Técnica matemática que permite extraer insights de datasets sin revelar información individual:

| Concepto | Descripción | Aplicación a salud mental |
|----------|-------------|--------------------------|
| **Noise injection** | Se agrega ruido estadístico a cada dato individual antes de agregar | "30% de usuarios reportan ansiedad moderada" es preciso a nivel poblacional, pero no se puede determinar si un usuario específico reportó ansiedad |
| **Privacy budget (epsilon)** | Cuantifica cuánta privacidad se "gasta" con cada query | Limitar queries a datos de salud mental para prevenir inferencia |
| **Trade-off accuracy/privacy** | Más privacidad = menos precisión en el dato agregado | Para benchmarks de salud mental, el trade-off es aceptable |

**Fuentes**: [JMIR Mental Health — Differential Privacy in Federated Learning for Affect Recognition](https://mental.jmir.org/2024/1/e60003).

### 5.5 Federated learning (datos nunca salen del dispositivo)

**La tecnología más prometedora para datos de salud mental de consumidores.**

| Concepto | Descripción |
|----------|-------------|
| **Principio** | El modelo de ML va al dato (en el dispositivo del usuario), no el dato al modelo. Los datos de salud mental nunca salen del teléfono/dispositivo. |
| **Cómo funciona** | Cada dispositivo entrena un modelo local → los gradientes (no los datos) se envían al servidor → el servidor agrega gradientes de todos los dispositivos → modelo global mejorado se envía de vuelta |
| **FedMentor (2025)** | Framework de federated learning específico para salud mental. Asigna presupuestos de differential privacy por dominio. Fine-tunes de adaptadores LoRA para reducir comunicación. Privacy-preserving + fair + preciso. |
| **Aplicaciones actuales** | Detección de estrés con federated transfer learning, monitoreo de sueño para identificar síntomas tempranos de depresión, predicción de moods |

**Ventajas para datos de consumidores**:
- El consumidor mantiene control físico de sus datos
- Cumple con GDPR/Ley 21.719 por diseño (los datos nunca se transfieren)
- Permite modelos predictivos sin comprometer privacidad
- Escalable globalmente sin mover datos entre jurisdicciones

**Desafíos**:
- El noise de differential privacy puede degradar la precisión del modelo
- Datasets de salud mental sufren de desbalances demográficos → riesgo de bias
- Requiere dispositivos con capacidad de computación local

**Fuentes**: [Taylor & Francis — Federated Learning for Mental Health Prediction](https://www.tandfonline.com/doi/full/10.1080/21681163.2025.2509672), [arXiv — FedMentor](https://arxiv.org/html/2509.14275v2), [PMC — Federated Learning in Mental State Detection](https://pmc.ncbi.nlm.nih.gov/articles/PMC11631783/).

### Tabla comparativa de modelos éticos

| Modelo | Privacidad | Precisión de datos | Escalabilidad | Complejidad técnica | Madurez |
|--------|-----------|-------------------|--------------|--------------------|---------|
| **Data cooperative (MIDATA)** | Muy alta | Alta (datos reales con consentimiento) | Media (requiere masa crítica de miembros) | Media | Operacional (2015+) |
| **Consent-first platform** | Alta | Alta | Alta | Media | Emergente |
| **User-owned data vault** | Muy alta | Alta | Media-Alta | Alta | Emergente |
| **Differential privacy** | Alta (matemáticamente garantizada) | Media (noise trade-off) | Muy alta | Alta | Madura (Apple, Google lo usan) |
| **Federated learning** | Muy alta (datos no se mueven) | Media-Alta | Alta | Muy alta | Emergente-Madura (Google lo usa en Gboard) |

---

## 6. Oportunidades específicas para la idea de "datos de salud mental para modelos de riesgo"

### 6.1 ¿Cómo se complementa el dato de empleado con el dato de consumidor?

El [[datos-salud-mental-empleados-research|research de empleados]] cubre datos generados en contexto laboral (HRIS, ISTAS-21, engagement). Este research cubre datos generados en contexto de consumo (apps, claims, wearables, redes sociales). **La combinación es más valiosa que la suma de las partes**:

```
DATO DE EMPLEADO                      DATO DE CONSUMIDOR
(contexto laboral)                    (contexto personal)
─────────────────                     ──────────────────
ISTAS-21 / NOM-035                    PHQ-9, GAD-7 (via app personal)
Engagement laboral                    Uso de app de salud mental
Ausentismo / presentismo              Claims de seguro de salud
eNPS / pulse surveys                  Patrones de sueño (wearable)
Uso de EAP corporativo                Historial de telemedicina
Horas extras                          Comportamiento en redes sociales
         │                                      │
         └──────────────┬───────────────────────┘
                        │
              MODELO COMBINADO
         (predicción 360° de riesgo)
                        │
         ┌──────────────┼──────────────┐
         ▼              ▼              ▼
    RIESGO          RIESGO         RIESGO
    LABORAL         PERSONAL       INTEGRADO
    (burnout,       (depresión,    (visión
    rotación)       ansiedad)      completa)
```

**El gap que nadie cubre hoy**: Spring Health evalúa 12 condiciones pero no cruza con datos proxy del HRIS. IQVIA tiene claims pero no tiene datos de wellness digital. Las mutuales tienen ISTAS-21 pero no tienen datos de apps personales. **Nadie combina el dato laboral con el dato personal/consumer para crear un modelo de riesgo 360.**

### 6.2 ¿Hay un modelo B2B2C donde la plataforma recolecta datos del consumidor y vende insights a aseguradoras?

**Sí, y Swiss Re + Wysa es el proof of concept.**

```
MODELO B2B2C DE DATOS DE SALUD MENTAL

                    ASEGURADORA / MUTUAL
                    (paga por la plataforma)
                           │
                    ┌──────▼──────┐
                    │  PLATAFORMA  │
                    │  (SaaS B2B2C)│
                    └──────┬──────┘
                           │
                    ┌──────▼──────┐
                    │  CONSUMIDOR  │
                    │  (asegurado) │
                    └─────────────┘

FLUJO DE VALOR:
─────────────────────────────────────────────────────────────
1. Aseguradora contrata la plataforma (USD 1-5/asegurado/mes)
2. Asegurado usa la app (screening, CBT digital, meditación)
3. Datos se procesan: risk score individual (visible solo al usuario)
4. Insights agregados van a la aseguradora:
   - % de asegurados con riesgo alto de claims
   - Efectividad de intervenciones
   - Tendencias temporales
   - Benchmarks por segmento
5. Aseguradora ajusta modelos actuariales con datos reales
   (no claims reactivos, sino datos predictivos de wellness)
6. Claims se reducen → ROI para aseguradora → renewal del contrato
```

**Diferenciación vs. Swiss Re + Wysa**:
- Wysa Assure es una app de chatbot CBT, no un pipeline de datos multi-fuente.
- La oportunidad está en **combinar múltiples fuentes de datos del consumidor** (app + wearable + screening + engagement) en un modelo de riesgo unificado que la aseguradora no puede construir sola.
- En LATAM, nadie está haciendo esto. Las mutuales chilenas tienen la obligación legal pero no la herramienta digital.

### 6.3 ¿Qué datos de consumidor son los más valiosos para modelos actuariales?

Basándose en la investigación actuarial y el modelo de LexisNexis Risk Classifier:

| Dato | Valor actuarial | Disponibilidad | Obstáculos |
|------|----------------|----------------|-----------|
| **Claims históricos de salud mental** | **Muy alto** — predictor directo de claims futuros | Alta (aseguradoras tienen los suyos) | Propietarios, no se comparten fácilmente |
| **Prescripciones psiquiátricas** | **Muy alto** — tipo, dosis, adherencia predicen evolución | Alta (PBMs, LexisNexis) | Requiere integración con data broker |
| **Screening validado (PHQ-9, GAD-7)** | **Alto** — predictor temprano, más granular que claims | Media (requiere que el consumidor lo complete) | Cold start: necesitas que la gente lo use |
| **Datos de wearable (HRV, sueño)** | **Alto** — biomarcadores fisiológicos continuos | Creciente (500M+ wearables) | Requiere integración técnica + consentimiento |
| **Engagement con intervenciones** | **Medio-Alto** — proxy de adherencia y motivación | Alta (se genera automáticamente en la plataforma) | Solo existe si la plataforma ya tiene usuarios |
| **Datos de redes sociales** | **Bajo** — demasiado ruidoso, éticamente inaceptable para actuarios | Masiva pero inaplicable | Regulatorio + ético + precisión |
| **Datos de e-commerce** | **Bajo** — correlación indirecta, alto ruido | Masiva pero irrelevante | No es dato de salud, no tiene precisión actuarial |

**Conclusión**: Los datos más valiosos para actuarios son los que combinan **screening clínico validado + datos fisiológicos continuos + engagement con intervenciones**. Son datos que una plataforma B2B2C puede generar de forma ética si el consumidor consiente.

### 6.4 TAM/SAM/SOM de data-as-a-service de salud mental en LATAM

**Estimación bottom-up basada en datos de mercado:**

```
TAM (Total Addressable Market)
═══════════════════════════════
Mercado global de healthcare data monetization: USD 581M-981M (2024)
+ Mercado digital de salud mental: USD 24.44B (2025)
+ Mercado de population health analytics: USD 3.6B (2025)
→ TAM (intersección datos + salud mental global): ~USD 2-4B

SAM (Serviceable Addressable Market)
═════════════════════════════════════
LATAM digital health: USD 12.82B (2024), creciendo a CAGR 20%
LATAM virtual care behavioral segment: 43% del mercado = ~USD 753M
LATAM insurtech ecosystem: 536 companies, USD 200M funding (2025)
Chile + México + Brasil + Colombia = ~80% del mercado LATAM
→ SAM (datos de salud mental para modelos de riesgo en LATAM): ~USD 150-300M

SOM (Serviceable Obtainable Market)
════════════════════════════════════
Chile (puerta de entrada):
- Todas las empresas obligadas a ISTAS-21 → captive market
- ~4M trabajadores en Chile en empresas medianas/grandes
- USD 5-15/empleado/mes × base inicial de 50,000 usuarios
→ SOM (primer año, Chile): USD 3-9M

Expansión 3 años (Chile + México + Colombia):
→ SOM (año 3): USD 15-45M
```

**Comparables de revenue**:
- Betterfly (Chile): USD 1B valuación, enfocada en hábitos (no datos de riesgo)
- Spring Health (EE.UU.): USD 3.3B valuación, no vende modelo de datos a terceros
- IQVIA (global): USD 15.4B revenue total, monopoliza datos de farma

**La oportunidad**: No existe un "IQVIA de salud mental digital" en LATAM. Los datos que generan las plataformas de wellness (Betterfly, Cuéntame, Vittude) no están siendo empaquetados como productos de datos para aseguradoras o gobiernos. El gap es real.

---

## 7. Mapa de valor: tipos de datos x actores que los compran

### Matriz: datos de consumidores x compradores

| Tipo de dato del consumidor | Aseguradora (vida/salud) | Farmacéutica | Gobierno | Marketing/Adtech | Academia | Fintech |
|----------------------------|-------------------------|-------------|---------|-----------------|---------|---------|
| **Screening clínico** (PHQ-9, GAD-7 via app) | **Muy alto** / $$$ | Alto / $$$ | Alto / $$ | Bajo / — | **Muy alto** / $ | Bajo / — |
| **Claims de seguro** (diagnósticos, prescripciones) | **Muy alto** / $$$ (propio) | **Muy alto** / $$$ | Alto / $$ | Bajo / — | Alto / $$ | Medio / $ |
| **Datos de wearable** (HRV, sueño, cortisol) | Alto / $$ | Alto / $$$ | Medio / $ | Medio / $ | **Muy alto** / $$ | Medio / $ |
| **Transcripciones de terapia/chatbot** | Medio / $ | Medio / $$ | Bajo / — | Bajo / — | **Muy alto** / $$ | Bajo / — |
| **Risk scores de salud mental** | **Muy alto** / $$$ | Medio / $$ | Alto / $$ | Bajo / — | Alto / $ | Alto / $$ |
| **Engagement con intervenciones** | Alto / $$ | Medio / $$ | Medio / $ | Bajo / — | Alto / $ | Bajo / — |
| **Datos de redes sociales** (sentiment, comportamiento) | Bajo / — | Medio / $ | Medio / $ | **Muy alto** / $$$ | **Muy alto** / $ | Medio / $ |
| **Patrones de compra** (e-commerce) | Bajo / — | Bajo / — | Bajo / — | **Muy alto** / $$$ | Medio / $ | Alto / $$ |
| **Datos de telemedicina** (diagnósticos, notas) | **Muy alto** / $$$ | **Muy alto** / $$$ | Alto / $$ | Bajo / — | **Muy alto** / $$ | Bajo / — |
| **Benchmarks agregados** (industria/demografía) | Alto / $$ | Alto / $$ | **Muy alto** / $$$ | Medio / $ | **Muy alto** / $$ | Medio / $ |

**Leyenda**: Nivel de interés / Disposición a pagar ($ = bajo, $$ = medio, $$$ = alto)

### Datos más valiosos para cada comprador (top 3)

| Comprador | Top 1 | Top 2 | Top 3 |
|-----------|-------|-------|-------|
| **Aseguradora** | Risk scores de salud mental | Claims + prescripciones | Screening clínico via app |
| **Farmacéutica** | Datos de telemedicina (diagnósticos reales) | Claims (market sizing) | Wearables (biomarcadores para ensayos) |
| **Gobierno** | Benchmarks agregados (vigilancia epidemiológica) | Screening poblacional | Datos de telemedicina |
| **Marketing/Adtech** | Datos de redes sociales (sentiment) | Patrones de compra | Engagement (pero éticamente inaceptable si correlaciona con salud mental) |
| **Academia** | Screening clínico (validación de instrumentos) | Transcripciones de chatbot (NLP) | Datos de wearable (biomarcadores) |
| **Fintech** | Patrones de compra (proxy de estabilidad) | Risk scores (correlación con riesgo crediticio) | Claims (si accesibles) |

---

## 8. Implicaciones para la idea: datos de salud mental de consumidores para modelos de riesgo

### 8.1 Recomendaciones estratégicas

```
MODELO RECOMENDADO PARA DATOS DE CONSUMIDORES:
═══════════════════════════════════════════════

1. PLATAFORMA B2B2C (70-80% del revenue)
   ────────────────────────────────────────
   - La ASEGURADORA o MUTUAL es el comprador (no el consumidor)
   - El CONSUMIDOR/ASEGURADO usa la plataforma gratis (subsidiado por aseguradora)
   - Datos propiedad del consumidor con consentimiento granular
   - Pricing: USD 1-5/asegurado/mes

2. INSIGHTS AGREGADOS (15-20% del revenue)
   ────────────────────────────────────────
   - Benchmarks por demografía, región, segmento
   - Solo datos estadísticos (N mínimo 100+ personas)
   - Compradores: aseguradoras, farmas (insights de mercado), gobierno
   - NUNCA datos individuales

3. INVESTIGACIÓN + PARTNERSHIPS (5-10% del revenue)
   ─────────────────────────────────────────────────
   - Partnerships académicos (datos anonimizados para investigación)
   - Publicaciones de benchmarks ("Estado de Salud Mental de Asegurados en Chile 2027")
   - Credibilidad científica como moat competitivo

NUNCA:
✗ Vender datos individuales identificables
✗ Compartir con adtech (Meta, Google, TikTok)
✗ Usar datos para credit scoring
✗ Permitir que la aseguradora vea datos individuales del asegurado
✗ Usar tracking pixels de terceros en la plataforma
```

### 8.2 Combinación dato de empleado + dato de consumidor

```
ESCENARIO: Una persona es EMPLEADO de Empresa X + ASEGURADO de Mutual Y

DATOS VIA EMPLOYER (research de empleados):     DATOS VIA ASEGURADORA (este research):
- ISTAS-21: riesgo psicosocial alto             - PHQ-9 via app: depresión moderada
- Engagement laboral: decreciente                - Wearable: HRV bajo, sueño fragmentado
- Ausentismo: 3 días este mes                   - Claims: visita psiquiatra hace 2 meses
- eNPS: detractor                               - Engagement: usa app 4x/semana
                  │                                               │
                  └──────────────┬────────────────────────────────┘
                                 │
                          MODELO COMBINADO
                    (nunca a nivel individual para
                     terceros — solo para el propio
                     usuario si consiente)
                                 │
                     ┌───────────┼───────────┐
                     ▼           ▼           ▼
               PARA EL      PARA EL      PARA LA
               USUARIO      EMPLOYER     ASEGURADORA
               (individual) (agregado)   (agregado)
               ─────────    ─────────    ──────────
               "Tu riesgo   "40% de tu   "Asegurados
               de burnout   equipo tiene  con perfil X
               es alto.     riesgo alto   tienen 2.3x
               Sugerencia:  de burnout"   más claims
               estas                      en los
               acciones..."               próximos 6
                                          meses"
```

**Este modelo combinado es el holy grail**: datos laborales + datos personales/consumer crean una predicción 360 que ningún actor del mercado tiene hoy. Pero solo funciona si:
1. El consumidor consiente explícitamente la combinación
2. El employer NUNCA ve datos individuales del consumidor
3. La aseguradora NUNCA ve datos individuales del empleado
4. Solo el usuario ve su perfil completo
5. Los terceros solo ven datos agregados

### 8.3 Puerta de entrada en Chile: Mutuales + Aseguradoras

```
PUERTA DE ENTRADA PARA CONSUMIDORES:

ISTAS-21 mide el PROBLEMA (obligatorio, datos del empleado)
         │
         ▼
Mutual necesita INTERVENCIÓN (obligación legal de asistencia técnica)
         │
         ▼
Plataforma B2B2C = la INTERVENCIÓN
(el empleado la usa como consumidor, no como empleado)
         │
         ▼
La mutual ve datos AGREGADOS de efectividad
         │
         ▼
La mutual también es ASEGURADORA → quiere modelos de riesgo
         │
         ▼
Los datos de la plataforma alimentan modelos actuariales
         │
         ▼
La mutual reduce claims → ROI → expansion del contrato
```

**Las mutuales chilenas (ACHS, IST, Mutual de Seguridad) son el comprador ideal** porque:
- Tienen la obligación legal de dar asistencia técnica post-ISTAS-21
- Son aseguradoras (mutuales de seguridad) → quieren modelos de riesgo
- Tienen presupuesto asignado (no es venta en frío)
- Cubren a millones de trabajadores chilenos (que son simultáneamente consumidores/asegurados)

### 8.4 Riesgos principales del lado consumidor

| Riesgo | Probabilidad | Impacto | Mitigación |
|--------|-------------|---------|-----------|
| **Incidente de privacidad** (leak de datos de consumidores) | Media | **Catastrófico** (BetterHelp perdió confianza permanentemente) | Privacy by design, encriptación, auditorías, bug bounty |
| **Regulatorio** (Ley 21.719, FTC-style enforcement en Chile) | Alta | Alto | Diseñar cumpliendo desde día 1. Nombrar DPO. |
| **Rechazo del consumidor** ("no quiero que mi aseguradora sepa mi estado mental") | Alta | Alto | Datos del consumidor NUNCA visibles a la aseguradora a nivel individual. Comunicación clara. Trust building. |
| **Cold start de datos** (necesitas volumen para modelos predictivos) | Alta | Medio | Empezar con valor inmediato (screening, intervención) → acumular datos → construir modelos |
| **Competencia de Big Tech** (Apple Health + Apple Intelligence podría hacer esto) | Media | Medio | Especialización en LATAM/regulación local. Nicho actuarial que Apple no va a servir directamente. |
| **Ético** (la línea entre "herramienta de bienestar" y "scoring del consumidor") | Media | Alto | Transparencia radical. El consumidor controla sus datos. No credit scoring. No ad targeting. |

---

## 9. Fuentes principales

### Reportes y estudios
- [Duke University — Data Brokers and Mental Health Data (2023)](https://techpolicy.sanford.duke.edu/data-brokers-and-the-sale-of-americans-mental-health-data/)
- [OECD — Health at a Glance 2025: Mental Health](https://www.oecd.org/en/publications/health-at-a-glance-2025_8f9e3f98-en/full-report/mental-health_24af6094.html)
- [Grand View Research — De-identified Health Data Market](https://www.grandviewresearch.com/industry-analysis/de-identified-health-data-market-report)
- [British Actuarial Journal — Mental Health in Life Insurance](https://www.cambridge.org/core/journals/british-actuarial-journal/article/mental-health-working-party-data-and-modelling-considerations-for-mental-health-in-life-insurance/0CB30139A7BF08173523294D59527EB4)
- [PMC — Federated Learning in Mental State Detection](https://pmc.ncbi.nlm.nih.gov/articles/PMC11631783/)
- [PMC — Mental Health Analysis in Social Media](https://pmc.ncbi.nlm.nih.gov/articles/PMC9810253/)
- [Consumer Reports — Mental Health Apps Privacy](https://www.consumerreports.org/health/health-privacy/mental-health-apps-and-user-privacy-a7415198244/)
- [Money & Mental Health — Online Shopping](https://www.moneyandmentalhealth.org/online-shopping-mental-health/)

### Regulación
- [FTC — Health Breach Notification Rule (Updated 2024)](https://www.ftc.gov/business-guidance/blog/2024/04/updated-ftc-health-breach-notification-rule-puts-new-provisions-place-protect-users-health-apps)
- [FTC — BetterHelp Final Order (2023)](https://www.ftc.gov/news-events/news/press-releases/2023/07/ftc-gives-final-approval-order-banning-betterhelp-sharing-sensitive-health-data-advertising)
- [FTC — Cerebral Enforcement (2024)](https://www.insideprivacy.com/health-privacy/ftc-announces-health-privacy-enforcement-action-against-telehealth-company-cerebral/)
- [Washington MHMDA — Orrick Analysis](https://www.orrick.com/en/Insights/2024/03/Nevada-and-Washington-Consumer-Health-Privacy-Laws-Take-Effect-March-31)
- [Art. 9 GDPR](https://gdpr-info.eu/art-9-gdpr/)
- [CMS — GDPR Enforcement Tracker](https://cms.law/en/deu/publication/gdpr-enforcement-tracker-report/life-science-healthcare)
- [BCN Chile — Ley 21.719](https://www.bcn.cl/leychile/navegar?idNorma=1209272)
- [ICLG — Brazil LGPD 2025-2026](https://iclg.com/practice-areas/data-protection-laws-and-regulations/brazil)
- [Función Pública Colombia — Ley 1581](https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=49981)

### Industria y mercado
- [Swiss Re — Wysa Assure](https://www.swissre.com/reinsurance/our-capabilities/life-health-re/wysa-assure-insurance-mental-wellbeing-app.html)
- [Swiss Re — Mental Health Disclosure](https://www.swissre.com/reinsurance/insights/mental-health-disclosure.html)
- [LexisNexis — Risk Classifier with Medical Data](https://www.munichre.com/us-life/en/insights/product-innovation/lexisnexis-risk-classifier-medical-data.html)
- [MAPFRE — Insurtech LATAM 2025-2026](https://www.mapfre.com/en/insights/innovation/insurtech-latin-america-2025-2026/)
- [6sense — IQVIA Market Share](https://6sense.com/tech/health-analytics/iqvia-market-share)
- [NOVA One — LATAM Virtual Care Market](https://www.novaoneadvisor.com/report/latin-america-virtual-care-solutions-market)
- [Mordor Intelligence — Data Broker Market](https://www.mordorintelligence.com/industry-reports/data-broker-market)

### Privacidad y ética
- [MIDATA.coop](https://www.midata.coop/en/home/)
- [Mozilla — Privacy Not Included: Mental Health Apps](https://www.mozillafoundation.org/en/privacynotincluded/articles/are-mental-health-apps-better-or-worse-at-privacy-in-2023/)
- [arXiv — FedMentor: Federated Learning for Mental Health](https://arxiv.org/html/2509.14275v2)
- [NPR — Health Insurers Tap Data Brokers](https://www.npr.org/sections/health-shots/2018/07/17/629441555/health-insurers-are-vacuuming-up-details-about-you-and-it-could-raise-your-rates)
- [Private Internet Access — Privacy Dangers of Mental Health Apps](https://www.privateinternetaccess.com/blog/privacy-dangers-mental-health-apps/)

### Demandas y controversias
- [PBS — 40+ States Sue Meta](https://www.pbs.org/newshour/politics/more-than-40-states-sue-meta-claiming-its-social-platforms-are-addictive-and-harm-childrens-mental-health)
- [Motley Rice — Facebook Mental Health Lawsuit](https://www.motleyrice.com/social-media-lawsuits/meta/facebook)
- [NBC News — Buying Mental Health Data Was Surprisingly Easy](https://www.nbcnews.com/tech/security/researcher-tried-buy-mental-health-data-was-surprisingly-easy-rcna70071)

---

→ Idea principal: [[2026-02-20-datos-salud-mental-modelos-riesgo|Datos de salud mental para modelos de riesgo]]
→ Research complementario: [[datos-salud-mental-empleados-research|Deep Research: Datos de empleados]]
→ Contexto: [[espacio-de-oportunidad]]
