---
title: "Propuesta de proyecto: Datos de salud mental para modelos de riesgo"
aliases: [propuesta-salud-mental, proyecto-datos-riesgo]
date: 2026-02-21
tags: [producto, wellness, corporativo]
status: explorando
miro: ""
---

# Propuesta de proyecto: Datos de salud mental para modelos de riesgo

Nombre interno del producto: **MindRisk** (nombre de trabajo; se define con branding luego).

---

## 1. Customer Journeys

### 1.1 Journey del HR Manager / Wellness Lead de empresa mediana en Chile

**Persona**: Carolina Reyes, Jefa de Personas en empresa de tecnologia con 280 empleados en Santiago.

**Awareness**
Carolina recibe los resultados del ISTAS-21 anual: 38% de sus empleados estan en riesgo alto en la dimension de exigencias psicologicas. La mutual (ACHS) le entrega un informe PDF de 40 paginas con recomendaciones genericas ("fomentar pausas activas", "mejorar la comunicacion"). Sabe que tiene un problema pero no sabe quien esta en riesgo, que equipos necesitan intervencion prioritaria ni como medir si lo que haga funciona. Busca en Google "herramienta intervencion riesgos psicosociales Chile" y encuentra contenido de MindRisk sobre como convertir datos de ISTAS-21 en acciones concretas.

**Consideration**
Carolina compara opciones. Los EAP tradicionales tienen 3-5% de utilizacion. Betterfly mide habitos fisicos pero no salud mental profunda. Headspace/Calm son apps de meditacion sin reportes para HR. MindRisk le ofrece algo diferente: una plataforma donde sus empleados completan check-ins semanales de 3 minutos (WHO-5 + preguntas de engagement), los datos se cruzan con metricas proxy del HRIS (ausentismo, horas extras, rotacion) y ella recibe un dashboard con risk scores agregados por equipo y recomendaciones de intervencion priorizadas.

**Decision**
Carolina solicita un piloto de 60 dias con un equipo de 50 personas (el de Ventas, que mostro riesgo alto en ISTAS-21). MindRisk ofrece el piloto gratuito con compromiso de compartir resultados anonimizados para benchmarking. El costo post-piloto es USD 8/empleado/mes. Carolina presenta el caso al CFO con una proyeccion simple: si reducen 10% la rotacion en Ventas (costo de reemplazo: 6 meses de sueldo por persona), el ahorro paga la plataforma 15x. El CFO aprueba.

**Onboarding**
MindRisk integra datos del HRIS de la empresa (BambooHR via API). Los empleados del piloto reciben un correo con onboarding de 5 minutos: cuestionario inicial (PHQ-9 abreviado + WHO-5 + 3 preguntas de engagement), consentimiento explicito granular ("tus datos son tuyos, tu jefe solo ve datos agregados del equipo"), y primer check-in semanal. La tasa de opt-in del primer piloto tipico: 72%.

**Uso**
Semana a semana, el dashboard de Carolina muestra: risk score agregado del equipo de Ventas (bajando de 7.2 a 5.8 en 6 semanas), engagement con la plataforma (68% completaron 4+ check-ins), alertas tempranas anonimizadas ("3 personas en tu equipo muestran patron de deterioro en las ultimas 3 semanas — considera intervenir"). Carolina activa una sesion grupal con un psicologo laboral (recurso sugerido por MindRisk, no provisto directamente).

**Expansion / Referral**
Despues de 6 meses, Carolina tiene datos duros: el equipo piloto redujo ausentismo 18% y rotacion 12% vs. el grupo control. Expande a toda la empresa (280 empleados). Presenta el caso de estudio en un encuentro de ACHPE (Asociacion Chilena de Personas) y genera 3 referidos.

---

### 1.2 Journey de la Mutual de Seguridad

**Persona**: Roberto Soto, Subgerente de Prevencion de una de las 3 mutuales principales de Chile (ACHS, IST o Mutual de Seguridad).

**Awareness**
Roberto tiene un mandato de SUSESO: la Circular N 3243 obliga a las mutuales a dar asistencia tecnica a las empresas que resulten en riesgo alto en ISTAS-21. Hoy, esa asistencia consiste en enviar un consultor presencial a cada empresa — un modelo que no escala. Chile tiene ~270,000 empresas formales. La mutual atiende ~80,000. Roberto necesita una herramienta digital que reemplace o complemente la consultoria presencial.

**Consideration**
Roberto evalua dos caminos: (a) desarrollar internamente una plataforma de intervencion digital (costo estimado: USD 2-3M, 18 meses de desarrollo), o (b) asociarse con un proveedor externo que ya tenga el producto. MindRisk se presenta como opcion (b): plataforma lista, cumple Ley 21.719, genera datos de efectividad de intervencion que la mutual puede reportar a SUSESO, y se puede desplegar en white-label bajo la marca de la mutual.

**Decision**
El ciclo de decision es largo (6-9 meses). Roberto solicita un piloto con 10 empresas afiliadas en riesgo alto. MindRisk ofrece el piloto a costo marginal (USD 2/empleado/mes, subsidiado para las empresas afiliadas). El acuerdo incluye: la mutual obtiene acceso a un dashboard agregado de todas sus empresas afiliadas que usen la plataforma, con metricas de reduccion de riesgo por sector economico. Esto le permite a Roberto reportar a SUSESO con datos concretos.

**Onboarding**
MindRisk despliega en las 10 empresas piloto bajo la marca de la mutual. Cada empresa recibe onboarding asistido. Los empleados ven el logo de la mutual, no de MindRisk (white-label). Los datos de cada empresa estan aislados (multi-tenant). La mutual solo ve datos agregados a nivel de su portafolio.

**Uso**
Despues de 6 meses, la mutual tiene un dashboard que muestra: 10 empresas, 1,200 empleados participando, reduccion promedio de riesgo psicosocial del 15% en las empresas intervenidas. Roberto usa estos datos para cumplir con la Circular N 3243 y para su reporte anual a SUSESO.

**Expansion**
La mutual decide integrar MindRisk como herramienta estandar de intervencion post-ISTAS-21 para todas las empresas en riesgo alto. Contrato anual de USD 500K-1.5M dependiendo del volumen. El valor para MindRisk: acceso a 80,000 empresas via un solo canal.

---

