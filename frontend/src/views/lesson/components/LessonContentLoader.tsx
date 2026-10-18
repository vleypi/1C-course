import { courseRepository, findNextLesson, loadLessonSteps } from "@/entities/course";
import type { ILessonRouteParams, IRouteParamsProps } from "@/shared/config";
import { LessonReader } from "@/widgets/lesson-reader";
import { resolveLesson } from "@/views/lesson/utils/resolve-lesson";

export const LessonContentLoader = async ({ params }: IRouteParamsProps<ILessonRouteParams>) => {
  const location = resolveLesson(await params);
  const steps = await loadLessonSteps(location.lesson.id);
  const nextLocation = findNextLesson(courseRepository.listLessonLocations(), location.lesson.id);

  return <LessonReader location={location} steps={steps} nextLocation={nextLocation} />;
};
