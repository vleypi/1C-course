import {
  COURSE_LEVELS,
  getModuleLabel,
  type ITopicLocation,
  LessonRow,
  ModuleBanner,
  ModuleTheme,
  toLessonLocations,
} from "@/entities/course";
import { LessonStatusIcon } from "@/entities/progress";
import { ROUTES } from "@/shared/config";
import { TabTrail } from "@/shared/ui";
import { TOPIC_LESSONS_TEXT } from "@/widgets/topic-lessons/constants/topic-lessons.constant";

interface ITopicLessonsProps {
  location: ITopicLocation;
}

export const TopicLessons = ({ location }: ITopicLessonsProps) => (
  <ModuleTheme module={location.module}>
    <ModuleBanner module={location.module} className="-mx-6 -mt-6 mb-8 h-36 sm:-mx-12 sm:-mt-12 sm:mb-10 sm:h-44" />
    <TabTrail
      items={[
        { label: COURSE_LEVELS.module, href: ROUTES.module(location.module.slug) },
        { label: COURSE_LEVELS.topic },
      ]}
    />
    <header className="mt-10">
      <p className="font-mono text-sm text-accent">
        {getModuleLabel(location.module)} · {COURSE_LEVELS.topic} {location.topicNumber}
      </p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-5xl">{location.topic.title}</h2>
    </header>
    <p className="mt-10 text-lg text-zinc-300">{TOPIC_LESSONS_TEXT.listTitle}</p>
    <ol className="mt-4 divide-y divide-line/60">
      {toLessonLocations(location).map((lessonLocation) => (
        <li key={lessonLocation.lesson.id}>
          <LessonRow location={lessonLocation} aside={<LessonStatusIcon lessonId={lessonLocation.lesson.id} />} />
        </li>
      ))}
    </ol>
  </ModuleTheme>
);
