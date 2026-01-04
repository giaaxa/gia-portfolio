import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ["home", "work", "capabilities", "proof", "about", "tools", "contact"];
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/80 backdrop-blur-xl border-b border-[hsl(220,30%,8%,0.08)] shadow-[0_1px_3px_hsl(220,30%,8%,0.04)]" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1180px] mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#home" 
            className="text-lg font-semibold text-foreground hover:text-primary transition-colors"
          >
            Gia Pereira
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors link-underline ${
                  activeSection === item.href.substring(1)
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </a>
            ))}
            <Button 
              asChild 
              size="sm" 
              className="rounded-full px-5 bg-primary hover:bg-[hsl(224,76%,27%)] text-primary-foreground font-medium"
            >
              <a href="#contact">
                Let's talk
              </a>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-1 animate-fade-in bg-white rounded-2xl p-4 border border-[hsl(220,30%,8%,0.08)]">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  activeSection === item.href.substring(1)
                    ? "text-primary bg-[hsl(224,76%,33%,0.08)]"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2 px-4">
              <Button 
                asChild 
                className="w-full rounded-full bg-primary hover:bg-[hsl(224,76%,27%)]"
                onClick={() => setMobileMenuOpen(false)}
              >
                <a href="#contact">Let's talk</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
