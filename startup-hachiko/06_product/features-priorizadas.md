---
title: "Features Priorizadas (MoSCoW)"
date: 2026-03-06
tags: [producto, wellness, corporativo]
status: en-progreso
---

# Features Priorizadas (MoSCoW)

Priorizacion de funcionalidades de Hachiko usando el framework MoSCoW. Cada categoria tiene una justificacion de negocio y un horizonte temporal estimado.

---

## MUST HAVE (MVP — Mes 0-3)

Sin estas features, el producto no tiene sentido. Son el minimo para validar la hipotesis central.

| # | Feature | Descripcion | Justificacion |
|---|---------|-------------|---------------|
| M1 | **Mascota virtual con estados emocionales** | 4 estados basicos: contenta, cansada, estresada, enferma. La mascota refleja el bienestar reportado por el usuario. | Sin mascota no hay gamificacion. Es el frontend emocional de todo el sistema. Core Drive 2 (desarrollo) + CD4 (propiedad) + CD8 (evitar perdida). |
| M2 | **Check-in diario camuflado** | "Cuida a tu pet": 2-3 preguntas que mapean a PHQ-2 proxy (energia + disfrute). Duracion <2 minutos. | Genera el datapoint diario minimo. Sin esto no hay datos continuos. |
| M3 | **Check-in semanal (WHO-5 camuflado)** | 5 preguntas presentadas como "como amanecio tu pet esta semana". Mapean directamente al WHO-5 validado. | Instrumento clinico estandarizado que permite comparar con benchmarks existentes. |
| M4 | **Coaching basico via SLM local** | Respuestas predefinidas con variabilidad (templates + reglas + SLM). Micro-tips de bienestar contextualizados al check-in. | Valor inmediato para el empleado desde dia 1. Sin coaching el check-in se siente extractivo. CD3 (creatividad/feedback). |
| M5 | **Dashboard HR basico** | Metricas agregadas: tasa de participacion, risk score promedio (solo si N>=30), tendencia semanal. Vista web responsive. | Sin dashboard no hay propuesta B2B. Es lo que HR compra. |
| M6 | **Autenticacion y multi-tenancy** | Supabase Auth + RLS por brand_id. SSO basico (email empresarial). Aislamiento completo entre empresas. | Requisito tecnico para pilotos con multiples empresas. Sin esto no hay B2B. |
| M7 | **Consentimiento granular y opt-out** | Pantalla de consentimiento clara en onboarding. Opt-out disponible en cualquier momento. Datos exportables. | Requisito etico y legal (Ley 21.719). Sin esto no podemos operar en Chile. |

---

## SHOULD HAVE (Post-MVP — Mes 3-6)

Mejoran significativamente la retencion y el valor para HR. No bloquean el lanzamiento, pero son criticas para conversion a pago.

| # | Feature | Descripcion | Justificacion |
|---|---------|-------------|---------------|
| S1 | **Evolucion visual del pet** | 3 etapas: bebe, joven, adulto. La mascota cambia de apariencia a los 30, 60 y 90 dias de uso continuo. | CD2 (desarrollo/realizacion). Principal mecanica de retencion a mediano plazo. |
| S2 | **Coaching profundo via LLM cloud** | 2 sesiones/semana con Claude Haiku. Interpretacion de patrones complejos, insights personalizados. | CD6 (escasez — sesiones limitadas) + CD3 (creatividad — respuestas unicas). Diferenciador vs. competidores. |
| S3 | **Integracion calendario** | Conectar Google Calendar / Outlook. Detectar overtime, densidad de reuniones, bloques sin pausas. | Enriquece los datos con contexto objetivo (no solo auto-reporte). Permite coaching contextual ("hoy tuviste 8 reuniones seguidas"). |
| S4 | **Alertas tempranas anonimizadas** | Notificacion a HR cuando un equipo (N>=30) muestra deterioro sostenido (3+ semanas de tendencia negativa). | Feature de mayor valor para HR. Convierte Hachiko de "wellness app" a "sistema de alerta temprana". |
| S5 | **Export de datos personales** | Boton de descarga con todos los datos del empleado en formato legible (PDF + JSON). | Cumplimiento de derechos ARCO (acceso, rectificacion, cancelacion, oposicion) bajo Ley 21.719. |
| S6 | **Rachas y sistema de niveles** | Contador de dias consecutivos de check-in. Niveles de "cuidador" (novato, dedicado, experto). | CD2 (realizacion) + CD8 (no perder la racha). Mecanica probada de retencion. |

---

## COULD HAVE (Mes 6-12)

Aceleran crecimiento y abren nuevos segmentos de revenue. Se priorizan segun traccion del MVP.

| # | Feature | Descripcion | Justificacion |
|---|---------|-------------|---------------|
| C1 | **Integracion HRIS via API** | Conectar con BambooHR, Buk, Factorial. Cruzar datos de ausentismo, rotacion, overtime con datos de Hachiko. | Permite modelos predictivos reales. Diferenciador clave vs. competidores que no cruzan datos. |
| C2 | **Benchmarks de equipo anonimizados** | Comparar el bienestar del equipo con el promedio de la empresa y la industria (solo si N>=30). | CD5 (influencia social). Permite a equipos saber "como estamos vs. el resto" sin revelar individuos. |
| C3 | **White-label para mutuales** | Logo, colores, dominio y textos personalizables. La mutual despliega Hachiko como "su" herramienta. | Habilita el canal de mutuales (Stream 2 de revenue). Sin esto no se puede cerrar contrato mutual. |
| C4 | **Eventos estacionales y sorpresas del pet** | Cambios de apariencia por festividades, logros especiales inesperados, mini-juegos sorpresa. | CD7 (impredecibilidad/curiosidad). Combate el abandono por rutina. |
| C5 | **Modelo predictivo basico** | Regresion logistica simple: predecir riesgo de burnout/renuncia basado en patrones de check-in. | Primer paso hacia el moat de datos. No requiere ML complejo, pero si volumen minimo (~5,000 empleados). |

---

## WON'T HAVE (No ahora — Backlog futuro)

Descartados para el horizonte actual. Se revisaran cuando haya traccion y volumen de datos.

| # | Feature | Por que no ahora |
|---|---------|-----------------|
| W1 | **Modelo ML avanzado (gradient boosting, XGBoost)** | Requiere volumen de datos que no tendremos antes del mes 12. Regresion logistica es suficiente para Fase 1-2. |
| W2 | **API de risk scoring para aseguradoras** | Requiere validacion actuarial, volumen masivo de datos y contratos complejos. Es Stream 4 de revenue (mes 12+). |
| W3 | **Adaptacion NOM-035 (Mexico)** | Requiere investigacion regulatoria separada. Mexico es Fase 3 (mes 12-18). Chile primero. |
| W4 | **Marketplace de terapeutas** | Cambia completamente el modelo de negocio. Hachiko es prevencion/datos, no terapia. Ademas, competiria con los EAPs existentes. |
| W5 | **Wearable integration** | Complejidad tecnica alta, fragmentacion de dispositivos, problemas de privacidad multiplicados. No agrega valor suficiente al MVP. |

---

> Documento maestro: [[hachiko-proyecto-maestro]]
> Definicion del MVP: ver `07_mvp/definicion-mvp.md`
> Equipo: [[perfil-edgar-recursos-estrategicos]] · [[perfil-jose-recursos-estrategicos]]
