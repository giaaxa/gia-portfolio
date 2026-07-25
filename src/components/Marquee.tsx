import { ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  className?: string;
  speed?: number;
  pauseOnHover?: boolean;
}

export function Marquee({
  children,
  className = "",
  speed = 30,
  pauseOnHover = true
}: MarqueeProps) {
  return (
    <div
      className={`overflow-hidden relative ${className}`}
      style={{
        maskImage: "linear-gradient(90deg, transparent, black 5%, black 95%, transparent)"
      }}
    >
      <div
        className={`flex gap-8 w-max ${pauseOnHover ? "hover:[animation-play-state:paused]" : ""}`}
        style={{
          animation: `marquee ${speed}s linear infinite`,
        }}
      >
        <div className="flex gap-8 shrink-0 items-center">{children}</div>
        <div className="flex gap-8 shrink-0 items-center" aria-hidden="true">{children}</div>
      </div>
    </div>
  );
}

export function MarqueeSeparator() {
  return <span className="text-lilac-500 text-sm">•</span>;
}
