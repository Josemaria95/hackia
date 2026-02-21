---
title: "Travel × Educación: transparencia en programas de intercambio"
aliases: [travel-educacion, intercambio-datos]
date: 2026-02-19
tags: [hipotesis, travel, educacion]
status: idea
miro: ""
---

# Travel × Educación: transparencia en programas de intercambio

> Hipótesis central: **Los programas de intercambio y travel educativo son caros y opacos en resultados — nadie mide qué tan buena inversión es realmente.**

Contexto macro: [[espacio-de-oportunidad]] | Research de mercado: [[travel-educacion-research]]

---

## El problema

El mercado de travel educativo (intercambios, cursos en el extranjero, gap years) enfrenta:
- Precios altos con poca transparencia sobre qué incluye realmente
- Sin métricas de outcome: ¿valió la pena el intercambio? ¿mejoró el inglés? ¿consiguió trabajo al volver?
- Información fragmentada y dependiente de reviews subjetivos
- Las instituciones tienen incentivos para no medir resultados negativos

---

## Ideas semilla

- **Plataforma de transparencia para programas de intercambio** — reviews verificados por ex-alumnos con métricas de outcome (nivel de idioma pre/post, satisfacción, impacto laboral)
- **Comparador de programas educativos en el extranjero con datos reales** — precio real vs. valor percibido, ranking por objetivo (idioma, networking, experiencia cultural)
- **HR + educación**: las empresas que pagan intercambios o cursos para empleados necesitan medir el retorno de esa inversión

---

## Conexión con otros temas

- El ángulo corporativo es relevante: algunas empresas incluyen programas educativos en el extranjero como beneficio → conecta con [[2026-02-19-viajes-corporativos-datos]]
- El perfil de nómada digital frecuentemente combina trabajo y formación continua → conecta con [[2026-02-19-nomadas-digitales]]

---

## Flujo de valor — Variante A: Transparencia en intercambios

```mermaid
graph TD
    subgraph HOY["Hoy: decisión opaca y cara"]
        A1["Familia o empresa<br/>quiere intercambio"] --> X1["Busca en Google:<br/>EF, AFS, agencias locales"]
        X1 --> X2["Información de la agencia:<br/>sesgada (ellos venden)"]
        X1 --> X3["Reviews en redes:<br/>anecdóticos, no verificados"]
        X2 --> X4["Decide con poca<br/>información real.<br/>Invierte $5K-$30K USD"]
        X3 --> X4
        X4 --> X5["No sabe si valió la pena<br/>hasta meses después"]
    end

    subgraph PRODUCTO["Producto: datos verificados de outcomes"]
        B1["Reviews verificados<br/>de ex-alumnos con<br/>métricas estandarizadas"] --> B2["Comparador neutro"]
        B3["Datos de outcome:<br/>nivel idioma pre/post,<br/>satisfacción, impacto laboral"] --> B2
        B2 --> B4["Ranking por objetivo:<br/>idioma, networking,<br/>experiencia cultural,<br/>desarrollo profesional"]
        B4 --> B5["Match: este programa<br/>para este perfil<br/>y presupuesto"]
    end

    subgraph VALOR["Valor entregado"]
        B5 --> C1["Familia invierte mejor:<br/>elige programa con<br/>datos reales, no marketing"]
        B4 --> C2["Empresa que financia<br/>formación mide ROI<br/>de la inversión"]
        B2 --> C3["Agencia buena<br/>se diferencia con<br/>transparencia"]
    end

    X4 -.->|"hackia reemplaza"| B2

    style HOY fill:#fee,stroke:#c33
    style PRODUCTO fill:#eff,stroke:#39c
    style VALOR fill:#efe,stroke:#3c3
```

## Flujo de valor — Variante B: Digitalización del PIE

