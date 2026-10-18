import { courseRepository, getModuleParams } from "@/entities/course";
import { ModulePage } from "@/views/module";

export const generateStaticParams = () => getModuleParams(courseRepository.listLessonLocations());

export default function Page({ params }: PageProps<"/modules/[module]">) {
  return <ModulePage params={params} />;
}
