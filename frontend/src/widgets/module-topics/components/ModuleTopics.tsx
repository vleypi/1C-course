import {
  COURSE_LEVELS,
  getTopicLessonIds,
  type IModule,
  ModuleBanner,
  ModuleHeading,
  ModuleTheme,
  toTopicLocations,
  TopicRow,
} from "@/entities/course";
import { CompletionCounter } from "@/entities/progress";
import { TabTrail } from "@/shared/ui";
import { MODULE_TOPICS_TEXT } from "@/widgets/module-topics/constants/module-topics.constant";

interface IModuleTopicsProps {
  module: IModule;
}

export const ModuleTopics = ({ module }: IModuleTopicsProps) => (
  <ModuleTheme module={module}>
    <ModuleBanner module={module} className="-mx-6 -mt-6 mb-8 h-36 sm:-mx-12 sm:-mt-12 sm:mb-10 sm:h-44" />
    <TabTrail items={[{ label: COURSE_LEVELS.module }]} />
    <ModuleHeading module={module} />
    <p className="mt-10 text-lg text-zinc-300">{MODULE_TOPICS_TEXT.listTitle}</p>
    <ol className="mt-4 divide-y divide-line/60">
      {toTopicLocations(module).map((location) => (
        <li key={location.topic.slug}>
          <TopicRow location={location} aside={<CompletionCounter lessonIds={getTopicLessonIds(location.topic)} />} />
        </li>
      ))}
    </ol>
  </ModuleTheme>
);
