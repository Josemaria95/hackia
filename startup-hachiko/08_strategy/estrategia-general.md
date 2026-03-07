---
title: "Estrategia General — Go-to-Market"
date: 2026-03-06
tags: [estrategia, wellness, corporativo]
status: en-progreso
---

# Estrategia General — Go-to-Market

---

## Posicionamiento

> "El puente entre la validacion medica y el abrazo emocional."

Hachiko no es un EAP (Employee Assistance Program). No es un juego de bienestar. No es una encuesta de clima. Es **infraestructura de salud mental laboral**: un sistema que genera datos clinicamente validos a traves de una experiencia emocional que el empleado elige usar.

| Lo que NO somos | Lo que SI somos |
|----------------|-----------------|
| App de meditacion (Calm, Headspace) | Sistema de monitoreo continuo camuflado en gamificacion |
| Plataforma de terapeutas (BetterHelp, Selia) | Prevencion y deteccion temprana, no terapia |
| Encuesta de clima (Great Place to Work) | Datos continuos vs. foto anual |
| Wellness decorativo (yoga + fruta) | ROI medible para CFO |
| Software de vigilancia | Herramienta del empleado, no del empleador |

---

## Canales de Distribucion

### Canal Primario: Mutuales (ACHS primero)

Las mutuales chilenas son el canal de distribucion ideal para Hachiko. Detalles completos en [[hachiko-proyecto-maestro]] seccion 8.

**Por que mutuales**:

1. **Obligacion legal**: SUSESO obliga a aplicar ISTAS-21 a todas las empresas. La Circular N°3243 obliga a las mutuales a dar asistencia tecnica a empresas en riesgo alto. La mutual TIENE que hacer algo — hoy no tiene herramienta digital.
2. **Acceso masivo**: 3 mutuales cubren ~270,000 empresas en Chile (ACHS ~108K, Mutual de Seguridad ~94.5K, IST ~67.5K). Un solo contrato = acceso a decenas de miles de empresas.
3. **CAC casi cero**: La mutual ya tiene la relacion, el presupuesto de prevencion y la obligacion de intervenir. Hachiko solo provee la herramienta.
4. **Credibilidad**: Si la mutual recomienda Hachiko, HR confia. Elimina la objecion #1 de las startups: "no los conozco".

**Estrategia con mutuales**:
- Mes 1-3: Identificar contacto en ACHS (prevencion de riesgos o innovacion). Presentar caso con datos de piloto.
- Mes 3-6: Piloto con 10 empresas afiliadas a la mutual (riesgo alto segun ISTAS-21).
- Mes 6-12: Contrato white-label. La mutual despliega Hachiko como "su" herramienta.

### Canal Secundario: Venta Directa B2B

Para empresas tech y de servicios (100-500 empleados) donde HR tiene presupuesto propio de bienestar.

**Perfil del cliente ideal**:
- Empresa de servicios o tecnologia en Chile
- 100-500 empleados
- HR Manager con presupuesto de bienestar (>$5K USD/ano)
- Ha aplicado ISTAS-21 y salio en riesgo medio o alto
- Tiene problema visible de rotacion o ausentismo

**Estrategia de venta**:
- Approach: pilot-first (30 dias gratis, sin compromiso)
- Demo: mostrar dashboard con datos del piloto como prueba de valor
- Conversion: despues de 30 dias, presentar ROI al CFO (reduccion estimada de rotacion)
- Contrato: SaaS mensual o anual con descuento

### Canal Terciario: Platanus Venture

Acceleradora/VC chilena que invierte en startups early-stage. No es un canal de distribucion directo, pero su red da acceso a primeros clientes y mentores.

Ver detalle en `08_strategy/platanus-venture.md`.

---

## Estrategia de Pricing

Modelo SaaS por empleado por mes, escalonado por tamano de empresa:

| Tier | Tamano | Precio | Incluye |
|------|--------|--------|---------|
| **Starter** | < 100 empleados | USD 6/emp/mes | App + check-in + coaching basico + dashboard HR basico |
| **Professional** | 100-500 empleados | USD 10/emp/mes | + Integracion HRIS + alertas tempranas + coaching LLM cloud |
| **Enterprise** | 500+ empleados | USD 14/emp/mes | + API + SSO + modelo predictivo + soporte dedicado |
| **Mutual (white-label)** | Volumen | USD 2-4/emp/mes | Plataforma completa bajo marca de la mutual. Contrato minimo $300K/ano. |

