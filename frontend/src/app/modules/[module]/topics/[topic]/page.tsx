import { courseRepository, getTopicParams } from "@/entities/course";
import { TopicPage } from "@/views/topic";

export const generateStaticParams = () => getTopicParams(courseRepository.listLessonLocations());

export default function Page({ params }: PageProps<"/modules/[module]/topics/[topic]">) {
  return <TopicPage params={params} />;
}
