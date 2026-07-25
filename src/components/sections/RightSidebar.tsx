import { motion } from 'framer-motion';

export function RightSidebar() {
  return (
    <div className="flex flex-col gap-6 lg:items-end">
      {/* Status indicators */}
      <div className="flex flex-col gap-2 lg:items-end">
        <span className="text-sm text-gray">
          <span className="text-lilac-500">◆</span> open to opportunities
        </span>
        <span className="text-sm text-gray">
          <span className="text-charcoal">☆</span> based in birmingham, uk
        </span>
      </div>

      {/* View work button */}
      <motion.a
        href="#work"
        className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-charcoal border border-charcoal rounded-full hover:bg-lilac-500 hover:text-white hover:border-lilac-500 transition-all duration-200"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
      >
        view work →
      </motion.a>

      {/* ManaVerse status */}
      <div className="flex flex-col lg:items-end">
        <span className="text-sm font-medium text-charcoal">ManaVerse</span>
        <span className="text-xs text-gray">launching Sept 2026</span>
      </div>
    </div>
  );
}
