import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const socialLinks = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/gia-pereira-3279631a4/' },
  { name: 'Instagram', url: 'https://www.instagram.com/usecodegia/' },
  { name: 'X', url: 'https://x.com/usecodegia' },
];

const sectionLinks = [
  { name: 'About', href: '#about' },
  { name: 'Work', href: '#work' },
  { name: 'Contact', href: 'mailto:gia.pereira31@gmail.com' },
];

export function Footer() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.footer
      className="bg-purple-900 text-lilac-200 py-16 mt-16"
      initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Left - Tagline and email */}
          <div className="space-y-6">
            <p className="font-serif text-lg italic">building & living consciously</p>
            <a
              href="mailto:gia.pereira31@gmail.com"
              className="text-sm uppercase tracking-wide underline underline-offset-4 hover:text-white transition-colors"
            >
              gia.pereira31@gmail.com
            </a>
          </div>

          {/* Center - Social */}
          <div>
            <h4 className="text-xs uppercase tracking-wide text-lilac-200/60 mb-4">Social</h4>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:text-white transition-colors hover:translate-y-[-2px] inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right - Sections */}
          <div>
            <h4 className="text-xs uppercase tracking-wide text-lilac-200/60 mb-4">Sections</h4>
            <ul className="space-y-2">
              {sectionLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-white transition-colors hover:translate-y-[-2px] inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-lilac-200/20">
          <p className="text-xs text-lilac-200/60">© 2026 Gia Pereira</p>
        </div>
      </div>
    </motion.footer>
  );
}
