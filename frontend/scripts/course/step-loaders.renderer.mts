import type { ICourse, ILesson } from "@/entities/course/interfaces/course.interface";
import { toStepImportPath } from "#course/content-paths.util.mts";

const renderLoader = (lessonId: string, stepNumber: number): string =>
  `    () => import("${toStepImportPath(lessonId, stepNumber)}"),`;

const renderLessonEntry = (lesson: ILesson): string => {
  const loaders = Array.from({ length: lesson.stepCount }, (_, index) =>
    renderLoader(lesson.id, index + 1),
  );

  return [`  "${lesson.id}": [`, ...loaders, "  ],"].join("\n");
};

export const renderStepLoaders = (course: ICourse): string => {
  const writtenLessons = course.modules
    .flatMap((module) => module.topics)
    .flatMap((topic) => topic.lessons)
    .filter((lesson) => lesson.stepCount > 0);

  return [
    'import type { StepLoader } from "@/entities/course/interfaces/lesson-step.interface";',
    "",
    "export const STEP_LOADERS: Readonly<Record<string, readonly StepLoader[]>> = {",
    ...writtenLessons.map(renderLessonEntry),
    "};",
    "",
  ].join("\n");
};
