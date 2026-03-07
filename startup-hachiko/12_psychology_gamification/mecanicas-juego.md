---
title: "Mecanicas de Juego"
date: 2026-03-06
tags: [producto, wellness]
status: en-progreso
---

# Mecanicas de Juego

## Resumen

Las mecanicas de juego de Hachiko estan disenadas para generar engagement sostenido sin manipulacion. Cada mecanica tiene un proposito claro: reforzar habitos de bienestar emocional. Este documento detalla los sistemas de progresion, recompensa, engagement loops y mecanicas anti-churn.

---

## 1. Sistema de Progresion

### Evolucion de la mascota

La mascota evoluciona en 3 etapas basadas en dias de uso consistente:

| Etapa | Nombre | Milestone | Apariencia | Desbloqueo |
|-------|--------|-----------|-----------|------------|
| 1 | Bebe | Dia 1-30 | Pequena, ojos grandes, movimientos simples | Check-in diario + coaching basico |
| 2 | Joven | Dia 31-60 | Mas grande, animaciones mas ricas, personalidad emergente | Check-in semanal WHO-5 + coaching intermedio |
| 3 | Adulto | Dia 61-90 | Tamano completo, animaciones complejas, personalidad definida | Coaching profundo + reporte mensual personalizado |

**Reglas de evolucion**:
- Los dias no necesitan ser consecutivos (la evolucion no se pierde por ausencia)
- La evolucion es permanente (nunca se regresa a una etapa anterior)
- Cada evolucion tiene una animacion especial y un mensaje de celebracion
- Post-90 dias: customizaciones cosmeticas avanzadas como recompensa continua

### Sistema de XP

| Accion | XP ganado | Frecuencia maxima |
|--------|----------|-------------------|
| Check-in diario completado | 10 XP | 1/dia |
| Check-in semanal completado | 30 XP | 1/semana |
| Coaching session leida completa | 5 XP | 3/dia |
| Racha de 7 dias | 20 XP bonus | 1/semana |
| Racha de 30 dias | 100 XP bonus | 1/mes |
| Primera interaccion del dia con la mascota | 5 XP | 1/dia |

**XP no se pierde**. Es una metrica acumulativa que solo sube.

### Rachas (Streaks)

- **Definicion**: dias consecutivos con al menos 1 check-in completado
- **Multiplicador**: a partir de 7 dias, el XP ganado por check-in se multiplica x1.5
- **Visualizacion**: calendario con dias marcados en la pantalla de la mascota
- **Streak freeze**: 1 gratuito por semana (se usa automaticamente si no hay check-in)
- **Perdida de racha**: si se pierde, solo se pierde el multiplicador, no el XP acumulado

### Niveles

| Nivel | XP requerido | Desbloqueo |
|-------|-------------|------------|
| 1-5 | 0-250 | Colores basicos para la mascota |
| 6-10 | 251-600 | Accesorios simples (collar, lazo) |
| 11-15 | 601-1100 | Fondos personalizados |
| 16-20 | 1101-1800 | Animaciones especiales |
| 21-25 | 1801-2800 | Accesorios premium |
| 26-30 | 2801-4000 | Temas exclusivos + mascota "legendaria" |

---

## 2. Sistema de Recompensas

### Tipos de recompensa

| Tipo | Descripcion | Ejemplo | Monetizacion |
|------|-------------|---------|-------------|
| Cosmetico | Cambia la apariencia de la mascota o el entorno | Sombrero, fondo de playa, animacion de lluvia | Gratis (earned) |
| Achievement | Badge visible en el perfil | "Primera semana", "Explorador emocional" | Gratis |
| Coaching unlock | Acceso a sesiones de coaching mas profundas | Coaching de estres avanzado en nivel 10 | Gratis (parte del producto) |
| Social (post-MVP) | Compartir logros con el equipo | "Mi mascota evoluciono" | Gratis |

**Principio fundamental**: nunca pay-to-win. Todas las recompensas que afectan funcionalidad se ganan con uso. Las compras (si las hay en el futuro) son puramente cosmeticas y opcionales.

### Badges de logros

| Badge | Condicion | Categoria |
|-------|-----------|-----------|
| "Primer paso" | Completar el primer check-in | Onboarding |
| "Una semana cuidando" | 7 check-ins completados | Consistencia |
| "Un mes juntos" | 30 dias de uso | Consistencia |
| "Explorador emocional" | Usar 5 respuestas diferentes en check-ins | Autoconocimiento |
| "Noctambulo" | Hacer check-in despues de las 10 PM (3 veces) | Curiosidad |
| "Madrugador" | Hacer check-in antes de las 8 AM (3 veces) | Curiosidad |
| "Mascota feliz" | Pet health en 90+ por 7 dias consecutivos | Bienestar |
| "Evolucion" | Mascota alcanza etapa Joven | Progresion |
| "Madurez" | Mascota alcanza etapa Adulto | Progresion |
| "Equipo unido" (post-MVP) | Equipo con >80% de participacion semanal | Social |

