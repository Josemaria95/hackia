---
title: "Travel × Nomadismo: infraestructura de datos para nómadas digitales"
aliases: [nomadas-digitales, travel-nomadas]
date: 2026-02-19
tags: [hipotesis, travel, nomadas]
status: idea
miro: ""
---

# Travel × Nomadismo: infraestructura de datos para nómadas digitales

> Hipótesis central: **El mercado de nómadas digitales y reubicación temporal no tiene infraestructura de datos consolidada.**

Contexto macro: [[espacio-de-oportunidad]] | Research de mercado: [[nomadas-digitales-research]]

---

## El problema

El nómada digital tiene que tomar decisiones complejas con información dispersa:
- Costo de vida real (no el promedio de Numbeo, sino el real para su perfil)
- Conectividad confiable (velocidad, cortes, opciones de backup)
- Comunidad y red social (¿hay otros nómadas? ¿coworkings? ¿eventos?)
- Implicaciones legales/fiscales de trabajar desde ese destino

Las empresas que permiten trabajo remoto tampoco tienen herramientas para gestionar equipos distribuidos en movimiento.

---

## Ideas semilla

- **Comparador de destinos para nómadas con datos reales** — no solo costo de vida promedio, sino desglosado por perfil (developer, diseñador, etc.) + conectividad verificada + comunidad activa
- **Plataforma para empresas que permiten trabajo remoto desde cualquier destino** — gestión de equipos remotos internacionales: cumplimiento fiscal, seguro médico internacional, coordinación de zonas horarias

---

## Flujo de valor

```mermaid
graph TD
    subgraph HOY["Hoy: decisiones con información dispersa"]
        A1["Nómada busca destino"] --> X1["Numbeo: promedios genéricos<br/>Nomad List: datos desactualizados<br/>Reddit: anécdotas"]
        A2["Empresa permite<br/>work from anywhere"] --> X2["No tiene herramienta<br/>para gestionar compliance<br/>fiscal, seguro, zonas horarias"]
        X1 --> X3["Decisión basada<br/>en intuición y suerte"]
        X2 --> X4["Riesgo legal<br/>sin visibilidad"]
    end

    subgraph PRODUCTO["Producto: datos reales + gestión B2B"]
        B1["Datos verificados por destino:<br/>costo real por perfil,<br/>internet medido,<br/>comunidad activa"] --> B2["Comparador inteligente"]
        B3["Capa B2B:<br/>compliance fiscal por país,<br/>seguro médico,<br/>zonas horarias del equipo"] --> B4["Dashboard empresa"]
        B2 --> B5["Recomendación:<br/>este destino para<br/>tu perfil y presupuesto"]
        B4 --> B6["Vista empresa:<br/>dónde está cada empleado,<br/>qué riesgos hay,<br/>qué cuesta"]
    end

    subgraph VALOR["Valor entregado"]
        B5 --> C1["Nómada elige mejor<br/>y no pierde 2 semanas<br/>en destino equivocado"]
        B6 --> C2["HR gestiona equipos<br/>remotos sin riesgo legal"]
        B6 --> C3["Empresa ofrece<br/>work-from-anywhere<br/>como beneficio real"]
    end

    X3 -.->|"hackia reemplaza"| B2
    X4 -.->|"hackia reemplaza"| B4

    style HOY fill:#fee,stroke:#c33
    style PRODUCTO fill:#eff,stroke:#39c
    style VALOR fill:#efe,stroke:#3c3
```

## Customer journey: Head of People — startup de 80 personas, equipos distribuidos

```mermaid
graph TD
    J1["😤 DOLOR<br/>3 empleados quieren trabajar<br/>desde Colombia y no sé<br/>qué implicaciones fiscales tiene"]
    J2["🔍 BUSCA<br/>Pregunta al abogado laboral.<br/>Respuesta: depende.<br/>Asesoría: $2K por país"]
    J3["💡 ENCUENTRA HACKIA<br/>Compliance por país +<br/>costos + riesgos"]
    J4["🧪 PRUEBA<br/>Consulta Colombia, México<br/>y Portugal. Ve requisitos,<br/>seguro y zona horaria"]
    J5["📋 DECIDE<br/>Aprueba Colombia y México.<br/>Portugal tiene riesgo<br/>fiscal que no vale"]
    J6["💰 CONTRATA<br/>$50/empleado remoto/mes<br/>monitoreo de compliance"]
    J7["🔄 RETENCIÓN<br/>Lo usa como beneficio<br/>en job postings"]

    J1 --> J2 --> J3 --> J4 --> J5 --> J6 --> J7

    style J1 fill:#fdd,stroke:#c33
    style J3 fill:#ddf,stroke:#33c
    style J5 fill:#dfd,stroke:#3c3
    style J6 fill:#ffd,stroke:#cc3
```

---

## Preguntas a validar

1. ¿Cuántas empresas medianas en LATAM ya tienen política de "work from anywhere"?
2. ¿Qué herramientas usan hoy y qué les falta?
3. ¿El nómada digital paga por datos o espera que sea gratuito (modelo ads)?

---

## Diferenciación potencial

El mercado de información para nómadas existe (Nomad List, Teleport) pero:
- Los datos son desactualizados o no verificados
- No hay capa B2B para empresas con equipos remotos
- No hay integración con el proveedor de travel (ese es el ángulo de Edgar)

---

## Próximos pasos

- [ ] Investigar tamaño real del segmento nómada digital en LATAM
- [ ] Revisar qué hace Nomad List y dónde deja valor en la mesa
- [ ] Explorar si el ángulo B2B (empresas con equipos remotos) es más viable que B2C

---

> Deep research detallado en [[nomadas-digitales-research]]

→ Contexto: [[espacio-de-oportunidad]] (Prioridad 3)
→ Equipo: [[perfil-edgar-recursos-estrategicos]] · [[perfil-jose-recursos-estrategicos]]
