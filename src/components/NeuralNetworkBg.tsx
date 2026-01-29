import { useMemo, useState, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";

interface NeuralNetworkBgProps {
  className?: string;
}

interface Node {
  id: number;
  x: number;
  y: number;
  radius: number;
  baseX: number;
  baseY: number;
}

interface Connection {
  from: Node;
  to: Node;
  opacity: number;
}

export const NeuralNetworkBg = ({ className }: NeuralNetworkBgProps) => {
  const [mousePos, setMousePos] = useState({ x: 0.7, y: 0.5 });
  const [isHovering, setIsHovering] = useState(false);

  // Track mouse position
  const handleMouseMove = useCallback((e: MouseEvent) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    setMousePos({ x, y });
  }, []);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  // Generate nodes biased to the right side
  const { nodes, connections } = useMemo(() => {
    const seed = 42;
    const seededRandom = (i: number) => {
      const x = Math.sin(seed + i * 9999) * 10000;
      return x - Math.floor(x);
    };

    // Generate 25 nodes, biased to the right side (x: 40-100%)
    const generatedNodes: Node[] = Array.from({ length: 25 }, (_, i) => {
      const baseX = 40 + seededRandom(i * 3) * 60; // 40-100% (right side)
      const baseY = 5 + seededRandom(i * 3 + 1) * 90; // 5-95%
      return {
        id: i,
        x: baseX,
        y: baseY,
        baseX,
        baseY,
        radius: 2.5 + seededRandom(i * 3 + 2) * 3, // 2.5-5.5px
      };
    });

    // Connect nodes that are within distance threshold
    const maxDistance = 30; // percentage units
    const generatedConnections: Connection[] = [];

    for (let i = 0; i < generatedNodes.length; i++) {
      for (let j = i + 1; j < generatedNodes.length; j++) {
        const dx = generatedNodes[i].baseX - generatedNodes[j].baseX;
        const dy = generatedNodes[i].baseY - generatedNodes[j].baseY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < maxDistance) {
          // Opacity inversely proportional to distance
          const opacity = 0.2 + (1 - distance / maxDistance) * 0.3;
          generatedConnections.push({
            from: generatedNodes[i],
            to: generatedNodes[j],
            opacity,
          });
        }
      }
    }

    return { nodes: generatedNodes, connections: generatedConnections };
  }, []);

  // Calculate node positions with mouse influence
  const getNodePosition = useCallback((node: Node) => {
    const mouseInfluence = 8; // How much the mouse affects node position
    const dx = (mousePos.x * 100 - node.baseX);
    const dy = (mousePos.y * 100 - node.baseY);
    const distance = Math.sqrt(dx * dx + dy * dy);
    const maxInfluenceDistance = 40;

    if (distance < maxInfluenceDistance) {
      const influence = (1 - distance / maxInfluenceDistance) * mouseInfluence;
      return {
        x: node.baseX + (dx / distance) * influence,
        y: node.baseY + (dy / distance) * influence,
      };
    }
    return { x: node.baseX, y: node.baseY };
  }, [mousePos]);

  return (
    <div
      className={cn(
        "overflow-hidden",
        className
      )}
      aria-hidden="true"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      style={{ pointerEvents: 'none' }}
    >
      <svg
        className="w-full h-full animate-neural-drift"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
        style={{
          opacity: isHovering ? 0.25 : 0.15,
          transition: 'opacity 0.3s ease',
          maskImage: "radial-gradient(ellipse 90% 80% at 75% 45%, black 30%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse 90% 80% at 75% 45%, black 30%, transparent 80%)",
        }}
      >
        {/* Connection lines */}
        {connections.map((conn, i) => {
          const fromPos = getNodePosition(conn.from);
          const toPos = getNodePosition(conn.to);
          return (
            <line
              key={`conn-${i}`}
              x1={fromPos.x}
              y1={fromPos.y}
              x2={toPos.x}
              y2={toPos.y}
              stroke="hsl(var(--primary))"
              strokeWidth="0.2"
              opacity={conn.opacity}
              style={{ transition: 'all 0.15s ease-out' }}
            />
          );
        })}

        {/* Nodes */}
        {nodes.map((node) => {
          const pos = getNodePosition(node);
          return (
            <circle
              key={`node-${node.id}`}
              cx={pos.x}
              cy={pos.y}
              r={node.radius * 0.4}
              fill="hsl(var(--primary))"
              opacity={0.6}
              style={{ transition: 'all 0.15s ease-out' }}
            />
          );
        })}

        {/* Glow circles at key nodes for extra visual interest */}
        {nodes.filter((_, i) => i % 4 === 0).map((node) => {
          const pos = getNodePosition(node);
          return (
            <circle
              key={`glow-${node.id}`}
              cx={pos.x}
              cy={pos.y}
              r={node.radius * 1.5}
              fill="hsl(var(--primary))"
              opacity={0.15}
              style={{
                transition: 'all 0.15s ease-out',
                filter: 'blur(2px)',
              }}
            />
          );
        })}
      </svg>
    </div>
  );
};
