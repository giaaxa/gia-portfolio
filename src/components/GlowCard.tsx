import { useRef, ReactNode } from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  accentColor?: string;
}

export const GlowCard = ({
  children,
  className = "",
  accentColor = "139,157,131",
}: GlowCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleLeave = () => {
    mouseX.set(-200);
    mouseY.set(-200);
  };

  // Border glow — follows cursor around the card edge
  const borderGlow = useMotionTemplate`radial-gradient(350px circle at ${mouseX}px ${mouseY}px, rgba(${accentColor}, 0.25), transparent 70%)`;

  // Inner spotlight — very subtle fill glow
  const innerGlow = useMotionTemplate`radial-gradient(300px circle at ${mouseX}px ${mouseY}px, rgba(${accentColor}, 0.06), transparent 70%)`;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      className={`relative rounded-2xl p-px group/glow ${className}`}
      style={{ background: borderGlow }}
    >
      <div className="relative rounded-2xl bg-[#161616] p-8 h-full overflow-hidden">
        {/* Dot grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />

        {/* Inner mouse spotlight */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover/glow:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ background: innerGlow }}
        />

        {/* Bottom edge glow line */}
        <div
          className="absolute bottom-0 left-[10%] right-[10%] h-px opacity-0 group-hover/glow:opacity-100 transition-opacity duration-500"
          style={{
            background: `linear-gradient(90deg, transparent, rgba(${accentColor}, 0.3), transparent)`,
          }}
        />

        {/* Content */}
        <div className="relative z-10">{children}</div>
      </div>
    </motion.div>
  );
};
