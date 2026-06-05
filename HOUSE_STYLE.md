# House Style Guide — Shan Oomes Portfolio

Aesthetic reference: Off-White™ (off---white.com)
Direction: Luxury editorial minimalism

---

## Philosophy

The site should feel like a well-designed magazine spread, not a developer portfolio template. Every decision — spacing, type scale, colour — should earn its place. When in doubt, remove rather than add.

---

## Colour

All values are defined as CSS custom properties in `design-tokens.css`. Never hard-code a value that has a token.

| Token | Value | Use |
|-------|-------|-----|
| `--color-white` | `#FFFFFF` | Primary backgrounds |
| `--color-off-white` | `#F2F2F2` | Secondary section backgrounds |
| `--color-black` | `#000000` | Primary text, filled buttons |
| `--color-near-black` | `#111111` | Borders, dividers |
| `--color-muted` | `#555555` | Captions, metadata, dates |
| `--color-accent` | `#1400FF` | Links, active nav, hover states only |
| `--color-accent-red` | `#FF2000` | "Open to work" badge — use sparingly |

**Rule:** The blue accent (`#1400FF`) appears only on interactive elements. Never use it decoratively.

### Dark mode

Dark mode is applied via `[data-theme="dark"]` on `<html>`. Override semantic tokens only — never touch the primitive colour values.

---

## Typography

Three typefaces, each with a specific role:

| Family | Token | Role |
|--------|-------|------|
| Playfair Display | `--font-serif` | H1 headings only |
| Inter | `--font-sans` | Everything else |
| IBM Plex Mono | `--font-mono` | Code, technical labels |

**H1** — Playfair Display, weight 400, tight tracking (`-0.03em`), fluid size `clamp(40px, 6vw, 80px)`

**H2** — Section labels. Always `12px`, uppercase, `0.12em` letter-spacing, with a bottom border. Never larger.

**H3** — Fluid `clamp(18px, 2vw, 24px)`, Inter, weight 400.

**Body** — 16px, Inter, weight 300 (light), line-height 1.65.

**Captions / buttons / nav** — 11px, uppercase, `0.12em` tracking.

---

## Spacing

8px grid. All spacing tokens are multiples of 8px:

```
--space-1: 8px   --space-2: 16px  --space-3: 24px
--space-4: 32px  --space-5: 40px  --space-6: 48px
--space-8: 64px  --space-10: 80px --space-12: 96px
--space-15: 120px --space-20: 160px
```

Section vertical padding: `--section-padding-y` = `120px`.

---

## Shape & Borders

**No border-radius. Ever.** All corners are square. This is a hard rule.

Border style: `1px solid var(--color-near-black)`.

---

## Photography & Images

- Portrait ratio (`3 / 4`) for person photos
- Landscape (`16 / 9`) for screenshots / project visuals
- All images must have descriptive `alt` text — never `"image"` or empty
- Use `loading="lazy"` on everything below the fold
- Preferred format: WebP where possible, SVG for diagrams and logos

---

## Writing Voice

- Direct and human — write like you're talking to a technically literate non-academic
- No buzzwords: "leveraged", "utilised", "synergy", "robust solution"
- First person is fine and encouraged
- Short sentences. Max 2 clauses per sentence before considering a break
- Project descriptions: **Context → Challenge → What I built → Results → What I learned**

---

## Components

### Buttons
Two variants: primary (black fill, white text) and secondary (white fill, black border). Both invert on hover. No rounded corners. Uppercase, tracked.

### Project cards
White background, 1px border. Border transitions to black on hover (with `translateY(-2px)` lift). Logo image in a fixed-height image area, then text body below.

### Section labels (H2)
12px, uppercase, tracked, with a full-width bottom border. Never use H2 as a content heading — it is always a section identifier.

### Nav
Sticky. Logo left, links absolutely centred, dark mode toggle right. Mobile: hamburger replaces links.

---

## Dark Mode Rules

1. Use semantic tokens (`--color-bg`, `--color-text`) in component CSS — never primitive tokens or hardcoded values.
2. Override only in `[data-theme="dark"]` blocks — never duplicate full rule sets.
3. Buttons invert: in dark mode, primary becomes white fill / black text.
4. Test every interactive state (hover, focus) in both modes before shipping.
