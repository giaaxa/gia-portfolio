# Portfolio Redesign: Editorial Minimalist Style

**Date:** 2026-07-25
**Status:** Approved
**Approach:** Full Rebuild (Approach A)

---

## Overview

Redesign Gia Pereira's portfolio from cosmic-themed full-width layout to a clean, editorial three-column minimalist design inspired by eileenmedia.com. The new design uses lilac purple as an accent system while maintaining subtle personality through animations.

### Design Philosophy
- **Minimalist + Subtle Personality** — clean editorial layout with memorable interactions
- **Typography-forward** — Instrument Serif branding, DM Sans body
- **Lilac accent system** — white backgrounds with purple accents and deep purple footer
- **Scroll transitions** — prominent but elegant fade-up animations

---

## Layout & Structure

### Three-Column Grid

```
┌─────────────────────────────────────────────────────────────┐
│  LEFT (200px)    │    CENTER (flexible)    │  RIGHT (200px) │
│                  │                          │                │
│  GIA PEREIRA     │    [nav: ABOUT  WORK]   │                │
│                  │                          │                │
│  Social icons    │    Main content          │  Status info   │
│  Skill tags      │    Photo                 │  CTAs          │
│  Star accent     │    Work entries          │                │
│                  │    About                 │                │
└─────────────────────────────────────────────────────────────┘
│                     DEEP PURPLE FOOTER                       │
└─────────────────────────────────────────────────────────────┘
```

### Responsive Breakpoints
- **Desktop (1024px+):** Three columns as designed
- **Tablet (768-1023px):** Two columns (left sidebar + main, right info above main)
- **Mobile (<768px):** Single column stack (name → status → main → skills → socials)

### Container
- Max-width: 1200px
- Centered with horizontal padding: 24px (mobile), 48px (desktop)

---

## Color System

### Primary Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `white` | `#FFFFFF` | Main background |
| `off-white` | `#FAFAFA` | Subtle section backgrounds |
| `charcoal` | `#1A1A1A` | Primary text |
| `gray` | `#6B6B6B` | Secondary text, muted |
| `light-gray` | `#E5E5E5` | Divider lines, borders |

### Lilac Accent System

| Token | Hex | Usage |
|-------|-----|-------|
| `lilac-50` | `#F5F0FA` | Subtle hover backgrounds |
| `lilac-100` | `#EDE5F5` | Tag backgrounds, highlights |
| `lilac-300` | `#C9B8E0` | Secondary accents |
| `lilac-500` | `#9B7DC7` | Primary accent (links, buttons) |
| `lilac-600` | `#7C5DAF` | Hover states |
| `lilac-700` | `#5D4190` | Active states |

### Deep Purple Footer

| Token | Hex | Usage |
|-------|-----|-------|
| `purple-900` | `#1E1033` | Footer background |
| `purple-800` | `#2D1A4A` | Footer hover states |
| `lilac-200` | `#DDD0EE` | Footer text |

### Special Accents

| Token | Hex | Usage |
|-------|-----|-------|
| `star-gold` | `#E8D5A3` | Star cursor, special accents |

---

## Typography

### Font Stack

| Role | Font | Weights | Source |
|------|------|---------|--------|
| Display | Instrument Serif | 400, 500 | Google Fonts |
| Body | DM Sans | 400, 500, 600 | Google Fonts (existing) |

### Type Scale

| Element | Font | Size | Weight | Style |
|---------|------|------|--------|-------|
| Brand "GIA PEREIRA" | Instrument Serif | 16px | 500 | uppercase, tracking 0.1em |
| Hero "hi! i'm gia." | Instrument Serif | 72px (clamp 48-72px) | 400 | — |
| Section titles "WORK", "ABOUT" | Instrument Serif | 48px | 400 | — |
| Intro paragraph | DM Sans | 16px | 400 | color: gray |
| Section numbers [01] | DM Sans | 14px | 600 | color: charcoal |
| Section content | DM Sans | 14px | 400 | color: gray |
| Skill tags | DM Sans | 14px | 400 | color: charcoal |
| Status indicators | DM Sans | 13px | 400 | color: gray |
| Navigation | DM Sans | 14px | 500 | uppercase, tracking wide |
| Buttons | DM Sans | 14px | 500 | — |

