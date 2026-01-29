import { useRef, useState, useEffect } from "react";
import { useExcavation } from "@/hooks/useExcavation";
import { DepthMeter } from "./DepthMeter";
import { AchievementCard } from "./AchievementCard";
import { ProofCardData } from "./ProofCard";

interface Achievement {
  id: string;
  icon: "rocket" | "book" | "flag" | "hammer";
  title: string;
  subtitle: string;
  proofCards: ProofCardData[];
}

const achievements: Achievement[] = [
  {
    id: "ship",
    icon: "rocket",
    title: "Ship",
    subtitle: "Proof I don't just talk. I build.",
    proofCards: [
      {
        title: "ManaVerse / ManaShakti",
        description: "Wellness tech startup building privacy-first wearables and an app for mental clarity.",
        link: "https://manashakti.app/",
        external: true,
        metric: "50+ waitlist signups",
      },
      {
        title: "Richual",
        description: "Previous venture exploring habit-building and daily rituals through technology.",
        metric: "Validated & pivoted",
      },
      {
        title: "IBM",
        description: "SAP consulting for enterprise finance. Contributed to GenAI initiatives for internal tooling.",
        link: "#about",
        metric: "Global team coordination",
      },
      {
        title: "View all work",
        description: "Explore my full portfolio of projects and contributions.",
        link: "#work",
      },
    ],
  },
  {
    id: "learn",
    icon: "book",
    title: "Learn",
    subtitle: "Becoming technical on purpose.",
    proofCards: [
      {
        title: "Data & AI Diploma",
        description: "Code Institute certification in Data Analytics and Artificial Intelligence.",
        metric: "In progress",
      },
      {
        title: "Python / SQL / Power BI",
        description: "Building a technical stack that lets me prototype, analyze, and ship faster.",
        metric: "Daily practice",
      },
      {
        title: "Weekly output",
        description: "Building in public on @usecodegia. Sharing progress, learnings, and real-time updates.",
        link: "https://instagram.com/usecodegia",
        external: true,
        metric: "@usecodegia",
      },
    ],
  },
  {
    id: "lead",
    icon: "flag",
    title: "Lead",
    subtitle: "I can move people, not just pixels.",
    proofCards: [
      {
        title: "Society Leadership",
        description: "President and leadership roles across university societies and student organizations.",
        metric: "Multiple terms",
      },
      {
        title: "Team Delivery",
        description: "Coordinated cross-functional teams at IBM for enterprise finance testing and deployment.",
        metric: "Global coordination",
      },
      {
        title: "Community Building",
        description: "Grew @usecodegia to 150+ followers through weekly build-in-public content and authentic storytelling.",
        link: "https://instagram.com/usecodegia",
        external: true,
        metric: "30k+ impressions in 3 weeks",
      },
    ],
  },
  {
    id: "build-now",
    icon: "hammer",
    title: "Build Now",
    subtitle: "What's happening this month.",
    proofCards: [
      {
        title: "Currently Shipping",
        description: "ManaVerse hardware prototyping and app development. Iterating on ManaBand and Brain Stone.",
        metric: "This week's focus",
      },
      {
        title: "Applying to",
        description: "Accelerator programs and grants to bring ManaVerse to market.",
        metric: "Active applications",
      },
      {
        title: "Looking for a Cofounder",
        description: "Technical cofounder to join ManaVerse. If you're interested, let's talk.",
        link: "#contact",
        metric: "Open to connect",
      },
    ],
  },
];

export const BuildQuest = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [titleVisible, setTitleVisible] = useState(false);

  const {
    overallProgress,
    activeAchievementIndex,
    isRevealed,
    getRevealProgress,
    registerElement,
    scrollToAchievement,
  } = useExcavation(achievements);

  // Track when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        if (entry.isIntersecting && !titleVisible) {
          setTitleVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [titleVisible]);

  return (
    <section
      ref={sectionRef}
      id="proof"
      className="relative quest-theme quest-grain overflow-hidden"
      style={{
        background: `linear-gradient(180deg,
          var(--quest-bg) 0%,
          var(--quest-strata-1) 25%,
          var(--quest-strata-2) 50%,
          var(--quest-strata-3) 75%,
          var(--quest-bg-deep) 100%
        )`,
      }}
    >
      {/* Vignette overlay */}
      <div className="absolute inset-0 quest-vignette pointer-events-none" />

      {/* Depth meter */}
      <DepthMeter
        progress={overallProgress}
        achievements={achievements.map(a => ({ id: a.id, title: a.title }))}
        activeIndex={activeAchievementIndex}
        isVisible={isInView}
        onMarkerClick={scrollToAchievement}
      />

      <div className="relative z-10 max-w-[900px] mx-auto px-6 py-24">
        {/* Section header */}
        <div
          className={`text-center mb-20 transition-all duration-700 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2
            className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
            style={{ color: "var(--quest-text)" }}
          >
            Proof of Work
          </h2>
          <p
            className="text-lg max-w-md mx-auto"
            style={{ color: "var(--quest-text-muted)" }}
          >
            Scroll to explore each achievement and discover the evidence.
          </p>
        </div>

        {/* Achievement cards with strata lines between */}
        <div className="space-y-0">
          {achievements.map((achievement, index) => (
            <div key={achievement.id}>
              <AchievementCard
                id={achievement.id}
                icon={achievement.icon}
                title={achievement.title}
                subtitle={achievement.subtitle}
                proofCards={achievement.proofCards}
                isRevealed={isRevealed(achievement.id)}
                revealProgress={getRevealProgress(achievement.id)}
                registerElement={registerElement}
              />

              {/* Strata line between achievements */}
              {index < achievements.length - 1 && (
                <div className="strata-line my-8" />
              )}
            </div>
          ))}
        </div>

        {/* Bottom transition - particles settling */}
        <div className="relative h-24 mt-12">
          <div
            className="absolute inset-x-0 bottom-0 h-full"
            style={{
              background: `linear-gradient(180deg,
                transparent 0%,
                rgba(245, 240, 232, 0.02) 50%,
                rgba(245, 240, 232, 0.05) 100%
              )`,
            }}
          />
          {/* Scattered glow particles at bottom */}
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                left: `${15 + i * 14}%`,
                bottom: `${10 + Math.random() * 20}%`,
                width: 3 + Math.random() * 3,
                height: 3 + Math.random() * 3,
                background: "hsl(200 80% 70%)",
                opacity: 0.2 + Math.random() * 0.2,
                filter: "blur(1px)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
