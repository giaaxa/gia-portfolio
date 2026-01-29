import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { UGCSection } from "@/components/UGCSection";
import { Button } from "@/components/ui/button";
import { ScrollProgress } from "@/components/ScrollProgress";
import { CustomCursor } from "@/components/CustomCursor";

const UGC = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <CustomCursor />
      <ScrollProgress />
      
      {/* Simple nav with back button */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-foreground/8">
        <div className="max-w-[1180px] mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Button 
              asChild 
              variant="ghost" 
              size="sm"
              className="rounded-full text-muted-foreground hover:text-foreground"
            >
              <Link to="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </Button>
            <span className="text-sm font-medium text-foreground">UGC Services</span>
          </div>
        </div>
      </nav>

      {/* Add padding for fixed nav */}
      <div className="pt-20">
        <UGCSection />
      </div>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-foreground/8">
        <div className="max-w-[1180px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Gia Pereira
          </p>
          <div className="flex items-center gap-6">
            <Link 
              to="/"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Home
            </Link>
            <a 
              href="https://instagram.com/usecodegia" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
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
