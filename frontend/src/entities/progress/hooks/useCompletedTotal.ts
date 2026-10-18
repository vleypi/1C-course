import { useProgressSnapshot } from "@/entities/progress/hooks/useProgressSnapshot";

export const useCompletedTotal = (): number => useProgressSnapshot().completedLessonIds.length;
