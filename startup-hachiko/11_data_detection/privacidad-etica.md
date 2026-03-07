---
title: "Privacidad y Etica — Privacy by Design"
date: 2026-03-06
tags: [producto, wellness, corporativo]
status: en-progreso
---

# Privacidad y Etica — Privacy by Design

## Resumen

Hachiko maneja datos de salud mental, la categoria mas sensible que existe. Este documento establece los principios, politicas y controles que garantizan que la privacidad del usuario es inviolable. No es un feature — es la base de todo el producto.

---

## 7 Principios Fundacionales de Privacy by Design (Cavoukian)

| Principio | Aplicacion en Hachiko |
|-----------|----------------------|
| 1. Proactivo, no reactivo | Privacidad integrada desde el diseno del schema, no como parche posterior |
| 2. Privacidad como configuracion predeterminada | Datos compartidos con HR solo si N>=30, nunca datos individuales por defecto |
| 3. Privacidad embebida en el diseno | RLS por org_id, encriptacion pgsodium, audit trail inmutable |
| 4. Funcionalidad completa (sum positiva) | El usuario obtiene coaching personalizado Y su privacidad esta protegida |
| 5. Seguridad de principio a fin | Encriptacion at rest (AES-256) + in transit (TLS 1.3) |
| 6. Visibilidad y transparencia | El usuario puede ver, exportar y borrar todos sus datos en cualquier momento |
| 7. Respeto al usuario | Consentimiento granular, lenguaje claro, revocable en 1 tap |

---

## Cumplimiento Ley 21.719 (Proteccion de Datos Personales, Chile)

### Checklist de cumplimiento

| Requisito | Estado | Implementacion |
|-----------|--------|----------------|
| Consentimiento explicito y granular | Planificado | Pantalla de onboarding con opciones separadas para cada tipo de dato |
| Base legal para tratamiento | Planificado | Consentimiento explicito (Art. 13) — no interes legitimo para datos de salud |
| Derechos ARCO | Planificado | Ver seccion dedicada abajo |
| Datos de salud como categoria especial | Planificado | Encriptacion adicional, acceso restringido, no se comparten individuales |
| DPO (Data Protection Officer) | Por definir | Requerido si se procesan datos de salud a gran escala; evaluar en Fase 2 |
| Evaluacion de impacto (EIPD) | Pendiente | Obligatoria antes de lanzar pilotos con datos reales |
| Transferencia internacional | Planificado | Supabase en region US; evaluar region SA cuando este disponible |
| Notificacion de brechas | Planificado | Proceso de notificacion en 72 horas al regulador + usuarios afectados |

### Derechos ARCO

| Derecho | Implementacion |
|---------|----------------|
| **Acceso** | El usuario puede ver todos sus check-ins, coaching sessions y risk scores en la app |
| **Rectificacion** | El usuario puede editar respuestas de check-ins recientes (ventana de 24h) |
| **Cancelacion** | El usuario puede borrar todos sus datos en 1 tap; borrado efectivo en 30 dias (periodo de gracia) |
| **Oposicion** | El usuario puede revocar consentimiento en cualquier momento; datos dejan de procesarse inmediatamente |

---

## Propiedad de los Datos

- **El empleado es dueno de sus datos**. No la empresa, no Hachiko.
- El empleado puede exportar todos sus datos en formato JSON en cualquier momento.
- El empleado puede borrar todos sus datos permanentemente.
- Si el empleado deja la empresa, sus datos se borran del tenant de la empresa en 30 dias.
- El empleado puede optar por conservar sus datos en una cuenta personal (desvinculada de la empresa).

---

## Reglas de Agregacion

| Regla | Detalle |
|-------|---------|
| Umbral minimo de anonimizacion | N >= 30 empleados por equipo para generar `team_aggregates` |
| Datos individuales | NUNCA visibles para HR, managers o administradores |
| Datos agregados | Solo promedios, tasas de participacion y tendencias |
| Benchmarks entre empresas | Solo si N >= 100 empresas en la plataforma |
| Re-identificacion | Prohibida; diseno del schema impide joins entre individuales y agregados |

---

## Encriptacion

