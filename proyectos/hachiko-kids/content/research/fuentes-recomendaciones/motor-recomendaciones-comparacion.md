---
title: "Motor de Recomendaciones — Comparación de Fuentes y Arquitectura"
date: 2026-04-06
tags: [producto, estrategia, wellness]
status: completado
---

# Motor de Recomendaciones Determinístico — Comparación de Fuentes

## Principio de diseño

El motor de recomendaciones de Hachiko Kids es **determinístico**: reglas IF-THEN basadas en datos conductuales del niño, respaldadas por fuentes institucionales verificables. **No usa IA generativa** para crear recomendaciones — cada tip está pre-catalogado y su fuente es trazable.

```
INPUT: datos del check-in diario (emoción, elección conductual, dimensión, micro-actividad)
REGLAS: catálogo de recomendaciones con condiciones de activación
OUTPUT: tip específico para el padre con fuente institucional citada
```

---

## Tabla maestra de evaluación

| # | Plataforma | Sirve para motor | Tipo de aporte | Respaldo institucional | Datos estructurados |
|---|-----------|:---:|---|---|---|
| 1 | **Parvularia MINEDUC** | **SÍ** | Tips + framework + legitimación | Gobierno Chile (máximo) | 14 fichas + DIA 4 dimensiones |
| 2 | **UNICEF Chile** | **SÍ** | Tips + framework + datos + derivación | ONU + Gobierno Chile (máximo) | CCD protocolo + SITAN datos |
| 3 | **América por la Infancia (FAI)** | **SÍ** | Tips + framework + instrumentos | PUC Chile + JUNJI (alto) | E2P escala + ODISEA protocolo |
| 4 | EducarChile | **PARCIAL** | Framework + legitimación curricular | Fundación Chile + MINEDUC (alto) | 5 habilidades CASEL-like |
| 5 | Psicología y Mente | **PARCIAL** | Tips prácticos (secundaria) | Psicólogos colegiados (medio) | Listas de técnicas en artículos |
| 6 | Hub MinCiencia | **PARCIAL** | Recursos externos + validación | Gobierno Chile (máximo) | 12 cápsulas temáticas |
| 7 | Convivencia MINEDUC | **PARCIAL** (B2B) | Marco regulatorio PBSE | Gobierno Chile (máximo) | Ley + orientaciones |
| 8 | Save the Children | **PARCIAL** | Tips genéricos (secundaria) | ONG internacional (alto) | Guía descargable |
| 9 | Chile Crece Contigo/PASMI | **PARCIAL** | Derivación a salud pública | Gobierno Chile (máximo) | Solo como recurso de referencia |
| 10 | UNICEF En Mi Mente | **MARGINAL** | Recurso externo recomendable | ONU (máximo) | Podcast + web |
| 11 | BD Escolar MINEDUC | **NO** | Canal de distribución | Gobierno Chile (máximo) | Biblioteca de libros |
| 12 | Explora Chile | **NO** | Modelo B2B + referencia | MinCiencia (alto) | Ciencia, no emocional |
| 13 | Emotilab (Santillana) | **NO** | Competidor | Santillana (medio) | Propietario |
| 14 | Smile and Learn | **NO** | Competidor indirecto | Privado (bajo) | Propietario |
| 15 | Lingokids | **NO** | Competidor indirecto | Privado (bajo) | Propietario |
| 16 | Mightier | **NO** | Referente de modelo | Harvard (máximo) | Propietario |
| 17 | Headspace Kids | **NO** | Competidor indirecto | Privado (medio) | Propietario |
| 18 | ClassDojo | **NO** | Canal/aliado | Privado (medio) | Propietario |

---

## Clasificación por nivel de aporte

### TIER 1 — Fuentes primarias del motor (reglas directas)

Estas fuentes alimentan directamente el catálogo de recomendaciones con reglas determinísticas:

#### Parvularia MINEDUC
- **14 fichas del Maletín Socioemocional** → ~14 reglas de recomendación directas
- **DIA Parvularia (4 dimensiones)** → mapeo 1:1 con dimensiones Hachiko
- **BCEP** → legitimación curricular de todas las recomendaciones
- **Contención emocional PDF** → reglas para crisis/pataletas
- **Cobertura edad**: 0-6 años (perfecto para segmento 4-6 de Hachiko)

