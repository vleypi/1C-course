import { ROUTES } from "@/shared/config";
import type { ILessonLocation, ITopicLocation } from "@/entities/course/interfaces/location.interface";

export const getTopicHref = ({ module, topic }: ITopicLocation): string => ROUTES.topic(module.slug, topic.slug);

export const getLessonHref = ({ module, topic, lesson }: ILessonLocation): string =>
  ROUTES.lesson(module.slug, topic.slug, lesson.slug);
