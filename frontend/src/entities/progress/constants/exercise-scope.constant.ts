import { createContext } from "react";
import type { IExerciseScope } from "@/entities/progress/interfaces/exercise-scope.interface";

const DETACHED_EXERCISE_SCOPE: IExerciseScope = Object.freeze({
  lessonId: "",
  finalExerciseIds: Object.freeze([]),
  registerFinalExercise: () => () => undefined,
});

export const ExerciseScopeContext = createContext<IExerciseScope>(DETACHED_EXERCISE_SCOPE);
