import { useState, useEffect, useRef, useCallback } from "react";
import { useToast } from "@/hooks/use-toast";

export interface ExcavationAchievement {
  id: string;
  title: string;
  subtitle: string;
}

interface ElementState {
  element: HTMLElement;
  revealProgress: number;
  isFullyRevealed: boolean;
}

export const useExcavation = (achievements: ExcavationAchievement[]) => {
  const [revealedAchievements, setRevealedAchievements] = useState<Set<string>>(new Set());
  const [revealProgress, setRevealProgress] = useState<Record<string, number>>({});
  const [activeAchievementIndex, setActiveAchievementIndex] = useState(0);
  const [overallProgress, setOverallProgress] = useState(0);

  const elementsRef = useRef<Map<string, ElementState>>(new Map());
  const hasToastedRef = useRef<Set<string>>(new Set());
  const sectionRef = useRef<HTMLElement | null>(null);
  const { toast } = useToast();

  const registerElement = useCallback((id: string, element: HTMLElement | null) => {
    if (!element) {
      elementsRef.current.delete(id);
      return;
    }

    elementsRef.current.set(id, {
      element,
      revealProgress: 0,
      isFullyRevealed: false,
    });
  }, []);

  const registerSection = useCallback((element: HTMLElement | null) => {
    sectionRef.current = element;
  }, []);

  // Handle scroll-based reveal progress
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const newProgress: Record<string, number> = {};
      let totalProgress = 0;
      let newActiveIndex = 0;

      elementsRef.current.forEach((state, id) => {
        const rect = state.element.getBoundingClientRect();
        const elementTop = rect.top;
        const elementHeight = rect.height;

        // Calculate how much of the element has been scrolled past the trigger point
        // Trigger point is when element is 40% visible from bottom
        const triggerPoint = windowHeight * 0.6;
        const scrolledPast = triggerPoint - elementTop;
        const revealZone = elementHeight * 0.6; // Reveal over 60% of element height

        let progress = 0;

        if (scrolledPast > 0) {
          progress = Math.min(1, Math.max(0, scrolledPast / revealZone));
        }

        // Once fully revealed, lock it
        if (state.isFullyRevealed) {
          progress = 1;
        } else if (progress >= 1) {
          state.isFullyRevealed = true;

          // Mark as revealed
          setRevealedAchievements(prev => {
            const next = new Set(prev);
            next.add(id);
            return next;
          });

          // Show toast
          if (!hasToastedRef.current.has(id)) {
            hasToastedRef.current.add(id);
            const achievement = achievements.find(a => a.id === id);
            if (achievement) {
              toast({
                title: `Unearthed: ${achievement.title}`,
                description: achievement.subtitle,
                duration: 3000,
              });
            }
          }
        }

        newProgress[id] = progress;
        totalProgress += progress;

        // Track active achievement (the one currently being excavated)
        const achievementIndex = achievements.findIndex(a => a.id === id);
        if (progress > 0 && progress < 1 && achievementIndex > newActiveIndex) {
          newActiveIndex = achievementIndex;
        } else if (progress >= 1 && achievementIndex >= newActiveIndex) {
          newActiveIndex = Math.min(achievementIndex + 1, achievements.length - 1);
        }
      });

      setRevealProgress(newProgress);
      setActiveAchievementIndex(newActiveIndex);
      setOverallProgress(totalProgress / achievements.length);
    };

    // Throttle scroll handler for performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", throttledScroll);
    };
  }, [achievements, toast]);

  const isRevealed = useCallback((id: string) => revealedAchievements.has(id), [revealedAchievements]);

  const getRevealProgress = useCallback((id: string) => revealProgress[id] ?? 0, [revealProgress]);

  const scrollToAchievement = useCallback((index: number) => {
    const achievement = achievements[index];
    if (!achievement) return;

    const state = elementsRef.current.get(achievement.id);
    if (state?.element) {
      state.element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [achievements]);

  return {
    revealedAchievements,
    currentProgress: revealedAchievements.size,
    totalAchievements: achievements.length,
    overallProgress,
    activeAchievementIndex,
    isRevealed,
    getRevealProgress,
    registerElement,
    registerSection,
    scrollToAchievement,
  };
};
