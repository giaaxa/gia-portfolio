import { useEffect, useRef } from "react";

export const Starfield = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars: { x: number; y: number; size: number; opacity: number }[] = [];
    const starCount = 100;

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    const drawStars = (scrollOffset: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      stars.forEach((star) => {
        ctx.fillStyle = `rgba(167, 139, 250, ${star.opacity})`;
        ctx.beginPath();
        const parallaxY = star.y + scrollOffset * 0.05;
        ctx.arc(star.x, parallaxY % canvas.height, star.size, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    const handleScroll = () => {
      drawStars(window.scrollY);
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawStars(window.scrollY);
    };

    drawStars(0);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-30 z-0"
    />
  );
};
