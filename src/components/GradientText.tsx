import { ReactNode } from "react";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  from?: string;
  via?: string;
  to?: string;
}

export const GradientText = ({
  children,
  className = "",
  from = "#6B7D63",
  via = "#7BA5C1",
  to = "#8B9D83",
}: GradientTextProps) => (
  <span
    className={`inline-block bg-clip-text text-transparent animate-gradient-flow bg-[length:200%_auto] ${className}`}
    style={{
      backgroundImage: `linear-gradient(90deg, ${from}, ${via}, ${to}, ${from})`,
    }}
  >
    {children}
  </span>
);
