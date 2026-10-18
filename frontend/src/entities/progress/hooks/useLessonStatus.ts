import type { LessonStatus } from "@/entities/progress/interfaces/progress.interface";
import { getLessonStatus } from "@/entities/progress/utils/progress-queries.util";
import { useProgressSnapshot } from "@/entities/progress/hooks/useProgressSnapshot";

export const useLessonStatus = (lessonId: string): LessonStatus =>
  getLessonStatus(useProgressSnapshot(), lessonId);
