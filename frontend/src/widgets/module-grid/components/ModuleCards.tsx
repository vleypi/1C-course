import { getModuleLessonIds, type IModule, ModuleCard } from "@/entities/course";
import { readModuleCardDesign } from "@/entities/course/server";
import { CompletionBar } from "@/entities/progress";
import { ROUTES } from "@/shared/config";

interface IModuleCardsProps {
  modules: readonly IModule[];
}

export const ModuleCards = async ({ modules }: IModuleCardsProps) => {
  const design = await readModuleCardDesign();

  return modules.map((module, index) => (
    <ModuleCard
      key={module.slug}
      module={module}
      coverSeed={index}
      design={design}
      href={ROUTES.module(module.slug)}
      footer={<CompletionBar lessonIds={getModuleLessonIds(module)} />}
    />
  ));
};
