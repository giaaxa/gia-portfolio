
# Build Quest Implementation Plan

## Overview
Transform the homepage into a founder proof-of-work experience with a scroll-gamification section called "Build Quest". This involves restructuring navigation, redesigning the hero, creating a new UGC page route, and building an interactive achievement unlock system.

---

## Part 1: Routing and Navigation Changes

### 1.1 Create New UGC Page Route
**File: `src/pages/UGC.tsx` (new)**

Move the existing `UGCSection` component into a dedicated page with:
- Navbar with "Home" link back to main page
- Full UGC content
- Footer with navigation

**File: `src/App.tsx` (modify)**
- Add new route: `<Route path="/ugc" element={<UGC />} />`

### 1.2 Update Navigation
**File: `src/components/Navbar.tsx` (modify)**

Update nav items to:
- Home (Founder Mode) - scroll to #home
- Work - scroll to #work
- About - scroll to #about
- Proof - scroll to #proof (Build Quest section)
- Contact - scroll to #contact

Remove "UGC" from top navigation.

### 1.3 Update Footer
**File: `src/pages/Index.tsx` (modify footer section)**

Add "UGC Services" link pointing to `/ugc` in the footer navigation.

---

## Part 2: Hero Section Redesign

**File: `src/pages/Index.tsx` (modify hero section)**

Replace the current hero content with:

**Title (H1):**
"I'm building an Inner Operating System for the mind."

**Subtext:**
"Ex-IBM (SAP). Building ManaVerse / ManaShakti. Studying Data Analytics and AI. Shipping prototypes weekly."

**Buttons (3):**
1. "Watch 30s What I'm building" - Opens a video modal/embed
2. "Unlock Proof" - Smooth scroll to #proof (Build Quest)
3. "Read the ManaShakti case study" - Links to internal case study section/page

**Visual Changes:**
- Keep portrait and floating orb effect
- Update chips to reflect founder narrative
- Adjust spacing for new content length

---

## Part 3: Build Quest Section

### 3.1 Create Build Quest Component
**File: `src/components/BuildQuest.tsx` (new)**

Main container with:
- Sticky progress indicator (top-right): "01/04 -> 04/04"
- Four achievement sections that unlock on scroll

### 3.2 Progress Indicator Component
**File: `src/components/QuestProgress.tsx` (new)**

Features:
- Fixed position in top-right corner
- Shows current progress: "01/04", "02/04", etc.
- Animated transitions between states
- Visual progress bar or dots

### 3.3 Achievement Card Component
**File: `src/components/AchievementCard.tsx` (new)**

Props interface:
```text
- id: string (01-04)
- title: string
- subtitle: string
- isUnlocked: boolean
- proofCards: ProofCard[]
```

States:
- **Locked**: Blurred content, lock icon overlay, disabled buttons
- **Unlocking**: Glow animation, checkmark appears
- **Unlocked**: Full content visible, proof cards revealed

### 3.4 Proof Card Component
**File: `src/components/ProofCard.tsx` (new)**

Small cards within each achievement showing:
- Title
- Brief description or metric
- Optional link/button
- Consistent styling with existing `card-elevated` class

---

## Part 4: Achievement Content Structure

### Achievement 01: Ship
**Title:** "Ship"
**Subtitle:** "Proof I don't just talk. I build."

**Proof Cards (3-4):**
1. **ManaVerse / ManaShakti** - Wellness tech startup, hardware + app
2. **Richual** - Previous project/venture
3. **IBM** - SAP consulting, GenAI initiatives
4. Link to portfolio/work section

### Achievement 02: Learn
**Title:** "Learn"
**Subtitle:** "Becoming technical on purpose."

**Proof Cards (3-4):**
1. **Data and AI** - Code Institute diploma
2. **Python / SQL / Power BI** - Technical stack
3. **Weekly output** - Building in public, @usecodegia

### Achievement 03: Lead
**Title:** "Lead"
**Subtitle:** "I can move people, not just pixels."

**Proof Cards (3-4):**
1. **Society leadership** - President/leadership roles
2. **Team delivery** - IBM team coordination
3. **Community** - Building in public audience

