import { useEffect, useState } from "react";
import { ArrowUpRight, Mail, Send, Instagram, Play, ArrowDown, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Section, SectionHeader } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ProjectCard } from "@/components/ProjectCard";
import { CustomCursor } from "@/components/CustomCursor";
import { ParallaxCard } from "@/components/ParallaxCard";
import { useParallax } from "@/hooks/useParallax";
import { BuildQuest } from "@/components/BuildQuest";
import { NeuralNetworkBg } from "@/components/NeuralNetworkBg";
import { EcgPulseLine } from "@/components/EcgPulseLine";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import manaverseLogo from "@/assets/manaverse-logo.png";
import ibmTeam from "@/assets/ibm-team.png";
import aestheticaLogo from "@/assets/aesthetica-logo.png";
import heroPortrait from "@/assets/hero-portrait.jpg";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const heroParallax = useParallax(0.15);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up");
          entry.target.classList.remove("opacity-0", "translate-y-4");
        }
      });
    }, observerOptions);

    document.querySelectorAll(".reveal").forEach((el) => {
      el.classList.add("opacity-0", "translate-y-4");
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const chips = ["Ex-IBM", "ManaVerse Founder", "Shipping Weekly"];

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden dark:quest-grain">
      <CustomCursor />
      <ScrollProgress />
      <Navbar />

      {/* Hero Section - Founder Mode */}
      <section id="home" className="relative min-h-[90vh] flex items-center pt-24 pb-16 px-6 overflow-hidden">
        {/* ECG pulse line at top */}
        <EcgPulseLine className="absolute top-20 left-0 right-0 z-0" />

        {/* Neural network background */}
        <NeuralNetworkBg className="absolute inset-0 z-0" />

        {/* Subtle background gradient with parallax */}
        <div
          className="absolute top-0 right-0 w-[60%] h-[80%] pointer-events-none opacity-[0.04] dark:opacity-[0.08] z-[1]"
          style={{
            background: 'radial-gradient(ellipse at top right, hsl(var(--primary)), transparent 70%)',
            transform: `translateY(${heroParallax * 0.5}px)`,
          }}
        />

        <div className="max-w-[1180px] mx-auto w-full relative z-10">
          <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
            {/* Portrait with animated orb */}
            <div className="flex-shrink-0 animate-hero relative">
              {/* Gradient orb behind portrait */}
              <div 
                className="absolute -inset-8 md:-inset-12 animate-float-orb pointer-events-none hidden sm:block"
                style={{
                  background: 'radial-gradient(circle, hsl(var(--primary) / 0.25) 0%, hsl(var(--primary) / 0.1) 40%, transparent 70%)',
                  filter: 'blur(30px)',
                }}
              />
              
              <div className="portrait-container">
                <div className="portrait-glow" />
                <div className="w-28 h-28 md:w-36 md:h-36 rounded-2xl overflow-hidden border border-foreground/10 shadow-sm relative z-10 bg-background">
                  <img 
                    src={heroPortrait} 
                    alt="Gia Pereira" 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>

            <div className="flex-1">
              <div className="space-y-4">
                <h1 className="animate-hero text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                  <span className="block">The future isn't just</span>
                  <span className="block">smarter tech.</span>
                  <span className="block mt-1 text-primary/90">It's stronger minds.</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed animate-hero-delayed max-w-xl">
                  Ex-IBM (SAP). Building ManaVerse / ManaShakti. Studying Data Analytics & AI. Shipping prototypes weekly.
                </p>
              </div>

              {/* 3 CTA Buttons */}
              <div className="flex flex-wrap gap-3 mt-6 animate-hero-delayed" style={{ animationDelay: '0.2s' }}>
                {/* Video Modal Button */}
                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      className="rounded-full px-6 h-11 bg-primary hover:bg-primary/90 text-primary-foreground font-medium touch-feedback"
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Watch 30s
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl p-0 overflow-hidden bg-black border-0">
                    <div className="aspect-video w-full">
                      {/* Placeholder for video embed - replace with actual video URL */}
                      <div className="w-full h-full flex items-center justify-center bg-card/50">
                        <div className="text-center space-y-4">
                          <Play className="w-16 h-16 mx-auto text-primary" />
                          <p className="text-muted-foreground">Video coming soon</p>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>

                {/* Scroll to Proof */}
                <Button 
                  asChild 
                  variant="outline" 
                  className="rounded-full px-6 h-11 border-foreground/15 text-foreground hover:bg-muted touch-feedback"
                >
                  <a href="#proof">
                    <ArrowDown className="w-4 h-4 mr-2" />
                    Unlock Proof
                  </a>
                </Button>

                {/* Case Study Link */}
                <Button 
                  asChild 
                  variant="ghost" 
                  className="rounded-full px-6 h-11 text-muted-foreground hover:text-foreground touch-feedback"
                >
                  <a href="#manaverse">
                    <FileText className="w-4 h-4 mr-2" />
                    ManaShakti case study
                  </a>
                </Button>
              </div>

              {/* Chips */}
              <div className="flex flex-wrap gap-2 mt-5 animate-hero-delayed" style={{ animationDelay: '0.3s' }}>
                {chips.map((chip) => (
                  <span
                    key={chip}
                    className="text-xs px-3 py-1.5 rounded-full bg-primary/5 dark:bg-primary/10 text-muted-foreground border border-foreground/8 dark:border-primary/20"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Work Section */}
      <Section id="work">
        <SectionHeader 
          title="Selected Work" 
          subtitle="Projects I've built and contributed to."
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ParallaxCard speed={0.03} className="reveal">
            <ProjectCard
              title="ManaVerse"
              outcome="A wellness tech startup building hardware and software for mental clarity. Privacy-first wearables that help you reset."
              tags={["Founder", "Product", "Hardware"]}
              image={manaverseLogo}
              link="https://manashakti.app/"
              category="Wellness Tech"
              role="Founder"
              year="2024"
              external
            />
          </ParallaxCard>
          
          <ParallaxCard speed={0.05} className="reveal" style={{ transitionDelay: '0.1s' }}>
            <ProjectCard
              title="IBM SAP Consulting"
              outcome="Coordinated finance testing across global enterprise teams. Contributed to GenAI initiatives for internal tooling."
              tags={["Consulting", "Finance", "AI"]}
              image={ibmTeam}
              link="#about"
              category="Enterprise"
              role="Junior Consultant"
              year="2023"
            />
          </ParallaxCard>

          <ParallaxCard speed={0.04} className="reveal" style={{ transitionDelay: '0.2s' }}>
            <ProjectCard
              title="Aesthetica Studio"
              outcome="Creative direction and brand strategy for a boutique design studio. Built identity systems and web presence."
              tags={["Brand", "Strategy", "Design"]}
              image={aestheticaLogo}
              link="#about"
              category="Creative"
              role="Creative Director"
              year="2022"
            />
          </ParallaxCard>
        </div>
      </Section>

      {/* Build Quest Section */}
      <BuildQuest />

      {/* About Section */}
      <Section id="about">
        <div className="max-w-3xl reveal">
          <SectionHeader 
            title="About" 
            subtitle="A bit more about me."
          />
          
          <p className="text-muted-foreground leading-relaxed mb-10 max-w-2xl">
            I'm Gia Pereira — I blend brand thinking, data, and design to build products people actually use. Currently building ManaVerse while studying Data Analytics and AI at Code Institute. Learning Python to become a technical founder who can build, not just strategize.
          </p>

          {/* Now bullets */}
          <div className="space-y-4 mb-10">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">Now</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>Prototyping ManaVerse hardware and app</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>Studying Data Analytics and AI at Code Institute</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>Building in public on @usecodegia</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>Learning Python and machine learning fundamentals</span>
              </li>
            </ul>
          </div>

          {/* Tool chips */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">Tools</h3>
            <div className="flex flex-wrap gap-2">
              {["Python", "SQL", "Power BI", "Figma", "Notion", "Canva", "CapCut", "DaVinci Resolve"].map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1.5 text-sm rounded-full bg-card dark:bg-card/50 border border-foreground/10 dark:border-primary/15 text-muted-foreground hover:border-foreground/18 dark:hover:border-primary/30 transition-colors"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ManaVerse Detail Section */}
      <Section id="manaverse">
        <div className="space-y-12">
          <div className="reveal">
            <span className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 mb-4 inline-block">
              Featured Project
            </span>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
              ManaVerse
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Building a movement that merges technology and design into everyday life. Making mental clarity as habitual as checking your phone.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="card-elevated p-6 space-y-4 reveal">
              <h3 className="text-lg font-semibold text-primary">ManaBand</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                A privacy-first wristband that supports breath pacing and tracks HRV, EDA, motion, and sleep. Contributes to a simple Prana Score with gentle nudges.
              </p>
            </div>

            <div className="card-elevated p-6 space-y-4 reveal" style={{ transitionDelay: '0.1s' }}>
              <h3 className="text-lg font-semibold text-primary">Brain Stone</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                A small off-phone companion for quick resets. Tap to begin a practice. Long press for an emergency reset. The light breathes to guide attention.
              </p>
            </div>
          </div>

          <div className="card-elevated p-6 reveal">
            <h3 className="text-lg font-semibold text-foreground mb-6">Traction</h3>
            <div className="grid grid-cols-3 gap-6">
              <div>
                <p className="text-2xl md:text-3xl font-semibold text-foreground">103</p>
                <p className="text-sm text-muted-foreground">Survey responses</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-semibold text-foreground">50+</p>
                <p className="text-sm text-muted-foreground">Waitlist signups</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-semibold text-foreground">94%</p>
                <p className="text-sm text-muted-foreground">Organic reach</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 reveal">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">
              Let's connect
            </h2>
            <p className="text-muted-foreground">
              Have a project in mind or just want to say hi? Reach out.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-6 reveal">
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Email</p>
                  <a
                    href="mailto:hello@manashakti.app"
                    className="flex items-center gap-2 text-foreground hover:text-primary transition-colors link-underline"
                  >
                    <Mail className="w-4 h-4" />
                    hello@manashakti.app
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.linkedin.com/in/gia-pereira-3279631a4/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                    LinkedIn
                  </a>
                </div>
                <div>
                  <a
                    href="https://instagram.com/usecodegia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Instagram className="w-4 h-4" />
                    @usecodegia
                  </a>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 reveal" style={{ transitionDelay: '0.1s' }}>
              <Input
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="rounded-xl bg-card dark:bg-card/50 dark:backdrop-blur-sm border-foreground/10 dark:border-primary/20 focus:border-primary h-11"
              />
              <Input
                type="email"
                placeholder="Your email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="rounded-xl bg-card dark:bg-card/50 dark:backdrop-blur-sm border-foreground/10 dark:border-primary/20 focus:border-primary h-11"
              />
              <Textarea
                placeholder="Your message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={4}
                className="rounded-xl bg-card dark:bg-card/50 dark:backdrop-blur-sm border-foreground/10 dark:border-primary/20 focus:border-primary resize-none"
              />
              <Button 
                type="submit" 
                className="w-full rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium h-11"
              >
                Send message
                <Send className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-foreground/8 dark:border-primary/10">
        <div className="max-w-[1180px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 Gia Pereira
          </p>
          <div className="flex items-center gap-6">
            <Link 
              to="/ugc"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              UGC Services
            </Link>
            <a 
              href="https://instagram.com/usecodegia" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/in/gia-pereira-3279631a4/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
