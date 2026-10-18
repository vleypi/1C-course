import type { ILesson, IModule, ITopic } from "@/entities/course/interfaces/course.interface";

export interface ITopicLocation {
  module: IModule;
  topic: ITopic;
  topicNumber: number;
}

export interface ILessonLocation extends ITopicLocation {
  lesson: ILesson;
  lessonNumber: number;
}
