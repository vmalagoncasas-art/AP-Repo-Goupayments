# GOU Payments — Design System

> Una identidad **fresca, moderna y cercana** para la infraestructura de pagos del holding.
> Fresh, modern, fintech-style design system for GOU Payments' B2B transaction platform.

---

## 1. Company & product context

**GOU Payments** ("Hecho en Payments") is the payments-and-transactions enabler of a banking
holding group. Its customers are **traditional banks within the same holding** (B2B): they log
into the GOU platform and operate its money-movement products. GOU's mandate is to be the
**first brand in the holding that feels fresh, modern, clean and fintech** — a more disruptive,
human, "cercana" voice than the legacy banks it serves.

**Products on the platform (desk + mobile):**
- **Transacciones** — core transfers / money movement
- **Pagos masivos** — bulk / batch disbursements (payroll, suppliers)
- **Recaudos** — collections (money-in)
- **Débitos automáticos** — automatic / recurring debits
- …and related treasury, reporting and reconciliation tooling

The brand promise (brandbook): *"una plataforma confiable, cercana y en constante movimiento"* —
"tecnología accesible, confianza en cada transacción, y un enfoque moderno en soluciones de pago."

### Sources used to build this system
- **`uploads/GOU_PAYMENTS_BRANDBOOK 19 MAY.pdf`** — official Manual de Marca V.1 (07 MAY 2025).
  Primary source of truth for logo, color, type. Logo/isotype assets were extracted from it
  (see `assets/logo/`).
