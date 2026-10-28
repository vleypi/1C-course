import { ANSWER_NORMALIZATION } from "@/features/check-answer/constants/check-answer.constant";
import type { AcceptedAnswers } from "@/features/check-answer/interfaces/answer.interface";

export const normalizeAnswer = (value: string): string =>
  value
    .trim()
    .replace(ANSWER_NORMALIZATION.whitespace, " ")
    .toLocaleLowerCase(ANSWER_NORMALIZATION.locale)
    .replace(ANSWER_NORMALIZATION.letterYo, ANSWER_NORMALIZATION.letterYe);

export const isAnswerAccepted = (value: string, accepted: AcceptedAnswers): boolean => {
  const normalizedValue = normalizeAnswer(value);
  const variants = typeof accepted === "string" ? [accepted] : accepted;

  return variants.some((variant) => normalizeAnswer(variant) === normalizedValue);
};
