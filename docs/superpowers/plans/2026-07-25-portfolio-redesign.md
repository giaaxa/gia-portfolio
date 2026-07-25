# Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the portfolio as a clean, editorial three-column layout with lilac accent system.

**Architecture:** Single-page React app with three-column grid layout. Left sidebar contains branding/social/skills, center column has main content (hero, work, about), right sidebar has status indicators. Deep purple footer. Framer Motion for scroll animations.

**Tech Stack:** React 18, TypeScript, Vite, Tailwind CSS, Framer Motion, shadcn/ui base components

## Global Constraints

- React 18.3+ with TypeScript strict mode
- Tailwind CSS 3.4+ with custom color tokens
- Framer Motion 12+ for all animations
- Mobile-first responsive (breakpoints: 768px tablet, 1024px desktop)
- Respect `prefers-reduced-motion` for all animations
- No new dependencies beyond what's already installed
- Single Index page (remove UGC page routing)

---

## File Structure

```
src/
├── components/
│   ├── layout/
│   │   └── ThreeColumnLayout.tsx    # Grid wrapper with responsive behavior
│   ├── sections/
│   │   ├── LeftSidebar.tsx          # Brand, socials, skills, star accent
│   │   ├── RightSidebar.tsx         # Status indicators, CTAs
│   │   ├── HeroContent.tsx          # "hi! i'm gia." + numbered sections + photo
│   │   ├── WorkSection.tsx          # Work entries with hover effects
│   │   ├── AboutSection.tsx         # Bio text + tools marquee
│   │   └── Footer.tsx               # Deep purple footer
│   ├── ui/
│   │   ├── StarCursor.tsx           # Custom star cursor
│   │   ├── Marquee.tsx              # Keep existing, update colors
│   │   ├── ScrollProgress.tsx       # Update to lilac color
│   │   ├── SocialLinks.tsx          # Social icon links
│   │   ├── SkillTags.tsx            # Skills with dividers
│   │   ├── WorkEntry.tsx            # Individual work item
│   │   └── AnimatedText.tsx         # Line-by-line text reveal
│   └── ui/ (shadcn - keep button.tsx, separator.tsx)
├── pages/
│   └── Index.tsx                    # Main page composition
├── hooks/
│   └── useReducedMotion.ts          # Accessibility hook
├── lib/
│   └── utils.ts                     # Keep existing cn() utility
└── index.css                        # Updated with new color system
```

---

### Task 1: Update Color System & Typography

**Files:**
- Modify: `tailwind.config.ts`
- Modify: `src/index.css`
- Modify: `index.html`

**Interfaces:**
- Produces: Tailwind color tokens (`lilac-50` through `lilac-700`, `purple-800`, `purple-900`, `star-gold`, updated `charcoal`, `gray`, `light-gray`)
- Produces: CSS custom properties for shadcn compatibility
- Produces: Instrument Serif font loaded via Google Fonts

- [ ] **Step 1: Update index.html to load Instrument Serif font**

Open `index.html` and update the Google Fonts link to include Instrument Serif:

```html
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400;1,9..40,500&family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet">
```

Replace the existing Fraunces font link with this (removing Fraunces, adding Instrument Serif).

- [ ] **Step 2: Update tailwind.config.ts with new colors and fonts**

Replace the entire colors and fontFamily sections:

```typescript
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
      },
      maxWidth: {
        'container': '1200px',
      },
      colors: {
        // Primary palette
        white: '#FFFFFF',
        'off-white': '#FAFAFA',
        charcoal: '#1A1A1A',
        gray: '#6B6B6B',
        'light-gray': '#E5E5E5',

        // Lilac accent system
        lilac: {
          50: '#F5F0FA',
          100: '#EDE5F5',
          200: '#DDD0EE',
          300: '#C9B8E0',
          500: '#9B7DC7',
          600: '#7C5DAF',
          700: '#5D4190',
        },

        // Deep purple footer
        purple: {
          800: '#2D1A4A',
          900: '#1E1033',
        },

        // Special accents
        'star-gold': '#E8D5A3',

        // shadcn compatibility
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        marquee: 'marquee var(--marquee-duration, 30s) linear infinite',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
```

- [ ] **Step 3: Update src/index.css with new design system**

Replace the entire file with:

