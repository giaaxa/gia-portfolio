import { useRef } from 'react';
import { useElementParallax } from '@/hooks/useParallax';

interface ParallaxCardProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const ParallaxCard = ({ children, speed = 0.05, className = '', style }: ParallaxCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const offset = useElementParallax(ref, speed);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        transform: `translateY(${offset}px)`,
        transition: 'transform 0.1s ease-out',
      }}
    >
      {children}
    </div>
  );
};
