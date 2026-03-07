---
title: "Deteccion de Estres via Smartphone — Digital Phenotyping"
date: 2026-03-06
tags: [mercado, wellness]
status: en-progreso
---

# Deteccion de Estres via Smartphone — Digital Phenotyping

## 1. Que es Digital Phenotyping

**Definicion** (Jukka-Pekka Onnela, Harvard T.H. Chan School of Public Health, 2016):

> "Digital phenotyping es la cuantificacion momento a momento del fenotipo humano a nivel individual, in situ, utilizando datos de sensores de smartphones y otros dispositivos digitales personales."

El concepto se basa en una premisa simple: la forma en que una persona usa su telefono cambia cuando su estado mental cambia. Estos cambios son medibles, continuos y no requieren que el usuario haga nada activamente.

A diferencia de los cuestionarios (que miden lo que el usuario reporta), el digital phenotyping mide lo que el usuario hace. Esto elimina el sesgo de deseabilidad social y permite deteccion continua sin esfuerzo consciente.

---

## 2. Senales Pasivas

Las senales pasivas son datos que el smartphone recolecta sin intervencion del usuario. Son el nucleo del digital phenotyping.

### 2.1 Acelerometro (patrones de movimiento)

| Dimension | Detalle |
|-----------|---------|
| **Que mide** | Movimiento fisico, nivel de actividad, patrones de agitacion o quietud |
| **Correlacion clinica** | La reduccion de actividad fisica es un predictor robusto de depresion (OR = 1.73). La agitacion psicomotora se asocia con ansiedad (Saeb et al., 2015) |
| **Confiabilidad** | Media-Alta. Requiere calibracion por tipo de trabajo (sedentario vs. activo) |
| **Datos relevantes** | Pasos/hora, variabilidad de movimiento intra-dia, tiempo de quietud prolongada |
| **Estudio clave** | StudentLife (Wang et al., 2014, Dartmouth): correlacion significativa entre actividad fisica reducida y puntajes elevados de depresion (PHQ-9) en estudiantes universitarios |

### 2.2 Dinamica de escritura (typing dynamics)

| Dimension | Detalle |
|-----------|---------|
| **Que mide** | Velocidad de tecleo, tasa de errores, tiempo entre teclas (keystroke latency), presion en pantalla |
| **Correlacion clinica** | La velocidad de tecleo disminuye significativamente en estados depresivos. La tasa de errores aumenta con estres agudo. El backspace rate se correlaciona con rumiacion (Mastoras et al., 2019) |
| **Confiabilidad** | Media. Alta variabilidad entre individuos. Requiere baseline personal de al menos 2 semanas |
| **Datos relevantes** | Palabras/minuto, errores/100 caracteres, latencia inter-tecla, uso de autocorrector |
| **Estudio clave** | BiAffect (Zulueta et al., 2018, Univ. of Illinois): cambios en keystroke dynamics predicen episodios maniacos y depresivos en trastorno bipolar con AUC = 0.78 |

### 2.3 Uso de pantalla (screen usage)

| Dimension | Detalle |
|-----------|---------|
| **Que mide** | Tiempo total de pantalla, frecuencia de desbloqueo, duracion de sesiones, horarios de uso, cambio entre apps |
| **Correlacion clinica** | Uso excesivo de pantalla (especialmente nocturno) se asocia con peores outcomes de salud mental (Twenge et al., 2017). La fragmentacion de uso (muchas sesiones cortas) indica inquietud o evitacion |
| **Confiabilidad** | Alta. Datos objetivos, consistentes, faciles de recolectar |
| **Datos relevantes** | Horas de pantalla/dia, desbloqueos/dia, primera y ultima interaccion del dia, app switching rate |
| **Estudio clave** | Rozgonjuk et al. (2018): frecuencia de desbloqueo (no duracion total) es mejor predictor de estres percibido |

### 2.4 GPS (patrones de movilidad)

