import type { IProgressSnapshot } from "@/entities/progress/interfaces/progress.interface";

export const EMPTY_PROGRESS: IProgressSnapshot = Object.freeze({
  completedLessonIds: Object.freeze([]),
  revealedSteps: Object.freeze({}),
  exerciseAnswers: Object.freeze({}),
});

export const FIRST_STEP_COUNT = 1;

export const EXERCISE_KEY_SEPARATOR = "#";

export const PROGRESS_TEXT = {
  courseProgress: "Прогресс по курсу",
} as const;
