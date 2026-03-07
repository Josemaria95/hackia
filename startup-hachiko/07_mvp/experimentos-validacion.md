---
title: "Experimentos de Validacion"
date: 2026-03-06
tags: [producto, wellness]
status: en-progreso
---

# Experimentos de Validacion

5 experimentos disenados para validar las hipotesis clave de Hachiko antes y durante el MVP. Cada experimento tiene criterios claros de exito y aprendizajes esperados.

---

## Experimento 1: Smoke Test — Landing Page + Waitlist

**Fase**: Pre-MVP (semana 1-2)

| Campo | Detalle |
|-------|---------|
| **Hipotesis** | Los HR Managers en Chile tienen un dolor real con la salud mental de sus equipos y buscarian activamente una solucion digital gamificada. |
| **Metodo** | Landing page simple (1 pagina) con propuesta de valor de Hachiko + formulario de waitlist. Distribuir via LinkedIn (posts de Edgar y Jose), email directo a contactos HR, y 2-3 grupos de WhatsApp de RRHH en Chile. |
| **Contenido de la landing** | Problema (ISTAS-21 no basta), solucion (mascota virtual + datos), beneficio para HR (dashboard de riesgo), CTA: "Quiero ser empresa piloto". |
| **Sample size** | Target: 200-300 visitas, 15-25 sign-ups |
| **Duracion** | 2 semanas |
| **Criterio de exito** | >= 10 sign-ups de HR Managers con email corporativo (no personales). Conversion rate >5% de visitas a sign-up. |
| **Criterio de fracaso** | < 5 sign-ups despues de 2 semanas y 200+ visitas. |
| **Que aprendemos** | Si hay demanda real (no solo interes teorico). Que palabras resuenan en el copy. Si la gamificacion atrae o confunde a HR. Segmentos de empresa mas interesados (tamano, industria). |
| **Costo** | ~$0-50 (dominio + hosting gratuito en Cloudflare Pages o Vercel) |

---

## Experimento 2: Concierge MVP — Coaching Manual via WhatsApp

**Fase**: Pre-MVP (semana 1-3, paralelo al Experimento 1)

| Campo | Detalle |
|-------|---------|
| **Hipotesis** | La mecanica de "cuidar a una mascota virtual" genera mayor engagement que un check-in de bienestar tradicional. El concepto de gamificacion resuena emocionalmente con empleados. |
| **Metodo** | Grupo de WhatsApp con 10-15 voluntarios (amigos, colegas, contactos). Cada manana Edgar envia una imagen del pet con una pregunta de check-in ("Tu pet amanecio cansado hoy — como estas tu?"). Los participantes responden. Edgar da coaching manual basado en las respuestas. Cada 3 dias, el pet "cambia de estado" segun las respuestas agregadas del grupo. |
| **Sample size** | 10-15 personas (no necesitan ser de la misma empresa) |
| **Duracion** | 2-3 semanas |
| **Criterio de exito** | >= 60% de participantes responden al menos 4 de 7 dias en la segunda semana. Feedback cualitativo positivo: "me gusta el pet", "esto es diferente a una encuesta". |
| **Criterio de fracaso** | < 40% de respuesta en semana 2. Feedback tipo: "no entiendo para que sirve el pet" o "preferiria una encuesta normal". |
| **Que aprendemos** | Si la metafora del pet funciona o es infantil/confusa para adultos en contexto laboral. Que tipo de preguntas generan mas respuestas. Si el coaching manual genera valor percibido. Horario optimo para el check-in (manana vs. mediadia vs. tarde). |
| **Costo** | $0 (tiempo de Edgar) |

---

## Experimento 3: Prototype Test — Prototipo Clickable en Figma

**Fase**: Pre-MVP o paralelo al desarrollo (semana 2-4)

| Campo | Detalle |
|-------|---------|
| **Hipotesis** | Los empleados comprenden el concepto de Hachiko en <3 minutos, conectan emocionalmente con la mascota, y expresan voluntad de usarlo diariamente. |
| **Metodo** | Prototipo clickable en Figma que simula: onboarding (elegir pet, ponerle nombre), check-in diario (2 pantallas), reaccion del pet, micro-tip de coaching, pantalla de racha. Sesion de testeo 1-a-1 (presencial o Zoom) con cada participante: se le pide completar el flujo y luego se hacen 5 preguntas. |
| **Preguntas post-test** | (1) Que entendiste que hace esta app? (2) Como te hizo sentir interactuar con el pet? (3) Usarias esto todos los dias? Por que si/no? (4) Te preocupa la privacidad? (5) Que cambiarias? |
| **Sample size** | 10-15 empleados de distintas empresas y roles |
| **Duracion** | 1-2 semanas (sesiones de 15-20 min cada una) |
| **Criterio de exito** | >= 10/15 comprenden el concepto sin explicacion adicional. >= 8/15 expresan conexion emocional con el pet. >= 8/15 dicen que lo usarian diariamente. < 3/15 expresan preocupacion fuerte de privacidad (si mas de 3 la expresan, hay problema de messaging). |
| **Criterio de fracaso** | >= 5/15 no entienden el concepto. >= 5/15 dicen que es "infantil" o "no es para mi". >= 5/15 tienen preocupaciones fuertes de privacidad. |
| **Que aprendemos** | Comprension del concepto. Reaccion emocional real (no teorica). Objeciones de privacidad. Problemas de UX antes de escribir codigo. Que la gente cambiar del prototipo. |
| **Costo** | $0 (Figma gratuito para 1 proyecto) |

---

## Experimento 4: Piloto MVP — App Real con 1-2 Empresas

