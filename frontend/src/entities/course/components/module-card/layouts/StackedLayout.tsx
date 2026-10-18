import { joinClassNames } from "@/shared/lib";
import type { IModuleCardLayoutProps } from "@/entities/course/interfaces/module-card-design.interface";
import { CoverLock } from "@/entities/course/components/module-card/CoverLock";
import { ModuleCardBody } from "@/entities/course/components/module-card/ModuleCardBody";
import { ModuleFacts } from "@/entities/course/components/module-card/ModuleFacts";

export const StackedLayout = ({ module, available, cover, footer }: IModuleCardLayoutProps) => (
  <article
    className={joinClassNames(
      "flex h-full flex-col overflow-hidden rounded-2xl bg-card transition duration-200",
      available && "group-hover:-translate-y-1",
    )}
  >
    <div className="relative h-40 overflow-hidden">
      {cover}
      {!available && <CoverLock />}
      <ModuleFacts module={module} />
    </div>
    <ModuleCardBody title={module.title} available={available} footer={footer} />
  </article>
);
