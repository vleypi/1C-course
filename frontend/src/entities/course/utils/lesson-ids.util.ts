import type { IModule, ITopic } from "@/entities/course/interfaces/course.interface";

export const getTopicLessonIds = (topic: ITopic): string[] => topic.lessons.map((lesson) => lesson.id);

export const getModuleLessonIds = (module: IModule): string[] => module.topics.flatMap(getTopicLessonIds);
