import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface CosmicOrbProps {
  size?: number;
  x?: string;
  y?: string;
  color?: "purple" | "indigo" | "violet" | "sage";
  parallaxSpeed?: number;
  glowIntensity?: number;
  className?: string;
}

const colorMap = {
  purple: {
    base: "from-cosmic-purple/30 to-cosmic-violet/10",
    glow: "rgba(168, 85, 247, 0.3)",
    ring: "rgba(168, 85, 247, 0.15)",
  },
  indigo: {
    base: "from-cosmic-indigo/40 to-cosmic-deep/20",
    glow: "rgba(67, 56, 202, 0.3)",
    ring: "rgba(67, 56, 202, 0.15)",
  },
  violet: {
    base: "from-cosmic-violet/30 to-cosmic-purple/10",
    glow: "rgba(124, 58, 237, 0.35)",
    ring: "rgba(124, 58, 237, 0.15)",
  },
  sage: {
    base: "from-sage/30 to-sage-dark/10",
    glow: "rgba(139, 157, 131, 0.35)",
    ring: "rgba(139, 157, 131, 0.15)",
  },
};

export const CosmicOrb = ({
  size = 200,
  x = "50%",
  y = "50%",
  color = "purple",
  parallaxSpeed = 0.5,
  glowIntensity = 1,
  className = "",
}: CosmicOrbProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const colors = colorMap[color];

  const { scrollYProgress } = useScroll();
  const yOffset = useTransform(scrollYProgress, [0, 1], [0, parallaxSpeed * 200]);

  return (
    <motion.div
      ref={containerRef}
      className={`absolute pointer-events-none ${className}`}
      style={{
        left: x,
        top: y,
        y: yOffset,
        width: size,
        height: size,
        transform: "translate(-50%, -50%)",
      }}
    >
      {/* Outer glow */}
      <div
        className="absolute inset-0 rounded-full blur-3xl"
        style={{
          background: colors.glow,
          opacity: 0.5 * glowIntensity,
          transform: "scale(1.5)",
        }}
      />

      {/* Main orb body */}
      <div
        className={`absolute inset-0 rounded-full bg-gradient-radial ${colors.base}`}
        style={{
          background: `radial-gradient(circle at 30% 30%, ${colors.glow}, transparent 70%)`,
        }}
      />

      {/* Inner highlight (crescent moon effect) */}
      <div
        className="absolute rounded-full"
        style={{
          width: size * 0.85,
          height: size * 0.85,
          top: "7.5%",
          left: "7.5%",
          background: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.08), transparent 50%)`,
        }}
      />

      {/* Subtle ring */}
      <div
        className="absolute rounded-full border"
        style={{
          inset: -size * 0.15,
          borderColor: colors.ring,
          borderWidth: 1,
          opacity: 0.6,
        }}
      />
    </motion.div>
  );
};

// Pre-configured orb variants for easy placement
export const MoonOrb = (props: Omit<CosmicOrbProps, "size" | "color">) => (
  <CosmicOrb size={80} color="sage" glowIntensity={0.6} {...props} />
);

export const PlanetOrb = (props: Omit<CosmicOrbProps, "size">) => (
  <CosmicOrb size={160} {...props} />
);

export const GiantOrb = (props: Omit<CosmicOrbProps, "size">) => (
  <CosmicOrb size={300} glowIntensity={0.8} {...props} />
);
