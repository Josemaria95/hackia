---
title: "Criterios de Exito — Go/No-Go del MVP"
date: 2026-03-06
tags: [producto, wellness, corporativo]
status: en-progreso
---

# Criterios de Exito — Go/No-Go del MVP

Criterios objetivos para decidir si Hachiko avanza a la fase de comercializacion o si debe pivotar. La decision se toma al final del piloto MVP (dia 30, ~mes 3 del proyecto).

---

## Criterios de GO

El MVP se considera exitoso si cumple **al menos 4 de los 6 criterios** siguientes:

| # | Criterio | Metrica | Como se mide | Por que importa |
|---|---------|---------|-------------|-----------------|
| G1 | **Empresas aceptan piloto** | >= 2 de 5 empresas contactadas aceptan piloto (incluso gratuito) | Confirmacion por email/reunion de al menos 2 empresas | Si nadie acepta ni gratis, no hay mercado |
| G2 | **Participacion sostenida** | Tasa de participacion >60% a dia 30 | (Empleados con al menos 1 check-in en semana 4) / (Empleados registrados) | La hipotesis central depende de participacion voluntaria alta |
| G3 | **Frecuencia de check-in** | >50% de participantes hacen 4+ check-ins/semana | Promedio de check-ins por usuario activo en semana 4 | 4/semana indica habito real, no solo curiosidad |
| G4 | **NPS empleados** | NPS > 30 | Encuesta NPS estandar al dia 30 del piloto | NPS >30 = promotores superan a detractores. Potencial de crecimiento organico. |
| G5 | **Voluntad de pago de HR** | Al menos 1 HR Manager dice "pagaria por esto" | Entrevista cualitativa al dia 30 — pregunta directa sobre voluntad de pago | Sin willingness-to-pay no hay modelo de negocio B2B |
| G6 | **Validacion clinica** | Asesor clinico valida que los instrumentos camuflados son proxies validos | Revision por psicologo organizacional de los cuestionarios y su implementacion en el juego | Sin validez clinica los datos no tienen valor diferencial |

### Interpretacion

- **6/6 cumplidos**: GO fuerte. Escalar agresivamente. Aplicar a Platanus con confianza.
- **4-5/6 cumplidos**: GO con ajustes. Identificar los criterios no cumplidos y corregir antes de escalar.
- **3/6 cumplidos**: Zona gris. Extender piloto 2 semanas mas. Iterar y re-evaluar.
- **<3/6 cumplidos**: NO-GO. Evaluar pivots.

---

## Criterios de NO-GO

El proyecto se detiene o pivota si **cualquiera** de los siguientes criterios es verdadero:

| # | Criterio | Senal | Timing de evaluacion | Por que es terminal |
|---|---------|-------|---------------------|---------------------|
| N1 | **Zero aceptacion** | Ninguna empresa acepta piloto, ni siquiera gratis | Despues de contactar a 5+ empresas (mes 1-2) | Si no podemos regalar el producto, el problema no existe o la solucion no resuena |
| N2 | **Participacion critica** | Participacion < 40% a dia 14 | Dia 14 del piloto (no esperar a dia 30) | Si a las 2 semanas menos de la mitad participa, la tendencia no se revierte. El novelty effect ya paso. |
| N3 | **Desconfianza** | Empleados expresan desconfianza: "esto reporta a mi jefe" | Cualquier momento del piloto (via feedback, NPS, o desercion masiva) | La confianza es el activo central de Hachiko. Si se rompe, el producto no funciona. No es un bug de feature, es un bug de concepto. |
| N4 | **Mercado saturado** | HR Managers dicen "ya tenemos algo que funciona" | Entrevistas pre-piloto o durante piloto | Si el dolor ya esta resuelto, no hay espacio para Hachiko. Verificar si "funciona" es real o es conformismo. |
| N5 | **Impedimento legal** | Asesor legal dice que el modelo de datos viola la Ley 21.719 | Revision legal (idealmente pre-piloto) | Si el modelo de datos es ilegal en Chile, el negocio no puede operar. Requiere rediseno fundamental. |
| N6 | **Invalidacion clinica** | Asesor clinico dice que el camuflaje invalida los instrumentos psicometricos | Revision clinica (pre-piloto o durante) | Si los datos no son clinicamente validos, Hachiko pierde su diferenciador central vs. una app de wellness generica. |

