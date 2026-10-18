import { CONTENT_FILES, CONTENT_PREFIXES } from "#course/content.constant.mts";

export const padNumber = (value: number): string => String(value).padStart(2, "0");

export const stripPrefix = (folder: string, prefix: string): string =>
  folder.startsWith(prefix) ? folder.slice(prefix.length) : folder;

export const toLessonFolder = (lessonNumber: number): string =>
  `${CONTENT_PREFIXES.lesson}${padNumber(lessonNumber)}`;

export const toStepFile = (stepNumber: number): string =>
  `${CONTENT_PREFIXES.step}${padNumber(stepNumber)}${CONTENT_FILES.stepExtension}`;

export const toStepImportPath = (lessonId: string, stepNumber: number): string => {
  const [module, topic, lesson] = lessonId.split("/");

  return [
    "@curriculum",
    `${CONTENT_PREFIXES.module}${module}`,
    `${CONTENT_PREFIXES.topic}${topic}`,
    `${CONTENT_PREFIXES.lesson}${lesson}`,
    toStepFile(stepNumber),
  ].join("/");
};
