import type { ILesson, IModule, ITopic } from "@/entities/course/interfaces/course.interface";

export const isLessonAvailable = (lesson: ILesson): boolean => lesson.stepCount > 0;

export const isTopicAvailable = (topic: ITopic): boolean => topic.lessons.some(isLessonAvailable);

export const isModuleAvailable = (module: IModule): boolean => module.topics.some(isTopicAvailable);
