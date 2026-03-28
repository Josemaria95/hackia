---
title: "Cap Table — Hachiko Kids"
date: 2026-03-28
tags: [estrategia, financiamiento]
status: en-progreso
---

# Cap Table — Hachiko Kids

Modelo de estructura accionaria para visualizar la dilución por ronda y comparar escenarios de financiamiento.

---

## 1. Estado base (pre-funding)

Base de 10M acciones (estándar startups LATAM pre-seed).

**Distribución**: 70% co-founders / 20% pool inversores / 10% ESOP-operaciones
**Split founders**: 50/50 (35% cada uno)

| Categoría | Accionista | Acciones | % |
|---|---|---|---|
| Co-founders | Edgar | 3.500.000 | 35% |
| Co-founders | Jose | 3.500.000 | 35% |
| Pool inversores | Reservado (ángeles / aceleradoras) | 2.000.000 | 20% |
| ESOP / Operaciones | Reservado (empleados, advisors) | 1.000.000 | 10% |
| **Total** | | **10.000.000** | **100%** |

---

## 2. Escenarios de dilución por aceleradora

La equity cedida sale del **pool del 20%** reservado. Mientras el pool no se agote, los founders **no se diluyen**.

| Escenario | Inversión | Equity cedida | Edgar | Jose | Pool restante | ESOP | Inversor |
|---|---|---|---|---|---|---|---|
| **Base (sin inversión)** | — | 0% | 35% | 35% | 20% | 10% | 0% |
| **A: Start-Up Chile Ignite** | $49K USD | 0% | 35% | 35% | 20% | 10% | 0% |
| **B: Platanus** | $200K USD | 7% | 35% | 35% | 13% | 10% | 7% |
| **C: Y Combinator S26** | $500K USD | 7% + MFN | 35% | 35% | 13% | 10% | 7% |
| **D: Techstars Healthcare** | $220K USD | 5% | 35% | 35% | 15% | 10% | 5% |
| **E: Rockstart LATAM** | $100K USD | 6% | 35% | 35% | 14% | 10% | 6% |
| **F: Embarca** | $50K USD | 10% | 35% | 35% | 10% | 10% | 10% |
| **G: Magical** | $125K USD | SAFE | 35% | 35% | 20% | 10% | 0%* |
| **H: UTEC Ventures** | $25K USD | Nota conv. | 35% | 35% | 20% | 10% | 0%* |

*SAFEs y notas convertibles no diluyen hasta que convierten en la siguiente ronda priced.

→ Con el pool del 20%, los founders **no se diluyen** mientras la equity cedida acumulada sea ≤ 20%.

---

## 3. Escenarios combinados (más probables)

| Combinación | Equity total cedida | Edgar | Jose | Pool restante | ESOP | Inversores |
|---|---|---|---|---|---|---|
| **SUChile + Platanus** | 0% + 7% = 7% | 35% | 35% | 13% | 10% | 7% |
| **SUChile + YC** | 0% + 7% = 7% | 35% | 35% | 13% | 10% | 7% |
| **Platanus + Rockstart** | 7% + 6% = 13% | 35% | 35% | 7% | 10% | 13% |
| **YC + Techstars** | 7% + 5% = 12% | 35% | 35% | 8% | 10% | 12% |
| **SUChile + Platanus + Rockstart** | 0% + 7% + 6% = 13% | 35% | 35% | 7% | 10% | 13% |
| **Embarca + Rockstart** | 10% + 6% = 16% | 35% | 35% | 4% | 10% | 16% |
| **YC + Techstars + Rockstart** | 7% + 5% + 6% = 18% | 35% | 35% | 2% | 10% | 18% |
| **⚠️ Pool agotado** | > 20% | < 35% | < 35% | 0% | 10% | > 20% |

> **Alerta**: si la equity cedida acumulada supera el 20%, los founders comienzan a diluirse proporcionalmente.

---

## 4. Tabla waterfall (escenarios de exit)

Distribución de valor asumiendo escenario **SUChile + Platanus** (7% cedida del pool).

| Exit valuation | Edgar (35%) | Jose (35%) | Inversor (7%) | Pool (13%) | ESOP (10%) |
|---|---|---|---|---|---|
| $1M USD | $350K | $350K | $70K | $130K | $100K |
| $5M USD | $1.75M | $1.75M | $350K | $650K | $500K |
| $10M USD | $3.5M | $3.5M | $700K | $1.3M | $1M |
| $50M USD | $17.5M | $17.5M | $3.5M | $6.5M | $5M |

> **Nota**: waterfall simplificado (distribución pro-rata). Con SAFEs y preferencias de liquidación 1x, los inversores recuperan primero su inversión antes de la distribución pro-rata. Calcular con asesor legal antes de firmar.

---

## 5. Instrumentos pendientes de conversión

SAFEs y notas convertibles no diluyen en el momento de la inversión — convierten en acciones en la siguiente ronda priced.

| Instrumento | Fuente | Monto | Tipo | Cap / Términos | Conversión |
|---|---|---|---|---|---|
| SAFE 7% fijo | YC ($125K tramo 1) | $125K USD | SAFE post-money | 7% fijo del cap table | En siguiente ronda priced |
| MFN SAFE | YC ($375K tramo 2) | $375K USD | MFN uncapped | Mejores términos del siguiente SAFE | En siguiente ronda priced |
| Equity directo 5% | Techstars ($20K) | $20K USD | Equity directo | 5% fijo | Inmediato al aceptar |
| MFN SAFE | Techstars ($200K) | $200K USD | MFN uncapped | Mejores términos del siguiente SAFE | En siguiente ronda priced |
| Nota convertible | UTEC Ventures ($25K) | $25K USD | Nota conv. | Cap $1M USD | En siguiente ronda priced |
| Nota convertible | Magical ($125K) | $125K USD | Nota conv. | Por definir | En siguiente ronda priced |

> **Implicancia YC**: el tramo MFN de $375K puede convertir en condiciones más favorables para YC si un siguiente SAFE tiene mejor cap. Considerar esto al negociar rondas futuras.

---

## 6. Checklist pendiente

- [ ] Constituir persona jurídica en Chile (requerido para CORFO, ChileMass, Platanus)
- [ ] Formalizar acuerdo de founders (vesting, cliff, buy-back)
- [ ] Definir vesting schedule (recomendado: 4 años, cliff 1 año)
- [ ] Revisar términos MFN con asesor legal antes de firmar YC o Techstars
- [ ] Decidir si el pool de 10% ESOP se asigna antes o después de cada ronda

---

→ Convocatorias activas: [[convocatorias]]
→ Calendario de postulaciones: [[calendario-convocatorias]]
→ Equipo: [[perfil-edgar-recursos-estrategicos]] · [[perfil-jose-recursos-estrategicos]]
→ Contexto: [[espacio-de-oportunidad]]
