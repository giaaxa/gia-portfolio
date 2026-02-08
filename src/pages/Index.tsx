import { useState } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowUpRight, Mail, Send, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { ProjectCard } from "@/components/ProjectCard";
import {
  Seed, Sprout, Leaf,
  AnimatedSeed, AnimatedSprout, AnimatedBloom, AnimatedBranch,
  DotSeparator,
} from "@/components/Botanicals";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CustomCursor } from "@/components/CustomCursor";
import { ScrollProgress } from "@/components/ScrollProgress";
import { MouseGlow } from "@/components/MouseGlow";
import { MagneticWrap } from "@/components/MagneticWrap";
import { TiltCard } from "@/components/TiltCard";
import { Marquee } from "@/components/Marquee";
import { StarField } from "@/components/StarField";
import { CosmicOrb, MoonOrb } from "@/components/CosmicOrb";
import { OrbitalSystem } from "@/components/OrbitalRing";
import heroPortrait from "@/assets/hero-portrait.jpg";
import manaverseLogo from "@/assets/manaverse-logo.png";
import ibmTeam from "@/assets/ibm-team.png";
import aestheticaLogo from "@/assets/aesthetica-logo.png";

// Intentional easing
const ease = [0.4, 0, 0.2, 1] as const;
const springy = [0.34, 1.56, 0.64, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease, delay },
  }),
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

// Hero line-by-line reveal with blur
const heroLine = {
  hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease, delay },
  }),
};

