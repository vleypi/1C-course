import { describe, expect, it } from "vitest";
import { getQuizOptionStatus, toggleSelection } from "@/features/answer-quiz/utils/quiz-selection.util";

describe("toggleSelection", () => {
  it("в одиночном выборе заменяет прежний вариант", () => {
    expect(toggleSelection(["0"], "2", false)).toEqual(["2"]);
  });

  it("в множественном выборе добавляет и снимает отметку", () => {
    expect(toggleSelection(["0"], "2", true)).toEqual(["0", "2"]);
    expect(toggleSelection(["0", "2"], "0", true)).toEqual(["2"]);
  });
});

describe("getQuizOptionStatus", () => {
  it("до проверки показывает только выбор", () => {
    expect(getQuizOptionStatus({ correct: true, selected: false, checked: false })).toBe("idle");
    expect(getQuizOptionStatus({ correct: false, selected: true, checked: false })).toBe("selected");
  });

  it("после проверки подсвечивает верные и помечает выбранные неверные", () => {
    expect(getQuizOptionStatus({ correct: true, selected: true, checked: true })).toBe("chosenCorrect");
    expect(getQuizOptionStatus({ correct: true, selected: false, checked: true })).toBe("missedCorrect");
    expect(getQuizOptionStatus({ correct: false, selected: true, checked: true })).toBe("chosenWrong");
    expect(getQuizOptionStatus({ correct: false, selected: false, checked: true })).toBe("skipped");
  });
});