### Protocolo ante NO-GO

1. **Documentar**: registrar exactamente que criterio fallo, con datos y evidencia
2. **Analizar**: distinguir entre fallo de ejecucion (arreglable) y fallo de concepto (requiere pivot)
3. **Decidir**: si es fallo de ejecucion, corregir y re-pilotar. Si es fallo de concepto, evaluar pivots.
4. **No insistir**: si 2+ criterios NO-GO son verdaderos simultaneamente, pivotar sin demora.

---

## Pivots Posibles si NO-GO

Referencia completa en [[hachiko-proyecto-maestro]] seccion 17.

| Pivot | Cuando aplica | Que cambia |
|-------|--------------|-----------|
| **Solo B2C** | Las empresas no compran pero los empleados si quieren | Eliminar capa B2B. App de consumo directo, modelo freemium. Menos escalable pero valida el producto base. |
| **Consultoria de datos** | El SaaS no funciona pero los datos si interesan | Vender analisis de ISTAS-21 como servicio de consultoria por proyecto. Revenue por proyecto, no recurrente. |
| **Plataforma de intervencion** | El canal mutual no funciona pero hay demanda de intervencion | De "modelos de riesgo" a "intervencion post-ISTAS-21". Menos datos, mas accion directa. |
| **Pivot geografico** | Chile no funciona pero la regulacion en otro pais es mas favorable | Mexico primero (NOM-035 tiene multas mas altas y mayor enforcement). Colombia (Ley 1616 + Resolucion 2646). |

---

## Timeline de Decision

```
MES 1-2: Preparacion
────────────────────
- Experimentos pre-MVP (smoke test, concierge, prototype test)
- Evaluacion parcial de G1 (aceptacion de piloto)
- Revision legal preliminar (N5)
- Revision clinica preliminar (N6)

MES 2-3: Piloto MVP
────────────────────
- Dia 7:  Primera lectura de participacion (early warning)
- Dia 14: Evaluacion de N2 (participacion < 40% = NO-GO temprano)
- Dia 14: Evaluacion de N3 (senales de desconfianza)
- Dia 30: Evaluacion completa de G1-G6 y N1-N6

MES 3: Decision
───────────────
- Si GO: planificar Fase 2, aplicar a Platanus, buscar primeros clientes pagos
- Si zona gris: extender piloto 2 semanas, iterar
- Si NO-GO: documentar, analizar, pivotar
```

---

## Checklist de Go/No-Go (para llenar al dia 30)

```
CRITERIOS DE GO (necesitamos 4/6):
[ ] G1: >= 2 empresas aceptaron piloto
[ ] G2: Participacion > 60% a dia 30
[ ] G3: > 50% hacen 4+ check-ins/semana
[ ] G4: NPS > 30
[ ] G5: Al menos 1 HR dice "pagaria"
[ ] G6: Asesor clinico valida proxies

Total GO: __/6

CRITERIOS DE NO-GO (si cualquiera es TRUE, parar):
[ ] N1: Zero empresas aceptaron (ni gratis)
[ ] N2: Participacion < 40% a dia 14
[ ] N3: Desconfianza de empleados
[ ] N4: HR dice "ya tenemos algo"
[ ] N5: Legal dice que viola Ley 21.719
[ ] N6: Clinico dice que camuflaje invalida instrumentos

DECISION:
[ ] GO — escalar
[ ] GO con ajustes — corregir y escalar
[ ] Zona gris — extender piloto
[ ] NO-GO — pivotar
```

---

> Documento maestro: [[hachiko-proyecto-maestro]] (secciones 16-17)
> Experimentos de validacion: ver `07_mvp/experimentos-validacion.md`
> Definicion del MVP: ver `07_mvp/definicion-mvp.md`
> Equipo: [[perfil-edgar-recursos-estrategicos]] · [[perfil-jose-recursos-estrategicos]]