| Dimension | Detalle |
|-----------|---------|
| **Que mide** | Radio de movilidad, diversidad de lugares visitados, tiempo en casa vs. fuera, regularidad de rutinas |
| **Correlacion clinica** | La reduccion del radio de movilidad es un marcador robusto de depresion. La perdida de regularidad en rutinas se asocia con ansiedad y estres (Saeb et al., 2015) |
| **Confiabilidad** | Alta para deteccion de cambios. Baja para diagnostico absoluto. |
| **Datos relevantes** | Radio de giro (radius of gyration), entropia de ubicacion, tiempo en "home cluster", numero de clusters unicos/dia |
| **Estudio clave** | Saeb et al. (2015): GPS features explicaron el 39.3% de la varianza en PHQ-9 scores |
| **Limitacion critica** | Alto consumo de bateria. Implicaciones de privacidad severas. Hachiko deberia usar esto con precaucion maxima o como opt-in explicito. |

### 2.5 Patrones de sueno (phone usage at night)

| Dimension | Detalle |
|-----------|---------|
| **Que mide** | Hora de ultima interaccion, hora de primera interaccion, desbloqueos nocturnos, duracion inferida de sueno |
| **Correlacion clinica** | El sueno fragmentado y la latencia de sueno elevada son marcadores establecidos de depresion y ansiedad (Baglioni et al., 2011). El uso nocturno del telefono predice peor calidad de sueno (Exelmans & Van den Bulck, 2016) |
| **Confiabilidad** | Media-Alta. No mide sueno real, sino proxy via uso del telefono |
| **Datos relevantes** | Ventana de inactividad nocturna, desbloqueos entre 00:00-06:00, regularidad de horarios |
| **Estudio clave** | Chen et al. (2019): phone-derived sleep measures correlacionan con Pittsburgh Sleep Quality Index (r = 0.64) |

### 2.6 Comportamiento social (llamadas y mensajes)

| Dimension | Detalle |
|-----------|---------|
| **Que mide** | Frecuencia de llamadas (entrantes/salientes), duracion de llamadas, frecuencia de mensajes, diversidad de contactos |
| **Correlacion clinica** | El aislamiento social (reduccion de llamadas salientes y diversidad de contactos) es un predictor fuerte de depresion. La evitacion de llamadas (rechazar entrantes) se asocia con ansiedad social (Wang et al., 2014) |
| **Confiabilidad** | Media. Los patrones de comunicacion varian mucho por edad, cultura y tipo de trabajo |
| **Datos relevantes** | Llamadas salientes/dia, contactos unicos/semana, proporcion entrantes/salientes, longitud promedio de mensajes |
| **Estudio clave** | StudentLife (Wang et al., 2014): la diversidad de interacciones sociales (medida por Bluetooth proximity + llamadas) correlaciono significativamente con bienestar subjetivo |

---

## 3. Senales Activas

Las senales activas requieren participacion consciente del usuario, pero pueden disenarse para ser minimas y naturales.

### 3.1 Analisis de voz

| Dimension | Detalle |
|-----------|---------|
| **Que mide** | Tono (pitch), ritmo del habla, energia vocal, pausas, variabilidad prosodica |
| **Correlacion clinica** | La depresion se asocia con reduccion de pitch, menor variabilidad prosodica y ritmo mas lento. La ansiedad se asocia con pitch elevado y ritmo acelerado (Cummins et al., 2015) |
| **Confiabilidad** | Media. Sensible a ruido ambiental, idioma, contexto cultural |
| **En Hachiko** | "Hablale a tu pet" — mensajes de voz cortos que el SLM analiza localmente |

### 3.2 Micro check-ins via juego

| Dimension | Detalle |
|-----------|---------|
| **Que mide** | Estado subjetivo reportado, pero camuflado como interaccion con la mascota |
| **Correlacion clinica** | Los EMA (Ecological Momentary Assessments) tienen alta validez ecologica cuando son breves y frecuentes (Shiffman et al., 2008) |
| **Confiabilidad** | Alta (si se mantienen cortos: 1-3 preguntas, menos de 90 segundos) |
| **En Hachiko** | "Como amanecio tu pet?" = WHO-5 camuflado. "Cuanta energia tiene?" = PHQ-2 proxy. Ver [[instrumentos-clinicos]] |

