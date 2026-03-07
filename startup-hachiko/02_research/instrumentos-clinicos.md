---
title: "Instrumentos Clinicos Camuflados en el Juego"
date: 2026-03-06
tags: [producto, wellness]
status: en-progreso
---

# Instrumentos Clinicos Camuflados en el Juego

> Este documento detalla como Hachiko transforma instrumentos de medicion clinica validados en interacciones naturales con la mascota virtual. Ver [[hachiko-proyecto-maestro]], seccion 5, para el resumen ejecutivo.

---

## 1. WHO-5 (World Health Organization Well-Being Index)

### Descripcion del instrumento

- **Autor**: OMS (Organización Mundial de la Salud), version original 1998
- **Items**: 5
- **Que mide**: Bienestar subjetivo general en las ultimas 2 semanas
- **Escala**: Likert de 6 puntos (0 = nunca, 5 = todo el tiempo)
- **Rango**: 0-25 (raw) o 0-100 (porcentaje)
- **Punto de corte**: Score menor a 13 (raw) o menor a 52% sugiere screening para depresion
- **Validacion**: Extensivamente validado en multiples idiomas, incluyendo espanol. Sensibilidad del 93% y especificidad del 64% para depresion mayor como screening (Topp et al., 2015)
- **Ventajas**: Corto, positivo (mide bienestar, no patologia), no invasivo, libre de licencia

### Items originales del WHO-5

| Item | Texto original (espanol) |
|------|--------------------------|
| W1 | "Me he sentido alegre y de buen animo" |
| W2 | "Me he sentido tranquilo/a y relajado/a" |
| W3 | "Me he sentido activo/a y con energia" |
| W4 | "Me he despertado sintiendome fresco/a y descansado/a" |
| W5 | "Mi vida diaria ha estado llena de cosas que me interesan" |

### Camuflaje en Hachiko

La pregunta marco semanal es: **"Como amanecio Hachiko esta semana?"**

El usuario evalua 5 aspectos del estado de su mascota. Cada aspecto mapea directamente a un item del WHO-5:

| Item WHO-5 | Interaccion con el pet | Mecanica de juego |
|------------|----------------------|-------------------|
| W1 (animo) | "Tu pet esta contento o apagado esta semana?" | Slider con expresiones faciales del pet (5 niveles) |
| W2 (calma) | "Tu pet estuvo tranquilo o ansioso?" | Animacion del pet: de relajado a tembloroso |
| W3 (energia) | "Cuanta energia tuvo tu pet?" | Barra de energia (vacia a llena) |
| W4 (descanso) | "Tu pet desperto descansado?" | Animacion de bostezo vs. salto matutino |
| W5 (interes) | "Tu pet se divirtio con sus actividades?" | El pet reacciona con entusiasmo o apatia a un mini-juego |

**Frecuencia**: Semanal (domingo o lunes, configurable). Aparece como "Revision semanal del pet".

**Scoring interno**: Cada respuesta se mapea a la escala Likert 0-5. El score total se calcula igual que el WHO-5 estandar. Si el score cae por debajo de 13, el sistema activa una ruta de coaching mas intensiva (sin alertar al usuario de que "fallo" algo).

---

## 2. PHQ-2 (Patient Health Questionnaire-2)

### Descripcion del instrumento

- **Autor**: Kroenke, Spitzer & Williams (2003)
- **Items**: 2 (subconjunto del PHQ-9)
- **Que mide**: Screening ultra-breve de depresion en las ultimas 2 semanas
- **Escala**: Likert de 4 puntos (0 = nunca, 3 = casi todos los dias)
- **Rango**: 0-6
- **Punto de corte**: Score mayor o igual a 3 sugiere evaluacion mas profunda
- **Validacion**: Sensibilidad del 83% y especificidad del 92% para depresion mayor (Kroenke et al., 2003). Validado en espanol.
- **Ventajas**: Ultrabreve (2 items), screening efectivo, libre de licencia

### Items originales del PHQ-2

| Item | Texto original |
|------|---------------|
| P1 | "Poco interes o placer en hacer las cosas" |
| P2 | "Sentirse desanimado/a, deprimido/a o sin esperanza" |

### Camuflaje en Hachiko

Se presenta como dos micro-interacciones diarias con el pet:

| Item PHQ-2 | Interaccion con el pet | Mecanica de juego |
|------------|----------------------|-------------------|
| P1 (anhedonia) | "Tu pet esta disfrutando las cosas hoy?" | El pet interactua con un juguete/actividad. El usuario elige cuanto disfruta: "Mucho / Algo / Poco / Nada" |
| P2 (animo) | "Cuanta energia tiene tu pet hoy?" | Escala visual: pet saltando (alta) a pet acostado (baja). 4 niveles. |

