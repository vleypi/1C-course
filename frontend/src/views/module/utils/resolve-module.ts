import { notFound } from "next/navigation";
import { courseRepository, isModuleAvailable, type IModule } from "@/entities/course";
import type { IModuleRouteParams } from "@/shared/config";

export const resolveModule = ({ module: moduleSlug }: IModuleRouteParams): IModule => {
  const foundModule = courseRepository.findModule(moduleSlug);
  if (!foundModule || !isModuleAvailable(foundModule)) notFound();

  return foundModule;
};
