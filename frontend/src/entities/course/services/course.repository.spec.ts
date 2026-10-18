import { describe, expect, it } from "vitest";
import type { ICourse } from "@/entities/course/interfaces/course.interface";
import { findNextLesson } from "@/entities/course/utils/navigation.util";
import { getLessonParams, getModuleParams } from "@/entities/course/utils/static-params.util";
import { CourseRepository } from "@/entities/course/services/course.repository";

const lesson = (id: string, stepCount: number) => ({ id, slug: id.slice(-2), title: id, stepCount });

const course: ICourse = {
  title: "t",
  subtitle: "s",
  description: "d",
  weeklyLoad: "w",
  totalLessons: 3,
  totalWeeks: 2,
  modules: [
    {
      slug: "00",
      title: "Старт",
      goal: "g",
      keyword: "K",
      weeks: 2,
      hours: 8,
      track: "base",
      kind: "module",
      topics: [
        { slug: "01", title: "Первая", lessons: [lesson("00/01/01", 2), lesson("00/01/02", 0)] },
        { slug: "02", title: "Вторая", lessons: [lesson("00/02/01", 0)] },
      ],
    },
  ],
};

const repository = new CourseRepository(course);

describe("CourseRepository", () => {
  it("находит урок с номерами темы и урока", () => {
    const location = repository.findLesson("00", "01", "02");

    expect(location?.lesson.id).toBe("00/01/02");
    expect(location?.topicNumber).toBe(1);
    expect(location?.lessonNumber).toBe(2);
  });

  it("возвращает null для несуществующей темы", () => {
    expect(repository.findTopic("00", "09")).toBeNull();
  });

  it("находит следующий урок через границу темы", () => {
    expect(findNextLesson(repository.listLessonLocations(), "00/01/02")?.lesson.id).toBe("00/02/01");
    expect(findNextLesson(repository.listLessonLocations(), "00/02/01")).toBeNull();
  });

  it("отдаёт статические параметры только для написанных уроков", () => {
    expect(getLessonParams(repository.listLessonLocations())).toEqual([{ module: "00", topic: "01", lesson: "01" }]);
    expect(getModuleParams(repository.listLessonLocations())).toEqual([{ module: "00" }]);
  });
});
