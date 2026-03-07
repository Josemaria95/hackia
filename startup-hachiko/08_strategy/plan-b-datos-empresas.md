---
title: "Plan B — Venta de Datos B2B"
date: 2026-03-06
tags: [estrategia, wellness, corporativo]
status: en-progreso
---

# Plan B — Venta de Datos B2B

---

## Contexto

Si Platanus no funciona o toma demasiado tiempo, si el SaaS directo crece lento, o si el canal mutual se demora mas de lo esperado, existe un camino alternativo de revenue basado en el activo mas valioso que Hachiko genera: **datos agregados de salud mental laboral**.

Este plan NO reemplaza al producto principal — lo complementa. Es un revenue stream que se activa cuando hay volumen suficiente de datos (mes 6-12 como minimo).

---

## El Activo: Datos Agregados de Salud Mental Laboral

Con suficiente adopcion, Hachiko acumula un dataset que **no existe hoy en LATAM**:

| Dimension del dato | Ejemplo | Valor |
|-------------------|---------|-------|
| **Bienestar longitudinal** | Score WHO-5 semanal por empleado durante 12+ meses | Tendencias, estacionalidad, correlaciones |
| **Segmentacion por industria** | Bienestar promedio en tech vs. retail vs. servicios | Benchmarks sectoriales |
| **Segmentacion por tamano** | Empresas <100 vs. 100-500 vs. 500+ empleados | Patrones por escala organizacional |
| **Segmentacion geografica** | Santiago vs. regiones vs. otros paises | Diferencias territoriales |
| **Correlacion con HRIS** | Bienestar vs. rotacion, ausentismo, overtime | Modelos predictivos con variables cruzadas |
| **Efectividad de intervenciones** | Score antes vs. despues de intervenciones de HR | Evidencia de que funciona (y que no) |

---

## Compradores Potenciales

| Comprador | Que les interesa | Por que pagarian |
|-----------|-----------------|-----------------|
| **Consultoras** (McKinsey, Deloitte, Accenture, EY) | Benchmarks de industria para sus proyectos de transformacion organizacional | Necesitan datos frescos para sus reportes a clientes. Hoy usan encuestas propias costosas o datos academicos viejos. |
| **Mutuales** (ACHS, Mutual de Seguridad, IST) | Modelos de riesgo por industria y tamano de empresa | Les permite priorizar recursos de prevencion. Reducir siniestralidad = reducir costos de claims. |
| **Aseguradoras** | Risk scoring por segmento para modelos actuariales | Mejor pricing de polizas de salud/vida. Datos actuales vs. tablas actuariales historicas. |
| **Gobierno** (SUSESO, Ministerio de Salud, Ministerio del Trabajo) | Indicadores nacionales de salud mental laboral | Politica publica basada en evidencia. Hoy no tienen datos continuos — solo ISTAS-21 puntual. |
| **Academia** (universidades, centros de investigacion) | Datasets anonimizados para investigacion | Publicaciones, tesis, validacion de modelos psicometricos. |

---

## Productos de Datos

### Producto 1: Benchmark Reports

**Que es**: Reporte anual o semestral con el estado de salud mental laboral por industria en Chile.

**Ejemplo**: "Estado de Salud Mental Laboral en Empresas de Tecnologia — Chile 2027"

**Contenido**:
- Score WHO-5 promedio por industria (benchmarks)
- Tendencias trimestrales (mejorando o empeorando)
- Factores de riesgo mas prevalentes por tamano de empresa
- Correlacion entre participacion en programas de bienestar y metricas de rotacion
- Recomendaciones basadas en datos

**Precio**: $5,000 - $25,000 USD por reporte (segun profundidad y exclusividad)

**Frecuencia**: Anual (primer reporte) → Semestral (cuando haya volumen)

**Compradores**: Consultoras, mutuales, gobierno, media especializada

### Producto 2: Custom Analytics

**Que es**: Analisis personalizado para un comprador especifico, usando datos agregados de Hachiko.

**Ejemplo**: Una aseguradora quiere saber el risk score por industria para re-calcular primas de seguros de salud.

**Contenido**:
- Modelo de riesgo por segmento (industria x tamano x region)
- Scoring de probabilidad de siniestro (licencia medica, renuncia por burnout)
- Comparacion con benchmarks historicos
- Actualizacion trimestral

**Precio**: $50,000 - $100,000 USD por contrato anual

**Compradores**: Aseguradoras, mutuales (en su rol de aseguradoras), grandes consultoras

### Producto 3: API de Risk Indicators

**Que es**: Endpoint de API que entrega indicadores de riesgo agregados en tiempo real, integrables en plataformas HRIS o actuariales.

**Ejemplo**: Buk (HRIS) integra el indicador de riesgo de Hachiko en su dashboard de HR.

**Endpoints**:
- `/api/benchmark/{industry}` — score promedio de bienestar por industria
- `/api/risk/{company_size}/{region}` — risk score por tamano y region
- `/api/trend/{industry}/{period}` — tendencia de bienestar en los ultimos N meses

**Precio**: $2 - $5 USD por empleado por mes (el HRIS lo re-vende a sus clientes)

**Compradores**: Plataformas HRIS (Buk, BambooHR, Factorial), plataformas actuariales

---

## Requisitos Minimos de Datos

