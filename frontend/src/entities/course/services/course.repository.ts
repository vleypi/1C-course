import type { ICourse, IModule } from "@/entities/course/interfaces/course.interface";
import type { ILessonLocation, ITopicLocation } from "@/entities/course/interfaces/location.interface";

export class CourseRepository {
  readonly #course: ICourse;
  readonly #lessonLocations: readonly ILessonLocation[];

  constructor(course: ICourse) {
    this.#course = course;
    this.#lessonLocations = flattenLessons(course);
  }

  getCourse(): ICourse {
    return this.#course;
  }

  listLessonLocations(): readonly ILessonLocation[] {
    return this.#lessonLocations;
  }

  getModulePosition(moduleSlug: string): number {
    return Math.max(0, this.#course.modules.findIndex((module) => module.slug === moduleSlug));
  }

  findModule(moduleSlug: string): IModule | null {
    return this.#course.modules.find((module) => module.slug === moduleSlug) ?? null;
  }

  findTopic(moduleSlug: string, topicSlug: string): ITopicLocation | null {
    const foundModule = this.findModule(moduleSlug);
    const topicIndex = foundModule?.topics.findIndex((topic) => topic.slug === topicSlug) ?? -1;
    if (!foundModule || topicIndex < 0) return null;

    return { module: foundModule, topic: foundModule.topics[topicIndex], topicNumber: topicIndex + 1 };
  }

  findLesson(moduleSlug: string, topicSlug: string, lessonSlug: string): ILessonLocation | null {
    return (
      this.#lessonLocations.find(
        ({ module, topic, lesson }) =>
          module.slug === moduleSlug && topic.slug === topicSlug && lesson.slug === lessonSlug,
      ) ?? null
    );
  }
}

const flattenLessons = (course: ICourse): ILessonLocation[] =>
  course.modules.flatMap((module) =>
    module.topics.flatMap((topic, topicIndex) =>
      topic.lessons.map((lesson, lessonIndex) => ({
        module,
        topic,
        lesson,
        topicNumber: topicIndex + 1,
        lessonNumber: lessonIndex + 1,
      })),
    ),
  );
