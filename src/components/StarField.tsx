import { useEffect, useRef, useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  twinkleDelay: number;
  layer: number; // 1 = far (slow), 2 = mid, 3 = near (fast)
}

interface StarFieldProps {
  starCount?: number;
  className?: string;
}

export const StarField = ({ starCount = 80, className = "" }: StarFieldProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Different parallax speeds for each layer
  const layer1Y = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const layer2Y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const layer3Y = useTransform(scrollYProgress, [0, 1], [0, 180]);

  const stars = useMemo<Star[]>(() => {
    return Array.from({ length: starCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.6 + 0.2,
      twinkleDelay: Math.random() * 4,
      layer: Math.floor(Math.random() * 3) + 1,
    }));
  }, [starCount]);

  const layer1Stars = stars.filter((s) => s.layer === 1);
  const layer2Stars = stars.filter((s) => s.layer === 2);
  const layer3Stars = stars.filter((s) => s.layer === 3);

  return (
    <div ref={containerRef} className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Layer 1 - Far stars (slowest) */}
      <motion.div className="absolute inset-0" style={{ y: layer1Y }}>
        {layer1Stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white animate-twinkle"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: star.size * 0.6,
              height: star.size * 0.6,
              opacity: star.opacity * 0.5,
              animationDelay: `${star.twinkleDelay}s`,
            }}
          />
        ))}
      </motion.div>

      {/* Layer 2 - Mid stars */}
      <motion.div className="absolute inset-0" style={{ y: layer2Y }}>
        {layer2Stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white animate-twinkle"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: star.size * 0.8,
              height: star.size * 0.8,
              opacity: star.opacity * 0.7,
              animationDelay: `${star.twinkleDelay}s`,
            }}
          />
        ))}
      </motion.div>

      {/* Layer 3 - Near stars (fastest) */}
      <motion.div className="absolute inset-0" style={{ y: layer3Y }}>
        {layer3Stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-cosmic-glow animate-twinkle"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: star.size,
              height: star.size,
              opacity: star.opacity,
              animationDelay: `${star.twinkleDelay}s`,
              boxShadow: `0 0 ${star.size * 2}px rgba(196, 181, 253, 0.4)`,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};
