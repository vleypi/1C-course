"use client";

import { type ReactNode, useCallback, useState } from "react";
import { ExerciseScopeContext } from "@/entities/progress/constants/exercise-scope.constant";

interface IExerciseScopeProviderProps {
  lessonId: string;
  children: ReactNode;
}

export const ExerciseScopeProvider = ({ lessonId, children }: IExerciseScopeProviderProps) => {
  const [finalExerciseIds, setFinalExerciseIds] = useState<readonly string[]>([]);

  const registerFinalExercise = useCallback((exerciseId: string) => {
    setFinalExerciseIds((ids) => [...ids, exerciseId]);
    return () => setFinalExerciseIds((ids) => ids.filter((id) => id !== exerciseId));
  }, []);

  return (
    <ExerciseScopeContext value={{ lessonId, finalExerciseIds, registerFinalExercise }}>
      {children}
    </ExerciseScopeContext>
  );
};