### 3.3 Expresion facial (potencial futuro)

| Dimension | Detalle |
|-----------|---------|
| **Que mide** | Unidades de accion facial (FACS), micro-expresiones, frecuencia de sonrisas |
| **Correlacion clinica** | Las expresiones faciales reflejan estados emocionales con precision moderada (Girard et al., 2014) |
| **Confiabilidad** | Baja-Media. Sesgos culturales significativos. Implicaciones de privacidad extremas. |
| **En Hachiko** | NO implementar en fases iniciales. Demasiado invasivo. Evaluar en Fase 3+ solo como opt-in. |

---

## 4. Frameworks y Estudios Fundamentales

### StudentLife (Dartmouth College, 2014)

El estudio seminal de digital phenotyping. Wang et al. recolectaron datos de smartphone de 48 estudiantes durante 10 semanas. Hallazgos clave:
- La actividad fisica, patrones de sueno, frecuencia de conversaciones y movilidad GPS correlacionaron significativamente con depresion (PHQ-9), estres (PSS), soledad y desempeno academico.
- Los datos pasivos del smartphone fueron comparables en valor predictivo a los cuestionarios auto-reportados.

### AWARE Framework

Framework open-source para recoleccion de datos de sensores de smartphone, desarrollado por Denzil Ferreira (Univ. of Oulu). Utilizado en mas de 200 estudios de digital phenotyping. Proporciona plugins para acelerometro, GPS, pantalla, llamadas, mensajes, WiFi, Bluetooth y mas.

### Mindstrong Health

Startup que desarrollo tecnologia de digital phenotyping basada en keystroke dynamics y screen interactions. Demostro que patrones de uso del smartphone podian predecir recaidas en pacientes con esquizofrenia y depresion. Cerro en 2023 por dificultades de modelo de negocio, pero la evidencia cientifica fue validada externamente.

### CrossCheck (Cornell, 2016)

Ben-Zeev et al. utilizaron datos pasivos de smartphone para predecir recaidas en pacientes con esquizofrenia. El sistema logro predicciones con 2-3 semanas de anticipacion basandose en cambios en movilidad, sueno y patrones sociales.

---

## 5. Tabla Resumen de Senales

| Senal | Tipo | Confiabilidad | Consumo bateria | Riesgo privacidad | Uso en Hachiko |
|-------|------|--------------|-----------------|-------------------|----------------|
| Acelerometro | Pasiva | Media-Alta | Bajo | Bajo | Si — estado de actividad del pet |
| Typing dynamics | Pasiva | Media | Bajo | Medio | Evaluar en Fase 2 |
| Screen usage | Pasiva | Alta | Bajo | Medio | Si — patron de descanso del pet |
| GPS | Pasiva | Alta | Alto | Alto | Solo opt-in explicito, Fase 2+ |
| Sueno (phone) | Pasiva | Media-Alta | Bajo | Bajo | Si — "Tu pet durmio bien?" |
| Social (llamadas) | Pasiva | Media | Bajo | Alto | Solo metadata anonimizada |
| Voz | Activa | Media | Bajo | Medio | "Hablale a tu pet" (opt-in) |
| Micro check-ins | Activa | Alta | Nulo | Bajo | Core del producto |
| Expresion facial | Activa | Baja-Media | Medio | Muy alto | NO en Fases 1-2 |

---

## 6. Limitaciones del Digital Phenotyping

### Consumo de bateria
Los sensores continuos (especialmente GPS y acelerometro a alta frecuencia) pueden drenar la bateria significativamente. Hachiko debe usar muestreo inteligente: frecuencia alta solo cuando hay senales de cambio, frecuencia baja en periodos estables.

