export const ANSWER_TEXT = {
  label: "Задача",
  placeholder: "Ваш ответ",
  correct: "Ваш ответ правильный",
  wrong: "Ваш ответ неправильный",
  skipped: "Разбор решения",
} as const;

export const ANSWER_NORMALIZATION = {
  locale: "ru",
  whitespace: /\s+/g,
  letterYo: /ё/g,
  letterYe: "е",
} as const;
