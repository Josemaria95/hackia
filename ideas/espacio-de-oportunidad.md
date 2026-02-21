---
title: "Espacio de oportunidad: datos para decisiones de viaje y bienestar"
aliases: [espacio-de-oportunidad, travel-corporativo, oportunidad-hackia]
date: 2026-02-19
tags: [estrategia, travel, corporativo, wellness, mercado]
status: explorando
miro: ""
---

# Espacio de oportunidad: datos para decisiones de viaje y bienestar

## El equipo

| | Edgar | Jose |
|---|-------|------|
| **Rol actual** | Fundador de kntor.travel (agencia B2B/B2C) | Data Engineer en Baufest (consultora enterprise LATAM/EE.UU.) |
| **Experiencia clave** | 7+ años en Newstilo Travel: GDS, consolidador B2B, OBTs. Último año coordinó PIE en CEAPSI (licitación pública de especialistas para colegios, sistema Mineduc) | BI y analytics en retail, educación, logística, minería. SAP como fuente, Databricks/Azure/Spark en producción |
| **Acceso a mercado** | Agencias, aerolíneas, proveedores tech de travel (SABRE, AMADEUS, Witwan), clientes corporativos de kntor.travel | Clientes enterprise de Baufest, red de data engineers en Chile y Perú, egresados UTEC |
| **Qué sabe hacer que es raro** | Sabe exactamente qué datos emite un PNR, cómo se negocia un bloqueo aéreo, y cómo opera una agencia por dentro. También sabe cómo funciona la gestión de recursos públicos en educación chilena (PIE/Mineduc) | Sabe por qué el 80% de los dashboards corporativos terminan sin ser usados. Sabe cómo se aprueba un proyecto de datos en una empresa grande y cuál es el lenguaje que convence a IT vs. finanzas vs. negocio |
| **Motivación** | Educación adaptada a cada persona — no como filosofía sino como filtro: le interesan más las ideas donde el producto se adapta al usuario | Producto que resuelva un problema real — no como filosofía sino como filtro: rechaza construir herramientas que nadie va a usar |

La ventaja competitiva real: Edgar puede conseguir datos del lado del proveedor de travel que un equipo puramente tech no puede obtener. Jose puede convertir esos datos en un producto que una empresa compraría. Ambos saben que la solución debe ser B2B para ser negocio a nivel startup.

→ Perfiles detallados: [[perfil-edgar-recursos-estrategicos]] · [[perfil-jose-recursos-estrategicos]]

---

## El mercado

- Viajes corporativos LATAM: **$50.6B USD en 2024**, proyección $63.9B en 2025 (GBTA)
- Wellness tourism LATAM: **$40.8B en 2024**, CAGR 12.1% (Grand View Research)
- Software de Travel & Expense Management global: $3.6B–$10B, CAGR 9–13%
- HR Analytics global: $3.7B, CAGR 12–15%
- Chile: viajes corporativos crecieron 19% en 2024, representan 50% del volumen total

## El gap

Las herramientas existentes (SAP Concur, Navan, Egencia) son caras, pensadas para enterprise grande, y miden gasto — no experiencia ni bienestar. Las agencias tradicionales (el canal del 80% de empresas medianas en Chile) hacen bien el producto pero no hablan datos ni demuestran ROI.

No existe en Chile ni en la región andina una solución que combine producto de viaje + capa de datos + insights accionables para RRHH o administración.

**Competidor a vigilar:** Onfly (Brasil) — $40M Series B en 2025, 2.000+ clientes, expandiéndose a México. Sin presencia en Chile. Ventana estimada: **18–24 meses**.

---

## Por qué B2B

- **Ticket**: empresa mediana con 50 viajeros a $25 USD/viajero/mes = $1.250/mes recurrente. Un viajero individual paga $10/año si es que paga.
- **Ciclo de ventas**: empresa de 100–500 empleados no tiene proceso de aprobación de 6 meses. Se puede cerrar en semanas.
- **Defensibilidad**: los datos de viaje de una empresa son activo estratégico — el churn es bajo cuando el producto funciona.
- **Acceso**: Edgar tiene clientes corporativos actuales. Jose tiene acceso a clientes enterprise de Baufest. El primer piloto no requiere salir a buscar de cero.

