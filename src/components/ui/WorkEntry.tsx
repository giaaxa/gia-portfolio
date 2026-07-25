import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface WorkEntryProps {
  number: string;
  title: string;
  description: string;
  bullets: string[];
  tags: [string, string];
  action?: { label: string; url: string };
}

export function WorkEntry({ number, title, description, bullets, tags, action }: WorkEntryProps) {
  const prefersReducedMotion = useReducedMotion();

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
    },
  };

  const content = (
    <div className="group py-6 transition-colors duration-200 hover:bg-lilac-50 -mx-4 px-4 rounded-lg">
      <div className="flex justify-between items-start mb-2">
        <div className="flex gap-3">
          <span className="text-sm font-semibold text-charcoal">[{number}]</span>
          <span className="text-sm font-semibold text-charcoal">{title}</span>
        </div>
        {action && (
          <a
            href={action.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray hover:text-lilac-600 transition-all duration-200 group-hover:translate-x-1"
          >
            → {action.label}
          </a>
        )}
      </div>

      <p className="text-sm text-gray mb-3 ml-9">{description}</p>

      <div className="ml-9 space-y-1 mb-4">
        {bullets.map((bullet, index) => (
          <p key={index} className="text-sm text-gray">
            <span className="text-lilac-500 mr-2">⊙</span>
            {bullet}
          </p>
        ))}
      </div>

      <div className="flex justify-between items-center ml-9">
        <span className="text-sm text-charcoal">{tags[0]}</span>
        <span className="text-sm text-gray">{tags[1]}</span>
      </div>

      <div className="h-px bg-light-gray mt-6" />
    </div>
  );

  if (prefersReducedMotion) {
    return content;
  }

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      {content}
    </motion.div>
  );
}