**Fase**: Post-MVP (mes 2-3)

| Campo | Detalle |
|-------|---------|
| **Hipotesis** | En un entorno real con empleados reales, Hachiko logra >60% de participacion sostenida a 30 dias y genera datos que HR considera valiosos. |
| **Metodo** | Desplegar el MVP funcional en 1-2 empresas (50-100 empleados en total). Onboarding asistido por Edgar (sesion de 10 min con HR + email a empleados). Monitoreo diario de metricas. Entrevista con HR al dia 15 y dia 30. Encuesta NPS a empleados al dia 30. |
| **Empresas candidatas** | Red de Edgar (CEAPSI, clientes kntor) y Jose (Baufest, contactos en consultoras). Idealmente 1 empresa tech (100-300 empleados) + 1 empresa de servicios. |
| **Sample size** | 50-100 empleados invitados (target: 30-60 activos) |
| **Duracion** | 30 dias |
| **Criterio de exito** | Participacion >60% a dia 30. Frecuencia >4 check-ins/semana por >50% de participantes. NPS >30. Al menos 1 HR dice "pagaria por esto". Retencion semana 1 a semana 4 >50%. |
| **Criterio de fracaso** | Participacion <40% a dia 14 (no esperar a dia 30). Empleados expresan desconfianza ("esto reporta a mi jefe"). HR dice "no veo el valor del dashboard". Problemas tecnicos que impiden >20% de check-ins. |
| **Que aprendemos** | Product-market fit real (no teorico). Tasa de participacion en entorno real. Valor percibido por HR con datos reales. Problemas tecnicos en produccion. Patron de uso (horarios, frecuencia, drop-off points). |
| **Costo** | $0-50/mes (infra en tiers gratuitos) + tiempo del equipo |

---

## Experimento 5: HR Value Test — Dashboard Mockup con HR Managers

**Fase**: Paralelo al Experimento 4 (mes 2-3)

| Campo | Detalle |
|-------|---------|
| **Hipotesis** | Los HR Managers perciben el dashboard de Hachiko como significativamente mas valioso que sus herramientas actuales (ISTAS-21, encuestas de clima) y estarian dispuestos a pagar $6-14/empleado/mes por el. |
| **Metodo** | Preparar mockup del dashboard con datos simulados pero realistas (basados en datos reales del piloto si es posible). Sesion 1-a-1 con 5 HR Managers (30 min cada una). Mostrar: (1) metricas de participacion, (2) risk score agregado, (3) tendencia semanal, (4) alerta temprana ejemplo. Preguntas: que harias con esta informacion? Cuanto pagarias? Que falta? |
| **Preguntas clave** | (1) Que ves en este dashboard? (comprension) (2) Es informacion que hoy no tienes? (novedad) (3) Que harias diferente si tuvieras esto? (accionabilidad) (4) Cuanto pagarias por empleado por mes? (price sensitivity) (5) Que falta para que lo compres? (objeciones) |
| **Sample size** | 5 HR Managers de empresas diferentes (100-500 empleados) |
| **Duracion** | 2 semanas (agendar + realizar 5 sesiones) |
| **Criterio de exito** | >= 3/5 dicen que pagarian (cualquier monto). >= 3/5 identifican acciones concretas que tomarian con los datos. Precio sugerido promedio >= $5/empleado/mes. < 2/5 dicen "ya tengo algo que funciona". |
| **Criterio de fracaso** | >= 3/5 dicen "no pagaria" o "ya tengo algo que funciona". El precio sugerido promedio es < $3/empleado/mes. Las objeciones son estructurales (no de feature, sino de concepto). |
| **Que aprendemos** | Voluntad de pago real. Price sensitivity por tamano de empresa. Que metricas importan mas a HR (participacion vs. risk score vs. tendencia vs. alertas). Objeciones de compra que debemos resolver. Si el dashboard solo justifica la compra o necesitamos otro angulo. |
| **Costo** | $0 (tiempo del equipo + mockup en Figma) |

---

## Secuencia Recomendada

```
SEMANA 1-2:
  Exp 1 (Smoke Test) ────────── en paralelo ─── Exp 2 (Concierge)
  Exp 3 (Prototype Test) ───── en paralelo ───

SEMANA 3-6:
  Desarrollo del MVP (usando insights de Exp 1-3)

SEMANA 7-10:
  Exp 4 (Piloto MVP) ────────── en paralelo ─── Exp 5 (HR Value Test)

SEMANA 11:
  Decision GO / NO-GO basada en resultados de los 5 experimentos
```

---

## Tabla de Decision

| Resultado | Accion |
|-----------|--------|
| Exp 1-3 positivos | Construir MVP con confianza. Los insights informan prioridades. |
| Exp 1-3 mixtos | Iterar concepto antes de construir. Ajustar messaging, UX, o mecanicas del pet. |
| Exp 1-3 negativos | Revisar hipotesis fundamental. Considerar pivots (ver [[hachiko-proyecto-maestro]] seccion 17). |
| Exp 4-5 positivos | GO: buscar primeros clientes pagos, aplicar a Platanus. |
| Exp 4-5 mixtos | Iterar MVP y repetir piloto con ajustes. |
| Exp 4-5 negativos | NO-GO o pivot. Ver criterios detallados en `07_mvp/criterios-exito.md`. |

---

> Criterios de exito detallados: ver `07_mvp/criterios-exito.md`
> Definicion del MVP: ver `07_mvp/definicion-mvp.md`
> Documento maestro: [[hachiko-proyecto-maestro]]
> Equipo: [[perfil-edgar-recursos-estrategicos]] · [[perfil-jose-recursos-estrategicos]]