### Achievement 04: Build Now
**Title:** "Build Now"
**Subtitle:** "What's happening this month."

**Proof Cards (3-4):**
1. **Currently shipping** - This week's focus
2. **Applying to** - Programs, accelerators, opportunities
3. **Looking for cofounder** - CTA with contact link

---

## Part 5: Scroll Unlock Mechanics

### 5.1 Intersection Observer Hook
**File: `src/hooks/useAchievementUnlock.ts` (new)**

Custom hook that:
- Tracks which achievements are in viewport
- Returns `unlockedAchievements: string[]`
- Triggers toast notifications on unlock

### 5.2 Toast Notifications
Using existing `useToast` hook from `@/hooks/use-toast`:
- "Achievement unlocked: Ship"
- "Achievement unlocked: Learn"
- "Achievement unlocked: Lead"
- "Achievement unlocked: Build Now"

### 5.3 Animation Keyframes
**File: `src/index.css` (add new keyframes)**

```text
- unlockGlow: Subtle glow pulse on unlock
- unlockReveal: Blur-to-clear transition
- checkmarkPop: Checkmark icon animation
- cardReveal: Staggered reveal for proof cards
```

---

## Part 6: Visual Improvements

### 6.1 Remove Placeholder/Empty Cards
- Audit all cards and remove any with missing images
- Replace gradient placeholders with actual designed covers
- Use existing assets: manaverse-logo.png, ibm-team.png, etc.

### 6.2 Project Images
- Ensure all project cards have proper cover images
- Use consistent aspect ratios and styling
- Add subtle hover effects

### 6.3 Minimal, Fast Design
- Keep animations subtle and performant
- Use CSS transforms for smooth animations
- Reduce parallax intensity for speed
- Mobile-first approach with touch feedback

---

## Part 7: Files Summary

| File | Action | Description |
|------|--------|-------------|
| `src/App.tsx` | Modify | Add /ugc route |
| `src/pages/UGC.tsx` | Create | New UGC page |
| `src/pages/Index.tsx` | Modify | New hero, remove UGCSection, add BuildQuest, update footer |
| `src/components/Navbar.tsx` | Modify | Update nav items |
| `src/components/BuildQuest.tsx` | Create | Main quest container |
| `src/components/QuestProgress.tsx` | Create | Progress indicator |
| `src/components/AchievementCard.tsx` | Create | Achievement with locked/unlocked states |
| `src/components/ProofCard.tsx` | Create | Individual proof items |
| `src/hooks/useAchievementUnlock.ts` | Create | Scroll-based unlock logic |
| `src/index.css` | Modify | Add unlock animations |

---

## Technical Details

### Intersection Observer Configuration
```text
threshold: 0.4 (40% visible to trigger)
rootMargin: "-10% 0px -10% 0px"
triggerOnce: true (unlock is permanent per session)
```

### Progress State Management
```text
- Use React useState to track unlocked achievements
- Store as Set<string> for O(1) lookups
- Persist in sessionStorage (optional) for scroll persistence
```

### Animation Timing
```text
- Unlock glow: 0.6s ease-out
- Content reveal: 0.4s with 0.1s stagger per proof card
- Progress update: 0.3s spring animation
- Toast duration: 3000ms
```

### Responsive Breakpoints
```text
Mobile (< 768px):
- Stack achievement cards vertically
- Progress indicator smaller, centered top
- Proof cards in 2-column grid

Desktop (>= 768px):
- Full layout with progress in top-right
- Proof cards in 3-4 column grid
- Enhanced hover effects
```

---

## Component Hierarchy
```text
Index.tsx
+-- Navbar (updated nav items)
+-- Hero Section (redesigned)
|   +-- Title, Subtext, 3 Buttons
+-- Work Section (existing)
+-- BuildQuest (#proof)
|   +-- QuestProgress (sticky)
|   +-- AchievementCard (x4)
|       +-- ProofCard (x3-4 each)
+-- About Section (existing, moved after proof)
+-- Contact Section (existing)
+-- Footer (with UGC link)
```
