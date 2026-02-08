import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { UGCSection } from "@/components/UGCSection";
import { Leaf } from "@/components/Botanicals";

const UGC = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Simple nav with back button */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.04)]">
        <div className="max-w-[1080px] mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="flex items-center gap-2 text-sm font-medium text-charcoal-light/60 hover:text-charcoal transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <span className="text-sm font-serif font-medium text-charcoal">UGC Services</span>
          </div>
        </div>
      </nav>

      <div className="pt-20">
        <UGCSection />
      </div>

      <footer className="py-8 px-6 border-t border-sand-dark/30">
        <div className="max-w-[1080px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-charcoal-light/40">
            <Leaf size={14} color="#CBD7C7" />
            <span>Gia Pereira, 2025</span>
          </div>
          <div className="flex items-center gap-6">
            <Link
              to="/"
              className="text-sm text-charcoal-light/40 hover:text-sage-dark transition-colors"
            >
              Home
            </Link>
            <a
              href="https://instagram.com/usecodegia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-charcoal-light/40 hover:text-sage-dark transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default UGC;
