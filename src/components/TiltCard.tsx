import { useRef, ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  tiltStrength?: number;
}

export const TiltCard = ({ children, className = "", tiltStrength = 10 }: TiltCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springX = useSpring(mouseX, { damping: 20, stiffness: 200 });
  const springY = useSpring(mouseY, { damping: 20, stiffness: 200 });

  const rotateX = useTransform(springY, [0, 1], [tiltStrength, -tiltStrength]);
  const rotateY = useTransform(springX, [0, 1], [-tiltStrength, tiltStrength]);

  // Specular highlight position
  const highlightX = useTransform(springX, [0, 1], [0, 100]);
  const highlightY = useTransform(springY, [0, 1], [0, 100]);

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  const reset = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      data-tilt
      className={`relative ${className}`}
      style={{
        perspective: 800,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        transition={{ type: "spring", damping: 20 }}
      >
        {children}
        {/* Specular highlight overlay */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: useTransform(
              [highlightX, highlightY],
              ([hx, hy]) =>
                `radial-gradient(circle at ${hx}% ${hy}%, rgba(255,255,255,0.15) 0%, transparent 60%)`
            ),
          }}
        />
      </motion.div>
    </motion.div>
  );
};