**Frecuencia**: Diaria. Integrada en el check-in matutino (menos de 30 segundos).

**Scoring interno**: Mapeo directo a la escala 0-3. Si el score acumulado de la semana sugiere patron depresivo (promedio mayor o igual a 3), el LLM cloud genera una sesion de coaching mas profunda.

---

## 3. GAD-7 (Generalized Anxiety Disorder-7)

### Descripcion del instrumento

- **Autor**: Spitzer, Kroenke, Williams & Lowe (2006)
- **Items**: 7
- **Que mide**: Severidad de ansiedad generalizada en las ultimas 2 semanas
- **Escala**: Likert de 4 puntos (0 = nunca, 3 = casi todos los dias)
- **Rango**: 0-21
- **Puntos de corte**: 5 (leve), 10 (moderada), 15 (severa)
- **Validacion**: Sensibilidad 89%, especificidad 82% para trastorno de ansiedad generalizada (Spitzer et al., 2006). Validado en espanol.

### Items originales del GAD-7

| Item | Texto original |
|------|---------------|
| G1 | "Sentirse nervioso/a, ansioso/a o con los nervios de punta" |
| G2 | "No ser capaz de parar o controlar la preocupacion" |
| G3 | "Preocuparse demasiado por diferentes cosas" |
| G4 | "Dificultad para relajarse" |
| G5 | "Estar tan inquieto/a que es dificil permanecer sentado/a" |
| G6 | "Irritarse o enfadarse con facilidad" |
| G7 | "Sentir miedo de que algo terrible pueda pasar" |

### Camuflaje en Hachiko

No se aplican los 7 items de una vez (seria demasiado largo para una interaccion de juego). Se seleccionan 3-4 items distribuidos en la semana como "estados de preocupacion del pet":

| Item GAD-7 | Interaccion con el pet | Frecuencia |
|------------|----------------------|------------|
| G1 (nerviosismo) | "Tu pet esta con los nervios de punta hoy — que crees que le pasa?" | 2x/semana |
| G2 (preocupacion incontrolable) | "Tu pet no puede dejar de pensar en algo — le ayudas a soltar?" | 1x/semana |
| G4 (dificultad para relajar) | "Tu pet intento relajarse pero no pudo — tu te has sentido asi?" | 1x/semana |
| G6 (irritabilidad) | "Tu pet esta irritable hoy — que podria haberlo causado?" | 1x/semana |

**Nota**: Los items G3 (preocupacion excesiva), G5 (inquietud) y G7 (miedo catastrofico) se reservan para activacion condicional cuando los items basicos detectan patron elevado.

**Scoring interno**: Se calcula un score parcial basado en los items aplicados, escalado al rango completo del GAD-7. El score parcial tiene menor precision que el GAD-7 completo pero permite monitoreo continuo sin fatiga de cuestionario.

---

## 4. MBI Proxy (Maslach Burnout Inventory)

### Descripcion del instrumento

- **Autor**: Maslach & Jackson (1981)
- **Items**: 22 (version completa MBI-GS: 16)
- **Que mide**: Burnout laboral en tres dimensiones: agotamiento emocional, despersonalizacion/cinismo, reduccion de eficacia profesional
- **Nota importante**: El MBI tiene licencia comercial (Mind Garden). No se puede reproducir textualmente. Hachiko usa proxies inspirados en las dimensiones, no los items exactos.

### Dimensiones y proxies en Hachiko

| Dimension MBI | Proxy en el juego | Mecanica |
|--------------|-------------------|----------|
| **Agotamiento emocional** | "Tu pet esta agotado por la semana laboral — cuanto te identificas?" | Decision de juego: el pet llega cansado del "trabajo". El usuario elige cuanto se parece a su propia semana (escala visual 1-5). |
| **Cinismo / despersonalizacion** | "Tu pet esta desconectado de sus companeros — te ha pasado algo asi?" | El pet se aisla de otros personajes del juego. El usuario decide si lo ayuda a reconectar o lo deja solo. La decision refleja su propio nivel de cinismo laboral. |
| **Reduccion de eficacia** | "Tu pet siente que no logra nada — como te sientes tu con tu trabajo?" | El pet intenta completar una tarea en el juego y "falla". El usuario evalua si eso le resuena (1-5). |

**Frecuencia**: Semanal. Una dimension por semana en rotacion (ciclo de 3 semanas).

**Scoring interno**: Se genera un indice compuesto de burnout basado en las tres dimensiones. No es un score MBI oficial (por restriccion de licencia) sino un proxy validable empiricamente.

