import { ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  className?: string;
  speed?: number;
  pauseOnHover?: boolean;
}

export const Marquee = ({ children, className = "", speed = 30, pauseOnHover = true }: MarqueeProps) => (
  <div
    className={`overflow-hidden relative ${className}`}
    style={{ maskImage: "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)" }}
  >
    <div
      className={`flex gap-4 w-max animate-marquee ${pauseOnHover ? "hover:[animation-play-state:paused]" : ""}`}
      style={{ animationDuration: `${speed}s` }}
    >
      {/* Duplicate children for seamless loop */}
      <div className="flex gap-4 shrink-0">{children}</div>
      <div className="flex gap-4 shrink-0" aria-hidden="true">{children}</div>
    </div>
  </div>
);
