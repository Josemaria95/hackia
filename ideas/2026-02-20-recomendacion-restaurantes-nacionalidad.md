---
title: "Recomendación de restaurantes según nacionalidad del viajero"
aliases: [restaurantes-nacionalidad, food-recs, gastronomia-viajeros]
date: 2026-02-20
tags: [hipotesis, travel, producto]
status: explorando
miro: ""
---

# Recomendación de restaurantes según nacionalidad del viajero

## El problema

Un viajero llega a una ciudad nueva y no sabe dónde comer. Las plataformas existentes (Google Maps, TripAdvisor, Yelp) muestran los restaurantes más populares en general, pero no consideran las preferencias gastronómicas asociadas a la cultura de origen del viajero:

- Un japonés en Santiago probablemente no busca lo mismo que un brasileño en Santiago
- Las restricciones alimentarias varían por cultura (halal, kosher, vegetarianismo por religión)
- El concepto de "buena relación precio-calidad" es relativo al poder adquisitivo del país de origen
- Los horarios de comida varían drásticamente entre culturas (un español cena a las 22:00, un alemán a las 18:00)
- El nivel de picante, dulzor o condimentación aceptable varía por paladar cultural

## Hipótesis

> Si le recomendamos restaurantes a un viajero considerando su nacionalidad/cultura de origen (no solo su ubicación actual), la tasa de satisfacción y conversión será significativamente mayor que las recomendaciones genéricas.

## Cómo podría funcionar

1. **Input**: nacionalidad del viajero + ciudad destino + preferencias básicas (presupuesto, restricciones)
2. **Motor de recomendación**: cruza datos de reseñas filtradas por viajeros de la misma nacionalidad, preferencias culturales conocidas y popularidad local real
3. **Output**: lista curada de restaurantes rankeados por relevancia cultural, no solo por rating genérico

## Fuentes de datos posibles

- Reseñas de Google Maps/TripAdvisor filtradas por idioma o país del reviewer
- Datos de reservas de plataformas como TheFork, OpenTable
- APIs de restaurantes locales (Rappi, PedidosYa tienen metadata de cocina)
- Datos de agencias de viaje sobre destinos frecuentes por nacionalidad (Edgar tiene acceso a esto vía GDS/PNR)
- Encuestas o feedback directo de viajeros

## Fit con el equipo

| | Edgar | Jose |
|---|-------|------|
| **Aporta** | Conoce los flujos de viajeros por nacionalidad desde los datos de PNR/GDS. Sabe qué nacionalidades viajan a qué destinos y en qué volumen. Tiene contacto directo con operadores turísticos que manejan grupos por nacionalidad | Puede construir el pipeline de datos: scraping de reseñas, NLP para clasificar por nacionalidad/idioma, modelo de recomendación. Conoce cómo se integran estos sistemas en productos enterprise |
| **Gap** | No tiene experiencia en gastronomía ni en plataformas de food-tech | No tiene datos propios de restaurantes ni relaciones en la industria gastronómica |

## Modelo de negocio potencial

- **B2C**: App/web para viajeros (freemium con recomendaciones premium)
- **B2B para hoteles/agencias**: Widget o API que hoteles integran en su concierge digital → "restaurantes recomendados para huéspedes de tu nacionalidad"
- **B2B para restaurantes**: Insights sobre qué nacionalidades son su público potencial y cómo adaptar su oferta

## Competencia y diferenciación

| Competidor | Qué hace | Qué le falta |
|---|---|---|
| Google Maps | Reseñas masivas, ubicación | No filtra por cultura del viajero |
| TripAdvisor | Reseñas de viajeros | Ranking genérico, no personalizado por origen |
| Yelp | Reseñas locales | Casi nulo fuera de EE.UU. |
| TheFork | Reservas en Europa/LATAM | Sin personalización cultural |
| Bento (Japón) | Recomendaciones para japoneses en el exterior | Nicho único, no escalable a otras nacionalidades |

**Diferenciación**: ninguna plataforma cruza sistemáticamente nacionalidad del viajero con recomendación gastronómica.

## Preguntas abiertas

- [ ] ¿Es la nacionalidad un buen proxy para preferencia gastronómica, o es demasiado simplista?
- [ ] ¿Se puede obtener data suficiente de reseñas por nacionalidad sin violar ToS de las plataformas?
- [ ] ¿El viajero realmente quiere comida "familiar" o justamente quiere probar lo local? (quizás ambos, en diferentes momentos del viaje)
- [ ] ¿Hay volumen suficiente de reseñas por nacionalidad en ciudades medianas?
- [ ] ¿El modelo B2B (hoteles/agencias) tiene más tracción que el B2C directo?

---

> Deep research detallado en [[deepresearch/restaurantes-nacionalidad-research|Deep Research: Restaurantes según nacionalidad]]

→ Contexto: [[espacio-de-oportunidad]] (Prioridad 0.5)
→ Equipo: [[perfil-edgar-recursos-estrategicos]] · [[perfil-jose-recursos-estrategicos]]
→ Puede ser feature de: [[2026-02-20-ruta-viva-salud-mental-cultural-b2b2c|Ruta Viva (desafío nivel 2)]]
