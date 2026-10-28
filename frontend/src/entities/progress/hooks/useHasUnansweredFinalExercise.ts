import { use } from "react";
import { ExerciseScopeContext } from "@/entities/progress/constants/exercise-scope.constant";
import { hasUnansweredExercise, toExerciseKey } from "@/entities/progress/utils/progress-queries.util";
import { useProgressSnapshot } from "@/entities/progress/hooks/useProgressSnapshot";

export const useHasUnansweredFinalExercise = (): boolean => {
  const { lessonId, finalExerciseIds } = use(ExerciseScopeContext);
  const exerciseKeys = finalExerciseIds.map((exerciseId) => toExerciseKey(lessonId, exerciseId));

  return hasUnansweredExercise(useProgressSnapshot(), exerciseKeys);
};
