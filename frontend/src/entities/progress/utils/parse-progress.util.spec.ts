import { describe, expect, it } from "vitest";
import { EMPTY_PROGRESS } from "@/entities/progress/constants/progress.constant";
import { parseProgress } from "@/entities/progress/utils/parse-progress.util";

describe("parseProgress", () => {
  it("возвращает пустой прогресс без данных", () => {
    expect(parseProgress(null)).toBe(EMPTY_PROGRESS);
    expect(parseProgress("[]")).toBe(EMPTY_PROGRESS);
  });

  it("отбрасывает некорректные значения", () => {
    const raw = JSON.stringify({ completedLessonIds: ["a", 1], revealedSteps: { a: 2, b: "x" } });

    expect(parseProgress(raw)).toEqual({ completedLessonIds: ["a"], revealedSteps: { a: 2 } });
  });
});
