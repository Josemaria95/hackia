---
title: "Travel × Corporativo: dashboard de bienestar en viajes de negocios"
aliases: [viajes-corporativos-datos, travel-hr-dashboard]
date: 2026-02-19
tags: [hipotesis, travel, corporativo]
status: idea
miro: ""
---

# Travel × Corporativo: dashboard de bienestar en viajes de negocios

> Hipótesis central: **Las empresas no saben si sus políticas de viaje retienen o desgastan talento.**

Contexto macro: [[espacio-de-oportunidad]] | Research de mercado: [[viajes-corporativos-datos-research]]

---

## El problema

Las empresas gastan en viajes de negocios sin medir el impacto humano:
- ¿El empleado que viaja mucho es más productivo o más propenso a renunciar?
- ¿Qué tipo de experiencia de viaje maximiza la satisfacción sin inflar el presupuesto?
- ¿Cómo justifica RRHH ante finanzas que el policy de viajes es competitivo?

Los sistemas actuales (SAP Concur, Navan/TripActions) miden **gasto**, no **bienestar**.

---

## Ideas semilla

- **Dashboard de bienestar en viajes de negocios** — fatiga acumulada, satisfacción post-viaje, productividad correlacionada con tipo de viaje
- **Beneficio de viaje de ocio como perk medible** — ROI en retención: ¿vale más un voucher de $500 en vacaciones que un bono en efectivo?
- **Optimizador de política de viajes con datos reales** — comparar políticas de empresas similares y sugerir ajustes basados en outcomes de retención

---

## Flujo de valor

```mermaid
---
config:
  flowchart:
    nodeSpacing: 20
    rankSpacing: 30
    subGraphTitleMargin:
      top: 5
      bottom: 5
  themeVariables:
    fontSize: 12px
---
graph TD
    subgraph HOY["Hoy: datos dispersos, decisiones a ciegas"]
        A1[GDS: PNR, tarifas, segmentos] --> X1[Nadie los analiza]
        A2[ERP agencia: facturación, comisiones] --> X1
        A3[OBT: reservas, política cumplida/no] --> X1
        A4[RRHH: rotación, engagement, ausentismo] --> X2[Vive en otro sistema]
    end

    subgraph PRODUCTO["Producto: capa de datos entre travel y RRHH"]
        B1[Ingesta de datos de viaje] --> B2[Modelo unificado]
        B3[Datos de RRHH] --> B2
        B2 --> B4[Dashboard: gasto + fatiga +<br/>satisfacción por empleado/área]
        B4 --> B5[Alertas: empleados en<br/>riesgo de burnout]
        B4 --> B6[Benchmark: tu política<br/>vs. empresas similares]
    end

    subgraph VALOR["Valor entregado"]
        B5 --> C1[RRHH ajusta política<br/>antes de perder talento]
        B6 --> C2[Finanzas optimiza gasto<br/>con datos reales]
        B4 --> C3[Travel Manager<br/>deja de usar Excel]
    end

    X1 -.->|"hackia conecta"| B1
    X2 -.->|"hackia conecta"| B3

    style HOY fill:#fee,stroke:#c33
    style PRODUCTO fill:#eff,stroke:#39c
    style VALOR fill:#efe,stroke:#3c3
```

## Customer journey: Gerente de Administración — empresa mediana, Chile, 200 empleados

```mermaid
graph TD
    J1["😤 DOLOR<br/>Gastamos $15K/mes en viajes<br/>y no sé si sirve de algo"]
    J2["🔍 BUSCA<br/>Pregunta a su agencia<br/>por reportes de viajes"]
    J3["📊 DESCUBRE<br/>La agencia solo tiene<br/>datos de facturación"]
    J4["💡 ENCUENTRA HACKIA<br/>Conecta datos de viaje<br/>con métricas de equipo"]
    J5["🧪 PILOTO<br/>Encuesta post-viaje<br/>+ dashboard de 30 días"]
    J6["📈 PRIMER INSIGHT<br/>Equipo de ventas viaja 3x más<br/>que el promedio y su rotación<br/>es 2x mayor"]
    J7["💰 CONTRATA<br/>$25/viajero/mes"]
    J8["🔄 RETENCIÓN<br/>Comparte datos con RRHH,<br/>ajustan política de viajes"]

    J1 --> J2 --> J3 --> J4 --> J5 --> J6 --> J7 --> J8

    style J1 fill:#fdd,stroke:#c33
    style J4 fill:#ddf,stroke:#33c
    style J6 fill:#dfd,stroke:#3c3
    style J7 fill:#ffd,stroke:#cc3
```

---

## Preguntas a validar

1. ¿Existe algún sistema hoy que conecte datos de viaje con datos de RRHH (engagement, rotación)?
2. ¿Los equipos de Travel Management en empresas medianas tienen acceso a datos de satisfacción?
3. ¿Estaría RRHH dispuesto a pagar por este insight o solo IT/Finanzas?

---

## Ventaja del equipo

- **Jose** conoce cómo se toman decisiones de gasto en corporativos grandes — sabe quién es el buyer real
- **Edgar** conoce qué datos existen del lado de los proveedores de travel (hoteles, aerolíneas, OTAs)

---

## Próximos pasos

- [ ] Jose: mapear los pain points reales de su empresa con viajes corporativos
- [ ] Identificar si algún competidor ya resuelve esto (y por qué no ha escalado)
- [ ] Definir el MVP mínimo: ¿encuesta post-viaje + dashboard básico?
