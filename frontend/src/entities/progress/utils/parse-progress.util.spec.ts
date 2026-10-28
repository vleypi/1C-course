import { describe, expect, it } from "vitest";
import { EMPTY_PROGRESS } from "@/entities/progress/constants/progress.constant";
import { parseProgress } from "@/entities/progress/utils/parse-progress.util";

describe("parseProgress", () => {
  it("возвращает пустой прогресс без данных", () => {
    expect(parseProgress(null)).toBe(EMPTY_PROGRESS);
    expect(parseProgress("[]")).toBe(EMPTY_PROGRESS);
  });

  it("отбрасывает некорректные значения", () => {
    const raw = JSON.stringify({
      completedLessonIds: ["a", 1],
      revealedSteps: { a: 2, b: "x" },
      exerciseAnswers: { "a#quiz": ["0", "2"], "a#broken": [1], "a#text": "x" },
    });

    expect(parseProgress(raw)).toEqual({
      completedLessonIds: ["a"],
      revealedSteps: { a: 2 },
      exerciseAnswers: { "a#quiz": ["0", "2"] },
    });
  });

  it("читает старый формат без ответов на задания", () => {
    const raw = JSON.stringify({ completedLessonIds: ["a"], revealedSteps: {} });

    expect(parseProgress(raw).exerciseAnswers).toEqual({});
  });
});
