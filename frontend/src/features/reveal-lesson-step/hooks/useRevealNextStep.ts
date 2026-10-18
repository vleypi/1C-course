import { progressStore } from "@/entities/progress";

export const useRevealNextStep = (lessonId: string, visibleCount: number) => () =>
  progressStore.revealSteps(lessonId, visibleCount + 1);
