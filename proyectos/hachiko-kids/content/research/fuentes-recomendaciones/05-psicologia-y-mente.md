---
title: "Fuente Recomendaciones — Psicología y Mente"
date: 2026-04-06
tags: [producto, educacion, wellness]
status: completado
---

# Psicología y Mente — Fuente para Motor de Recomendaciones

## Clasificación para el motor

| Criterio | Evaluación |
|----------|-----------|
| **Utilidad para recomendaciones** | **MEDIA** |
| **Respaldo institucional** | Medio — psicólogos colegiados, citas académicas, pero es medio privado |
| **Datos estructurados** | No — artículos de largo formato, no protocolos |
| **Determinístico** | Parcial — los artículos contienen listas de estrategias mapeables a reglas |
| **Evidencia base** | Divulgación basada en teorías validadas (Bowlby, Goleman, Piaget) |

---

## Qué contenido sirve para recomendaciones

### 1. Técnicas de autocontrol emocional para niños (9 técnicas)

Artículo con técnicas concretas que se mapean directamente:

| Técnica del artículo | Señal en Hachiko | Recomendación |
|---|---|---|
| Técnica de la tortuga | Niño elige respuesta impulsiva | "Técnica de la tortuga: cuando sientas rabia, métete en tu caparazón (cruza los brazos), cuenta hasta 10, y sal cuando estés listo" |
| Semáforo emocional | Niño alterna emociones rápidamente | "Semáforo: Rojo=Para, Amarillo=Piensa, Verde=Actúa. Practícalo con tu hijo en momentos de calma" |
| Frasco de la calma | Emoción "angry" + baja regulación | "Haz un frasco de la calma juntos: agua + glitter. Cuando se agita, observen cómo el glitter se asienta — así se asientan las emociones" |
| Respiración abdominal | Uso frecuente de "Respirar con Luna" | "Tu hijo usa bien la respiración. Refuérzalo practicándola juntos antes de dormir" |

**Fuente**: https://psicologiaymente.com/desarrollo/tecnicas-autocontrol-emocional-ninos

### 2. Educación emocional: 14 estrategias para niños

Estrategias que se convierten en tips semanales:

```
REGLA 1: IF niño_elige_misma_emocion 5+ dias seguidos
  THEN recommend: "Amplía el vocabulario emocional de tu hijo. No solo 'bien' o 'mal' — prueba: contento, orgulloso, frustrado, nervioso"
  SOURCE: "Psicología y Mente — Educación emocional"

REGLA 2: IF dimension_prosocial > 70%
  THEN recommend: "Tu hijo muestra empatía natural. Fortalécela con cuentos: '¿Cómo crees que se siente este personaje?'"
  SOURCE: "Psicología y Mente — Inteligencia emocional en niños"
```

### 3. Juegos psicológicos para niños (12 juegos)

Actividades recomendables como micro-actividades adicionales:

| Juego | Cuándo recomendar |
|---|---|
| "El dado de las emociones" | Niño con vocabulario emocional limitado (misma emoción siempre) |
| "La caja de la rabia" | Niño con emoción "angry" frecuente |
| "El termómetro emocional" | Niño que necesita graduar intensidad de emociones |
| "El espejo" | Niño con baja conciencia social |

---

## Reglas determinísticas extraíbles

```
REGLA 1: IF emocion == "angry" AND choice == "agresiva" AND edad IN [4,5,6]
  THEN recommend: "Técnica de la tortuga: 'Cuando sientas rabia, cruza los brazos como una tortuga en su caparazón y cuenta hasta 10'"
  SOURCE: "Basado en técnicas de autocontrol validadas — Psicología y Mente"

REGLA 2: IF variedad_emocional < 2 emociones_distintas en 7 dias
  THEN recommend: "Juego del dado de las emociones: escriban 6 emociones en un dado y túrnense para actuar la que salga"
  SOURCE: "Juegos psicológicos para niños — Psicología y Mente"

REGLA 3: IF micro_actividad == "Respirar con Luna" AND uso > 5/semana
  THEN recommend: "Tu hijo busca la calma activamente. Añade variedad: prueben 'contar estrellas' o 'pintar sentimientos'"
  TYPE: evolución
  SOURCE: "Psicología y Mente — Regulación emocional"
```

---

## Limitaciones

- **No es fuente gubernamental ni institucional** — es un medio privado. Las recomendaciones basadas en PsicologíayMente no tienen el peso de MINEDUC o UNICEF.
- Artículos son divulgativos, no protocolos clínicos — sirven para tips de crianza, no para detección.
- No hay licencia de contenido clara — requeriría acuerdo formal para usar textos.
- Sin datos estructurados ni API.

## Veredicto

**Sirve para recomendaciones: SÍ, como fuente secundaria.** Las técnicas concretas (tortuga, semáforo, frasco de calma, juegos) son excelentes para tips parentales, pero deben presentarse como "técnicas basadas en psicología del desarrollo" sin atribuir a PsicologíayMente directamente. Complementa las fuentes institucionales con contenido práctico y accionable.

---

> Contexto: [[hachiko-proyecto-maestro]]
> Comparación: [[motor-recomendaciones-comparacion]]
