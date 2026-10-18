import { joinClassNames } from "@/shared/lib";
import { LockIcon } from "@/shared/ui";
import type { IModuleCardLayoutProps } from "@/entities/course/interfaces/module-card-design.interface";
import { getModuleMark } from "@/entities/course/utils/labels.util";
import { ModuleFacts } from "@/entities/course/components/module-card/ModuleFacts";

const CORNER_CLASSES = [
  "-left-px -top-px border-l border-t",
  "-right-px -top-px border-r border-t",
  "-bottom-px -left-px border-b border-l",
  "-bottom-px -right-px border-b border-r",
];

export const FramedLayout = ({ module, available, cover, footer }: IModuleCardLayoutProps) => (
  <article className="relative flex h-full flex-col border border-line/70 bg-[repeating-linear-gradient(135deg,transparent_0_11px,rgb(255_255_255/0.025)_11px_12px)] p-3">
    {CORNER_CLASSES.map((corner) => (
      <span key={corner} className={joinClassNames("pointer-events-none absolute size-3 border-zinc-400", corner)} />
    ))}
    <div className="relative h-36 overflow-hidden">
      {cover}
      <ModuleFacts module={module} />
    </div>
    <div className="flex flex-1 flex-col gap-4 px-2 pb-2 pt-4">
      <div className="flex items-start justify-between gap-3">
        <h3 className={joinClassNames("text-lg font-medium leading-snug", !available && "text-zinc-500")}>
          {module.title}
        </h3>
        <span className="pt-1 font-mono text-xs text-muted">
          {available ? getModuleMark(module) : <LockIcon className="size-4" />}
        </span>
      </div>
      {footer && <div className="mt-auto">{footer}</div>}
    </div>
  </article>
);
