---
title: "Base de Datos — Centros de Salud Mental (Santiago & Lima)"
date: 2026-03-19
tags: [producto, wellness]
status: en-progreso
---

# BD Centros de Salud Mental — Santiago & Lima

Base de datos verificada de centros de salud mental con información de contacto, ubicación y especialidades.

## Resumen

| Ciudad | Centros | Archivo |
|--------|---------|---------|
| Santiago de Chile | 22 | `centros-santiago.json` |
| Lima, Perú | 22 | `centros-lima.json` |
| **Total** | **44** | |

## Estructura de datos

Cada centro incluye:
- `id` — Identificador único (stgo-XXX / lima-XXX)
- `nombre` — Nombre oficial verificado
- `ciudad` / `pais` — Ubicación
- `comuna` / `distrito` — División administrativa
- `direccion` — Dirección física verificada
- `telefono` — Teléfono principal
- `telefonos_adicionales` — Otros teléfonos (opcional)
- `email` — Correo electrónico (cuando disponible)
- `whatsapp` — WhatsApp (cuando disponible)
- `web` — URL del sitio web verificada
- `logo_url` — URL del logo (pendiente de extracción manual)
- `tipo` — Categoría del centro
- `especialidades` — Lista de especialidades verificadas
- `verificado` — Boolean indicando si los datos fueron verificados via web
- `fuente` — URL de la fuente de verificación

## Santiago de Chile (22 centros)

### Hospitales y centros públicos (4)
| # | Centro | Tipo | Comuna |
|---|--------|------|--------|
| 001 | Instituto Psiquiátrico Dr. José Horwitz Barak | Hospital público | Recoleta |
| 003 | COSAM Dr. Germán Greve Schlegel (Provisam) | COSAM | Providencia |
| 017 | COSAM Ñuñoa | COSAM | Ñuñoa |
| 018 | COSAM Peñalolén | COSAM | Peñalolén |

### Centros universitarios (4)
| # | Centro | Universidad | Comuna |
|---|--------|-------------|--------|
| 002 | Clínica Psiquiátrica Universitaria | U. de Chile | Recoleta |
| 009 | CAPs — Centro de Psicología Aplicada | U. de Chile (FACSO) | Ñuñoa |
| 015 | Clínica Psicológica UDP | U. Diego Portales | Santiago |
| 016 | Centro de Atención Psicológica CAP | USACH | Santiago |

### Clínicas privadas de salud mental (6)
| # | Centro | Comuna |
|---|--------|--------|
| 006 | PsicoMedica, Clinical & Research Group | Providencia |
| 010 | Clínica Renacer | Ñuñoa |
| 011 | Clínica Psiquiátrica El Cedro | La Reina |
| 012 | Clínica Psiquiátrica Pocuro | Vitacura |
| 013 | Clínica Los Tiempos | La Reina |
| 014 | Clínica MirAndes Manquehue | Las Condes |

### Centros especializados (6)
| # | Centro | Especialización | Comuna |
|---|--------|----------------|--------|
| 004 | IChTF | Terapia familiar | La Reina |
| 005 | Clínica de Ansiedad Chile (CACH) | Ansiedad / TOC | Vitacura |
| 007 | Grupo CETEP | Terapia del comportamiento | Providencia |
| 008 | CEAPSI | Atención psicológica integral / PIE | Las Condes |
| 019 | Centro de Terapia Integral | Salud mental general | Providencia |
| 022 | ITFS | Terapia familiar | Las Condes |

### Centros de adicciones (2)
| # | Centro | Comuna |
|---|--------|--------|
| 020 | Alfa Adicciones | Ñuñoa |
| 021 | Centro Nevería | Las Condes |

## Lima, Perú (22 centros)

### Hospitales y centros públicos (7)
| # | Centro | Tipo | Distrito |
|---|--------|------|----------|
| 001 | INSM Honorio Delgado — Hideyo Noguchi | Instituto MINSA | San Martín de Porres |
| 002 | Hospital Víctor Larco Herrera | Hospital MINSA | Magdalena del Mar |
| 003 | CSMC Carabayllo | CSMC MINSA | Carabayllo |
| 007 | CSMC Magdalena | CSMC MINSA | Magdalena del Mar |
| 020 | CSMC Lince | CSMC MINSA | Lince |
| 021 | CSMC Villa El Salvador | CSMC MINSA | Villa El Salvador |
| 022 | CSMC 12 de Noviembre | CSMC MINSA | San Juan de Miraflores |

### Hospital público especializado (1)
| # | Centro | Distrito |
|---|--------|----------|
| 008 | Hospital Hermilio Valdizán | Santa Anita |

### Clínicas privadas (5)
| # | Centro | Distrito |
|---|--------|----------|
| 004 | Clínica San Juan de Dios Lima | San Luis |
| 006 | Clínica Ricardo Palma | San Isidro |
| 009 | Clínica Pinel | San Miguel |
| 010 | Clínica Psiquiátrica Caravedo | Chorrillos |
| 019 | Clínica San Felipe — Psiquiatría | Jesús María |

### Centros especializados (7)
| # | Centro | Especialización | Distrito |
|---|--------|----------------|----------|
| 005 | Instituto Gestalt de Lima | Terapia Gestalt | Magdalena del Mar |
| 012 | CEISAM | Neuropsicología infantil | La Molina |
| 013 | IPOPS | Orientación psicológica | Lima |
| 014 | CPPL | Psicoterapia psicoanalítica | San Borja |
| 015 | IFASIL | Terapia familiar sistémica | San Isidro |
| 016 | Centro Peruano de Terapia Familiar | Terapia familiar | Miraflores |
| 018 | Calma Vital | Psiquiatría | Miraflores |

### Centros de adicciones (2)
| # | Centro | Distrito |
|---|--------|----------|
| 011 | CEDRO | Miraflores |
| 017 | Opción de Vida | San Borja |

## Centros eliminados (no existen o cerraron)

| Centro original | Motivo |
|----------------|--------|
| Fundación NEPSIS (Santiago) | Cerró operaciones el 2 de noviembre de 2021 |
| CPTCC — Centro Peruano de Terapia Cognitivo Conductual (Lima) | No existe con ese nombre. Alternativas reales: IPETEC, ASPETECC, Beck Perú |
| CAPSI PUCP (Lima) | No existe. La PUCP tiene servicio interno para estudiantes, no centro abierto al público |
| PSICOSALUD (Lima) | Nombre ambiguo — dos entidades distintas, ninguna es centro de salud mental relevante |

## Pendientes

- [ ] Extraer URLs de logos visitando cada sitio web manualmente
- [ ] Verificar horarios de atención actualizados
- [ ] Agregar información de convenios (FONASA, ISAPRES, EPS, SIS)
- [ ] Expandir a otras ciudades (Valparaíso, Concepción, Arequipa, Trujillo)
- [ ] Agregar coordenadas GPS para integración con mapas

## Metodología de verificación

Datos verificados el 2026-03-19 mediante:
1. Búsqueda web del nombre oficial de cada centro
2. Acceso a sitios web oficiales para confirmar datos de contacto
3. Cruce con fuentes secundarias (Doctoralia, Páginas Amarillas, gob.cl, gob.pe)
4. Cada registro incluye campo `fuente` con la URL de verificación

---

→ Contexto: [[hachiko-proyecto-maestro]]
→ Equipo: [[perfil-edgar-recursos-estrategicos]] · [[perfil-jose-recursos-estrategicos]]
