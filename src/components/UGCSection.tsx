import { useState } from "react";
import { Video, Camera, FolderOpen, Check, Download, Mail, Instagram, ChevronRight, MapPin, Calendar, Sparkles } from "lucide-react";
import { Section, SectionHeader } from "./Section";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { useToast } from "@/hooks/use-toast";

const features = [
  {
    icon: Video,
    title: "Vertical videos for Reels/TikTok",
    description: "Scroll-stopping content optimised for social algorithms"
  },
  {
    icon: Camera,
    title: "Listing-ready photo sets",
    description: "Wide shots + details + amenities that convert browsers to bookers"
  },
  {
    icon: FolderOpen,
    title: "Raw footage included",
    description: "All usable clips from the shoot delivered via Drive"
  }
];

const packages = [
  {
    name: "Weekday Content Swap",
    badge: "Best for off-peak",
    badgeColor: "bg-primary/10 text-primary",
    price: "Gifted stay",
    priceNote: "In exchange for 1–2 weekday nights (Sun–Thu, off-peak is perfect)",
    deliverables: [
      "3 edited vertical videos (15–30s)",
      "30–50 edited photos (Airbnb-ready)",
      "Raw footage included (usable clips)",
      "Turnaround: 5–7 days"
    ],
    usage: "Organic usage included (Airbnb listing + IG/TikTok). Paid ads usage available."
  },
  {
    name: "Starter Listing Refresh",
    badge: null,
    price: "£250–£450",
    priceNote: "Paid package",
    deliverables: [
      "4 edited vertical videos (15–30s)",
      "30–60 edited photos",
      "Raw footage included",
      "1 round of revisions",
      "Turnaround: 7 days"
    ],
    usage: "Organic usage included. Ads/licensing available."
  },
  {
    name: "Bookable Stay Pack",
    badge: "Best value",
    badgeColor: "bg-accent/10 text-accent",
    price: "£500–£850",
    priceNote: "Premium package",
    deliverables: [
      "6 edited videos (mix of 15–30s + one 45–60s walkthrough + one hook variant)",
      "50–80 edited photos",
      "Raw footage included",
      "Simple caption + hook suggestions",
      "Turnaround: 7–10 days"
    ],
    usage: "Organic usage included. Ads/licensing available."
  }
];

const addons = [
  { name: "Extra edited video", price: "£80–£150" },
  { name: "Extra 20 photos", price: "£60–£120" },
  { name: "Rush delivery (48–72 hrs)", price: "+£75–£150" },
  { name: "Paid ads usage / whitelisting", price: "quote" }
];

const steps = [
  {
    number: "1",
    title: "Share your property",
    description: "Send your property link + goals"
  },
  {
    number: "2",
    title: "Get a shot list",
    description: "I send a mini shot list + confirm deliverables"
  },
  {
    number: "3",
    title: "Receive content",
    description: "You receive edited content within 5–10 days"
  }
];

const faqs = [
  {
    question: "Do you need a big following?",
    answer: "No — this is UGC. I create assets for your listing and socials so you can convert viewers into bookings."
  },
  {
    question: "What's included in raw footage?",
    answer: "All usable clips from the shoot delivered via Drive."
  },
  {
    question: "Can I use the content in ads?",
    answer: "Yes — paid ads/whitelisting is available as an add-on."
  },
  {
    question: "Do you travel?",
    answer: "Yes. UK-based. For far locations, travel costs may apply unless we agree otherwise."
  }
];

