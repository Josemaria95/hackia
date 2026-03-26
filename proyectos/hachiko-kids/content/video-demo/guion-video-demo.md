---
title: "Hachiko Kids — Guión Video Demo (2 min)"
date: 2026-03-25
tags: [producto, wellness, educacion]
status: en-progreso
---

# Guión Video Demo — Hachiko Kids (2:00 min)

> **Uso:** Wayra Colombia, COPEC UC, Platanus, clínicas aliadas.
> **Quién graba:** Edgar o Jose (o los dos).
> **Herramientas:** Screen recorder del teléfono + voz en off grabada por separado.
> **Música:** `content/reels/soundtrack_flyer.mp3` (volumen bajo, solo de fondo).

---

## Antes de grabar — Datos de prueba a cargar

Para que el dashboard del padre se vea con datos reales, crear esta secuencia de check-ins **con al menos 7 días de anterioridad** (o manipular las fechas directamente en Supabase):

```sql
-- Insertar check-ins de prueba para el niño demo (reemplazar child_id)
-- Semana pasada — 7 entradas variadas
INSERT INTO checkins (child_id, situation, situation_choice, emotion, created_at) VALUES
  ('<CHILD_ID>', 'necesita ordenar sus juguetes. ¿La ayudas?', 'helps',   'happy',   NOW() - INTERVAL '7 days'),
  ('<CHILD_ID>', 'quiere jugar. ¿Prefiere sola o con amigos?', 'alone',   'neutral', NOW() - INTERVAL '6 days'),
  ('<CHILD_ID>', 'está enojada porque perdió en un juego.',    'regulates','angry',  NOW() - INTERVAL '5 days'),
  ('<CHILD_ID>', 'Otra mascota quiere su juguete favorito.',   'shares',  'happy',   NOW() - INTERVAL '4 days'),
  ('<CHILD_ID>', 'tiene que lavarse las patitas.',             'delays',  'neutral', NOW() - INTERVAL '3 days'),
  ('<CHILD_ID>', 'hay una fiesta de mascotas. ¿Quiere ir?',   'alone',   'sad',     NOW() - INTERVAL '2 days'),
  ('<CHILD_ID>', 'acaba de despertar. ¿Cómo se siente hoy?', 'great',   'happy',   NOW() - INTERVAL '1 day');
```

**Cuenta demo recomendada:**
- Email: `demo@hachikokids.app`
- Nombre del niño: `Sofía`
- Mascota: `Luna`
- Edad: 6 años

---

## Pantallas a mostrar (en orden)

| Pantalla | Archivo | Estado a mostrar |
|----------|---------|-----------------|
| Bienvenida/Login | `(auth)/login.tsx` | Ya con sesión iniciada (skip si es posible) |
| Selección de mascota | `(app)/select-mascot.tsx` | Luna ya nombrada |
| Check-in niño | `(app)/checkin.tsx` | Escenario de socialización |
| Reacción mascota | `(app)/checkin.tsx` | Estado `reaction` — Luna feliz |
| Respiración | `(app)/checkin.tsx` | Estado `breathe` — animación activa |
| Sticker | `(app)/checkin.tsx` | Estado `sticker` — estrella dorada |
| Dashboard padre | `(app)/summary.tsx` | Semana completa con datos |

---

## Guión — Tabla de tiempos

### SEGMENTO 1 — Hook (0:00–0:18)

