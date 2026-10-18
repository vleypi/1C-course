import type { PluralForms } from "@/shared/lib";

export const WEEKS_PER_MONTH = 4.345;

export const PROJECT_LABEL = "★";

export const PLURAL_FORMS = {
  weeks: ["неделя", "недели", "недель"],
  topics: ["тема", "темы", "тем"],
  lessons: ["урок", "урока", "уроков"],
} as const satisfies Record<string, PluralForms>;

export const COURSE_LEVELS = {
  module: "Модуль",
  topic: "Тема",
  lesson: "Урок",
  project: "Итоговый проект",
} as const;

export const COURSE_UNITS = {
  hours: "ч",
  months: "мес",
} as const;

export const COURSE_TEXT = {
  breadcrumbsLabel: "Хлебные крошки",
} as const;
