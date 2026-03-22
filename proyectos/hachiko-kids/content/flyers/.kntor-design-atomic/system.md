# Hachiko Kids — Design System
Flyer clínica A5. Establecido 2026-03-22.

## Intent
**Quién:** Padre/madre en sala de espera de clínica psicológica. Preocupado, con teléfono en mano, 15–20 segundos disponibles.
**Qué lograr:** Entender la app en 8 segundos. Escanear el QR antes de que los llamen.
**Sensación:** Cálido pero competente — como un pediatra que habla con calma. No startup, no clínica fría.

## Tokens

### Color
```
--ink-primary:    #1E1145   /* navy profundo — autoridad sin frialdad clínica */
--ink-secondary:  #5B4E8A   /* morado apagado — texto de soporte */
--ink-tertiary:   #9388BE   /* lavanda oscura — labels, metadata */
--ink-muted:      #C4BDE0   /* disclaimers — visible pero no compite */

--surface-0:      #FAFAFE   /* base — blanco lavanda, no blanco hospital */
--surface-1:      #F2EFFC   /* cards, step blocks, CTA background */
--surface-2:      #E8E3F8   /* separadores, accents sutiles */
--surface-dark:   #1E1145   /* banda stats */

--brand:          #7B61FF   /* morado de Luna — acción principal */
--mint:           #2EBD85   /* patrón/observación — verde serio, no neón */
--orange:         #E8650E   /* contexto/consulta — cálido, no gritón */

--border-soft:    rgba(123,97,255,0.12)
--border-std:     rgba(123,97,255,0.20)
--border-cta:     rgba(123,97,255,0.28)
```

### Spacing (base 4px)
```
micro:     4px   /* gap entre icon y texto dentro de átomo */
comp:      8px   /* padding interno de chips, gaps entre elementos */
block:    12px   /* padding interno de cards y organisms */
section:  10px   /* gap entre organisms */
```

### Radius
```
--r-sm:   6px    /* chips, pills */
--r-md:   10px   /* step cards */
--r-lg:   12px   /* CTA container */
--r-icon:  8px   /* step icon containers */
```

### Typography
```
Display: Fredoka 700 — calidez sin ser infantil. Conecta con el mundo del niño.
Body:    Inter 400/500/600 — máxima legibilidad en impresión.

hero-title:   Fredoka 700 / 21pt / lh 1.1 / tracking -0.3px
brand-name:   Fredoka 700 / 15pt
step-label:   Fredoka 600 / 10pt / lh 1.2
cta-title:    Fredoka 700 / 13.5pt / lh 1.15
stat-number:  Fredoka 700 / 18pt

hero-sub:     Inter 400 / 9.5pt / lh 1.4
step-desc:    Inter 400 / 7.5pt / lh 1.4
cta-sub:      Inter 400 / 8pt / lh 1.4
footer:       Inter 400 / 6.5pt
chip:         Inter 600 / 7pt
```

### Depth strategy
**Surface shifts únicamente — sin sombras.**
Razón: impresión no tiene profundidad real, las sombras se aplastan. La jerarquía viene del cambio de `surface-0` → `surface-1` para cards y CTA.

---

## Atoms

### LogoBadge
SVG inline del logo (40×39px) + `brand-name` Fredoka 700 15pt color `--brand`.
```css
.brand { display:flex; align-items:center; gap:7px; }
```

### ChipOutline
Border `1px solid --border-std`, padding `2px 7px`, radius `--r-sm`, text `Inter 600 6.5pt --ink-tertiary`.
Uso: badges secundarios (país, categoría).

### Chip (filled)
Padding `3px 8px`, radius `20px`, text `Inter 600 7pt`.
Variantes:
- `.chip-p` — `rgba(123,97,255,0.12)` / `#7B61FF`
- `.chip-m` — `rgba(46,189,133,0.12)` / `#1A8F63`

### StepIcon
`28×28px`, `border-radius: --r-icon (8px)`, SVG de 16×16 centrado.
Colores de fondo por tipo:
- Brand: `rgba(123,97,255,0.12)`
- Mint:  `rgba(46,189,133,0.12)`
- Orange: `rgba(232,101,14,0.10)`

