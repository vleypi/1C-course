import { joinClassNames } from "@/shared/lib";
import { LockIcon } from "@/shared/ui";
import type { IModuleCardLayoutProps } from "@/entities/course/interfaces/module-card-design.interface";
import { getModuleMark } from "@/entities/course/utils/labels.util";
import { ModuleFactsLine } from "@/entities/course/components/module-card/ModuleFactsLine";

export const EditorialLayout = ({ module, available, cover, footer }: IModuleCardLayoutProps) => (
  <article className="flex h-full flex-col">
    <div className="relative aspect-[2/1] overflow-hidden rounded-xl">{cover}</div>
    <div className="mt-4 flex items-center justify-between gap-3 font-mono text-[11px] uppercase tracking-wider text-muted">
      <span>{getModuleMark(module)}</span>
      <ModuleFactsLine module={module} />
      {!available && <LockIcon className="size-3.5" />}
    </div>
    <h3
      className={joinClassNames(
        "mt-2 text-2xl font-medium leading-tight tracking-tight",
        !available && "text-zinc-500",
      )}
    >
      {module.title}
    </h3>
    {footer && <div className="mt-auto pt-5">{footer}</div>}
  </article>
);