---

## 5. PSS-4 (Perceived Stress Scale-4)

### Descripcion del instrumento

- **Autor**: Cohen, Kamarck & Mermelstein (1983). Version breve: 4 items.
- **Items**: 4
- **Que mide**: Percepcion de estres en el ultimo mes
- **Escala**: Likert de 5 puntos (0 = nunca, 4 = muy a menudo)
- **Rango**: 0-16
- **Validacion**: Validado internacionalmente, incluyendo espanol (Vallejo et al., 2018)

### Items del PSS-4

| Item | Texto original | Direccion |
|------|---------------|-----------|
| S1 | "Con que frecuencia has sentido que no podias controlar las cosas importantes de tu vida?" | Negativo |
| S2 | "Con que frecuencia te has sentido seguro/a de tu capacidad para manejar tus problemas personales?" | Positivo (invertir) |
| S3 | "Con que frecuencia has sentido que las cosas iban bien?" | Positivo (invertir) |
| S4 | "Con que frecuencia has sentido que las dificultades se acumulaban tanto que no podias superarlas?" | Negativo |

### Camuflaje en Hachiko

El "nivel de estres del pet" es un indicador visual permanente que refleja el PSS-4 del usuario:

| Item PSS-4 | Interaccion | Frecuencia |
|------------|-------------|------------|
| S1 (falta de control) | "Tu pet siente que las cosas se le escapan de las manos — te pasa lo mismo?" | Bi-semanal |
| S2 (confianza) | "Tu pet se siente capaz de manejar lo que viene — y tu?" | Bi-semanal |
| S3 (cosas van bien) | "Tu pet piensa que las cosas van bien — estas de acuerdo?" | Bi-semanal |
| S4 (acumulacion) | "Tu pet siente que todo se acumula — como va tu semana?" | Bi-semanal |

**Scoring interno**: El nivel de estres del pet se actualiza con cada respuesta. Es un indicador visual continuo (barra de estres) que el usuario ve y entiende como "el estres de mi mascota", pero que internamente refleja su propio PSS-4.

---

## 6. Tabla Consolidada: Instrumento → Disfraz → Frecuencia

| Instrumento | Item original | Version camuflada en el juego | Frecuencia | Estado de validacion |
|------------|---------------|------------------------------|------------|---------------------|
| WHO-5 W1 | "Me he sentido alegre" | "Tu pet esta contento o apagado esta semana?" | Semanal | Requiere validacion con asesor clinico |
| WHO-5 W2 | "Me he sentido tranquilo" | "Tu pet estuvo tranquilo o ansioso?" | Semanal | Requiere validacion |
| WHO-5 W3 | "Me he sentido activo" | "Cuanta energia tuvo tu pet?" | Semanal | Requiere validacion |
| WHO-5 W4 | "Me he despertado descansado" | "Tu pet desperto descansado?" | Semanal | Requiere validacion |
| WHO-5 W5 | "Mi vida ha estado llena de cosas interesantes" | "Tu pet se divirtio con sus actividades?" | Semanal | Requiere validacion |
| PHQ-2 P1 | "Poco interes o placer" | "Tu pet esta disfrutando las cosas hoy?" | Diaria | Requiere validacion |
| PHQ-2 P2 | "Sentirse desanimado" | "Cuanta energia tiene tu pet hoy?" | Diaria | Requiere validacion |
| GAD-7 G1 | "Sentirse nervioso/ansioso" | "Tu pet esta con los nervios de punta" | 2x/semana | Requiere validacion |
| GAD-7 G2 | "No poder parar la preocupacion" | "Tu pet no puede dejar de pensar en algo" | 1x/semana | Requiere validacion |
| GAD-7 G4 | "Dificultad para relajarse" | "Tu pet intento relajarse pero no pudo" | 1x/semana | Requiere validacion |
| GAD-7 G6 | "Irritarse con facilidad" | "Tu pet esta irritable hoy" | 1x/semana | Requiere validacion |
| MBI-Agotamiento | Agotamiento emocional | "Tu pet esta agotado por la semana laboral" | 1x cada 3 sem | Proxy, no item oficial |
| MBI-Cinismo | Despersonalizacion | "Tu pet esta desconectado de sus companeros" | 1x cada 3 sem | Proxy, no item oficial |
| MBI-Eficacia | Reduccion de eficacia | "Tu pet siente que no logra nada" | 1x cada 3 sem | Proxy, no item oficial |
| PSS-4 S1 | "No poder controlar cosas importantes" | "Tu pet siente que las cosas se le escapan" | Bi-semanal | Requiere validacion |
| PSS-4 S2 | "Sentirse capaz de manejar problemas" | "Tu pet se siente capaz de manejar lo que viene" | Bi-semanal | Requiere validacion |
| PSS-4 S3 | "Las cosas iban bien" | "Tu pet piensa que las cosas van bien" | Bi-semanal | Requiere validacion |
| PSS-4 S4 | "Las dificultades se acumulan" | "Tu pet siente que todo se acumula" | Bi-semanal | Requiere validacion |

