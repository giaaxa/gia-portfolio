import { motion } from 'framer-motion';
import { Marquee, MarqueeSeparator } from '@/components/Marquee';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const tools = [
  'Python', 'SQL', 'Power BI', 'Figma', 'Notion',
  'Canva', 'CapCut', 'DaVinci Resolve'
];

export function AboutSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="about" className="py-16">
      <motion.h2
        className="font-serif text-4xl md:text-5xl text-charcoal mb-8"
        initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        ABOUT
      </motion.h2>

      <motion.div
        className="space-y-6 text-gray text-base max-w-2xl"
        initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <p>
          i think deeply about where wellness, technology, & creativity meet—& how weaving
          these worlds together can help people live, create, & connect better.
        </p>
        <p>
          i believe in building consciously: learning by doing, beginning before i'm ready,
          and allowing every lesson to sharpen my future work.
        </p>
      </motion.div>

      <div className="h-px bg-light-gray my-12" />

      <motion.div
        initial={prefersReducedMotion ? {} : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h3 className="text-sm font-medium text-charcoal uppercase tracking-wide mb-6">
          Tools I Use
        </h3>

        <Marquee speed={25} className="py-4">
          {tools.map((tool, index) => (
            <span key={tool} className="flex items-center gap-8">
              <span className="text-gray text-sm whitespace-nowrap">{tool}</span>
              {index < tools.length - 1 && <MarqueeSeparator />}
            </span>
          ))}
        </Marquee>
      </motion.div>
    </section>
  );
}
