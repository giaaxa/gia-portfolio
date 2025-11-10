import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export const GlassCard = ({ children, className = "", hover = true }: GlassCardProps) => {
  return (
    <div
      className={`card-glass rounded-2xl p-6 ${
        hover ? "transition-all duration-300 hover:scale-105 hover:glow-purple" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
};
