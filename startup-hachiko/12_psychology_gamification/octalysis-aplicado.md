---
title: "Octalysis Aplicado a Hachiko"
date: 2026-03-06
tags: [producto, wellness]
status: en-progreso
---

# Octalysis Aplicado a Hachiko

> Analisis detallado del framework Octalysis en [[hachiko-proyecto-maestro]] seccion 4 y [[2026-02-24-tamagotchi-coach-laboral]]. Este documento resume y agrega implementacion practica.

---

## Resumen del Framework

Octalysis (Yu-kai Chou) identifica 8 Core Drives (CD) que motivan el comportamiento humano. Los CD1-CD4 son "White Hat" (hacen sentir bien, empoderan) y los CD5-CD8 son "Black Hat" (generan urgencia, pueden ser manipulativos). Hachiko prioriza White Hat y usa Black Hat con extrema cautela etica.

---

## Implementacion por Core Drive

| CD | Nombre | MVP Implementation | Post-MVP Implementation |
|----|--------|-------------------|----------------------|
| CD1 | Epic Meaning & Calling | Contador "empleados Hachiko en Chile" visible en onboarding; narrativa de "cuidar tu bienestar importa" | Benchmark nacional publico de bienestar laboral; impacto social medible y compartible |
| CD2 | Development & Accomplishment | Pet health score visible; rachas basicas (dias consecutivos); XP por check-in | Evolucion de mascota en 3 etapas (bebe, joven, adulto); sistema de niveles 1-30; badges de logros |
| CD3 | Empowerment of Creativity & Feedback | El usuario elige como cuidar a su mascota; respuestas variadas del coaching | LLM genera narrativas unicas y personalizadas; el usuario puede personalizar la apariencia de su mascota |
| CD4 | Ownership & Possession | "Esta mascota es TUYA"; exportacion de datos; la mascota refleja tu historial | Data wallet completo; customizacion profunda de mascota (accesorios, fondos, animaciones) |
| CD5 | Social Influence & Relatedness | -- (requiere N>=30, no disponible en MVP con pocos usuarios) | Benchmarks de equipo anonimos; "pet showcase" opcional; wellness index compartido |
| CD6 | Scarcity & Impatience | -- (no implementado en MVP) | Sesiones de coaching profundo limitadas por semana (ej: 3/semana); desbloqueos por milestone |
| CD7 | Unpredictability & Curiosity | Mensajes diarios variados de la mascota; respuestas de coaching no repetitivas | Eventos estacionales; evoluciones sorpresa de la mascota; easter eggs de bienestar |
| CD8 | Loss Avoidance | La mascota "se cansa" lentamente si no hay check-in (nunca se enferma ni muere) | Decay gradual y gentil del pet health; racha en riesgo (con streak freeze disponible) |

---

## Detalle por Core Drive

### CD1: Epic Meaning & Calling (White Hat)

**Por que importa**: el usuario necesita sentir que su check-in diario tiene un proposito mayor que "llenar un cuestionario". Cuidar a su mascota es cuidar de si mismo, y contribuye a un movimiento de bienestar laboral.

**MVP**:
- Al hacer onboarding, se muestra: "Ya somos [N] personas cuidando su bienestar en Chile"
- Mensaje despues del primer check-in: "Tu mascota te lo agradece. Y tu cuerpo tambien."

**Post-MVP**:
- Dashboard publico (anonimo) con indicadores de bienestar laboral en Chile
- Reportes anuales de impacto: "Gracias a Hachiko, X empresas mejoraron su bienestar"

---

### CD2: Development & Accomplishment (White Hat)

**Por que importa**: el progreso visible es el motor principal de engagement sostenido. El usuario necesita sentir que avanza.

**MVP**:
- Pet health score: 0-100, sube con check-ins consistentes
- Racha: dias consecutivos de check-in
- XP por cada interaccion (check-in diario = 10 XP, semanal = 30 XP)

**Post-MVP**:
- Evolucion de mascota: bebe (dia 1-30), joven (31-60), adulto (61-90)
- Niveles 1-30 con desbloqueos cosmeticos en cada nivel
- Badges: "Primera semana", "Primer mes", "Explorando emociones"

---

### CD3: Empowerment of Creativity & Feedback (White Hat)

