import { motion } from "framer-motion";

export const FloatingOrbs = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
    {/* Large sage orb — top right */}
    <motion.div
      className="absolute -top-20 -right-32 w-[500px] h-[500px] rounded-full opacity-[0.07]"
      style={{
        background: "radial-gradient(circle, #8B9D83 0%, transparent 70%)",
      }}
      animate={{
        y: [0, -30, 10, -20, 0],
        x: [0, 15, -10, 20, 0],
        scale: [1, 1.05, 0.97, 1.03, 1],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
    {/* Medium sky orb — bottom left */}
    <motion.div
      className="absolute -bottom-16 -left-24 w-[400px] h-[400px] rounded-full opacity-[0.06]"
      style={{
        background: "radial-gradient(circle, #7BA5C1 0%, transparent 70%)",
      }}
      animate={{
        y: [0, 20, -15, 25, 0],
        x: [0, -20, 10, -15, 0],
        scale: [1, 0.96, 1.04, 0.98, 1],
      }}
      transition={{
        duration: 25,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
    {/* Small warm orb — center-ish */}
    <motion.div
      className="absolute top-1/3 left-1/3 w-[250px] h-[250px] rounded-full opacity-[0.04]"
      style={{
        background: "radial-gradient(circle, #E8C87A 0%, transparent 70%)",
      }}
      animate={{
        y: [0, -25, 15, -10, 0],
        x: [0, 20, -25, 10, 0],
      }}
      transition={{
        duration: 18,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  </div>
);
