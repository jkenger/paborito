# Paborito Development Log

## Project Overview
- **Project:** Paborito Poultry Products Landing Page
- **Client:** Paborito Agribiotech Solutions, Corp.
- **Developer:** Ken Gervacio
- **Start Date:** January 12, 2026

---

## 2026-01-13 | Design Setup & Research

### Brand Assets Received
- `logo.png` - Main logo featuring peacock/turkey feather design with "PP" monogram
- `background.png` - Hero banner with product lineup and sunburst pattern

### Brand Guidelines Created

Established comprehensive brand guidelines document.

**See:** [`docs/brand-guidelines.md`](./brand-guidelines.md)

**Key decisions:**
- Color palette: Forest green, lime green, orange gold, action red
- Sunburst pattern using `conic-gradient` with hard color stops
- Typography: System sans-serif, bold headings
- Border radius: `0.5rem` (friendly feel)
- Animation library: Motion (Framer Motion)

---

### Design Research Conducted

**Sources reviewed:**
- [Unbounce](https://unbounce.com/landing-page-examples/high-converting-landing-pages/) - Landing page patterns
- [Eight Media](https://eightmedia.ph/blog/filipino-branding-mix-traditional-and-modern-graphic-design/) - Filipino branding
- [Smart Chicken](https://smartchicken.com), [Foster Farms](https://fosterfarms.com) - Poultry industry sites
- [Fireart Studio](https://fireart.studio/blog/examples-of-poultry-websites-with-fantastic-designs/) - Poultry website examples

**Key takeaways:**
- Mobile-first design (83% of traffic)
- Bright colors resonate with Filipino audiences
- Benefit-focused copy over features
- Testimonials near conversion points
- Clean layouts with generous whitespace

---

### Wireframe Created

**Location:** `app/wireframe/page.tsx`
**Route:** `/wireframe`

**Page Structure (10 Sections):**

| # | Section | Description |
|---|---------|-------------|
| 1 | Navigation | Logo + nav links + CTA button |
| 2 | Hero | Sunburst gradient, headline, dual CTAs, product images |
| 3 | Trust Bar | 4 stats (Years, Farms, Products, Filipino Owned) |
| 4 | Value Props | 3 benefit cards with icons |
| 5 | Products | 5-column product card grid |
| 6 | Testimonials | 3 farmer testimonial cards |
| 7 | About | Company story + image |
| 8 | Dealer CTA | Full-width banner with benefits |
| 9 | Contact | Contact info + inquiry form |
| 10 | Footer | 4-column layout with links + social |

---

### Files Modified/Created

**Brand Setup:**
- `app/globals.css` - Updated with Paborito brand colors (light + dark mode)

**Assets:**
- `public/images/logo.png` - Company logo
- `public/images/background.png` - Hero banner asset

**Wireframe:**
- `app/wireframe/page.tsx` - Visual layout wireframe

---

### Next Steps
- [ ] Client approval on wireframe structure
- [ ] Receive remaining assets (product images, farm photos, testimonials)
- [ ] Build reusable components (Header, Footer, ProductCard, TestimonialCard)
- [ ] Implement homepage with actual content
- [ ] Create product detail pages
- [ ] Set up contact forms with validation
- [ ] Implement email integration (Resend/EmailJS)

---

### Reference Links

**Design Inspiration:**
- https://fireart.studio/blog/examples-of-poultry-websites-with-fantastic-designs/
- https://smartchicken.com
- https://fosterfarms.com

**Landing Page Best Practices:**
- https://unbounce.com/landing-page-examples/high-converting-landing-pages/
- https://heyflow.com/blog/b2b-landing-page-best-practices/

**Filipino Branding:**
- https://eightmedia.ph/blog/filipino-branding-mix-traditional-and-modern-graphic-design/
- https://sunday.ph/5-proven-ways-filipino-brands-win-through-design/

---

## 2026-01-13 | Wireframe Refinements & Animation Setup

### Navigation Header Refinements

Updated the navigation to a **white sticky header** design:

```
- Sticky positioning: `sticky top-0 z-50`
- Background: `bg-white/95 backdrop-blur-sm shadow-sm`
- Removed border for cleaner look
```

**Navigation Structure:**
- Logo placeholder with "PP" monogram + "PABORITO" text + tagline
- Nav links with pill-style hover states (`rounded-md hover:bg-muted/50`)
- Phone number visible on large screens
- Red CTA button ("Contact Us")

---

### Sunburst Background Implementation

Implemented CSS `conic-gradient` sunburst pattern for hero section:

**Final Implementation:**
```css
conic-gradient(
  from 180deg at 50% 100%,
  #F7A800 0deg 10deg,
  #FFD54F 10deg 20deg,
  /* ... alternating rays */
)
```

**Key Details:**
- Rays emanate from bottom center (`at 50% 100%`)
- Hard color stops for sharp edges (not blended)
- 36 rays at 10deg each
- Alternating between `#F7A800` (darker orange) and `#FFD54F` (lighter gold)

---

### Animation Library Research

Researched options for animated floating product showcase:

| Library | Pros | Cons |
|---------|------|------|
| **Framer Motion** | Full control, spring physics, Next.js native | Custom coding needed |
| **Aceternity UI** | Copy-paste, polished components | Some paid |
| **Hover.dev** | Pre-built hero sections | Premium features |
| **Animata** | Free, open-source | Limited options |
| **Pure CSS** | Zero dependencies | Limited interactivity |

**Decision:** Use **Framer Motion** (now called `motion`) for full control and spring physics animations.

**Reference Links:**
- https://motion.dev/ - Official Motion library
- https://examples.motion.dev/ - 330+ animation examples
- https://ui.aceternity.com/components/hero-sections - Aceternity hero components
- https://www.hover.dev/components/heros - Hover.dev hero sections
- https://animata.design/docs/hero/hero-section - Animata components

---

### Floating Products Component

Created `components/floating-products.tsx` with Framer Motion animations.

**Layout Style:** Arc/Curved (smile shape)
- Center product at top (hero focus)
- Left and right products lower, curving down
- Products rotated to follow arc curve

**Arc Positions:**
```typescript
const arcPositions = [
  { x: "22%", y: "32%", rotate: -10, scale: 0.88 },  // Left
  { x: "50%", y: "5%", rotate: 0, scale: 1 },        // Center (hero)
  { x: "78%", y: "32%", rotate: 10, scale: 0.88 },   // Right
]
```

**Animations Implemented:**
| Animation | Description |
|-----------|-------------|
| Entrance | Spring physics fade-in with staggered delay |
| Float | Continuous Y-axis bob (2.5-3s cycle) |
| Hover | Scale 1.05, straighten rotation, lift -8px |
| Decorations | Chicken & egg with gentle bounce/rotate |

**Styling:** Wireframe placeholder style
- Dashed borders (`border-2 border-dashed border-white/60`)
- Semi-transparent background (`bg-white/20`)
- Inner "Product Image" placeholder boxes

---

### Dependencies Added

```bash
npm install motion
```

**Package:** `motion` (formerly framer-motion)
- Spring physics animations
- GPU-accelerated transforms
- React/Next.js optimized

---

### Files Modified/Created

**New Components:**
- `components/floating-products.tsx` - Animated product showcase

**Updated:**
- `app/wireframe/page.tsx` - Integrated FloatingProducts, refined nav header
- `docs/devlog.md` - This update

---

### Current Wireframe Status

| Section | Status | Notes |
|---------|--------|-------|
| Navigation | Refined | White sticky header, no border |
| Hero | Refined | Sunburst bg, animated floating products |
| Trust Bar | Complete | Dark badge visibility fixed |
| Value Props | Complete | 3 benefit cards |
| Products | Complete | 5-column grid |
| Testimonials | Complete | 3 cards |
| About | Complete | Story + placeholder |
| Dealer CTA | Complete | Full-width banner |
| Contact | Complete | Form + info |
| Footer | Refined | Dark badge visibility fixed |

---

### Next Steps
- [ ] Install `motion` package
- [ ] Test animations in browser
- [ ] Client review of wireframe
- [ ] Receive product images (PNG with transparent bg)
- [ ] Replace placeholders with actual assets
- [ ] Build production components