### 1.3 Journey del Empleado (end-user)

**Persona**: Matias Herrera, analista de datos, 29 anos, lleva 14 meses en la empresa, equipo remoto, siente que esta "quemado" pero no lo ha dicho a nadie.

**Awareness**
Matias recibe un correo de HR invitandolo a participar en un "programa de bienestar" con un cuestionario de 5 minutos. El correo dice: "Tus respuestas son confidenciales — tu jefe NUNCA vera tus datos individuales. Solo vemos datos del equipo en conjunto." Matias esta esceptico pero el cuestionario es corto y lo hace.

**Consideration**
El resultado de Matias: score de bienestar 42/100 (bajo), riesgo de burnout moderado-alto. La plataforma le muestra un resumen claro: "Tu nivel de agotamiento emocional esta por encima del promedio. Esto no es un diagnostico — es una senal. Aqui tienes tres acciones concretas." Las acciones son: (1) micro-habito de recovery sugerido (personalizado segun sus respuestas), (2) link al EAP de la empresa si quiere hablar con un profesional, (3) un recurso de psicoeducacion sobre burnout.

**Decision**
Matias no quiere terapia (aun), pero el micro-habito sugerido le parece accesible. Acepta los check-ins semanales de 1 minuto (3 preguntas: como te sientes hoy, cuantas horas dormiste anoche, te sentiste conectado con tu equipo esta semana). La plataforma ajusta las recomendaciones cada semana segun sus respuestas.

**Uso**
Despues de 4 semanas, Matias ve su propia tendencia: su score subio de 42 a 55. El micro-habito funciono. La plataforma le sugiere un paso mas (taller grupal de gestion de estres, anonimo, via la plataforma). Matias lo toma. El ciclo de mejora continua.

**Expansion**
Matias le dice a 3 companeros que "la encuesta esa de bienestar es poca cosa pero da buenos datos". Word of mouth organico. La tasa de participacion del equipo sube de 72% a 84% en el segundo mes.

---

## 2. Buyer Personas

### 2.1 Carolina Reyes — HR / Wellness Manager

| Atributo | Detalle |
|----------|---------|
| **Nombre** | Carolina Reyes |
| **Cargo** | Jefa de Personas / HR Business Partner |
| **Empresa tipo** | Tecnologia, servicios profesionales o retail con 150-500 empleados en Chile |
| **Edad** | 34-42 anos |
| **Formacion** | Psicologia organizacional o Ingenieria Comercial con especializacion en RRHH |
| **Pain points** | Resultados de ISTAS-21 muestran riesgo alto pero no sabe que hacer con ellos. EAP tiene 4% de utilizacion. Rotacion esta subiendo y no tiene datos para explicar por que. Gerencia le pide "medir bienestar" pero no tiene herramientas. |
| **Goals** | Reducir rotacion 15% en 12 meses. Demostrar ROI de las iniciativas de bienestar al CFO. Cumplir con ISTAS-21 de forma que realmente sirva, no solo por cumplir. Tener datos para priorizar intervenciones. |
| **Objeciones** | "Mis empleados no van a responder OTRO cuestionario." "No tenemos presupuesto — wellness no es prioridad para gerencia." "Me preocupa la privacidad — si algo sale mal, la responsabilidad es mia." |
| **Presupuesto** | USD 1,000-4,000/mes para bienestar (ya asignado, hoy se gasta en fruta, yoga ocasional, y el EAP). Puede redirigir si demuestra ROI. |
| **Proceso de compra** | Carolina recomienda, Gerente de Admin/CFO aprueba. Ciclo: 4-8 semanas para empresa mediana. Necesita case study de empresa similar. |
| **Como llegar a ella** | Eventos de ACHPE y CPC (Camara de Comercio). LinkedIn (busca contenido sobre "bienestar laboral Chile"). Referidos de consultoras de RRHH. Canal de mutual (si la mutual lo recomienda, Carolina confia). |

### 2.2 Roberto Soto — Director de Mutual de Seguridad

| Atributo | Detalle |
|----------|---------|
| **Nombre** | Roberto Soto |
| **Cargo** | Subgerente de Prevencion / Gerente de Salud Ocupacional |
| **Organizacion tipo** | ACHS, IST, o Mutual de Seguridad de la CChC |
| **Edad** | 45-55 anos |
| **Formacion** | Ingenieria Civil, Medicina del Trabajo, o Ingenieria en Prevencion de Riesgos |
| **Pain points** | Tiene obligacion SUSESO de dar asistencia tecnica post-ISTAS-21 pero el modelo presencial no escala (80,000 empresas afiliadas, <100 consultores). Los datos de ISTAS-21 se recolectan pero no se explotan. No tiene herramienta digital de intervencion. Las licencias medicas por salud mental subieron 32% entre 2019-2025 y estan impactando la siniestralidad. |
| **Goals** | Cumplir Circular N 3243 de forma escalable. Reducir siniestralidad de salud mental en sus afiliados. Tener datos para demostrar a SUSESO que sus intervenciones funcionan. Diferenciarse de las otras mutuales. |
| **Objeciones** | "No vamos a comprar tecnologia a una startup sin track record." "Los datos de salud mental son sensibles — necesitamos cumplimiento Ley 21.719." "No podemos forzar a las empresas a usar una herramienta." |
| **Presupuesto** | Significativo — las mutuales manejan cotizaciones obligatorias (0.93% de las remuneraciones de sus afiliados). Presupuesto de prevencion: decenas de millones de USD anuales. Un contrato de USD 500K-1.5M/ano es viable si se demuestra reduccion de siniestralidad. |
| **Proceso de compra** | Licitacion formal o evaluacion de proveedores. Ciclo: 6-12 meses. Requiere piloto, validacion legal, aprobacion de directorio. |
| **Como llegar a el** | Evento de SOCHIPRELA (Sociedad Chilena de Prevencion de Riesgos Laborales). Referido de consultora de salud ocupacional. Paper o estudio publicado que valide el enfoque. Red de Edgar en el ecosistema de salud (via CEAPSI). |

### 2.3 Fernando Valdes — CFO de empresa mediana

