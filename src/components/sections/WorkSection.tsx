import { motion } from 'framer-motion';
import { WorkEntry } from '@/components/ui/WorkEntry';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import manaverseLogo from '@/assets/manaverse-logo.png';

const workEntries = [
  {
    number: '01',
    title: 'ManaVerse',
    icon: '✦',
    description: 'Wellness tech startup – wearables + cognitive training for mental performance',
    bullets: [
      'manaverse.io (main)',
      'manaverse.co.uk (demo)',
      'full launch Sept 2026',
    ],
    tags: ['founder', 'wellness tech'] as [string, string],
    action: { label: 'visit', url: 'https://manaverse.io' },
    image: manaverseLogo,
  },
  {
    number: '02',
    title: 'Data Analysis Projects',
    icon: '◈',
    description: 'Dashboard insights, ML models, and data storytelling',
    bullets: [
      'Lifestyle & wellbeing analysis',
      'Stress level predictions',
      'Social media mental health',
    ],
    tags: ['data analyst', 'python · sql · powerbi'] as [string, string],
    action: { label: 'github', url: 'https://github.com/giaaxa' },
  },
  {
    number: '03',
    title: 'Creovate',
    icon: '⚡',
    description: 'Hackathon project – all-in-one content creation management tool',
    bullets: [
      'Content matching & ideas',
      'Trend & competitor analysis',
      'Meta insights integration',
    ],
    tags: ['builder', 'hackathon'] as [string, string],
  },
  {
    number: '04',
    title: 'Digital Professionals Unwired',
    icon: '◎',
    description: 'Website for a digital marketing agency',
    bullets: ['digitalprofessionalsunwired.com'],
    tags: ['web development', 'client work'] as [string, string],
    action: { label: 'visit', url: 'https://www.digitalprofessionalsunwired.com/' },
  },
  {
    number: '05',
    title: 'UGC Content Creation',
    icon: '✿',
    description: 'Scroll-stopping content for brands, stays, products',
    bullets: [
      'Vertical videos, photo sets, raw footage',
      'Niches: travel, tech, lifestyle',
    ],
    tags: ['content creation', 'services'] as [string, string],
    action: { label: 'inquire', url: 'mailto:gia.pereira31@gmail.com' },
  },
  {
    number: '06',
    title: 'Web Projects',
    icon: '◇',
    description: 'Collection of websites and web experiments',
    bullets: ['Various client and personal projects'],
    tags: ['web development', 'portfolio'] as [string, string],
    action: { label: 'github', url: 'https://github.com/giaaxa' },
  },
];

export function WorkSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="work" className="py-16">
      <motion.div
        className="mb-12"
        initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-serif text-4xl md:text-5xl text-lilac-600 mb-2">
          WORK
        </h2>
        <p className="text-sm text-gray">projects & ventures</p>
      </motion.div>

      <div>
        {workEntries.map((entry) => (
          <WorkEntry key={entry.number} {...entry} />
        ))}
      </div>
    </section>
  );
}