```css
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400;1,9..40,500&family=Instrument+Serif:ital@0;1&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

/* Editorial Minimalist Design System
   - White backgrounds with lilac accents
   - Instrument Serif (display) + DM Sans (body)
   - Three-column editorial layout
   - Deep purple footer
*/

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 0 0% 10%;

    --card: 0 0% 98%;
    --card-foreground: 0 0% 10%;

    --popover: 0 0% 100%;
    --popover-foreground: 0 0% 10%;

    --primary: 270 35% 63%;
    --primary-foreground: 0 0% 100%;

    --secondary: 270 25% 95%;
    --secondary-foreground: 0 0% 10%;

    --muted: 270 10% 96%;
    --muted-foreground: 0 0% 42%;

    --accent: 270 35% 63%;
    --accent-foreground: 0 0% 100%;

    --destructive: 0 72% 51%;
    --destructive-foreground: 0 0% 100%;

    --border: 0 0% 90%;
    --input: 0 0% 90%;
    --ring: 270 35% 63%;

    --radius: 0.5rem;
  }
}

@layer base {
  * {
    @apply border-border;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    @apply bg-white text-charcoal antialiased;
    font-family: 'DM Sans', system-ui, sans-serif;
    font-size: 16px;
    line-height: 1.6;
  }

  /* Display typography - Instrument Serif */
  .font-display {
    font-family: 'Instrument Serif', Georgia, serif;
  }

  h1, h2, h3 {
    font-family: 'Instrument Serif', Georgia, serif;
    color: #1A1A1A;
    line-height: 1.1;
  }

  h1 {
    font-size: clamp(3rem, 8vw, 4.5rem);
    font-weight: 400;
  }

  h2 {
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 400;
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 400;
  }

  /* Reduced motion support */
  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }

  /* Marquee animation */
  .animate-marquee {
    animation: marquee var(--marquee-duration, 30s) linear infinite;
  }

  .animate-marquee:hover {
    animation-play-state: paused;
  }
}
```

- [ ] **Step 4: Verify build works**

Run: `npm run build`
Expected: Build completes without errors

- [ ] **Step 5: Commit changes**

```bash
git add tailwind.config.ts src/index.css index.html
git commit -m "feat: update design system with lilac colors and Instrument Serif"
```

---

### Task 2: Create useReducedMotion Hook

**Files:**
- Create: `src/hooks/useReducedMotion.ts`

**Interfaces:**
- Produces: `useReducedMotion(): boolean` hook that returns true if user prefers reduced motion

- [ ] **Step 1: Create the hook file**

Create `src/hooks/useReducedMotion.ts`:

```typescript
import { useState, useEffect } from 'react';

export function useReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return prefersReducedMotion;
}
```

- [ ] **Step 2: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: No TypeScript errors

- [ ] **Step 3: Commit**

```bash
git add src/hooks/useReducedMotion.ts
git commit -m "feat: add useReducedMotion accessibility hook"
```

---

### Task 3: Create StarCursor Component

**Files:**
- Create: `src/components/ui/StarCursor.tsx`

**Interfaces:**
- Consumes: `useReducedMotion()` from `src/hooks/useReducedMotion.ts`
- Produces: `<StarCursor />` component that renders a star following the mouse

- [ ] **Step 1: Create StarCursor component**

Create `src/components/ui/StarCursor.tsx`:

```typescript
import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function StarCursor() {
  const prefersReducedMotion = useReducedMotion();
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 400 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.style.cursor === 'pointer' ||
        window.getComputedStyle(target).cursor === 'pointer';

      setIsHovering(isClickable);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [cursorX, cursorY, prefersReducedMotion]);

  if (prefersReducedMotion) return null;

  return (
    <motion.div
      className="fixed pointer-events-none z-[9999] hidden md:block"
      style={{
        x,
        y,
        translateX: '-50%',
        translateY: '-50%',
      }}
    >
      <motion.span
        className="text-star-gold text-lg select-none"
        animate={{
          scale: isClicking ? 1.4 : isHovering ? 1.2 : 1,
          rotate: isClicking ? 45 : 0,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      >
        ✦
      </motion.span>
    </motion.div>
  );
}
```

- [ ] **Step 2: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: No TypeScript errors

- [ ] **Step 3: Commit**

```bash
git add src/components/ui/StarCursor.tsx
git commit -m "feat: add StarCursor component with hover and click effects"
```

---

### Task 4: Create AnimatedText Component

**Files:**
- Create: `src/components/ui/AnimatedText.tsx`

**Interfaces:**
- Consumes: `useReducedMotion()` from `src/hooks/useReducedMotion.ts`
- Produces: `<AnimatedText lines={string[]} />` component with line-by-line blur-to-sharp reveal

- [ ] **Step 1: Create AnimatedText component**

Create `src/components/ui/AnimatedText.tsx`:

```typescript
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface AnimatedTextProps {
  lines: string[];
  className?: string;
  as?: 'h1' | 'h2' | 'p' | 'div';
  staggerDelay?: number;
}

export function AnimatedText({
  lines,
  className = '',
  as: Component = 'div',
  staggerDelay = 0.3
}: AnimatedTextProps) {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  const lineVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: 'blur(8px)'
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  if (prefersReducedMotion) {
    return (
      <Component className={className}>
        {lines.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </Component>
    );
  }

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
    >
      {lines.map((line, index) => (
        <motion.div key={index} variants={lineVariants}>
          {Component === 'h1' || Component === 'h2' ? (
            <Component className="m-0">{line}</Component>
          ) : (
            line
          )}
        </motion.div>
      ))}
    </motion.div>
  );
}
```