| Atributo | Detalle |
|----------|---------|
| **Nombre** | Fernando Valdes |
| **Cargo** | CFO / Gerente de Administracion y Finanzas |
| **Empresa tipo** | Empresa mediana (200-1,000 empleados), servicios, tecnologia o retail |
| **Edad** | 40-52 anos |
| **Formacion** | Ingenieria Comercial, MBA |
| **Pain points** | Licencias medicas por salud mental estan costando cada vez mas (promedio 30 dias por licencia, costo de reemplazo temporal + productividad perdida). Rotacion le cuesta 6-9 meses de sueldo por posicion reemplazada. No ve ROI en los programas de "wellness" que HR le propone (yoga, mindfulness, fruta). |
| **Goals** | Reducir costos de licencias medicas. Bajar rotacion a menos de 15% anual. Si invierte en wellness, quiere datos duros de retorno. Cumplimiento regulatorio sin multas. |
| **Objeciones** | "Mustrame el ROI en un Excel, no en un PowerPoint bonito." "No voy a pagar USD 8/empleado/mes por una encuesta." "Cuanto me cuesta no hacer nada vs. hacer esto?" |
| **Presupuesto** | Controla el presupuesto total. Si HR le demuestra que MindRisk ahorra mas de lo que cuesta (ROI 3:1 documentado por Wellhub), aprueba. Ticket anual: USD 15K-50K dependiendo del tamano de empresa. |
| **Proceso de compra** | Carolina (HR) le presenta el caso. Fernando pide: (1) prueba de concepto con datos, (2) benchmarking vs. pares, (3) contrato con SLA y clausula de salida. Aprueba en 2-4 semanas si los numeros cierran. |
| **Como llegar a el** | No directamente — se llega via Carolina (HR). Pero el contenido que convence a Fernando es diferente: articulos en medios de negocio (DF, AmericaEconomia) sobre "costo del burnout", estudios de caso con cifras. |

### 2.4 Matias Herrera — Empleado end-user

| Atributo | Detalle |
|----------|---------|
| **Nombre** | Matias Herrera |
| **Cargo** | Analista / Profesional joven en equipo operativo |
| **Empresa tipo** | Cualquiera que contrate MindRisk |
| **Edad** | 25-38 anos |
| **Pain points** | Se siente agotado pero no quiere "ir al psicologo" (estigma). No confia en que la empresa no va a usar sus datos en su contra. Los programas de wellness de la empresa le parecen "de mentira" (yoga a las 7am). Quiere algo rapido, privado y util. |
| **Goals** | Sentirse mejor sin que sea un "tema" en la oficina. Tener control sobre su informacion. Saber si lo que siente es normal o es una senal de alerta. |
| **Objeciones** | "Mi jefe va a ver esto?" "Para que me sirve responder?" "Es otra encuesta mas que nadie lee." |
| **Como convencerlo** | Transparencia radical sobre privacidad. Valor inmediato (resultado del cuestionario con insights personalizados, no un "gracias por participar"). Diseno mobile-first, rapido (3 minutos maximo). Opt-out facil y visible. |

---

## 3. Modelo de Negocio

### 3.1 Revenue Streams

```
REVENUE STREAM 1: SaaS B2B — Plataforma de recoleccion + dashboard (75-80%)
------------------------------------------------------------------------------------
Tier 1 - Starter     | Hasta 100 empleados  | USD 6/empleado/mes | Check-ins + dashboard basico
Tier 2 - Professional| 101-500 empleados    | USD 10/empleado/mes | + integracion HRIS + alertas tempranas + reportes avanzados
Tier 3 - Enterprise  | 500+ empleados       | USD 14/empleado/mes | + API + SSO + modelo predictivo + soporte dedicado
                     |                      |                    | + integracion ISTAS-21

REVENUE STREAM 2: Licencias white-label para mutuales/aseguradoras (10-15%)
------------------------------------------------------------------------------------
Modelo: la mutual paga una licencia anual por volumen y despliega MindRisk
        bajo su marca a sus empresas afiliadas.
Pricing: USD 2-4/empleado/mes (volumen alto, margen menor pero CAC = 0)
Contrato minimo: USD 300K/ano (estimando 10,000 empleados cubiertos)

REVENUE STREAM 3: Benchmarks e insights agregados por industria (5-10%)
------------------------------------------------------------------------------------
Reportes anuales: "Estado de salud mental laboral en [industria] Chile 2027"
Solo estadisticas agregadas (N minimo 100 empresas, nunca individuales)
Compradores: consultoras (McKinsey, Deloitte), academia, gobierno, aseguradoras
Precio: USD 5K-25K por reporte sectorial

REVENUE STREAM 4 (futuro, mes 12+): API de risk scoring (5%)
------------------------------------------------------------------------------------
Aseguradoras que integren el risk score agregado en sus modelos actuariales
Pricing: por query o suscripcion anual
Solo datos agregados a nivel de empresa/industria, NUNCA individuales
```

### 3.2 Unit Economics (estimacion para empresa mediana de 250 empleados, Tier 2)

| Metrica | Valor | Supuesto |
|---------|-------|----------|
| **ARPU mensual** (por empresa) | USD 2,500/mes | 250 empleados x USD 10 |
| **ACV** (Annual Contract Value) | USD 30,000/ano | 12 meses |
| **CAC (canal directo)** | USD 8,000-12,000 | SDR + ciclo de 6-8 semanas + piloto gratuito de 60 dias |
| **CAC (canal mutual)** | USD 500-1,500 | La mutual hace la venta; MindRisk solo onboarding |
| **Gross margin** | 78-82% | Infraestructura cloud + soporte |
| **LTV (3 anos, churn 15% anual)** | USD 65,000-72,000 | Expansion dentro de empresa + upsell a Tier superior |
| **LTV:CAC ratio (canal directo)** | 6:1 - 8:1 | Saludable (>3:1 es benchmark SaaS B2B) |
| **LTV:CAC ratio (canal mutual)** | 45:1 - 65:1 | El canal de mutuales es extraordinariamente eficiente |
| **Payback period (directo)** | 4-5 meses | USD 10K CAC / USD 2.5K MRR |
| **Payback period (mutual)** | <1 mes | CAC practicamente nulo |

### 3.3 Modelo de Crecimiento: Partnership-led + Sales-assisted

