import { useEffect, useRef } from "react";
import { Lock, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { ProofCard, ProofCardData } from "./ProofCard";

interface AchievementCardProps {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  proofCards: ProofCardData[];
  isUnlocked: boolean;
  registerElement: (id: string, element: HTMLElement | null) => void;
}

export const AchievementCard = ({
  id,
  number,
  title,
  subtitle,
  proofCards,
  isUnlocked,
  registerElement,
}: AchievementCardProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerElement(id, ref.current);
  }, [id, registerElement]);

  return (
    <div
      ref={ref}
      className={cn(
        "relative py-16 transition-all duration-700",
        !isUnlocked && "pointer-events-none"
      )}
    >
      {/* Lock overlay for locked state */}
      {!isUnlocked && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-full border border-foreground/10">
            <Lock className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Scroll to unlock</span>
          </div>
        </div>
      )}

      {/* Content wrapper with blur effect */}
      <div
        className={cn(
          "transition-all duration-700",
          !isUnlocked && "blur-sm opacity-50 select-none"
        )}
      >
        {/* Achievement header */}
        <div className="flex items-start gap-4 mb-8">
          {/* Number badge with unlock animation */}
          <div
            className={cn(
              "relative flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center font-mono font-bold text-lg transition-all duration-500",
              isUnlocked
                ? "bg-primary text-primary-foreground animate-unlock-glow"
                : "bg-foreground/5 text-muted-foreground border border-foreground/10"
            )}
          >
            {isUnlocked ? (
              <Check className="w-5 h-5 animate-checkmark-pop" />
            ) : (
              number
            )}
          </div>

          <div className="space-y-1">
            <h3 className="text-2xl md:text-3xl font-semibold text-foreground">
              {title}
            </h3>
            <p className="text-muted-foreground">{subtitle}</p>
          </div>
        </div>

        {/* Proof cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {proofCards.map((card, index) => (
            <ProofCard
              key={card.title}
              card={card}
              index={index}
              isUnlocked={isUnlocked}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