| Capa | Tecnologia | Alcance |
|------|-----------|---------|
| At rest | pgsodium AES-256 (Supabase Vault) | Columnas PII: `checkins.responses`, `coaching_sessions.content` |
| In transit | TLS 1.3 | Todas las conexiones API, WebSocket |
| Backups | Encriptados con clave separada | Backups automaticos de Supabase |

---

## Audit Trail

- Tabla `data_access_logs` es **inmutable** (append-only, sin UPDATE ni DELETE)
- Registra: quien accedio, a que recurso, que accion, timestamp
- Accesible para auditorias de cumplimiento
- Retencion: minimo 5 anos (requisito legal)

---

## Comparticion con Terceros

| Escenario | Permitido | Condiciones |
|-----------|-----------|-------------|
| Datos individuales a terceros | NUNCA | Bajo ninguna circunstancia |
| Datos agregados a mutuales/aseguradoras | Condicional | Solo con consentimiento explicito de la empresa, datos anonimizados, N>=100 |
| Datos para investigacion academica | Condicional | Solo datos anonimizados y agregados, aprobacion de comite de etica |
| Venta de datos a brokers | NUNCA | Linea roja etica absoluta |
| Uso para publicidad/adtech | NUNCA | Linea roja etica absoluta |

---

## Lineas Rojas Eticas

1. **No adtech**: los datos de Hachiko nunca se usan para publicidad dirigida
2. **No vigilancia patronal**: el empleador nunca ve datos individuales de empleados
3. **No uso coercitivo de la mascota**: la mascota nunca castiga, nunca muere, nunca genera culpa excesiva
4. **No discriminacion**: los datos nunca se usan para decisiones de contratacion, despido o promocion
5. **No venta de datos**: bajo ninguna circunstancia, a ningun precio
6. **No dark patterns**: el consentimiento es genuino, el lenguaje es claro, la opcion de salir es obvia

---

## UX de Consentimiento

### Principios de diseno

- Lenguaje amigable, no jerga legal
- Opciones granulares (puedo aceptar check-ins pero rechazar senales pasivas)
- Revocable en 1 tap desde configuracion
- Visual: iconos claros que muestran que datos se recolectan
- Sin dark patterns: el boton "No acepto" es igual de visible que "Acepto"

### Ejemplo de flujo

```
Pantalla 1: "Tu mascota quiere conocerte"
- Explicacion simple de que datos se recolectan y por que
- Enlace a politica de privacidad completa

Pantalla 2: "Tu eliges que compartir"
- [ ] Check-ins diarios (como se siente tu mascota)
- [ ] Check-ins semanales (revision de bienestar)
- [ ] Datos anonimos para tu equipo (solo si sois 30+)
- Cada opcion con explicacion de 1 linea

Pantalla 3: "Tus datos son tuyos"
- Puedes exportar todo en cualquier momento
- Puedes borrar todo en 1 tap
- Tu jefe nunca ve tus respuestas individuales
```

---

## Comparacion con Fracasos de Privacidad en el Sector

| Empresa | Problema | Consecuencia | Como Hachiko lo evita |
|---------|----------|-------------|----------------------|
| BetterHelp | Compartio datos de salud mental con Facebook y Snapchat para ads | Multa $7.8M FTC (2023) | Linea roja: nunca adtech, nunca compartir datos con redes sociales |
| Cerebral | Uso pixels de tracking que enviaron datos de salud a terceros | Multa $7M + acuerdo FTC (2023) | No tracking pixels, no analytics de terceros en flujos de salud |
| Headspace | Cambio politica de privacidad para compartir datos con empleadores | Perdida de confianza de usuarios | Arquitectura que hace imposible compartir datos individuales con empleadores |

---

## Proximos pasos

- [ ] Completar Evaluacion de Impacto en Proteccion de Datos (EIPD) antes del primer piloto
- [ ] Consultar con abogado especialista en Ley 21.719
- [ ] Definir si se necesita DPO formal
- [ ] Disenar pantallas de consentimiento con Edgar
- [ ] Revisar con psicologo organizacional las implicaciones eticas

---

> Modelo de datos: [[modelo-datos]]
> Senales: [[senales-smartphone]]
> Proyecto maestro: [[hachiko-proyecto-maestro]] seccion 12
> Equipo: [[perfil-edgar-recursos-estrategicos]] · [[perfil-jose-recursos-estrategicos]]