```
FASE 1 (Meses 0-6): Founder-led sales
- Edgar y Jose venden directamente a 3-5 empresas piloto
- Canal: red personal (Baufest clientes via Jose, clientes kntor via Edgar, CEAPSI red)
- Objetivo: 3-5 empresas, 500-1,000 empleados, validar product-market fit

FASE 2 (Meses 6-12): Partnership-led
- Cerrar primer acuerdo con UNA mutual (ACHS, IST o Mutual)
- La mutual distribuye a sus empresas afiliadas en riesgo alto (post-ISTAS-21)
- Objetivo: 20-50 empresas, 5,000-15,000 empleados

FASE 3 (Meses 12-18): Sales-assisted + PLG lite
- Contratar 1-2 SDRs para canal directo (empresas no cubiertas por mutual)
- PLG lite: demo self-service del dashboard con datos sinteticos en la web
- Objetivo: 80-150 empresas, 25,000-50,000 empleados
- Expansion a Mexico (via NOM-035 como puerta de entrada)
```

### 3.4 Estructura de Costos (Mes 12, estimacion)

| Categoria | Costo mensual | % del revenue |
|-----------|---------------|---------------|
| **Equipo** (2 fundadores + 1 dev + 1 psicologo/consultor part-time) | USD 12,000-18,000 | 35-45% |
| **Infraestructura** (Supabase, Azure/Databricks, Cloudflare) | USD 1,500-3,000 | 5-8% |
| **Compliance** (abogado datos personales, DPO part-time) | USD 1,500-2,500 | 4-6% |
| **Marketing y ventas** (contenido, eventos, herramientas CRM) | USD 2,000-4,000 | 6-10% |
| **Otros** (contabilidad, seguros, miscelaneos) | USD 1,000-2,000 | 3-5% |
| **TOTAL** | USD 18,000-29,500 | 53-74% |

**Break-even estimado**: 15-20 empresas medianas (USD 30K-40K MRR). Alcanzable en mes 9-12 si se cierra partnership con mutual en mes 6.

---

## 4. Producto

### 4.1 Feature Map del MVP

**ENTRA en el MVP (Meses 0-6)**:

| Feature | Prioridad | Justificacion |
|---------|-----------|---------------|
| Onboarding con cuestionarios validados (WHO-5, PHQ-9 abreviado, 3 preguntas engagement) | P0 | Core del producto — sin esto no hay datos |
| Check-in semanal de 3 minutos (adaptativo, no siempre las mismas preguntas) | P0 | Genera datos longitudinales — la ventaja vs. ISTAS-21 anual |
| Consentimiento granular y explicito con gestion de revocacion | P0 | Cumplimiento Ley 21.719 desde dia 1 — diferenciador etico |
| Dashboard B2B con risk score agregado por equipo/area | P0 | Lo que paga el buyer (Carolina/Fernando) |
| Dashboard personal para el empleado (su propia tendencia + recomendaciones) | P0 | Lo que motiva al end-user a participar |
| Encriptacion de PII (pgsodium en Supabase, AES-256) | P0 | Non-negotiable para datos de salud |
| Multi-tenant con aislamiento por brand_id + RLS | P0 | Arquitectura base para escalar |
| Integracion manual con resultados ISTAS-21 (import CSV) | P1 | Puerta de entrada en Chile — conecta diagnostico con intervencion |
| Alertas tempranas anonimizadas para HR ("X personas en deterioro") | P1 | Accion inmediata para el buyer sin comprometer privacidad |
| Exportacion de datos del empleado (portabilidad, derecho ARCO) | P1 | Cumplimiento legal |
| Micro-habitos y recursos de psicoeducacion sugeridos al empleado | P1 | Valor inmediato para el end-user sin necesitar terapeuta |
| Reporte PDF mensual para HR (resumen ejecutivo) | P2 | Herramienta de venta interna de Carolina a Fernando |

**NO ENTRA en el MVP**:

| Feature | Razon |
|---------|-------|
| Integracion directa con HRIS (Workday, BambooHR API) | Complejidad de integracion; en MVP se usa import CSV |
| Modelo predictivo de machine learning | Requiere volumen de datos (>5,000 empleados con 6+ meses de data). En MVP se usan thresholds estadisticos simples |
| App mobile nativa | En MVP es web responsive (PWA). Mobile nativa en Fase 2 |
| Integracion con wearables | Complejidad alta, adopcion incierta. Roadmap Fase 3 |
| Benchmarks por industria vendibles | Requiere masa critica de empresas (100+). Roadmap Fase 3 |
| White-label para mutuales | Feature compleja; en piloto mutual se hace con configuracion manual |
| Terapia o coaching in-app | MindRisk NO es un proveedor de terapia; es una plataforma de datos. Referimos a EAP existentes |
| Chatbot de IA para soporte emocional | Riesgo alto (ej: Cerebral/BetterHelp). No es el core del producto |

### 4.2 Roadmap de 18 meses