---

## 7. Consideraciones Eticas

### La pregunta fundamental: El camuflaje invalida el instrumento?

Esta es la pregunta clinica y etica mas critica del diseno de Hachiko. El argumento a favor y en contra:

**A favor del camuflaje:**
- Los instrumentos estandarizados sufren de sesgo de deseabilidad social: el empleado responde "bien" porque sabe que es un cuestionario de salud mental. El camuflaje puede reducir este sesgo.
- La pregunta "como esta tu pet?" genera respuestas mas honestas que "como estas tu?" porque reduce la amenaza a la identidad (no estoy admitiendo debilidad, estoy describiendo a mi mascota).
- Los Ecological Momentary Assessments (EMA) ya demuestran que micro-preguntas en contexto tienen validez ecologica superior a cuestionarios largos retrospectivos.

**En contra del camuflaje:**
- Los instrumentos estan validados con su redaccion exacta. Cambiar la formulacion puede alterar las propiedades psicometricas (consistencia interna, validez de constructo, sensibilidad/especificidad).
- No esta claro si "el estado de mi pet" activa los mismos procesos cognitivos que "mi estado". La proyeccion psicologica no es identica al autoreporte.
- Existe un riesgo etico de recolectar datos de salud mental sin que el usuario sea plenamente consciente de que esta siendo evaluado, incluso si consiente los terminos generales.

### Plan de validacion

1. **Fase pre-piloto**: Administrar los instrumentos originales Y las versiones camufladas al mismo grupo de usuarios (N mayor o igual a 100). Calcular correlacion, consistencia interna (alpha de Cronbach) y acuerdo (kappa) entre ambas versiones.
2. **Asesor clinico**: Un psicologo organizacional debe revisar cada item camuflado y opinar sobre la validez del constructo medido.
3. **Consentimiento informado**: El usuario debe saber que sus interacciones con el pet generan datos de bienestar. No necesita saber que cada pregunta mapea a un instrumento especifico, pero si que la informacion se usa para personalizar su experiencia y, de forma agregada, para mejorar el bienestar del equipo.
4. **Publicacion academica**: Si la validacion confirma que los proxies son confiables, publicar los resultados para contribuir a la literatura de medicion implicita.

### Linea roja etica

El camuflaje NO debe convertirse en manipulacion. La diferencia:
- **Camuflaje etico**: El usuario sabe que la app recolecta datos de bienestar. El "disfraz" es la interfaz, no el proposito.
- **Manipulacion**: El usuario cree que solo esta jugando con una mascota y no tiene idea de que esta siendo evaluado clinicamente.

Hachiko debe operar en la primera categoria. El onboarding debe incluir una explicacion clara: "Tus interacciones con tu pet nos ayudan a entender como te sientes y a darte mejor coaching. Tus datos son tuyos."

---

## 8. Carga del Usuario: Analisis de Tiempo

| Instrumento | Items/semana | Tiempo estimado | Momento |
|------------|-------------|-----------------|---------|
| WHO-5 | 5 items (1 sesion) | 60-90 segundos | Domingo/lunes |
| PHQ-2 | 14 items (2/dia x 7) | 15 seg/dia = 105 seg/sem | Check-in matutino |
| GAD-7 (parcial) | 4 items | 15 seg/item = 60 seg/sem | Distribuido |
| MBI proxy | 1 item | 20 segundos | 1x cada 3 semanas |
| PSS-4 | 2 items | 15 seg/item = 30 seg/sem | Bi-semanal |
| **Total semanal** | **~23 items** | **~5 minutos** | **Distribuido en 7 dias** |

El promedio diario es menor a 1 minuto de interaccion de medicion, integrado en el flujo natural del juego. Esto esta dentro del umbral de tolerancia para micro-EMA (Shiffman et al., 2008).

---

> Seccion 5 del documento maestro: [[hachiko-proyecto-maestro]]
> Digital phenotyping complementario: [[deteccion-estres-smartphone]]
> Referencias completas: [[referencias-bibliograficas]]

→ Contexto: [[espacio-de-oportunidad]]
→ Equipo: [[perfil-edgar-recursos-estrategicos]] · [[perfil-jose-recursos-estrategicos]]
