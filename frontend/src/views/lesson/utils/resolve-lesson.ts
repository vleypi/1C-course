import { notFound } from "next/navigation";
import { courseRepository, type ILessonLocation, isLessonAvailable } from "@/entities/course";
import type { ILessonRouteParams } from "@/shared/config";

export const resolveLesson = ({ module, topic, lesson }: ILessonRouteParams): ILessonLocation => {
  const location = courseRepository.findLesson(module, topic, lesson);
  if (!location || !isLessonAvailable(location.lesson)) notFound();

  return location;
};
