import type { IRouteParamsProps, ITopicRouteParams } from "@/shared/config";
import { TopicLessons } from "@/widgets/topic-lessons";
import { resolveTopic } from "@/views/topic/utils/resolve-topic";

export const TopicLessonsLoader = async ({ params }: IRouteParamsProps<ITopicRouteParams>) => (
  <TopicLessons location={resolveTopic(await params)} />
);