- **`uploads/Montserrat-VariableFont_wght.ttf`** — the institutional typeface (provided).
- **Brand reference (mood):** Cash App ([cash.app](https://cash.app)) — flat colors, glassmorphism,
  large modern type, friendly illustration. Provided reference imagery (`uploads/*.jpg`) shows
  glass cards, blue-gradient duotone icons and pill controls — the target visual world.
- **`HeroUI Figma Kit V3 (Community).fig`** — attached component-kit, used only as a *structural*
  reference for which primitives a complete kit needs (Button, Input, Select, Tabs, Toast…). Its
  visuals were **not** copied; everything here is rebuilt in GOU's brand. The HeroUI default logo
  in the file's `/Brand` page is **not** GOU's mark.

> Note: the `.fig` is a read-only mount. Full Figma links were not provided; if you have the
> live GOU product files, share them to deepen the UI-kit fidelity.

---

## 2. Content fundamentals — voice & copy

GOU's voice is **clear, warm, confident and human** — fintech, not bureaucratic banking.

- **Language:** Spanish-first (LatAm/Colombia). Product nouns often stay in Spanish
  (*Recaudos, Pagos masivos, Débitos automáticos*); the brand signs off in English ("Payments").
- **Person:** speak **to the user as "tú"** ("Conectamos contigo", "Simplificamos. Avanzamos.")
  and about ourselves as **"nosotros"**. Close, not corporate.
- **Tone:** reassuring + momentum. Pair *confianza* (trust, security) with *movimiento*
  (speed, progress). Brandbook tagline rhythm is short, punchy, paired: **"Simplificamos. Avanzamos."**
- **Casing:** **Titulares (display headlines) are set in UPPERCASE** per the brandbook (Bold/Black,
  max ~4 words for "titulares especiales"). Body copy is sentence case. UI labels are sentence case;
  reserve uppercase for short overlines/eyebrows and big statement headlines.
- **Numbers are the hero.** This is a money product — amounts, balances and counts are large,
  tabular and prominent. Always format with locale separators and currency (`$ 1.250.000`),
  use tabular figures, and color money semantically (in = aqua/green, out = deep blue).
- **Emoji:** **not** part of the brand — do not use emoji in product UI. Express warmth through
  illustration, color and the floating-dot motif instead.
- **Microcopy examples (in-voice):**
  - Empty state: *"Aún no tienes recaudos. Crea el primero y empieza a cobrar."*
  - Success: *"Listo. Tu pago masivo está en camino."*
  - CTA verbs: *"Crear pago"*, *"Programar débito"*, *"Conciliar"*, *"Descargar reporte"*.
  - Avoid: jargon-heavy bank-speak, ALL-CAPS warnings, exclamation overload.

---

## 3. Visual foundations

The GOU world is **light, airy and glassy** with **flat, saturated brand blues**, **large modern
Montserrat type** and soft cool shadows.

### Color
- **Five institutional colors** (exact brandbook hex):
  - `#0D1350` **Azul Profundo Gou** — anchor: dark surfaces, sidebars, primary text.
  - `#00ACEC` **Azul Gou** (cyan) — the primary brand accent; brightest brand note.
  - `#0454FC` **Azul Mid Gou** — interactive blue: buttons, links, focus.
  - `#4CDCBC` **Aqua Gou** — success / money-in / positive.
  - `#BBBCBF` **Grey Gou** — neutral borders, muted UI.
- Each has a **tonal scale** (brandbook tones 100→10). See `tokens/colors.css`.
- **Gradients are core brand equity:** the logo's preferred form is the **gradient** version,
  cyan→mid-blue→deep-blue on a 135° diagonal (`--gou-gradient`). Use gradients on the isotype,
  hero washes and feature icons — **not** as default button fills (those are flat `--blue-500`).
- **Vibe of imagery:** cool, bright, optimistic blues on near-white. Frosted glass tints pick up
  cyan/sky. Avoid warm tones except status (amber warning).

### Type
- **Montserrat only**, variable 100–900. Geometric, modern, clean "sin perder calidez".
- Display/titulares: **SemiBold–Black**, tight tracking, often UPPERCASE. Body: Regular/Light.
- Big, confident hierarchy — hero numerals up to 72px. See `tokens/typography.css`.

### Shape, depth & surfaces
- **Corner radii are generous and soft:** cards `20px`, large surfaces `28px`, **actions are
  pills** (`999px`) — the rounded geometry echoes the circular letterforms.
- **Cards:** white (`--surface-card`), radius `--radius-lg`, hairline `--border-subtle` or none,
  with a **soft cool shadow** (`--shadow-md`) tinted toward deep blue — never harsh/black.
- **Glassmorphism** is the signature treatment for overlays, hero stats and floating panels:
  `background: --glass-fill` + `backdrop-filter: blur(18px)` + 1px white inner highlight
  (`--glass-inset`) + `--glass-shadow`. Use over the brand gradient/photography, sparingly.
- **Shadows** are diffuse, layered and low-opacity in deep-blue rgba — light and airy, never heavy.
  Primary CTAs may carry a subtle **brand glow** (`--shadow-glow-blue`).

### Motion & states
- **Easing:** `--ease-out` (cubic 0.22,1,0.36,1) for entrances; `--ease-spring` for playful
  toggles/checks. Durations 130–320ms. Quick, smooth, never bouncy-heavy.
- **Hover:** darken brand fills one step (`--action-primary-hover`), lift card shadow `md→lg`,
  or raise glass opacity. **Press:** scale down ~`0.97` + drop to `:active` color. No color
  inversion.
- **Focus:** 3px brand-blue ring (`--ring-focus`) — visible, accessible.
- Reduced-motion: honor `prefers-reduced-motion`; entrance animations collapse to final state.

### Layout
- 8pt spacing base (`tokens/spacing.css`); a couple of 4pt half-steps for dense data tables.
- Desk: fixed `--sidebar-w` (264px) deep-blue rail + `--topbar-h` (68px). Content max `1240px`.
- Mobile: 44px minimum hit target; bottom tab bar; pill primary action.

---

## 4. Iconography

- **Line system — Lucide** (`https://lucide.dev`), loaded via CDN. Clean, geometric, rounded
  terminals at ~1.75px stroke — it matches GOU's rounded-geometric letterforms. Use Lucide for
  all functional UI icons (nav, actions, table affordances). Default stroke `1.75`, size `20–24`,
  color `currentColor` (inherits text color).
  > **Substitution flag:** GOU's brandbook ships no production icon set. Lucide is a deliberate,
  > closest-match substitute. If GOU has a proprietary icon library, drop the SVGs in
  > `assets/icons/` and swap the `Icon` component's source.
- **Feature / hero icons — glass duotone.** For marketing-grade feature tiles, the brand
  references use **blue glass duotone** icons (frosted fill + solid accent). Recreate with the
  `--glass-fill` + brand gradient treatment behind a Lucide glyph, rather than importing the
  third-party marketing set. Reserve for hero moments, not dense UI.
- **Brand marks (official vectors, from the GOU logo SVGs) — in `assets/logo/`:**
  - `gou-lockup-principal.svg` — the **principal logotype**: deep-blue "gou" + "payments" with the
    signature **cyan dot accent**. Also `gou-lockup-principal-white.svg` (for dark surfaces),
    `gou-lockup-deep.svg`, `gou-lockup-white.svg`, `gou-lockup-cyan.svg`, `gou-lockup.svg` (currentColor).
    **The logo is always a flat brand color — never a gradient.**
  - `gou-isotipo-*.svg` — the **official isotipo** (the "g" symbol — the brand's PRIMARY symbol and
    only valid standalone mark: app icon / favicon): cyan (default brandbook color), deep, white,
    currentColor. Flat color only — never a gradient.
  - `Asset 2GOU.svg`, `Asset 3GOU.svg`, `Isotipo.svg` — the original uploaded source SVGs.
  - The **`GouLogo`** (full lockup) and **`GouMark`** (isotipo) components render these vectors with a `variant` prop.
- **Brand rules:** (1) the **"gou" mark always travels with "payments"** — never use the "gou"
  letters alone; when you need just a symbol, use the **isotipo** (`GouMark` / `gou-isotipo-*.svg`).
  (2) **The logo is always a flat brand color (cyan / deep / white) — never a gradient.** Gradients
  belong to backgrounds and hero washes, with a white logo placed on top.
- **Emoji / unicode as icons:** never. Use Lucide or the brand marks.

---

## 5. Index / manifest

**Foundations**
- `styles.css` — root entry (imports only).
- `tokens/` — `fonts.css`, `colors.css`, `semantic.css`, `typography.css`, `spacing.css`, `effects.css`.
- `guidelines/` — foundation specimen cards (Type / Colors / Spacing / Brand) for the DS tab.

**Assets**
- `assets/fonts/` — Montserrat variable.
- `assets/logo/` — official GOU logotype lockups + "gou" mark, in gradient / deep / white / cyan / currentColor, plus the source SVGs.

**Components** (`components/`) — reusable React primitives; see each `*.prompt.md`.
- `brand/` — `GouLogo` (full logotype lockup, `variant`; always with "payments"), `GouMark` (official isotipo / "g" symbol — standalone use).
- `core/` — `Button`, `IconButton`, `Badge`, `Avatar`, `Card`, `GlassCard`, `Icon`.
- `forms/` — `Input`, `Select`, `Switch`, `Checkbox`, `SegmentedControl`.
- `feedback/` — `Toast`, `ProgressBar`.
- `navigation/` — `Tabs`, `SidebarNav`.
- `data/` — `MoneyAmount`, `StatCard`, `TransactionRow`, `StatusPill`.

**UI Kits** (`ui_kits/`)
- `platform/` — desktop platform (Dashboard, Pagos masivos, Recaudos, Transacción detail).
- `mobile/` — mobile app (Home/balance, Pago flow, Activity).

**Other**
- `SKILL.md` — Agent-Skill manifest for downloadable use.

### Caveats
- The logo is now the **official GOU vector** (uploaded `Asset *GOU.svg`), rebuilt into clean
  recolored variants. Earlier PNG recreations were removed.
- **Lucide** stands in for a missing official icon set (flagged above). Swap in GOU's own icon
  SVGs if/when available.
