import { motion } from 'framer-motion';

interface SocialLinksProps {
  orientation?: 'vertical' | 'horizontal';
  className?: string;
}

const socials = [
  {
    name: 'Instagram',
    icon: '○',
    url: 'https://www.instagram.com/usecodegia/'
  },
  {
    name: 'X',
    icon: '✕',
    url: 'https://x.com/usecodegia'
  },
  {
    name: 'LinkedIn',
    icon: 'in',
    url: 'https://www.linkedin.com/in/gia-pereira-3279631a4/'
  },
];

export function SocialLinks({ orientation = 'vertical', className = '' }: SocialLinksProps) {
  const isVertical = orientation === 'vertical';

  return (
    <div className={`flex ${isVertical ? 'flex-col gap-3' : 'flex-row gap-4'} ${className}`}>
      {socials.map((social) => (
        <motion.a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-charcoal hover:text-lilac-600 transition-colors duration-200 text-sm flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="w-4 text-center font-medium">{social.icon}</span>
          {isVertical && <span className="sr-only">{social.name}</span>}
        </motion.a>
      ))}
    </div>
  );
}
