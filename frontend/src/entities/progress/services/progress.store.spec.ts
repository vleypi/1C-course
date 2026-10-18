import { describe, expect, it, vi } from "vitest";
import { EMPTY_PROGRESS } from "@/entities/progress/constants/progress.constant";
import type { IProgressSnapshot, IProgressStorage } from "@/entities/progress/interfaces/progress.interface";
import { ProgressStore } from "@/entities/progress/services/progress.store";

const createMemoryStorage = (): IProgressStorage & { saved: IProgressSnapshot[] } => ({
  saved: [],
  load: () => EMPTY_PROGRESS,
  save(snapshot) {
    this.saved.push(snapshot);
  },
  subscribe: () => () => undefined,
});

describe("ProgressStore", () => {
  it("отмечает урок пройденным, сохраняет и оповещает подписчиков", () => {
    const storage = createMemoryStorage();
    const store = new ProgressStore(storage);
    const listener = vi.fn();
    store.subscribe(listener);

    store.completeLesson("00/01/01");

    expect(store.getSnapshot().completedLessonIds).toEqual(["00/01/01"]);
    expect(storage.saved).toHaveLength(1);
    expect(listener).toHaveBeenCalledOnce();
  });

  it("не пишет в хранилище, если ничего не изменилось", () => {
    const storage = createMemoryStorage();
    const store = new ProgressStore(storage);

    store.revealSteps("00/01/01", 3);
    store.revealSteps("00/01/01", 2);

    expect(store.getSnapshot().revealedSteps).toEqual({ "00/01/01": 3 });
    expect(storage.saved).toHaveLength(1);
  });

  it("отдаёт пустой прогресс для серверного рендера", () => {
    expect(new ProgressStore(createMemoryStorage()).getServerSnapshot()).toBe(EMPTY_PROGRESS);
  });
});
