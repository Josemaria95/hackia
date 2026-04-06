---
title: "Fuente Recomendaciones — Fundación América por la Infancia (FAI)"
date: 2026-04-06
tags: [producto, educacion, wellness]
status: completado
---

# América por la Infancia (FAI) — Fuente para Motor de Recomendaciones

## Clasificación para el motor

| Criterio | Evaluación |
|----------|-----------|
| **Utilidad para recomendaciones** | **ALTA** |
| **Respaldo institucional** | Alto — PUC Chile, JUNJI, municipios |
| **Datos estructurados** | Sí — Escala E2P tiene ítems cuantificables, ODISEA tiene protocolos |
| **Determinístico** | Sí — E2P mapea competencias parentales con indicadores medibles |
| **Evidencia base** | Teoría del apego (Bowlby), neurociencias, trauma complejo |

---

## Qué contenido sirve para recomendaciones

### 1. Escala E2P 2.0 (Competencias Parentales)

Instrumento validado que mide competencias parentales en 4 áreas. Se puede adaptar como "perfil de cuidador" en la app:

| Área E2P | Señal en Hachiko (comportamiento del padre) | Recomendación |
|---|---|---|
| **Competencias vinculares** | Padre no abre resumen + no hace micro-actividades con hijo | "Dedica 5 minutos a hacer 'Respirar con Luna' JUNTO a tu hijo. El vínculo se construye en momentos pequeños" |
| **Competencias formativas** | Niño tiene baja adherencia a instrucciones | "Instrucciones claras y cortas funcionan mejor. 'Guarda tus juguetes' en vez de 'Ordena tu pieza'" |
| **Competencias protectoras** | Patrón de miedo/ansiedad persistente | "Tu hijo necesita sentir que su mundo es seguro. Rutinas predecibles son la base de la seguridad emocional" |
| **Competencias reflexivas** | Padre usa la app pero no lee tips | "Reflexionar sobre los patrones de tu hijo es tan importante como verlos. ¿Qué te sorprendió esta semana?" |

**Fuente**: https://catalogo.academiafai.com/cl/nueva-escala-e2p-evaluando-competencias-parentales59.html

### 2. Modelo ODISEA — 4 metodologías adaptables

| Metodología ODISEA | Adaptación para recomendaciones Hachiko |
|---|---|
| **Taller Parentalidad Positiva** | Misiones semanales para padres: "Esta semana, cuando tu hijo se frustre, espera 10 segundos antes de intervenir" |
| **Video-feedback** | "Observa cómo tu hijo juega sin intervenir por 3 minutos. ¿Qué notas?" (micro-actividad reflexiva) |
| **Visita domiciliaria** | Tips contextuales: "En la hora de la cena, pregúntale qué fue lo mejor y lo peor de su día" |
| **Dispositivo terapéutico de crianza** | Para casos de riesgo: "Consulta con un especialista en desarrollo infantil. FAI tiene red de profesionales" |

### 3. Teoría del apego aplicada (Bowlby → reglas)

```
REGLA 1: IF dimension_socializacion < 30% AND edad IN [4,5,6]
  THEN recommend: "Los niños con apego seguro exploran más. ¿Tu hijo sabe que siempre puede volver a ti? Díselo explícitamente"
  FRAMEWORK: Teoría del apego — base segura
  SOURCE: "FAI — Modelo ODISEA"

REGLA 2: IF emocion == "scared" recurrente AND choice == "buscar adulto"
  THEN recommend: "Que busque a un adulto cuando tiene miedo es señal de apego seguro. Refuérzalo: 'Me alegra que me cuentes'"
  TYPE: refuerzo positivo
  SOURCE: "FAI — Competencias vinculares E2P"

REGLA 3: IF patron_impulsividad alta AND dimension_regulacion < 30%
  THEN recommend: "La regulación emocional se aprende del adulto. Cuando tú te calmas primero, él aprende a calmarse después"
  FRAMEWORK: Co-regulación (neurociencias del desarrollo)
  SOURCE: "FAI — Neurociencias para educadores"
```

### 4. CHQ — Apego Desorganizado

Instrumento de detección de apego desorganizado. NO para usar directamente en la app (es clínico), pero informa umbrales de alerta:

| Señal CHQ | Traducción en Hachiko | Acción |
|---|---|---|
| Comportamiento contradictorio | Niño alterna entre respuestas prosociales y agresivas sin patrón | Flag interno: "patrón inconsistente" → sugerir consulta profesional |
| Miedo al cuidador | N/A en app (no medible) | No incluir — fuera del alcance del motor |
| Congelamiento | Niño no completa check-ins (abandona a mitad) | Patrón de evitación → tip gentil, no presionar |

---

## Reglas determinísticas extraíbles

```
REGLA 1: IF padre_engagement == "bajo" (no abre resumen, no lee tips) FOR 3+ semanas
  THEN recommend: "5 minutos de atención plena con tu hijo valen más que una hora distraída. Hoy, solo escucha"
  FRAMEWORK: E2P — Competencias vinculares
  SOURCE: "FAI / PUC Chile"

REGLA 2: IF dimension_instrucciones < 40% AND edad IN [4,5,6]
  THEN recommend: "A esta edad, las instrucciones funcionan mejor si son una a la vez. 'Primero guarda, después ven'"
  FRAMEWORK: E2P — Competencias formativas
  SOURCE: "FAI — Parentalidad Positiva"

REGLA 3: IF emocion_variada == true (3+ emociones distintas en semana) AND regulacion > 50%
  THEN recommend: "Tu hijo experimenta muchas emociones y las maneja bien. Eso es inteligencia emocional en acción"
  TYPE: refuerzo positivo
  SOURCE: "FAI — Desarrollo socioemocional"

REGLA 4: IF patron_riesgo_apego == true (señales CHQ adaptadas)
  THEN recommend: "Algunos patrones sugieren que tu hijo podría beneficiarse de apoyo profesional. ¿Quieres ver opciones?"
  PRIORITY: urgente
  ALSO: link a red FAI o directorio profesionales
  SOURCE: "FAI — CHQ adaptado"
```

---

## Limitaciones

- E2P y CHQ son instrumentos con **licencia** — no se pueden reproducir textualmente sin acuerdo con FAI.
- El modelo ODISEA está diseñado para intervención presencial — la adaptación digital requiere validación.
- FAI cobra por sus cursos y certificaciones — un partnership formal tendría costo.
- Los instrumentos miden al PADRE, no al niño directamente — Hachiko mide al niño. Se necesita puente conceptual.

---

> Contexto: [[hachiko-proyecto-maestro]]
> Comparación: [[motor-recomendaciones-comparacion]]
