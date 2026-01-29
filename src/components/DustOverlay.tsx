import { useMemo } from "react";
import { cn } from "@/lib/utils";

interface DustOverlayProps {
  revealProgress: number; // 0 to 1
  className?: string;
}

export const DustOverlay = ({ revealProgress, className }: DustOverlayProps) => {
  // Generate semi-random dust pattern points for organic reveal shape
  const clipPath = useMemo(() => {
    if (revealProgress <= 0) return "circle(0% at 50% 50%)";
    if (revealProgress >= 1) return "circle(150% at 50% 50%)";

    // Create organic blob shape that expands with progress
    // Using a radial reveal with slight wobble
    const baseRadius = revealProgress * 120; // Expand beyond 100% to fully reveal
    const wobble = 5; // Amount of shape variation

    // Generate points for a blob-like polygon
    const points: string[] = [];
    const steps = 12;

    for (let i = 0; i < steps; i++) {
      const angle = (i / steps) * Math.PI * 2;
      const radiusVariation = Math.sin(angle * 3) * wobble * revealProgress;
      const radius = baseRadius + radiusVariation;
      const x = 50 + Math.cos(angle) * radius;
      const y = 50 + Math.sin(angle) * radius;
      points.push(`${x}% ${y}%`);
    }

    return `polygon(${points.join(", ")})`;
  }, [revealProgress]);

  // Don't render if fully revealed
  if (revealProgress >= 1) return null;

  return (
    <div
      className={cn(
        "absolute inset-0 z-10 pointer-events-none transition-opacity duration-300",
        className
      )}
      style={{
        clipPath: `inset(0)`, // Clip to bounds
      }}
      aria-hidden="true"
    >
      {/* Main overlay layer */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 30% 40%, hsl(222 45% 12%) 0%, transparent 50%),
            radial-gradient(ellipse at 70% 60%, hsl(222 47% 9%) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 50%, hsl(222 50% 6%) 0%, hsl(222 50% 5%) 100%)
          `,
          clipPath,
          transition: "clip-path 0.1s ease-out",
        }}
      />

      {/* Grain texture overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          opacity: 0.15,
          clipPath,
          transition: "clip-path 0.1s ease-out",
        }}
      />

      {/* Shimmer effect at reveal edge */}
      {revealProgress > 0 && revealProgress < 1 && (
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 50% 50%, hsl(200 80% 55% / 0.2) 0%, transparent ${revealProgress * 100 + 5}%)`,
            opacity: 0.6,
            filter: "blur(20px)",
          }}
        />
      )}

      {/* "Hidden" text hint for completely unrevealed state */}
      {revealProgress < 0.1 && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="flex items-center gap-3 px-5 py-2.5 rounded-full"
            style={{
              background: "hsl(222 47% 8% / 0.9)",
              border: "1px solid hsl(200 80% 55% / 0.2)",
              backdropFilter: "blur(8px)",
            }}
          >
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="hsl(215 20% 55%)"
              strokeWidth="2"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <span
              className="text-sm font-medium"
              style={{ color: "hsl(215 20% 55%)" }}
            >
              Scroll to explore
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
