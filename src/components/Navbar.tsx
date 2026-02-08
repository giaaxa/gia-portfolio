import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Leaf } from "./Botanicals";

const navItems = [
  { label: "What I Do", href: "#pillars", id: "pillars" },
  { label: "Building", href: "#focus", id: "focus" },
  { label: "Past Work", href: "#work", id: "work" },
  { label: "Connect", href: "#connect", id: "connect" },
];

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");

  const { scrollY } = useScroll();
  const paddingY = useTransform(scrollY, [0, 80], [20, 12]);
  const logoScale = useTransform(scrollY, [0, 80], [1, 0.92]);
  const bgOpacity = useTransform(scrollY, [0, 40], [0, 1]);
  const shadowOpacity = useTransform(scrollY, [20, 80], [0, 0.3]);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastScrollY.current + 5) {
        setScrollDirection("down");
      } else if (currentY < lastScrollY.current - 5) {
        setScrollDirection("up");
      }
      lastScrollY.current = currentY;

      const sections = ["home", "pillars", "focus", "work", "about", "connect"];
      for (const sectionId of [...sections].reverse()) {
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

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navVisible = scrollDirection === "up" || lastScrollY.current < 400;

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ y: 0 }}
      animate={{ y: navVisible ? 0 : -80 }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
    >
      {/* Cosmic background */}
      <motion.div
        className="absolute inset-0 backdrop-blur-md bg-cosmic-void/80"
        style={{ opacity: bgOpacity }}
      />
      <motion.div
        className="absolute inset-x-0 bottom-0 h-px bg-cosmic-glow/20"
        style={{ opacity: shadowOpacity }}
      />

      <motion.div
        className="max-w-[1080px] mx-auto px-6 relative z-10"
        style={{ paddingTop: paddingY, paddingBottom: paddingY }}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            className="flex items-center gap-2 text-cosmic-glow hover:text-white transition-colors duration-300"
            style={{ scale: logoScale }}
          >
            <Leaf size={18} color="#c4b5fd" />
            <span className="font-serif text-lg font-medium">Gia Pereira</span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-300 relative py-1 ${
                  activeSection === item.id
                    ? "text-cosmic-glow"
                    : "text-cosmic-glow/50 hover:text-cosmic-glow"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-cosmic-violet"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
            <a
              href="#connect"
              className="text-sm font-medium px-5 py-2 rounded-full text-white bg-cosmic-violet hover:bg-cosmic-purple transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cosmic-glow hover:shadow-[0_4px_20px_rgba(124,58,237,0.4)]"
            >
              Let's build together
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 -mr-2 text-cosmic-glow"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
              className="md:hidden mt-4 pb-4 space-y-1 rounded-2xl p-4 border bg-cosmic-deep/95 border-cosmic-violet/30 backdrop-blur-lg"
            >
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? "text-cosmic-glow bg-cosmic-violet/20"
                      : "text-cosmic-glow/70 hover:text-cosmic-glow hover:bg-cosmic-violet/10"
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-2 px-4">
                <a
                  href="#connect"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full text-center text-sm font-medium px-5 py-3 rounded-full text-white bg-cosmic-violet hover:bg-cosmic-purple transition-colors"
                >
                  Let's build together
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.nav>
  );
};
