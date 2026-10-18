import { STEP_LOADERS } from "@/entities/course/generated/step-loaders";
import type { ILessonStep, ILessonStepModule } from "@/entities/course/interfaces/lesson-step.interface";

const toLessonStep = (module: ILessonStepModule): ILessonStep => ({
  ask: module.ask ?? null,
  Content: module.default,
});

export const loadLessonSteps = async (lessonId: string): Promise<ILessonStep[]> => {
  const loaders = STEP_LOADERS[lessonId] ?? [];
  const modules = await Promise.all(loaders.map((load) => load()));

  return modules.map(toLessonStep);
};
