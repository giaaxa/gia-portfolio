import { useState } from "react";
import { Video, Camera, FolderOpen, Mail, ChevronRight, MapPin, Sparkles, ExternalLink, Plane, Laptop, Package, Heart } from "lucide-react";
import { Section } from "./Section";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { useToast } from "@/hooks/use-toast";

const features = [
  {
    icon: Video,
    title: "Vertical videos",
    description: "Scroll-stopping Reels and TikToks for any niche"
  },
  {
    icon: Camera,
    title: "Photo sets",
    description: "Curated lifestyle shots ready for listings, feeds, and ads"
  },
  {
    icon: FolderOpen,
    title: "Raw footage",
    description: "All usable clips delivered via Drive"
  }
];

const categories = [
  { icon: Plane, label: "Travel", color: "from-blue-500/20 to-cyan-500/20" },
  { icon: Laptop, label: "Tech", color: "from-violet-500/20 to-purple-500/20" },
  { icon: Package, label: "Products", color: "from-amber-500/20 to-orange-500/20" },
  { icon: Heart, label: "Lifestyle", color: "from-rose-500/20 to-pink-500/20" }
];

const steps = [
  {
    number: "1",
    title: "Share your brief",
    description: "Tell me about your brand, product, or property"
  },
  {
    number: "2",
    title: "Get a content plan",
    description: "I send a shot list + confirm deliverables"
  },
  {
    number: "3",
    title: "Receive content",
    description: "Edited content delivered within 5–10 days"
  }
];

const faqs = [
  {
    question: "Do you need a big following?",
    answer: "No — this is UGC. I create assets for your brand so you can convert viewers. It's about the content quality, not follower count."
  },
  {
    question: "What's included in raw footage?",
    answer: "All usable clips from the shoot delivered via Drive. You get everything that's usable."
  },
  {
    question: "Can I use the content in ads?",
    answer: "Yes — paid ads usage and whitelisting is available. Check my portfolio for pricing details."
  }
];

