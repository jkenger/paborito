# Paborito Brand Guidelines

> Design system and brand rules for Paborito Agribiotech Solutions, Corp.

---

## Brand Identity

**Company:** Paborito Agribiotech Solutions, Corp.
**Established:** 2012
**Industry:** Poultry Digestive Health Supplements
**Market:** Philippines

**Brand Personality:**
- Warm & Approachable
- Trustworthy & Reliable
- Filipino-proud
- Professional yet Friendly

---

## Logo

**Primary Logo:** `public/images/logo.png`
- Peacock/turkey feather design with "PP" monogram
- "PABORITO" wordmark with "Since 2012" tagline
- Use on light backgrounds

**Logo Usage:**
- Minimum clear space: Height of the "P" on all sides
- Minimum size: 40px height for digital
- Do not stretch, rotate, or alter colors

---

## Color Palette

### Primary Colors

| Name | OKLCH | Hex (approx) | Usage |
|------|-------|--------------|-------|
| **Forest Green** | `oklch(0.35 0.1 145)` | `#2E5A1C` | Headings, primary buttons, text |
| **Lime Green** | `oklch(0.75 0.18 125)` | `#9ACD32` | Badges, highlights, secondary elements |
| **Orange Gold** | `oklch(0.78 0.16 70)` | `#F7A800` | Hero backgrounds, accents |
| **Bright Gold** | - | `#FFD54F` | Sunburst alternating rays |
| **Action Red** | `oklch(0.55 0.22 25)` | `#E53935` | CTAs, alerts, important actions |

### Neutral Colors

| Name | OKLCH | Usage |
|------|-------|-------|
| **Background** | `oklch(0.99 0.005 90)` | Page background (warm off-white) |
| **Foreground** | `oklch(0.25 0.05 145)` | Body text |
| **Muted** | `oklch(0.96 0.01 90)` | Subtle backgrounds |
| **Muted Text** | `oklch(0.45 0.03 145)` | Secondary text |
| **Border** | `oklch(0.90 0.02 90)` | Borders, dividers |

### CSS Variables

```css
:root {
  --primary: oklch(0.35 0.1 145);
  --primary-foreground: oklch(0.98 0 0);
  --secondary: oklch(0.75 0.18 125);
  --secondary-foreground: oklch(0.25 0.08 145);
  --accent: oklch(0.78 0.16 70);
  --accent-foreground: oklch(0.25 0.08 145);
  --destructive: oklch(0.55 0.22 25);
  --background: oklch(0.99 0.005 90);
  --foreground: oklch(0.25 0.05 145);
  --muted: oklch(0.96 0.01 90);
  --muted-foreground: oklch(0.45 0.03 145);
  --border: oklch(0.90 0.02 90);
  --radius: 0.5rem;
}
```

---

## Sunburst Pattern

The signature brand element - radiating rays from the Paborito logo.

### Implementation

```css
background: conic-gradient(
  from 180deg at 50% 100%,
  #F7A800 0deg 10deg,
  #FFD54F 10deg 20deg,
  /* repeat alternating pattern */
);
```

### Rules
- Rays emanate from **bottom center** (`at 50% 100%`)
- Use **hard color stops** (no blending between rays)
- Alternate between `#F7A800` (dark) and `#FFD54F` (light)
- Standard: **36 rays** at 10deg each
- Use for hero sections and key brand moments

### Variations
| Variant | Ray Width | Use Case |
|---------|-----------|----------|
| Standard | 10deg | Hero sections |
| Bold | 15deg | Promotional banners |
| Subtle | 8deg | Background accents |

---

## Typography

### Font Stack

```css
--font-sans: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
```

### Type Scale

| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| H1 (Hero) | `text-4xl md:text-5xl` | Bold (700) | 1.1 |
| H2 (Section) | `text-2xl md:text-3xl` | Bold (700) | 1.2 |
| H3 (Card) | `text-sm md:text-base` | Semi-bold (600) | 1.3 |
| Body | `text-sm` | Normal (400) | 1.6 |
| Small | `text-xs` | Normal (400) | 1.5 |
| Caption | `text-[10px]` | Medium (500) | 1.4 |

### Text Colors
- **Headings:** `text-primary` (Forest Green)
- **Body:** `text-foreground` or `text-muted-foreground`
- **On dark backgrounds:** `text-primary-foreground` (white)
- **Links:** `text-primary` with underline on hover

