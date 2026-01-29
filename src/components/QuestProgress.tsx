import { cn } from "@/lib/utils";

interface QuestProgressProps {
  current: number;
  total: number;
}

export const QuestProgress = ({ current, total }: QuestProgressProps) => {
  const progress = (current / total) * 100;

  return (
    <div className="fixed top-24 right-6 z-40 hidden md:flex flex-col items-end gap-2">
      {/* Progress text */}
      <div className="flex items-center gap-2 bg-card/90 backdrop-blur-sm border border-foreground/10 rounded-full px-4 py-2 shadow-sm">
        <span className="text-sm font-mono font-semibold text-foreground">
          {String(current).padStart(2, "0")}
        </span>
        <span className="text-muted-foreground text-sm">/</span>
        <span className="text-sm font-mono text-muted-foreground">
          {String(total).padStart(2, "0")}
        </span>
      </div>

      {/* Progress bar */}
      <div className="w-20 h-1 bg-foreground/10 rounded-full overflow-hidden">
        <div
          className={cn(
            "h-full bg-primary rounded-full transition-all duration-500 ease-out"
          )}
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Progress dots */}
      <div className="flex gap-1.5 mt-1">
        {Array.from({ length: total }).map((_, i) => (
          <div
            key={i}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300",
              i < current
                ? "bg-primary scale-110"
                : "bg-foreground/15"
            )}
          />
        ))}
      </div>
    </div>
  );
};
