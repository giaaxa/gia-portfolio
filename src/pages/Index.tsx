import { useEffect, useState } from "react";
import { ArrowUpRight, ArrowDown, Mail, Send, Briefcase, LineChart, Palette, Users, ChevronRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Section, SectionHeader } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ProjectCard } from "@/components/ProjectCard";
import { CapabilityCard } from "@/components/CapabilityCard";
import { StatBlock } from "@/components/StatBlock";
import { ContentSection } from "@/components/ContentSection";
import heroPortrait from "@/assets/hero-portrait.jpg";
import manabandImage from "@/assets/manaband.jpg";
import cosmicOrb from "@/assets/cosmic-orb.jpg";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

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

  const trustItems = ["Ex-IBM", "First Class Econ", "ManaVerse Founder", "Data Analytics"];

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <ScrollProgress />
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-24 pb-16 px-6">
        <div className="max-w-[1180px] mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="animate-hero">
                  Building thoughtful systems at the edge of AI and design
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed animate-hero-delayed max-w-lg">
                  First Class Economics graduate. Ex-IBM consultant. Currently building ManaVerse while studying Data Analytics and AI.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 animate-hero-delayed" style={{ animationDelay: '0.2s' }}>
                <Button 
                  asChild 
                  size="lg" 
                  className="rounded-full px-8 bg-primary hover:bg-[hsl(224,76%,27%)] text-primary-foreground font-medium"
                >
                  <a href="#work">
                    View work
                    <ChevronRight className="ml-1 w-4 h-4" />
                  </a>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg" 
                  className="rounded-full px-8 border-[hsl(220,30%,8%,0.15)] text-foreground hover:bg-[hsl(220,14%,96%)] hover:border-[hsl(220,30%,8%,0.2)]"
                >
                  <a href="#contact">Contact</a>
                </Button>
              </div>

              {/* Trust row - pill chips */}
              <div className="flex flex-wrap gap-2 pt-4 animate-hero-delayed" style={{ animationDelay: '0.3s' }}>
                {trustItems.map((item) => (
                  <span 
                    key={item} 
                    className="text-xs px-3 py-1.5 rounded-full bg-[hsl(224,76%,33%,0.08)] text-muted-foreground border border-[hsl(220,30%,8%,0.08)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Right portrait */}
            <div className="relative flex justify-center lg:justify-end animate-hero-delayed" style={{ animationDelay: '0.15s' }}>
              <div className="relative max-w-[380px] w-full">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-[hsl(220,30%,8%,0.08)]">
                  <img
                    src={heroPortrait}
                    alt="Gia Pereira"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="hidden lg:flex justify-center mt-16 animate-scroll">
            <a href="#work" className="text-muted-foreground hover:text-foreground transition-colors">
              <ArrowDown className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <Section id="work">
        <SectionHeader 
          title="Featured Work" 
          subtitle="Select projects showcasing strategy, design, and technical thinking."
        />
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="reveal">
            <ProjectCard
              title="ManaVerse"
              outcome="Building a movement that merges consciousness, technology, and design into everyday life."
              tags={["Product", "Founder", "AI"]}
              image={cosmicOrb}
              link="#manaverse-detail"
              category="Wellness Tech"
              role="Founder"
              year="2024"
            />
          </div>
          
          <div className="reveal" style={{ transitionDelay: '0.1s' }}>
            <ProjectCard
              title="IBM SAP Consulting"
              outcome="Led finance testing coordination across global teams. Contributed to GenAI initiatives."
              tags={["Consulting", "Finance", "Enterprise"]}
              link="#experience"
              category="Enterprise"
              role="Junior Consultant"
              year="2023"
            />
          </div>
        </div>
      </Section>

      {/* Capabilities Section */}
      <Section id="capabilities">
        <SectionHeader 
          title="What I Do" 
          subtitle="Combining strategic thinking with hands-on execution."
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="reveal">
            <CapabilityCard
              icon={Briefcase}
              title="Strategy"
              items={["Research and positioning", "Go to market planning", "Competitive analysis"]}
            />
          </div>
          
          <div className="reveal" style={{ transitionDelay: '0.1s' }}>
            <CapabilityCard
              icon={LineChart}
              title="Data"
              items={["Analytics and insights", "Python and SQL", "Dashboard design"]}
            />
          </div>
          
          <div className="reveal" style={{ transitionDelay: '0.2s' }}>
            <CapabilityCard
              icon={Palette}
              title="Design"
              items={["Brand systems", "Content strategy", "Visual direction"]}
            />
          </div>
          
          <div className="reveal" style={{ transitionDelay: '0.3s' }}>
            <CapabilityCard
              icon={Users}
              title="Leadership"
              items={["Team coordination", "Stakeholder management", "Clear communication"]}
            />
          </div>
        </div>
      </Section>

      {/* Proof / Metrics Section */}
      <Section id="proof">
        <div className="grid md:grid-cols-3 gap-12 reveal">
          <StatBlock value="3+" label="Years of professional experience" />
          <StatBlock value="1,000+" label="Students reached through events" />
          <StatBlock value="+40%" label="Engagement growth on campaigns" />
        </div>
      </Section>

      {/* About Section */}
      <Section id="about">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8 reveal">
            <SectionHeader 
              title="About" 
              subtitle="A bit more about who I am and how I work."
            />
            
            <div className="space-y-6 text-muted-foreground leading-relaxed max-w-lg">
              <p>
                I'm Gia Pereira. I blend brand thinking, data, and design to build products people actually use. I lead teams with clarity and care.
              </p>
              <p>
                Currently prototyping ManaVerse while studying Data Analytics and AI at Code Institute. Learning Python to transition into a technical founder who can build, not just strategize.
              </p>
            </div>
          </div>

          <div className="space-y-6 reveal" style={{ transitionDelay: '0.1s' }}>
            <h3 className="text-lg font-semibold text-foreground">Principles</h3>
            <div className="space-y-4">
              <div className="card-elevated p-5">
                <h4 className="font-medium text-foreground mb-1">Clarity over complexity</h4>
                <p className="text-sm text-muted-foreground">Simple solutions that people understand and trust.</p>
              </div>
              <div className="card-elevated p-5">
                <h4 className="font-medium text-foreground mb-1">Build with intention</h4>
                <p className="text-sm text-muted-foreground">Every decision should serve the end user.</p>
              </div>
              <div className="card-elevated p-5">
                <h4 className="font-medium text-foreground mb-1">Lead with empathy</h4>
                <p className="text-sm text-muted-foreground">Good teams are built on trust and understanding.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Personal Content Section */}
      <Section id="content">
        <SectionHeader 
          title="Content" 
          subtitle="Thoughts on building, leading, and learning in public."
        />
        
        <ContentSection 
          items={[
            {
              title: "My real working stack as a student founder",
              description: "The tools and workflows I use daily to balance building ManaVerse with full-time study.",
              tags: ["Productivity", "Founder"],
              link: "https://linkedin.com"
            },
            {
              title: "Why I'm learning Python as a founder",
              description: "Moving from strategy to technical execution. The case for founders who code.",
              tags: ["Learning", "Tech"],
              link: "https://linkedin.com"
            },
            {
              title: "Designing calm tech in a noisy world",
              description: "How we're approaching product design at ManaVerse with intentionality.",
              tags: ["Design", "ManaVerse"],
              link: "https://linkedin.com"
            }
          ]}
        />
      </Section>

      {/* Tools Section */}
      <Section id="tools">
        <SectionHeader 
          title="Tools and Stack" 
          subtitle="Technologies and platforms I work with regularly."
        />
        
        <div className="flex flex-wrap gap-3 reveal">
          {[
            "Python", "NumPy", "Pandas", "Excel", "Power BI", 
            "SAP", "Figma", "Canva", "Notion", "Git", 
            "Jupyter", "Matplotlib", "Tableau"
          ].map((tool) => (
            <span 
              key={tool} 
              className="px-4 py-2 text-sm rounded-full bg-white border border-[hsl(220,30%,8%,0.10)] text-muted-foreground hover:border-[hsl(220,30%,8%,0.18)] hover:bg-[hsl(220,14%,96%)] transition-all cursor-default"
            >
              {tool}
            </span>
          ))}
        </div>
      </Section>

      {/* ManaVerse Detail Section */}
      <Section id="manaverse-detail">
        <div className="space-y-12">
          <div className="reveal">
            <span className="text-xs px-3 py-1.5 rounded-full bg-[hsl(224,76%,33%,0.08)] text-primary border border-[hsl(224,76%,33%,0.12)] mb-4 inline-block">
              Featured Project
            </span>
            <h2 className="text-foreground mb-4">
              ManaVerse
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Building a movement that merges technology and design into everyday life. Making mental clarity and emotional intelligence as habitual as checking your phone.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-elevated p-8 space-y-6 reveal">
              <h3 className="text-xl font-semibold text-primary">ManaBand</h3>
              <p className="text-muted-foreground leading-relaxed">
                A privacy-first wristband that supports breath pacing and tracks HRV, EDA, motion, and sleep. It contributes to a simple Prana Score and gives gentle nudges.
              </p>
              <div className="aspect-video rounded-xl overflow-hidden bg-[hsl(220,14%,96%)] border border-[hsl(220,30%,8%,0.08)]">
                <img
                  src={manabandImage}
                  alt="ManaBand wristband device"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="card-elevated p-8 space-y-6 reveal" style={{ transitionDelay: '0.1s' }}>
              <h3 className="text-xl font-semibold text-primary">Brain Stone</h3>
              <p className="text-muted-foreground leading-relaxed">
                A small off-phone companion for quick resets. Tap to begin a practice. Long press for an emergency reset. The light breathes to guide attention.
              </p>
              <div className="aspect-[3/2] rounded-xl bg-[hsl(220,14%,96%)] border border-[hsl(220,30%,8%,0.08)] flex items-center justify-center">
                <p className="text-sm text-muted-foreground">Device preview coming soon</p>
              </div>
            </div>
          </div>

          <div className="card-elevated p-8 reveal">
            <h3 className="text-xl font-semibold text-foreground mb-8">Early Traction</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <StatBlock value="103" label="Survey responses with consent" />
              <StatBlock value="50+" label="People on the waitlist" />
              <StatBlock value="94.4%" label="Organic view rate" />
            </div>
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 reveal">
            <h2 className="text-foreground mb-4">
              Let's work together
            </h2>
            <p className="text-lg text-muted-foreground">
              Have a project in mind or just want to connect? I'd love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8 reveal">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="w-5 h-5 text-primary" />
                  <a 
                    href="mailto:manaashakti@gmail.com" 
                    className="hover:text-foreground transition-colors link-underline"
                  >
                    manaashakti@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <ArrowUpRight className="w-5 h-5 text-primary" />
                  <a 
                    href="https://manashakti.app/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-colors link-underline"
                  >
                    manashakti.app
                  </a>
                </div>
              </div>

              <p className="text-sm text-muted-foreground">
                I typically reply within 72 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 reveal" style={{ transitionDelay: '0.1s' }}>
              <Input
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="rounded-xl bg-white border-[hsl(220,30%,8%,0.10)] focus:border-primary h-12"
              />
              <Input
                type="email"
                placeholder="Your email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="rounded-xl bg-white border-[hsl(220,30%,8%,0.10)] focus:border-primary h-12"
              />
              <Textarea
                placeholder="Your message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={4}
                className="rounded-xl bg-white border-[hsl(220,30%,8%,0.10)] focus:border-primary resize-none"
              />
              <Button 
                type="submit" 
                className="w-full rounded-full bg-primary hover:bg-[hsl(224,76%,27%)] text-primary-foreground font-medium h-12"
              >
                Send message
                <Send className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-[hsl(220,30%,8%,0.08)]">
        <div className="max-w-[1180px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Gia Pereira. Built with clarity and care.
          </p>
          <div className="flex items-center gap-6">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors link-underline"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors link-underline"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
