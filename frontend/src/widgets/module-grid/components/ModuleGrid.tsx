import { Suspense } from "react";
import type { IModule } from "@/entities/course";
import { MODULE_GRID_TEXT } from "@/widgets/module-grid/constants/module-grid.constant";
import { ModuleCards } from "@/widgets/module-grid/components/ModuleCards";
import { ModuleCardsSkeleton } from "@/widgets/module-grid/components/ModuleCardsSkeleton";

interface IModuleGridProps {
  modules: readonly IModule[];
}

export const ModuleGrid = ({ modules }: IModuleGridProps) => (
  <section id="program" className="scroll-mt-24 pt-16">
    <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{MODULE_GRID_TEXT.heading}</h2>
    <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      <Suspense fallback={<ModuleCardsSkeleton count={modules.length} />}>
        <ModuleCards modules={modules} />
      </Suspense>
    </div>
  </section>
);
