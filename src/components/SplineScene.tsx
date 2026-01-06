import { useState, useRef, useEffect } from "react";

interface SplineSceneProps {
  className?: string;
}

export const SplineScene = ({ className = "" }: SplineSceneProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Subtle parallax effect on mouse move
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Fallback gradient orb
  const FallbackOrb = () => (
    <div className="absolute inset-0 flex items-center justify-center">
      <div 
        className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full opacity-40"
        style={{
          background: "radial-gradient(circle at 30% 30%, hsl(224 76% 45% / 0.3), hsl(224 76% 33% / 0.15), transparent 70%)",
          filter: "blur(40px)",
          transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
          transition: "transform 0.3s ease-out",
        }}
      />
    </div>
  );

  return (
    <div 
      ref={containerRef}
      className={`relative ${className}`}
      style={{
        transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`,
        transition: "transform 0.4s ease-out",
      }}
    >
      {!isLoaded && <FallbackOrb />}
      <iframe 
        src="https://my.spline.design/hellodistortingintro-ViTARCLvxKntXI5fsqf6Dlx4/"
        frameBorder="0"
        width="100%"
        height="100%"
        onLoad={() => setIsLoaded(true)}
        style={{
          opacity: isLoaded ? 1 : 0,
          transition: "opacity 0.5s ease-out",
          pointerEvents: "none",
        }}
        title="Spline 3D Scene"
      />
    </div>
  );
};