- [ ] **Step 2: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: No TypeScript errors

- [ ] **Step 3: Commit**

```bash
git add src/components/ui/AnimatedText.tsx
git commit -m "feat: add AnimatedText component with blur-to-sharp reveal"
```

---

### Task 5: Update ScrollProgress and Marquee Components

**Files:**
- Modify: `src/components/ScrollProgress.tsx`
- Modify: `src/components/Marquee.tsx`

**Interfaces:**
- Produces: Updated `<ScrollProgress />` with lilac-500 color
- Produces: Updated `<Marquee />` with lilac dot separators

- [ ] **Step 1: Update ScrollProgress to use lilac color**

Replace `src/components/ScrollProgress.tsx`:

```typescript
import { motion, useScroll, useSpring } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] z-[100] origin-left bg-lilac-500"
      style={{ scaleX }}
    />
  );
}
```

- [ ] **Step 2: Update Marquee with lilac styling**

Replace `src/components/Marquee.tsx`:

```typescript
import { ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  className?: string;
  speed?: number;
  pauseOnHover?: boolean;
}

export function Marquee({
  children,
  className = "",
  speed = 30,
  pauseOnHover = true
}: MarqueeProps) {
  return (
    <div
      className={`overflow-hidden relative ${className}`}
      style={{
        maskImage: "linear-gradient(90deg, transparent, black 5%, black 95%, transparent)"
      }}
    >
      <div
        className={`flex gap-8 w-max ${pauseOnHover ? "hover:[animation-play-state:paused]" : ""}`}
        style={{
          animation: `marquee ${speed}s linear infinite`,
        }}
      >
        <div className="flex gap-8 shrink-0 items-center">{children}</div>
        <div className="flex gap-8 shrink-0 items-center" aria-hidden="true">{children}</div>
      </div>
    </div>
  );
}

export function MarqueeSeparator() {
  return <span className="text-lilac-500 text-sm">•</span>;
}
```

- [ ] **Step 3: Verify build**

Run: `npm run build`
Expected: Build completes without errors

- [ ] **Step 4: Commit**

```bash
git add src/components/ScrollProgress.tsx src/components/Marquee.tsx
git commit -m "feat: update ScrollProgress and Marquee with lilac theme"
```

---

### Task 6: Create SocialLinks and SkillTags Components

**Files:**
- Create: `src/components/ui/SocialLinks.tsx`
- Create: `src/components/ui/SkillTags.tsx`

**Interfaces:**
- Produces: `<SocialLinks orientation="vertical" | "horizontal" />` component
- Produces: `<SkillTags skills={string[]} />` component with divider lines

- [ ] **Step 1: Create SocialLinks component**

Create `src/components/ui/SocialLinks.tsx`:

```typescript
import { motion } from 'framer-motion';

interface SocialLinksProps {
  orientation?: 'vertical' | 'horizontal';
  className?: string;
}

const socials = [
  {
    name: 'Instagram',
    icon: '○',
    url: 'https://www.instagram.com/usecodegia/'
  },
  {
    name: 'X',
    icon: '✕',
    url: 'https://x.com/usecodegia'
  },
  {
    name: 'LinkedIn',
    icon: 'in',
    url: 'https://www.linkedin.com/in/gia-pereira-3279631a4/'
  },
];

export function SocialLinks({ orientation = 'vertical', className = '' }: SocialLinksProps) {
  const isVertical = orientation === 'vertical';

  return (
    <div className={`flex ${isVertical ? 'flex-col gap-3' : 'flex-row gap-4'} ${className}`}>
      {socials.map((social) => (
        <motion.a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-charcoal hover:text-lilac-600 transition-colors duration-200 text-sm flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="w-4 text-center font-medium">{social.icon}</span>
          {isVertical && <span className="sr-only">{social.name}</span>}
        </motion.a>
      ))}
    </div>
  );
}
```

- [ ] **Step 2: Create SkillTags component**

Create `src/components/ui/SkillTags.tsx`:

```typescript
interface SkillTagsProps {
  skills: string[];
  className?: string;
}

export function SkillTags({ skills, className = '' }: SkillTagsProps) {
  return (
    <div className={`flex flex-col ${className}`}>
      {skills.map((skill, index) => (
        <div key={skill}>
          {index > 0 && <div className="h-px bg-light-gray my-2" />}
          <span className="text-sm text-charcoal">{skill}</span>
        </div>
      ))}
    </div>
  );
}
```

