---
title: "Hachiko Kids — Plan de Validacion"
date: 2026-03-10
tags: [producto, wellness, educacion]
status: en-progreso
---

# Plan de Validacion — Idear, Simplificar, Prototipar, Validar

## Las 4 hipotesis (ordenadas por riesgo)

| # | Hipotesis | Riesgo si falla | Fase | Como validar |
|---|-----------|-----------------|------|-------------|
| H1 | Ninos (4-12) usan la mascota >4 veces/semana por 30 dias | **FATAL** — sin uso no hay nada | **Fase 1** | App piloto con 20-30 ninos |
| H2 | Padres valoran el resumen de **patrones de comportamiento** + tips | Alto — sin pago no hay negocio | **Fase 1** | Resumen conductual + entrevista |
| H3 | Clinicos consideran los datos de comportamiento utiles entre consultas | Medio — canal B2B de escala | **Fase 2** | Entrevistas post-piloto con datos reales |
| H4 | Los datos conductuales correlacionan con instrumentos clinicos (SDQ) | Bajo — claim clinico futuro | **Fase 3** | Estudio correlacional formal |

> **Cambio clave:** H3 y H4 ya no bloquean el MVP. En Fase 1 validamos con PADRES (B2C), no con clinicos (B2B). Los clinicos entran en Fase 2 cuando ya tenemos datos reales.

---

## Fase 1: Pre-build (Semana 0) — Validar interes sin codigo

### Experimento 1A: Smoke Test con padres (lenguaje conductual)
- **Que:** Post en Instagram/Facebook de mamás en Santiago con concepto + encuesta
- **Donde:** 3-5 grupos de apoderados (WhatsApp), 2-3 cuentas de maternidad
- **Mensaje:** "¿Tu hijo no sigue instrucciones, tiene rabietas o no quiere socializar? Imagina una app donde tu hijo cuida una mascota virtual y tu recibes un resumen semanal de POR QUE se comporta asi — con tips concretos. ¿La usarias?"
- **Exito:** >50% dice "si, la descargaria" (de al menos 50 respuestas)
- **Tiempo:** 2-3 dias
- **Nota:** CERO lenguaje clinico en el post. Solo comportamientos que todo padre reconoce.

### Experimento 1B: Test de concepto con ninos (sin app)
- **Que:** Mostrar a 5-10 ninos una imagen de mascota en tablet. "Esta es Luna. Luna quiere jugar — ¿sola o con amigos? Luna tiene que ordenar — ¿la ayudas?"
- **Observar:** Engagement espontaneo, decision natural, quieren seguir interactuando?
- **Exito:** ≥7 de 10 interactuan >2 minutos y preguntan "puedo hacerlo otra vez?"
- **Tiempo:** 2-3 dias (en casa de conocidos, colegio)

### Experimento 1C: Entrevista rapida con clinicos (Fase 2 — no bloquea build)
- **Que:** 3-5 entrevistas de 20 min con psicologos infantiles / pediatras
- **Pregunta clave:** "Si tuvieras datos de comportamiento diarios de tu paciente entre consultas (socializa, sigue instrucciones, se regula), cambiaria tu practica?"
- **Exito:** ≥3 de 5 dicen "si, absolutamente"
- **Red de Edgar:** CEAPSI, contactos PIE, psicologos de colegios
- **Tiempo:** 1 semana (puede correr en paralelo al build, no lo bloquea)

---

## Fase 2: Prototipo (Semana 1) — Construir lo minimo con IA

### Que construir
Exactamente lo definido en [[mvp-minimo]]:
- App: mascota + situaciones conductuales diarias + emocion (5 caritas) + reaccion + sticker
- Padre: resumen semanal de **patrones de comportamiento** (socializacion, instrucciones, regulacion, animo) + tips accionables
- Infra: Expo Go + Supabase free

### Quien lo construye (acelerado con IA)
- **Jose:** App + backend con Claude Code/Cursor (~4 dias vs 10 sin IA)
- **Edgar:** Assets generados con Midjourney/DALL-E (~3 horas), copy con Claude (~30 min), reclutamiento de familias piloto + entrevistas clinicos en paralelo

### Aceleradores IA en esta fase
| Tarea | Sin IA | Con IA |
|-------|--------|--------|
| Scaffold Expo + Supabase | 1.5 dias | 2 horas |
| Componentes React Native | 3 dias | 4-6 horas |
| 20 assets mascota (4×5 estados) | Dias (diseñador) o Canva manual | 2-3 horas (Midjourney/Flux) |
| 50+ frases de reaccion mascota | 1 dia redactando | 30 min (Claude) |
| Schema DB + API endpoints | 1.5 dias | 1-2 horas |

---

## Fase 3: Piloto (Semanas 3-6) — Validar con datos reales

### Setup del piloto

| Parametro | Valor |
|-----------|-------|
| Duracion | 30 dias |
| Ninos | 20-30 |
| Familias | 15-20 (algunos con 2+ hijos) |
| Fuente | Red personal + 1-2 clinicos que refieran pacientes |
| Edad | 4-12 anos (segmentar resultados por grupo) |
| Costo para familia | $0 |
| Dispositivo | Tablet/celular del padre |

### Protocolo diario
1. Nino abre app (idealmente post-colegio, 15:00-19:00)
2. Situacion conductual del dia: "Luna quiere jugar — ¿sola o con amigos?" (1 toque)
3. Emocion: "¿Como se siente Luna?" — 5 caritas (1 toque)
4. Ve reaccion de mascota
5. Hace micro-actividad (opcional)
6. Gana sticker

