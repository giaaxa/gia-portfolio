import { cn } from "@/lib/utils";

interface EcgPulseLineProps {
  className?: string;
}

export const EcgPulseLine = ({ className }: EcgPulseLineProps) => {
  // ECG waveform path: flat → small P wave → QRS complex (sharp peak) → T wave → flat
  // Pattern repeats 3 times across the width
  const ecgPattern = `
    M 0 20
    L 8 20
    Q 10 20 11 18
    Q 12 16 13 20
    L 15 20
    L 16 20
    L 17 22
    L 18 8
    L 19 28
    L 20 18
    L 21 20
    L 25 20
    Q 27 20 28 18
    Q 29 16 30 20
    L 33 20
  `;

  return (
    <div
      className={cn(
        "pointer-events-none h-10 overflow-hidden",
        className
      )}
      aria-hidden="true"
    >
      <svg
        className="w-full h-full animate-ecg-pulse"
        viewBox="0 0 100 40"
        preserveAspectRatio="none"
        style={{
          maskImage: "linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%)",
        }}
      >
        {/* Repeat the ECG pattern across the width */}
        <path
          d={`
            M 0 20
            L 5 20
            Q 7 20 8 18 Q 9 16 10 20
            L 12 20 L 13 22 L 14 8 L 15 28 L 16 18 L 17 20
            L 22 20
            Q 24 20 25 18 Q 26 16 27 20
            L 30 20

            L 35 20
            Q 37 20 38 18 Q 39 16 40 20
            L 42 20 L 43 22 L 44 8 L 45 28 L 46 18 L 47 20
            L 52 20
            Q 54 20 55 18 Q 56 16 57 20
            L 60 20

            L 65 20
            Q 67 20 68 18 Q 69 16 70 20
            L 72 20 L 73 22 L 74 8 L 75 28 L 76 18 L 77 20
            L 82 20
            Q 84 20 85 18 Q 86 16 87 20
            L 100 20
          `}
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="0.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-ecg-draw"
        />
      </svg>
    </div>
  );
};
