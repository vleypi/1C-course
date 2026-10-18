import { countCompletedLessons } from "@/entities/progress/utils/progress-queries.util";
import { useProgressSnapshot } from "@/entities/progress/hooks/useProgressSnapshot";

export const useCompletedCount = (lessonIds: readonly string[]): number =>
  countCompletedLessons(useProgressSnapshot(), lessonIds);
