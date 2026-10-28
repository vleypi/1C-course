import { EMPTY_PROGRESS } from "@/entities/progress/constants/progress.constant";
import type {
  ExerciseResponse,
  IProgressSnapshot,
  IProgressStorage,
} from "@/entities/progress/interfaces/progress.interface";
import {
  withCompletedLesson,
  withExerciseAnswer,
  withRevealedSteps,
} from "@/entities/progress/utils/progress-updates.util";

type Listener = () => void;

export class ProgressStore {
  readonly #storage: IProgressStorage;
  readonly #listeners = new Set<Listener>();
  #snapshot: IProgressSnapshot | null = null;
  #detachStorage: (() => void) | null = null;

  constructor(storage: IProgressStorage) {
    this.#storage = storage;
  }

  subscribe = (listener: Listener): (() => void) => {
    if (this.#listeners.size === 0) this.#detachStorage = this.#storage.subscribe(this.#reload);
    this.#listeners.add(listener);

    return () => {
      this.#listeners.delete(listener);
      if (this.#listeners.size === 0) this.#detachStorage?.();
    };
  };

  getSnapshot = (): IProgressSnapshot => {
    this.#snapshot ??= this.#storage.load();
    return this.#snapshot;
  };

  getServerSnapshot = (): IProgressSnapshot => EMPTY_PROGRESS;

  completeLesson(lessonId: string): void {
    this.#commit(withCompletedLesson(this.getSnapshot(), lessonId));
  }

  revealSteps(lessonId: string, stepCount: number): void {
    this.#commit(withRevealedSteps(this.getSnapshot(), lessonId, stepCount));
  }

  answerExercise(exerciseKey: string, response: ExerciseResponse): void {
    this.#commit(withExerciseAnswer(this.getSnapshot(), exerciseKey, response));
  }

  #commit(next: IProgressSnapshot): void {
    if (next === this.#snapshot) return;

    this.#snapshot = next;
    this.#storage.save(next);
    this.#emit();
  }

  #reload = (): void => {
    this.#snapshot = this.#storage.load();
    this.#emit();
  };

  #emit(): void {
    this.#listeners.forEach((listener) => listener());
  }
}
