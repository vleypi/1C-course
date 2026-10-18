import { courseRepository, getTopicParams } from "@/entities/course";
import { TopicDialog } from "@/views/topic";

export const generateStaticParams = () => getTopicParams(courseRepository.listLessonLocations());

export default function Page({ params }: PageProps<"/modules/[module]/topics/[topic]">) {
  return <TopicDialog params={params} />;
}