---

## Hipótesis activas

### ⚡ Prioridad 0: Ruta Viva — Bienestar emocional + exploración cultural (B2B2C)
**Score: 8.0/10** | Urgencia: alta (white space legítimo, sin competidor directo)

La idea más fuerte del repo. Plataforma B2B2C de bienestar emocional que usa la exploración cultural gamificada **en tu propia ciudad** para reducir soledad, ansiedad social y rigidez mental. Las organizaciones compran licencias por empleado/estudiante y reciben dashboards de impacto en bienestar.

- Soledad declarada prioridad global por la OMS (2023). Chile firmó la declaración conjunta (2024).
- White space legítimo: nadie combina salud mental + cultura + gamificación + comunidad + B2B2C.
- Santiago tiene 1.6M inmigrantes (8.8% de población) — contenido cultural abundante.
- **Absorbe las ideas de restaurantes y hospedaje como features**: restaurante étnico = desafío nivel 2, hospedaje con compatriotas = desafío nivel 5.

**Fit real del equipo:**
- Edgar: experiencia en CEAPSI (salud mental), conoce licitaciones públicas chilenas, red de contactos en travel para reclutar "guías locales"
- Jose: pipeline de datos para métricas de bienestar, dashboards B2B (Power BI/Databricks), sabe cómo las empresas aprueban compras de software
- **Gap honesto**: ninguno es psicólogo (necesitan asesor clínico). Sin experiencia en gamificación ni en productos consumer.

→ [[2026-02-20-ruta-viva-salud-mental-cultural-b2b2c]] · [[2026-02-20-comunidad-salud-mental-viajes-gamificacion|Brainstorming de variantes]]
→ [[ruta-viva-salud-mental-cultural-research]]

---

### ⚡ Prioridad 0: Datos de salud mental para modelos de riesgo (B2B)
**Score: por evaluar** | Urgencia: alta (ventana regulatoria Chile + mercado data de salud)

Plataforma B2B que recolecta datos de salud mental de empleados de forma ética y continua — cruzando cuestionarios validados (PHQ-9, GAD-7, WHO-5, SUSESO/ISTAS-21), datos proxy del HRIS y señales de engagement — para construir modelos de riesgo que predicen burnout, depresión y rotación ANTES de que ocurran.

- El core business es el **dato predictivo**, no la intervención. Las aseguradoras, mutuales y empleadores pagan por saber quién va a tener un claim mañana.
- Swiss Re + Wysa ya validaron el modelo (partnership activa con aseguradoras en 3 continentes).
- Chile tiene una puerta de entrada única: SUSESO/ISTAS-21 es obligatorio → todas las empresas ya miden riesgos psicosociales → esta plataforma es la intervención + el monitoreo continuo que falta.
- Ley 21.719 (dic 2026) endurece regulación de datos de salud → diseñar para cumplimiento desde día 1 es ventaja competitiva vs. incumbentes laxos.

**Fit real del equipo:**
- Jose: rol central — pipeline ETL multi-fuente, modelos predictivos (Databricks/Spark), dashboard B2B, conoce ciclo de compra enterprise
- Edgar: experiencia CEAPSI (salud mental), licitaciones públicas, red para validar con profesionales de salud
- **Gap honesto**: ninguno tiene experiencia en modelos actuariales ni red en aseguradoras/mutuales

→ [[2026-02-20-datos-salud-mental-modelos-riesgo]] · [[datos-salud-mental-empleados-research]] · [[datos-salud-mental-clientes-research]]

---

### 🟠 Prioridad 0.5: Ideas satélite — features de Ruta Viva o standalone

Estas dos ideas nacieron en la sesión del 20-Feb. Tienen valor propio pero son más fuertes como features dentro de Ruta Viva.

**Hospedaje entre compatriotas** (6.8/10)
Marketplace que conecta viajeros con compatriotas residentes en el país destino. Match por nacionalidad. Dolor más tangible que restaurantes (seguridad, idioma, aislamiento). Riesgo: cold-start de marketplace y regulaciones de short-term rental.

→ [[2026-02-20-hospedaje-guia-compatriotas]] · [[hospedaje-compatriotas-research]]