// Clip-path reveal for images
const clipReveal = {
  hidden: { clipPath: "inset(0 100% 0 0)", opacity: 0 },
  visible: (delay: number = 0) => ({
    clipPath: "inset(0 0% 0 0)",
    opacity: 1,
    transition: { duration: 1, ease: [0.77, 0, 0.175, 1] as const, delay },
  }),
};

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const shouldReduceMotion = useReducedMotion();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  // Simplified variants for reduced motion
  const getVariants = (variants: Variants): Variants => {
    if (shouldReduceMotion) {
      return {
        hidden: { opacity: 0 },
        visible: () => ({ opacity: 1, transition: { duration: 0.01 } }),
      };
    }
    return variants;
  };

  const tools = ["Python", "SQL", "Power BI", "Figma", "Notion", "Canva", "CapCut", "DaVinci Resolve"];

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-cosmic-void">
      {/* Global effects */}
      <CustomCursor />
      <ScrollProgress />
      <MouseGlow />
      <Navbar />

      {/* ========== HERO (COSMIC) ========== */}
      <section id="home" className="min-h-[90vh] flex items-center pt-28 pb-16 px-6 relative bg-cosmic-section overflow-hidden">
        {/* Cosmic background elements */}
        <StarField starCount={100} />
        <CosmicOrb size={400} x="85%" y="20%" color="violet" parallaxSpeed={0.3} glowIntensity={0.6} />
        <MoonOrb x="10%" y="70%" parallaxSpeed={0.6} />
        <OrbitalSystem x="80%" y="30%" baseSize={350} />

        <div className="max-w-[1080px] mx-auto w-full relative z-10">
          <div className="flex flex-col md:flex-row md:items-center gap-10 md:gap-16">
            {/* Portrait with clip-path reveal */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={getVariants(clipReveal)}
              custom={0.2}
              className="flex-shrink-0"
            >
              <div className="relative group">
                <div className="w-36 h-36 md:w-44 md:h-44 rounded-2xl overflow-hidden border border-cosmic-violet/30 shadow-lg shadow-cosmic-violet/20">
                  <img
                    src={heroPortrait}
                    alt="Gia Pereira"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                {/* Cosmic glow behind portrait */}
                <motion.div
                  className="absolute -bottom-3 -right-3"
                  initial={shouldReduceMotion ? {} : { scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1.4, duration: 0.5, ease: springy }}
                >
                  <Sprout size={28} color="#c4b5fd" />
                </motion.div>
                <div className="absolute -inset-4 rounded-3xl bg-cosmic-violet/20 -z-10 blur-xl" />
              </div>
            </motion.div>

            {/* Hero text - line by line with blur */}
            <div className="flex-1 space-y-6">
              <div>
                <motion.h1
                  className="font-serif text-cosmic-primary leading-[1.08]"
                  style={{ color: '#f0eef5' }}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.span
                    className="block"
                    variants={getVariants(heroLine)}
                    custom={0.2}
                  >
                    The future isn't just
                  </motion.span>
                  <motion.span
                    className="block"
                    variants={getVariants(heroLine)}
                    custom={0.4}
                  >
                    smarter tech.
                  </motion.span>
                  <motion.span
                    className="block mt-1"
                    variants={getVariants(heroLine)}
                    custom={0.6}
                  >
                    It's{" "}
                    <span className="font-semibold bg-gradient-to-r from-cosmic-purple via-cosmic-violet to-sage bg-clip-text text-transparent">
                      stronger minds.
                    </span>
                  </motion.span>
                </motion.h1>
              </div>

              <motion.p
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.6, ease }}
                className="text-lg md:text-xl leading-relaxed max-w-lg text-cosmic-secondary"
                style={{ color: 'rgba(240, 238, 245, 0.65)' }}
              >
                I'm Gia — Ex-IBM, first class econ graduate and founder of ManaVerse to make mental clarity as easy as checking your phone.
              </motion.p>

              <motion.div
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6, ease }}
                className="flex flex-wrap gap-3 pt-2"
              >
                <MagneticWrap strength={0.2}>
                  <a
                    href="#focus"
                    className="inline-flex items-center gap-2 text-sm font-medium px-6 py-3 rounded-full bg-cosmic-violet text-white hover:bg-cosmic-purple active:scale-[0.98] transition-all duration-300 touch-feedback focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cosmic-glow hover:shadow-[0_4px_30px_rgba(124,58,237,0.4)]"
                  >
                    See what I'm building
                  </a>
                </MagneticWrap>
                <MagneticWrap strength={0.2}>
                  <a
                    href="#connect"
                    className="inline-flex items-center gap-2 text-sm font-medium px-6 py-3 rounded-full border border-cosmic-glow/30 text-cosmic-glow hover:border-cosmic-glow/60 hover:text-white active:scale-[0.98] transition-all duration-300 touch-feedback focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cosmic-glow hover:shadow-[0_4px_30px_rgba(196,181,253,0.2)]"
                  >
                    Let's connect
                  </a>
                </MagneticWrap>
              </motion.div>

              <motion.div
                initial={shouldReduceMotion ? {} : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6, duration: 0.5 }}
                className="flex flex-wrap items-center gap-3 text-xs"
                style={{ color: 'rgba(240, 238, 245, 0.4)' }}
              >
                <span className="flex items-center gap-1.5">
                  <Seed size={14} color="#c4b5fd" />
                  Currently building
                </span>
                <span className="w-px h-3 bg-cosmic-glow/20" />
                <span>Studying Data & AI</span>
                <span className="w-px h-3 bg-cosmic-glow/20" />
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  Birmingham, UK
                </span>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== WHAT I DO - 3 Pillars (COSMIC) ========== */}
      <section id="pillars" className="py-20 px-6 bg-cosmic-section relative overflow-hidden">
        <StarField starCount={40} />
        <MoonOrb x="92%" y="25%" parallaxSpeed={0.5} />

        <div className="max-w-[1080px] mx-auto relative z-10">
          <motion.div
            className="mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={getVariants(fadeUp)}
          >
            <h2 className="font-serif mb-3" style={{ color: '#f0eef5' }}>What I do</h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={getVariants(fadeUp)} className="card-cosmic p-8 border-l-[3px] border-l-cosmic-violet">
              <div className="flex items-center gap-3 mb-4">
                <Sprout size={22} color="#c4b5fd" />
                <h3 className="font-serif" style={{ color: '#f0eef5' }}>Build</h3>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(240, 238, 245, 0.6)' }}>
                I ship products. Currently prototyping ManaVerse hardware and an app for breath-based mental clarity. Previously built Richual and Aesthetica Studio.
              </p>
            </motion.div>

            <motion.div variants={getVariants(fadeUp)} className="card-cosmic p-8 border-l-[3px] border-l-cosmic-purple">
              <div className="flex items-center gap-3 mb-4">
                <Leaf size={22} color="#a78bfa" />
                <h3 className="font-serif" style={{ color: '#f0eef5' }}>Lead</h3>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(240, 238, 245, 0.6)' }}>
                I move people. Led university societies, coordinated cross-functional teams at IBM, and now building community around consciousness and tech in Birmingham.
              </p>
            </motion.div>

            <motion.div variants={getVariants(fadeUp)} className="card-cosmic p-8 border-l-[3px] border-l-cosmic-indigo">
              <div className="flex items-center gap-3 mb-4">
                <Seed size={22} color="#818cf8" />
                <h3 className="font-serif" style={{ color: '#f0eef5' }}>Learn</h3>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(240, 238, 245, 0.6)' }}>
                I study every day. Data Analytics and AI diploma at Code Institute. Python, SQL, and Power BI. Becoming a technical founder who can build, not just strategize.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ========== CURRENT FOCUS (COSMIC) ========== */}
      <section id="focus" className="py-20 px-6 bg-cosmic-section relative overflow-hidden">
        <StarField starCount={60} />
        <CosmicOrb size={250} x="5%" y="30%" color="indigo" parallaxSpeed={0.4} glowIntensity={0.5} />
        <MoonOrb x="95%" y="60%" parallaxSpeed={0.7} />

        <div className="max-w-[1080px] mx-auto relative z-10">
          <motion.div
            className="mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={getVariants(fadeUp)}
          >
            <h2 className="font-serif mb-3" style={{ color: '#f0eef5' }}>What I'm building now</h2>
            <p style={{ color: 'rgba(240, 238, 245, 0.5)' }}>Where my energy goes.</p>
          </motion.div>

          <div className="space-y-10">
            {/* ManaVerse Feature Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={getVariants(fadeUp)}
              custom={0}
              className="card-cosmic p-8 md:p-10"
            >
              <div className="flex items-center gap-3 mb-6">
                <Sprout size={24} color="#c4b5fd" />
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-cosmic-violet/20 text-cosmic-glow border border-cosmic-violet/30">
                  Primary focus
                </span>
              </div>
              <h3 className="font-serif text-2xl md:text-3xl mb-4" style={{ color: '#f0eef5' }}>
                ManaVerse
              </h3>
              <p className="leading-relaxed max-w-2xl mb-8" style={{ color: 'rgba(240, 238, 245, 0.6)' }}>
                Building wellness tech that makes mental clarity as habitual as checking your phone. Privacy-first wearables that track HRV, breath, and movement with gentle nudges — not surveillance.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="p-5 rounded-xl bg-cosmic-deep/50 border border-cosmic-violet/20 hover:border-cosmic-violet/40 transition-colors duration-300">
                  <h4 className="font-serif mb-2" style={{ color: '#f0eef5' }}>ManaBand</h4>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(240, 238, 245, 0.55)' }}>
                    A wristband that supports breath pacing and tracks HRV, EDA, and sleep. Contributes to a simple Prana Score.
                  </p>
                </div>
                <div className="p-5 rounded-xl bg-cosmic-deep/50 border border-cosmic-violet/20 hover:border-cosmic-violet/40 transition-colors duration-300">
                  <h4 className="font-serif mb-2" style={{ color: '#f0eef5' }}>Brain Stone</h4>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(240, 238, 245, 0.55)' }}>
                    A small off-phone companion for quick resets. Tap to begin. Long press for emergency reset. The light breathes.
                  </p>
                </div>
              </div>

              {/* Traction - Cosmic Growth Indicators */}
              <div className="flex flex-wrap gap-8 pt-4 border-t border-cosmic-violet/20">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-cosmic-violet/20 flex items-center justify-center">
                    <AnimatedSprout size={18} color="#c4b5fd" />
                  </div>
                  <div>
                    <p className="text-xl font-serif" style={{ color: '#f0eef5' }}>103</p>
                    <p className="text-xs" style={{ color: 'rgba(240, 238, 245, 0.4)' }}>survey responses</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-cosmic-violet/20 flex items-center justify-center">
                    <AnimatedSeed size={16} color="#a78bfa" />
                  </div>
                  <div>
                    <p className="text-xl font-serif" style={{ color: '#f0eef5' }}>50+</p>
                    <p className="text-xs" style={{ color: 'rgba(240, 238, 245, 0.4)' }}>waitlist signups</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-cosmic-violet/20 flex items-center justify-center">
                    <AnimatedBloom size={18} color="#c4b5fd" />
                  </div>
                  <div>
                    <p className="text-xl font-serif" style={{ color: '#f0eef5' }}>94%</p>
                    <p className="text-xs" style={{ color: 'rgba(240, 238, 245, 0.4)' }}>organic reach</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Other current activities */}
            <motion.div
              className="grid md:grid-cols-2 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={stagger}
            >
              <motion.div variants={getVariants(fadeUp)} className="card-cosmic p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Seed size={18} color="#a78bfa" />
                  <span className="text-xs font-medium" style={{ color: 'rgba(240, 238, 245, 0.45)' }}>Learning</span>
                </div>
                <h3 className="font-serif mb-2" style={{ color: '#f0eef5' }}>Data Analytics & AI</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(240, 238, 245, 0.55)' }}>
                  Code Institute diploma. Building with Python, SQL, Power BI. Becoming technical enough to prototype my own ideas.
                </p>
              </motion.div>

              <motion.div variants={getVariants(fadeUp)} className="card-cosmic p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Leaf size={18} color="#a78bfa" />
                  <span className="text-xs font-medium" style={{ color: 'rgba(240, 238, 245, 0.45)' }}>Community</span>
                </div>
                <h3 className="font-serif mb-2" style={{ color: '#f0eef5' }}>Building in Birmingham</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(240, 238, 245, 0.55)' }}>
                  Growing @usecodegia — sharing the journey of building in public. Connecting with other founders, makers, and people who care about consciousness x tech.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== PAST WORK (COSMIC) — 3D Tilt Cards ========== */}
      <section id="work" className="py-20 px-6 bg-cosmic-section relative overflow-hidden">
        <StarField starCount={50} />
        <CosmicOrb size={200} x="90%" y="20%" color="purple" parallaxSpeed={0.5} glowIntensity={0.4} />
        <OrbitalSystem x="15%" y="70%" baseSize={280} />

        <div className="max-w-[1080px] mx-auto relative z-10">
          <motion.div
            className="mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={getVariants(fadeUp)}
          >
            <h2 className="font-serif mb-3" style={{ color: '#f0eef5' }}>What I've built</h2>
            <p style={{ color: 'rgba(240, 238, 245, 0.5)' }}>Range, not repetition.</p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
          >
            <motion.div variants={getVariants(fadeUp)}>
              <TiltCard tiltStrength={8}>
                <ProjectCard
                  title="ManaVerse"
                  description="Wellness tech startup building privacy-first wearables and an app for mental clarity."
                  tags={["Founder", "Product", "Hardware"]}
                  image={manaverseLogo}
                  link="https://manashakti.app/"
                  role="Founder"
                  year="2024"
                  external
                  cosmic
                />
              </TiltCard>
            </motion.div>

            <motion.div variants={getVariants(fadeUp)}>
              <TiltCard tiltStrength={8}>
                <ProjectCard
                  title="IBM SAP Consulting"
                  description="Coordinated finance testing across global enterprise teams. Contributed to GenAI initiatives."
                  tags={["Consulting", "Finance", "AI"]}
                  image={ibmTeam}
                  link="#about"
                  role="Junior Consultant"
                  year="2023"
                  cosmic
                />
              </TiltCard>
            </motion.div>

            <motion.div variants={getVariants(fadeUp)}>
              <TiltCard tiltStrength={8}>
                <ProjectCard
                  title="Aesthetica Studio"
                  description="Creative direction and brand strategy for a boutique design studio."
                  tags={["Brand", "Strategy", "Design"]}
                  image={aestheticaLogo}
                  link="#about"
                  role="Creative Director"
                  year="2022"
                  cosmic
                />
              </TiltCard>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={getVariants(fadeUp)}
            custom={0.2}
            className="mt-8 flex items-center gap-3 text-sm"
            style={{ color: 'rgba(240, 238, 245, 0.45)' }}
          >
            <DotSeparator />
            <span>
              Also built <span style={{ color: 'rgba(240, 238, 245, 0.6)' }}>Richual</span> — a venture exploring habit-building and daily rituals. Validated and pivoted into ManaVerse.
            </span>
          </motion.div>
        </div>
      </section>

      {/* ========== ABOUT (COSMIC) ========== */}
      <section id="about" className="py-20 px-6 bg-cosmic-section relative overflow-hidden">
        <StarField starCount={45} />
        <CosmicOrb size={180} x="88%" y="40%" color="indigo" parallaxSpeed={0.4} glowIntensity={0.4} />

        <div className="max-w-[1080px] mx-auto relative z-10">
          <motion.div
            className="max-w-2xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
          >
            <motion.h2 variants={getVariants(fadeUp)} className="font-serif mb-6" style={{ color: '#f0eef5' }}>
              A bit about me
            </motion.h2>

            <motion.p variants={getVariants(fadeUp)} className="leading-relaxed mb-6" style={{ color: 'rgba(240, 238, 245, 0.65)' }}>
              I'm Gia. First Class Economics graduate, ex-IBM consultant, and founder learning to build. I believe the future needs more tools for the inner world — not just more screens, more noise, more notifications. I want to build things that help people feel clearer, calmer, and more connected to their own bodies.
            </motion.p>

            <motion.p variants={getVariants(fadeUp)} className="leading-relaxed mb-10" style={{ color: 'rgba(240, 238, 245, 0.65)' }}>
              Right now I'm studying Data Analytics and AI so I can prototype my own ideas. I ship something every week. I build in public because I think the process matters as much as the product.
            </motion.p>

            {/* Tools — Infinite Marquee */}
            <motion.div variants={getVariants(fadeUp)}>
              <p className="text-xs font-medium uppercase tracking-wider mb-4" style={{ color: 'rgba(240, 238, 245, 0.4)' }}>Tools I use</p>
              <Marquee speed={25} pauseOnHover>
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-4 py-2 text-sm rounded-full bg-cosmic-deep/60 border border-cosmic-violet/30 hover:border-cosmic-violet/60 transition-colors duration-300 whitespace-nowrap"
                    style={{ color: 'rgba(240, 238, 245, 0.6)' }}
                  >
                    {tool}
                  </span>
                ))}
              </Marquee>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ========== CONNECT (COSMIC) ========== */}
      <section id="connect" className="py-20 px-6 bg-cosmic-section relative overflow-hidden">
        <StarField starCount={55} />
        <OrbitalSystem x="85%" y="30%" baseSize={300} />
        <MoonOrb x="8%" y="60%" parallaxSpeed={0.6} />

        <div className="max-w-[1080px] mx-auto relative z-10">
          <div className="max-w-3xl mx-auto">
            <motion.div
              className="text-center mb-14"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.div variants={getVariants(fadeUp)} className="flex justify-center mb-4">
                <Sprout size={32} color="#c4b5fd" />
              </motion.div>
              <motion.h2 variants={getVariants(fadeUp)} className="font-serif mb-4" style={{ color: '#f0eef5' }}>
                Let's build together
              </motion.h2>
              <motion.p variants={getVariants(fadeUp)} className="max-w-md mx-auto" style={{ color: 'rgba(240, 238, 245, 0.55)' }}>
                Whether you're a founder, a builder, or someone who resonates with consciousness x tech — I'd love to connect.
              </motion.p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 gap-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={stagger}
            >
              <motion.div variants={getVariants(fadeUp)} className="space-y-5">
                <div>
                  <p className="text-xs uppercase tracking-wider mb-2" style={{ color: 'rgba(240, 238, 245, 0.4)' }}>Email</p>
                  <a
                    href="mailto:hello@manashakti.app"
                    className="flex items-center gap-2 hover:text-cosmic-glow transition-colors duration-300"
                    style={{ color: 'rgba(240, 238, 245, 0.85)' }}
                  >
                    <Mail className="w-4 h-4 text-cosmic-glow" />
                    hello@manashakti.app
                  </a>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider mb-2" style={{ color: 'rgba(240, 238, 245, 0.4)' }}>Social</p>
                  <div className="space-y-2">
                    <a
                      href="https://instagram.com/usecodegia"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 hover:text-cosmic-glow transition-colors duration-300"
                      style={{ color: 'rgba(240, 238, 245, 0.6)' }}
                    >
                      <ArrowUpRight className="w-3.5 h-3.5" />
                      @usecodegia
                    </a>
                    <a
                      href="https://www.linkedin.com/in/gia-pereira-3279631a4/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 hover:text-cosmic-glow transition-colors duration-300"
                      style={{ color: 'rgba(240, 238, 245, 0.6)' }}
                    >
                      <ArrowUpRight className="w-3.5 h-3.5" />
                      LinkedIn
                    </a>
                  </div>
                </div>
                <div className="pt-2">
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(240, 238, 245, 0.45)' }}>
                    I'm always open to conversations about wellness tech, building in public, or partnering on something meaningful. Based in Birmingham but building for everywhere.
                  </p>
                </div>
              </motion.div>

              <motion.form
                variants={getVariants(fadeUp)}
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <Input
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="rounded-xl bg-cosmic-deep/60 border-cosmic-violet/30 focus:border-cosmic-violet focus-visible:ring-cosmic-violet/30 h-11 text-white placeholder:text-white/30 transition-colors duration-300"
                />
                <Input
                  type="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="rounded-xl bg-cosmic-deep/60 border-cosmic-violet/30 focus:border-cosmic-violet focus-visible:ring-cosmic-violet/30 h-11 text-white placeholder:text-white/30 transition-colors duration-300"
                />
                <Textarea
                  placeholder="What's on your mind?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={4}
                  className="rounded-xl bg-cosmic-deep/60 border-cosmic-violet/30 focus:border-cosmic-violet focus-visible:ring-cosmic-violet/30 resize-none text-white placeholder:text-white/30 transition-colors duration-300"
                />
                <MagneticWrap strength={0.15}>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 rounded-full bg-cosmic-violet hover:bg-cosmic-purple active:scale-[0.98] text-white font-medium py-3 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cosmic-glow hover:shadow-[0_4px_30px_rgba(124,58,237,0.4)]"
                  >
                    Send message
                    <Send className="w-4 h-4" />
                  </button>
                </MagneticWrap>
              </motion.form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== FOOTER (COSMIC) ========== */}
      <footer className="py-10 px-6 bg-cosmic-void border-t border-cosmic-violet/20">
        <div className="max-w-[1080px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-sm" style={{ color: 'rgba(240, 238, 245, 0.4)' }}>
            <Leaf size={14} color="#a78bfa" />
            <span>Gia Pereira, 2025</span>
          </div>
          <div className="flex items-center gap-6">
            <Link
              to="/ugc"
              className="text-sm hover:text-cosmic-glow transition-colors duration-300"
              style={{ color: 'rgba(240, 238, 245, 0.4)' }}
            >
              UGC Services
            </Link>
            <a
              href="https://instagram.com/usecodegia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-cosmic-glow transition-colors duration-300"
              style={{ color: 'rgba(240, 238, 245, 0.4)' }}
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/in/gia-pereira-3279631a4/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-cosmic-glow transition-colors duration-300"
              style={{ color: 'rgba(240, 238, 245, 0.4)' }}
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
