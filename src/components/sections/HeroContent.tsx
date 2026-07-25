import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import heroImage from '@/assets/hero-portrait.jpg';

const sections = [
  {
    number: '01',
    title: 'founder',
    bullets: [
      'ManaVerse – wellness tech startup',
      'wearables + cognitive training',
      'demo live at manaverse.co.uk',
    ],
  },
  {
    number: '02',
    title: 'data analyst',
    bullets: [
      'lifestyle & wellbeing analysis',
      'stress level predictions dashboard',
      'social media mental health ML',
    ],
  },
  {
    number: '03',
    title: 'builder',
    bullets: [
      'Creovate – content management tool (hackathon)',
      'DPU – digital marketing agency site',
      'UGC content creation services',
    ],
  },
  {
    number: '04',
    title: 'background',
    bullets: [
      'economics graduate',
      'ex-IBM consultant',
      'currently studying Data & AI',
    ],
  },
];

export function HeroContent() {
  const prefersReducedMotion = useReducedMotion();

  const sectionVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.8 + i * 0.15,
      },
    }),
  };

  const photoVariants = {
    hidden: { clipPath: 'inset(0 100% 0 0)' },
    visible: {
      clipPath: 'inset(0 0% 0 0)',
      transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94], delay: 1.4 },
    },
  };

  return (
    <div className="space-y-12">
      {/* Hero text */}
      <div>
        <div className="font-serif text-5xl md:text-7xl text-charcoal leading-[1.1]">
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            hi!
          </motion.div>
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
          >
            i'm <span className="text-lilac-500">gia</span>.
          </motion.div>
        </div>

        <motion.p
          className="text-gray text-base mt-6"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          i'm a 23 y/o building at the intersection of wellness, technology, & creativity...
        </motion.p>
      </div>

      {/* Numbered sections */}
      <div className="space-y-8">
        {sections.map((section, index) => (
          <motion.div
            key={section.number}
            custom={index}
            variants={prefersReducedMotion ? {} : sectionVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="flex gap-3 mb-2">
              <span className="text-sm font-semibold text-charcoal">[{section.number}]</span>
              <span className="text-sm font-semibold text-charcoal">{section.title}</span>
            </div>
            <div className="ml-9 space-y-1">
              {section.bullets.map((bullet, i) => (
                <p key={i} className="text-sm text-gray">
                  <span className="text-lilac-500 mr-2">⊙</span>
                  {bullet}
                </p>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Photo */}
      <motion.div
        className="overflow-hidden rounded-2xl"
        variants={prefersReducedMotion ? {} : photoVariants}
        initial="hidden"
        animate="visible"
      >
        <img
          src={heroImage}
          alt="Gia Pereira"
          className="w-full h-auto object-cover aspect-[4/5] max-h-[500px]"
        />
      </motion.div>
    </div>
  );
}
