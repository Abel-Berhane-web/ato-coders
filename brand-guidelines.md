# Ato Coders — Brand Design & Color Palette Guidelines

> **Source of truth** for all visual design decisions across the Ato Coders website and digital assets.
> Derived from the MUTINY-inspired brand template.

---

## 1. Color Palette

### Primary Colors

| Role | Name | Hex | Usage |
|------|------|-----|-------|
| **Background Primary** | Charcoal Black | `#1A1A1A` | Main page background, hero sections |
| **Background Deep** | True Black | `#111111` | Cards, footer, secondary surfaces |
| **Background Surface** | Dark Gray | `#222222` | Elevated cards, nav on scroll |
| **Text Primary** | Pure White | `#FFFFFF` | Headlines, primary body text on dark |
| **Text Muted** | Warm Gray | `#888888` | Subtitles, descriptions, secondary text |
| **Text Dim** | Cool Gray | `#666666` | Timestamps, metadata, fine print |

### Accent Colors

| Role | Name | Hex | Usage |
|------|------|-----|-------|
| **Brand Accent** | Flame Orange | `#FF4D00` | Star/asterisk icons, highlights, CTAs, hover states |
| **Accent Warm** | Burnt Orange | `#E64500` | Active/pressed states, gradient endpoint |
| **Accent Glow** | Soft Orange | `#FF6B2B` | Glow effects, box-shadows on hover |

### Extended Palette (from template swatches)

| Swatch | Hex | Usage |
|--------|-----|-------|
| Midnight Navy | `#0D0D2B` | Alternate dark surfaces, overlay tints |
| Deep Purple | `#1A1035` | Feature section BG variants, gradient accents |
| Muted Indigo | `#2E2854` | Card backgrounds on alternate sections |
| Slate Blue | `#3D4F6B` | Borders, dividers on dark backgrounds |
| Dusty Steel | `#5A7A95` | Secondary icon fills, muted links |
| Soft Denim | `#6E8FA8` | Hover tint for muted elements |
| Teal Accent | `#2EC4B6` | Case study cards, success states, badges |
| Highlight Green | `#00E6A0` | Optional — status indicators, positive actions |

### Semantic Colors

| Role | Hex | Usage |
|------|-----|-------|
| Border Default | `rgba(255, 255, 255, 0.08)` | Subtle separators on dark BG |
| Border Hover | `rgba(255, 255, 255, 0.20)` | Active/hover state borders |
| Glass BG | `rgba(255, 255, 255, 0.04)` | Glassmorphism cards, frosted panels |
| Overlay | `rgba(0, 0, 0, 0.60)` | Image overlays, modal backdrops |

---

## 2. Typography

### Font Stack

