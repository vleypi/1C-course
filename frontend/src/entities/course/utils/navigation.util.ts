import type { ILessonLocation } from "@/entities/course/interfaces/location.interface";

export const findNextLesson = (
  locations: readonly ILessonLocation[],
  lessonId: string,
): ILessonLocation | null => {
  const index = locations.findIndex(({ lesson }) => lesson.id === lessonId);
  if (index < 0) return null;

  return locations[index + 1] ?? null;
};
