---
title: "Travel × Wellness: capa de datos en turismo de bienestar"
aliases: [travel-wellness, wellness-datos]
date: 2026-02-19
tags: [hipotesis, travel, wellness]
status: idea
miro: ""
---

# Travel × Wellness: capa de datos en turismo de bienestar

> Hipótesis central: **El turismo de bienestar crece 2x más rápido que el turismo general pero no hay una capa de datos que lo haga inteligente.**

Contexto macro: [[espacio-de-oportunidad]] | Research de mercado: [[travel-wellness-research]]

---

## El problema

El mercado de wellness travel es enorme y en crecimiento acelerado, pero:
- El matching entre perfil del viajero y tipo de experiencia es artesanal (recomendaciones genéricas)
- Los proveedores no tienen datos sobre outcomes reales de sus huéspedes
- Las empresas no pueden justificar inversión en wellness travel sin datos de impacto

---

## Ideas semilla

- **Matching entre traveler profile y tipo de experiencia wellness** — no todos los retiros de yoga son iguales; el algoritmo debería recomendar basado en objetivo (estrés, burnout, pérdida de peso, espiritualidad) y perfil del viajero
- **Métricas de bienestar pre/post viaje para justificar inversión corporativa** — si una empresa paga un retiro de wellness para su equipo, ¿cómo mide el ROI en productividad y reducción de burnout?

---

## Conexión con el ángulo corporativo

Este segmento tiene un puente directo con [[2026-02-19-viajes-corporativos-datos]]:
- Las empresas están invirtiendo más en bienestar de empleados
- Un viaje de wellness grupal es un beneficio diferencial que RRHH puede medir
- El ROI de wellness travel es el argumento de venta para el buyer corporativo

---

## Flujo de valor

```mermaid
graph TD
    subgraph HOY["Hoy: wellness corporativo sin datos"]
        A1["RRHH sabe que hay burnout<br/>(89% en Chile)"] --> X1["Compra retiros genéricos<br/>o no hace nada"]
        A2["Proveedor wellness<br/>(spa, retiro, hotel boutique)"] --> X2["Vende experiencia genérica<br/>sin personalizar"]
        X1 --> X3["No puede medir si sirvió"]
        X2 --> X3
    end

    subgraph PRODUCTO["Producto: matching + medición de outcomes"]
        B1["Perfil del empleado:<br/>rol, nivel de estrés,<br/>objetivo de bienestar"] --> B2["Motor de matching"]
        B3["Catálogo de experiencias<br/>wellness con datos reales"] --> B2
        B2 --> B4["Recomendación personalizada:<br/>este retiro para este perfil"]
        B4 --> B5["Medición pre/post:<br/>encuesta + datos de RRHH"]
        B5 --> B6["Dashboard de ROI:<br/>inversión → reducción<br/>ausentismo/rotación"]
    end

    subgraph VALOR["Valor B2B"]
        B4 --> C1["Empleado recibe experiencia<br/>que le sirve, no genérica"]
        B6 --> C2["RRHH justifica presupuesto<br/>ante finanzas con datos"]
        B6 --> C3["Proveedor wellness<br/>diferencia su oferta<br/>con métricas de outcome"]
    end

    X3 -.->|"hackia conecta"| B1
    X2 -.->|"hackia conecta"| B3

    style HOY fill:#fee,stroke:#c33
    style PRODUCTO fill:#eff,stroke:#39c
    style VALOR fill:#efe,stroke:#3c3
```

## Customer journey: Gerenta de RRHH — empresa de 300 empleados

```mermaid
graph TD
    J1["😤 DOLOR<br/>Ausentismo subió 20%.<br/>Encuesta dice burnout.<br/>El directorio pide acciones"]
    J2["🤷 OPCIONES ACTUALES<br/>Gympass, charla motivacional,<br/>o retiro grupal sin medir"]
    J3["💡 ENCUENTRA HACKIA<br/>Recomienda experiencia wellness<br/>por perfil y mide outcome"]
    J4["🧪 PILOTO<br/>20 empleados del área<br/>con más rotación.<br/>Encuesta pre + retiro + post"]
    J5["📈 RESULTADO<br/>Grupo del retiro X redujo<br/>ausentismo 35% vs. control"]
    J6["💰 CONTRATA<br/>Paquete anual.<br/>Comisión por reserva<br/>+ fee por analytics"]
    J7["🔄 EXPANSIÓN<br/>RRHH muestra datos al directorio.<br/>Presupuesto de bienestar crece"]

    J1 --> J2 --> J3 --> J4 --> J5 --> J6 --> J7

    style J1 fill:#fdd,stroke:#c33
    style J3 fill:#ddf,stroke:#33c
    style J5 fill:#dfd,stroke:#3c3
    style J6 fill:#ffd,stroke:#cc3
```

---

## Preguntas a validar

1. ¿Hay empresas que ya incluyen wellness travel en sus paquetes de beneficios?
2. ¿Los proveedores de wellness (spas, retiros, hoteles boutique) tienen datos sobre outcomes?
3. ¿El segmento B2C de wellness travel es suficientemente grande para ser negocio sin el corporativo?

---

## Próximos pasos

- [ ] Edgar: mapear qué proveedores de wellness travel existen en LATAM y qué datos manejan
- [ ] Buscar si hay estudios sobre ROI de wellness travel en contexto corporativo
- [ ] Evaluar si el ángulo B2B2C (empresa → empleado → proveedor de wellness) es viable
