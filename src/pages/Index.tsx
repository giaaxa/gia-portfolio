import { useEffect, useState } from "react";
import { Mail, ExternalLink, Send, Award } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Section, SectionHeader } from "@/components/Section";
import { GlassCard } from "@/components/GlassCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Starfield } from "@/components/Starfield";
import heroPortrait from "@/assets/hero-portrait.jpg";
import holiImage from "@/assets/holi-festival.jpg";
import diwaliImage from "@/assets/diwali-stage.jpg";
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
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up");
        }
      });
    }, observerOptions);

    document.querySelectorAll(".observe-fade").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <Starfield />
      <Navbar />

      {/* Hero Section */}
      <Section id="home" className="flex items-center justify-center relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          <div className="space-y-6 order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight observe-fade">
              <span className="text-gradient">
                Building thoughtful systems at the edge of AI and design.
              </span>
            </h1>
            <p className="text-xl text-muted-foreground observe-fade animate-delay-100">
              First Class Economics graduate. Ex IBM. Building ManaVerse. Studying Data Analytics and AI at Code Institute. Data driven.
            </p>
            <div className="flex flex-wrap gap-4 observe-fade animate-delay-200">
              <Button asChild size="lg" className="rounded-full">
                <a href="#manaverse">View Work</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <a href="/assets/Gia_Pereira_CV.pdf" download>
                  Download CV
                </a>
              </Button>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center observe-fade animate-delay-100">
            <div className="relative max-w-[420px] w-full aspect-[4/5] rounded-2xl overflow-hidden glow-purple">
              <img
                src={heroPortrait}
                alt="Gia Pereira professional portrait with purple accent lighting"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* About Section */}
      <Section id="about">
        <SectionHeader overline="Get to know me" title="About" />
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4 observe-fade">
            <p className="text-lg leading-relaxed text-foreground">
              I'm Gia Pereira. I blend brand thinking, data and design to build products that people use. I lead teams with clarity and care. Currently prototyping ManaVerse. I am also studying full time Data Analytics and AI at Code Institute and learning Python to transition into a technical founder.
            </p>
          </div>

          <GlassCard className="p-6 space-y-3 observe-fade animate-delay-100">
            <h3 className="text-xl font-semibold text-primary mb-4">Fast facts</h3>
            <p className="text-foreground">Dean's List at the University of Essex.</p>
            <p className="text-foreground">President of the Hindu Society and the Economics Society.</p>
            <p className="text-foreground">IBM placement as Junior SAP Consultant. Brand and Social Strategy at Aesthetica.</p>
            <p className="text-foreground">Now recruiting, testing and building the foundation for ManaVerse.</p>
          </GlassCard>
        </div>
      </Section>

      {/* Highlights Section */}
      <Section id="highlights">
        <SectionHeader overline="Impact snapshots" title="Highlights" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <GlassCard className="p-6 text-center observe-fade">
            <div className="text-4xl font-bold text-primary mb-2">1,000+</div>
            <p className="text-muted-foreground">Holi festival attendance over one thousand</p>
          </GlassCard>

          <GlassCard className="p-6 text-center observe-fade animate-delay-100">
            <div className="text-4xl font-bold text-primary mb-2">150+</div>
            <p className="text-muted-foreground">Diwali ball one hundred fifty plus</p>
          </GlassCard>

          <GlassCard className="p-6 text-center observe-fade animate-delay-200">
            <div className="text-4xl font-bold text-primary mb-2">60+</div>
            <p className="text-muted-foreground">Society growth to sixty members</p>
          </GlassCard>

          <GlassCard className="p-6 text-center observe-fade animate-delay-300">
            <div className="text-4xl font-bold text-primary mb-2">+40%</div>
            <p className="text-muted-foreground">LinkedIn engagement up forty percent</p>
          </GlassCard>

          <GlassCard className="p-6 text-center observe-fade animate-delay-100">
            <Award className="w-8 h-8 text-primary mx-auto mb-3" />
            <p className="text-muted-foreground">Led cross functional finance testing coordinating offshore teams at IBM</p>
          </GlassCard>

          <GlassCard className="p-6 text-center observe-fade animate-delay-200">
            <Award className="w-8 h-8 text-primary mx-auto mb-3" />
            <p className="text-muted-foreground">Dean's List and First Class in Economics</p>
          </GlassCard>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="relative rounded-2xl overflow-hidden aspect-video observe-fade">
            <img
              src={holiImage}
              alt="Over one thousand students at university wide Holi Festival showing vibrant colors and celebration"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative rounded-2xl overflow-hidden aspect-video observe-fade animate-delay-100">
            <img
              src={diwaliImage}
              alt="Diwali Ball stage setup with purple and gold lighting and over one hundred fifty attendees"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Featured Section */}
      <Section id="featured">
        <SectionHeader overline="Online presence" title="Featured" />
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <GlassCard className="p-8 text-center space-y-4 observe-fade hover:scale-105 transition-transform">
            <div className="w-full aspect-video rounded-lg overflow-hidden mb-4">
              <img
                src={cosmicOrb}
                alt="ManaShakti demo preview showing the interface design"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-foreground">ManaShakti Demo</h3>
            <Button asChild size="lg" className="w-full rounded-full">
              <a href="https://manashakti.xyz/" target="_blank" rel="noopener noreferrer">
                View Demo
                <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </GlassCard>

          <GlassCard className="p-8 text-center space-y-4 observe-fade animate-delay-100 hover:scale-105 transition-transform">
            <div className="w-full aspect-video rounded-lg overflow-hidden mb-4 bg-muted flex items-center justify-center">
              <p className="text-muted-foreground">Social media portfolio thumbnail</p>
            </div>
            <h3 className="text-xl font-semibold text-foreground">Social Media Portfolio</h3>
            <Button asChild size="lg" variant="outline" className="w-full rounded-full">
              <a href="#contact">
                Get Link
                <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </GlassCard>
        </div>
      </Section>

      {/* ManaVerse Section */}
      <Section id="manaverse">
        <SectionHeader overline="Flagship project" title="ManaVerse" />
        
        <div className="space-y-12">
          <p className="text-xl leading-relaxed text-foreground max-w-4xl observe-fade">
            We're building ManaVerse, a movement and ecosystem designed to merge consciousness, technology, and design into everyday life. Our vision is to make mental clarity, emotional intelligence, and inner awareness as habitual as checking your phone.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* ManaBand */}
            <GlassCard className="p-8 space-y-6 observe-fade">
              <h3 className="text-2xl font-bold text-primary">ManaBand</h3>
              <p className="text-foreground leading-relaxed">
                A privacy first wristband that supports breath pacing and tracks HRV, EDA, motion and sleep. It contributes to a simple Prana Score and gives gentle nudges.
              </p>
              <div className="aspect-video rounded-lg overflow-hidden bg-muted relative">
                <img
                  src={manabandImage}
                  alt="ManaBand wristband device showing sleek design and interface"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-background/80">
                  <p className="text-sm text-muted-foreground px-4 text-center">
                    ManaBand concept video (replace src with Loom or YouTube link)
                  </p>
                </div>
              </div>
            </GlassCard>

            {/* Brain Stone */}
            <GlassCard className="p-8 space-y-6 observe-fade animate-delay-100">
              <h3 className="text-2xl font-bold text-primary">Mana Brain Stone</h3>
              <p className="text-foreground leading-relaxed">
                A small off phone companion for quick resets. Tap to begin a practice. Long press for an emergency reset. The light breathes to guide attention. The app handles deeper work.
              </p>
              <div className="aspect-[3/2] rounded-lg overflow-hidden bg-muted flex items-center justify-center">
                <p className="text-sm text-muted-foreground px-4 text-center">
                  Brain Stone image placeholder
                </p>
              </div>
            </GlassCard>
          </div>

          {/* Early Traction */}
          <GlassCard className="p-8 observe-fade">
            <h3 className="text-2xl font-bold text-primary mb-6">Early traction</h3>
            <div className="space-y-3 text-foreground">
              <p>One hundred three survey responses with full consent.</p>
              <p>Fifty plus people on the waitlist.</p>
              <p>Ninety four point four percent of views were organic.</p>
            </div>
          </GlassCard>

          <p className="text-sm text-muted-foreground text-center observe-fade">
            Make your mind YOUR home.
          </p>
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience">
        <SectionHeader overline="Work history" title="Experience" />
        <div className="space-y-6">
          <GlassCard className="p-6 observe-fade">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-primary">Brand and Social Strategist</h3>
                <p className="text-muted-foreground">Aesthetica Studio</p>
              </div>
              <p className="text-sm text-muted-foreground">Apr 2024 to Aug 2024 · Remote</p>
            </div>
            <ul className="space-y-2 text-foreground">
              <li>End to end brand and content systems for AI first campaigns.</li>
              <li>Direct founder collaboration. Engagement increased. Inbound interest increased.</li>
              <li>Rapid research and positioning kits.</li>
            </ul>
          </GlassCard>

          <GlassCard className="p-6 observe-fade animate-delay-100">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-primary">SAP Junior Consultant</h3>
                <p className="text-muted-foreground">IBM</p>
              </div>
              <p className="text-sm text-muted-foreground">Aug 2023 to Aug 2024 · London</p>
            </div>
            <ul className="space-y-2 text-foreground">
              <li>Led finance testing coordination. Offshore team synchronization.</li>
              <li>Contributed to GenAI Implementation Initiative.</li>
              <li>Operations strategies for large SAP projects. Team events fifty plus attendees.</li>
            </ul>
          </GlassCard>

          <GlassCard className="p-6 observe-fade animate-delay-200">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-primary">Content Writer</h3>
                <p className="text-muted-foreground">DPU</p>
              </div>
              <p className="text-sm text-muted-foreground">Jul 2019 to Present · Remote</p>
            </div>
            <ul className="space-y-2 text-foreground">
              <li>Finance articles for APAC banks. Clear and actionable.</li>
              <li>LinkedIn strategy resulted in forty percent engagement increase.</li>
            </ul>
          </GlassCard>

          <div className="flex justify-center mt-8 observe-fade">
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <a href="/assets/Gia_Pereira_CV.pdf" download>
                Download CV
              </a>
            </Button>
          </div>
        </div>
      </Section>

      {/* Education Section */}
      <Section id="education">
        <SectionHeader overline="Academic background" title="Education" />
        <div className="space-y-6">
          <GlassCard className="p-6 observe-fade">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-primary">
                  BA International Economics (First Class)
                </h3>
                <p className="text-muted-foreground">University of Essex</p>
              </div>
              <p className="text-sm text-muted-foreground">2021 to 2025 · Dean's List</p>
            </div>
            <p className="text-foreground">
              Relevant modules included Markets, Trade Policy, Quantitative Methods, Intermediate Microeconomics and Macroeconomics.
            </p>
          </GlassCard>

          <GlassCard className="p-6 observe-fade animate-delay-100">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-primary">Data Analytics and AI</h3>
                <p className="text-muted-foreground">Code Institute</p>
              </div>
              <p className="text-sm text-muted-foreground">November 2025 to March 2026 (ongoing)</p>
            </div>
            <p className="text-foreground">
              Python foundations then NumPy and Pandas then Visualisation with Matplotlib and Plotly then EDA and Dashboards with Power BI and Tableau then ML fundamentals then AI ethics then Capstone.
            </p>
          </GlassCard>

          <GlassCard className="p-6 observe-fade animate-delay-200">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-primary">A Levels</h3>
                <p className="text-muted-foreground">Old Swinford Hospital Sixth Form</p>
              </div>
            </div>
            <p className="text-foreground">Economics (B), Psychology (B), Chemistry (D)</p>
          </GlassCard>
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills">
        <SectionHeader overline="Capabilities" title="Skills" />
        <div className="grid md:grid-cols-2 gap-6">
          <GlassCard className="p-6 observe-fade">
            <h3 className="text-lg font-semibold text-primary mb-3">Strategy and Operations</h3>
            <p className="text-foreground">
              Research sprints and positioning and go to market and outreach.
            </p>
          </GlassCard>

          <GlassCard className="p-6 observe-fade animate-delay-100">
            <h3 className="text-lg font-semibold text-primary mb-3">Data and Analysis</h3>
            <p className="text-foreground">
              Excel and Power BI and structured problem solving. Learning Python and NumPy and Pandas.
            </p>
          </GlassCard>

          <GlassCard className="p-6 observe-fade animate-delay-200">
            <h3 className="text-lg font-semibold text-primary mb-3">Product and Brand</h3>
            <p className="text-foreground">
              UX writing and content systems and visual direction.
            </p>
          </GlassCard>

          <GlassCard className="p-6 observe-fade animate-delay-300">
            <h3 className="text-lg font-semibold text-primary mb-3">Tools</h3>
            <p className="text-foreground">
              SAP and Excel and Power BI and Canva. Jupyter and Git basics in progress.
            </p>
          </GlassCard>

          <GlassCard className="p-6 observe-fade animate-delay-100">
            <h3 className="text-lg font-semibold text-primary mb-3">People</h3>
            <p className="text-foreground">
              Cross functional coordination. Clear and warm communication.
            </p>
          </GlassCard>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gradient mb-6 observe-fade">Learning Path</h3>
          <div className="space-y-4">
            <GlassCard className="p-4 observe-fade">
              <div className="flex items-start gap-4">
                <div className="text-primary font-bold min-w-[100px]">Nov 2025</div>
                <p className="text-foreground">
                  Python core with variables and types and flow control and iteration.
                </p>
              </div>
            </GlassCard>

            <GlassCard className="p-4 observe-fade animate-delay-100">
              <div className="flex items-start gap-4">
                <div className="text-primary font-bold min-w-[100px]">Dec 2025</div>
                <p className="text-foreground">
                  Data wrangling with NumPy and Pandas. Data sources and governance. Matplotlib and Plotly.
                </p>
              </div>
            </GlassCard>

            <GlassCard className="p-4 observe-fade animate-delay-200">
              <div className="flex items-start gap-4">
                <div className="text-primary font-bold min-w-[100px]">Jan 2026</div>
                <p className="text-foreground">
                  Probability and EDA and dashboards with Power BI and Tableau and Qlik.
                </p>
              </div>
            </GlassCard>

            <GlassCard className="p-4 observe-fade animate-delay-300">
              <div className="flex items-start gap-4">
                <div className="text-primary font-bold min-w-[100px]">Feb 2026</div>
                <p className="text-foreground">
                  ML with Python including regression and clustering and evaluation. Case studies. AI ethics.
                </p>
              </div>
            </GlassCard>

            <GlassCard className="p-4 observe-fade">
              <div className="flex items-start gap-4">
                <div className="text-primary font-bold min-w-[100px]">Mar 2026</div>
                <p className="text-foreground">Capstone and Hackathon 2. Careers support.</p>
              </div>
            </GlassCard>
          </div>
        </div>
      </Section>

      {/* Certifications Section */}
      <Section id="certifications">
        <SectionHeader overline="Credentials" title="Certifications" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <GlassCard className="p-6 text-center observe-fade">
            <Award className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="font-semibold text-foreground mb-2">Microsoft Excel</h3>
            <p className="text-sm text-muted-foreground">Basic Formulas and Functions</p>
            <p className="text-xs text-muted-foreground mt-2">Coursera, 2023</p>
          </GlassCard>

          <GlassCard className="p-6 text-center observe-fade animate-delay-100">
            <Award className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="font-semibold text-foreground mb-2">Global Leadership</h3>
            <p className="text-sm text-muted-foreground">University of Groningen</p>
            <p className="text-xs text-muted-foreground mt-2">2020</p>
          </GlassCard>

          <GlassCard className="p-6 text-center observe-fade animate-delay-200">
            <Award className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="font-semibold text-foreground mb-2">Mandarin Beginner</h3>
            <p className="text-sm text-muted-foreground">University of Essex</p>
            <p className="text-xs text-muted-foreground mt-2">2022</p>
          </GlassCard>

          <GlassCard className="p-6 text-center observe-fade animate-delay-300">
            <Award className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="font-semibold text-foreground mb-2">International Relations</h3>
            <p className="text-sm text-muted-foreground">University of Groningen</p>
            <p className="text-xs text-muted-foreground mt-2">2020</p>
          </GlassCard>

          <GlassCard className="p-6 text-center observe-fade">
            <Award className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="font-semibold text-foreground mb-2">Duke of Edinburgh</h3>
            <p className="text-sm text-muted-foreground">Bronze</p>
            <p className="text-xs text-muted-foreground mt-2">2018</p>
          </GlassCard>
        </div>
      </Section>

      {/* Dissertation Section */}
      <Section id="dissertation">
        <SectionHeader overline="Research" title="Dissertation" />
        <GlassCard className="p-8 max-w-4xl mx-auto observe-fade">
          <h3 className="text-2xl font-bold text-primary mb-4">
            How do fintech innovations influence competitive dynamics and market concentration in banking?
          </h3>
          <p className="text-foreground leading-relaxed mb-6">
            A literature informed analysis of fintech's structural impact on banks' competitive behaviour. I explore how scale and networks can entrench incumbents or empower entrants, and what policy and design levers moderate concentration.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="outline" className="rounded-full">
              Read Abstract
            </Button>
            <Button variant="outline" className="rounded-full">
              Request Full PDF
            </Button>
          </div>
        </GlassCard>
      </Section>

      {/* Contact Section */}
      <Section id="contact">
        <SectionHeader overline="Get in touch" title="Contact" />
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="space-y-6 observe-fade">
            <GlassCard className="p-6">
              <div className="flex items-center gap-3 mb-2">
                <Mail className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-foreground">Email</h3>
              </div>
              <a
                href="mailto:manaashakti@gmail.com"
                className="text-primary hover:underline"
              >
                manaashakti@gmail.com
              </a>
            </GlassCard>

            <GlassCard className="p-6">
              <div className="flex items-center gap-3 mb-2">
                <ExternalLink className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-foreground">Website</h3>
              </div>
              <a
                href="https://manashakti.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                https://manashakti.app/
              </a>
            </GlassCard>

            <p className="text-sm text-muted-foreground">
              I usually reply within seventy two hours.
            </p>
          </div>

          <GlassCard className="p-6 observe-fade animate-delay-100">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                />
              </div>
              <Button type="submit" className="w-full rounded-full">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </GlassCard>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border/50 relative z-10">
        <div className="max-w-7xl mx-auto text-center text-sm text-muted-foreground">
          <p>Built with clarity and care</p>
          <p className="mt-2">© {new Date().getFullYear()} Gia Pereira. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
