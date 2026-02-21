---
title: "Deep Research: Recomendación de restaurantes según nacionalidad del viajero"
aliases: [restaurantes-nacionalidad-research]
date: 2026-02-20
tags: [mercado, travel, producto]
status: explorando
miro: ""
---

# Deep Research: Recomendación de restaurantes según nacionalidad del viajero

> Investigación detallada como insumo para [[ideas/2026-02-20-recomendacion-restaurantes-nacionalidad|Recomendación de restaurantes según nacionalidad]]

---

## Tamaño de mercado (TAM/SAM/SOM)

### Mercado global de food-tech y restaurant discovery

El mercado global de food-tech se estima en **USD 220-293 mil millones en 2024-2025**, con proyecciones de alcanzar USD 498-601 mil millones para 2033-2034, creciendo a un CAGR de 8.4-11.6% ([Precedence Research](https://www.precedenceresearch.com/food-technology-market), [Emergen Research](https://www.emergenresearch.com/industry-report/food-tech-market), [IMARC Group](https://www.imarcgroup.com/food-tech-market)). El segmento de software crece al 11.13% anual. Norteamerica domina con ~38% del mercado; Asia-Pacifico representa 33%.

El mercado especifico de AI en food & beverages se valoró en **USD 14.41 mil millones en 2025**, con CAGR de 38.8% ([StartUs Insights](https://www.startus-insights.com/innovators-guide/food-ai-startups/)).

El mercado de concierge digital para hoteles (donde encaja el B2B de esta idea) se espera alcance **USD 509 millones en 2025**, creciendo a 7.4% anual.

### Turismo gastronómico (food tourism)

El mercado global de turismo culinario alcanzó aproximadamente **USD 967-1,090 mil millones en 2024-2025**, y se proyecta llegar a USD 3,636 mil millones para 2033, con un CAGR de ~18% ([Business Research Insights](https://www.businessresearchinsights.com/market-reports/food-tourism-market-118763), [The Rooftop Guide](https://www.therooftopguide.com/rooftop-news/culinary-tourism-market-2025.html)). Europa lidera el mercado actualmente, pero Asia-Pacifico y LATAM son las regiones de mayor crecimiento.

### Turistas internacionales y gasto en alimentación

Segun [UN Tourism](https://www.untourism.int/news/international-tourist-arrivals-up-4-in-2025-reflecting-strong-travel-demand-around-the-world):
- **1.52 mil millones** de turistas internacionales en 2025 (+4% vs 2024)
- **USD 1.9 trillones** en ingresos globales por turismo internacional
- Los viajeros gastan aproximadamente **25% de su presupuesto de viaje** en alimentos y bebidas ([World Food Travel Association](https://www.worldfoodtravel.org/news-the-economic-impact-of-food-tourism))
- Eso equivale a ~**USD 475 mil millones** anuales solo en gasto de turistas internacionales en alimentación
- El gasto diario promedio en comida por turista es de ~**USD 58/dia** ([Access Development](https://blog.accessdevelopment.com/tourism-and-travel-statistics-the-ultimate-collection))

### Datos LATAM

- En 2023, las llegadas internacionales a LATAM y Caribe alcanzaron **+115 millones** de turistas (+23% interanual)
- LATAM tiene la tasa de crecimiento más rapida en turismo culinario dentro de la región LAMEA
- Ciudades como Lima, Ciudad de México, Buenos Aires, Guadalajara y Bogota se posicionan como capitales gastronómicas globales
- La "Nueva Cocina Latinoamericana" y el reconocimiento UNESCO de la cocina mexicana (2010) y el ceviche peruano han elevado el perfil de la región ([Statista](https://www.statista.com/statistics/1483571/best-food-cities-latin-america/))

### Calculo TAM/SAM/SOM

| Nivel | Calculo | Valor estimado |
|-------|---------|----------------|
| **TAM** | Gasto total de turistas internacionales en alimentación (1.52B turistas x 25% presupuesto en food) | ~USD 475B/año |
| **SAM** | Turistas que usan apps/plataformas digitales para decidir dónde comer (estimado 30-40% del TAM) | ~USD 142-190B/año |
| **SOM** | Captura realista en LATAM como primer mercado, primeros 3-5 años, via comisiones/SaaS B2B (0.01-0.05% del SAM) | ~USD 14-95M/año |

**Nota**: El SOM es muy sensible al modelo de negocio. Si es B2B (API para hoteles), la captura se mide por suscripciones. Si es B2C (app), se mide por conversiones de reserva. El mercado es enorme, pero la penetración inicial depende de la tracción del canal de distribución.

---

## Evidencia y estudios existentes

### Estudios academicos sobre nacionalidad y preferencia gastronomica

1. **"Cultural dimensions associated with food choice: A survey based multi-country study"** (ScienceDirect, 2021) — Estudio con **11,919 encuestados de 16 paises** que confirma que las dimensiones culturales de Hofstede influyen significativamente en la elección de alimentos. Los europeos priorizan atributos sensoriales; los rusos, disponibilidad; los chinos, salud; los japoneses, costo. Las sociedades con alto Uncertainty Avoidance Index (UAI) son **menos propensas a probar cocinas nuevas**. ([ScienceDirect](https://www.sciencedirect.com/science/article/abs/pii/S1878450X2100113X))

2. **"Motivation and satisfaction of Chinese and U.S. tourists in restaurants"** (Tourism Management, 2019) — Texto-minería de reseñas online muestra que los turistas chinos son **menos propensos a dar ratings bajos** y están más fascinados por la comida ofrecida, mientras que los turistas estadounidenses muestran patrones diferentes. ([ScienceDirect](https://www.sciencedirect.com/science/article/abs/pii/S0261517719302687))

3. **"Does cultural distance affect online review ratings?"** (Springer, Journal of Management and Governance) — Confirma que la **distancia cultural nacional tiene efecto negativo en los ratings** de reseñas online, y que compartir un idioma comun se asocia positivamente con la valoración. ([Springer](https://link.springer.com/article/10.1007/s10997-020-09531-z))

4. **"Exploring Tourist Dining Preferences Based on Restaurant Reviews"** (Journal of Travel Research, 2019) — Análisis de preferencias gastronómicas de turistas basado en reseñas, confirmando que las preferencias de restaurantes varían significativamente según el origen del viajero. ([SAGE Journals](https://journals.sagepub.com/doi/10.1177/0047287517744672))

5. **"Cross-Cultural Differences in Food Preferences and Consumption Patterns"** (Journal of Food Sciences, 2024) — Revisión que confirma que la herencia cultural influye profundamente en las preferencias y hábitos de consumo alimentario. ([CariJournals](https://carijournals.org/journals/index.php/JFS/article/view/1841))

6. **Rating scales cross-culturales** (MeasuringU) — Estudio con 215 participantes de 4 paises muestra diferencias estadísticas de **10-15% en ratings** para experiencias similares. Los japoneses evitan extremos positivos y prefieren respuestas neutrales. ([MeasuringU](https://measuringu.com/scales-cultural-effects/))

### Segmentacion de turistas por comportamiento alimentario

La investigación identifica tres segmentos claros de turistas gastronomicos ([ResearchGate](https://www.researchgate.net/publication/282556794_Tourists'_Approach_to_Local_Food)):

| Segmento | Comportamiento | % aproximado |
|----------|---------------|--------------|
| **Sensory Seekers** | Buscan sabor y calidad; el más grande | ~45% |
| **Cultural Experiencers** | Priorizan conexión con cultura local y autenticidad | ~35% |
| **Price Conscious** | Enfasis en precio sobre experiencia | ~20% |

**Hallazgo clave**: No es binario "familiar vs. local". Los viajeros quieren **ambos**, pero en diferentes momentos del viaje. Algunos prefieren lo familiar al inicio (comfort food), y se aventuran a lo local conforme ganan confianza. La familiaridad aumenta con la exposición repetida al destino. ([The Travel Psychologist](https://thetravelpsychologist.co.uk/what-is-food-tourism-and-why-is-it-growing-in-popularity/))

### Startups y proyectos similares

- **GPR (Global Personalized Recommender)** — Sistema publicado en ACM WSDM 2021 que usa **+3 mil millones de transacciones de pago anonimizadas** para recomendar restaurantes a 450M+ tarjetahabientes en 200+ paises y 35K+ ciudades. Contempla variaciones regionales en preferencias alimentarias. Es el antecedente más relevante a nivel técnico, aunque es un sistema financiero interno, no un producto consumer. ([ACM Digital Library](https://dl.acm.org/doi/10.1145/3437963.3441709))

- **Tastewise** — Plataforma de inteligencia alimentaria con GenAI. Levantó **USD 50M en Serie B** (2025, liderado por TELUS Global Ventures). Total: USD 72M. Analiza trillones de señales de alimentos en tiempo real. Usado por 80% de las top F&B companies (Mars, Kraft Heinz, Campbell's). No es consumer-facing ni orientado a viajeros, pero valida que la inteligencia cultural/gastronómica tiene mercado B2B. ([Calcalist](https://www.calcalistech.com/ctechnews/article/bkthj9sxgl))

---

## Análisis de competencia ampliado

### Competidores directos (recomendación gastronómica personalizada)

| Competidor | Qué hace | Funding | Gap que deja |
|------------|----------|---------|--------------|
| **Qloo** | "Cultural AI" — predice preferencias de consumidores en 12+ categorias (dining, music, travel). Usa 3.7B lifestyle entities y señales de comportamiento anonimizadas. | USD 74-97M total (Serie C USD 25M en Feb 2024, PE USD 20M en Jul 2024) | No es un producto consumer-facing directo. No se enfoca en el contexto viajero/turista específicamente. Es una API B2B para empresas. ([Qloo](https://www.qloo.com/), [TechTarget](https://www.techtarget.com/searchenterpriseai/news/366570853/Taste-intelligence-and-AI-vendor-raises-25-million)) |
| **DoorDash Zesty** | App AI social para descubrir restaurantes. Chatbot con prompts naturales ("A low-key dinner in Williamsburg"). Combina data de DoorDash, Google Maps, TikTok, Reddit. Red social con fotos y reviews. | Respaldado por DoorDash (market cap ~USD 70B). Lanzado Dic 2025 en SF Bay Area y NYC. | Solo disponible en EE.UU. No personaliza por cultura/nacionalidad. No está orientado a turistas internacionales. ([TechCrunch](https://techcrunch.com/2025/12/16/doordash-rolls-out-zesty-an-ai-social-app-for-discovering-new-restaurants/)) |
| **Paire** | AI + quizzes de gusto personal para matchear con restaurantes. Genera "PersonalTaste Profile" privado. | Pre-seed/seed (monto no público). | No usa cultura/nacionalidad como input. Requiere completar 20+ quizzes antes de dar buenas recomendaciones. No orientado a viajeros. ([Paire](https://paire.io/)) |
| **Umamii** | App móvil con recomendaciones curadas, seguir chefs, reviews reales, listas personalizadas. | Pre-seed; planea levantar seed en 2026. | Enfoque en foodie lifestyle local, no en turistas internacionales ni personalización cultural. |

### Competidores indirectos (plataformas con datos relevantes)

| Competidor | Qué hace | Funding/Status | Gap que deja |
|------------|----------|----------------|--------------|
| **Google Maps** | Reseñas masivas, ~200M+ lugares, AI generativa para recomendaciones. | Alphabet (market cap ~USD 2T). | Personalización basada en historial personal, no en contexto cultural. Traduce reseñas pero no filtra por relevancia cultural. ([Google Developers Blog](https://developers.googleblog.com/using-generative-ai-for-travel-inspiration-and-discovery/)) |
| **TripAdvisor** | 1B+ reseñas de viajeros. Nuevo mapa interactivo con Mapbox. | Publico (TRIP, market cap ~USD 3B). | Rankings genéricos. Tiene datos de nacionalidad del reviewer pero no los usa para personalizar. |
| **TheFork (TripAdvisor Group)** | Reservas en Europa y LATAM. 55K+ restaurantes. | Propiedad de TripAdvisor. | Sin personalización por origen del comensal. |
| **OpenTable** | Reservas + AI Concierge embebido en perfiles de restaurantes. | Propiedad de Booking Holdings. | AI Concierge responde preguntas sobre el restaurante, no personaliza por cultura. |
| **Tastewise** | Inteligencia de mercado F&B con GenAI. | USD 72M total. | B2B para CPG companies, no para consumidores ni viajeros. |
| **Culture Trip** | Contenido curado de viajes por cultura. 300+ expertos locales. Fundado 2011. | Levantó USD 100M+ total. | Contenido editorial, no motor de recomendación algorítmico. No personaliza por nacionalidad del lector. |

### Apps regionales de nicho

- **Tabelog** (Japon): El "Yelp japonés" con 7M+ restaurantes. Solo en japonés, no orientado a viajeros extranjeros.
- **Gurunavi** (Japon): Disponible en inglés, chino y coreano. Para turistas EN Japon, no de japoneses viajando.
- **Dianping/Meituan** (China): Domina el mercado chino de reseñas. Turistas chinos lo usan en el extranjero informalmente.

### Conclusion del análisis competitivo

**Nadie cruza sistematicamente nacionalidad/cultura del viajero con recomendación gastronómica como producto principal.** Qloo se acerca desde el lado B2B de "taste intelligence", pero no tiene un producto consumer-facing para viajeros. DoorDash Zesty y Paire personalizan, pero por historial individual, no por contexto cultural. El gap existe.

---

## Datos disponibles y viabilidad técnica

### APIs publicas de datos de restaurantes

| API | Cobertura | Datos de reviews | Reviewer origin? | Costo |
|-----|-----------|-----------------|-------------------|-------|
| **Google Places API (New)** | Global, 200M+ lugares | Reviews con `textLanguageCode`, `originalLanguage`, rating, texto | **Parcial**: idioma de la reseña disponible; ubicación del reviewer NO directamente disponible via API oficial. Scrapers de terceros (Apify, Outscraper, SerpApi) sí extraen `reviewOrigin` y `language`. | 10K calls gratis/mes (Essentials). Atmosphere data en tier Pro. ([Google Developers](https://developers.google.com/maps/documentation/places/web-service/data-fields)) |
| **Yelp Fusion API** | 32 paises, fuerte en EE.UU. | Reviews con rating, texto | **No**: No expone nacionalidad ni ubicación del reviewer via API. | Gratis hasta cierto volumen; planes enterprise disponibles. ([Yelp Developers](https://docs.developer.yelp.com/docs/places-intro)) |
| **Foursquare Places API** | Global, 100M+ POIs | Reviews, ratings, popularidad | **No**: No expone datos de reviewer origin. | Freemium con generosos límites gratuitos. ([Foursquare](https://foursquare.com/products/places-api/)) |
| **TripAdvisor Content API** | Global, 1B+ reseñas | Limitado: max 5 reviews por location via API oficial | **Parcial**: Perfiles de reviewers incluyen ubicación autodeclarada, pero API oficial muy restringida. Terceros (DataForSEO) ofrecen datos de perfil del reviewer. ([TripAdvisor Developer Portal](https://developer-tripadvisor.com/content-api/)) |

### Viabilidad de obtener nacionalidad del reviewer

**Metodo 1: Detección de idioma (más viable)**
- **FastText** (Meta): Identifica 176 idiomas con alta precisión (~120K oraciones/seg). Modelo open source. ([FastText](https://fasttext.cc/docs/en/language-identification.html))
- **langdetect**: Port de Python de la librería de Shuyo. 99%+ accuracy en 49 idiomas, pero lento para producción. ([PyPI](https://pypi.org/project/fasttext-langdetect/))
- **XLM-roBERTa**: Modelo multilingüe entrenado en 198M tweets, fine-tuned para 8 idiomas. Útil para sentiment + idioma simultáneo.
- **Limitación**: idioma != nacionalidad (un brasileño puede escribir en inglés, un francófono suizo no es necesariamente francés).

**Metodo 2: Análisis de metadata del reviewer (moderadamente viable)**
- TripAdvisor muestra la ciudad del reviewer en su perfil público
- Google Maps muestra el "Local Guide" level y a veces la ubicación
- Se puede inferir país por la combinación de: idioma de escritura + ubicación declarada + patrones de viaje

**Metodo 3: Análisis de contenido cultural (experimental)**
- NLP para detectar referencias culturales en el texto (menciones a platos específicos, comparaciones con su país)
- Análisis de sentimiento diferenciado por cultura (los japoneses dan ratings más conservadores, los americanos más extremos)
- Esto requeriría un dataset etiquetado para entrenar

### Modelos de recomendación apropiados

Según la literatura ([ScienceDirect: Systematic review on food recommender systems](https://www.sciencedirect.com/science/article/pii/S0957417423026684)):

| Modelo | Uso en food-rec | Aplicabilidad |
|--------|----------------|---------------|
| **Collaborative filtering** | 16.9% de food recommenders lo usan. "Viajeros similares a ti también les gustó X" | **Alto**: Se puede agrupar por nacionalidad como proxy de "usuarios similares" |
| **Content-based filtering** | Matchea atributos del restaurante con preferencias del usuario | **Medio**: Requiere buen etiquetado de restaurantes (tipo cocina, nivel de picante, etc.) |
| **Hybrid (collaborative + content + sentiment)** | Estado del arte. Combina multiples señales | **Óptimo**: Cruza datos de comportamiento por nacionalidad + atributos del restaurante + sentimiento de reseñas |
| **Neural collaborative filtering** | Deep learning para patrones complejos | **Futuro**: Requiere mucho dato, pero ofrece mejor precisión |

### Viabilidad de un MVP

**MVP recomendado: "Cultural Food Score"**
1. Tomar 3 ciudades turísticas de LATAM (Santiago, CDMX, Buenos Aires)
2. Extraer reseñas de Google Maps de restaurantes populares (via SerpApi o Outscraper — legal si se respetan rate limits y es para investigación)
3. Clasificar reseñas por idioma usando FastText
4. Calcular un "rating cultural" por restaurante: ¿qué rating dan los reviewers en español vs. inglés vs. portugués vs. otros idiomas?
5. Publicar como web app simple: "Elige tu nacionalidad → ve los restaurantes mejor valorados por viajeros como tú"

**Costo estimado del MVP**: USD 200-500 (APIs + hosting)
**Tiempo estimado**: 2-4 semanas con 2 personas part-time
**Datos mínimos necesarios**: ~10,000 reseñas por ciudad, clasificadas por idioma

---

## Regulaciones y consideraciones

### Privacidad y GDPR

- **GDPR Art. 9**: El procesamiento de datos que revelen **origen racial o étnico** está generalmente prohibido. La nacionalidad como input para recomendaciones podría caer en esta categoría si se procesa como "dato sensible" ([GDPR Art. 9](https://gdpr-info.eu/art-9-gdpr/)).
- **GDPR Art. 22**: Los usuarios tienen derecho a **no ser sujetos de decisiones basadas únicamente en procesamiento automatizado**, incluyendo profiling, que produzca efectos significativos. Sin embargo, si la recomendación es revisada por humanos o es solo una sugerencia (no una decisión), el riesgo es menor. ([GDPR Art. 22](https://gdpr-info.eu/art-22-gdpr/))
- **Mitigación**: Usar **idioma de preferencia** en lugar de nacionalidad como input principal. El idioma es un dato funcional, no sensible. El usuario puede autoseleccionar su "perfil cultural" voluntariamente (opt-in explícito).
- **Recital 71 GDPR**: Requiere prevenir **efectos discriminatorios** basados en origen racial/étnico en profiling automatizado. ([GDPR Recital 71](https://gdpr-info.eu/recitals/no-71/))

### ToS de plataformas de reseñas

- **TripAdvisor**: Prohíbe explícitamente scraping no autorizado (spiders, scrapers, robots). Violación potencial del CFAA en EE.UU. Alternativa legal: usar la API oficial (limitada a 5 reviews/location) o pagar por datos licenciados. ([PromptCloud](https://www.promptcloud.com/blog/tripadvisor-scraping-guide/))
- **Google Maps**: ToS restrictivos para scraping. Google Places API permite acceso a datos de reviews de forma legal pero con limitaciones. Servicios de terceros (SerpApi, Outscraper, Apify) ofrecen acceso a datos por precio.
- **Enfoque recomendado**: APIs oficiales + datasets públicos (Yelp Academic Dataset, Google Local Reviews Dataset en Kaggle) + datos propios generados por usuarios de la plataforma.

### Sensibilidad cultural

- **Riesgo de estereotipar**: Decir "los japoneses prefieren X" puede ser ofensivo y reduccionista. Las preferencias son individuales, no nacionales.
- **Mitigación**:
  - Usar nacionalidad como **uno de muchos signals**, no como el único factor
  - Lenguaje tipo "viajeros de tu región también disfrutaron" en lugar de "por ser japonés, te recomendamos"
  - Permitir al usuario **refinar su perfil** más allá de la nacionalidad
  - Incluir **diversidad de opciones** (no solo "comfort food" de su cultura)
- **Precedente positivo**: Spotify y Netflix personalizan por región/idioma sin controversia porque lo presentan como "personalización", no como "estereotipo".

---

## Respuestas a preguntas abiertas

### 1. ¿Es la nacionalidad un buen proxy para preferencia gastronómica, o es demasiado simplista?

**Es un proxy útil pero insuficiente por sí solo.** La evidencia de Hofstede (11,919 encuestados, 16 paises) confirma que las dimensiones culturales nacionales influyen en la elección alimentaria. Los estudios de MeasuringU muestran diferencias de 10-15% en ratings entre nacionalidades para experiencias idénticas. Sin embargo, la variación intra-nacional es alta: un japonés millennial que viaja frecuentemente tiene preferencias muy diferentes a un japonés de 60 años en su primer viaje. **Recomendación**: usar nacionalidad como **signal inicial** (cold start), pero refinar rápidamente con comportamiento individual.

### 2. ¿Se puede obtener data suficiente de reseñas por nacionalidad sin violar ToS?

**Parcialmente sí, pero con limitaciones.** Las APIs oficiales de Google Places y TripAdvisor ofrecen datos de idioma de la reseña (no nacionalidad directamente). FastText puede clasificar idioma con alta precisión. Servicios de terceros (SerpApi, Outscraper, DataForSEO) ofrecen datos ampliados de forma legal por suscripción. El Yelp Academic Dataset es gratuito para investigación. **Para un MVP**, los datos disponibles legalmente son suficientes si se usa idioma como proxy de origen cultural.

### 3. ¿El viajero quiere comida familiar o local?

**Ambos, pero en momentos diferentes.** La investigación identifica tres segmentos: Sensory Seekers (~45%), Cultural Experiencers (~35%) y Price Conscious (~20%). La familiaridad es el factor más influyente en la actitud hacia comida local, y aumenta con exposiciones repetidas al destino. **Oportunidad**: el sistema puede ofrecer **ambos modos** — "Descubre lo local" (restaurantes que turistas de tu cultura han valorado alto) + "Comfort food" (restaurantes con cocina similar a la tuya). Esto es un diferenciador frente a plataformas genéricas.

### 4. ¿Hay volumen suficiente de reseñas por nacionalidad en ciudades medianas?

**En ciudades turísticas sí; en ciudades medianas, probablemente no.** Google Maps tiene cobertura masiva en ciudades como Santiago, CDMX, Buenos Aires, Lima, Bogota. En ciudades medianas (Valparaíso, Puebla, Mendoza), el volumen de reseñas en idiomas no-locales será mucho menor. **Recomendación**: lanzar en ciudades tier-1 turísticas primero. Para ciudades menores, complementar con modelos content-based que no dependan de volumen de reseñas.

### 5. ¿El modelo B2B tiene más tracción que el B2C?

**Probablemente sí.** El mercado de concierge digital para hoteles crece a 7.4% anual. Los hoteles tienen el dolor directo (sus huéspedes preguntan dónde comer) y presupuesto para soluciones. Una API o widget embebido en el concierge digital del hotel es más fácil de distribuir que una app consumer. Además, el canal B2B via agencias de viaje es un terreno donde Edgar tiene contactos directos. **Sugerencia**: empezar B2B (API para hoteles/agencias) y usar los datos generados para alimentar un futuro producto B2C.

---

## Veredicto y recomendación

### ¿Vale la pena seguir explorando?

**Sí, con precauciones.** La evidencia confirma que:
- El mercado es enorme (turismo gastronómico ~USD 1T)
- Existe correlación demostrada entre cultura/nacionalidad y preferencias alimentarias
- Ningún competidor ocupa exactamente este nicho (personalización por cultura del viajero)
- El equipo tiene fit parcial (Edgar en travel, Jose en datos)

### Mayor riesgo

**La defensibilidad es baja.** Si la idea funciona, Google, TripAdvisor o DoorDash pueden replicarla trivialmente con sus datos existentes. El moat tendría que construirse via: (a) datos propietarios de preferencias culturales que los incumbentes no tienen, (b) relaciones B2B con hoteles/agencias que generen lock-in, o (c) velocidad de ejecución en LATAM como mercado underserved.

Segundo riesgo: **el proxy idioma->nacionalidad es ruidoso**. Un colombiano escribiendo en inglés se clasificaría como "anglófono", no como colombiano. Esto limita la precisión del MVP.

### MVP más lean para validar

1. **Semana 1-2**: Extraer 10,000 reseñas de Google Maps de restaurantes en Santiago (via SerpApi/Outscraper, ~USD 100)
2. **Semana 2-3**: Clasificar por idioma con FastText. Calcular "rating por segmento lingüístico" para cada restaurante
3. **Semana 3-4**: Landing page simple: "¿De dónde vienes? Te mostramos los restaurantes que viajeros como tú han amado en Santiago"
4. **Métrica de validación**: ¿Los rankings por segmento lingüístico son estadísticamente diferentes de los rankings genéricos? Si sí, la hipótesis base se confirma.
5. **Costo total**: USD 200-500 + tiempo de 2 personas part-time

### Scorecard

| Criterio | Score (1-10) | Justificación |
|----------|-------------|---------------|
| **Dolor real** | 6/10 | El dolor existe pero es "nice to have", no "hair on fire". Los viajeros se las arreglan con Google Maps. El dolor es más agudo para nacionalidades con restricciones alimentarias (halal, kosher, vegetarianismo cultural). |
| **Tamaño de mercado** | 9/10 | TAM enorme (turismo gastronómico ~USD 1T). SAM más modesto pero aun significativo. El mercado crece a doble dígito. |
| **Viabilidad técnica** | 7/10 | APIs disponibles, NLP maduro, modelos de recomendación probados. La limitación es que idioma != nacionalidad (proxy imperfecto). Un MVP es construible en 4 semanas. |
| **Fit con el equipo** | 6/10 | Edgar aporta flujos de viajeros (PNR/GDS) y contactos en travel. Jose aporta pipeline de datos y ML. El gap es que ninguno tiene relaciones en gastro/restaurantes ni experiencia en food-tech. |
| **Defensibilidad** | 3/10 | Baja. Los incumbentes (Google, TripAdvisor) tienen los datos y podrían replicarlo. El moat solo se construye si se acumulan datos propietarios o relaciones B2B difíciles de replicar. |
| **TOTAL** | **6.2/10** | Idea con mercado grande pero dolor moderado y defensibilidad baja. Vale la pena un MVP lean para validar antes de comprometer recursos significativos. |

---

## Siguiente paso

Basado en la investigación, los pasos concretos son:

1. **Validacion de datos (Semana 1-2)**:
   - Crear cuenta en SerpApi o Outscraper (plan gratuito/básico)
   - Extraer reseñas de ~200 restaurantes populares en Santiago, Chile
   - Clasificar reseñas por idioma usando FastText
   - Calcular si los rankings difieren estadisticamente entre segmentos lingüísticos

2. **Análisis exploratorio (Semana 2-3)**:
   - ¿Los restaurantes mejor rankeados por reviewers en inglés son diferentes a los mejor rankeados por reviewers en español?
   - ¿Hay clusters de restaurantes que atraen desproporcionalmente a ciertos segmentos lingüísticos?
   - Documentar hallazgos con datos concretos

3. **Decisión go/no-go (Semana 3-4)**:
   - Si hay diferencias estadísticas significativas → construir landing page + prototipo
   - Si no hay diferencias → [[archivo/restaurantes-nacionalidad-descartado|mover a archivo]] con aprendizajes documentados

4. **Si go → Prototipo B2B (Semana 4-8)**:
   - Landing page con demo interactivo para 3 ciudades LATAM
   - Pitch a 5 hoteles/agencias de viaje del network de Edgar
   - Medir: ¿los hoteleros ven valor en esto? ¿Pagarían por un widget de concierge cultural?

5. **Explorar alianza con Qloo**:
   - Qloo tiene la infraestructura de "taste AI" pero no un producto vertical para turistas
   - Investigar si hay oportunidad de construir sobre su API en lugar de competir
