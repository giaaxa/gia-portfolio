import { useEffect, useState, useRef } from "react";
import { ArrowUpRight, Mail, Send, Instagram } from "lucide-react";
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
import { UGCSection } from "@/components/UGCSection";
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

  const chips = ["Ex-IBM", "First Class Econ", "ManaVerse Founder", "Data Analytics", "Building in Public"];

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <CustomCursor />
      <ScrollProgress />
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative min-h-[90vh] flex items-center pt-24 pb-16 px-6 overflow-hidden">
        {/* Subtle background gradient with parallax */}
        <div 
          className="absolute top-0 right-0 w-[60%] h-[80%] pointer-events-none opacity-[0.04] dark:opacity-[0.08]"
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
                <h1 className="animate-hero text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
                  Hi, I'm Gia
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed animate-hero-delayed max-w-lg">
                  Building products, systems, and content. Ex-IBM consultant. Founder of ManaVerse. Studying Data Analytics and AI.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mt-6 animate-hero-delayed" style={{ animationDelay: '0.2s' }}>
                <Button 
                  asChild 
                  className="rounded-full px-6 h-11 bg-primary hover:bg-primary/90 text-primary-foreground font-medium touch-feedback"
                >
                  <a href="#work">View work</a>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  className="rounded-full px-6 h-11 border-foreground/15 text-foreground hover:bg-muted touch-feedback"
                >
                  <a 
                    href="https://instagram.com/usecodegia" 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="w-4 h-4 mr-2" />
                    Follow @usecodegia
                  </a>
                </Button>
              </div>

              {/* Chips */}
              <div className="flex flex-wrap gap-2 mt-5 animate-hero-delayed" style={{ animationDelay: '0.3s' }}>
                {chips.map((chip) => (
                  <span 
                    key={chip} 
                    className="text-xs px-3 py-1.5 rounded-full bg-primary/5 text-muted-foreground border border-foreground/8"
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

      {/* Build in Public Section */}
      <Section id="content">
        <div className="max-w-2xl mx-auto text-center reveal">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/5 border border-foreground/8 mb-6">
            <Instagram className="w-7 h-7 text-primary" />
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Building in Public</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-lg mx-auto">
            I share my journey on @usecodegia — mindset, business, tech, and systems. Follow along for real-time updates on what I'm building.
          </p>
          <Button 
            asChild 
            className="rounded-full px-8 h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
          >
            <a 
              href="https://instagram.com/usecodegia" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-4 h-4 mr-2" />
              Follow @usecodegia
            </a>
          </Button>
        </div>
      </Section>

      {/* Notes Section */}
      <Section id="notes">
        <SectionHeader 
          title="Notes" 
          subtitle="Thoughts on building, learning, and leading."
        />
        
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "My working stack as a student founder",
              description: "The tools and workflows I use daily to balance building ManaVerse with full-time study.",
              tags: ["Productivity", "Founder"],
            },
            {
              title: "Why I'm learning Python as a founder",
              description: "Moving from strategy to execution. The case for founders who code.",
              tags: ["Learning", "Tech"],
            },
            {
              title: "Designing calm tech",
              description: "How we approach product design at ManaVerse with intentionality.",
              tags: ["Design", "ManaVerse"],
            },
          ].map((note, index) => (
            <div
              key={note.title}
              className="reveal card-elevated-hover p-6 space-y-3"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* Gradient cover instead of placeholder */}
              <div 
                className="aspect-[16/9] rounded-xl mb-4"
                style={{
                  background: `linear-gradient(135deg, hsl(224 76% 33% / ${0.08 + index * 0.03}), hsl(224 76% 45% / ${0.04 + index * 0.02}))`,
                }}
              />
              <h3 className="font-semibold text-foreground">{note.title}</h3>
              <p className="text-sm text-muted-foreground line-clamp-2">{note.description}</p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {note.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="text-xs px-2 py-1 rounded-full bg-primary/5 text-muted-foreground border border-foreground/6"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

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
                  className="px-3 py-1.5 text-sm rounded-full bg-card border border-foreground/10 text-muted-foreground hover:border-foreground/18 transition-colors"
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
            <span className="text-xs px-3 py-1.5 rounded-full bg-primary/8 text-primary border border-primary/12 mb-4 inline-block">
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

      {/* UGC Section */}
      <UGCSection />

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
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">ManaShakti</p>
                  <a 
                    href="mailto:hello@manashakti.app" 
                    className="flex items-center gap-2 text-foreground hover:text-primary transition-colors link-underline"
                  >
                    <Mail className="w-4 h-4" />
                    hello@manashakti.app
                  </a>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Work</p>
                  <a 
                    href="mailto:gia.pereira31@yahoo.com" 
                    className="flex items-center gap-2 text-foreground hover:text-primary transition-colors link-underline"
                  >
                    <Mail className="w-4 h-4" />
                    gia.pereira31@yahoo.com
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
                className="rounded-xl bg-card border-foreground/10 focus:border-primary h-11"
              />
              <Input
                type="email"
                placeholder="Your email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="rounded-xl bg-card border-foreground/10 focus:border-primary h-11"
              />
              <Textarea
                placeholder="Your message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={4}
                className="rounded-xl bg-card border-foreground/10 focus:border-primary resize-none"
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
      <footer className="py-8 px-6 border-t border-foreground/8">
        <div className="max-w-[1180px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Gia Pereira
          </p>
          <div className="flex items-center gap-6">
            <a 
              href="https://instagram.com/usecodegia" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Instagram
            </a>
            <a 
              href="https://linkedin.com" 
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
