import { use, useLayoutEffect } from "react";
import { ExerciseScopeContext } from "@/entities/progress/constants/exercise-scope.constant";

export const useRegisterFinalExercise = (exerciseId: string, isFinal: boolean): void => {
  const { registerFinalExercise } = use(ExerciseScopeContext);

  useLayoutEffect(() => {
    if (isFinal) return registerFinalExercise(exerciseId);
  }, [exerciseId, isFinal, registerFinalExercise]);
};