### Line Heights
- Display: 1.1
- Body: 1.6
- Labels: 1.4

---

## Hero Section

### Left Column
```
GIA PEREIRA              (brand, uppercase, Instrument Serif)

○ Instagram              (social icons, vertically stacked)
✕ X
in LinkedIn

─────────────            (divider lines between skills)
wellness tech
─────────────
data analysis
─────────────
web development
─────────────
content creation
─────────────
product building
─────────────
alchemist

✦                        (star accent at bottom)
```

### Center Column
```
hi!
i'm gia.

i'm a [USER TO FILL: your age] y/o...

[01]  founder
⊙ ManaVerse – wellness tech startup
⊙ wearables + cognitive training
⊙ demo live at manaverse.co.uk

[02]  data analyst
⊙ lifestyle & wellbeing analysis
⊙ stress level predictions dashboard
⊙ social media mental health ML

[03]  builder
⊙ Creovate – content management tool (hackathon)
⊙ DPU – digital marketing agency site
⊙ UGC content creation services

[04]  background
⊙ economics graduate
⊙ ex-IBM consultant
⊙ currently studying Data & AI

[PHOTO - clip-path reveal]
```

### Right Column
```
◆ open to opportunities

☆ based in birmingham, uk

┌─────────────────┐
│   view work →   │
└─────────────────┘

ManaVerse
launching Sept 2026
```

### Photo Treatment
- Use existing `hero-portrait.jpg`
- Resize/crop as needed to fit layout
- Soft rounded corners (16px)
- Clip-path reveal animation from left

---

## Work Section

### Structure
Single scrollable section below hero with numbered entries.

### Work Entries

**[01] ManaVerse** → visit
- Wellness tech startup – wearables + cognitive training for mental performance
- manaverse.io (main)
- manaverse.co.uk (demo)
- full launch Sept 2026
- Tags: `founder` `wellness tech`

**[02] Data Analysis Projects** → github
- Dashboard insights, ML models, and data storytelling
- Lifestyle & wellbeing analysis: https://github.com/giaaxa/lifestyle_wellbeing_analysis
- Stress level predictions: https://github.com/giaaxa/stress-level-prediction
- Social media mental health: https://github.com/giaaxa/social-media-mental-health
- Tags: `data analyst` `python · sql · powerbi`

**[03] Creovate**
- Hackathon project – all-in-one content creation management tool
- Content matching & ideas
- Trend & competitor analysis
- Meta insights integration
- Tags: `builder` `hackathon`

**[04] Digital Professionals Unwired** → visit
- Website for a digital marketing agency
- https://www.digitalprofessionalsunwired.com/
- Tags: `web development` `client work`

**[05] UGC Content Creation** → inquire
- Scroll-stopping content for brands, stays, products
- Vertical videos, photo sets, raw footage
- Niches: travel, tech, lifestyle
- Tags: `content creation` `services`

**[06] Web Projects** → github
- Collection of websites and web experiments
- Tags: `web development` `portfolio`

### Entry Layout
```
[##]  Title                                              → action
      Description paragraph
      ⊙ bullet point
      ⊙ bullet point

      tag                                                tag
      ─────────────────────────────────────────────────────────
```

### Hover Behavior
- Row: lilac-50 background fade
- Arrow: shifts right 4px
- Transition: 0.2s ease

---

## About Section

### Content
```
ABOUT

i think deeply about where wellness, technology, & creativity meet—&
how weaving these worlds together can help people live, create, & connect better.

i believe in building consciously: learning by doing, beginning before i'm ready,
and allowing every lesson to sharpen my future work.

───────────────────────────────────────────────────────

TOOLS I USE

[marquee: Python • SQL • Power BI • Figma • Notion • Canva • CapCut • DaVinci Resolve]
```

### Marquee
- Infinite horizontal scroll
- Pause on hover
- Fade at edges
- Lilac dot separators

---

## Footer

