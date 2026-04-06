---
title: "Training and Profiling a Pediatric Facial Expression Classifier for Children on Mobile Devices: Machine Learning Study"
year: 2023
authors: ["Banerjee", "Mutlu", "Kline", "Surabhi", "Washington", "Wall"]
journal: "JMIR Formative Research"
doi: "10.2196/39917"
pmcid: "PMC10131663"
pmid: ""
citations: 0
tags: [deteccion-comportamiento, machine-learning, apps, emociones, peer-reviewed]
categoria: Detección de comportamiento
---

# Training and Profiling a Pediatric Facial Expression Classifier for Children on Mobile Devices

## Referencia APA

Banerjee, A., Mutlu, O. C., Kline, A., Surabhi, S., Washington, P., & Wall, D. P. (2023). Training and profiling a pediatric facial expression classifier for children on mobile devices: Machine learning study. *JMIR Formative Research*. https://doi.org/10.2196/39917

## Abstract / Resumen

Los investigadores desarrollaron clasificadores de expresión facial optimizados para smartphones orientados a apoyar el diagnóstico y terapia de trastornos del espectro autista (TEA). Probaron cinco arquitecturas de redes neuronales con técnicas de optimización en hardware móvil real (Motorola Moto G6).

## Principales hallazgos

- Mejor modelo (MobileNetV3-Large): **65.78% de precisión** en el dataset CAFE (Child Affective Facial Expression)
- Latencia de inferencia: **90 milisegundos** en hardware móvil — tiempo real factible
- Entrenar con datos de niños solamente (60.57%) supera sustancialmente a entrenar con datos de adultos (53.36%)
- Disparidades significativas de precisión por etnia: grupos sudasiáticos y afroamericanos mostraron 11.56% menor precisión que niños caucásicos europeos
- Aplicación práctica en smartphone demostrada

## Metodología

- Arquitecturas: 5 modelos optimizados para móvil (incluido MobileNetV3-Large)
- Datos: 78,302 imágenes de 12 datasets públicos + videos de app GuessWhat
- Optimización: Poda de pesos, cuantización, clustering
- Benchmark: Dataset CAFE estratificado por etnia
- Hardware: Teléfono Android Motorola Moto G6

## Relevancia para Hachiko Kids

- **Detección de comportamiento**: Demuestra que clasificación de emociones en niños vía smartphone ES factible en tiempo real
- **Apps**: Modelo directo para Hachiko: un emoji picker podría ser validado/complementado con detección facial
- **Emociones**: Valida las 5 emociones que Hachiko usa (happy, sad, angry, scared, neutral)
- **Limitación técnica**: 65% de precisión es insuficiente para uso clínico — adecuado como señal de apoyo, no diagnóstico
- **Sesgo**: El sesgo étnico es un riesgo real a considerar en la expansión de Hachiko

## Acceso

PMC de acceso abierto: https://pmc.ncbi.nlm.nih.gov/articles/PMC10131663/
