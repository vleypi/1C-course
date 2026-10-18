import { courseRepository, getModuleParams } from "@/entities/course";
import { ModuleDialog } from "@/views/module";

export const generateStaticParams = () => getModuleParams(courseRepository.listLessonLocations());

export default function Page({ params }: PageProps<"/modules/[module]">) {
  return <ModuleDialog params={params} />;
}
