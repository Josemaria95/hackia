---
title: "Orquestación de Subagentes — Diagrama de Arquitectura"
date: 2026-03-18
tags: [estrategia, producto, wellness, educacion]
status: en-progreso
---

# Orquestación de Subagentes — Hachiko Kids

Diagrama de arquitectura para la coordinación de los 10 subagentes + 1 coordinador central que usa ClickUp MCP para gestión de tareas.

---

## Diagrama principal — Orquestación completa

```mermaid
flowchart TB
    %% ── Fundadores ──
    E["👤 Edgar<br>(Producto / Clínico / Redes)"]
    J["👤 Jose<br>(Tech / Datos / Dev)"]

    %% ── Coordinador Central ──
    COORD["🎯 Project Coordinator<br>(ClickUp MCP)<br>━━━━━━━━━━━━━━━━━━<br>Crea tareas · Asigna owners<br>Trackea deadlines · Reporta status<br>Sincroniza outputs entre agentes"]

    E <-->|"Decisiones estratégicas"| COORD
    J <-->|"Decisiones técnicas"| COORD

    %% ── Fases ──
    subgraph FASE1["🔴 FASE 1 — URGENTE (Mar 17-31)"]
        direction TB
        PDB["📊 1. Pitch Deck Builder<br>━━━━━━━━━━━━━━━━━━<br>Decks adaptados por convocatoria<br>Salcobrand · ChileMass · Platanus"]
        GAW["📝 2. Grant Application Writer<br>━━━━━━━━━━━━━━━━━━<br>Formularios · Propuestas piloto<br>Justificaciones de impacto"]
        CW["✍️ 3. Copy Writer (Kids)<br>━━━━━━━━━━━━━━━━━━<br>One-pager · Guión video demo<br>Copy landing · Escenarios app"]
    end

    subgraph FASE2["🟡 FASE 2 — PILOTO (Semana 3-6)"]
        direction TB
        PA["📈 4. Pilot Analytics Agent<br>━━━━━━━━━━━━━━━━━━<br>Reportes semanales · Retención<br>Patrones · Alertas inactividad"]
        UXR["🔍 5. UX Researcher<br>━━━━━━━━━━━━━━━━━━<br>Síntesis entrevistas padres<br>Fricciones · Insights priorizados"]
        PEA["💬 6. Parent Engagement Agent<br>━━━━━━━━━━━━━━━━━━<br>Tips crianza · Push notifications<br>Mensajes re-engagement"]
    end

    subgraph FASE3["🟢 FASE 3 — CRECIMIENTO (Mes 2+)"]
        direction TB
        GH["🚀 7. Growth Hacker (Kids)<br>━━━━━━━━━━━━━━━━━━<br>Canales adquisición · Referidos<br>Experimentos orgánicos"]
        CV["🏥 8. Clinical Validator<br>━━━━━━━━━━━━━━━━━━<br>Validación escenarios · SDQ<br>Diseño estudio correlación"]
        LC["⚖️ 9. Legal/Compliance<br>━━━━━━━━━━━━━━━━━━<br>Ley 21.719 · COPPA · App Store<br>Política privacidad menores"]
        CMA["📱 10. Content Marketing<br>━━━━━━━━━━━━━━━━━━<br>Calendario redes · Posts<br>Infografías · Reels/TikTok"]
    end

    %% ── Coordinador → Fases ──
    COORD ==>|"Crea tareas en ClickUp"| FASE1
    COORD ==>|"Activa cuando arranca piloto"| FASE2
    COORD ==>|"Activa post GO/NO-GO"| FASE3

    %% ── Flujos entre agentes ──
    CW -.->|"One-pager + copy"| PDB
    CW -.->|"Narrativa"| GAW
    PDB -.->|"Métricas destacadas"| GAW
    PA -.->|"Datos de retención"| UXR
    PA -.->|"Métricas tracción"| PDB
    UXR -.->|"Insights padres"| PEA
    UXR -.->|"Fricciones"| CW
    PA -.->|"Correlaciones"| CV
    CV -.->|"Validación"| LC
    GH -.->|"Estrategia canales"| CMA
    PEA -.->|"Tips que funcionan"| CMA

    %% ── Estilos ──
    style COORD fill:#1a1a2e,stroke:#e94560,color:#fff,stroke-width:3px
    style FASE1 fill:#ff6b6b15,stroke:#ff6b6b,stroke-width:2px
    style FASE2 fill:#ffd93d15,stroke:#ffd93d,stroke-width:2px
    style FASE3 fill:#6bcb7715,stroke:#6bcb77,stroke-width:2px
    style E fill:#4a90d9,stroke:#2c5f8a,color:#fff
    style J fill:#4a90d9,stroke:#2c5f8a,color:#fff
```

