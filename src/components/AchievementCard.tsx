import { useEffect, useRef, useState } from "react";
import { Rocket, BookOpen, Flag, Hammer } from "lucide-react";
import { cn } from "@/lib/utils";
import { ProofCard, ProofCardData } from "./ProofCard";
import { DustOverlay } from "./DustOverlay";
import { ParticleEffect } from "./ParticleEffect";

interface AchievementCardProps {
  id: string;
  icon: "rocket" | "book" | "flag" | "hammer";
  title: string;
  subtitle: string;
  proofCards: ProofCardData[];
  isRevealed: boolean;
  revealProgress: number;
  registerElement: (id: string, element: HTMLElement | null) => void;
}

const iconMap = {
  rocket: Rocket,
  book: BookOpen,
  flag: Flag,
  hammer: Hammer,
};

export const AchievementCard = ({
  id,
  icon,
  title,
  subtitle,
  proofCards,
  isRevealed,
  revealProgress,
  registerElement,
}: AchievementCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [showParticles, setShowParticles] = useState(false);
  const [hasTriggeredParticles, setHasTriggeredParticles] = useState(false);

  useEffect(() => {
    registerElement(id, ref.current);
  }, [id, registerElement]);

  // Trigger particles when reveal starts
  useEffect(() => {
    if (revealProgress > 0.1 && !hasTriggeredParticles) {
      setShowParticles(true);
      setHasTriggeredParticles(true);

      // Hide particles after animation completes
      const timer = setTimeout(() => {
        setShowParticles(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [revealProgress, hasTriggeredParticles]);

  const IconComponent = iconMap[icon];

  return (
    <div
      ref={ref}
      className="relative py-8"
    >
      {/* Main artifact container */}
      <div
        className={cn(
          "relative quest-glass rounded-2xl p-8 transition-all duration-700",
          isRevealed && "animate-quest-glow"
        )}
        style={{
          boxShadow: isRevealed
            ? "0 0 40px hsl(200 80% 55% / 0.12), 0 4px 24px rgba(0, 0, 0, 0.3)"
            : "0 4px 24px rgba(0, 0, 0, 0.2)",
          transform: isRevealed ? "translateY(-4px)" : "translateY(0)",
        }}
      >
        {/* Dust overlay */}
        <DustOverlay revealProgress={revealProgress} />

        {/* Particle effects */}
        <ParticleEffect isActive={showParticles} particleCount={10} />

        {/* Content */}
        <div
          className={cn(
            "relative z-0 transition-all duration-500",
            !isRevealed && revealProgress < 0.5 && "blur-[2px]"
          )}
          style={{
            opacity: Math.max(0.3, revealProgress),
          }}
        >
          {/* Achievement header */}
          <div className="flex items-start gap-5 mb-8">
            {/* Icon with glow */}
            <div
              className={cn(
                "flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-500",
                isRevealed && "icon-glow"
              )}
              style={{
                background: isRevealed
                  ? "linear-gradient(135deg, hsl(200 80% 55% / 0.15) 0%, hsl(200 70% 40% / 0.08) 100%)"
                  : "hsl(210 40% 96% / 0.05)",
                border: `1px solid ${isRevealed ? "hsl(200 80% 55% / 0.35)" : "hsl(215 20% 55% / 0.2)"}`,
              }}
            >
              <IconComponent
                className="w-6 h-6 transition-colors duration-500"
                style={{
                  color: isRevealed ? "hsl(200 80% 55%)" : "hsl(215 20% 55%)",
                }}
              />
            </div>

            <div className="space-y-1.5 pt-1">
              <h3
                className="text-2xl md:text-3xl font-semibold tracking-tight"
                style={{ color: "var(--quest-text)" }}
              >
                {title}
              </h3>
              <p
                className="text-base italic"
                style={{ color: "var(--quest-text-muted)" }}
              >
                {subtitle}
              </p>
            </div>
          </div>

          {/* Proof cards grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {proofCards.map((card, index) => (
              <ProofCard
                key={card.title}
                card={card}
                index={index}
                isRevealed={isRevealed}
              />
            ))}
          </div>
        </div>

        {/* Settled glow ring at base */}
        {isRevealed && <div className="glow-ring" />}
      </div>
    </div>
  );
};