```mermaid
graph TD
    subgraph HOY["Hoy: gestión manual del PIE"]
        A1["Mineduc asigna recursos<br/>a colegios para NEE"] --> X1["Sostenedor recibe fondos"]
        X1 --> X2["Centro ejecutor<br/>(ej. CEAPSI) debe:<br/>- Encontrar especialistas<br/>- Asignarlos a colegios<br/>- Cumplir plazos Mineduc<br/>- Reportar informes"]
        X2 --> X3["Todo en Excel/papel.<br/>Si se pasa el plazo<br/>se pierden los recursos"]
    end

    subgraph PRODUCTO["Producto: sistema de gestión PIE"]
        B1["Registro de colegios,<br/>especialistas y<br/>necesidades por alumno"] --> B2["Motor de matching:<br/>especialista correcto<br/>→ colegio correcto<br/>→ horario disponible"]
        B2 --> B3["Seguimiento de plazos<br/>con alertas automáticas"]
        B3 --> B4["Generación de informes<br/>para rendición Mineduc"]
        B4 --> B5["Dashboard del sostenedor:<br/>estado de cada colegio,<br/>especialista y alumno"]
    end

    subgraph VALOR["Valor entregado"]
        B2 --> C1["Niños con NEE reciben<br/>atención a tiempo"]
        B3 --> C2["Centro no pierde recursos<br/>por incumplimiento de plazos"]
        B4 --> C3["Sostenedor tiene visibilidad<br/>sin depender de Excel"]
        B5 --> C4["Mineduc puede auditar<br/>con datos reales"]
    end

    X3 -.->|"hackia reemplaza"| B1

    style HOY fill:#fee,stroke:#c33
    style PRODUCTO fill:#eff,stroke:#39c
    style VALOR fill:#efe,stroke:#3c3
```

## Customer journey — Variante A: Gerente de L&D en empresa mediana

```mermaid
graph TD
    J1["😤 DOLOR<br/>Mandamos 5 ingenieros a<br/>curso de inglés en Canadá.<br/>$25K USD. No sé si mejoró"]
    J2["🔍 BUSCA<br/>Pide datos a EF. Mandan PDF<br/>con satisfacción 4.5/5<br/>autorreportada"]
    J3["💡 ENCUENTRA HACKIA<br/>Métricas verificadas:<br/>nivel idioma pre/post,<br/>impacto laboral a 6 meses"]
    J4["📊 COMPARA<br/>3 programas con datos reales.<br/>Uno cuesta menos y tiene<br/>mejor outcome profesional"]
    J5["✅ DECIDE<br/>Elige programa con<br/>mejor relación outcome/precio"]
    J6["📈 POST-VIAJE<br/>Mide mejora real.<br/>Reporta ROI a CFO.<br/>Presupuesto de L&D se mantiene"]

    J1 --> J2 --> J3 --> J4 --> J5 --> J6

    style J1 fill:#fdd,stroke:#c33
    style J3 fill:#ddf,stroke:#33c
    style J5 fill:#dfd,stroke:#3c3
    style J6 fill:#ffd,stroke:#cc3
```

## Customer journey — Variante B: Director de centro ejecutor PIE

```mermaid
graph TD
    J1["😤 DOLOR<br/>Coordino 15 colegios,<br/>40 especialistas, 200 alumnos NEE.<br/>Todo en planillas. Perdí recursos<br/>por atraso en informes"]
    J2["🔍 BUSCA<br/>No existe software para esto.<br/>Cotización de desarrollo<br/>a medida: $15K USD"]
    J3["💡 ENCUENTRA HACKIA<br/>Sistema listo para gestión PIE.<br/>Matching, plazos,<br/>informes automáticos"]
    J4["🧪 PILOTO<br/>3 colegios. Carga especialistas,<br/>asigna evaluaciones,<br/>ve dashboard de avance"]
    J5["✅ RESULTADO<br/>Cero atrasos. Informes en 1 click.<br/>Mineduc aprueba sin observaciones"]
    J6["💰 CONTRATA<br/>Licencia anual por centro.<br/>Otros sostenedores preguntan"]

    J1 --> J2 --> J3 --> J4 --> J5 --> J6

    style J1 fill:#fdd,stroke:#c33
    style J3 fill:#ddf,stroke:#33c
    style J5 fill:#dfd,stroke:#3c3
    style J6 fill:#ffd,stroke:#cc3
```

---

## Preguntas a validar

1. ¿Existe regulación en LATAM sobre transparencia en programas de intercambio?
2. ¿Hay suficiente volumen en LATAM para un negocio de este nicho?
3. ¿El modelo de negocio sería B2C (familias/estudiantes) o B2B (empresas que financian formación)?

---

## Nota de prioridad

Esta hipótesis tiene prioridad **baja** — el mercado es más fragmentado y el ángulo corporativo es menos directo que en [[2026-02-19-viajes-corporativos-datos]]. Vale la pena tenerla capturada pero no es el foco inicial.

---

## Próximos pasos

- [ ] Investigar tamaño del mercado de intercambios educativos en LATAM
- [ ] Identificar jugadores actuales (EF, AFS, programas universitarios propios)
- [ ] Evaluar si el dolor es suficientemente grande para justificar construcción