- [ ] **Step 3: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: No TypeScript errors

- [ ] **Step 4: Commit**

```bash
git add src/components/ui/SocialLinks.tsx src/components/ui/SkillTags.tsx
git commit -m "feat: add SocialLinks and SkillTags components"
```

---

### Task 7: Create WorkEntry Component

**Files:**
- Create: `src/components/ui/WorkEntry.tsx`

**Interfaces:**
- Produces: `<WorkEntry number={string} title={string} description={string} bullets={string[]} tags={string[]} action?: { label: string, url: string } />` component

- [ ] **Step 1: Create WorkEntry component**

Create `src/components/ui/WorkEntry.tsx`:

```typescript
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface WorkEntryProps {
  number: string;
  title: string;
  description: string;
  bullets: string[];
  tags: [string, string];
  action?: { label: string; url: string };
}

export function WorkEntry({ number, title, description, bullets, tags, action }: WorkEntryProps) {
  const prefersReducedMotion = useReducedMotion();

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
    },
  };

  const content = (
    <div className="group py-6 transition-colors duration-200 hover:bg-lilac-50 -mx-4 px-4 rounded-lg">
      <div className="flex justify-between items-start mb-2">
        <div className="flex gap-3">
          <span className="text-sm font-semibold text-charcoal">[{number}]</span>
          <span className="text-sm font-semibold text-charcoal">{title}</span>
        </div>
        {action && (
          <a
            href={action.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray hover:text-lilac-600 transition-all duration-200 group-hover:translate-x-1"
          >
            → {action.label}
          </a>
        )}
      </div>

      <p className="text-sm text-gray mb-3 ml-9">{description}</p>

      <div className="ml-9 space-y-1 mb-4">
        {bullets.map((bullet, index) => (
          <p key={index} className="text-sm text-gray">
            <span className="text-lilac-500 mr-2">⊙</span>
            {bullet}
          </p>
        ))}
      </div>

      <div className="flex justify-between items-center ml-9">
        <span className="text-sm text-charcoal">{tags[0]}</span>
        <span className="text-sm text-gray">{tags[1]}</span>
      </div>

      <div className="h-px bg-light-gray mt-6" />
    </div>
  );

  if (prefersReducedMotion) {
    return content;
  }

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      {content}
    </motion.div>
  );
}
```

- [ ] **Step 2: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: No TypeScript errors

- [ ] **Step 3: Commit**

```bash
git add src/components/ui/WorkEntry.tsx
git commit -m "feat: add WorkEntry component with hover effects"
```

---

### Task 8: Create ThreeColumnLayout Component

**Files:**
- Create: `src/components/layout/ThreeColumnLayout.tsx`

**Interfaces:**
- Produces: `<ThreeColumnLayout left={ReactNode} center={ReactNode} right={ReactNode} />` with responsive behavior

- [ ] **Step 1: Create ThreeColumnLayout component**

Create `src/components/layout/ThreeColumnLayout.tsx`:

```typescript
import { ReactNode } from 'react';

interface ThreeColumnLayoutProps {
  left: ReactNode;
  center: ReactNode;
  right: ReactNode;
}

export function ThreeColumnLayout({ left, center, right }: ThreeColumnLayoutProps) {
  return (
    <div className="min-h-screen">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Mobile: Stack with right info at top */}
        <div className="lg:hidden">
          <div className="pt-8 pb-6">{right}</div>
          <div>{center}</div>
          <div className="py-8">{left}</div>
        </div>

        {/* Desktop: Three columns */}
        <div className="hidden lg:grid lg:grid-cols-[200px_1fr_200px] lg:gap-8 lg:py-12">
          {/* Left sidebar - sticky */}
          <aside className="sticky top-12 h-fit">
            {left}
          </aside>

          {/* Center content */}
          <main>
            {center}
          </main>

          {/* Right sidebar - sticky */}
          <aside className="sticky top-12 h-fit text-right">
            {right}
          </aside>
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: No TypeScript errors

- [ ] **Step 3: Commit**

```bash
git add src/components/layout/ThreeColumnLayout.tsx
git commit -m "feat: add ThreeColumnLayout with responsive grid"
```

---

### Task 9: Create LeftSidebar Section

**Files:**
- Create: `src/components/sections/LeftSidebar.tsx`

**Interfaces:**
- Consumes: `<SocialLinks />` from `src/components/ui/SocialLinks.tsx`
- Consumes: `<SkillTags />` from `src/components/ui/SkillTags.tsx`
- Produces: `<LeftSidebar />` component with brand, socials, skills, star

- [ ] **Step 1: Create LeftSidebar component**

Create `src/components/sections/LeftSidebar.tsx`:

```typescript
import { SocialLinks } from '@/components/ui/SocialLinks';
import { SkillTags } from '@/components/ui/SkillTags';