export const UGCSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    propertyLink: "",
    location: "",
    preferredDates: "",
    goal: "",
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.propertyLink || !formData.location || !formData.name || !formData.email) {
      toast({
        title: "Please fill in required fields",
        description: "Property link, location, name, and email are required.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Got it — I'll reply soon.",
      description: "Thanks for your interest! I'll review your property and get back to you.",
    });

    setFormData({
      propertyLink: "",
      location: "",
      preferredDates: "",
      goal: "",
      name: "",
      email: "",
      message: ""
    });
    setIsSubmitting(false);
  };

  return (
    <Section id="ugc" className="scroll-mt-20">
      {/* Hero Block */}
      <div className="grid lg:grid-cols-[1fr,320px] gap-12 lg:gap-16 items-start mb-20">
        {/* Text Content */}
        <div className="max-w-xl reveal">
          <span className="text-[11px] px-2.5 py-1 rounded-full bg-muted text-muted-foreground border border-foreground/8 mb-5 inline-flex items-center gap-1.5 font-medium uppercase tracking-wide">
            <Sparkles className="w-3 h-3" />
            UGC Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-foreground mb-4 leading-[1.15] tracking-tight">
            UGC for UK Stays
          </h2>
          <p className="text-base md:text-lg text-foreground/70 font-medium mb-3">
            Booking-focused Reels + listing-ready assets (UGC, not influencer posts)
          </p>
          <p className="text-muted-foreground text-base leading-relaxed mb-8">
            I create content for your Airbnb/homestay listing + socials. Better assets → more bookings. Follower count isn't the point.
          </p>

          <div className="flex flex-wrap gap-3 mb-5">
            <Button 
              asChild
              className="rounded-full px-6 h-11 bg-foreground hover:bg-foreground/90 text-background font-medium touch-feedback shadow-sm"
            >
              <a href="#ugc-form">
                Request a Shot List
                <ChevronRight className="w-4 h-4 ml-1.5" />
              </a>
            </Button>
            <Button 
              asChild
              variant="outline"
              className="rounded-full px-6 h-11 border-foreground/20 text-foreground hover:bg-foreground/5 font-medium touch-feedback"
            >
              <a href="mailto:gia.pereira31@yahoo.com">
                <Mail className="w-4 h-4 mr-2" />
                Email Me
              </a>
            </Button>
          </div>

          <p className="text-xs text-muted-foreground flex items-center gap-1.5">
            <MapPin className="w-3 h-3" />
            UK-based • Wales / Lake District / UK travel
          </p>
        </div>

        {/* Desktop Mini-Collage */}
        <div className="hidden lg:flex flex-col gap-3 reveal" style={{ transitionDelay: '0.1s' }}>
          <p className="text-[11px] font-medium text-muted-foreground uppercase tracking-wide mb-1">Sample visuals</p>
          <div className="grid grid-cols-2 gap-2.5">
            <div className="aspect-[4/5] rounded-xl bg-gradient-to-br from-foreground/[0.06] to-foreground/[0.02] border border-foreground/8" />
            <div className="aspect-[4/5] rounded-xl bg-gradient-to-br from-foreground/[0.08] to-foreground/[0.03] border border-foreground/8 translate-y-4" />
          </div>
          <div className="aspect-[16/9] rounded-xl bg-gradient-to-br from-foreground/[0.05] to-foreground/[0.02] border border-foreground/8 -mt-1" />
        </div>
      </div>

      {/* What You Get */}
      <div className="mb-20">
        <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-8 reveal">What you get</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="card-elevated-hover p-6 reveal touch-feedback"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center mb-4">
                <feature.icon className="w-5 h-5 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted-foreground mt-4 reveal">
          Raw footage included = all usable clips from the shoot (not unusable/accidental clips).
        </p>
      </div>

      {/* Sample Visuals Gallery */}
      <div className="mb-20 reveal">
        <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-6">Sample visuals</h3>
        <div className="flex gap-3 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0 md:grid md:grid-cols-6 md:overflow-visible">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div 
              key={i}
              className="flex-shrink-0 w-32 md:w-auto aspect-[4/5] rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-foreground/8 snap-center touch-feedback"
              style={{
                background: `linear-gradient(135deg, hsl(var(--primary) / ${0.05 + i * 0.02}), hsl(var(--primary) / ${0.02 + i * 0.01}))`
              }}
            />
          ))}
        </div>
        <p className="text-xs text-muted-foreground mt-3 text-center md:text-left">
          Placeholder images — actual samples coming soon
        </p>
      </div>

      {/* Packages */}
      <div className="mb-12">
        <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-8 reveal">Packages</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {packages.map((pkg, index) => (
            <div 
              key={pkg.name}
              className="card-elevated p-6 flex flex-col reveal touch-feedback"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <h4 className="font-semibold text-foreground text-lg">{pkg.name}</h4>
                {pkg.badge && (
                  <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${pkg.badgeColor || 'bg-muted text-muted-foreground'}`}>
                    {pkg.badge}
                  </span>
                )}
              </div>
              
              <p className="text-2xl font-bold text-foreground mb-1">{pkg.price}</p>
              <p className="text-sm text-muted-foreground mb-6">{pkg.priceNote}</p>

              <ul className="space-y-3 mb-6 flex-1">
                {pkg.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-xs text-muted-foreground border-t border-foreground/8 pt-4">
                {pkg.usage}
              </p>
            </div>
          ))}
        </div>
        <p className="text-sm text-muted-foreground mt-6 text-center reveal">
          Custom quotes available for photo-only, socials-only, or a full listing refresh.
        </p>
      </div>

      {/* Add-ons */}
      <div className="mb-20 reveal">
        <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-6">Add-ons</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {addons.map((addon) => (
            <div key={addon.name} className="card-elevated p-4 touch-feedback">
              <p className="text-sm text-foreground font-medium mb-1">{addon.name}</p>
              <p className="text-sm text-muted-foreground">{addon.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* How it works */}
      <div className="mb-20">
        <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-8 reveal">How it works</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className="flex items-start gap-4 reveal touch-feedback"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold flex-shrink-0">
                {step.number}
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">{step.title}</h4>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="mb-20 max-w-2xl reveal">
        <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-6">FAQ</h3>
        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`faq-${index}`}
              className="card-elevated px-6 border-0 touch-feedback"
            >
              <AccordionTrigger className="text-left text-foreground hover:no-underline py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* CTA Form */}
      <div id="ugc-form" className="card-elevated p-8 md:p-10 max-w-2xl mx-auto scroll-mt-24 reveal">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-semibold text-foreground mb-2">Request a Shot List</h3>
          <p className="text-muted-foreground">
            Send your property link and I'll reply with a tailored shot list + the best package for your stay.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <Input
              placeholder="Property link *"
              value={formData.propertyLink}
              onChange={(e) => setFormData({ ...formData, propertyLink: e.target.value })}
              required
              className="rounded-xl bg-background border-foreground/10 focus:border-primary h-11"
            />
            <Input
              placeholder="Location *"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              required
              className="rounded-xl bg-background border-foreground/10 focus:border-primary h-11"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <Input
              placeholder="Preferred dates (optional)"
              value={formData.preferredDates}
              onChange={(e) => setFormData({ ...formData, preferredDates: e.target.value })}
              className="rounded-xl bg-background border-foreground/10 focus:border-primary h-11"
            />
            <Select 
              value={formData.goal} 
              onValueChange={(value) => setFormData({ ...formData, goal: value })}
            >
              <SelectTrigger className="rounded-xl bg-background border-foreground/10 focus:border-primary h-11">
                <SelectValue placeholder="Goal" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="weekday">Weekday bookings</SelectItem>
                <SelectItem value="refresh">Listing refresh</SelectItem>
                <SelectItem value="social">Social content</SelectItem>
                <SelectItem value="ads">Ads-ready UGC</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <Input
              placeholder="Name *"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="rounded-xl bg-background border-foreground/10 focus:border-primary h-11"
            />
            <Input
              type="email"
              placeholder="Email *"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="rounded-xl bg-background border-foreground/10 focus:border-primary h-11"
            />
          </div>

          <Textarea
            placeholder="Anything else? (optional)"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            rows={3}
            className="rounded-xl bg-background border-foreground/10 focus:border-primary resize-none"
          />

          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium h-12 touch-feedback"
          >
            {isSubmitting ? "Sending..." : "Send Request"}
          </Button>
        </form>

        {/* Fallback contact */}
        <div className="mt-8 pt-6 border-t border-foreground/8 text-center space-y-2">
          <p className="text-sm text-muted-foreground">
            Prefer email?{" "}
            <a href="mailto:gia.pereira31@yahoo.com" className="text-foreground hover:text-primary transition-colors link-underline">
              gia.pereira31@yahoo.com
            </a>
          </p>
          <p className="text-sm text-muted-foreground">
            Instagram:{" "}
            <a 
              href="https://instagram.com/usecodegia" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
            >
              @usecodegia
            </a>
            {" "}(DM 'STAY')
          </p>
        </div>

        {/* Rate card download */}
        <div className="mt-6 text-center">
          <Button 
            asChild
            variant="ghost"
            size="sm"
            className="text-muted-foreground hover:text-foreground touch-feedback"
          >
            <a href="/ratecard.pdf" download>
              <Download className="w-4 h-4 mr-2" />
              Download rate card (PDF)
            </a>
          </Button>
        </div>
      </div>
    </Section>
  );
};
