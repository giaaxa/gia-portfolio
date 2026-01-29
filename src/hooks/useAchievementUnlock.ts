import { useState, useEffect, useRef, useCallback } from "react";
import { useToast } from "@/hooks/use-toast";

export interface Achievement {
  id: string;
  title: string;
  subtitle: string;
}

export const useAchievementUnlock = (achievements: Achievement[]) => {
  const [unlockedAchievements, setUnlockedAchievements] = useState<Set<string>>(new Set());
  const [currentProgress, setCurrentProgress] = useState(0);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const hasToastedRef = useRef<Set<string>>(new Set());
  const { toast } = useToast();

  const registerElement = useCallback((id: string, element: HTMLElement | null) => {
    if (!element || !observerRef.current) return;
    
    element.setAttribute('data-achievement-id', id);
    observerRef.current.observe(element);
  }, []);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-achievement-id');
            if (id && !unlockedAchievements.has(id)) {
              setUnlockedAchievements((prev) => {
                const next = new Set(prev);
                next.add(id);
                return next;
              });

              // Show toast notification only once per achievement
              if (!hasToastedRef.current.has(id)) {
                hasToastedRef.current.add(id);
                const achievement = achievements.find((a) => a.id === id);
                if (achievement) {
                  toast({
                    title: `Achievement unlocked: ${achievement.title} ✅`,
                    description: achievement.subtitle,
                    duration: 3000,
                  });
                }
              }
            }
          }
        });
      },
      {
        threshold: 0.4,
        rootMargin: "-10% 0px -10% 0px",
      }
    );

    return () => {
      observerRef.current?.disconnect();
    };
  }, [achievements, toast, unlockedAchievements]);

  // Update progress count
  useEffect(() => {
    setCurrentProgress(unlockedAchievements.size);
  }, [unlockedAchievements]);

  const isUnlocked = useCallback((id: string) => unlockedAchievements.has(id), [unlockedAchievements]);

  return {
    unlockedAchievements,
    currentProgress,
    totalAchievements: achievements.length,
    isUnlocked,
    registerElement,
  };
};
