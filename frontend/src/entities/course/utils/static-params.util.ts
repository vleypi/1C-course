import type { ILessonLocation } from "@/entities/course/interfaces/location.interface";
import { isLessonAvailable } from "@/entities/course/utils/availability.util";

interface ILessonParams {
  module: string;
  topic: string;
  lesson: string;
}

const uniqueBy = <T>(items: T[], toKey: (item: T) => string): T[] =>
  [...new Map(items.map((item) => [toKey(item), item])).values()];

export const getLessonParams = (locations: readonly ILessonLocation[]): ILessonParams[] =>
  locations
    .filter(({ lesson }) => isLessonAvailable(lesson))
    .map(({ module, topic, lesson }) => ({ module: module.slug, topic: topic.slug, lesson: lesson.slug }));

export const getTopicParams = (locations: readonly ILessonLocation[]) =>
  uniqueBy(
    getLessonParams(locations).map(({ module, topic }) => ({ module, topic })),
    ({ module, topic }) => `${module}/${topic}`,
  );

export const getModuleParams = (locations: readonly ILessonLocation[]) =>
  uniqueBy(
    getLessonParams(locations).map(({ module }) => ({ module })),
    ({ module }) => module,
  );
