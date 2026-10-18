import { EMPTY_PROGRESS } from "@/entities/progress/constants/progress.constant";
import type { IProgressSnapshot, IProgressStorage } from "@/entities/progress/interfaces/progress.interface";
import { parseProgress } from "@/entities/progress/utils/parse-progress.util";

const isBrowser = (): boolean => typeof window !== "undefined";

export class LocalProgressStorage implements IProgressStorage {
  readonly #key: string;

  constructor(key: string) {
    this.#key = key;
  }

  load(): IProgressSnapshot {
    if (!isBrowser()) return EMPTY_PROGRESS;

    try {
      return parseProgress(window.localStorage.getItem(this.#key));
    } catch {
      return EMPTY_PROGRESS;
    }
  }

  save(snapshot: IProgressSnapshot): void {
    try {
      window.localStorage.setItem(this.#key, JSON.stringify(snapshot));
    } catch {
      return;
    }
  }

  subscribe(onExternalChange: () => void): () => void {
    const handleStorage = (event: StorageEvent) => {
      if (event.key === this.#key) onExternalChange();
    };

    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }
}
