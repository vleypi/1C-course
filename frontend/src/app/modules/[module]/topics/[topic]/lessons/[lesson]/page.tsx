import type { Metadata } from "next";
import { courseRepository, getLessonParams } from "@/entities/course";
import { getLessonMetadata, LessonPage } from "@/views/lesson";

type LessonRouteProps = PageProps<"/modules/[module]/topics/[topic]/lessons/[lesson]">;

export const generateStaticParams = () => getLessonParams(courseRepository.listLessonLocations());

export async function generateMetadata({ params }: LessonRouteProps): Promise<Metadata> {
  return getLessonMetadata(await params);
}

export default function Page({ params }: LessonRouteProps) {
  return <LessonPage params={params} />;
}
