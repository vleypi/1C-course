import type {
  ICourse,
  ILesson,
  IModule,
  ITopic,
} from "@/entities/course/interfaces/course.interface";

type LessonMark = "✅" | "⏳" | "🔒";

const PLAN_HEADER = [
  "# PLAN-LESSONS — карта курса «1С-разработчик»",
  "",
  "> Файл генерируется командой `pnpm course:generate` из папки `curriculum/`. Руками не редактировать.",
  "",
  "Иерархия: **Модуль → Тема → Урок**. Статусы: `✅` написан · `⏳` следующий · `🔒` ещё не написан.",
  "Урок считается написанным, если в его папке есть файлы `step-NN.mdx`.",
];

const createMarker = (lessons: ILesson[]) => {
  const nextLesson = lessons.find((lesson) => lesson.stepCount === 0);

  return (lesson: ILesson): LessonMark => {
    if (lesson.stepCount > 0) return "✅";
    return lesson === nextLesson ? "⏳" : "🔒";
  };
};

const renderTopic = (topic: ITopic, mark: (lesson: ILesson) => LessonMark): string[] => [
  `### Тема ${Number(topic.slug)}. ${topic.title}`,
  ...topic.lessons.map((lesson) => `${Number(lesson.slug)}. ${mark(lesson)} ${lesson.title}`),
  "",
];

const renderModule = (module: IModule, mark: (lesson: ILesson) => LessonMark): string[] => [
  "---",
  "",
  `## Модуль ${module.slug}. ${module.title}`,
  `${module.goal} · ${module.weeks} нед · ${module.hours} ч`,
  "",
  ...module.topics.flatMap((topic) => renderTopic(topic, mark)),
];

export const renderLessonPlan = (course: ICourse): string => {
  const lessons = course.modules.flatMap((module) => module.topics.flatMap((topic) => topic.lessons));
  const mark = createMarker(lessons);

  return [...PLAN_HEADER, "", ...course.modules.flatMap((module) => renderModule(module, mark))].join("\n");
};
