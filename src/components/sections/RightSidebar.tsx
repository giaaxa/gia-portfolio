import { motion } from 'framer-motion';

export function RightSidebar() {
  return (
    <div className="flex flex-col gap-6 lg:items-end">
      {/* Status indicators */}
      <div className="flex flex-col gap-2 lg:items-end">
        <a
          href="https://calendly.com/gia-pereira31/15-min-discovery-call"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray hover:text-lilac-600 transition-colors"
        >
          <span className="text-lilac-500">◆</span> open to opportunities
        </a>
        <span className="text-sm text-gray">
          <span className="text-charcoal">☆</span> based in birmingham, uk
        </span>
      </div>

      {/* Action buttons */}
      <div className="flex flex-col gap-3 lg:items-end">
        <motion.button
          onClick={() => {
            const workSection = document.getElementById('work');
            if (workSection) {
              const yOffset = -48;
              const y = workSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
              window.scrollTo({ top: y, behavior: 'smooth' });
            }
          }}
          className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-charcoal border border-charcoal rounded-full hover:bg-lilac-500 hover:text-white hover:border-lilac-500 transition-all duration-200 cursor-pointer"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          view work →
        </motion.button>

        <motion.a
          href="https://calendly.com/gia-pereira31/15-min-discovery-call"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-lilac-500 border border-lilac-500 rounded-full hover:bg-lilac-600 hover:border-lilac-600 transition-all duration-200"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          book a call ✦
        </motion.a>

        <motion.a
          href="/Gia_Pereira_CV.docx"
          download
          className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-charcoal border border-charcoal rounded-full hover:bg-charcoal hover:text-white transition-all duration-200"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          download CV ↓
        </motion.a>
      </div>

      {/* ManaVerse status */}
      <div className="flex flex-col lg:items-end">
        <span className="text-sm font-medium text-charcoal">ManaVerse</span>
        <span className="text-xs text-gray">launching Sept 2026</span>
      </div>
    </div>
  );
}
