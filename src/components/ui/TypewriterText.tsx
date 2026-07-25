import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypewriterTextProps {
  text: string;
  className?: string;
  speed?: number;
  deleteSpeed?: number;
  pauseDuration?: number;
}

export function TypewriterText({
  text,
  className = '',
  speed = 50,
  deleteSpeed = 30,
  pauseDuration = 2000,
}: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText === text) {
      // Pause at full text
      timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
    } else if (isDeleting && displayText === '') {
      // Start typing again
      timeout = setTimeout(() => setIsDeleting(false), 500);
    } else if (isDeleting) {
      // Delete characters
      timeout = setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length - 1));
      }, deleteSpeed);
    } else {
      // Type characters
      timeout = setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length + 1));
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, text, speed, deleteSpeed, pauseDuration]);

  return (
    <span className={className}>
      {displayText}
      <motion.span
        className="inline-block w-[2px] h-[1em] bg-lilac-500 ml-0.5 align-middle"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
      />
    </span>
  );
}