### Layout
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  building & living consciously        SOCIAL     SECTIONS   │
│                                       ──────     ────────   │
│  GIA.PEREIRA31@GMAIL.COM              LinkedIn   About      │
│  ─────────────────────────            Instagram  Work       │
│                                       X          Contact    │
│                                                             │
│  © 2026 Gia Pereira                                         │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Styling
- Background: `purple-900` (#1E1033)
- Text: `lilac-200` (#DDD0EE)
- Tagline: Instrument Serif
- Links: DM Sans, hover glow effect
- Email: underlined, lilac hover

---

## Animations & Interactions

### Star Cursor ✦
- Element: Small gold star (#E8D5A3)
- Behavior: Follows mouse with 0.1s delay, smooth easing
- Hover: Scales 1.2x on clickable elements
- Click: Subtle pulse animation

### Hover Micro-interactions

| Element | Effect | Duration |
|---------|--------|----------|
| Nav links | Underline draws from left, lilac | 0.2s |
| Social icons | Scale 1.1x, lilac tint | 0.2s |
| Work entries | Lilac-50 bg, arrow shifts right | 0.2s |
| Buttons | Lilac-500 bg, white text, lift | 0.2s |
| Footer links | Glow, lift 2px | 0.2s |

### Scroll Transitions

| Element | Animation | Duration | Stagger |
|---------|-----------|----------|---------|
| "hi! i'm gia." | Blur-to-sharp, fade up | 0.8s | 0.3s between lines |
| Numbered sections | Fade up, slight scale | 0.6s | 0.15s |
| Photo | Clip-path from left | 1s | — |
| Work entries | Fade up on viewport enter | 0.5s | 0.1s |
| About text | Fade up | 0.6s | — |
| Tools marquee | Fade in, then scroll | 0.6s | — |
| Footer | Fade up | 0.6s | — |

### Scroll Progress Bar
- Position: Fixed top
- Style: Thin lilac-500 line
- Behavior: Grows from left as page scrolls

### Reduced Motion
- Respect `prefers-reduced-motion: reduce`
- Fallback: Instant opacity transitions, no movement

---

## Contact Information

- **Email:** gia.pereira31@gmail.com
- **LinkedIn:** https://www.linkedin.com/in/gia-pereira-3279631a4/
- **Instagram:** https://www.instagram.com/usecodegia/
- **X:** https://x.com/usecodegia

---

## Technical Approach

### What We Keep
- Vite + React + TypeScript setup
- Tailwind CSS configuration (update colors)
- Framer Motion for animations
- shadcn/ui base components
- DM Sans font
- Existing assets (hero-portrait.jpg, logos)

### What We Build New
- Three-column layout components
- New color system in Tailwind config
- Instrument Serif font integration
- Star cursor component
- Simplified page structure (single Index page)
- New section components (Hero, Work, About, Footer)

### What We Remove
- UGC page (merged into Work)
- Cosmic theme system
- Complex background components (StarField, CosmicOrb, etc.)
- Tilt cards, magnetic wrap (keeping simpler hover effects)
- Multiple theme support (single light theme)

### File Structure (Proposed)
```
src/
├── components/
│   ├── layout/
│   │   ├── ThreeColumnLayout.tsx
│   │   ├── LeftSidebar.tsx
│   │   ├── RightSidebar.tsx
│   │   └── MainContent.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Work.tsx
│   │   ├── About.tsx
│   │   └── Footer.tsx
│   ├── ui/
│   │   ├── StarCursor.tsx
│   │   ├── Marquee.tsx
│   │   ├── ScrollProgress.tsx
│   │   └── SocialLinks.tsx
│   └── ... (keep needed shadcn components)
├── pages/
│   └── Index.tsx
├── styles/
│   └── index.css (updated with new colors)
└── ...
```

---

## Success Criteria

1. Clean three-column editorial layout matching reference style
2. Lilac accent system applied consistently
3. Instrument Serif branding prominent and readable
4. All work entries accessible with proper links
5. Smooth, prominent scroll animations
6. Star cursor working across the site
7. Fully responsive across desktop, tablet, mobile
8. Fast page load (no heavy 3D/particle effects)
9. Accessible (keyboard nav, screen readers, reduced motion)
