import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { label: "Work", href: "#work", id: "work" },
  { label: "About", href: "#about", id: "about" },
  { label: "Proof", href: "#proof", id: "proof" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ["home", "work", "ugc", "content", "about", "contact"];
      for (const sectionId of sections.reverse()) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
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
          ? "bg-background/90 backdrop-blur-xl border-b border-foreground/8 shadow-sm" 
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
                className={`text-sm font-medium transition-colors relative py-1 ${
                  activeSection === item.id
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
                {/* Animated underline */}
                <span 
                  className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                    activeSection === item.id ? "w-full" : "w-0"
                  }`}
                />
              </a>
            ))}
            <ThemeToggle />
            <Button 
              asChild 
              size="sm" 
              className="rounded-full px-5 bg-primary hover:bg-primary/90 text-primary-foreground font-medium h-9"
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
          <div className="md:hidden mt-4 pb-4 space-y-1 animate-fade-in bg-card rounded-2xl p-4 border border-foreground/8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? "text-primary bg-primary/5"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2 px-4">
              <Button 
                asChild 
                className="w-full rounded-full bg-primary hover:bg-primary/90"
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