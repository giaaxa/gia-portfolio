import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const MouseGlow = () => {
  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);
  const springX = useSpring(mouseX, { damping: 30, stiffness: 100 });
  const springY = useSpring(mouseY, { damping: 30, stiffness: 100 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none z-[1]"
      style={{
        background: `radial-gradient(600px circle at var(--glow-x) var(--glow-y), rgba(139,157,131,0.06), transparent 60%)`,
      }}
    >
      {/* We use a child div with motion values since CSS vars aren't directly supported */}
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          background: "radial-gradient(circle, rgba(139,157,131,0.05) 0%, rgba(123,165,193,0.03) 40%, transparent 70%)",
        }}
      />
    </motion.div>
  );
};
