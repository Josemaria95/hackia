---
title: "Metricas North Star"
date: 2026-03-06
tags: [estrategia, wellness, corporativo]
status: en-progreso
---

# Metricas North Star — Hachiko

## North Star Metric

**Weekly Active Check-ins per Employee (WACE)**

- **Definicion**: numero de check-ins que realiza cada empleado por semana, promediado en todas las empresas activas.
- **Objetivo**: >4 check-ins/semana por >50% de los empleados.
- **Por que esta metrica**: captura simultaneamente el engagement del empleado (lado consumer) y la calidad de los datos generados (lado business). Sin check-ins frecuentes, no hay datos; sin datos, no hay valor para HR ni para mutuales.

---

## Metricas de soporte

### Engagement del empleado

| Metrica | Definicion | Objetivo |
|---------|-----------|----------|
| DAU/MAU ratio | Usuarios activos diarios / usuarios activos mensuales | >30% |
| Duracion promedio del check-in | Tiempo desde que abre el check-in hasta que lo completa | <2 minutos |
| Longitud de racha (streak) | Dias consecutivos con al menos 1 check-in | Mediana >7 dias |
| NPS empleado | Net Promoter Score medido mensualmente | >30 |
| Tasa de evolucion del pet | % de empleados que alcanzan stage 2 de la mascota al dia 30 | >50% |
| Tasa de personalizacion | % de empleados que nombran/personalizan su mascota | >80% |

### Salud del negocio

| Metrica | Definicion | Objetivo |
|---------|-----------|----------|
| MRR | Monthly Recurring Revenue | Creciente mes a mes |
| Empresas activas | Empresas con al menos 1 empleado activo en la semana | Creciente |
| Empleados activos totales | Empleados con al menos 1 check-in en los ultimos 7 dias | Creciente |
| Conversion piloto a pago | % de pilotos que se convierten en clientes pagos | >60% |
| Churn rate mensual | % de empresas que cancelan en un mes dado | <5% |
| CAC | Costo de Adquisicion de Cliente (empresa) | Decreciente |
| Periodo de payback del CAC | Meses para recuperar el CAC | <6 meses |
| LTV/CAC ratio | Lifetime Value / Costo de Adquisicion | >3x |

### Calidad de datos

| Metrica | Definicion | Objetivo |
|---------|-----------|----------|
| Tasa de completacion WHO-5 semanal | % de empleados que completan el WHO-5 camuflado cada semana | >70% |
| Precision del risk score | Correlacion del score de riesgo con evaluacion clinica manual | Por validar |
| Engagement HR con dashboard | Logins de HR al dashboard por semana | >2x/semana |
| Tasa de accion HR | % de alertas que generan una accion por parte de HR | >40% |

### Funnel de ventas

```
Leads -> Demo -> Piloto -> Pago -> Expansion
```

| Etapa | Conversion objetivo |
|-------|-------------------|
| Lead -> Demo | >30% |
| Demo -> Piloto | >50% |
| Piloto -> Pago | >60% |
| Pago -> Expansion (mas equipos) | >30% anual |

---

## Dashboard interno (mockup conceptual)

### Panel superior: North Star
- Grafico de linea: WACE promedio por semana (ultimas 12 semanas).
- Indicador: % de empleados con >4 check-ins esta semana.
- Tendencia: flecha arriba/abajo vs semana anterior.

### Panel izquierdo: Engagement
- DAU/MAU ratio (gauge chart).
- Distribucion de longitud de rachas (histograma).
- Curva de retencion por cohorte (lineas por mes de ingreso).

### Panel central: Negocio
- MRR actual y tendencia (grafico de barras + linea).
- Numero de empresas activas y empleados activos.
- Pipeline: leads en cada etapa del funnel (funnel chart).

### Panel derecho: Datos
- Tasa de completacion WHO-5 esta semana.
- Numero de alertas de riesgo generadas.
- Engagement de HR con el dashboard.

### Panel inferior: Cohortes
- Tabla de retencion por cohorte (semana 1, 2, 4, 8, 12).
- Comparacion entre empresas (anonimizado por tamano).

---

## Cadencia de revision

| Frecuencia | Que se revisa | Quien |
|-----------|--------------|-------|
| Diaria | WACE, DAU, alertas criticas | Jose |
| Semanal | Todas las metricas de engagement + negocio | Edgar + Jose |
| Mensual | Funnel completo, churn, NPS, revision de cohortes | Edgar + Jose |
| Trimestral | LTV/CAC, precision del risk score, revision estrategica | Edgar + Jose |

---

> Estrategia de crecimiento: [[growth-plan]]
> Proyecto maestro: [[hachiko-proyecto-maestro]]
> Equipo: [[perfil-edgar-recursos-estrategicos]] · [[perfil-jose-recursos-estrategicos]]
