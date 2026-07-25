import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface AnimatedTextProps {
  lines: string[];
  className?: string;
  staggerDelay?: number;
}

export function AnimatedText({
  lines,
  className = '',
  staggerDelay = 0.3
}: AnimatedTextProps) {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  const lineVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: 'blur(8px)'
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  if (prefersReducedMotion) {
    return (
      <div className={className}>
        {lines.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
    >
      {lines.map((line, index) => (
        <motion.div key={index} variants={lineVariants}>
          {line}
        </motion.div>
      ))}
    </motion.div>
  );
}
