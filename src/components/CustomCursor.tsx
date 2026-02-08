import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const CustomCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const scale = useMotionValue(1);
  const opacity = useMotionValue(0);

  // Smooth spring physics for the outer ring (lags behind)
  const ringX = useSpring(cursorX, { damping: 25, stiffness: 200, mass: 0.5 });
  const ringY = useSpring(cursorY, { damping: 25, stiffness: 200, mass: 0.5 });
  const ringScale = useSpring(scale, { damping: 20, stiffness: 300 });
  const ringOpacity = useSpring(opacity, { damping: 20, stiffness: 300 });

  // Dot follows immediately
  const dotX = useSpring(cursorX, { damping: 40, stiffness: 400 });
  const dotY = useSpring(cursorY, { damping: 40, stiffness: 400 });

  const isTouch = useRef(false);

  useEffect(() => {
    isTouch.current = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouch.current) return;

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      opacity.set(1);
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[role='button']") ||
        target.closest("[data-magnetic]") ||
        target.closest("[data-tilt]");
      scale.set(interactive ? 2.5 : 1);
    };

    const down = () => scale.set(0.8);
    const up = () => scale.set(1);
    const leave = () => opacity.set(0);

    document.addEventListener("mousemove", move);
    document.addEventListener("mousemove", handleHover);
    document.addEventListener("mousedown", down);
    document.addEventListener("mouseup", up);
    document.addEventListener("mouseleave", leave);

    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mousemove", handleHover);
      document.removeEventListener("mousedown", down);
      document.removeEventListener("mouseup", up);
      document.removeEventListener("mouseleave", leave);
    };
  }, [cursorX, cursorY, scale, opacity]);

  // No SSR or touch devices
  if (typeof window !== "undefined" && ("ontouchstart" in window || navigator.maxTouchPoints > 0)) {
    return null;
  }

  return (
    <>
      {/* Outer ring — lags behind, scales up on hover */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: ringX,
          y: ringY,
          scale: ringScale,
          opacity: ringOpacity,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <div className="w-10 h-10 rounded-full border border-white/80" />
      </motion.div>
      {/* Inner dot — snaps to cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: dotX,
          y: dotY,
          opacity: ringOpacity,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <div className="w-1.5 h-1.5 rounded-full bg-white" />
      </motion.div>
    </>
  );
};
