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
  isUnlocked: boolean;
}

export const ProofCard = ({ card, index, isUnlocked }: ProofCardProps) => {
  const CardContent = (
    <div
      className={cn(
        "card-elevated p-5 space-y-2 transition-all duration-500",
        isUnlocked && "animate-card-reveal hover:border-foreground/18 hover:shadow-sm",
        !isUnlocked && "opacity-0 scale-95",
        card.link && "cursor-pointer"
      )}
      style={{
        animationDelay: isUnlocked ? `${index * 0.1}s` : undefined,
      }}
    >
      <div className="flex items-start justify-between gap-2">
        <h4 className="font-semibold text-foreground text-sm">{card.title}</h4>
        {card.link && (
          <ArrowUpRight className="w-4 h-4 text-muted-foreground flex-shrink-0" />
        )}
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {card.description}
      </p>
      {card.metric && (
        <p className="text-xs font-medium text-primary">{card.metric}</p>
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
