import { joinClassNames } from "@/shared/lib";
import type { IModuleCardLayoutProps } from "@/entities/course/interfaces/module-card-design.interface";
import { CoverLock } from "@/entities/course/components/module-card/CoverLock";
import { ModuleFacts } from "@/entities/course/components/module-card/ModuleFacts";

export const FullBleedLayout = ({ module, available, cover, footer }: IModuleCardLayoutProps) => (
  <article
    className={joinClassNames(
      "relative h-64 overflow-hidden rounded-2xl transition duration-200",
      available && "group-hover:-translate-y-1",
    )}
  >
    <div className="absolute inset-0">{cover}</div>
    {!available && <CoverLock />}
    <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 bg-linear-to-t from-ink via-ink/80 to-transparent p-5 pt-16">
      <div className="relative h-7">
        <ModuleFacts module={module} />
      </div>
      <h3 className={joinClassNames("text-lg font-medium leading-snug", !available && "text-zinc-400")}>
        {module.title}
      </h3>
      {footer}
    </div>
  </article>
);
