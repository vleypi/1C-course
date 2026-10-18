import { pluralize } from "@/shared/lib";
import {
  COURSE_LEVELS,
  COURSE_UNITS,
  PLURAL_FORMS,
  PROJECT_LABEL,
  WEEKS_PER_MONTH,
} from "@/entities/course/constants/course.constant";
import type { IModule } from "@/entities/course/interfaces/course.interface";

export const getModuleMark = (module: IModule): string =>
  module.kind === "project" ? PROJECT_LABEL : module.slug;

export const getModuleLabel = (module: IModule): string =>
  module.kind === "project" ? COURSE_LEVELS.project : `${COURSE_LEVELS.module} ${module.slug}`;

export const getModuleFacts = (module: IModule): string[] => [
  pluralize(module.weeks, PLURAL_FORMS.weeks),
  `${module.hours} ${COURSE_UNITS.hours}`,
  pluralize(module.topics.length, PLURAL_FORMS.topics),
];

export const formatLessonCount = (count: number): string => pluralize(count, PLURAL_FORMS.lessons);

export const formatDuration = (weeks: number): string =>
  `~${Math.round(weeks / WEEKS_PER_MONTH)} ${COURSE_UNITS.months}`;

export const formatPosition = (label: string, current: number, total: number): string =>
  `${label} ${current}/${total}`;
