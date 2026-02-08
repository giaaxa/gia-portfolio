import { motion } from "framer-motion";

interface OrbitalRingProps {
  size?: number;
  x?: string;
  y?: string;
  rotation?: number; // Initial rotation in degrees
  tilt?: number; // Tilt angle (3D effect via scaleY)
  color?: "purple" | "indigo" | "violet" | "sage" | "white";
  strokeWidth?: number;
  rotationDuration?: number; // Duration for one full rotation in seconds
  className?: string;
}

const colorMap = {
  purple: "rgba(168, 85, 247, 0.25)",
  indigo: "rgba(67, 56, 202, 0.25)",
  violet: "rgba(124, 58, 237, 0.3)",
  sage: "rgba(139, 157, 131, 0.3)",
  white: "rgba(255, 255, 255, 0.1)",
};

export const OrbitalRing = ({
  size = 300,
  x = "50%",
  y = "50%",
  rotation = 0,
  tilt = 0.3,
  color = "violet",
  strokeWidth = 1,
  rotationDuration = 60,
  className = "",
}: OrbitalRingProps) => {
  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      style={{
        left: x,
        top: y,
        width: size,
        height: size,
        transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
      }}
      animate={{ rotate: [rotation, rotation + 360] }}
      transition={{
        duration: rotationDuration,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <div
        className="w-full h-full rounded-full border"
        style={{
          borderColor: colorMap[color],
          borderWidth: strokeWidth,
          transform: `scaleY(${tilt})`,
        }}
      />
    </motion.div>
  );
};

// Orbital ring system - multiple rings at different angles
interface OrbitalSystemProps {
  x?: string;
  y?: string;
  baseSize?: number;
  className?: string;
}

export const OrbitalSystem = ({
  x = "50%",
  y = "50%",
  baseSize = 300,
  className = "",
}: OrbitalSystemProps) => {
  return (
    <div className={`absolute pointer-events-none ${className}`} style={{ left: x, top: y }}>
      <OrbitalRing
        size={baseSize}
        x="0"
        y="0"
        rotation={-15}
        tilt={0.35}
        color="violet"
        rotationDuration={80}
      />
      <OrbitalRing
        size={baseSize * 1.3}
        x="0"
        y="0"
        rotation={25}
        tilt={0.25}
        color="indigo"
        rotationDuration={120}
        strokeWidth={0.5}
      />
      <OrbitalRing
        size={baseSize * 1.6}
        x="0"
        y="0"
        rotation={-40}
        tilt={0.4}
        color="white"
        rotationDuration={180}
        strokeWidth={0.5}
      />
    </div>
  );
};