---

## Spacing & Layout

### Border Radius

```css
--radius: 0.5rem;  /* 8px - friendly, rounded feel */
```

| Element | Radius |
|---------|--------|
| Buttons | `rounded-md` (6px) |
| Cards | `rounded-lg` (8px) |
| Badges | `rounded-full` |
| Inputs | `rounded-md` (6px) |

### Container

```css
max-width: 1280px;
padding: 0 1rem; /* mobile */
padding: 0 1.5rem; /* tablet+ */
```

### Section Spacing

| Spacing | Class | Usage |
|---------|-------|-------|
| Section padding | `py-16` | Standard sections |
| Card gap | `gap-6` | Grid layouts |
| Element gap | `gap-3` or `gap-4` | Within components |

---

## Components

### Buttons

**Primary (CTA):**
```html
<button class="bg-destructive hover:bg-destructive/90 text-white shadow-sm">
  Contact Us
</button>
```

**Secondary:**
```html
<button class="bg-white/80 border-primary text-primary hover:bg-white">
  Learn More
</button>
```

**Outline:**
```html
<button class="border border-border bg-background hover:bg-muted">
  Cancel
</button>
```

### Cards

```html
<div class="bg-card rounded-lg shadow-xl p-6 hover:shadow-2xl transition-shadow">
  <!-- content -->
</div>
```

### Badges

```html
<span class="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-medium">
  Best Seller
</span>
```

---

## Animation Guidelines

### Library
Using **Motion** (formerly Framer Motion) for React animations.

```bash
npm install motion
```

### Principles
1. **Purposeful** - Animations should guide attention, not distract
2. **Subtle** - Prefer gentle movements over dramatic ones
3. **Fast** - Keep durations under 500ms for UI interactions
4. **Spring physics** - Use springs for natural, organic feel

### Standard Animations

**Entrance:**
```typescript
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ type: "spring", stiffness: 80, damping: 14 }}
```

**Hover lift:**
```typescript
whileHover={{ scale: 1.05, y: -8 }}
transition={{ type: "spring", stiffness: 300, damping: 20 }}
```

**Float (continuous):**
```typescript
animate={{ y: [0, -6, 0] }}
transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
```

### Stagger Delays
- First item: `0ms`
- Subsequent: `+100-150ms` each

---

## Imagery

### Product Photography
- **Background:** Transparent PNG preferred
- **Minimum size:** 800x800px
- **Style:** Clean, well-lit, consistent angles

### Decorative Elements
- Chicken emoji (🐔) - use sparingly for warmth
- Egg emoji (🥚) - complements poultry theme
- Peacock feather motifs from logo

### Placeholders (Wireframe)
```html
<div class="border-2 border-dashed border-muted-foreground/30 rounded-lg">
  <!-- placeholder content -->
</div>
```

---

## Voice & Tone

### Writing Style
- **Warm & Relatable** - Friendly Filipino business tone
- **Benefit-focused** - Lead with what customers gain
- **Accessible** - Clear language for farmers
- **Confident** - Trust in product quality

### Do's
- Use "you" and "your farm"
- Highlight tangible results
- Include Filipino context where appropriate

### Don'ts
- Avoid overly technical jargon
- Don't be stiff or corporate
- Avoid negative framing

### Example Copy

**Hero headline:**
> "Boost Your Poultry's Health & Productivity"

**Value prop:**
> "Increase egg production and quality naturally"

**CTA:**
> "Order Now" / "Become a Dealer" / "Contact Us"

---

## File Structure

```
public/
└── images/
    ├── logo.png          # Primary logo
    ├── background.png    # Hero banner asset
    └── products/         # Product images (to be added)

components/
├── ui/                   # shadcn/ui components
└── floating-products.tsx # Animated product showcase

app/
├── globals.css           # Brand colors & tokens
└── wireframe/
    └── page.tsx          # Design wireframe
```

---

## Quick Reference

| Element | Value |
|---------|-------|
| Primary color | `#2E5A1C` (Forest Green) |
| CTA color | `#E53935` (Red) |
| Sunburst dark | `#F7A800` |
| Sunburst light | `#FFD54F` |
| Border radius | `0.5rem` |
| Animation lib | `motion` |
| Font | System sans-serif |

---

*Last updated: January 13, 2026*
