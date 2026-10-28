import { EXERCISE_KEY_SEPARATOR, FIRST_STEP_COUNT } from "@/entities/progress/constants/progress.constant";
import type {
  ExerciseResponse,
  IProgressSnapshot,
  LessonStatus,
} from "@/entities/progress/interfaces/progress.interface";

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

export const toExerciseKey = (lessonId: string, exerciseId: string): string =>
  `${lessonId}${EXERCISE_KEY_SEPARATOR}${exerciseId}`;

export const getExerciseResponse = (snapshot: IProgressSnapshot, exerciseKey: string): ExerciseResponse | null =>
  snapshot.exerciseAnswers[exerciseKey] ?? null;

export const hasUnansweredExercise = (snapshot: IProgressSnapshot, exerciseKeys: readonly string[]): boolean =>
  exerciseKeys.some((exerciseKey) => getExerciseResponse(snapshot, exerciseKey) === null);
