import type { IModule } from "@/entities/course/interfaces/course.interface";
import { getModuleFacts } from "@/entities/course/utils/labels.util";

const FACTS_SEPARATOR = " / ";

interface IModuleFactsLineProps {
  module: IModule;
}

export const ModuleFactsLine = ({ module }: IModuleFactsLineProps) => (
  <span className="opacity-0 transition group-hover:opacity-100 [@media(hover:none)]:opacity-100">
    {getModuleFacts(module).join(FACTS_SEPARATOR)}
  </span>
);
