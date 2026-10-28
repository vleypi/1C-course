import { use } from "react";
import { ExerciseScopeContext } from "@/entities/progress/constants/exercise-scope.constant";
import type { ExerciseResponse } from "@/entities/progress/interfaces/progress.interface";
import { progressStore } from "@/entities/progress/services/progress.instance";
import { getExerciseResponse, toExerciseKey } from "@/entities/progress/utils/progress-queries.util";
import { useProgressSnapshot } from "@/entities/progress/hooks/useProgressSnapshot";
import { useRegisterFinalExercise } from "@/entities/progress/hooks/useRegisterFinalExercise";

export const useExercise = (exerciseId: string, isFinal: boolean) => {
  const exerciseKey = toExerciseKey(use(ExerciseScopeContext).lessonId, exerciseId);
  const response = getExerciseResponse(useProgressSnapshot(), exerciseKey);
  useRegisterFinalExercise(exerciseId, isFinal);

  const answer = (nextResponse: ExerciseResponse) => progressStore.answerExercise(exerciseKey, nextResponse);

  return { response, answer };
};