export const UGCSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    contentType: "",
    name: "",
    email: "",
    brief: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email) {
      toast({
        title: "Please fill in required fields",
        description: "Name and email are required.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Got it — I'll reply soon.",
      description: "Thanks for your interest! I'll review your brief and get back to you.",
    });

    setFormData({
      contentType: "",
      name: "",
      email: "",
      brief: ""
    });
    setIsSubmitting(false);
  };

  return (
    <Section id="ugc" className="scroll-mt-20 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-primary/8 via-primary/4 to-transparent blur-3xl animate-float-orb" />
        <div className="absolute bottom-1/3 left-0 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-primary/6 via-transparent to-transparent blur-3xl animate-float-orb" style={{ animationDelay: '-3s' }} />
      </div>

      {/* Hero Block */}
      <div className="grid lg:grid-cols-[1fr,1fr] gap-12 lg:gap-20 items-center mb-24">
        {/* Text Content */}
        <div className="max-w-lg reveal">
          <span className="text-[11px] px-2.5 py-1 rounded-full bg-muted text-muted-foreground border border-foreground/8 mb-6 inline-flex items-center gap-1.5 font-medium uppercase tracking-wide">
            <Sparkles className="w-3 h-3" />
            UGC Services
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-5 leading-[1.1] tracking-tight">
            UGC
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 font-medium mb-4">
            Scroll-stopping content for brands, stays, and products
          </p>
          <p className="text-muted-foreground text-base leading-relaxed mb-8">
            I create Reels, photos, and video assets for travel, tech, and product brands. This is UGC — it's about the content, not follower count.
          </p>

          <div className="flex flex-wrap gap-3 mb-6">
            <Button 
              asChild
              className="rounded-full px-6 h-12 bg-foreground hover:bg-foreground/90 text-background font-medium touch-feedback shadow-md hover:shadow-lg transition-all"
            >
              <a href="https://gia-pereira.my.canva.site/" target="_blank" rel="noopener noreferrer">
                View Portfolio
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <Button 
              asChild
              variant="outline"
              className="rounded-full px-6 h-12 border-foreground/20 text-foreground hover:bg-foreground/5 font-medium touch-feedback"
            >
              <a href="mailto:gia.pereira31@yahoo.com">
                <Mail className="w-4 h-4 mr-2" />
                Email Me
              </a>
            </Button>
          </div>

          <p className="text-xs text-muted-foreground flex items-center gap-1.5">
            <MapPin className="w-3 h-3" />
            UK-based creator
          </p>
        </div>

        {/* Category Cards - Desktop */}
        <div className="hidden lg:grid grid-cols-2 gap-4 reveal" style={{ transitionDelay: '0.15s' }}>
          {categories.map((category, index) => (
            <div
              key={category.label}
              className={`group relative p-6 rounded-2xl bg-gradient-to-br ${category.color} border border-foreground/8 hover:border-foreground/15 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg cursor-default`}
              style={{ 
                animationDelay: `${index * 0.1}s`,
                transform: index % 2 === 1 ? 'translateY(16px)' : 'none'
              }}
            >
              <category.icon className="w-8 h-8 text-foreground/70 mb-3 group-hover:text-foreground transition-colors" />
              <p className="font-semibold text-foreground">{category.label}</p>
            </div>
          ))}
        </div>

        {/* Category Cards - Mobile horizontal scroll */}
        <div className="lg:hidden flex gap-3 overflow-x-auto pb-2 -mx-6 px-6 snap-x snap-mandatory scrollbar-hide reveal">
          {categories.map((category) => (
            <div
              key={category.label}
              className={`flex-shrink-0 w-28 p-4 rounded-xl bg-gradient-to-br ${category.color} border border-foreground/8 snap-center touch-feedback`}
            >
              <category.icon className="w-6 h-6 text-foreground/70 mb-2" />
              <p className="font-medium text-sm text-foreground">{category.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* What You Get */}
      <div className="mb-24">
        <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-8 reveal">What you get</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="card-elevated-hover p-6 reveal touch-feedback"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="w-5 h-5 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* How it works - Visual Timeline */}
      <div className="mb-24">
        <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-10 reveal">How it works</h3>
        <div className="relative">
          {/* Connecting line - desktop */}
          <div className="hidden md:block absolute top-6 left-[calc(16.67%-20px)] right-[calc(16.67%-20px)] h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20" />
          
          <div className="grid md:grid-cols-3 gap-8 md:gap-6">
            {steps.map((step, index) => (
              <div 
                key={step.number}
                className="relative flex flex-col items-center text-center reveal"
                style={{ transitionDelay: `${index * 0.15}s` }}
              >
                {/* Step number */}
                <div className="relative z-10 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/80 text-primary-foreground flex items-center justify-center font-bold text-lg shadow-lg shadow-primary/25 mb-4">
                  {step.number}
                </div>
                
                {/* Content */}
                <h4 className="font-semibold text-foreground mb-2">{step.title}</h4>
                <p className="text-sm text-muted-foreground max-w-[200px]">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="mb-24 max-w-2xl mx-auto reveal">
        <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-8 text-center">FAQ</h3>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`faq-${index}`}
              className="card-elevated px-6 border-0 touch-feedback"
            >
              <AccordionTrigger className="text-left text-foreground hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* CTA Form */}
      <div id="ugc-form" className="relative max-w-xl mx-auto scroll-mt-24 reveal">
        {/* Gradient border effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-[1.5rem] blur-sm" />
        
        <div className="relative card-elevated p-8 md:p-10 rounded-[1.25rem]">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-2">Let's create something</h3>
            <p className="text-muted-foreground text-sm">
              Tell me what you need. I'll get back with a plan.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Select 
              value={formData.contentType} 
              onValueChange={(value) => setFormData({ ...formData, contentType: value })}
            >
              <SelectTrigger className="rounded-xl bg-background border-foreground/10 focus:border-primary h-12">
                <SelectValue placeholder="What do you need content for?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="travel">Travel / Stay</SelectItem>
                <SelectItem value="tech">Tech / Product</SelectItem>
                <SelectItem value="lifestyle">Lifestyle</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>

            <div className="grid grid-cols-2 gap-4">
              <Input
                placeholder="Name *"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="rounded-xl bg-background border-foreground/10 focus:border-primary h-12"
              />
              <Input
                type="email"
                placeholder="Email *"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="rounded-xl bg-background border-foreground/10 focus:border-primary h-12"
              />
            </div>

            <Textarea
              placeholder="Brief + links (optional)"
              value={formData.brief}
              onChange={(e) => setFormData({ ...formData, brief: e.target.value })}
              rows={3}
              className="rounded-xl bg-background border-foreground/10 focus:border-primary resize-none"
            />

            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full rounded-full bg-foreground hover:bg-foreground/90 text-background font-medium h-12 touch-feedback shadow-md hover:shadow-lg transition-all"
            >
              {isSubmitting ? "Sending..." : "Send Inquiry"}
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </form>

          <div className="mt-6 pt-6 border-t border-foreground/8 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
            <a 
              href="https://gia-pereira.my.canva.site/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 font-medium flex items-center gap-1.5 link-underline"
            >
              View full portfolio + rate card
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Fallback Contact */}
      <div className="mt-16 text-center reveal">
        <p className="text-sm text-muted-foreground mb-3">
          Or reach out directly:
        </p>
        <div className="flex items-center justify-center gap-6 text-sm">
          <a 
            href="mailto:gia.pereira31@yahoo.com" 
            className="text-foreground hover:text-primary font-medium flex items-center gap-2 link-underline"
          >
            <Mail className="w-4 h-4" />
            gia.pereira31@yahoo.com
          </a>
        </div>
      </div>
    </Section>
  );
};
