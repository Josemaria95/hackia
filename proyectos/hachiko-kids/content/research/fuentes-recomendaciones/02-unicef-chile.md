---
title: "Fuente Recomendaciones — UNICEF Chile"
date: 2026-04-06
tags: [producto, educacion, wellness]
status: completado
---

# UNICEF Chile — Fuente para Motor de Recomendaciones

## Clasificación para el motor

| Criterio | Evaluación |
|----------|-----------|
| **Utilidad para recomendaciones** | **ALTA** |
| **Respaldo institucional** | Máximo — ONU + Gobierno de Chile |
| **Datos estructurados** | Sí — CCD tiene protocolo paso a paso |
| **Determinístico** | Sí — CCD define respuestas por edad y señal del niño |
| **Evidencia base** | CCD (54 países), SITAN 2025, alianza MINSAL/MINEDUC |

---

## Qué contenido sirve para recomendaciones

### 1. Framework CCD (Care for Child Development)

Protocolo de UNICEF+OMS implementado en 54 países. Estructura de consejería por edad que se mapea a reglas:

| Pilar CCD | Señal en Hachiko | Recomendación determinística |
|---|---|---|
| **Estimulación** (juego + comunicación) | Niño completa check-in rápido, sin explorar opciones | "Juega CON tu hijo 10 minutos hoy — sin celular, siguiendo su juego. Guía UNICEF: el juego es la herramienta #1 de desarrollo" |
| **Cuidado responsivo** (leer señales) | Padre no abre resumen semanal por 2+ semanas | "Tu hijo completó X check-ins esta semana. Conocer sus patrones te ayuda a responder mejor. UNICEF: el cuidado responsivo empieza por observar" |
| **Integración sectorial** | Patrón de riesgo detectado (tristeza persistente) | "Consulta con el pediatra en tu próximo control. UNICEF recomienda integrar bienestar emocional en controles de salud" |

**Fuente directa**: https://www.unicef.org/documents/care-child-development

### 2. Guía "Cuidar y conectar para estar bien"

Guía práctica descargable con herramientas para familias. Tips accionables por situación:

```
REGLA: IF emocion == "scared" AND edad IN [4,5,6]
  THEN recommend: "Los miedos son normales. Pregunta: '¿Qué te da miedo?' y valida: 'Entiendo que eso asusta'"
  SOURCE: "Cuidar y conectar para estar bien — UNICEF Chile"

REGLA: IF patron_animo == "inestable" (3+ cambios bruscos en semana)
  THEN recommend: "Las emociones cambiantes son parte del desarrollo. Mantén rutinas estables como ancla"
  SOURCE: "UNICEF Chile — Bienestar emocional en la infancia"

REGLA: IF dimension_prosocial > 80% consistently
  THEN recommend: "Tu hijo muestra empatía natural. Refuérzala nombrando lo que hace bien: 'Vi que compartiste con tu amigo'"
  SOURCE: "UNICEF — Cuidado responsivo"
```

**Fuente directa**: https://www.unicef.org/chile/documents/cuidar-y-conectar-para-estar-bien-recomendaciones-para-cuidar-la-salud-mental-de-ninos

### 3. Lineamientos para Apoyo Socioemocional en Comunidades Educativas

Protocolo para contexto escolar — aplicable al canal B2B colegios:

| Situación escolar | Regla para recomendación |
|---|---|
| Niño con baja socialización en app + reporte de convivencia escolar | "Sugiere al profesor un espacio de juego estructurado. UNICEF: los niños aprenden habilidades sociales en contextos seguros y guiados" |
| Patrón de ansiedad en semana de exámenes | "La ansiedad escolar es común. Técnica: preparar juntos la mochila la noche anterior reduce incertidumbre. UNICEF" |

### 4. Datos SITAN 2025 — Umbrales de alerta

No son recomendaciones directas pero informan los umbrales del motor:

| Dato SITAN | Cómo informa al motor |
|---|---|
| 33.9% adolescentes mujeres con depresión/ansiedad | Ajustar sensibilidad de alertas por género/edad |
| Consultas duplicadas (33K→62K) | Validar que el mercado necesita detección temprana |
| Mayor riesgo en migrantes y rurales | Variable contextual: si familia migrante → tips culturalmente sensibles |

---

## Reglas determinísticas extraíbles

```
REGLA 1: IF emocion == "sad" FOR 5+ days AND edad >= 10
  THEN recommend: "Habla con tu hijo sin presionar. 'Noto que estás más callado/a, ¿quieres contarme?'"
  ALSO: mostrar recurso UNICEF "En Mi Mente" (podcast)
  PRIORITY: alta
  SOURCE: "UNICEF Chile — Cuidar y Conectar"

REGLA 2: IF padre_abre_resumen == false FOR 14+ days
  THEN push_notification: "Tu hijo ha seguido usando Hachiko. ¿Quieres ver cómo le fue esta semana?"
  RATIONALE: CCD pilar "cuidado responsivo" — el padre necesita observar
  SOURCE: "CCD Framework — UNICEF/OMS"

REGLA 3: IF dimension_regulacion > 70% AND uso_micro_actividades > 3/semana
  THEN recommend: "Tu hijo está desarrollando buenas herramientas de calma. Sigue reforzando las que elige"
  TYPE: refuerzo positivo
  SOURCE: "UNICEF — Estimulación a través del juego"

REGLA 4: IF patron_riesgo == true (criterios múltiples)
  THEN recommend: "Considera hablar con un profesional. UNICEF recomienda integrar bienestar emocional en controles pediátricos"
  ALSO: link a directorio de profesionales / PASMI si corresponde
  PRIORITY: urgente
  SOURCE: "UNICEF Chile — Lineamientos Apoyo Socioemocional"
```

---

## Limitaciones

- CCD está diseñado para 0-5 años — requiere adaptación para 6-12.
- Las guías son textuales, no tienen formato de datos estructurados. Requieren extracción y catalogación manual.
- Los datos SITAN son poblacionales, no individuales — informan diseño pero no reglas directas.
- UNICEF no certifica apps de terceros — la referencia es "basado en" no "certificado por".

---

> Contexto: [[hachiko-proyecto-maestro]]
> Comparación: [[motor-recomendaciones-comparacion]]
