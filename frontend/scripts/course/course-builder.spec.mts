import { describe, expect, it } from "vitest";
import type { IContentSource } from "#course/content.interface.mts";
import { CourseBuilder } from "#course/course-builder.mts";

const JSON_FILES: Record<string, unknown> = {
  "course.json": { title: "Курс", subtitle: "s", description: "d", weeklyLoad: "w", modules: ["module-00"] },
  "module-00/module.json": { title: "Старт", goal: "g", keyword: "K", weeks: 2, hours: 8, track: "base", kind: "module" },
  "module-00/topic-01/topic.json": { title: "Тема", lessons: ["Первый", "Второй"] },
};

const createSource = (stepFiles: Record<string, string[]>): IContentSource => ({
  readJson: async <T,>(...segments: string[]) => JSON_FILES[segments.join("/")] as T,
  listEntries: async (prefix, ...segments) => {
    if (prefix === "topic-") return ["topic-01"];
    return stepFiles[segments.join("/")] ?? [];
  },
});

describe("CourseBuilder", () => {
  it("строит дерево курса и считает шаги уроков", async () => {
    const source = createSource({ "module-00/topic-01/lesson-01": ["step-01.mdx", "step-02.mdx"] });
    const course = await new CourseBuilder(source).build();
    const [first, second] = course.modules[0].topics[0].lessons;

    expect(course.totalLessons).toBe(2);
    expect(course.totalWeeks).toBe(2);
    expect(first).toEqual({ id: "00/01/01", slug: "01", title: "Первый", stepCount: 2 });
    expect(second.stepCount).toBe(0);
  });

  it("падает, если шаги пронумерованы с пропуском", async () => {
    const source = createSource({ "module-00/topic-01/lesson-01": ["step-01.mdx", "step-03.mdx"] });

    await expect(new CourseBuilder(source).build()).rejects.toThrow("step-02.mdx");
  });
});