### Protocolo semanal (padre)
1. Lunes: push "Resumen semanal de [mascota] disponible"
2. Padre abre y revisa
3. Edgar contacta 3-5 padres para mini-entrevista (5 min WhatsApp)

### Datos a recoger

**Cuantitativos (automaticos):**
| Metrica | Como | Target |
|---------|------|--------|
| Apertura diaria | DB: count checkins/child/day | >4 dias/semana |
| Retencion D7 | Cohorte | >60% |
| Retencion D14 | Cohorte | >45% |
| Retencion D30 | Cohorte | >35% |
| Tiempo de sesion | Timestamp inicio/fin | 60-120 seg |
| Respuestas variadas | Distribucion de decisiones conductuales | No siempre la misma opcion (>3 opciones distintas/semana) |
| Padre abre resumen | DB: count opens | >70% de los lunes |
| Padre usa tip | Encuesta cualitativa | ≥2/5 dicen "probe el tip" |

**Cualitativos (entrevistas):**

Con padres (semana 2 y 4):
- "Tu hijo te pide abrir la app o hay que recordarle?"
- "El resumen de comportamiento te dijo algo que no sabias?"
- "Los tips te sirvieron? Probaste alguno?"
- "Pagarias $5/mes por esto?"
- "Que le cambiarias?"

Con ninos (observacion, semana 2):
- Se emociona al ver la mascota?
- Elige opciones variadas o siempre la misma?
- Habla de la mascota fuera de la app?
- Pide volver a jugar?

Con clinicos (Fase 2 — semana 4+, mostrando datos reales del piloto):
- "Si estos patrones de comportamiento fueran de tu paciente, te serian utiles?"
- "Que le agregarias?"
- "Lo recetarias a los padres de tus pacientes?"

---

## Criterios GO/NO-GO

### GO (≥4 de 5) — Solo Fase 1 (padres + ninos, sin clinicos)

| # | Criterio | Metrica |
|---|----------|---------|
| G1 | Ninos enganchan | >4 apertura/semana promedio |
| G2 | Retencion minima | >35% D30 |
| G3 | Padres revisan | >70% abre resumen semanal |
| G4 | Padres valoran | ≥3/5 dicen "pagaria por esto" |
| G5 | Datos variados | Decisiones conductuales variadas (no siempre la misma opcion) |

> **Nota:** "Clinico valida" ya NO es criterio GO en Fase 1. Es criterio de Fase 2.

### NO-GO (cualquiera de estos)

| # | Criterio | Senal |
|---|----------|-------|
| N1 | Ninos no abren | <2 apertura/semana promedio al D14 |
| N2 | Abandono masivo | <20% D14 |
| N3 | Padres ignoran | <30% abre resumen |
| N4 | Tips inutiles | 0/5 padres probo un tip o lo considero relevante |
| N5 | Datos invalidos | >80% elige siempre la misma opcion (sin variacion) |
| N6 | Rechazo etico | Padre dice "esto no es apropiado para ninos" |

### Zona gris → iterar

| Situacion | Accion |
|-----------|--------|
| Ninos usan pero solo 3 dias/semana | Ajustar notificaciones, agregar variedad de situaciones |
| Padres no abren resumen pero ninos enganchan | Probar resumen via WhatsApp o push inline |
| Solo funciona para 7-12, no para 4-6 | Enfocar en 7-12, redisenar situaciones para 4-6 |
| Padres dicen "interesante pero quiero mas detalle" | Agregar contexto temporal + tips mas especificos |
| Padres dicen "los tips son muy genericos" | Personalizar tips segun patron detectado |

---

## Posibles pivots si NO-GO

| Pivot | Descripcion |
|-------|-------------|
| Solo juego (sin datos) | Quitar resumen padres, monetizar como juego emocional/educativo puro (Finch para ninos) |
| Solo padres (sin mascota) | Quitar mascota, crear app de tracking de comportamiento directo para padres |
| Cambiar vehiculo | En vez de mascota → diario emocional interactivo, juego de roles, historia interactiva |
| Cambiar edad | Si funciona solo con 10-14 → pivotar a pre-adolescentes |
| B2B directo a clinicos | Si padres no pagan pero clinicos ven valor → pivotar a herramienta clinica B2B |
| Volver a corporativo | Si ninos no enganchan pero adultos si → retomar Hachiko original con aprendizajes |

---

## Timeline completo (acelerado con IA)

```
Semana 0:     Smoke test + entrevistas clinicos + test concepto ninos
              (IA: encuesta generada en 15 min, assets concepto en 2h)
              ↓ ¿Hay interes? SI → continuar. NO → repensar.
Semana 1:     Construir MVP minimo (4 dias con IA vs 10 sin)
              ↓
Semana 2:     Lanzar piloto (20-30 ninos)
              ↓
Semana 3:     Checkpoint D7: ¿>60% retencion? SI → seguir. NO → iterar.
              (IA: analisis automatico de datos, iteracion rapida de UI)
              ↓
Semana 4:     Checkpoint D14: ¿>45% retencion? Entrevistas padres.
              ↓
Semana 5:     D30. Datos finales. Entrevistas clinicos con datos reales.
              (IA: analisis de datos del piloto, visualizaciones automaticas)
              ↓
Semana 6:     Decision GO/NO-GO/PIVOTAR
```

**Ahorro total con IA:** 1 semana menos en el timeline completo (6 semanas vs 7).
**Ahorro real:** La IA no solo acelera el build — acelera cada iteracion durante el piloto (bug fixes en horas, no dias; nuevos assets en minutos, no dias; analisis de datos en tiempo real).

---

> Contexto: [[hachiko-kids]]
> Equipo: [[perfil-edgar-recursos-estrategicos]] · [[perfil-jose-recursos-estrategicos]]
