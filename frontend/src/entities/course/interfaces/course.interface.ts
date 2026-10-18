export type ModuleTrack = "base" | "extended";

export type ModuleKind = "module" | "project";

export interface ILesson {
  id: string;
  slug: string;
  title: string;
  stepCount: number;
}

export interface ITopic {
  slug: string;
  title: string;
  lessons: ILesson[];
}

export interface IModule {
  slug: string;
  title: string;
  goal: string;
  keyword: string;
  weeks: number;
  hours: number;
  track: ModuleTrack;
  kind: ModuleKind;
  topics: ITopic[];
}

export interface ICourse {
  title: string;
  subtitle: string;
  description: string;
  weeklyLoad: string;
  totalLessons: number;
  totalWeeks: number;
  modules: IModule[];
}
