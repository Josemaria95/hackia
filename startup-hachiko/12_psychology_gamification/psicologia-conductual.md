---
title: "Psicologia Conductual Aplicada"
date: 2026-03-06
tags: [producto, wellness]
status: en-progreso
---

# Psicologia Conductual Aplicada

## Resumen

Hachiko se apoya en teorias de psicologia conductual y motivacional validadas cientificamente para disenar una experiencia que genere habitos saludables sin manipulacion. Este documento detalla cada marco teorico y su aplicacion concreta en el producto.

---

## 1. Modelo de Comportamiento de Fogg (B = MAP)

### Teoria

BJ Fogg (Stanford) propone que un comportamiento ocurre cuando tres elementos convergen simultaneamente:
- **M (Motivation)**: el usuario quiere hacerlo
- **A (Ability)**: el usuario puede hacerlo facilmente
- **P (Prompt)**: algo le recuerda hacerlo en el momento justo

Si falta cualquiera de los tres, el comportamiento no ocurre.

### Aplicacion en Hachiko

| Componente | Implementacion |
|-----------|----------------|
| **Motivation** | Cuidar a la mascota virtual (vinculo emocional); ver que su pet health mejora; sentir que contribuye a algo mayor (CD1) |
| **Ability** | Check-in de menos de 2 minutos; 2 preguntas simples camufladas; no requiere escribir texto largo |
| **Prompt** | Notificacion push diaria a hora personalizable; la mascota aparece "esperando" en la pantalla principal |

### Diseno del prompt

- **Timing**: el usuario elige su hora preferida (default: 9:00 AM)
- **Contenido**: "Tu mascota te espera" (no "Completa tu check-in")
- **Frecuencia**: 1 push/dia para check-in diario, 1 push/semana para semanal
- **Sin spam**: maximo 2 notificaciones al dia (incluyendo coaching)

---

## 2. Refuerzo de Razon Variable (Skinner)

### Teoria

B.F. Skinner demostro que los refuerzos impredecibles (variable ratio reinforcement) generan mayor engagement que los predecibles. Es el principio detras de las maquinas tragamonedas, pero puede usarse eticamente.

### Aplicacion en Hachiko

| Mecanismo | Implementacion |
|-----------|----------------|
| Respuestas variadas de coaching | Pool de 50+ mensajes; el usuario nunca recibe el mismo consejo dos dias seguidos |
| Reacciones de la mascota | 4+ animaciones diferentes para cada estado emocional; reacciones sorpresa ocasionales |
| Rewards inesperados | Cada ~7 check-ins, un badge sorpresa o un tip de bienestar especial |

### Guardia etica

- La variabilidad genera curiosidad positiva, no ansiedad
- Los rewards son informativos (tips de bienestar), no adictivos
- No hay "loot boxes" ni mecanismos de azar con valor monetario
- El usuario puede predecir el rango de respuestas (no hay negatividad sorpresa)

---

## 3. Teoria de la Autodeterminacion (Deci y Ryan)

### Teoria

Edward Deci y Richard Ryan proponen que la motivacion intrinseca depende de tres necesidades psicologicas basicas:
- **Autonomia**: sentir que elijo lo que hago
- **Competencia**: sentir que soy capaz y que progreso
- **Relacion**: sentir conexion con otros

### Aplicacion en Hachiko

| Necesidad | Core Drive | Implementacion |
|-----------|-----------|----------------|
| **Autonomia** | CD3, CD4 | El usuario elige como cuidar a su mascota; elige que datos compartir; elige su hora de check-in; puede exportar o borrar datos en cualquier momento |
| **Competencia** | CD2 | Pet health score mejora con consistencia; racha crece; mascota evoluciona; niveles y badges marcan progreso visible |
| **Relacion** | CD5, CD1 | (Post-MVP) Benchmarks de equipo anonimos; contador de comunidad; proposito compartido de bienestar laboral |

### Implicacion de diseno

- Nunca obligar al usuario a hacer algo (autonomia)
- Siempre mostrar progreso, nunca solo fracaso (competencia)
- Crear sentido de comunidad sin exponer datos individuales (relacion)

---

## 4. Efecto Dotacion (Kahneman)

### Teoria

Daniel Kahneman demostro que las personas valoran mas lo que poseen que lo que no poseen (endowment effect). Un objeto que "es mio" vale subjetivamente mas que uno identico que "podria comprar".

### Aplicacion en Hachiko

| Mecanismo | Implementacion |
|-----------|----------------|
| Propiedad de la mascota | "Esta mascota es TUYA" — enfatizado en onboarding; el usuario le pone nombre; la mascota refleja su historial unico |
| Propiedad de los datos | "Tus datos son tuyos" — el usuario puede exportar, ver y borrar en cualquier momento |
| Personalizacion acumulativa | Cada dia de uso hace la mascota mas "mia" (historial, evolucion, accesorios) |

### Implicacion de diseno

- El onboarding debe crear vinculo emocional inmediato (elegir nombre, especie)
- La mascota nunca se "reinicia" — el progreso es permanente
- Si el usuario cambia de empresa, su mascota lo acompana