const skills = [
  'wellness tech',
  'data analysis',
  'web development',
  'content creation',
  'product building',
  'alchemist',
];

export function LeftSidebar() {
  return (
    <div className="flex flex-col gap-8">
      {/* Brand */}
      <h1 className="font-serif text-base font-medium uppercase tracking-[0.1em] text-charcoal">
        Gia Pereira
      </h1>

      {/* Social Links */}
      <SocialLinks orientation="vertical" />

      {/* Skills */}
      <SkillTags skills={skills} />

      {/* Star accent */}
      <div className="text-star-gold text-2xl">✦</div>
    </div>
  );
}
```

- [ ] **Step 2: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: No TypeScript errors

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/LeftSidebar.tsx
git commit -m "feat: add LeftSidebar with brand, socials, skills"
```

---

### Task 10: Create RightSidebar Section

**Files:**
- Create: `src/components/sections/RightSidebar.tsx`

**Interfaces:**
- Produces: `<RightSidebar />` component with status indicators and CTAs

- [ ] **Step 1: Create RightSidebar component**

Create `src/components/sections/RightSidebar.tsx`:

```typescript
import { motion } from 'framer-motion';

export function RightSidebar() {
  return (
    <div className="flex flex-col gap-6 lg:items-end">
      {/* Status indicators */}
      <div className="flex flex-col gap-2 lg:items-end">
        <span className="text-sm text-gray">
          <span className="text-lilac-500">◆</span> open to opportunities
        </span>
        <span className="text-sm text-gray">
          <span className="text-charcoal">☆</span> based in birmingham, uk
        </span>
      </div>

      {/* View work button */}
      <motion.a
        href="#work"
        className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-charcoal border border-charcoal rounded-full hover:bg-lilac-500 hover:text-white hover:border-lilac-500 transition-all duration-200"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
      >
        view work →
      </motion.a>

      {/* ManaVerse status */}
      <div className="flex flex-col lg:items-end">
        <span className="text-sm font-medium text-charcoal">ManaVerse</span>
        <span className="text-xs text-gray">launching Sept 2026</span>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: No TypeScript errors

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/RightSidebar.tsx
git commit -m "feat: add RightSidebar with status and CTAs"
```

---

### Task 11: Create HeroContent Section

**Files:**
- Create: `src/components/sections/HeroContent.tsx`

**Interfaces:**
- Consumes: `<AnimatedText />` from `src/components/ui/AnimatedText.tsx`
- Produces: `<HeroContent />` component with intro, numbered sections, photo

- [ ] **Step 1: Create HeroContent component**

Create `src/components/sections/HeroContent.tsx`:

```typescript
import { motion } from 'framer-motion';
import { AnimatedText } from '@/components/ui/AnimatedText';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import heroImage from '@/assets/hero-portrait.jpg';

const sections = [
  {
    number: '01',
    title: 'founder',
    bullets: [
      'ManaVerse – wellness tech startup',
      'wearables + cognitive training',
      'demo live at manaverse.co.uk',
    ],
  },
  {
    number: '02',
    title: 'data analyst',
    bullets: [
      'lifestyle & wellbeing analysis',
      'stress level predictions dashboard',
      'social media mental health ML',
    ],
  },
  {
    number: '03',
    title: 'builder',
    bullets: [
      'Creovate – content management tool (hackathon)',
      'DPU – digital marketing agency site',
      'UGC content creation services',
    ],
  },
  {
    number: '04',
    title: 'background',
    bullets: [
      'economics graduate',
      'ex-IBM consultant',
      'currently studying Data & AI',
    ],
  },
];

export function HeroContent() {
  const prefersReducedMotion = useReducedMotion();

  const sectionVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.8 + i * 0.15,
      },
    }),
  };

  const photoVariants = {
    hidden: { clipPath: 'inset(0 100% 0 0)' },
    visible: {
      clipPath: 'inset(0 0% 0 0)',
      transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94], delay: 1.4 },
    },
  };

  return (
    <div className="space-y-12">
      {/* Hero text */}
      <div>
        <AnimatedText
          lines={['hi!', "i'm gia."]}
          className="font-serif text-5xl md:text-7xl text-charcoal leading-[1.1]"
        />

        <motion.p
          className="text-gray text-base mt-6"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          i'm a 24 y/o building at the intersection of wellness, technology, & creativity...
        </motion.p>
      </div>

      {/* Numbered sections */}
      <div className="space-y-8">
        {sections.map((section, index) => (
          <motion.div
            key={section.number}
            custom={index}
            variants={prefersReducedMotion ? {} : sectionVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="flex gap-3 mb-2">
              <span className="text-sm font-semibold text-charcoal">[{section.number}]</span>
              <span className="text-sm font-semibold text-charcoal">{section.title}</span>
            </div>
            <div className="ml-9 space-y-1">
              {section.bullets.map((bullet, i) => (
                <p key={i} className="text-sm text-gray">
                  <span className="text-lilac-500 mr-2">⊙</span>
                  {bullet}
                </p>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Photo */}
      <motion.div
        className="overflow-hidden rounded-2xl"
        variants={prefersReducedMotion ? {} : photoVariants}
        initial="hidden"
        animate="visible"
      >
        <img
          src={heroImage}
          alt="Gia Pereira"
          className="w-full h-auto object-cover aspect-[4/5] max-h-[500px]"
        />
      </motion.div>
    </div>
  );
}
```