| Tiempo | Qué se ve en pantalla | Texto en pantalla (si aplica) | Voz en off |
|--------|----------------------|-------------------------------|------------|
| 0:00–0:05 | Fondo oscuro (#1E1145). Logo Hachiko Kids animado aparece al centro. | *(solo logo)* | *(silencio — música entra suave)* |
| 0:05–0:12 | Texto estadístico aparece en fade: una línea a la vez. | **"1 de cada 4 niños tiene dificultades emocionales"** | "1 de cada 4 niños en Chile presenta dificultades emocionales o conductuales." |
| 0:12–0:18 | Segunda estadística. | **"Y los padres no siempre saben por qué"** | "Y la lista de espera para atención especializada es de 3 a 6 meses. Hachiko Kids cambia eso." |

**Notas de grabación:**
- Grabar este segmento con edición (CapCut, DaVinci, iMovie) — no es captura de pantalla de la app.
- Fuente Fredoka si es posible, o Inter Bold.
- Colores: texto blanco sobre fondo #1E1145.

---

### SEGMENTO 2 — Presentación de Luna (0:18–0:28)

| Tiempo | Qué se ve en pantalla | Texto en pantalla | Voz en off |
|--------|----------------------|-------------------|------------|
| 0:18–0:22 | Captura de `select-mascot.tsx` — Luna ya nombrada, pantalla mostrando "¡Hola, Luna!" | *(nombre de la mascota visible)* | "Esta es Luna. La mascota de Sofía." |
| 0:22–0:28 | Zoom suave a Luna con su nombre. Corte a pantalla del check-in (estado: `scenario`). | **"Hachiko Kids"** aparece en corner. | "Cada día, Sofía toma decisiones por Luna. Y cada decisión revela un patrón." |

---

### SEGMENTO 3 — Flujo del niño (0:28–1:00)

| Tiempo | Qué se ve en pantalla | Texto en pantalla | Voz en off |
|--------|----------------------|-------------------|------------|
| 0:28–0:38 | **Estado `scenario`:** Card con texto "Luna quiere jugar — ¿sola o con amigos?" y 3 opciones. Mano toca "Solita". | *(escenario visible)* | "Luna quiere jugar. Sofía elige: sola. Esa elección importa." |
| 0:38–0:46 | **Estado `emotion`:** Emotion picker aparece. 5 opciones (happy, sad, angry, scared, neutral como círculos de colores). Mano toca el círculo amarillo (happy). | *(emotion picker visible)* | "¿Cómo se siente Luna hoy? Sofía elige. Y eso también importa." |
| 0:46–0:54 | **Estado `reaction`:** Luna reacciona — animación feliz. Texto de reacción aparece. | *(reacción de Luna visible)* | "Luna reacciona. El juego se siente real. Y tiene 60 segundos." |
| 0:54–1:00 | **Estado `breathe`:** Animación de respiración. Luna inhala y exhala. Texto "Respiremos juntos". | **"60 segundos"** visible | "¿Quiere respirar con Luna? 4 ciclos. Sin presión." |

**Notas de grabación:**
- Grabar en teléfono real con la app instalada (APK preview).
- Usar modo avión para que no aparezcan notificaciones.
- Tamaño de texto accesible — verificar que se vea en video.
- Si el escenario del día no es socialización, ir a `lib/scenarios.ts` y asegurarse de que salga `soc-1`.

---

### SEGMENTO 4 — Sticker y cierre niño (1:00–1:10)

| Tiempo | Qué se ve en pantalla | Texto en pantalla | Voz en off |
|--------|----------------------|-------------------|------------|
| 1:00–1:05 | **Estado `sticker`:** Estrella dorada animada. Texto "¡Ganaste una estrella! Luna te espera mañana 🌙" | **"Sin pantallas infinitas"** | "Una estrella. Y se acabó por hoy." |
| 1:05–1:10 | Fundido. Transición al dashboard del padre. | **"Cada lunes, papá recibe esto →"** | "Cada lunes, mamá o papá reciben el resumen." |

---

### SEGMENTO 5 — Dashboard del padre (1:10–1:35)

| Tiempo | Qué se ve en pantalla | Texto en pantalla | Voz en off |
|--------|----------------------|-------------------|------------|
| 1:10–1:20 | **`summary.tsx` — parte superior:** "Dato de la semana" y "Qué puedes hacer". Visibles arriba, sin scroll. | *(dato y acción visibles)* | "Sofía prefirió jugar sola 4 de 7 días esta semana. La app ya tiene un tip listo." |
| 1:20–1:28 | **Scroll suave** para mostrar las 5 dimensiones como cards. Una card se expande (socialización). | *(cards de 5 dimensiones)* | "5 dimensiones de comportamiento. Patrones, no diagnósticos. Tips, no teoría." |
| 1:28–1:35 | **Círculos de ánimo** por día — timeline visual de colores. Mostrar la semana. | *(timeline de ánimo visible)* | "Ánimo día a día. ¿Los lunes son difíciles? Aquí lo ves." |

**Notas de grabación:**
- Hacer scroll lento y fluido — grabar 2 veces y elegir la mejor toma.
- Verificar que los datos de prueba (SQL arriba) estén cargados antes de grabar.
- Mostrar tanto el resumen superior como las cards expandidas.

---

### SEGMENTO 6 — Diferenciación (1:35–1:48)

| Tiempo | Qué se ve en pantalla | Texto en pantalla | Voz en off |
|--------|----------------------|-------------------|------------|
| 1:35–1:42 | Split screen o tabla simple: 4 competidores vs Hachiko Kids. | **Finch:** Sin niños · **Mightier:** Sin LATAM · **Breathe:** Sin dashboard · **Luca:** Sin emoción | "Nadie más combina todo esto en español para LATAM." |
| 1:42–1:48 | Hachiko Kids resaltado: "Mascota + Datos + Dashboard + Español" | **"Todo junto. En español."** | "Mascota. Datos. Dashboard para padres. Español. Todo junto." |

**Notas de grabación:**
- Este segmento puede ser gráfico editado (no captura de app).
- Usar colores del brand: fondo #1E1145, texto #B8AAFF, Hachiko en #7B61FF.

---

### SEGMENTO 7 — CTA final (1:48–2:00)

| Tiempo | Qué se ve en pantalla | Texto en pantalla | Voz en off |
|--------|----------------------|-------------------|------------|
| 1:48–1:53 | Logo Hachiko Kids centrado sobre fondo #1E1145. | **"Hachiko Kids"** | "Hachiko Kids." |
| 1:53–1:58 | Email de contacto + QR al APK. | **josemaria.munoz95@gmail.com** | "Estamos en piloto. ¿Quieres verlo en acción?" |
| 1:58–2:00 | Mascota Luna con pose feliz. Fade out. | **"Entiende a tu hijo a través de su mascota."** | "Entiende a tu hijo a través de su mascota." |

---

## Instrucciones técnicas de grabación

### Herramientas recomendadas

| Herramienta | Para qué | Costo |
|-------------|----------|-------|
| Screen recorder Android (nativo) | Grabar pantalla del teléfono | $0 |
| iMovie / CapCut | Edición, subtítulos, transiciones | $0 |
| Audacity / iPhone Voice Memos | Grabar voz en off | $0 |
| `content/reels/soundtrack_flyer.mp3` | Música de fondo | $0 |

### Configuración de pantalla antes de grabar

1. Activar **modo avión** — sin notificaciones
2. **Brillo al máximo**
3. Tamaño de letra en ajustes: **Normal** (no accesibilidad)
4. Hora del teléfono: sin importar, pero limpiar barra de estado si es posible
5. **No Disturb** activado
6. Cuenta demo ya iniciada: `demo@hachikokids.app`
7. Check-ins de prueba cargados en Supabase (ver SQL arriba)

### Secuencia de pantallas a grabar (en orden)

```
1. select-mascot.tsx → Luna ya nombrada (mostrar 3 seg)
2. checkin.tsx → estado "scenario" (mostrar escenario soc-1)
3. checkin.tsx → estado "emotion" (tocar happy)
4. checkin.tsx → estado "reaction" (Luna feliz, mostrar 3 seg)
5. checkin.tsx → estado "breathe" (mostrar ciclo completo)
6. checkin.tsx → estado "sticker" (estrella animada)
7. summary.tsx → parte superior (dato + acción)
8. summary.tsx → scroll a dimensiones (abrir card socialización)
9. summary.tsx → timeline de ánimo
```

### Voz en off

- Grabar en ambiente silencioso (habitación con alfombra o colchón cerca)
- Tono: cálido, directo, NO clínico — hablar como padre, no como médico
- Velocidad: moderada — el video debe poder leerse y escucharse sin conflicto
- Si hay acento: no importa, es LATAM — autenticidad > perfección

### Post-producción (30 min estimado)

1. Ensamblar capturas de pantalla en orden del guión
2. Agregar voz en off sincronizada
3. Música de fondo: `soundtrack_flyer.mp3` a 15–20% de volumen
4. Subtítulos automáticos (CapCut lo hace en 1 clic) — necesario para redes sin sonido
5. Exportar en 1080p, formato MP4
6. Duración final: 1:50–2:10 (margen aceptable)

---

## Variantes del video (derivadas del mismo material)

| Variante | Duración | Para qué | Cambios |
|----------|----------|----------|---------|
| **Demo completo** | 2:00 | Wayra, COPEC, Platanus | Este guión |
| **Reel Instagram** | 0:30 | Redes sociales | Solo seg. 3 (flujo niño) + CTA |
| **Clip clínica** | 1:00 | B2B clínicas | Seg. 1 + 5 (dashboard) + CTA |
| **Teaser landing** | 0:15 | Landing page | Seg. 3 (Luna jugando) sin palabras |

---

## Checklist antes de publicar

- [ ] Check-ins de prueba cargados en Supabase (mínimo 7 días)
- [ ] Cuenta demo iniciada en el teléfono
- [ ] Modo avión activado
- [ ] Los 7 estados del check-in están visibles en el video (`scenario → emotion → reaction → breathe → sticker`)
- [ ] Dashboard muestra dato + acción arriba (visible sin scroll)
- [ ] Copy 100% conductual — sin "detecta trastornos", "screening", ni "salud mental infantil"
- [ ] Voz en off no menciona diagnósticos ni usa jerga clínica
- [ ] Subtítulos añadidos para ver sin sonido
- [ ] Duración final: 1:50–2:10 min
- [ ] Exportado en 1080p MP4
- [ ] Guardado en `content/reels/` con nombre `demo-hachiko-kids-v1.mp4`

---

> Contexto: [[hachiko-kids]]
> One-pager: [[one-pager-hachiko-kids]]
> Equipo: [[perfil-edgar-recursos-estrategicos]] · [[perfil-jose-recursos-estrategicos]]
