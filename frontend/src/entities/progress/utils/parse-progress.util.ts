import { EMPTY_PROGRESS } from "@/entities/progress/constants/progress.constant";
import type { ExerciseResponse, IProgressSnapshot } from "@/entities/progress/interfaces/progress.interface";

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value);

const isStringList = (value: unknown): value is string[] =>
  Array.isArray(value) && value.every((item) => typeof item === "string");

const toLessonIds = (value: unknown): string[] =>
  Array.isArray(value) ? value.filter((item): item is string => typeof item === "string") : [];

const toStepCounts = (value: unknown): Record<string, number> =>
  isRecord(value)
    ? Object.fromEntries(
        Object.entries(value).filter((entry): entry is [string, number] => Number.isInteger(entry[1])),
      )
    : {};

const toExerciseAnswers = (value: unknown): Record<string, ExerciseResponse> =>
  isRecord(value)
    ? Object.fromEntries(
        Object.entries(value).filter((entry): entry is [string, string[]] => isStringList(entry[1])),
      )
    : {};

export const parseProgress = (raw: string | null): IProgressSnapshot => {
  if (!raw) return EMPTY_PROGRESS;

  const data: unknown = JSON.parse(raw);
  if (!isRecord(data)) return EMPTY_PROGRESS;

  return {
    completedLessonIds: toLessonIds(data.completedLessonIds),
    revealedSteps: toStepCounts(data.revealedSteps),
    exerciseAnswers: toExerciseAnswers(data.exerciseAnswers),
  };
};