**Logica del pricing**:
- Starter: lo suficientemente bajo para que HR lo apruebe sin CFO
- Professional: sweet spot — suficiente valor para justificar el precio, suficiente margen para el negocio
- Enterprise: features avanzadas que solo empresas grandes necesitan y pueden pagar
- Mutual: volumen alto compensa precio bajo. CAC casi cero.

**Piloto gratuito**: 30 dias sin costo para las primeras 5 empresas. El piloto es la herramienta de venta.

---

## Estrategia de Marketing

### LinkedIn Thought Leadership

| Tipo de contenido | Frecuencia | Autor | Objetivo |
|-------------------|-----------|-------|----------|
| Post sobre datos de salud mental laboral en Chile | 2/semana | Jose | Posicionar como experto en datos de salud mental |
| Post sobre gamificacion y engagement en wellness | 1/semana | Edgar | Posicionar la mecanica del pet como innovacion |
| Articulo largo sobre ISTAS-21 y sus limitaciones | 1/mes | Ambos | SEO + credibilidad + generar leads HR |
| Case study del piloto (anonimizado) | 1 (despues del piloto) | Ambos | Prueba social para conversion |

### Partnerships Estrategicos

| Partner | Tipo | Valor para Hachiko |
|---------|------|-------------------|
| Programas de psicologia organizacional (universidades) | Academico | Validacion clinica + acceso a asesores + credibilidad |
| Consultoras de RRHH en Chile | Referral | Leads calificados de empresas con problemas de bienestar |
| Proveedores de HRIS (Buk, BambooHR) | Integracion | Canal de distribucion + datos complementarios |
| SUSESO / ACHS (institucional) | Regulatorio | Credibilidad + acceso a datos de ISTAS-21 |

### Content Marketing: ISTAS-21

El ISTAS-21 es la puerta de entrada natural:
- Crear guia practica: "Que hacer despues de que tu empresa sale en riesgo alto en ISTAS-21"
- Posicionar Hachiko como la respuesta a la pregunta que todas las empresas se hacen post-ISTAS-21
- SEO para keywords: "intervencion ISTAS-21", "riesgo psicosocial Chile", "herramienta digital salud mental laboral"

---

## Timeline Go-to-Market

```
MES 1-3: VALIDACION
────────────────────
- Smoke test + concierge MVP (ver experimentos de validacion)
- Desarrollo del MVP
- 5 empresas contactadas para piloto
- Piloto con 1-2 empresas (30 dias)
- Entrevistas con 5 HR Managers (dashboard mockup)
- LinkedIn: comenzar publicaciones regulares
- Objetivo: validar hipotesis central

MES 3-6: PRIMEROS CLIENTES
───────────────────────────
- Convertir empresas piloto a clientes pagos
- Contactar 10 empresas adicionales via LinkedIn + red
- Aplicar a Platanus Venture
- Primer contacto con ACHS (area de prevencion)
- Publicar case study del piloto
- Objetivo: $5K-15K MRR

MES 6-12: CANAL MUTUAL
───────────────────────
- Piloto con ACHS (10 empresas afiliadas)
- White-label basico operativo
- Integracion HRIS (Buk primer target)
- Primer modelo estadistico de riesgo
- Primer benchmark de industria (draft)
- Objetivo: $25K-60K MRR

MES 12-18: ESCALA
─────────────────
- Contrato formal con mutual
- Expansion a 20-50 empresas
- Publicar benchmark: "Bienestar Laboral en Tech Chile 2027"
- Explorar Mexico (NOM-035)
- Objetivo: $80K-150K MRR ($1M-1.8M ARR)
```

---

## Embudo de Ventas

```
AWARENESS
  LinkedIn posts + content ISTAS-21 + referrals
        │
        ▼
INTERES
  Landing page + waitlist + demo request
        │
        ▼
EVALUACION
  Reunion con HR: one-pager + dashboard mockup
        │
        ▼
PILOTO
  30 dias gratis, onboarding asistido
        │
        ▼
DECISION
  Presentacion de resultados a HR + CFO
  ROI: participacion, NPS, tendencias, reduccion estimada de rotacion
        │
        ▼
CONVERSION
  Contrato SaaS (mensual o anual con descuento)
        │
        ▼
EXPANSION
  Mas departamentos, mas features, tier upgrade
```

---

> Documento maestro: [[hachiko-proyecto-maestro]] (secciones 7-8)
> Preparacion Platanus: ver `08_strategy/platanus-venture.md`
> Plan B datos: ver `08_strategy/plan-b-datos-empresas.md`
> Equipo: [[perfil-edgar-recursos-estrategicos]] · [[perfil-jose-recursos-estrategicos]]
> Contexto: [[espacio-de-oportunidad]]