- [ ] **Step 2: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: No TypeScript errors

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/HeroContent.tsx
git commit -m "feat: add HeroContent with animated text and photo reveal"
```

---

### Task 12: Create WorkSection

**Files:**
- Create: `src/components/sections/WorkSection.tsx`

**Interfaces:**
- Consumes: `<WorkEntry />` from `src/components/ui/WorkEntry.tsx`
- Produces: `<WorkSection />` component with all work entries

- [ ] **Step 1: Create WorkSection component**

Create `src/components/sections/WorkSection.tsx`:

```typescript
import { motion } from 'framer-motion';
import { WorkEntry } from '@/components/ui/WorkEntry';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const workEntries = [
  {
    number: '01',
    title: 'ManaVerse',
    description: 'Wellness tech startup – wearables + cognitive training for mental performance',
    bullets: [
      'manaverse.io (main)',
      'manaverse.co.uk (demo)',
      'full launch Sept 2026',
    ],
    tags: ['founder', 'wellness tech'] as [string, string],
    action: { label: 'visit', url: 'https://manaverse.io' },
  },
  {
    number: '02',
    title: 'Data Analysis Projects',
    description: 'Dashboard insights, ML models, and data storytelling',
    bullets: [
      'Lifestyle & wellbeing analysis',
      'Stress level predictions',
      'Social media mental health',
    ],
    tags: ['data analyst', 'python · sql · powerbi'] as [string, string],
    action: { label: 'github', url: 'https://github.com/giaaxa' },
  },
  {
    number: '03',
    title: 'Creovate',
    description: 'Hackathon project – all-in-one content creation management tool',
    bullets: [
      'Content matching & ideas',
      'Trend & competitor analysis',
      'Meta insights integration',
    ],
    tags: ['builder', 'hackathon'] as [string, string],
  },
  {
    number: '04',
    title: 'Digital Professionals Unwired',
    description: 'Website for a digital marketing agency',
    bullets: ['digitalprofessionalsunwired.com'],
    tags: ['web development', 'client work'] as [string, string],
    action: { label: 'visit', url: 'https://www.digitalprofessionalsunwired.com/' },
  },
  {
    number: '05',
    title: 'UGC Content Creation',
    description: 'Scroll-stopping content for brands, stays, products',
    bullets: [
      'Vertical videos, photo sets, raw footage',
      'Niches: travel, tech, lifestyle',
    ],
    tags: ['content creation', 'services'] as [string, string],
    action: { label: 'inquire', url: 'mailto:gia.pereira31@gmail.com' },
  },
  {
    number: '06',
    title: 'Web Projects',
    description: 'Collection of websites and web experiments',
    bullets: ['Various client and personal projects'],
    tags: ['web development', 'portfolio'] as [string, string],
    action: { label: 'github', url: 'https://github.com/giaaxa' },
  },
];

