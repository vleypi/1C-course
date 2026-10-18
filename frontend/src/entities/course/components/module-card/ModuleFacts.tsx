import type { IModule } from "@/entities/course/interfaces/course.interface";
import { getModuleFacts } from "@/entities/course/utils/labels.util";

interface IModuleFactsProps {
  module: IModule;
}

export const ModuleFacts = ({ module }: IModuleFactsProps) => (
  <ul className="absolute bottom-3 left-3 flex translate-y-1 flex-wrap gap-1.5 opacity-0 transition duration-200 group-hover:translate-y-0 group-hover:opacity-100 [@media(hover:none)]:translate-y-0 [@media(hover:none)]:opacity-100">
    {getModuleFacts(module).map((fact) => (
      <li key={fact} className="rounded-full bg-ink/70 px-2.5 py-1 text-xs text-zinc-100 backdrop-blur">
        {fact}
      </li>
    ))}
  </ul>
);
