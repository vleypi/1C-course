import type {
  ICourse,
  ILesson,
  IModule,
  ITopic,
} from "@/entities/course/interfaces/course.interface";
import { CONTENT_FILES, CONTENT_PREFIXES } from "#course/content.constant.mts";
import type {
  IContentSource,
  IRawCourse,
  IRawModule,
  IRawTopic,
} from "#course/content.interface.mts";
import { padNumber, stripPrefix, toLessonFolder, toStepFile } from "#course/content-paths.util.mts";

interface ITopicContext {
  moduleFolder: string;
  topicFolder: string;
  lessonIdPrefix: string;
}

export class CourseBuilder {
  readonly #source: IContentSource;

  constructor(source: IContentSource) {
    this.#source = source;
  }

  async build(): Promise<ICourse> {
    const raw = await this.#source.readJson<IRawCourse>(CONTENT_FILES.course);
    const modules = await Promise.all(raw.modules.map((folder) => this.#buildModule(folder)));

    return {
      title: raw.title,
      subtitle: raw.subtitle,
      description: raw.description,
      weeklyLoad: raw.weeklyLoad,
      totalLessons: modules.flatMap((module) => module.topics.flatMap((topic) => topic.lessons)).length,
      totalWeeks: modules.reduce((sum, module) => sum + module.weeks, 0),
      modules,
    };
  }

  async #buildModule(moduleFolder: string): Promise<IModule> {
    const raw = await this.#source.readJson<IRawModule>(moduleFolder, CONTENT_FILES.module);
    const topicFolders = await this.#source.listEntries(CONTENT_PREFIXES.topic, moduleFolder);
    const slug = stripPrefix(moduleFolder, CONTENT_PREFIXES.module);
    const topics = await Promise.all(
      topicFolders.map((topicFolder) => this.#buildTopic(moduleFolder, topicFolder, slug)),
    );

    return { slug, ...raw, topics };
  }

  async #buildTopic(moduleFolder: string, topicFolder: string, moduleSlug: string): Promise<ITopic> {
    const raw = await this.#source.readJson<IRawTopic>(moduleFolder, topicFolder, CONTENT_FILES.topic);
    const slug = stripPrefix(topicFolder, CONTENT_PREFIXES.topic);
    const context = { moduleFolder, topicFolder, lessonIdPrefix: `${moduleSlug}/${slug}` };
    const lessons = await Promise.all(
      raw.lessons.map((title, index) => this.#buildLesson(context, title, index + 1)),
    );

    return { slug, title: raw.title, lessons };
  }

  async #buildLesson(context: ITopicContext, title: string, lessonNumber: number): Promise<ILesson> {
    const slug = padNumber(lessonNumber);
    const id = `${context.lessonIdPrefix}/${slug}`;
    const stepFiles = await this.#source.listEntries(
      CONTENT_PREFIXES.step,
      context.moduleFolder,
      context.topicFolder,
      toLessonFolder(lessonNumber),
    );

    assertSequentialSteps(id, stepFiles);

    return { id, slug, title, stepCount: stepFiles.length };
  }
}

const assertSequentialSteps = (lessonId: string, stepFiles: string[]): void => {
  stepFiles.forEach((file, index) => {
    const expected = toStepFile(index + 1);
    if (file !== expected) {
      throw new Error(`Урок ${lessonId}: ожидался файл ${expected}, найден ${file}`);
    }
  });
};