Para que los productos de datos sean estadisticamente validos y comercialmente creibles:

| Producto | Empresas minimas | Empleados minimos | Timeline estimado |
|----------|-----------------|-------------------|-------------------|
| Benchmark basico (1 industria) | 50 empresas de la misma industria | 5,000+ empleados con 3+ meses de datos | Mes 9-12 |
| Benchmark multi-industria | 100+ empresas en 3+ industrias | 10,000+ empleados | Mes 12-18 |
| Custom analytics para aseguradora | 100+ empresas, 3+ industrias | 10,000+ con 6+ meses | Mes 12-18 |
| API de risk indicators | 200+ empresas, datos continuos | 20,000+ | Mes 18+ |

**El cuello de botella es claro**: necesitamos volumen primero. Sin el producto principal (SaaS) andando, no hay datos para vender.

---

## Privacidad: Lineas Rojas Inquebrantables

| Regla | Implementacion |
|-------|---------------|
| **Solo datos agregados** | Minimo N=100 empresas para cualquier reporte. Nunca datos de una sola empresa. |
| **Nunca individuales** | Ningun dato a nivel de empleado individual sale de Hachiko. Jamas. |
| **Nunca identificables** | Cruces de segmentos que reduzcan N a <30 se suprimen automaticamente (statistical disclosure control). |
| **Consentimiento explicito** | Los empleados consienten en el onboarding que sus datos se usen de forma agregada y anonimizada para benchmarks. |
| **Auditoria** | Todo acceso a datos agregados queda registrado en audit logs inmutables. |
| **Sin adtech** | Los datos nunca se venden a Meta, Google, TikTok, ni a ningun broker de datos. |

---

## Revenue Potencial

Estimacion conservadora una vez que haya volumen suficiente (mes 12+):

| Producto | Volumen anual | Revenue estimado |
|----------|--------------|-----------------|
| Benchmark reports (3-5 reportes/ano) | $5K-25K c/u | $15K - $125K/ano |
| Custom analytics (1-2 contratos) | $50K-100K c/u | $50K - $200K/ano |
| API (en fase madura) | $2-5/emp/mes, 5,000+ emp | $120K - $300K/ano |
| **Total potencial** | | **$50K - $200K/ano** (conservador, primeros 2 anos) |

En fase madura (ano 3+, 50,000+ empleados, multi-pais), el revenue de datos podria representar el 10-15% del revenue total.

---

## Riesgos de este Plan B

| Riesgo | Probabilidad | Mitigacion |
|--------|-------------|------------|
| **Chicken-and-egg**: necesitamos volumen para vender datos, necesitamos revenue para obtener volumen | Alta | No depender de este revenue para sobrevivir. Es complementario al SaaS, no sustituto. |
| **Percepcion de "venden mis datos"** | Media | Comunicacion transparente. Privacy Manifesto publico. Solo agregados, nunca individuales. |
| **Competencia de encuestas tradicionales** | Media | Nuestros datos son continuos (no puntuales), longitudinales (no snapshot) y voluntarios (no obligatorios). Calidad superior. |
| **Validacion estadistica** | Media | Involucrar bioestadistico o epidemiologo para validar metodologia antes de publicar. |
| **Regulacion** | Baja | Disenado para Ley 21.719 desde dia 1. Los datos agregados (N>=100) estan fuera del alcance de regulacion de datos personales. |

---

## Timeline

```
MES 0-6: No aplica
─────────────────
- Focus 100% en producto SaaS y pilotos
- Los datos se acumulan como subproducto natural

MES 6-9: Preparacion
─────────────────────
- Evaluar volumen de datos acumulado
- Disenar metodologia de agregacion con asesor estadistico
- Identificar primeros compradores potenciales (conversaciones exploratorias)

MES 9-12: Primer producto
─────────────────────────
- Si hay volumen suficiente (50+ empresas, 5,000+ empleados):
  - Producir primer benchmark report (1 industria, Chile)
  - Distribucion gratuita como herramienta de posicionamiento
  - Medir interes y willingness-to-pay

MES 12-18: Comercializacion
────────────────────────────
- Benchmark reports pagos
- Primer contrato de custom analytics
- Exploracion de API con plataformas HRIS

MES 18+: Escala
───────────────
- Multi-industria, multi-pais
- API en produccion
- Revenue recurrente de datos como % significativo
```

---

## Relacion con la Idea Original

Este plan conecta directamente con la hipotesis original de [[2026-02-20-datos-salud-mental-modelos-riesgo]], que planteaba la venta de datos de salud mental para modelos de riesgo como negocio central. En la evolucion hacia Hachiko, esto se convirtio en un revenue stream secundario (Stream 3 y 4 en el modelo de negocio), pero sigue siendo un componente estrategico valioso — especialmente como moat competitivo y como fuente de revenue independiente del SaaS.

---

> Idea base: [[2026-02-20-datos-salud-mental-modelos-riesgo]]
> Documento maestro: [[hachiko-proyecto-maestro]] (seccion 7, Streams 3-4)
> Estrategia general: ver `08_strategy/estrategia-general.md`
> Equipo: [[perfil-edgar-recursos-estrategicos]] (dominio salud) · [[perfil-jose-recursos-estrategicos]] (data engineering)
> Contexto: [[espacio-de-oportunidad]]
