import type {
  ModuleKind,
  ModuleTrack,
} from "@/entities/course/interfaces/course.interface";

export interface IRawCourse {
  title: string;
  subtitle: string;
  description: string;
  weeklyLoad: string;
  modules: string[];
}

export interface IRawModule {
  title: string;
  goal: string;
  keyword: string;
  weeks: number;
  hours: number;
  track: ModuleTrack;
  kind: ModuleKind;
}

export interface IRawTopic {
  title: string;
  lessons: string[];
}

export interface IContentSource {
  readJson<T>(...segments: string[]): Promise<T>;
  listEntries(prefix: string, ...segments: string[]): Promise<string[]>;
}