Íconos SVG custom (no librerías):
- Juego/mascota: pata de gato (4 círculos + cuerpo)
- Patrón/observación: ojo con pupila + línea diagonal
- Consulta: burbuja de diálogo + burbuja secundaria con líneas

### StatNumber
`Fredoka 700 / 18pt`. Colores: `#34D399` (mint), `#F97316` (orange), `white`.

### StatLabel
`Inter 400 / 6.5pt / lh 1.35 / color #9388BE`. Margin-top `3px`.

### StatDivider
`1px × 30px / background rgba(255,255,255,0.1)`.

### HeroTitle
`Fredoka 700 / 21pt / lh 1.1`. `em` → color `--brand`.

### QRBox
`88×88px / background white / border-radius --r-md / border 1.5px --border-cta / padding 4px`.
SVG del QR con `fill #1E1145` (no negro puro — combina con la paleta).

---

## Molecules

### StepCard
**Composes:** StepIcon + HeroLabel (Fredoka 600 10pt) + StepDesc (Inter 400 7.5pt)
**Surface:** `--surface-1` / border `1px --border-soft` / radius `--r-md` / padding `10px 8px`
**Layout:** columna, `gap 5px`, icon arriba-izquierda.

### StatItem
**Composes:** StatNumber + StatLabel
**Layout:** columna centrada, `flex: 1`.

### QRModule
**Composes:** QRBox + url label (Inter 400 5.5pt `--ink-tertiary` centered)
**Layout:** columna centrada, `gap 4px`.

### CTAText
**Composes:** CTA Title (Fredoka 700 13.5pt `--brand`) + CTA Sub (Inter 400 8pt `--ink-secondary`) + Chips row
**Layout:** columna, gaps `6px / 8px`.

---

## Organisms

### Header
**Composes:** LogoBadge (izquierda) + ChipOutline (derecha)
**Border:** `1px solid --border-soft` bottom, `padding-bottom 8px`.

### Hero
**Signature de este proyecto:** Luna (mascota) como protagonista visual, 108×108px centrada arriba. El padre la ve primero.
**Composes:** img Luna + HeroTitle + HeroSub
**Layout:** columna centrada, `text-align center`, `padding-bottom 14px`.

### StepsOrganism
**Composes:** 3× StepCard en fila
**Layout:** `display flex / gap 6px`.

### StatBand
**Composes:** 3× StatItem + 2× StatDivider
**Surface:** `--surface-dark` / radius `--r-md` / padding `12px 10px`.
**Layout:** `space-between`.

### CTABlock
**Composes:** QRModule (izquierda) + CTAText (derecha)
**Surface:** `--surface-1` / border `1.5px --border-cta` / radius `--r-lg` / padding `12px`.
**Layout:** `flex row / gap 12px / align-items center`.

### Footer
**Composes:** FooterDisc (italic `--ink-muted`) + FooterContact (`--ink-muted`)
**Border:** `1px solid --border-soft` top, `padding-top 7px`.
**Layout:** `space-between`.

---

## Template: FlyerA5

```
@page { size: A5; margin: 9mm 10mm; }
body width: 128mm

Stack vertical (gap via margin-bottom):
  Header          ← 8px border-bottom + 12px margin-bottom
  Hero            ← 14px padding-bottom
  StepsOrganism   ← 10px margin-bottom
  StatBand        ← 10px margin-bottom
  CTABlock        ← 10px margin-bottom
  Footer          ← 7px border-top padding
```

**Signature de impresión:** Depth por surface-shifts únicamente. Sin box-shadow. Sin gradientes decorativos.

---

## Notas de ejecución

- `print-color-adjust: exact` + `-webkit-print-color-adjust: exact` requeridos para que Chrome respete backgrounds en impresión.
- QR target: `https://tumascota.pages.dev/propuesta-2`
- Luna en base64 inline (~110KB). Fuente: `brand/mascotas/gato.png`.
- Logo SVG inline desde `brand/logo.svg` (recortado a 40×39px viewBox preservado).
- Google Fonts via CDN (requiere conexión al imprimir desde Chrome). Sin conexión: Inter y Fredoka no cargan — considerar fallback system-ui para producción offline.
