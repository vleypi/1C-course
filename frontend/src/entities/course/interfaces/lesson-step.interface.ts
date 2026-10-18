import type { MDXContent } from "mdx/types";

export interface ILessonStepModule {
  default: MDXContent;
  ask?: string;
}

export type StepLoader = () => Promise<ILessonStepModule>;

export interface ILessonStep {
  ask: string | null;
  Content: MDXContent;
}
