import { useMemo } from "react";
import { cn } from "@/lib/utils";

interface ParticleEffectProps {
  isActive: boolean;
  particleCount?: number;
  className?: string;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  driftX: number;
  driftY: number;
  duration: number;
}

export const ParticleEffect = ({
  isActive,
  particleCount = 12,
  className,
}: ParticleEffectProps) => {
  // Generate particles with random positions and drift directions
  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100, // % position
      y: 30 + Math.random() * 40, // concentrated in middle
      size: 2 + Math.random() * 4, // 2-6px
      delay: Math.random() * 0.5, // 0-0.5s delay
      driftX: (Math.random() - 0.5) * 80, // -40 to 40px
      driftY: -40 - Math.random() * 40, // -40 to -80px (upward)
      duration: 1 + Math.random() * 0.8, // 1-1.8s
    }));
  }, [particleCount]);

  if (!isActive) return null;

  return (
    <div
      className={cn(
        "absolute inset-0 pointer-events-none overflow-hidden z-20",
        className
      )}
      aria-hidden="true"
    >
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full animate-particle-drift"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            background: `radial-gradient(circle, hsl(200 80% 70%) 0%, hsl(200 70% 55%) 100%)`,
            boxShadow: `0 0 ${particle.size * 2}px hsl(200 80% 55% / 0.4)`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
            ["--drift-x" as string]: `${particle.driftX}px`,
            ["--drift-y" as string]: `${particle.driftY}px`,
          }}
        />
      ))}
    </div>
  );
};
