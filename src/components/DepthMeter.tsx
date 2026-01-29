import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface DepthMeterProps {
  progress: number; // 0 to 1
  achievements: { id: string; title: string }[];
  activeIndex: number;
  isVisible: boolean;
  onMarkerClick?: (index: number) => void;
}

export const DepthMeter = ({
  progress,
  achievements,
  activeIndex,
  isVisible,
  onMarkerClick,
}: DepthMeterProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showLabels, setShowLabels] = useState(false);
  const [pulsingIndex, setPulsingIndex] = useState<number | null>(null);

  // Track when we pass a stratum marker
  useEffect(() => {
    const currentAchievementProgress = progress * achievements.length;
    const justPassedIndex = Math.floor(currentAchievementProgress);

    if (justPassedIndex !== pulsingIndex && justPassedIndex < achievements.length) {
      setPulsingIndex(justPassedIndex);

      // Clear pulse after animation
      const timer = setTimeout(() => {
        setPulsingIndex(null);
      }, 600);

      return () => clearTimeout(timer);
    }
  }, [progress, achievements.length, pulsingIndex]);

  // Show labels on hover with slight delay
  useEffect(() => {
    if (isHovered) {
      const timer = setTimeout(() => setShowLabels(true), 150);
      return () => clearTimeout(timer);
    } else {
      setShowLabels(false);
    }
  }, [isHovered]);

  return (
    <div
      className={cn(
        "fixed left-6 top-1/2 -translate-y-1/2 z-40 transition-all duration-500 hidden md:block",
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ height: "40vh" }}
    >
      {/* Track background */}
      <div
        className={cn(
          "relative h-full rounded-full transition-all duration-200",
          isHovered ? "w-1.5" : "w-1"
        )}
        style={{
          background: "hsl(222 47% 10%)",
          boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.3)",
        }}
      >
        {/* Progress fill - fills from top (exploring down) */}
        <div
          className="absolute top-0 left-0 right-0 rounded-full transition-all duration-300 ease-out"
          style={{
            height: `${progress * 100}%`,
            background: "linear-gradient(180deg, hsl(200 80% 55%) 0%, hsl(200 70% 40%) 100%)",
            boxShadow: "0 0 12px hsl(200 80% 55% / 0.4)",
          }}
        />

        {/* Strata markers */}
        {achievements.map((achievement, index) => {
          const markerPosition = ((index + 0.5) / achievements.length) * 100;
          const isActive = index === activeIndex;
          const isPassed = (index + 1) / achievements.length <= progress;
          const isPulsing = index === pulsingIndex;

          return (
            <div
              key={achievement.id}
              className="absolute left-0 flex items-center group"
              style={{ top: `${markerPosition}%`, transform: "translateY(-50%)" }}
            >
              {/* Marker notch */}
              <button
                onClick={() => onMarkerClick?.(index)}
                className={cn(
                  "relative flex items-center transition-all duration-200",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/50"
                )}
                aria-label={`Scroll to ${achievement.title}`}
              >
                {/* Horizontal line extending from track */}
                <div
                  className={cn(
                    "h-px transition-all duration-300",
                    isHovered ? "w-4" : "w-3",
                    isPulsing && "animate-strata-pulse"
                  )}
                  style={{
                    background: isPassed || isActive
                      ? "hsl(200 80% 55% / 0.8)"
                      : "hsl(215 20% 55% / 0.3)",
                    marginLeft: isHovered ? "6px" : "4px",
                  }}
                />

                {/* Marker dot */}
                <div
                  className={cn(
                    "rounded-full transition-all duration-300",
                    isActive ? "w-2 h-2" : "w-1.5 h-1.5"
                  )}
                  style={{
                    background: isPassed
                      ? "hsl(200 80% 55%)"
                      : isActive
                        ? "hsl(200 80% 55% / 0.8)"
                        : "hsl(215 20% 55% / 0.5)",
                    boxShadow: isActive || isPassed
                      ? "0 0 8px hsl(200 80% 55% / 0.4)"
                      : "none",
                  }}
                />

                {/* Label on hover */}
                <span
                  className={cn(
                    "ml-3 text-xs font-medium whitespace-nowrap transition-all duration-200",
                    showLabels
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-2 pointer-events-none"
                  )}
                  style={{
                    color: isPassed || isActive ? "hsl(210 40% 96%)" : "hsl(215 20% 55%)",
                  }}
                >
                  {achievement.title}
                </span>
              </button>
            </div>
          );
        })}
      </div>

      {/* Depth indicator text */}
      <div
        className={cn(
          "absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-mono transition-opacity duration-300",
          isHovered ? "opacity-100" : "opacity-60"
        )}
        style={{ color: "hsl(215 20% 55%)" }}
      >
        {Math.round(progress * 100)}%
      </div>
    </div>
  );
};
