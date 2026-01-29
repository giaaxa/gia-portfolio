import { useAchievementUnlock } from "@/hooks/useAchievementUnlock";
import { QuestProgress } from "./QuestProgress";
import { AchievementCard } from "./AchievementCard";
import { ProofCardData } from "./ProofCard";

interface Achievement {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  proofCards: ProofCardData[];
}

const achievements: Achievement[] = [
  {
    id: "ship",
    number: "01",
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
    number: "02",
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
    number: "03",
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
        description: "Growing an engaged audience through building in public and authentic content.",
        link: "https://instagram.com/usecodegia",
        external: true,
      },
    ],
  },
  {
    id: "build-now",
    number: "04",
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
        description: "Accelerator programs, grants, and opportunities to scale ManaVerse to the next level.",
        metric: "2024 cohorts",
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
  const {
    currentProgress,
    totalAchievements,
    isUnlocked,
    registerElement,
  } = useAchievementUnlock(achievements);

  return (
    <section id="proof" className="relative py-24 px-6">
      {/* Quest Progress indicator */}
      <QuestProgress current={currentProgress} total={totalAchievements} />

      <div className="max-w-[1180px] mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs px-3 py-1.5 rounded-full bg-primary/8 text-primary border border-primary/12 mb-4">
            Build Quest
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Proof of Work
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Scroll to unlock each achievement and explore the evidence.
          </p>
        </div>

        {/* Achievement cards */}
        <div className="divide-y divide-foreground/8">
          {achievements.map((achievement) => (
            <AchievementCard
              key={achievement.id}
              id={achievement.id}
              number={achievement.number}
              title={achievement.title}
              subtitle={achievement.subtitle}
              proofCards={achievement.proofCards}
              isUnlocked={isUnlocked(achievement.id)}
              registerElement={registerElement}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
