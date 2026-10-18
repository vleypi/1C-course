import type { Metadata } from "next";
import { COURSE_LEVELS } from "@/entities/course";
import type { ILessonRouteParams } from "@/shared/config";
import { resolveLesson } from "@/views/lesson/utils/resolve-lesson";

export const getLessonMetadata = (params: ILessonRouteParams): Metadata => {
  const { lesson, lessonNumber } = resolveLesson(params);

  return { title: `${lesson.title} · ${COURSE_LEVELS.lesson} ${lessonNumber}` };
};
