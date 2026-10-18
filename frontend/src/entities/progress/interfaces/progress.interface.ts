export interface IProgressSnapshot {
  completedLessonIds: readonly string[];
  revealedSteps: Readonly<Record<string, number>>;
}

export interface IProgressStorage {
  load(): IProgressSnapshot;
  save(snapshot: IProgressSnapshot): void;
  subscribe(onExternalChange: () => void): () => void;
}

export type LessonStatus = "completed" | "started" | "new";