```
FASE 1: FUNDACION (Meses 0-6)
═══════════════════════════════
Objetivo: Product-market fit con 3-5 empresas piloto

Mes 0-1: Setup tecnico
  - Arquitectura base en Supabase (schema multi-tenant con encriptacion)
  - Frontend React (dashboard B2B + dashboard empleado)
  - Cuestionarios validados implementados (WHO-5, PHQ-9 breve, engagement)
  - Consentimiento granular + gestion de datos
  - Landing page + contenido de posicionamiento

Mes 1-3: Primer piloto
  - 3-5 empresas piloto (red Edgar/Jose)
  - 200-500 empleados
  - Iteracion semanal basada en feedback
  - Validar: tasa de participacion, NPS del empleado, utilidad del dashboard para HR

Mes 3-6: Iteracion + primeros clientes pagantes
  - Mejorar algoritmo de alertas tempranas
  - Agregar import de ISTAS-21 (CSV)
  - Caso de estudio con datos reales
  - Primeros 2-3 contratos pagos
  - Iniciar conversaciones con 1 mutual

Metricas de exito Fase 1:
  - Tasa de participacion empleados: >65%
  - NPS del empleado end-user: >30
  - Al menos 1 metrica de impacto medible (reduccion ausentismo O rotacion)
  - Revenue: USD 5K-15K MRR

---

FASE 2: TRACCION (Meses 6-12)
══════════════════════════════
Objetivo: Escalar via canal mutual + product-market fit confirmado

Mes 6-8: Partnership con mutual
  - Piloto con 1 mutual (10 empresas, 1,000-2,000 empleados)
  - White-label basico (logo de la mutual, colores, dominio)
  - Dashboard agregado para la mutual
  - Integracion HRIS via API (BambooHR, Buk — los HRIS mas usados en Chile)

Mes 8-10: Escalar
  - Si piloto mutual exitoso: contrato anual
  - Contratar 1 developer full-stack + 1 psicologo organizacional part-time
  - App mobile (PWA avanzada o React Native)
  - Primer modelo estadistico de riesgo (regresion logistica, no ML aun)

Mes 10-12: Consolidar Chile
  - 20-50 empresas activas
  - 5,000-15,000 empleados
  - Pipeline de datos suficiente para primeros benchmarks internos
  - Iniciar compliance para Mexico (NOM-035)
  - Preparar para Ley 21.719 (vigente dic 2026)

Metricas de exito Fase 2:
  - Empresas activas: 20-50
  - Empleados en plataforma: 5,000-15,000
  - Revenue: USD 25K-60K MRR
  - Churn mensual: <3%
  - Al menos 1 contrato con mutual firmado
  - Reduccion medible de riesgo en empresas con 6+ meses de uso

---

FASE 3: ESCALA (Meses 12-18)
═════════════════════════════
Objetivo: Mexico + modelo predictivo + benchmarks vendibles

Mes 12-14: Expansion a Mexico
  - Adaptar cuestionarios a NOM-035 (equivalente a ISTAS-21)
  - Partnerhsip con consultora de salud ocupacional en Mexico
  - Primeros 5 clientes en CDMX

Mes 14-16: Modelo predictivo real
  - Con 6-12 meses de datos longitudinales + integracion HRIS:
    modelo de ML (gradient boosting o similar) que predice riesgo
    de burnout/rotacion a 90 dias con precision >70%
  - Risk score individual (visible solo para el empleado)
  - Risk score agregado con intervalos de confianza para HR

Mes 16-18: Benchmarks y API
  - Primer reporte de benchmarks: "Estado de salud mental laboral
    en [industria] Chile 2027" — gratuito para posicionamiento
  - API de risk scoring para aseguradoras (beta privada con 1-2 aseguradoras)
  - Integracion con wearables (Oura, Apple Health — opt-in del empleado)
  - Explorar integraciones con fuentes externas de datos de bienestar (wearables, EAPs, plataformas de engagement)

Metricas de exito Fase 3:
  - Empresas activas: 80-150
  - Empleados: 25,000-50,000
  - Revenue: USD 80K-150K MRR (USD 1M-1.8M ARR)
  - Presencia en 2 paises (Chile + Mexico)
  - Modelo predictivo con AUC >0.75
  - Al menos 1 benchmark publicado
```

### 4.3 Stack Tecnologico

```
CAPA DE DATOS (Jose lidera)
═══════════════════════════
- Supabase (PostgreSQL 15)     → Base de datos principal, RLS, encriptacion pgsodium
- Azure Databricks + Spark     → Pipeline ETL, procesamiento de datos a escala
- Delta Lake                   → Data lakehouse para datos historicos y modelos
- Python (scikit-learn, XGBoost) → Modelos de riesgo (Fase 2-3)

CAPA DE APLICACION (Edgar + contratacion)
══════════════════════════════════════════
- React + TypeScript           → Frontend (dashboards B2B + empleado)
- Cloudflare Workers           → API edge, rate limiting, CDN
- Hono                         → Framework para API en Workers
- Supabase Auth                → Autenticacion + RBAC multi-tenant

CAPA DE COMPLIANCE
═══════════════════
- pgsodium (AES-256)           → Encriptacion de PII en reposo
- Cloudflare                   → Encriptacion en transito (TLS 1.3)
- Supabase RLS                 → Aislamiento multi-tenant row-level
- Audit logs inmutables        → data_access_logs (ya diseñado en schema existente)

CAPA DE VISUALIZACION
═════════════════════
- React + Recharts/D3          → Dashboard interactivo en la app
- Power BI Embedded (opcional)  → Para mutuales que prefieran Power BI
- PDF generation (ReportLab)   → Reportes mensuales

INTEGRACIONES (progresivas)
═══════════════════════════
MVP:  Google Forms API (import inicial), CSV import
Fase 2: BambooHR API, Buk API (HRIS Chile), Workday API
Fase 3: Oura API, Apple Health API, Slack API (engagement proxy)
```

**Justificacion del stack**: Jose ya esta certificado en Azure + Databricks + Spark. El equipo ha disenado el schema de Supabase con encriptacion y multi-tenant (migrations 0001-0005 ya existen). Cloudflare Workers + Hono estan documentados en el workspace. React es el framework elegido (proyecto kntor-io-react). No se introduce tecnologia nueva innecesaria.

### 4.4 Metricas de Exito por Fase (resumen)

| Metrica | Fase 1 (M0-6) | Fase 2 (M6-12) | Fase 3 (M12-18) |
|---------|---------------|-----------------|------------------|
| Empresas activas | 3-5 | 20-50 | 80-150 |
| Empleados en plataforma | 500-1,000 | 5,000-15,000 | 25,000-50,000 |
| MRR | USD 5K-15K | USD 25K-60K | USD 80K-150K |
| Tasa participacion empleados | >65% | >70% | >75% |
| Churn mensual | <5% (piloto) | <3% | <2% |
| NPS empleado | >30 | >40 | >45 |
| Paises | 1 (Chile) | 1 (Chile) | 2 (Chile + Mexico) |
| Partnerships con mutuales | 0 (en conversacion) | 1 firmado | 1-2 firmados |

---

## 5. Estrategia de Go-to-Market

### 5.1 Por que mutuales primero

Las mutuales chilenas son el canal de distribucion mas eficiente posible para este producto. La razon es estructural, no tactica:

```
1. OBLIGACION LEGAL
   SUSESO obliga a todas las empresas a aplicar ISTAS-21.
   La Circular N 3243 obliga a las mutuales a dar asistencia tecnica
   a empresas en riesgo alto.
   → La mutual TIENE que hacer algo. Hoy no tiene herramienta digital.

2. ACCESO A 270,000 EMPRESAS
   Chile tiene 3 mutuales principales:
   - ACHS: ~40% del mercado (~108,000 empresas)
   - Mutual de Seguridad CChC: ~35% (~94,500 empresas)
   - IST: ~25% (~67,500 empresas)
   → Un solo contrato con una mutual = acceso a decenas de miles de empresas.

3. CAC = CASI CERO
   La mutual ya tiene la relacion con la empresa.
   La mutual ya tiene el presupuesto de prevencion.
   La mutual ya tiene la obligacion de intervenir.
   → MindRisk solo provee la herramienta. La mutual vende y despliega.

4. DATOS MASIVOS
   Cada empresa que entra via la mutual = mas datos para los modelos.
   A los 12 meses, con 50 empresas:
   → Suficiente volumen para primeros benchmarks reales por industria.

5. CREDIBILIDAD POR ASOCIACION
   Si la mutual recomienda MindRisk, HR confia.
   → Elimina la objecion #1 de Carolina: "no conozco a esta startup."
```

### 5.2 Estrategia de Pricing

**Modelo: Tiered SaaS + Volume discounts para mutuales**

| Segmento | Tier | Precio | Modelo |
|----------|------|--------|--------|
| Empresa directa (<100 emp) | Starter | USD 6/emp/mes | Self-service con onboarding guiado |
| Empresa directa (100-500) | Professional | USD 10/emp/mes | Sales-assisted, piloto 60 dias |
| Empresa directa (500+) | Enterprise | USD 14/emp/mes | Dedicated CSM, integraciones custom |
| Mutual (white-label) | Volume | USD 2-4/emp/mes | Contrato anual minimo USD 300K |
| Benchmark reports | One-time | USD 5K-25K | Por reporte sectorial |

**Free tier**: No hay plan gratuito permanente. Hay un piloto de 60 dias sin costo (con compromiso de compartir feedback y datos anonimizados para benchmarking). La razon: un free tier permanente atrae empresas que no estan comprometidas con el bienestar — y eso contamina los datos.

### 5.3 Primeros 5 Pasos Concretos

**PASO 1: Esta semana (dia 1-7)**
- Edgar contacta a su red de CEAPSI para identificar 1-2 psicologos organizacionales que puedan asesorar el diseno de cuestionarios y validar el enfoque clinico. Costo: USD 0 (conversacion exploratoria).
- Jose disena el modelo de datos en Supabase: tablas para cuestionarios, respuestas, risk scores, consentimientos. Puede reutilizar el schema existente (migrations 0001-0005) adaptandolo al caso de salud mental laboral.
- Ambos escriben un one-pager de 1 pagina: que es MindRisk, para quien, que resuelve, como funciona. Este one-pager es la herramienta de validacion para las conversaciones de la semana 2.
- Identificar 5 empresas candidatas para piloto (2-3 de la red de Jose via Baufest, 2-3 de la red de Edgar via kntor.travel y CEAPSI).

**PASO 2: Mes 1 (semanas 2-4)**
- Construir MVP funcional minimo: cuestionario de onboarding (WHO-5 + PHQ-9 breve + 3 preguntas engagement) + dashboard B2B basico con Supabase + React.
- Entrevistar a los 5 prospectos con el one-pager. Pregunta central: "Si tuvieras estos datos de tu equipo, que harias con ellos?" — validar que el output (dashboard + alertas) tiene valor antes de construir mas.
- Edgar investiga el proceso de asistencia tecnica de las mutuales post-ISTAS-21: que hacen hoy, cuanto les cuesta, que herramientas usan. Puede hacerlo via los contactos de CEAPSI (profesionales de salud que interactuan con mutuales) o via la informacion publica de SUSESO.
- Jose construye el pipeline de datos basico: ingestion de respuestas de cuestionario → calculo de risk score simple (thresholds estadisticos, no ML) → visualizacion en dashboard.

**PASO 3: Mes 3**
- Lanzar piloto con 2-3 empresas (minimo 100 empleados en total).
- Piloto gratuito de 60 dias con metricas claras de exito: tasa de participacion >65%, al menos 4 check-ins completados por >50% de participantes, NPS >30.
- Documentar todo: tasas de participacion, feedback cualitativo, screenshots del dashboard, metricas pre/post.
- Primera version del "Privacy Manifesto" publicada en la web — diferenciarse de BetterHelp/Cerebral/Talkspace.

**PASO 4: Mes 6**
- Con datos del piloto, construir caso de estudio: "Empresa X redujo Y% en [metrica] usando MindRisk durante 4 meses."
- Presentar el caso de estudio a 1 mutual (ACHS es la mas grande y la mas innovadora). Propuesta: piloto white-label con 10 empresas afiliadas en riesgo alto.
- Primeros 2-3 contratos pagos con empresas directas.
- Contratar asesor legal especializado en Ley 21.719 para auditar cumplimiento (USD 2,000-5,000 one-time).

**PASO 5: Mes 12**
- Si partnership con mutual cerrada: escalar a 20-50 empresas.
- Si no: pivotar canal y enfocarse en venta directa a empresas medianas (100-500 empleados) con SDR contratado.
- Iniciar exploracion de Mexico: contactar consultoras de salud ocupacional que asesoran empresas en NOM-035. Edgar puede activar contactos en la comunidad venezolana en Mexico (puente cultural).
- Publicar primer benchmark: "Bienestar mental laboral en empresas tech de Chile 2027" — reporte gratuito para posicionamiento (los datos agregados del primer ano de operacion, con N minimo de 500 empleados).

### 5.4 Expansion Chile → LATAM

```
CHILE (Mes 0-12): Puerta de entrada via ISTAS-21 + mutuales
  - Regulacion obligatoria crea demanda built-in
  - 3 mutuales = 270,000 empresas potenciales
  - Ley 21.719 (dic 2026) crea urgencia de cumplimiento

MEXICO (Mes 12-18): Puerta de entrada via NOM-035
  - Obligatoria para todas las empresas con >15 empleados
  - Evaluaciones cada 2 anos
  - Multas: USD 1,364 - USD 27,291
  - Canal: consultoras de salud ocupacional (equivalente a mutuales)
  - Adaptacion: los cuestionarios son diferentes pero el modelo es el mismo

COLOMBIA (Mes 18-24): Puerta de entrada via Resolucion 2764/2022
  - Bateria de riesgo psicosocial obligatoria
  - Gobierno activamente promoviendo salud mental laboral
  - Canal: ARL (Administradoras de Riesgos Laborales) — equivalente a mutuales

BRASIL (Mes 24-36): Puerta de entrada via NR-17 + LGPD
  - Mercado mas grande de LATAM pero mas complejo (idioma, regulacion)
  - LGPD requiere DPO + consentimiento explicito → ventaja para quien ya cumple
  - Canal: consultoras como Vittude (ya validaron wellness B2B en Brasil)
  - Partner potencial: Vittude (terapia B2B, crecio 300% post-COVID)
```

