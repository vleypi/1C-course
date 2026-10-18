import type { IModule } from "@/entities/course/interfaces/course.interface";
import type { ILessonLocation, ITopicLocation } from "@/entities/course/interfaces/location.interface";

export const toTopicLocations = (module: IModule): ITopicLocation[] =>
  module.topics.map((topic, index) => ({ module, topic, topicNumber: index + 1 }));

export const toLessonLocations = (location: ITopicLocation): ILessonLocation[] =>
  location.topic.lessons.map((lesson, index) => ({ ...location, lesson, lessonNumber: index + 1 }));
