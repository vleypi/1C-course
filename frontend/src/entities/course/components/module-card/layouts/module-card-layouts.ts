import type { ComponentType } from "react";
import type {
  IModuleCardLayoutProps,
  ModuleCardLayout,
} from "@/entities/course/interfaces/module-card-design.interface";
import { EditorialLayout } from "@/entities/course/components/module-card/layouts/EditorialLayout";
import { FramedLayout } from "@/entities/course/components/module-card/layouts/FramedLayout";
import { FullBleedLayout } from "@/entities/course/components/module-card/layouts/FullBleedLayout";
import { StackedLayout } from "@/entities/course/components/module-card/layouts/StackedLayout";

export const MODULE_CARD_LAYOUTS: Record<ModuleCardLayout, ComponentType<IModuleCardLayoutProps>> = {
  stacked: StackedLayout,
  fullBleed: FullBleedLayout,
  framed: FramedLayout,
  editorial: EditorialLayout,
};