**Restaurantes según nacionalidad** (6.2/10)
Motor de recomendación que personaliza sugerencias gastronómicas según la cultura de origen del viajero. Mercado enorme pero defensibilidad baja (Google podría hacerlo mañana).

→ [[2026-02-20-recomendacion-restaurantes-nacionalidad]] · [[restaurantes-nacionalidad-research]]

---

### 🔴 Prioridad 1: Bienestar + gestión de viajes corporativos
**Score mercado: 8/10** | Urgencia: alta (reloj Onfly)

Wellness corporativo y gestión de viajes de negocios son dos caras del mismo producto: **una capa de datos entre la empresa y la experiencia de viaje del empleado.** La empresa quiere controlar gasto y la empresa quiere reducir burnout — el buyer en ambos casos es administración/RRHH.

- El 89% de empleados chilenos declara burnout. El costo en ausentismo: $300M USD/año solo en Chile.
- Las herramientas actuales miden gasto, no bienestar. Nadie conecta los dos mundos.
- El MVP puede ser una cosa: encuesta post-viaje + dashboard que muestra fatiga acumulada y gasto por área. Se puede construir en semanas.

**Fit real del equipo:**
- Edgar: identifica proveedores, consigue datos del GDS/agencia, arma el producto de viaje
- Jose: construye pipeline, modela datos, prototipa en Power BI
- **Gap honesto**: ninguno tiene acceso directo a directores de RRHH. El acceso es indirecto — a través de los clientes corporativos de Edgar (Travel Managers) y los clientes enterprise de Jose (IT/BI). El primer buyer probablemente es Gerente de Administración o Travel Manager, no RRHH

→ [[2026-02-19-viajes-corporativos-datos]] · [[2026-02-19-travel-wellness]]
→ [[viajes-corporativos-datos-research]] · [[travel-wellness-research]]

---

### 🟡 Prioridad 2: Travel × Educación (dos variantes)

**Variante A — Transparencia en programas de intercambio**
Score mercado: 6/10 | SOM Chile: pequeño como destino final

Los programas de intercambio son caros y opacos en resultados. No existe en español una plataforma de comparación neutra con datos verificados de outcomes. El ángulo B2B: empresas que financian formación en el exterior como beneficio para empleados.

Mercado fragmentado, incumbentes con conflictos de interés, SOM limitado. Viable como segunda línea si la hipótesis 1 genera tracción.

**Variante B — Digitalización de la gestión del PIE**
Score mercado: sin evaluar | Fit de Edgar: máximo

Edgar coordinó manualmente el proceso de licitación del Programa de Integración Escolar: matching especialista-colegio, cumplimiento de plazos del Mineduc, control de calidad de informes. Eso es un proceso operativo complejo que se puede sistematizar. El buyer sería el sostenedor o el centro ejecutor (como CEAPSI), y a escala el Mineduc.

Esto no es travel — es un vertical completamente diferente. Merece evaluación de mercado aparte antes de comprometer recursos.

→ [[2026-02-19-travel-educacion]] · [[travel-educacion-research]]

---

### 🟢 Prioridad 3: Travel × Nomadismo
**Score mercado: 7/10** | Fit del equipo: bajo

Gap real: Teleport discontinuado en 2022, Nomad List con datos desactualizados, cero player LATAM-nativo. El ángulo B2B (empresas con equipos remotos internacionales) es más rentable que B2C.

Ninguno de los dos fundadores tiene red ni acceso diferencial en este segmento. Oportunidad de mercado sin ventaja de distribución. Se mantiene en el radar.

→ [[2026-02-19-nomadas-digitales]] · [[nomadas-digitales-research]]

---

## Próximos pasos

- [ ] Elegir UNA hipótesis principal en sesión en Miro y definir el MVP mínimo
- [ ] Edgar: entrevistar 2-3 clientes corporativos de kntor.travel — "¿cómo gestionas los viajes de tu equipo y qué te frustra?"
- [ ] Jose: mapear pain points internos en Baufest sobre gestión de viajes de proyecto
- [ ] Edgar: identificar 3 proveedores de wellness travel en Chile y preguntar si venden a empresas
- [ ] Evaluar en sesión separada si digitalizar la gestión del PIE tiene mercado suficiente
