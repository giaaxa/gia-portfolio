# Proof of Work Redesign: "Excavating Stars"

## Overview

Redesign the portfolio's "Proof of Work" section with an archaeological dig metaphor where achievements emerge as luminous artifacts. Grounded discovery meets cosmic ambition.

## Aesthetic Direction

**Concept**: "Excavating Stars" - archaeological dig dominant, with ethereal/glowing reveals. Each scroll unearths buried achievements that glow once discovered.

**Emotional takeaway**: "This person has depth" - layers of experience waiting to be discovered, earned through time.

---

## Color Palette

| Element | Value | Description |
|---------|-------|-------------|
| Background (top) | `#1a1410` | Warm deep brown |
| Background (bottom) | `#0d0a08` | Near-black earth |
| Strata layers | `#2a1f18`, `#1f1612`, `#15100c` | Terracotta, sienna, umber bands |
| Particle dust | `#d4a574`, `#c9956c` | Warm sand/amber |
| Artifact glow | `#f4a636`, `#e8920c` | Amber/gold luminescence |
| Card glass | `rgba(255, 248, 240, 0.06)` | Semi-transparent warm white |
| Card border | `rgba(244, 166, 54, 0.2)` | Amber at 20% opacity |
| Text primary | `#f5f0e8` | Warm off-white |
| Text secondary | `#a89070` | Muted gold |

**Atmosphere effects:**
- Subtle grain/noise texture (3-5% opacity)
- Vignette darkening at edges
- Faint radial gradient following scroll position

---

## Scroll Interaction: Brush/Sweep Reveal

### States

1. **Buried state**
   - Content hidden behind animated grain/dust layer
   - Shapes barely visible beneath - teasing content
   - Text shows as indistinct shadows

2. **Active excavation** (40% in viewport)
   - Scroll position maps to reveal percentage (0-100%)
   - Dust layer clip-path expands from center outward
   - Organic, non-circular reveal shape

3. **Particle burst**
   - 8-12 particle sprites drift upward/outward from reveal edge
   - CSS-only using pseudo-elements
   - Randomized animation-delay and position variance
   - Particles fade out over 1.5s

4. **Revealed state**
   - Achievement locks in - no re-burying on scroll back
   - Subtle "settled dust" ring at card base
   - Grounds artifact to dig site

### Technical Implementation

- `IntersectionObserver` for activation detection
- Scroll event listener for progress within zone
- Throttled to 60fps
- Respects `prefers-reduced-motion` (fallback to simple fade)

---

## Achievement Card Design: Luminous Artifacts

### Achievement Wrapper (outer container)

```css
background: rgba(255, 248, 240, 0.06);
border: 1px solid rgba(244, 166, 54, 0.2);
box-shadow: 0 0 40px rgba(244, 166, 54, 0.15);
transform: translateY(-4px); /* floating effect */
padding: 32px;
border-radius: 16px;
```

### Achievement Header

- **Icon**: Simple symbol with amber glow
  - Ship: rocket
  - Learn: book
  - Lead: flag
  - Build: hammer
- **Title**: Large, warm off-white, tracked out
- **Tagline**: Muted gold, italic, smaller

### Proof Cards (inner items)

- 3-column grid on desktop, responsive down
- Darker glass: `rgba(0, 0, 0, 0.3)`
- Thin amber top-border accent (2px)
- Content: title, description, optional metric badge, optional link
- Metric badges: Small pill, amber background, dark text
- Staggered reveal: 80ms delay between each card

### Hover States

- Proof cards lift: `translateY(-2px)`
- Increased glow intensity
- External link arrow slides in from left

---

## Depth Meter Progress Indicator

### Position & Size

- Fixed to left edge, vertically centered
- 40% viewport height
- 4px wide track (6px on hover)
- 24px from left edge

### Visual Design

- Track: `rgba(30, 20, 15, 0.8)` with inner shadow
- Fill: Amber gradient, top-to-bottom (digging down)
- 4 strata markers with 12px horizontal notch lines
- Labels on hover: achievement names in muted text

### Behavior

- Smooth fill animation with scroll
- Pulse ripple when passing strata marker
- Active marker glows brighter
- Click marker to scroll to achievement

### Responsive

- Hidden on mobile (< 768px)
- Fades in when entering section
- Fades out when leaving section

---

## Section Layout & Transitions

### Section Entry

1. Background transitions from light to deep earth tones
2. "Proof of Work" title fades in with upward drift
3. Subtitle typewriter reveal: "Scroll to excavate each achievement..."
4. Depth meter fades in (400ms delay)

### Dig Site Layout

- Achievements stack vertically, 120px gap
- Centered, max-width 900px
- Faint strata lines between achievements (full viewport width)
- Background darkens progressively while scrolling

### Section Exit

- "Build Now" (final achievement) has elevated treatment - current work
- Background lightens, transitioning to next section
- Scattered particles settle at section bottom

---

## Achievement Data Structure

```typescript
interface Achievement {
  id: string;
  icon: 'rocket' | 'book' | 'flag' | 'hammer';
  title: string;
  tagline: string;
  proofs: Proof[];
}

interface Proof {
  title: string;
  description: string;
  metric?: string;
  link?: string;
}
```

### Content

1. **Ship** - "Proof I don't just talk. I build."
   - ManaVerse / ManaShakti (50+ waitlist signups)
   - Richual (validated & pivoted)
   - IBM (global team coordination)

2. **Learn** - "Becoming technical on purpose."
   - Data & AI Diploma (In progress)
   - Python / SQL / Power BI (Daily practice)
   - Weekly output (@usecodegia)

3. **Lead** - "I can move people, not just pixels."
   - Society Leadership (Multiple terms)
   - Team Delivery (Global coordination)
   - Community Building

4. **Build Now** - "What's happening this month."
   - Currently Shipping (This week's focus)
   - Applying to accelerators
   - Looking for a Cofounder

---

## Files to Modify/Create

| File | Action | Purpose |
|------|--------|---------|
| `src/components/BuildQuest.tsx` | Rewrite | Main section container with new layout |
| `src/components/AchievementCard.tsx` | Rewrite | Luminous artifact card design |
| `src/components/ProofCard.tsx` | Rewrite | Inner proof item cards |
| `src/components/DepthMeter.tsx` | Create | New progress indicator |
| `src/components/DustOverlay.tsx` | Create | Brush reveal dust layer |
| `src/components/ParticleEffect.tsx` | Create | Drift particles on reveal |
| `src/hooks/useExcavation.ts` | Create | Scroll-based reveal logic |
| `src/index.css` | Extend | New keyframe animations |

---

## Accessibility

- Respects `prefers-reduced-motion`
- All content accessible without animations
- Sufficient color contrast on revealed content
- Keyboard navigation for depth meter
- Screen reader announces achievement unlocks

---

## Performance Considerations

- CSS-only particles (no JS animation loop)
- Throttled scroll listener (60fps)
- IntersectionObserver for activation (not scroll position checks)
- Will-change hints for animated elements
- Particles use transform/opacity only (no layout thrashing)
