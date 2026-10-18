import { describe, expect, it } from "vitest";
import type { IProgressSnapshot } from "@/entities/progress/interfaces/progress.interface";
import { countCompletedLessons, getLessonStatus, getVisibleStepCount } from "@/entities/progress/utils/progress-queries.util";

const snapshot: IProgressSnapshot = {
  completedLessonIds: ["a"],
  revealedSteps: { b: 3 },
};

describe("progress queries", () => {
  it("определяет статус урока", () => {
    expect(getLessonStatus(snapshot, "a")).toBe("completed");
    expect(getLessonStatus(snapshot, "b")).toBe("started");
    expect(getLessonStatus(snapshot, "c")).toBe("new");
  });

  it("считает видимые шаги", () => {
    expect(getVisibleStepCount(snapshot, "a", 7)).toBe(7);
    expect(getVisibleStepCount(snapshot, "b", 7)).toBe(3);
    expect(getVisibleStepCount(snapshot, "c", 7)).toBe(1);
    expect(getVisibleStepCount(snapshot, "b", 2)).toBe(2);
  });

  it("считает пройденные уроки из списка", () => {
    expect(countCompletedLessons(snapshot, ["a", "b", "c"])).toBe(1);
  });
});