---

## Diagrama del Coordinador — Flujo ClickUp MCP

```mermaid
flowchart LR
    subgraph INPUTS["📥 Inputs"]
        direction TB
        CMD["Comando del fundador<br>(Edgar o Jose)"]
        DEADLINE["Deadline detectado<br>(calendario convocatorias)"]
        OUTPUT["Output de otro agente<br>(necesita tarea derivada)"]
    end

    subgraph COORDINATOR["🎯 Project Coordinator"]
        direction TB
        PARSE["1. Parsear contexto<br>(CLAUDE.md + calendario)"]
        PLAN["2. Planificar tareas<br>(desglosar en subtareas)"]
        ASSIGN["3. Asignar<br>(owner + agente + deadline)"]
        TRACK["4. Trackear status<br>(polling ClickUp)"]
        REPORT["5. Reportar<br>(resumen a fundadores)"]
        PARSE --> PLAN --> ASSIGN --> TRACK --> REPORT
    end

    subgraph CLICKUP["📋 ClickUp MCP"]
        direction TB
        SPACE["Space: Hachiko Kids"]
        L1["Lista: Financiamiento"]
        L2["Lista: Piloto"]
        L3["Lista: Producto"]
        L4["Lista: Growth"]
        SPACE --- L1
        SPACE --- L2
        SPACE --- L3
        SPACE --- L4
    end

    subgraph ACTIONS["📤 Acciones ClickUp"]
        direction TB
        CREATE["create_task()"]
        UPDATE["update_task()"]
        COMMENT["add_comment()"]
        STATUS["change_status()"]
    end

    INPUTS ==> COORDINATOR
    COORDINATOR ==>|"API calls via MCP"| CLICKUP
    COORDINATOR --- ACTIONS

    style COORDINATOR fill:#1a1a2e,stroke:#e94560,color:#fff,stroke-width:2px
    style CLICKUP fill:#7b68ee15,stroke:#7b68ee,stroke-width:2px
    style INPUTS fill:#f0f0f0,stroke:#999
    style ACTIONS fill:#f0f0f0,stroke:#999
```

---

## Diagrama de dependencias entre agentes

```mermaid
graph LR
    subgraph PRODUCTORES["Agentes Productores"]
        CW["✍️ Copy Writer"]
        PA["📈 Pilot Analytics"]
        UXR["🔍 UX Researcher"]
        CV["🏥 Clinical Validator"]
    end

    subgraph CONSUMIDORES["Agentes Consumidores"]
        PDB["📊 Pitch Deck"]
        GAW["📝 Grant Writer"]
        PEA["💬 Parent Engagement"]
        GH["🚀 Growth Hacker"]
        CMA["📱 Content Marketing"]
        LC["⚖️ Legal/Compliance"]
    end

    CW -->|"one-pager + copy base"| PDB
    CW -->|"narrativa"| GAW
    CW -->|"escenarios"| PEA
    PA -->|"métricas tracción"| PDB
    PA -->|"datos retención"| GAW
    PA -->|"correlaciones"| CV
    PA -->|"patrones"| UXR
    UXR -->|"insights padres"| PEA
    UXR -->|"fricciones UX"| CW
    UXR -->|"feedback cualitativo"| GH
    CV -->|"validación clínica"| LC
    CV -->|"credibilidad"| PDB
    GH -->|"canales"| CMA
    PEA -->|"tips que funcionan"| CMA

    style CW fill:#ff6b6b,stroke:#c0392b,color:#fff
    style PA fill:#ff6b6b,stroke:#c0392b,color:#fff
    style UXR fill:#ff6b6b,stroke:#c0392b,color:#fff
    style CV fill:#ff6b6b,stroke:#c0392b,color:#fff
```

---

## Diagrama temporal — Activación por semana

