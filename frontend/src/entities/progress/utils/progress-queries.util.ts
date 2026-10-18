import { FIRST_STEP_COUNT } from "@/entities/progress/constants/progress.constant";
import type { IProgressSnapshot, LessonStatus } from "@/entities/progress/interfaces/progress.interface";

export const isLessonCompleted = (snapshot: IProgressSnapshot, lessonId: string): boolean =>
  snapshot.completedLessonIds.includes(lessonId);

export const getLessonStatus = (snapshot: IProgressSnapshot, lessonId: string): LessonStatus => {
  if (isLessonCompleted(snapshot, lessonId)) return "completed";
  return snapshot.revealedSteps[lessonId] ? "started" : "new";
};

export const countCompletedLessons = (snapshot: IProgressSnapshot, lessonIds: readonly string[]): number =>
  lessonIds.filter((lessonId) => isLessonCompleted(snapshot, lessonId)).length;

export const getVisibleStepCount = (
  snapshot: IProgressSnapshot,
  lessonId: string,
  totalSteps: number,
): number => {
  if (isLessonCompleted(snapshot, lessonId)) return totalSteps;
  return Math.min(totalSteps, snapshot.revealedSteps[lessonId] ?? FIRST_STEP_COUNT);
};