---

## 6. Diferenciacion Competitiva

### 6.1 Matriz de Posicionamiento

```
                          DATOS PREDICTIVOS
                               ▲
                               │
                    MindRisk   │
                   (posicion   │   (vacio — nadie
                    target)    │    esta aqui)
                               │
  ETICO ◄──────────────────────┼──────────────────────► NO ETICO
  (usuario es                  │              (venta de datos
   dueno de                    │               sin consentimiento)
   sus datos)                  │
                               │
                  Spring Health │   IQVIA / Optum
                  Lyra Health   │   Data brokers
                  Wellhub       │   Headspace/Calm
                               │   BetterHelp
                               │
                               ▼
                          DATOS REACTIVOS
```

**Lectura de la matriz**:
- **Cuadrante superior-izquierdo** (datos predictivos + etico): MindRisk. Nadie esta aqui hoy.
- **Cuadrante inferior-izquierdo** (datos reactivos + etico): Spring Health, Lyra, Wellhub. Recolectan datos pero no los venden como producto de insights. Analytics son internos.
- **Cuadrante inferior-derecho** (datos reactivos + no etico): IQVIA, Optum, data brokers. Venden claims ya generados. Problemas eticos documentados.
- **Cuadrante superior-derecho** (datos predictivos + no etico): Nadie de forma explicita, pero Headspace/Calm/BetterHelp comparten datos con adtech lo cual los acerca.

### 6.2 Tabla Comparativa Detallada

| Dimension | MindRisk | Spring Health | Lyra Health | Betterfly | Cuentame | IQVIA/Optum |
|-----------|----------|---------------|-------------|-----------|----------|-------------|
| **Core** | Datos predictivos + dashboard | Assessment + terapia | Wellness + analytics | Habitos → seguros | IA para NOM-035 | Broker de claims |
| **Datos recolectados** | Cuestionarios clinicos + HRIS + engagement | 12 condiciones | Engagement + tendencias | Actividad fisica | Riesgos psicosociales | Claims + prescripciones |
| **Cruza con HRIS** | Si (core feature) | No | No | No | No | No |
| **Modelo predictivo** | Si (burnout, rotacion, depresion) | No (assessment puntual) | Parcial (interno) | No | Parcial | No (reactivo) |
| **Vende insights a terceros** | Si (agregados, etico) | No | No | No | No | Si (individualizados) |
| **Privacidad** | Privacy by Design, Ley 21.719-ready | Buena | Buena | Media | Media | Problematica |
| **LATAM** | Chile + Mexico (objetivo) | No | No | Chile, Colombia, Brasil | Mexico | No directo |
| **Valuacion** | Pre-revenue | USD 3.3B | USD 5.6B | USD 1B | No publica | USD 47B (IQVIA total) |
| **Puerta regulatoria** | ISTAS-21, NOM-035 | No | No | No | NOM-035 | N/A |
| **Canal mutuales** | Si (core GTM) | No | No | No | No | No |

### 6.3 Moats (por que es dificil de copiar)

```
MOAT 1: DATOS LONGITUDINALES PROPIETARIOS
══════════════════════════════════════════
Cada semana que un empleado hace check-in, MindRisk acumula datos
que nadie mas tiene. Despues de 12 meses con 10,000 empleados:
→ ~500,000 data points de bienestar longitudinal cruzados con HRIS.
→ Ese dataset NO existe en el mundo hoy.
→ Los modelos predictivos mejoran con cada data point.
→ Un competidor que entre hoy necesita 12+ meses para igualar la calidad del modelo.

MOAT 2: CANAL DE DISTRIBUCION (MUTUALES)
═════════════════════════════════════════
Si MindRisk se convierte en la herramienta estandar de intervencion
post-ISTAS-21 de una mutual:
→ La mutual ya lo integro en su flujo de trabajo.
→ Los consultores de la mutual estan entrenados en usarlo.
→ Cambiar de proveedor implica re-entrenar + migrar datos + arriesgar cumplimiento.
→ Switching cost alto = churn bajo.

MOAT 3: CUMPLIMIENTO REGULATORIO COMO FEATURE
═════════════════════════════════════════════
La Ley 21.719 (dic 2026) es la mas estricta de LATAM:
→ MindRisk se disena para cumplirla desde dia 1.
→ Los competidores que existen hoy (Spring Health, Lyra) no estan en Chile
   y no estan disenados para esta regulacion.
→ Betterfly y Cuentame tendrian que re-arquitectar para cumplir.
→ La regulacion es la barrera de entrada que protege al incumbente.

MOAT 4: DATOS LONGITUDINALES PROPIETARIOS
═══════════════════════════════════════════
Al acumular datos continuos de cuestionarios + HRIS + engagement:
→ Dataset longitudinal de salud mental laboral que NADIE en LATAM tiene.
→ Correlaciones entre intervenciones y reducción de riesgo
   = investigación publicable + credibilidad + diferenciación radical.
→ Cada empresa nueva mejora el modelo predictivo para todas las demás (efecto de red de datos).

MOAT 5: CONFIANZA
═════════════════
En un mercado post-BetterHelp, post-Cerebral, post-Talkspace:
→ La confianza del usuario es el activo mas escaso.
→ Un Privacy Manifesto creible, auditado, con track record limpio
   = ventaja competitiva que no se puede comprar.
→ Un solo incidente de privacidad destruye a MindRisk,
   pero tambien destruiria a cualquier competidor.
→ Quien construye confianza primero, gana.
```

---

## 7. Riesgos y Mitigaciones

