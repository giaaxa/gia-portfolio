import { ChevronDown, ExternalLink, Download, Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Navbar } from "@/components/Navbar";
import { Section, SectionHeader } from "@/components/Section";
import { GlassCard } from "@/components/GlassCard";
import heroPortrait from "@/assets/hero-portrait.jpg";
import holiFestival from "@/assets/holi-festival.jpg";
import diwaliStage from "@/assets/diwali-stage.jpg";
import manaband from "@/assets/manaband.jpg";
import cosmicOrb from "@/assets/cosmic-orb.jpg";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add form submission logic here
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <Section id="home" className="flex items-center justify-center pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Building thoughtful systems at the edge of{" "}
              <span className="text-gradient">AI, design, and Dharma</span>.
            </h1>
            <p className="text-xl text-muted-foreground max-w-xl">
              First‑Class Economics grad. Founder in progress. Turning ancient wisdom and modern data
              into usable tools — with heart.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-gradient-to-r from-secondary to-primary hover:opacity-90">
                <a href="#projects">View Projects</a>
              </Button>
              <Button size="lg" variant="outline">
                <Download className="mr-2 h-4 w-4" />
                <a href="/assets/Gia_Pereira_CV.pdf" target="_blank" rel="noopener noreferrer">
                  Download CV
                </a>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Based in the UK · Open to collabs ·{" "}
              <a href="mailto:giapereira31@gmail.com" className="text-primary hover:underline">
                giapereira31@gmail.com
              </a>
            </p>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden glow-purple">
              <img
                src={heroPortrait}
                alt="Gia Pereira professional portrait with purple rim lighting"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32">
              <img src={cosmicOrb} alt="Cosmic purple orb" className="w-full h-full object-cover rounded-full glow-purple animate-pulse" />
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-primary w-8 h-8" />
        </div>
      </Section>

      {/* About Section */}
      <Section id="about">
        <SectionHeader overline="Introduction" title="About" />
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-lg text-muted-foreground">
              I'm Gia — an economics graduate (First‑Class) who blends brand strategy, data, and design
              to build human‑centred products. I'm currently prototyping <span className="text-primary font-semibold">ManaVerse</span>,
              a calm tech layer that guides mindfulness like a friend — and I'm studying{" "}
              <span className="text-primary font-semibold">Data Analytics & AI</span> (Code Institute),
              learning Python to grow into a truly technical founder.
            </p>
            <p className="text-lg text-muted-foreground">
              I care about clarity, aesthetics, and practical spirituality.
            </p>
          </div>

          <GlassCard>
            <h3 className="text-xl font-semibold mb-4 text-primary">Fast facts</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                Dean's List, University of Essex.
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                President, <span className="font-semibold">Hindu Society</span> &{" "}
                <span className="font-semibold">Economics Society</span>.
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                Ex‑IBM (SAP Junior Consultant) & <span className="font-semibold">Aesthetica</span> (Brand
                & Social Strategist).
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                Currently recruiting, testing, and building the foundation for{" "}
                <span className="font-semibold">ManaVerse</span>.
              </li>
            </ul>
          </GlassCard>
        </div>
      </Section>

      {/* Highlights Section */}
      <Section id="highlights">
        <SectionHeader overline="Impact" title="Highlights" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <GlassCard className="text-center">
            <div className="text-5xl font-bold text-gradient mb-2">1,000+</div>
            <p className="text-muted-foreground">Students at university‑wide Holi Festival (lead organiser)</p>
          </GlassCard>
          <GlassCard className="text-center">
            <div className="text-5xl font-bold text-gradient mb-2">150+</div>
            <p className="text-muted-foreground">At Diwali Ball · scaled society to 60+ members as President</p>
          </GlassCard>
          <GlassCard className="text-center">
            <div className="text-5xl font-bold text-gradient mb-2">+40%</div>
            <p className="text-muted-foreground">Engagement uplift on LinkedIn campaigns (content strategy)</p>
          </GlassCard>
          <GlassCard className="text-center">
            <div className="text-5xl font-bold text-gradient mb-2">IBM</div>
            <p className="text-muted-foreground">Led cross‑functional finance testing, coordinating offshore teams</p>
          </GlassCard>
          <GlassCard className="text-center">
            <div className="text-5xl font-bold text-gradient mb-2">First‑Class</div>
            <p className="text-muted-foreground">Dean's List · First‑Class in Economics</p>
          </GlassCard>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="rounded-2xl overflow-hidden">
            <img src={holiFestival} alt="Holi festival celebration with colorful powder and large crowd of students" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-2xl overflow-hidden">
            <img src={diwaliStage} alt="Elegant Diwali ball stage with golden and purple lighting" className="w-full h-full object-cover" />
          </div>
        </div>
      </Section>

      {/* Featured Section */}
      <Section id="featured">
        <SectionHeader overline="LinkedIn" title="Featured" />
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-primary mb-2">
            AI × Conscious Design · Co‑Founder of ManaShakti · Ex‑IBM SAP · First‑Class Economics
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <GlassCard>
            <h4 className="font-semibold mb-2">Pinned Post</h4>
            <p className="text-sm text-muted-foreground mb-4">
              "My real working stack (student‑founder)"
            </p>
            <Button variant="outline" size="sm">
              <ExternalLink className="mr-2 h-4 w-4" />
              View Post
            </Button>
          </GlassCard>
          <GlassCard>
            <h4 className="font-semibold mb-2">Carousel</h4>
            <p className="text-sm text-muted-foreground mb-4">
              "Designing calm tech: ManaShakti"
            </p>
            <Button variant="outline" size="sm">
              <ExternalLink className="mr-2 h-4 w-4" />
              View Post
            </Button>
          </GlassCard>
          <GlassCard>
            <h4 className="font-semibold mb-2">Article/Note</h4>
            <p className="text-sm text-muted-foreground mb-4">
              "Why I'm learning Python as a founder"
            </p>
            <Button variant="outline" size="sm">
              <ExternalLink className="mr-2 h-4 w-4" />
              View Article
            </Button>
          </GlassCard>
        </div>

        <div className="flex flex-wrap gap-4">
          <Button variant="outline">
            <Linkedin className="mr-2 h-4 w-4" />
            <a href="https://linkedin.com/in/gia-pereira-3279631a4" target="_blank" rel="noopener noreferrer">
              View LinkedIn
            </a>
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Download Media Kit
          </Button>
        </div>
      </Section>

      {/* ManaVerse Section */}
      <Section id="manaverse">
        <SectionHeader overline="Flagship Project" title="ManaVerse" />
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">
              Calm tech for modern minds — <span className="text-gradient">ancient wisdom, adaptive AI</span>
            </h3>
            <p className="text-xl text-primary font-semibold">Make your mind YOUR home.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <GlassCard>
              <h4 className="text-xl font-semibold mb-4 text-primary">What I'm doing now</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span><strong>Prototyping:</strong> phone + voice demo; designing flows; testing early prompts; embedding 3D brand moments.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span><strong>Recruiting:</strong> technical collaborators/advisors; shaping a culture of clarity, kindness, and craft.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span><strong>Foundation:</strong> ops, research, market fit, and investor‑ready storytelling.</span>
                </li>
              </ul>
            </GlassCard>

            <GlassCard>
              <h4 className="text-xl font-semibold mb-4 text-primary">Core System</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• <strong>Awareness Graph</strong> — micro‑signals → live inner‑state</li>
                <li>• <strong>Next‑Best Practice Engine</strong> — one precise practice, right now</li>
                <li>• <strong>Mirror‑of‑Consciousness</strong> — gentle self‑reflection</li>
                <li>• <strong>Wisdom Graph + Evidence Base</strong> — lineage + science</li>
                <li>• <strong>Practice Composer</strong> — context‑true, safe, provenance</li>
              </ul>
            </GlassCard>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <GlassCard>
              <h4 className="text-xl font-semibold mb-4 text-primary">ManaBand</h4>
              <img src={manaband} alt="ManaBand wristband device with purple LED accents" className="w-full rounded-lg mb-4" />
              <p className="text-muted-foreground">
                Privacy‑first wristband (HRV, EDA, motion, sleep) → haptic breath pacing, Prāṇa Score, Sankalpa nudges.
              </p>
            </GlassCard>

            <GlassCard>
              <h4 className="text-xl font-semibold mb-4 text-primary">Mana — Brain Stone</h4>
              <p className="text-muted-foreground mb-4">
                Off‑phone companion for ultra‑quick resets: tap → practice; long‑press → emergency; glow/breathe cues. Hands‑off deeper flows to the app.
              </p>
              <div className="bg-muted/20 rounded-lg p-4">
                <p className="text-sm text-muted-foreground">
                  <strong>Early Traction:</strong> 103 survey responses, 50 waitlist sign‑ups, 94.4% organic views
                </p>
              </div>
            </GlassCard>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button>View Demo</Button>
            <Button variant="outline">View Deck</Button>
            <Button variant="outline">Notion Wiki</Button>
          </div>
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects">
        <SectionHeader overline="Portfolio" title="Projects" />
        <div className="grid md:grid-cols-2 gap-6">
          <GlassCard>
            <h3 className="text-xl font-semibold mb-2">Aesthetica — Brand & Social Strategy</h3>
            <p className="text-sm text-muted-foreground mb-4">Apr 2024 – Aug 2024</p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                Built AI‑first creative systems for fashion/lifestyle
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                Increased inbound interest and engagement
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                Rapid competitor scans and positioning
              </li>
            </ul>
          </GlassCard>

          <GlassCard>
            <h3 className="text-xl font-semibold mb-2">IBM — SAP Junior Consultant</h3>
            <p className="text-sm text-muted-foreground mb-4">Aug 2023 – Aug 2024</p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                Finance Testing Coordinator across time zones
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                Contributed to GenAI initiative improving ops
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                Drove efficiency for large SAP programs
              </li>
            </ul>
          </GlassCard>

          <GlassCard>
            <h3 className="text-xl font-semibold mb-2">DPU — Content & Outreach</h3>
            <p className="text-sm text-muted-foreground mb-4">Jul 2019 – Present</p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                Wrote finance explainers for APAC clients
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                Managed LinkedIn campaigns → +40% engagement
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                Helped build a knowledge hub
              </li>
            </ul>
          </GlassCard>

          <GlassCard>
            <h3 className="text-xl font-semibold mb-2">Pandit GVS — Community & Rituals</h3>
            <p className="text-sm text-muted-foreground mb-4">Community work</p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                Youth‑friendly explainers on dharma
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                Event coordination + growth
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                Visual identity touch‑ups
              </li>
            </ul>
          </GlassCard>
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience">
        <SectionHeader overline="Career" title="Experience" />
        <div className="space-y-6">
          <GlassCard>
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold">Aesthetica Studio — Brand & Social Strategist</h3>
                <p className="text-muted-foreground">Remote</p>
              </div>
              <p className="text-muted-foreground">Apr 2024 – Aug 2024</p>
            </div>
            <ul className="space-y-2 text-muted-foreground">
              <li>• End‑to‑end brand/content systems for AI‑first campaigns</li>
              <li>• Direct founder collab; engagement ↑; inbound ↑</li>
              <li>• Rapid research + positioning kits</li>
            </ul>
          </GlassCard>

          <GlassCard>
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold">IBM — SAP Junior Consultant</h3>
                <p className="text-muted-foreground">London</p>
              </div>
              <p className="text-muted-foreground">Aug 2023 – Aug 2024</p>
            </div>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Led finance testing co‑ordination; offshore sync</li>
              <li>• Contributed to GenAI Implementation Initiative</li>
              <li>• Ops strategies for large SAP projects; team events 50+</li>
            </ul>
          </GlassCard>

          <GlassCard>
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold">DPU — Content Writer</h3>
                <p className="text-muted-foreground">Remote</p>
              </div>
              <p className="text-muted-foreground">Jul 2019 – Present</p>
            </div>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Finance articles for APAC banks; clear, actionable</li>
              <li>• LinkedIn strategy → +40% engagement</li>
            </ul>
          </GlassCard>

          <div className="flex justify-center mt-8">
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
          </div>
        </div>
      </Section>

      {/* Education Section */}
      <Section id="education">
        <SectionHeader overline="Academic" title="Education" />
        <div className="space-y-6">
          <GlassCard>
            <h3 className="text-2xl font-semibold mb-2">University of Essex</h3>
            <p className="text-primary font-semibold mb-2">BA International Economics (First‑Class)</p>
            <p className="text-muted-foreground mb-4">2021–2025 · Dean's List</p>
            <p className="text-muted-foreground">
              Relevant: Markets, Trade Policy, Quantitative Methods, Micro/Macro (intermediate)
            </p>
          </GlassCard>

          <GlassCard>
            <h3 className="text-2xl font-semibold mb-2">Code Institute</h3>
            <p className="text-primary font-semibold mb-2">Data Analytics & AI</p>
            <p className="text-muted-foreground mb-4">Nov 2025 → Mar 2026 (ongoing)</p>
            <p className="text-muted-foreground">
              Python foundations → NumPy/Pandas → Visualisation (Matplotlib/Plotly) → EDA & Dashboards
              (Power BI/Tableau) → ML fundamentals → AI ethics → Capstone
            </p>
          </GlassCard>

          <GlassCard>
            <h3 className="text-2xl font-semibold mb-2">Old Swinford Hospital Sixth Form</h3>
            <p className="text-primary font-semibold mb-2">A‑Levels</p>
            <p className="text-muted-foreground">Economics (B), Psychology (B), Chemistry (D)</p>
          </GlassCard>
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills">
        <SectionHeader overline="Capabilities" title="Skills" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <GlassCard>
            <h4 className="text-lg font-semibold mb-3 text-primary">Strategy & Ops</h4>
            <p className="text-muted-foreground">
              Research sprints, positioning, go‑to‑market, outreach
            </p>
          </GlassCard>

          <GlassCard>
            <h4 className="text-lg font-semibold mb-3 text-primary">Data & Analysis</h4>
            <p className="text-muted-foreground">
              Excel, Power BI, structured problem solving; learning Python, NumPy, Pandas
            </p>
          </GlassCard>

          <GlassCard>
            <h4 className="text-lg font-semibold mb-3 text-primary">Product & Brand</h4>
            <p className="text-muted-foreground">UX writing, content systems, visual direction</p>
          </GlassCard>

          <GlassCard>
            <h4 className="text-lg font-semibold mb-3 text-primary">Tools</h4>
            <p className="text-muted-foreground">
              SAP, Excel, Power BI, Canva; Jupyter, Git basics (in progress)
            </p>
          </GlassCard>

          <GlassCard>
            <h4 className="text-lg font-semibold mb-3 text-primary">People</h4>
            <p className="text-muted-foreground">
              Cross‑functional coordination; clear, warm communication
            </p>
          </GlassCard>

          <GlassCard>
            <h4 className="text-lg font-semibold mb-3 text-primary">Learning Path</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Nov 2025: Python core</li>
              <li>• Dec 2025: NumPy, Pandas</li>
              <li>• Jan 2026: EDA, dashboards</li>
              <li>• Feb 2026: ML, AI ethics</li>
              <li>• Mar 2026: Capstone</li>
            </ul>
          </GlassCard>
        </div>
      </Section>

      {/* Certifications Section */}
      <Section id="certifications">
        <SectionHeader overline="Credentials" title="Certifications" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <GlassCard>
            <h4 className="font-semibold mb-2">Microsoft Excel: Basic Formulas & Functions</h4>
            <p className="text-sm text-muted-foreground">Coursera, 2023</p>
          </GlassCard>
          <GlassCard>
            <h4 className="font-semibold mb-2">Global Leadership</h4>
            <p className="text-sm text-muted-foreground">University of Groningen, 2020</p>
          </GlassCard>
          <GlassCard>
            <h4 className="font-semibold mb-2">Mandarin Beginner</h4>
            <p className="text-sm text-muted-foreground">University of Essex, 2022</p>
          </GlassCard>
          <GlassCard>
            <h4 className="font-semibold mb-2">International Relations</h4>
            <p className="text-sm text-muted-foreground">University of Groningen, 2020</p>
          </GlassCard>
          <GlassCard>
            <h4 className="font-semibold mb-2">Duke of Edinburgh</h4>
            <p className="text-sm text-muted-foreground">Bronze, 2018</p>
          </GlassCard>
        </div>
      </Section>

      {/* Dissertation Section */}
      <Section id="dissertation">
        <SectionHeader overline="Research" title="Dissertation" />
        <GlassCard className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4 text-primary">
            How do fintech innovations influence competitive dynamics and market concentration in banking?
          </h3>
          <p className="text-muted-foreground mb-6">
            A literature‑informed analysis of fintech's structural impact on banks' competitive behaviour. I
            explore how scale and networks can entrench incumbents or empower entrants, and what
            policy/design levers moderate concentration.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="outline">Read Abstract</Button>
            <Button variant="outline">Request Full PDF</Button>
          </div>
        </GlassCard>
      </Section>

      {/* Contact Section */}
      <Section id="contact">
        <SectionHeader overline="Get in touch" title="Contact" />
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-6">
            <GlassCard>
              <div className="flex items-center gap-3 mb-2">
                <Mail className="text-primary" />
                <h4 className="font-semibold">Email</h4>
              </div>
              <a
                href="mailto:giapereira31@gmail.com"
                className="text-primary hover:underline"
              >
                giapereira31@gmail.com
              </a>
            </GlassCard>

            <GlassCard>
              <div className="flex items-center gap-3 mb-2">
                <Linkedin className="text-primary" />
                <h4 className="font-semibold">LinkedIn</h4>
              </div>
              <a
                href="https://linkedin.com/in/gia-pereira-3279631a4"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                /in/gia-pereira-3279631a4
              </a>
            </GlassCard>

            <p className="text-sm text-muted-foreground">
              I reply within 72 hours. Your information is kept private.
            </p>
          </div>

          <GlassCard>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-gradient-to-r from-secondary to-primary">
                Send Message
              </Button>
            </form>
          </GlassCard>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Gia Pereira. Built with clarity, care, and cosmic vibes.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