| Role | Font Family | Fallback | Source |
|------|-------------|----------|--------|
| **Display / Hero** | `Instrument Serif` | `Georgia, 'Times New Roman', serif` | [Google Fonts](https://fonts.google.com/specimen/Instrument+Serif) |
| **Body / UI** | `Inter` | `'Helvetica Neue', Arial, sans-serif` | [Google Fonts](https://fonts.google.com/specimen/Inter) |

### Type Scale

| Element | Font | Weight | Size | Line-Height | Letter-Spacing | Style |
|---------|------|--------|------|-------------|----------------|-------|
| **Hero Heading (H1)** | Inter | 900 (Black) | `clamp(72px, 12vw, 180px)` | 0.85 | `-0.04em` | Uppercase |
| **Section Heading (H2)** | Inter | 800 | `clamp(36px, 5vw, 56px)` | 1.0 | `-0.03em` | Uppercase |
| **Card Title (H3)** | Inter | 700 | `28px` | 1.2 | `-0.02em` | Uppercase |
| **Accent / Italic** | Instrument Serif | 400 | Matches parent | Matches parent | Normal | *Italic* |
| **Body Large** | Inter | 400 | `20px` | 1.7 | `0` | Normal |
| **Body Default** | Inter | 400 | `16px` | 1.6 | `0` | Normal |
| **Body Small** | Inter | 500 | `14px` | 1.5 | `0.02em` | Normal |
| **Overline / Label** | Inter | 600 | `13px` | 1.4 | `0.15em` | Uppercase |
| **Nav Links** | Inter | 500 | `15px` | 1.0 | `0.02em` | Normal |

### Typography Rules

1. **Hero text is always uppercase, bold, and oversized** — it should dominate the viewport
2. **Italic serif (`Instrument Serif`) is used sparingly** — only for accent words within headings (e.g., "an" in "We're *an* agile team")
3. **Body text stays thin and airy** — weight 400, generous line-height for readability on dark backgrounds
4. **Never use more than 2 font families** on any single page

---

## 3. Design Motifs & Elements

### Star / Asterisk Icon ✴

- The **6-pointed star** (or asterisk `✴`) is a recurring brand motif
- Always rendered in **Flame Orange** (`#FF4D00`)
- Used as a visual marker before service titles or key points
- Size: `24–36px` in service cards, `48px` in standalone decorative use

### Layout Principles

| Principle | Rule |
|-----------|------|
| **Max content width** | `1400px` centered |
| **Section padding** | `100px 60px` (desktop), `60px 24px` (mobile) |
| **Card border-radius** | `0px` — sharp, editorial edges (no rounded corners) |
| **Grid gaps** | `40–60px` between major columns |
| **Hero alignment** | Left-aligned text, right side reserved for 3D / visual |

### Hover & Interaction States

| Element | Hover Effect |
|---------|-------------|
| Nav links | Underline grows from left (`width: 0 → 100%`) in white |
| CTA buttons | Background shifts to `#FF4D00`, subtle `scale(1.03)` |
| Service cards | Border-left appears in `#FF4D00`, slight `translateY(-4px)` |
| Star icons | Gentle `rotate(90deg)` with `0.4s` ease |
| Social links | Glow in `#FF4D00`, `scale(1.15)` |

### Animation Conventions

| Property | Timing |
|----------|--------|
| Default transition | `0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)` |
| Hover scale | `0.2s ease` |
| Scroll reveal fade-in | `0.6s ease-out`, staggered `0.1s` per element |
| Text stagger | `0.08s` delay per line for hero headings |

---

## 4. Spacing System

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | `8px` | Icon gaps, tight padding |
| `--space-sm` | `16px` | Card internal padding, small gaps |
| `--space-md` | `24px` | Section sub-gaps, medium spacing |
| `--space-lg` | `48px` | Between content blocks |
| `--space-xl` | `80px` | Between major sections |
| `--space-2xl` | `120px` | Hero padding, section separators |

---

## 5. Component Patterns

### Navbar
- Fixed top, transparent → `rgba(26,26,26,0.95)` + `backdrop-filter: blur(12px)` on scroll
- Logo: **"ATO CODERS"** in Inter 800, white, `20px`, letter-spacing `0.08em`
- Right-aligned links: Work · Services · About · Contact

### Hero Section
- Full viewport height (`100vh`)
- Left: stacked oversized uppercase text
- Right: **Empty container** (`#spline-container`) for Spline 3D, `min-height: 500px`
- Subtitle in muted gray below the heading

### Service Cards
- Three equal columns on desktop
- Orange star icon top-left
- Title in bold uppercase
- Description in muted body text
- No background fill — rely on typography contrast against charcoal

### Footer
- Minimal single-row or two-row layout
- "See all services" link with arrow (`→`)
- Copyright: `© 2026 Ato Coders. Addis Ababa, Ethiopia.`

---

## 6. Do's and Don'ts

| ✅ Do | ❌ Don't |
|-------|---------|
| Use oversized type for hero headings | Use small, timid headings |
| Keep backgrounds dark (`#1A1A1A` or deeper) | Use white or light backgrounds |
| Use `#FF4D00` sparingly as an accent | Flood the page with orange |
| Maintain generous whitespace on dark | Crowd elements together |
| Use sharp edges on cards (no border-radius) | Add rounded corners everywhere |
| Mix bold sans-serif with italic serif accents | Use decorative or script fonts |
| Animate subtly on scroll and hover | Over-animate or use jarring transitions |

---

*Last updated: February 27, 2026*