---

## 3. Engagement Loops

### Loop diario (~90 segundos)

```
Notificacion push (hora elegida por usuario)
  |
  v
Abrir app → mascota saluda con animacion
  |
  v
Check-in: 2 preguntas camufladas (<60 seg)
  |
  v
Mascota reacciona (animacion + sonido)
  |
  v
Coaching tip personalizado (1 parrafo, <30 seg de lectura)
  |
  v
XP ganado + racha actualizada
  |
  v
Cerrar app (total: ~90 segundos)
```

### Loop semanal (~3 minutos)

```
Notificacion: "Tu mascota quiere saber como estuvo tu semana"
  |
  v
Check-in semanal WHO-5 (5 preguntas, ~2 min)
  |
  v
Resumen semanal: como estuvo tu bienestar vs. semana anterior
  |
  v
Mascota muestra "resumen de humor" de la semana (animacion)
  |
  v
Coaching insight semanal (mas profundo que el diario)
  |
  v
30 XP + badge si aplica
```

### Loop mensual (~5 minutos)

```
Milestone de evolucion (si aplica)
  |
  v
Reporte personalizado de bienestar del mes
  |
  v
Comparacion con mes anterior (solo contigo mismo, nunca con otros)
  |
  v
Reconocimiento: badge mensual + desbloqueo cosmetico
  |
  v
Opcion de compartir logro (opcional, anonimo)
```

---

## 4. Mecanicas Anti-Churn

### Prevencion de abandono

| Situacion | Respuesta de la app | Tono |
|-----------|-------------------|------|
| 1 dia sin check-in | Nada (normal, no todos los dias son iguales) | -- |
| 2 dias sin check-in | Mascota cambia a estado "cansado" (sutil) | Neutro |
| 3 dias sin check-in | Push gentil: "Tu mascota te extrana" | Calido, no culposo |
| 7 dias sin check-in | Push: "Cuando quieras volver, aqui estamos" | Respetuoso |
| 14+ dias sin check-in | Silencio (no mas pushes hasta que el usuario regrese) | Respetuoso |

### Streak freeze

- 1 streak freeze gratuito por semana
- Se usa automaticamente si no hay check-in ese dia
- No cuesta nada (nunca monetizar la racha)
- Previene frustracion por dias malos sin generar culpa

### Re-engagement despues de ausencia

Cuando el usuario vuelve despues de 3+ dias:

```
Pantalla: Mascota con animacion de bienvenida
  |
  v
Mensaje: "Que bueno verte de nuevo. Tu mascota te esperaba."
  |
  v
Check-in suave (1 pregunta en vez de 2)
  |
  v
"Tu racha empieza de nuevo. Cada dia cuenta."
  |
  v
XP normal (sin penalizacion por ausencia)
```

**Lo que NUNCA se hace al regresar**:
- "Te fuiste por X dias" (enfatizar la ausencia)
- "Perdiste tu racha de X dias" (enfatizar la perdida)
- "Tu mascota estuvo triste" (generar culpa)
- Reducir nivel, XP o progreso de evolucion

---

## 5. Mecanicas Sociales (Post-MVP)

### Team Wellness Index

- Solo visible si el equipo tiene N>=30 miembros activos
- Muestra: tasa de participacion del equipo, tendencia semanal
- **NUNCA** muestra datos individuales ni ranking de personas
- Formato: "Tu equipo tuvo 78% de participacion esta semana" (sin nombres)

### Pet Showcase (opcional)

- El usuario puede optar por mostrar su mascota en un "escaparate" del equipo
- Solo muestra: nombre de la mascota, etapa de evolucion, accesorios
- **No muestra**: datos de bienestar, check-ins, risk score
- 100% opcional (opt-in explicito)

---

## 6. Lo Que NO Hacemos

| Mecanica toxica | Por que NO la usamos |
|----------------|---------------------|
| Castigo por inactividad | Genera culpa, contradice el proposito de bienestar |
| Muerte de la mascota | Traumatico, genera asociacion negativa con la app |
| Leaderboards individuales | Genera competencia insana, presion social, posible discriminacion |
| Pay-to-win | Desigualdad, destruye confianza en el producto |
| Loot boxes / gacha | Mecanismo de adiccion, regulatoriamente problematico |
| Temporizadores agresivos | Genera ansiedad, contradice bienestar |
| Notificaciones excesivas | Spam, genera rechazo |
| Comparacion con otros usuarios | Genera envidia, ansiedad social |

---

> Octalysis aplicado: [[octalysis-aplicado]]
> Psicologia conductual: [[psicologia-conductual]]
> Proyecto maestro: [[hachiko-proyecto-maestro]]
> Equipo: [[perfil-edgar-recursos-estrategicos]] · [[perfil-jose-recursos-estrategicos]]
