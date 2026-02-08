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
        "2xl": "1080px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        serif: ['"Fraunces"', 'Georgia', 'serif'],
      },
      maxWidth: {
        'container': '1080px',
      },
      colors: {
        cream: '#FEFDF8',
        sand: '#F5F0E8',
        'sand-dark': '#E8E0D4',
        charcoal: '#2C2C2C',
        'charcoal-light': '#4A4A4A',
        sage: {
          DEFAULT: '#8B9D83',
          light: '#A8B5A2',
          dark: '#6B7D63',
          50: '#F2F5F1',
          100: '#E5EBE3',
          200: '#CBD7C7',
          300: '#A8B5A2',
          400: '#8B9D83',
          500: '#6B7D63',
        },
        sky: {
          DEFAULT: '#7BA5C1',
          light: '#9BBDD5',
          dark: '#5B8DAD',
          50: '#F0F5F9',
          100: '#E1EBF3',
          200: '#C3D7E7',
          400: '#7BA5C1',
        },
        // Cosmic palette
        cosmic: {
          void: '#0a0a12',
          deep: '#12101a',
          nebula: '#1a1625',
          indigo: '#4338ca',
          violet: '#7c3aed',
          purple: '#a855f7',
          glow: '#c4b5fd',
        },
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
        '2xl': '1rem',
        '3xl': '1.5rem',
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
