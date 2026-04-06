---
title: "A Tablet-Based Game for the Assessment of Visual Motor Skills in Autistic Children"
year: 2023
authors: ["Perochon", "Di Martino", "Carpenter", "Compton", "Davis", "Espinosa", "Franz", "Rieder", "Sullivan", "Sapiro", "Dawson"]
journal: "NPJ Digital Medicine"
doi: "10.1038/s41746-023-00762-6"
pmid: "36737475"
citations: 0
tags: [deteccion-comportamiento, apps, autismo, machine-learning, touchscreen, peer-reviewed]
categoria: Detección de comportamiento
---

# A Tablet-Based Game for the Assessment of Visual Motor Skills in Autistic Children

## Referencia APA

Perochon, S., Di Martino, J. M., Carpenter, K. L. H., Compton, S., Davis, N., Espinosa, S., Franz, L., Rieder, A. D., Sullivan, C., Sapiro, G., & Dawson, G. (2023). A tablet-based game for the assessment of visual motor skills in autistic children. *NPJ Digital Medicine*. https://doi.org/10.1038/s41746-023-00762-6

## Abstract / Resumen

El estudio presenta un juego interactivo de "reventar burbujas" en tablet diseñado para medir habilidades visomotoras en niños autistas. Los investigadores analizaron datos de 233 participantes (147 neurotípicos, 86 con TEA — 32 también con TDAH). Computer vision extrajo métricas basadas en el toque (touch) para comparar el rendimiento entre grupos. El juego se correlaciona con evaluaciones clínicas estandarizadas independientes.

## Principales hallazgos

- Niños con TEA más pequeños (1.5-3 años): menor tasa de reventado y menor precisión al apuntar al centro de las burbujas
- Niños con TEA mostraron contacto digital prolongado y mayor variabilidad en el rendimiento
- TDAH co-ocurrente en niños mayores (3-10 años): reducción notable de precisión
- Las características motoras mostraron correlaciones significativas con evaluaciones clínicas independientes
- **19 características de touch** extraídas: tasa de reventado, precisión, duración del toque, métricas de fuerza

## Metodología

- Juego tablet: "bubble popping" (reventar burbujas)
- Computer vision para extracción de 19 características touch
- Análisis: ANCOVA con corrección Benjamini-Hochberg
- Clasificador de regresión logística para discriminación de grupos
- Muestra: n=233 (147 neurotípicos, 86 TEA, 32 TEA+TDAH)

## Relevancia para Hachiko Kids

- **Prueba de concepto crítica**: Demuestra que las interacciones touch en un juego de tablet pueden discriminar entre niños con y sin TEA/TDAH — validación directa del enfoque de Hachiko
- **Datos de touch como señal**: Los logs de interacción (timing, duración, patrón de selección) que Hachiko ya captura son los mismos tipos de datos usados en este estudio
- **Pipeline ML**: El pipeline computer vision → características touch → clasificador es exactamente lo que Hachiko podría implementar en fases futuras
- **NPJ Digital Medicine**: Revista de muy alto impacto (Nature Publishing Group) — cita de peso para pitches

## Acceso

NPJ Digital Medicine — probable acceso abierto (Nature Open Access). PubMed PMID: 36737475.