| Riesgo | Probabilidad | Impacto | Mitigacion |
|--------|-------------|---------|------------|
| **Las mutuales no compran** (ciclo de venta demasiado largo, burocracia) | Media | Alto | Tener canal directo B2B como backup. No depender 100% del canal mutual. |
| **Baja participacion de empleados** (fatiga de encuestas, desconfianza) | Media | Alto | Cuestionarios de <3 min. Valor inmediato para el empleado (insights personales). Transparencia radical de privacidad. |
| **Incidente de privacidad** (brecha de datos, fallo de encriptacion) | Baja | Critico | Privacy by Design. Pentesting antes de lanzar. Seguro de ciber-responsabilidad. DPO part-time desde dia 1. |
| **Regulatorio**: Ley 21.719 mas estricta de lo anticipado | Baja | Medio | Ya se disena para cumplimiento maximo. Contratar asesor legal especializado en mes 3. |
| **Cold start de datos**: modelos no son utiles con poco volumen | Alta | Medio | En Fase 1, usar thresholds estadisticos simples (no ML). El valor del MVP no es el modelo, es el dashboard + alertas. ML viene en Fase 3 cuando hay volumen. |
| **Spring Health o Lyra entran a Chile** | Baja (corto plazo) | Alto (largo plazo) | Velocidad. Cerrar canal mutual antes de que un gigante lo haga. La regulacion local (ISTAS-21, Ley 21.719) es barrera para extranjeros. |
| **El equipo no tiene experiencia actuarial** | Alta | Medio | No se necesita en Fase 1-2. En Fase 3, contratar asesor actuarial o partnership con consultora. El modelo predictivo inicial es estadistica basica, no ciencia actuarial. |

---

## 8. Por que este equipo

| Dimension | Edgar | Jose | Combinacion |
|-----------|-------|------|-------------|
| **Salud mental** | CEAPSI: coordino profesionales de salud mental + colegios durante 1 ano. Entiende el ecosistema desde dentro. | Proposito personal: "tecnologia que ayude a la gente". Filtra ideas por impacto humano real. | Uno entiende el dominio, el otro entiende como construir la solucion. |
| **Datos** | Sabe que datos existen (cuestionarios, HRIS, ISTAS-21). No sabe extraerlos ni modelarlos. | Certificado Azure + Databricks. Pipeline ETL multi-fuente. Modelos predictivos. Power BI. | Edgar identifica las fuentes. Jose construye el pipeline. |
| **B2B enterprise** | Levanto 20 clientes B2B en Newstilo. Conoce venta consultiva. Red de clientes corporativos en kntor.travel. | Desde Baufest, ha visto como empresas grandes aprueban proyectos de datos. Sabe hablar con IT, finanzas y negocio. | Pueden vender: Edgar abre la puerta (relacion), Jose cierra con el caso de datos. |
| **Regulacion Chile** | Experiencia directa con licitaciones publicas (PIE/Mineduc). Sabe como funciona la burocracia chilena. | Conoce la gobernanza de datos en empresas enterprise. | Pueden navegar tanto la regulacion publica (SUSESO, mutuales) como la privada (compliance corporativo). |
| **Gap honesto** | No es data scientist. No tiene red en aseguradoras/mutuales. | No tiene experiencia en modelos actuariales ni en sector salud. | Necesitan: (1) asesor clinico, (2) asesor legal en datos de salud, (3) eventualmente, un actuario. |

---

## 9. Financiamiento estimado

### Escenario bootstrap (sin inversion externa)

| Fase | Inversion necesaria | Fuente |
|------|-------------------|--------|
| Fase 1 (M0-6) | USD 15,000-25,000 | Ahorros personales + revenue de kntor.travel (Edgar) + sueldo Baufest (Jose part-time) |
| Fase 2 (M6-12) | USD 30,000-50,000 | Revenue de primeros clientes (USD 5K-15K MRR) + posible pre-seed angel |
| Fase 3 (M12-18) | USD 80,000-120,000 | Revenue (USD 25K-60K MRR) + seed round si metricas lo justifican |

### Escenario con inversion pre-seed

Si se busca inversion en mes 3-6 (post-piloto con datos):
- Pre-seed: USD 150K-300K a cambio de 10-15% equity
- Uso: 1 developer full-stack (6 meses), asesor legal, marketing, runway para founder salaries
- Inversores target: Magma Partners (Chile, invierten en startups LATAM), ALLVP, angel investors del ecosistema health-tech LATAM

---

## 10. Decision Framework: Go / No-Go

### Senales de GO (validar en primeros 3 meses)

- [ ] Al menos 2 de 5 empresas prospecteadas aceptan piloto gratuito
- [ ] Tasa de participacion de empleados en piloto >60%
- [ ] Al menos 1 HR Manager dice "pagaria por esto" (no "que interesante")
- [ ] Al menos 1 contacto en mutual confirma que necesitan herramienta digital de intervencion
- [ ] El equipo logra construir el MVP funcional en 4-6 semanas

### Senales de NO-GO

- [ ] Ninguna empresa acepta piloto (ni gratis)
- [ ] Empleados rechazan participar (<40% opt-in)
- [ ] HR Managers dicen "ya tenemos algo que funciona" (sin dolor real)
- [ ] Mutuales dicen "estamos desarrollando esto internamente" (competencia directa)
- [ ] El marco legal impide el modelo de datos propuesto (asesor legal lo descarta)

### Pivots posibles si no funciona

1. **Pivot a consultoria**: vender el analisis de datos de ISTAS-21 como servicio de consultoria (no SaaS), cobrar por proyecto. Menos escalable pero valida que el conocimiento tiene valor.
2. **Pivot a plataforma de intervención**: si el canal de mutuales no funciona pero la validación del problema (burnout, ausentismo) es fuerte, pivotar de "modelos de riesgo" a "plataforma de intervención post-ISTAS-21" — menos datos, más acción directa.
3. **Pivot geografico**: si Chile no funciona, probar Mexico primero (NOM-035 tiene multas mas altas y mayor enforcement).

---

→ Idea: [[2026-02-20-datos-salud-mental-modelos-riesgo]]
→ Research: [[datos-salud-mental-empleados-research]] · [[datos-salud-mental-clientes-research]]
→ Equipo: [[perfil-edgar-recursos-estrategicos]] · [[perfil-jose-recursos-estrategicos]]
→ Contexto: [[espacio-de-oportunidad]]