---

## 5. Aversion a la Perdida (Kahneman y Tversky)

### Teoria

Perder algo duele aproximadamente 2x mas que ganar algo equivalente. La aversion a la perdida es un motivador poderoso pero potencialmente danino.

### Aplicacion en Hachiko

| Mecanismo | Implementacion |
|-----------|----------------|
| Decay de la mascota | Si no hay check-in en 2+ dias, el pet health baja lentamente (de "feliz" a "cansado") |
| Racha en riesgo | "Tu racha de 15 dias esta en juego" — pero con streak freeze gratis 1/semana |
| Recuperacion facil | Un solo check-in detiene el decay; la mascota "se alegra" al volver |

### Guardias eticas (CRITICO)

- El decay es **lento** (2-3 dias antes de cambio visible)
- El decay es **completamente reversible** (un check-in restaura)
- La mascota **NUNCA muere**
- La mascota **NUNCA se enferma gravemente**
- El lenguaje es de bienvenida, **NUNCA de culpa**:
  - SI: "Que bueno verte de nuevo"
  - NO: "Me abandonaste" / "Estuve solo"
- No se pierde progreso permanente (XP, nivel, evolucion)

---

## 6. Habit Loop (Charles Duhigg)

### Teoria

Charles Duhigg describe el ciclo de formacion de habitos como un loop de tres pasos:
1. **Cue (senal)**: un disparador que inicia la rutina
2. **Routine (rutina)**: el comportamiento en si
3. **Reward (recompensa)**: el beneficio que refuerza el loop

### Aplicacion en Hachiko

```
CUE: Notificacion push + mascota "esperando" en pantalla principal
  |
  v
ROUTINE: Check-in (<2 minutos, 2 preguntas camufladas como cuidado de mascota)
  |
  v
REWARD: Coaching insight personalizado + mascota reacciona positivamente + XP/racha
  |
  v
(loop se refuerza con cada repeticion)
```

### Diseno para formacion de habito

| Elemento | Principio | Implementacion |
|----------|-----------|----------------|
| Consistencia del cue | Misma hora cada dia | Notificacion a hora elegida por el usuario |
| Reduccion de friccion | La rutina debe ser facil | 2 preguntas, <90 segundos, sin scroll |
| Recompensa inmediata | El reward debe ser instantaneo | Mascota reacciona inmediatamente; coaching aparece en <3 segundos |
| Variabilidad del reward | Evitar habituacion | Mensajes variados (Skinner), reacciones diferentes de mascota |

---

## 7. Intenciones de Implementacion (Gollwitzer)

### Teoria

Peter Gollwitzer demostro que los planes "si-entonces" (implementation intentions) aumentan dramaticamente la probabilidad de ejecutar un comportamiento. "Cuando ocurra X, hare Y" es mas efectivo que "voy a hacer Y".

### Aplicacion en Hachiko

- **Intencion implicita**: "Cuando vea la notificacion de mi mascota, hare mi check-in"
- **Onboarding**: durante el setup, el usuario elige su momento del dia ("Cuando quieres cuidar a tu mascota?")
- **Refuerzo**: los primeros 7 dias, la app refuerza el patron con mensajes como "A esta hora, tu mascota espera tu visita"

### Diseno del onboarding

```
Pantalla: "Cuando quieres cuidar a tu mascota?"
- Opcion: "Al empezar mi dia" (8-9 AM)
- Opcion: "En mi pausa" (12-1 PM)
- Opcion: "Al terminar el trabajo" (6-7 PM)
- Opcion: "Yo elijo la hora" (selector)
```

---

## 8. Guardias Eticos Generales

### Lo que Hachiko hace

- Refuerzo positivo: premiar el comportamiento deseado
- Autonomia: el usuario siempre tiene control
- Transparencia: explicar por que cada mecanismo existe
- Recuperabilidad: toda "perdida" es reversible

### Lo que Hachiko NUNCA hace

- Castigo: penalizar la inaccion mas alla de un decay gentil
- Culpa: usar lenguaje que haga sentir mal al usuario
- Coercion: obligar al usuario a interactuar para evitar consecuencias graves
- Manipulacion: usar dark patterns para retener usuarios
- Adiccion: disenar mecanismos que generen dependencia insana

### Test etico para cada feature

Antes de implementar cualquier mecanismo conductual, preguntarse:
1. Si el usuario supiera exactamente como funciona este mecanismo, se sentiria engañado?
2. Si el usuario dejara de usar la app por 1 mes, sufriria consecuencias emocionales negativas?
3. Un psicologo revisaria este mecanismo y lo aprobaria para una poblacion vulnerable?

Si la respuesta a 1 o 2 es "si", o a 3 es "no", el mecanismo se descarta.

---

> Octalysis aplicado: [[octalysis-aplicado]]
> Mecanicas de juego: [[mecanicas-juego]]
> Proyecto maestro: [[hachiko-proyecto-maestro]]