#### UNICEF Chile
- **CCD Framework** → reglas de cuidado responsivo + estimulación
- **"Cuidar y conectar"** → tips accionables por situación emocional
- **Lineamientos socioemocionales** → reglas para contexto escolar (B2B)
- **SITAN 2025** → umbrales y alertas informados por datos poblacionales
- **Cobertura edad**: 0-12 años (toda la población Hachiko)

#### América por la Infancia (FAI)
- **E2P 2.0** → reglas basadas en competencias parentales
- **Modelo ODISEA** → metodologías adaptables a misiones/tips
- **Teoría del apego** → reglas de refuerzo positivo + detección de riesgo
- **CHQ** → umbrales de alerta para apego desorganizado
- **Cobertura edad**: 0-12 años
- **NOTA**: Requiere acuerdo de licencia para instrumentos

---

### TIER 2 — Fuentes secundarias (complemento + framework)

Estas fuentes aportan framework de organización, tips complementarios o legitimación:

| Fuente | Aporte específico |
|--------|------------------|
| **EducarChile** | 5 habilidades socioemocionales como organizador de dimensiones + legitimación curricular (Orientación) |
| **Psicología y Mente** | Técnicas prácticas (tortuga, semáforo, frasco de calma, juegos) — tips accionables para padres |
| **Hub MinCiencia** | Recurso externo recomendable ("MinCiencia tiene cápsulas de mindfulness para tu hijo") |
| **Convivencia MINEDUC** | Marco PBSE para canal B2B — colegios obligados a implementar bienestar |
| **Save the Children** | Tips sobre ansiedad y disciplina positiva — fuente complementaria |

---

### TIER 3 — Fuentes de derivación (no contenido, sí referencia)

| Fuente | Cuándo se usa |
|--------|-------------|
| **PASMI / Chile Crece Contigo** | Cuando se detecta patrón de riesgo → derivar a salud pública |
| **UNICEF En Mi Mente** | Cuando padre quiere profundizar → recomendar podcast/plataforma |
| **BD Escolar** | Cuando se recomienda leer juntos → link a biblioteca gratuita |

---

### NO SIRVEN para recomendaciones

| Fuente | Razón | Valor alternativo |
|--------|-------|------------------|
| **Explora Chile** | Sin contenido emocional | Modelo de llegada a colegios |
| **Emotilab** | Competidor directo | Análisis competitivo |
| **Smile and Learn** | Competidor indirecto | Referencia de features/pricing |
| **Lingokids** | Competidor indirecto | Referencia de ASO/pricing |
| **Mightier** | Propietario + solo USA | Validación del modelo determinístico |
| **Headspace Kids** | Competidor + genérico | Referencia de segmentación por edad |
| **ClassDojo** | Canal, no contenido | Aliado potencial de distribución |

---

## Arquitectura del catálogo de recomendaciones

### Estructura propuesta por recomendación

```yaml
id: "REC-001"
trigger:
  dimension: "regulacion_emocional"
  condition: "emocion == 'angry' AND choice == 'agresiva' FOR 3+ days"
  age_group: [4, 5, 6]
recommendation:
  text_padre: "Técnica del semáforo: Rojo=Para, Amarillo=Piensa, Verde=Actúa. Practícalo en momentos de calma."
  text_profesional: "Patrón de impulsividad sostenida — considerar intervención de autorregulación"
  micro_actividad: "Respirar con Luna"
priority: "alta"
type: "tip_crianza"  # tip_crianza | refuerzo_positivo | alerta | derivacion | recurso_externo
source:
  primary: "Subsecretaría de Educación Parvularia — Maletín Socioemocional"
  secondary: "Psicología y Mente — Técnicas de autocontrol"
  framework: "BCEP — Desarrollo Personal y Social"
evidence_level: "gubernamental"  # gubernamental | institucional | académica | divulgativa
```

### Tipos de recomendación

