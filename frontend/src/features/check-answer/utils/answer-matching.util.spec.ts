import { describe, expect, it } from "vitest";
import { isAnswerAccepted, normalizeAnswer } from "@/features/check-answer/utils/answer-matching.util";

describe("normalizeAnswer", () => {
  it("убирает лишние пробелы, регистр и букву ё", () => {
    expect(normalizeAnswer("  Информационная   БАЗА ")).toBe("информационная база");
    expect(normalizeAnswer("Учёт")).toBe("учет");
  });
});

describe("isAnswerAccepted", () => {
  it("сравнивает ответ с одним вариантом без учёта оформления", () => {
    expect(isAnswerAccepted(" 1050 ", "1050")).toBe(true);
    expect(isAnswerAccepted("1150", "1050")).toBe(false);
  });

  it("принимает любой из перечисленных вариантов", () => {
    expect(isAnswerAccepted("1 050", ["1050", "1 050"])).toBe(true);
    expect(isAnswerAccepted("Конфигурация", ["конфигурация", "конфигурацию"])).toBe(true);
  });
});
