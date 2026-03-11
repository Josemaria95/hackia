---
title: "Hachiko Kids — Instrumentos Clinicos Adaptados"
date: 2026-03-10
tags: [producto, wellness, educacion]
status: en-progreso
---

# Instrumentos Clinicos Camuflados para Ninos

## Principio fundamental

Los ninos no pueden llenar cuestionarios. Pero pueden:
- Elegir como se siente su mascota (seleccion de emocion)
- Decidir que actividad hacer con su mascota (preferencia conductual)
- Interactuar con la mascota de formas que revelan estado emocional (frecuencia, duracion, patron)

Cada interaccion con la mascota es un **dato clinico disfrazado de juego**.

---

## Instrumento 1: SDQ Proxy (Strengths and Difficulties Questionnaire)

### Original
- 25 items, 5 escalas (emocional, conducta, hiperactividad, pares, prosocial)
- Respondido por adulto (padre o profesor)
- Validado en espanol, libre de licencia

### Adaptacion Hachiko Kids (respondido por el nino via mascota)

| Escala SDQ | Mecanica en la app | Frecuencia |
|------------|-------------------|------------|
| Problemas emocionales | "Como se siente tu mascota hoy?" (triste, asustada, preocupada, tranquila, feliz) | Diario |
| Problemas de conducta | "Tu mascota esta enojada — que quiere hacer?" (pegar, gritar, esconderse, hablar, respirar) | Cuando se detecta emocion negativa |
| Hiperactividad | Tiempo de interaccion, frecuencia de cambio de actividad, toques por minuto | Pasivo (metadata) |
| Problemas con pares | "Tu mascota quiere jugar — con quien?" (sola, con un amigo, con muchos) | 2-3 veces/semana |
| Conducta prosocial | "Otro animalito esta triste — que hace tu mascota?" (lo ayuda, lo ignora, se va) | 1-2 veces/semana |

### Scoring
- Cada respuesta mapea a 0-2 (como SDQ original)
- Score semanal por escala
- Tendencia 4 semanas

### Validez
- No es el SDQ literal — es un **proxy conductual**
- Requiere estudio de correlacion (SDQ padre vs proxy nino) antes de claims clinicos
- Inicialmente: "indicador de bienestar", no "instrumento diagnostico"

---

## Instrumento 2: Escala Visual de Emociones (EVE) — Propio

### Diseño
No es adaptacion de instrumento existente — es nativo de Hachiko Kids.

**Mecanica:** El nino ve 5 caras con emociones y elige "como se siente tu mascota":

```
😄 Feliz    😐 Normal    😢 Triste    😠 Enojado    😨 Asustado
```

Para 4-6 anos: solo caras, sin texto
Para 7-12 anos: caras + palabra simple

### Datos capturados
- Emocion seleccionada
- Contexto temporal (hora, dia de semana)
- Latencia de seleccion (cuanto tarda en elegir)
- Cambio respecto a ayer

### Valor clinico
- Patron semanal (emociones dominantes por dia)
- Tendencia mensual (mejorando, estable, deteriorando)
- Correlacion con eventos (lunes = colegio, fines de semana = familia)
- La latencia alta puede indicar ambivalencia emocional o dificultad para identificar emociones (alexitimia)

---

## Instrumento 3: Indicadores Conductuales Pasivos

### Que se mide SIN que el nino haga nada explicito

| Senal | Que puede indicar |
|-------|-------------------|
| Frecuencia de apertura | Engagement, necesidad de confort |
| Hora de apertura | Rutinas, momentos de estres |
| Duracion de sesion | Atencion, interes |
| Actividades elegidas | Preferencias (social vs solitario) |
| Toques por minuto | Agitacion vs calma |
| Dias sin abrir | Perdida de interes, posible deterioro |
| Patron semanal | Correlacion con contextos (colegio vs casa) |

### Importante
- NO se usa camara, microfono, GPS, ni contactos
- Solo metadata de interaccion dentro de la app
- Todo procesado localmente, solo scores agregados al servidor

---

## Instrumento 4: Micro-actividades de Regulacion

No son instrumentos de medicion — son **intervenciones terapeuticas gamificadas**:

| Actividad | Tecnica real | Duracion |
|-----------|-------------|----------|
| "Respira con tu mascota" | Respiracion diafragmatica | 30 seg |
| "Sacude el telefono para sacar la energia" | Descarga motora | 15 seg |
| "Pinta lo que siente tu mascota" | Arteterapia basica | 60 seg |
| "Cuenta las estrellas con tu mascota" | Grounding (5-4-3-2-1) | 45 seg |
| "Tu mascota quiere dormir — ayudala" | Relajacion progresiva simplificada | 60 seg |

### Datos capturados
- Que actividades elige (y cuales evita)
- Las completa o las abandona
- Cambio emocional post-actividad (re-selecciona emocion despues)

---

## Que NO hacemos

| Prohibido | Por que |
|-----------|---------|
| Diagnosticar | No somos instrumento diagnostico. Somos screening + monitoreo |
| Reemplazar al profesional | Complementamos, nunca reemplazamos |
| Usar instrumentos con licencia (MBI, CBCL) | Problemas legales + no validados para este contexto |
| Afirmar equivalencia clinica sin estudio | Todo es "proxy" hasta validacion formal |
| Medir sin consentimiento parental | Siempre opt-in explicito |

---

## Ruta de validacion clinica

### Fase 1: MVP (sin claims clinicos)
- Etiqueta: "indicador de bienestar" o "tendencias emocionales"
- NO decimos "mide depresion" ni "detecta ansiedad"
- Valor: patron temporal + enganche del nino

### Fase 2: Estudio piloto (con psicologo)
- N >= 30 ninos
- Aplicar SDQ formal (padre) + Hachiko proxy (nino) simultaneamente
- Correlacionar scores
- Psicologo infantil revisa y retroalimenta

### Fase 3: Publicacion
- Si correlacion es significativa → paper academico
- Si no → ajustar mecanicas, re-testear
- Nunca forzar claims clinicos sin evidencia

---

> Contexto: [[hachiko-kids]]
> Equipo: [[perfil-edgar-recursos-estrategicos]] · [[perfil-jose-recursos-estrategicos]]