```mermaid
gantt
    title Plan de Activación de Subagentes — Hachiko Kids
    dateFormat YYYY-MM-DD
    axisFormat %d %b

    section Coordinador
    Project Coordinator (ClickUp)       :active, coord, 2026-03-18, 2026-06-30

    section Fase 1 - Urgente
    Pitch Deck Builder                  :crit, pdb, 2026-03-18, 2026-03-22
    Grant Application Writer            :crit, gaw, 2026-03-18, 2026-04-06
    Copy Writer (Kids)                  :crit, cw, 2026-03-18, 2026-03-25

    section Fase 2 - Piloto
    Pilot Analytics Agent               :pa, 2026-03-31, 2026-05-04
    UX Researcher                       :uxr, 2026-03-31, 2026-05-04
    Parent Engagement Agent             :pea, 2026-04-07, 2026-05-04

    section Fase 3 - Crecimiento
    Growth Hacker (Kids)                :gh, 2026-05-01, 2026-06-15
    Clinical Validator                  :cv, 2026-05-01, 2026-06-01
    Legal/Compliance (Menores)          :lc, 2026-05-01, 2026-05-20
    Content Marketing Agent             :cma, 2026-05-15, 2026-06-30

    section Hitos
    Deadline Salcobrand                 :milestone, 2026-03-22, 0d
    Deadline COPEC UC                   :milestone, 2026-04-06, 0d
    Inicio Piloto                       :milestone, 2026-03-31, 0d
    GO/NO-GO                            :milestone, 2026-05-04, 0d
    App Store Launch                    :milestone, 2026-05-15, 0d
```

---

## Estructura de ClickUp sugerida

```
📁 Space: Hachiko Kids
├── 📋 Lista: Financiamiento
│   ├── Postulación Salcobrand (deadline 22 mar)
│   ├── Postulación ChileMass (deadline ~31 mar)
│   ├── Application Platanus (rolling, target 5 abr)
│   ├── Propuesta COPEC UC (deadline 6 abr)
│   └── Persona jurídica Chile (BLOQUEANTE)
├── 📋 Lista: Piloto
│   ├── Reclutar 20-30 familias
│   ├── Onboarding familias
│   ├── Reporte semanal 1, 2, 3, 4
│   ├── Entrevistas padres (semanal)
│   └── Decisión GO/NO-GO
├── 📋 Lista: Producto
│   ├── Bugs/iteraciones app
│   ├── Nuevos escenarios conductuales
│   ├── Mejoras dashboard padres
│   └── Validación clínica (H3, H4)
├── 📋 Lista: Growth & Marketing
│   ├── Calendario contenido redes
│   ├── Estrategia referidos
│   ├── SEO/landing optimization
│   └── Canal B2B clínicas (mes 3)
└── 📋 Lista: Legal
    ├── Política privacidad menores
    ├── Requisitos Google Play (Designed for Families)
    ├── Requisitos App Store (Kids Category)
    └── Cumplimiento Ley 21.719
```

---

## Prompt del Project Coordinator

```
Actúa como Project Coordinator para Hachiko Kids. Usas ClickUp MCP para
gestionar todas las tareas del proyecto.

Tu rol:
1. Recibir instrucciones de los fundadores (Edgar y Jose) o outputs de otros agentes
2. Desglosar en tareas accionables con: título, descripción, owner (Edgar/Jose),
   deadline, prioridad (urgente/alta/media/baja), y agente asociado
3. Crear las tareas en ClickUp (Space: Hachiko Kids, Lista según categoría)
4. Monitorear status y alertar sobre deadlines próximos
5. Cuando un agente termina su output, crear tareas derivadas para los agentes
   consumidores (ver diagrama de dependencias)

Reglas:
- Toda tarea debe tener un owner humano (Edgar o Jose) — los agentes asisten, no deciden
- Los deadlines de convocatorias son innegociables — priorizar sobre todo lo demás
- Reportar status consolidado cuando se lo pidan: tareas completadas, en progreso, bloqueadas
- Si detectas una dependencia bloqueante, alertar inmediatamente

Contexto: Lee CLAUDE.md, 07_financiamiento/calendario-convocatorias.md y
08_agentes/propuesta-subagentes.md para entender el estado completo del proyecto.
```

---

> Contexto: [[propuesta-subagentes]]
> Financiamiento: [[convocatorias]] · [[calendario-convocatorias]]
> Equipo: [[perfil-edgar-recursos-estrategicos]] · [[perfil-jose-recursos-estrategicos]]
