import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface BotanicalProps {
  className?: string;
  size?: number;
  color?: string;
}

// Small seed icon
export const Seed = ({ className = "", size = 20, color = "#8B9D83" }: BotanicalProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    aria-hidden="true"
  >
    <ellipse cx="12" cy="14" rx="5" ry="7" stroke={color} strokeWidth="1.5" fill="none" />
    <path d="M12 7 C12 4, 15 2, 17 3" stroke={color} strokeWidth="1.2" strokeLinecap="round" fill="none" />
  </svg>
);

// Small sprout / seedling
export const Sprout = ({ className = "", size = 24, color = "#8B9D83" }: BotanicalProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 22 C12 22, 12 12, 12 10" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    <path d="M12 14 C8 12, 6 8, 8 5 C10 6, 11 9, 12 14" stroke={color} strokeWidth="1.2" fill={`${color}20`} strokeLinecap="round" />
    <path d="M12 10 C15 8, 18 6, 17 3 C15 4, 13 7, 12 10" stroke={color} strokeWidth="1.2" fill={`${color}20`} strokeLinecap="round" />
  </svg>
);

// Simple leaf
export const Leaf = ({ className = "", size = 20, color = "#8B9D83" }: BotanicalProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M6 21 C6 21, 4 14, 8 8 C12 2, 20 3, 20 3 C20 3, 18 10, 14 16 C10 22, 6 21, 6 21Z"
      stroke={color}
      strokeWidth="1.3"
      fill={`${color}15`}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M6 21 C10 16, 14 10, 20 3" stroke={color} strokeWidth="1" strokeLinecap="round" opacity="0.5" />
  </svg>
);

// Bloom - full flower for mature metrics
export const Bloom = ({ className = "", size = 24, color = "#6B7D63" }: BotanicalProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 22 V14" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    <path d="M12 16 C9 17, 7 16, 7 15" stroke={color} strokeWidth="1" strokeLinecap="round" fill="none" />
    {/* Petals */}
    <ellipse cx="12" cy="9" rx="2.5" ry="4" stroke={color} strokeWidth="1.1" fill={`${color}12`} />
    <ellipse cx="12" cy="9" rx="2.5" ry="4" stroke={color} strokeWidth="1.1" fill={`${color}12`} transform="rotate(60 12 9)" />
    <ellipse cx="12" cy="9" rx="2.5" ry="4" stroke={color} strokeWidth="1.1" fill={`${color}12`} transform="rotate(120 12 9)" />
    {/* Center */}
    <circle cx="12" cy="9" r="2" fill={color} opacity="0.25" />
  </svg>
);

// Animated Seed that grows in from scale 0
export const AnimatedSeed = ({ className = "", size = 20, color = "#8B9D83" }: BotanicalProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
      className={`inline-flex ${className}`}
    >
      <Seed size={size} color={color} />
    </motion.div>
  );
};

// Animated Sprout that grows in
export const AnimatedSprout = ({ className = "", size = 24, color = "#8B9D83" }: BotanicalProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0, opacity: 0, y: 8 }}
      animate={isInView ? { scale: 1, opacity: 1, y: 0 } : { scale: 0, opacity: 0, y: 8 }}
      transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
      className={`inline-flex ${className}`}
    >
      <Sprout size={size} color={color} />
    </motion.div>
  );
};

// Animated Bloom that scales up with a pop
export const AnimatedBloom = ({ className = "", size = 24, color = "#6B7D63" }: BotanicalProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0, opacity: 0, rotate: -15 }}
      animate={isInView ? { scale: 1, opacity: 1, rotate: 0 } : { scale: 0, opacity: 0, rotate: -15 }}
      transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
      className={`inline-flex ${className}`}
    >
      <Bloom size={size} color={color} />
    </motion.div>
  );
};

// Branch with draw-in animation
export const AnimatedBranch = ({ className = "", color = "#CBD7C7" }: Omit<BotanicalProps, 'size'>) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });

  return (
    <motion.div
      ref={ref}
      className={`inline-flex ${className}`}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <svg
        width="120"
        height="32"
        viewBox="0 0 120 32"
        fill="none"
        aria-hidden="true"
      >
        {/* Main branch - draw in */}
        <motion.path
          d="M10 20 C30 18, 60 16, 110 16"
          stroke={color}
          strokeWidth="1.2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
        {/* Leaves appear after branch draws */}
        <motion.path
          d="M30 18 C27 14, 28 10, 32 9 C32 12, 31 15, 30 18"
          stroke={color}
          strokeWidth="1"
          fill={`${color}25`}
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ duration: 0.4, delay: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
          style={{ transformOrigin: "30px 14px" }}
        />
        <motion.path
          d="M55 17 C58 13, 62 12, 63 14 C61 15, 57 16, 55 17"
          stroke={color}
          strokeWidth="1"
          fill={`${color}25`}
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ duration: 0.4, delay: 0.65, ease: [0.34, 1.56, 0.64, 1] }}
          style={{ transformOrigin: "58px 14px" }}
        />
        <motion.path
          d="M80 16 C77 12, 78 8, 82 7 C82 10, 81 14, 80 16"
          stroke={color}
          strokeWidth="1"
          fill={`${color}25`}
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ duration: 0.4, delay: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
          style={{ transformOrigin: "80px 12px" }}
        />
      </svg>
    </motion.div>
  );
};

// Static Branch (non-animated fallback)
export const Branch = ({ className = "", color = "#8B9D83" }: Omit<BotanicalProps, 'size'>) => (
  <svg
    width="120"
    height="32"
    viewBox="0 0 120 32"
    fill="none"
    className={className}
    aria-hidden="true"
  >
    <path d="M10 20 C30 18, 60 16, 110 16" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
    <path d="M30 18 C27 14, 28 10, 32 9 C32 12, 31 15, 30 18" stroke={color} strokeWidth="1" fill={`${color}15`} />
    <path d="M55 17 C58 13, 62 12, 63 14 C61 15, 57 16, 55 17" stroke={color} strokeWidth="1" fill={`${color}15`} />
    <path d="M80 16 C77 12, 78 8, 82 7 C82 10, 81 14, 80 16" stroke={color} strokeWidth="1" fill={`${color}15`} />
  </svg>
);

// Small circle dots as a gentle separator
export const DotSeparator = ({ className = "", color = "#8B9D83" }: Omit<BotanicalProps, 'size'>) => (
  <div className={`flex items-center gap-2 ${className}`} aria-hidden="true">
    <span className="w-1 h-1 rounded-full" style={{ background: color, opacity: 0.3 }} />
    <span className="w-1.5 h-1.5 rounded-full" style={{ background: color, opacity: 0.5 }} />
    <span className="w-1 h-1 rounded-full" style={{ background: color, opacity: 0.3 }} />
  </div>
);
