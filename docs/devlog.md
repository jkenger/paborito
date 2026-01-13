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

### Brand Identity Extracted

**Company Info:**
- Full Name: Paborito Agribiotech Solutions, Corp.
- Established: 2012
- Products: Poultry digestive health supplements (Progastro, Progastro Plus, Odor & Fly Powder)

**Color Palette (OKLCH):**

| Token | Light Mode | Usage |
|-------|------------|-------|
| `--primary` | `oklch(0.35 0.1 145)` | Dark forest green - headings, buttons |
| `--secondary` | `oklch(0.75 0.18 125)` | Lime green - badges, highlights |
| `--accent` | `oklch(0.78 0.16 70)` | Orange/gold - hero bg, warm accents |
| `--destructive` | `oklch(0.55 0.22 25)` | Red - CTAs, alerts |
| `--background` | `oklch(0.99 0.005 90)` | Warm off-white |

**Design Tokens:**
- Border radius: `0.5rem` (friendly, rounded feel)
- Warm undertones throughout

---

### Design Research Summary

#### High-Converting Landing Page Patterns
Source: [Unbounce](https://unbounce.com/landing-page-examples/high-converting-landing-pages/)

**Recommended Section Order:**
1. Hero - Product in context, clear value prop, single CTA
2. Value Props - Benefits over features, address pain points
3. Social Proof - Testimonials, partner logos, credibility
4. Features/Products - Scannable benefits, concise copy
5. CTA (repeated) - Descriptive button copy

**Key Principles:**
- Maintain "conversion scent" - consistent messaging throughout
- Remove navigation distractions on landing pages
- Mobile-first design (83% of traffic)
- Use directional cues toward CTAs

#### Filipino Branding Insights
Source: [Eight Media](https://eightmedia.ph/blog/filipino-branding-mix-traditional-and-modern-graphic-design/)

**What Works:**
- Bright, festive colors resonate with Filipino audiences
- Humor and relatability in copy > corporate tone
- Jeepney-style typography creates cultural authenticity
- Mobile-first is critical (majority of PH users on mobile)

**Cultural Elements:**
- Indigenous patterns add historical depth
- Pinoy-friendly typography (jeepney signage style)
- Balance cultural roots with modern design

#### Poultry Industry Website Patterns
Sources: [Smart Chicken](https://smartchicken.com), [Foster Farms](https://fosterfarms.com), [Fireart Studio](https://fireart.studio/blog/examples-of-poultry-websites-with-fantastic-designs/)

**Common Patterns:**
- Clean, modular layouts with generous whitespace
- Full-width hero imagery showing products in use
- Recipe/lifestyle integration rather than just specs
- "Find a Store" / "Where to Buy" as prominent CTAs
- Testimonials near conversion points
- Social feed integration for community trust

**Color Schemes Observed:**
- Smart Chicken: Navy blue (#005487), Gold (#ffb600), White, Dark red
- Foster Farms: Neutral tones, emphasis on product photography

---

### Design Direction Decisions

**Visual Style:** Sunburst gradient hero with floating product images
- Leverages existing brand asset (background.png)
- Card-based modular layout
- Generous whitespace, mobile-first
- Green/gold brand palette with red CTAs

**Typography:** Bold, friendly headings with clear body text

**Copywriting Tone:** Warm & Relatable
- Friendly Filipino business tone
- Accessible language for farmers
- Benefit-focused messaging

**Key Elements:**
- Peacock/feather motifs as decorative accents
- Checkmark icons for benefits (matching brand materials)
- Warm, organic textures where appropriate

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
