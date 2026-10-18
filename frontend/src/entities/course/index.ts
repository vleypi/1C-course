export { DesignAvatar } from "@/entities/course/components/DesignAvatar";
export { LessonBreadcrumbs } from "@/entities/course/components/LessonBreadcrumbs";
export { LessonRow } from "@/entities/course/components/LessonRow";
export { ModuleCard } from "@/entities/course/components/module-card/ModuleCard";
export { ModuleBanner } from "@/entities/course/components/ModuleBanner";
export { ModuleHeading } from "@/entities/course/components/ModuleHeading";
export { ModuleTheme } from "@/entities/course/components/ModuleTheme";
export { TopicRow } from "@/entities/course/components/TopicRow";

export { courseRepository } from "@/entities/course/services/course.instance";
export { loadLessonSteps } from "@/entities/course/services/lesson-steps.service";

export { isLessonAvailable, isModuleAvailable, isTopicAvailable } from "@/entities/course/utils/availability.util";
export { getLessonHref, getTopicHref } from "@/entities/course/utils/href.util";
export { COURSE_LEVELS } from "@/entities/course/constants/course.constant";
export { MODULE_CARD_DESIGN_IDS } from "@/entities/course/constants/module-card-design.constant";
export { isModuleCardDesign } from "@/entities/course/utils/module-card-design.util";
export {
  formatDuration,
  formatLessonCount,
  formatPosition,
  getModuleFacts,
  getModuleLabel,
} from "@/entities/course/utils/labels.util";
export { getModuleLessonIds, getTopicLessonIds } from "@/entities/course/utils/lesson-ids.util";
export { toLessonLocations, toTopicLocations } from "@/entities/course/utils/locations.util";
export { findNextLesson } from "@/entities/course/utils/navigation.util";
export { getLessonParams, getModuleParams, getTopicParams } from "@/entities/course/utils/static-params.util";

export type { ICourse, ILesson, IModule, ITopic } from "@/entities/course/interfaces/course.interface";
export type { IAppearance } from "@/entities/course/interfaces/appearance.interface";
export type { ModuleCardDesign } from "@/entities/course/interfaces/module-card-design.interface";
export type { ILessonStep } from "@/entities/course/interfaces/lesson-step.interface";
export type { ILessonLocation, ITopicLocation } from "@/entities/course/interfaces/location.interface";
