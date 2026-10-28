import type { ExerciseResponse, IProgressSnapshot } from "@/entities/progress/interfaces/progress.interface";

export const withCompletedLesson = (snapshot: IProgressSnapshot, lessonId: string): IProgressSnapshot =>
  snapshot.completedLessonIds.includes(lessonId)
    ? snapshot
    : { ...snapshot, completedLessonIds: [...snapshot.completedLessonIds, lessonId] };

export const withRevealedSteps = (
  snapshot: IProgressSnapshot,
  lessonId: string,
  stepCount: number,
): IProgressSnapshot =>
  (snapshot.revealedSteps[lessonId] ?? 0) >= stepCount
    ? snapshot
    : { ...snapshot, revealedSteps: { ...snapshot.revealedSteps, [lessonId]: stepCount } };

export const withExerciseAnswer = (
  snapshot: IProgressSnapshot,
  exerciseKey: string,
  response: ExerciseResponse,
): IProgressSnapshot =>
  exerciseKey in snapshot.exerciseAnswers
    ? snapshot
    : { ...snapshot, exerciseAnswers: { ...snapshot.exerciseAnswers, [exerciseKey]: response } };
