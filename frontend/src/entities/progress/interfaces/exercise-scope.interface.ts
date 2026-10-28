export interface IExerciseScope {
  lessonId: string;
  finalExerciseIds: readonly string[];
  registerFinalExercise(exerciseId: string): () => void;
}
