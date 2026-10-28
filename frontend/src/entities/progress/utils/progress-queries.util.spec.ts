import { describe, expect, it } from "vitest";
import type { IProgressSnapshot } from "@/entities/progress/interfaces/progress.interface";
import {
  countCompletedLessons,
  getExerciseResponse,
  getLessonStatus,
  getVisibleStepCount,
  hasUnansweredExercise,
  toExerciseKey,
} from "@/entities/progress/utils/progress-queries.util";

const snapshot: IProgressSnapshot = {
  completedLessonIds: ["a"],
  revealedSteps: { b: 3 },
  exerciseAnswers: { "b#quiz": ["1"] },
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

  it("находит ответ на задание по ключу урока", () => {
    expect(toExerciseKey("b", "quiz")).toBe("b#quiz");
    expect(getExerciseResponse(snapshot, "b#quiz")).toEqual(["1"]);
    expect(getExerciseResponse(snapshot, "b#input")).toBeNull();
  });

  it("проверяет, остались ли задания без ответа", () => {
    expect(hasUnansweredExercise(snapshot, ["b#quiz"])).toBe(false);
    expect(hasUnansweredExercise(snapshot, ["b#quiz", "b#input"])).toBe(true);
    expect(hasUnansweredExercise(snapshot, [])).toBe(false);
  });
});
