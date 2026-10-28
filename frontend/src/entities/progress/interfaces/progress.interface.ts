export type ExerciseResponse = readonly string[];

export interface IProgressSnapshot {
  completedLessonIds: readonly string[];
  revealedSteps: Readonly<Record<string, number>>;
  exerciseAnswers: Readonly<Record<string, ExerciseResponse>>;
}

export interface IProgressStorage {
  load(): IProgressSnapshot;
  save(snapshot: IProgressSnapshot): void;
  subscribe(onExternalChange: () => void): () => void;
}

export type LessonStatus = "completed" | "started" | "new";
