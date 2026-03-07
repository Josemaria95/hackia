---
title: "Senales de Smartphone para Deteccion de Estres"
date: 2026-03-06
tags: [producto, wellness]
status: en-progreso
---

# Senales de Smartphone para Deteccion de Estres

## Resumen

Hachiko utiliza senales del smartphone para detectar indicadores de estres, ansiedad y bienestar emocional. Las senales se dividen en **pasivas** (recolectadas sin interaccion del usuario) y **activas** (requieren interaccion directa). El MVP se basa exclusivamente en senales activas disfrazadas como interacciones con la mascota.

---

## Senales Pasivas

| Senal | Tipo | Que mide | Confiabilidad | Privacidad | Implementacion MVP |
|-------|------|----------|--------------|-----------|-------------------|
| Dinamica de escritura (velocidad, errores, backspaces) | Biometrica conductual | Indicador de estres | Media | Baja preocupacion | NO |
| Patrones de screen time (duracion de uso, cambio entre apps) | Uso de dispositivo | Ansiedad / inquietud | Media | Media preocupacion | NO |
| Movimiento / acelerometro (sedentarismo, agitacion) | Sensor fisico | Estres fisico | Media | Baja preocupacion | NO |
| GPS / movilidad (reduccion de movilidad social) | Ubicacion | Indicador de depresion | Alta | ALTA preocupacion | NO |
| Patrones de sueno (uso del telefono 23:00-06:00) | Uso de dispositivo | Proxy de calidad de sueno | Alta | Media preocupacion | POSIBLE |
| Patrones de llamadas/mensajes (aislamiento social) | Comunicacion | Soledad | Media | ALTA preocupacion | NO |

### Notas sobre senales pasivas

- Requieren permisos invasivos que generan friccion en onboarding
- GPS y patrones de comunicacion tienen implicaciones de privacidad significativas
- Reservadas para Fase 2-3, cuando exista confianza del usuario establecida
- Cada senal pasiva requerira consentimiento explicito e independiente

---

## Senales Activas (Hachiko MVP)

| Senal | Tipo | Que mide | Confiabilidad | Privacidad | Implementacion MVP |
|-------|------|----------|--------------|-----------|-------------------|
| Respuestas al check-in diario (PHQ-2 proxy) | Self-report camuflado | Estado de animo + energia | Alta | Baja preocupacion | SI |
| Check-in semanal (WHO-5 proxy) | Self-report camuflado | Bienestar general | Alta | Baja preocupacion | SI |
| Timing del check-in (hora del dia en que responde) | Metadata conductual | Disrupcion de rutina | Media | Baja preocupacion | SI |
| Tiempo de respuesta a prompts (latencia) | Metadata conductual | Engagement / fatiga | Media | Baja preocupacion | SI |
| Frecuencia de interaccion con la mascota | Engagement | Interes / evitacion | Media | Baja preocupacion | SI |

### Por que senales activas para el MVP

1. **No requieren permisos invasivos** — solo acceso basico a la app
2. **Alta confiabilidad** — PHQ-2 y WHO-5 son instrumentos clinicamente validados
3. **Baja friccion** — el usuario interactua con su mascota, no con un cuestionario
4. **Compliance** — minimizan riesgo regulatorio bajo Ley 21.719
5. **Datos limpios** — menos ruido que senales pasivas, mas faciles de interpretar

---

## Estrategia de Fases

### Fase 1 (MVP): Solo senales activas
- Check-in diario (PHQ-2 proxy): 2 preguntas camufladas como "como esta tu mascota hoy"
- Check-in semanal (WHO-5 proxy): 5 preguntas sobre bienestar general
- Metadata de interaccion (timing, frecuencia, latencia)

### Fase 2: Senales pasivas de bajo riesgo
- Patrones de sueno (uso nocturno del telefono)
- Dinamica de escritura dentro de la app
- Consentimiento explicito adicional requerido

### Fase 3: Senales pasivas avanzadas
- Acelerometro / movimiento
- Patrones de movilidad (solo si el usuario opta-in con GPS)
- Modelo predictivo multimodal combinando activas + pasivas

---

## Referencias clinicas

- **PHQ-2** (Patient Health Questionnaire-2): screening de depresion validado, sensibilidad 83%, especificidad 92%
- **WHO-5** (World Health Organization Well-Being Index): medida de bienestar general, validado en 30+ idiomas
- Ambos instrumentos son de dominio publico y no requieren licencia

---

> Modelo de datos: [[modelo-datos]]
> Privacidad: [[privacidad-etica]]
> Proyecto maestro: [[hachiko-proyecto-maestro]] seccion 5