### Privacidad
El digital phenotyping recolecta datos extremadamente sensibles. En el contexto laboral (B2B2C), el riesgo de percepcion de vigilancia es critico. Mitigacion: procesamiento local (SLM), nunca subir datos crudos, consent granular, opt-out en cualquier momento.

### Diferencias culturales
Los estudios de referencia son predominantemente de EEUU y Europa. Los patrones de uso del smartphone varian significativamente entre culturas. LATAM tiene particularidades: uso intensivo de WhatsApp, menor penetracion de email, patrones de movilidad distintos. Se requiere validacion local.

### Sesgo de smartphone
El digital phenotyping asume uso constante del smartphone. Empleados con roles operativos (manufactura, logistica, salud) pueden tener patrones de uso radicalmente distintos a los de oficina. El sistema debe detectar y adaptarse al "tipo de usuario".

### Cold start
Se necesitan 2-4 semanas de datos baseline antes de que el sistema pueda detectar anomalias con confianza. Durante ese periodo, el valor del producto debe venir del juego y el coaching, no de la prediccion.

---

## 7. Como Hachiko Integra Digital Phenotyping

```
SENALES PASIVAS (automaticas, en background)
├── Screen usage     → "Tu pet necesita descansar" (uso excesivo nocturno)
├── Sueno (phone)    → "Tu pet durmio inquieto" (desbloqueos nocturnos)
├── Acelerometro     → "Tu pet quiere caminar" (sedentarismo detectado)
└── Hora de check-in → Patron de regularidad / irregularidad

                    ↓ combinadas con

SENALES ACTIVAS (camufladas en el juego)
├── "Como amanecio tu pet?"     → WHO-5 semanal
├── "Cuanta energia tiene?"     → PHQ-2 diario
├── "Tu pet esta preocupado"    → GAD-7 items seleccionados
└── Decision de cuidado del pet → MBI proxy (burnout)

                    ↓ procesadas por

SLM LOCAL (90% de interacciones)
├── Calcula risk score local
├── Genera micro-coaching inmediato
├── Actualiza estado visual del pet
└── Decide si escalar al LLM cloud

                    ↓ solo si hay trigger

LLM CLOUD (10% de interacciones)
├── Interpretacion de patrones complejos
├── Coaching profundo personalizado
└── Actualizacion del modelo agregado
```

El estado de la mascota es el **frontend emocional** del digital phenotyping. El usuario ve a su pet cansado, estresado o contento — no ve graficas de acelerometro o scores de riesgo. La traduccion de datos a emocion del pet es lo que hace que el sistema funcione sin que se sienta como vigilancia.

---

## 8. Referencias

Las referencias completas estan en [[referencias-bibliograficas]]. Los estudios mas relevantes para este documento:

- Wang, R. et al. (2014). StudentLife: Assessing Mental Health, Academic Performance and Behavioral Trends of College Students Using Smartphones. *UbiComp '14*.
- Saeb, S. et al. (2015). Mobile Phone Sensor Correlates of Depressive Symptom Severity in Daily-Life Behavior. *Journal of Medical Internet Research*.
- Ben-Zeev, D. et al. (2016). CrossCheck: Integrating Self-Report, Behavioral Sensing, and Smartphone Use. *Psychiatric Rehabilitation Journal*.
- Zulueta, J. et al. (2018). Predicting Mood Disturbance Severity with Mobile Phone Keystroke Metadata. *Journal of Biomedical Informatics*.
- Onnela, J.-P. & Rauch, S. L. (2016). Harnessing Smartphone-Based Digital Phenotyping. *Neuropsychopharmacology*.

---

> Idea principal: [[hachiko-proyecto-maestro]]
> Datos de salud mental B2B: [[datos-salud-mental-empleados-research]]
> Instrumentos clinicos detallados: [[instrumentos-clinicos]]

→ Contexto: [[espacio-de-oportunidad]]
→ Equipo: [[perfil-edgar-recursos-estrategicos]] · [[perfil-jose-recursos-estrategicos]]