| Tipo | Cuándo se activa | Fuentes principales |
|------|-----------------|-------------------|
| **tip_crianza** | Patrón conductual detectado | MINEDUC Parvularia, UNICEF, FAI, PsicologíayMente |
| **refuerzo_positivo** | Patrón positivo sostenido | UNICEF (CCD), FAI (E2P), EducarChile |
| **alerta** | Múltiples indicadores de riesgo | FAI (CHQ), UNICEF (SITAN umbrales) |
| **derivacion** | Riesgo alto confirmado | PASMI, Chile Crece Contigo, directorio profesional |
| **recurso_externo** | Padre quiere profundizar | Hub MinCiencia, UNICEF En Mi Mente, BDEscolar |
| **regulatorio_b2b** | Colegio necesita compliance | Convivencia MINEDUC (PBSE) |

---

## Estimación de catálogo inicial

Basado en las fuentes Tier 1 + Tier 2:

| Fuente | Reglas estimadas | Tipo principal |
|--------|:---:|---|
| Maletín Socioemocional MINEDUC | ~14 | tip_crianza |
| Contención emocional MINEDUC | ~6 | tip_crianza + alerta |
| UNICEF CCD + guías | ~12 | tip_crianza + refuerzo |
| FAI E2P + ODISEA | ~10 | tip_crianza + alerta |
| Psicología y Mente técnicas | ~9 | tip_crianza |
| EducarChile habilidades | ~5 | refuerzo_positivo |
| Save the Children guía | ~4 | tip_crianza |
| Hub MinCiencia | ~3 | recurso_externo |
| PASMI/Chile Crece Contigo | ~3 | derivacion |
| Convivencia MINEDUC | ~2 | regulatorio_b2b |
| **TOTAL estimado** | **~68 reglas** | |

**68 reglas iniciales** es suficiente para un MVP determinístico. Con 5 dimensiones × ~14 reglas por dimensión = cobertura amplia para los patrones más comunes.

---

## Flujo del motor

```
Niño completa check-in
  │
  ├─ Almacenar: {emoción, elección, dimensión, timestamp}
  │
  ├─ Calcular patrones semanales:
  │   ├─ emoción dominante (moda de 7 días)
  │   ├─ variedad emocional (# emociones distintas)
  │   ├─ tendencia por dimensión (% positivas/negativas)
  │   ├─ uso de micro-actividades (frecuencia)
  │   └─ consistencia (días activos / 7)
  │
  ├─ Evaluar reglas del catálogo:
  │   ├─ Prioridad 1: alertas (patron_riesgo)
  │   ├─ Prioridad 2: tips_crianza (patrones negativos)
  │   ├─ Prioridad 3: refuerzo_positivo (patrones positivos)
  │   └─ Prioridad 4: recursos_externos (engagement alto)
  │
  ├─ Seleccionar recomendación:
  │   ├─ Máx 1 por dimensión por semana (no saturar)
  │   ├─ No repetir misma recomendación en 4 semanas
  │   ├─ Preferir fuentes gubernamentales (Tier 1)
  │   └─ Alternar entre tip_crianza y refuerzo_positivo
  │
  └─ Entregar en resumen semanal:
      ├─ Dato + Acción (arriba, ya existe en UI)
      ├─ 1-2 tips por dimensión en cards expandibles
      └─ Fuente citada al pie de cada tip
```

---

## Próximos pasos

1. **Extraer contenido** de Maletín Socioemocional (14 fichas) → catalogar en formato YAML
2. **Descargar y procesar** guía "Cuidar y conectar" de UNICEF → extraer tips accionables
3. **Contactar FAI** para explorar acuerdo de uso de framework E2P (no el instrumento completo, sino principios)
4. **Mapear reglas** a las 5 dimensiones de Hachiko Kids + 2 grupos de edad
5. **Implementar catálogo** en Supabase como tabla `recommendations` con campos del schema YAML
6. **Testear con familias piloto** — ¿los tips se sienten útiles y accionables?

---

> Contexto: [[hachiko-proyecto-maestro]]
> Motor: [[01-parvularia-mineduc]] · [[02-unicef-chile]] · [[03-america-por-la-infancia-fai]]
> Equipo: [[perfil-edgar-recursos-estrategicos]] · [[perfil-jose-recursos-estrategicos]]
