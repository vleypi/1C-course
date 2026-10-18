import { CONTENT_PATHS } from "#course/content.constant.mts";
import { ContentReader } from "#course/content-reader.mts";
import { CourseBuilder } from "#course/course-builder.mts";
import { renderLessonPlan } from "#course/lesson-plan.renderer.mts";
import { renderStepLoaders } from "#course/step-loaders.renderer.mts";
import { writeIfChanged } from "#course/write-if-changed.mts";

const course = await new CourseBuilder(new ContentReader(CONTENT_PATHS.root)).build();

await Promise.all([
  writeIfChanged(CONTENT_PATHS.courseData, `${JSON.stringify(course, null, 2)}\n`),
  writeIfChanged(CONTENT_PATHS.stepLoaders, renderStepLoaders(course)),
  writeIfChanged(CONTENT_PATHS.lessonPlan, renderLessonPlan(course)),
]);

const writtenLessons = course.modules
  .flatMap((module) => module.topics.flatMap((topic) => topic.lessons))
  .filter((lesson) => lesson.stepCount > 0).length;

console.log(`Курс собран: ${writtenLessons} из ${course.totalLessons} уроков написано.`);
