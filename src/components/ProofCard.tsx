import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ProofCardData {
  title: string;
  description: string;
  link?: string;
  external?: boolean;
  metric?: string;
}

interface ProofCardProps {
  card: ProofCardData;
  index: number;
  isRevealed: boolean;
}

export const ProofCard = ({ card, index, isRevealed }: ProofCardProps) => {
  const CardContent = (
    <div
      className={cn(
        "proof-glass relative p-5 rounded-xl space-y-3 transition-all duration-500",
        isRevealed && "animate-quest-emerge",
        !isRevealed && "opacity-0 scale-90",
        card.link && "cursor-pointer group"
      )}
      style={{
        animationDelay: isRevealed ? `${index * 0.08}s` : undefined,
        animationFillMode: "forwards",
      }}
    >
      {/* Cyan top border glow effect */}
      <div
        className="absolute top-0 left-4 right-4 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, hsl(200 80% 55% / 0.5), transparent)",
        }}
      />

      {/* Title row */}
      <div className="flex items-start justify-between gap-3">
        <h4
          className="font-semibold text-sm leading-tight"
          style={{ color: "var(--quest-text)" }}
        >
          {card.title}
        </h4>
        {card.link && (
          <ArrowUpRight
            className={cn(
              "w-4 h-4 flex-shrink-0 transition-all duration-300",
              "group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            )}
            style={{ color: "var(--quest-text-muted)" }}
          />
        )}
      </div>

      {/* Description */}
      <p
        className="text-sm leading-relaxed"
        style={{ color: "var(--quest-text-muted)" }}
      >
        {card.description}
      </p>

      {/* Metric badge */}
      {card.metric && (
        <div className="pt-1">
          <span
            className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium"
            style={{
              background: "hsl(200 80% 55% / 0.12)",
              color: "hsl(200 80% 55%)",
              border: "1px solid hsl(200 80% 55% / 0.2)",
            }}
          >
            {card.metric}
          </span>
        </div>
      )}

      {/* Subtle inner glow on hover */}
      {card.link && (
        <div
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at center, hsl(200 80% 55% / 0.06) 0%, transparent 70%)",
          }}
        />
      )}
    </div>
  );

  if (card.link) {
    return (
      <a
        href={card.link}
        target={card.external ? "_blank" : undefined}
        rel={card.external ? "noopener noreferrer" : undefined}
        className="block"
      >
        {CardContent}
      </a>
    );
  }

  return CardContent;
};
