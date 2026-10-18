import { getVisibleStepCount } from "@/entities/progress/utils/progress-queries.util";
import { useProgressSnapshot } from "@/entities/progress/hooks/useProgressSnapshot";

export const useVisibleStepCount = (lessonId: string, totalSteps: number): number =>
  getVisibleStepCount(useProgressSnapshot(), lessonId, totalSteps);
