import path from "node:path";

const FRONTEND_ROOT = path.resolve(import.meta.dirname, "../..");
const WORKSPACE_ROOT = path.resolve(FRONTEND_ROOT, "..");

export const CONTENT_PATHS = {
  root: path.join(WORKSPACE_ROOT, "curriculum"),
  courseData: path.join(FRONTEND_ROOT, "src/entities/course/generated/course.data.json"),
  stepLoaders: path.join(FRONTEND_ROOT, "src/entities/course/generated/step-loaders.ts"),
  lessonPlan: path.join(WORKSPACE_ROOT, "PLAN-LESSONS.md"),
} as const;

export const CONTENT_PREFIXES = {
  module: "module-",
  topic: "topic-",
  lesson: "lesson-",
  step: "step-",
} as const;

export const CONTENT_FILES = {
  course: "course.json",
  module: "module.json",
  topic: "topic.json",
  stepExtension: ".mdx",
} as const;