**Por que importa**: la autonomia en como interactuar con la app previene la sensacion de "obligacion" y fomenta engagement intrinseco.

**MVP**:
- El usuario elige el nombre de su mascota
- Respuestas de coaching variadas (no repetitivas)
- El check-in tiene opciones multiples, no solo si/no

**Post-MVP**:
- LLM genera narrativas unicas basadas en el historial del usuario
- Customizacion visual de la mascota
- Multiples formas de interactuar (texto, seleccion, deslizar)

---

### CD4: Ownership & Possession (White Hat)

**Por que importa**: el efecto dotacion (Kahneman) hace que valoremos mas lo que es nuestro. La mascota es propiedad emocional del usuario.

**MVP**:
- "Esta mascota es tuya" — enfatizado en onboarding
- El usuario puede exportar todos sus datos
- La mascota refleja el historial de check-ins del usuario

**Post-MVP**:
- Data wallet: el usuario controla cada dato
- Customizacion profunda (accesorios, fondos, animaciones)
- Portabilidad: si cambia de empresa, su mascota lo acompana

---

### CD5: Social Influence & Relatedness (White Hat)

**Por que importa**: la conexion social es un factor protector de salud mental. Pero requiere masa critica y proteccion de privacidad.

**MVP**: No implementado (requiere N>=30 por equipo para datos agregados).

**Post-MVP**:
- Wellness index del equipo (anonimo, solo si N>=30)
- "Pet showcase" opcional: compartir la apariencia de tu mascota
- Desafios de equipo: "Esta semana, el equipo logro 80% de participacion"

---

### CD6: Scarcity & Impatience (Black Hat — usar con cautela)

**Por que importa**: la escasez percibida aumenta el valor percibido. Pero en un contexto de salud mental, debe usarse eticamente.

**MVP**: No implementado.

**Post-MVP**:
- Sesiones de coaching profundo limitadas a 3/semana (las basicas son ilimitadas)
- Evoluciones especiales que se desbloquean solo en milestones
- Contenido de bienestar premium que se libera gradualmente

**Guardia etica**: nunca limitar acceso a recursos de crisis o coaching basico.

---

### CD7: Unpredictability & Curiosity (Black Hat — usar con cautela)

**Por que importa**: la variabilidad mantiene el interes. Pero no debe generar ansiedad.

**MVP**:
- Mensajes diarios de la mascota variados (pool de 50+ mensajes)
- Coaching nunca repite el mismo consejo dos dias seguidos

**Post-MVP**:
- Eventos estacionales (ej: "Semana de la gratitud")
- Evoluciones sorpresa de la mascota
- Easter eggs de bienestar

**Guardia etica**: la variabilidad debe ser placentera, nunca ansiogena.

---

### CD8: Loss Avoidance (Black Hat — usar con extrema cautela)

**Por que importa**: la aversion a la perdida es un motivador poderoso. Pero en salud mental, la culpa es contraproducente.

**MVP**:
- Si no hay check-in en 2 dias, la mascota "se cansa" (cambio visual sutil)
- NUNCA: la mascota se enferma, muere, o el usuario pierde progreso permanente

**Post-MVP**:
- Racha en riesgo: "Tu racha de 15 dias esta en juego" (con streak freeze gratis 1/semana)
- Decay gradual del pet health (se recupera rapido al volver)
- "Tu mascota te extrana" (gentil, no culposo)

**Guardia etica**:
- El decay es lento y completamente reversible
- Nunca lenguaje culposo ("nos abandonaste")
- Siempre lenguaje de bienvenida al regresar ("que bueno verte de nuevo")
- La mascota NUNCA muere

---

## Balance White Hat vs. Black Hat

```
         White Hat (empoderar)
              CD1
         CD2      CD3
    CD8              CD4      <-- Hachiko maximiza este lado
         CD7      CD5
              CD6
         Black Hat (urgencia)
```

**Regla de oro**: Hachiko usa CD1-CD4 como motores principales. CD6-CD8 son complementos gentiles, nunca el driver principal. Si un mecanismo Black Hat genera culpa o ansiedad, se elimina.

---

> Psicologia conductual: [[psicologia-conductual]]
> Mecanicas de juego: [[mecanicas-juego]]
> Proyecto maestro: [[hachiko-proyecto-maestro]]
