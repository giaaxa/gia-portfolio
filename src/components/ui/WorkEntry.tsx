import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface WorkEntryProps {
  number: string;
  title: string;
  icon?: string;
  description: string;
  bullets: string[];
  tags: [string, string];
  action?: { label: string; url: string };
  image?: string;
}

export function WorkEntry({ number, title, icon, description, bullets, tags, action, image }: WorkEntryProps) {
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
    <div className="group py-6 transition-all duration-200 hover:bg-lilac-50 -mx-4 px-4 rounded-xl border border-transparent hover:border-lilac-200">
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-3">
          <span className="text-lg text-lilac-500">{icon}</span>
          <span className="text-sm font-medium text-lilac-600 bg-lilac-100 px-2 py-0.5 rounded">{number}</span>
          <span className="text-base font-semibold text-charcoal group-hover:text-lilac-700 transition-colors">{title}</span>
        </div>
        {action && (
          <a
            href={action.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-lilac-500 hover:text-lilac-700 transition-all duration-200 group-hover:translate-x-1 flex items-center gap-1"
          >
            <span>→</span> {action.label}
          </a>
        )}
      </div>

      <p className="text-sm text-gray mb-4 ml-10">{description}</p>

      <div className="ml-10 space-y-1.5 mb-4">
        {bullets.map((bullet, index) => (
          <p key={index} className="text-sm text-gray flex items-center">
            <span className="text-lilac-400 mr-2 text-xs">●</span>
            {bullet}
          </p>
        ))}
      </div>

      {image && (
        <div className="ml-10 mt-4 mb-4">
          <img
            src={image}
            alt={title}
            className="h-16 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity"
          />
        </div>
      )}

      <div className="flex justify-between items-center ml-10 mt-4">
        <span className="text-xs font-medium text-white bg-lilac-500 px-3 py-1 rounded-full">{tags[0]}</span>
        <span className="text-xs text-lilac-600 bg-lilac-100 px-3 py-1 rounded-full">{tags[1]}</span>
      </div>

      <div className="h-px bg-lilac-200 mt-6" />
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