export function WorkSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="work" className="py-16">
      <motion.h2
        className="font-serif text-4xl md:text-5xl text-charcoal mb-12"
        initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        WORK
      </motion.h2>

      <div>
        {workEntries.map((entry, index) => (
          <WorkEntry key={entry.number} {...entry} />
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: No TypeScript errors

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/WorkSection.tsx
git commit -m "feat: add WorkSection with all work entries"
```

---

### Task 13: Create AboutSection

**Files:**
- Create: `src/components/sections/AboutSection.tsx`

**Interfaces:**
- Consumes: `<Marquee />` from `src/components/Marquee.tsx`
- Produces: `<AboutSection />` component with bio and tools marquee

- [ ] **Step 1: Create AboutSection component**

Create `src/components/sections/AboutSection.tsx`:

```typescript
import { motion } from 'framer-motion';
import { Marquee, MarqueeSeparator } from '@/components/Marquee';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const tools = [
  'Python', 'SQL', 'Power BI', 'Figma', 'Notion',
  'Canva', 'CapCut', 'DaVinci Resolve'
];

export function AboutSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="about" className="py-16">
      <motion.h2
        className="font-serif text-4xl md:text-5xl text-charcoal mb-8"
        initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        ABOUT
      </motion.h2>

      <motion.div
        className="space-y-6 text-gray text-base max-w-2xl"
        initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <p>
          i think deeply about where wellness, technology, & creativity meet—& how weaving
          these worlds together can help people live, create, & connect better.
        </p>
        <p>
          i believe in building consciously: learning by doing, beginning before i'm ready,
          and allowing every lesson to sharpen my future work.
        </p>
      </motion.div>

      <div className="h-px bg-light-gray my-12" />

      <motion.div
        initial={prefersReducedMotion ? {} : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h3 className="text-sm font-medium text-charcoal uppercase tracking-wide mb-6">
          Tools I Use
        </h3>

        <Marquee speed={25} className="py-4">
          {tools.map((tool, index) => (
            <span key={tool} className="flex items-center gap-8">
              <span className="text-gray text-sm whitespace-nowrap">{tool}</span>
              {index < tools.length - 1 && <MarqueeSeparator />}
            </span>
          ))}
        </Marquee>
      </motion.div>
    </section>
  );
}
```

- [ ] **Step 2: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: No TypeScript errors

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/AboutSection.tsx
git commit -m "feat: add AboutSection with bio and tools marquee"
```

---

### Task 14: Create Footer Section

**Files:**
- Create: `src/components/sections/Footer.tsx`

**Interfaces:**
- Produces: `<Footer />` component with deep purple styling

- [ ] **Step 1: Create Footer component**

Create `src/components/sections/Footer.tsx`:

```typescript
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const socialLinks = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/gia-pereira-3279631a4/' },
  { name: 'Instagram', url: 'https://www.instagram.com/usecodegia/' },
  { name: 'X', url: 'https://x.com/usecodegia' },
];

const sectionLinks = [
  { name: 'About', href: '#about' },
  { name: 'Work', href: '#work' },
  { name: 'Contact', href: 'mailto:gia.pereira31@gmail.com' },
];

export function Footer() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.footer
      className="bg-purple-900 text-lilac-200 py-16 mt-16"
      initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Left - Tagline and email */}
          <div className="space-y-6">
            <p className="font-serif text-lg italic">building & living consciously</p>
            <a
              href="mailto:gia.pereira31@gmail.com"
              className="text-sm uppercase tracking-wide underline underline-offset-4 hover:text-white transition-colors"
            >
              gia.pereira31@gmail.com
            </a>
          </div>

          {/* Center - Social */}
          <div>
            <h4 className="text-xs uppercase tracking-wide text-lilac-200/60 mb-4">Social</h4>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:text-white transition-colors hover:translate-y-[-2px] inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right - Sections */}
          <div>
            <h4 className="text-xs uppercase tracking-wide text-lilac-200/60 mb-4">Sections</h4>
            <ul className="space-y-2">
              {sectionLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-white transition-colors hover:translate-y-[-2px] inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-lilac-200/20">
          <p className="text-xs text-lilac-200/60">© 2026 Gia Pereira</p>
        </div>
      </div>
    </motion.footer>
  );
}
```

- [ ] **Step 2: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: No TypeScript errors

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/Footer.tsx
git commit -m "feat: add Footer with deep purple styling"
```

---

### Task 15: Rebuild Index Page

**Files:**
- Modify: `src/pages/Index.tsx`

**Interfaces:**
- Consumes: `<ThreeColumnLayout />` from `src/components/layout/ThreeColumnLayout.tsx`
- Consumes: `<LeftSidebar />` from `src/components/sections/LeftSidebar.tsx`
- Consumes: `<RightSidebar />` from `src/components/sections/RightSidebar.tsx`
- Consumes: `<HeroContent />` from `src/components/sections/HeroContent.tsx`
- Consumes: `<WorkSection />` from `src/components/sections/WorkSection.tsx`
- Consumes: `<AboutSection />` from `src/components/sections/AboutSection.tsx`
- Consumes: `<Footer />` from `src/components/sections/Footer.tsx`
- Consumes: `<StarCursor />` from `src/components/ui/StarCursor.tsx`
- Consumes: `<ScrollProgress />` from `src/components/ScrollProgress.tsx`
- Produces: Rebuilt Index page with editorial layout

- [ ] **Step 1: Replace Index.tsx with new layout**

Replace `src/pages/Index.tsx`:

```typescript
import { ThreeColumnLayout } from '@/components/layout/ThreeColumnLayout';
import { LeftSidebar } from '@/components/sections/LeftSidebar';
import { RightSidebar } from '@/components/sections/RightSidebar';
import { HeroContent } from '@/components/sections/HeroContent';
import { WorkSection } from '@/components/sections/WorkSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { Footer } from '@/components/sections/Footer';
import { StarCursor } from '@/components/ui/StarCursor';
import { ScrollProgress } from '@/components/ScrollProgress';

export default function Index() {
  return (
    <>
      <StarCursor />
      <ScrollProgress />

      <ThreeColumnLayout
        left={<LeftSidebar />}
        center={
          <>
            <HeroContent />
            <WorkSection />
            <AboutSection />
          </>
        }
        right={<RightSidebar />}
      />

      <Footer />
    </>
  );
}
```

- [ ] **Step 2: Verify build works**

Run: `npm run build`
Expected: Build completes without errors

- [ ] **Step 3: Commit**

```bash
git add src/pages/Index.tsx
git commit -m "feat: rebuild Index page with editorial three-column layout"
```

---

### Task 16: Clean Up Unused Files and Update Routing

**Files:**
- Delete: `src/pages/UGC.tsx`
- Modify: `src/App.tsx`
- Delete: Multiple unused components

**Interfaces:**
- Produces: Simplified routing with only Index page
- Produces: Removal of unused cosmic/organic theme components

- [ ] **Step 1: Update App.tsx to remove UGC route**

Read current App.tsx first, then update to only include Index route:

```typescript
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
```

- [ ] **Step 2: Delete UGC page**

```bash
rm src/pages/UGC.tsx
```

- [ ] **Step 3: Delete unused cosmic/theme components**

```bash
rm -f src/components/StarField.tsx
rm -f src/components/CosmicOrb.tsx
rm -f src/components/OrbitalRing.tsx
rm -f src/components/FloatingOrbs.tsx
rm -f src/components/NeuralNetworkBg.tsx
rm -f src/components/MouseGlow.tsx
rm -f src/components/GlowCard.tsx
rm -f src/components/ParticleEffect.tsx
rm -f src/components/DustOverlay.tsx
rm -f src/components/WaveDivider.tsx
rm -f src/components/EcgPulseLine.tsx
rm -f src/components/DepthMeter.tsx
rm -f src/components/TiltCard.tsx
rm -f src/components/MagneticWrap.tsx
rm -f src/components/CustomCursor.tsx
rm -f src/components/GradientText.tsx
rm -f src/components/ParallaxCard.tsx
rm -f src/components/ThemeToggle.tsx
rm -f src/components/SplineScene.tsx
rm -f src/components/Botanicals.tsx
rm -f src/components/Section.tsx
rm -f src/components/Navbar.tsx
rm -f src/components/ProjectCard.tsx
rm -f src/components/AchievementCard.tsx
rm -f src/components/ProofCard.tsx
rm -f src/components/BuildQuest.tsx
rm -f src/components/UGCSection.tsx
rm -f src/hooks/useTheme.ts
rm -f src/hooks/useParallax.ts
rm -f src/hooks/useExcavation.ts
```

- [ ] **Step 4: Verify build still works**

Run: `npm run build`
Expected: Build completes without errors

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "chore: remove unused components and UGC page"
```

---

### Task 17: Final Polish and Testing

**Files:**
- Various touch-ups as needed

**Interfaces:**
- Produces: Fully working portfolio matching the design spec

- [ ] **Step 1: Start dev server and verify visually**

Run: `npm run dev`
Expected: Site loads with three-column layout, lilac accents, all animations working

- [ ] **Step 2: Test responsive behavior**

Check at breakpoints:
- Desktop (1024px+): Three columns
- Tablet (768-1023px): Two columns or stacked
- Mobile (<768px): Single column

- [ ] **Step 3: Test all links**

Verify:
- Social links open in new tabs
- Email link opens mail client
- Work entry links work
- Internal navigation scrolls to sections

- [ ] **Step 4: Test animations**

Verify:
- Star cursor follows mouse on desktop
- Scroll progress bar works
- Hero text animates in
- Photo reveals with clip-path
- Work entries fade up on scroll
- Marquee scrolls and pauses on hover

- [ ] **Step 5: Test reduced motion**

Enable "Reduce motion" in system settings
Verify: All animations are disabled gracefully

- [ ] **Step 6: Final commit**

```bash
git add -A
git commit -m "feat: complete portfolio redesign with editorial layout"
```

---

## Summary

This plan rebuilds the portfolio in 17 tasks:

1. **Tasks 1-2:** Foundation (colors, typography, reduced motion hook)
2. **Tasks 3-7:** UI components (cursor, text animation, scroll progress, social links, skills, work entry)
3. **Task 8:** Layout system (three-column grid)
4. **Tasks 9-14:** Page sections (sidebars, hero, work, about, footer)
5. **Task 15:** Page composition (Index rebuild)
6. **Task 16:** Cleanup (remove unused files)
7. **Task 17:** Testing and polish

Each task is independently committable and testable.
