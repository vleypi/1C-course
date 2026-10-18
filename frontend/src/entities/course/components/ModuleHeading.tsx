import type { IModule } from "@/entities/course/interfaces/course.interface";
import { getModuleLabel } from "@/entities/course/utils/labels.util";

interface IModuleHeadingProps {
  module: IModule;
}

export const ModuleHeading = ({ module }: IModuleHeadingProps) => (
  <header className="mt-10">
    <p className="font-mono text-sm text-accent">{getModuleLabel(module)}</p>
    <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-5xl">{module.title}</h2>
    <p className="mt-4 text-muted">{module.goal}</p>
  </header>
);
