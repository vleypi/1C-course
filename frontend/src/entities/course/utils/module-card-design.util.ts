import {
  DEFAULT_MODULE_CARD_DESIGN,
  MODULE_CARD_DESIGN_IDS,
} from "@/entities/course/constants/module-card-design.constant";
import type { ModuleCardDesign } from "@/entities/course/interfaces/module-card-design.interface";

export const isModuleCardDesign = (value: unknown): value is ModuleCardDesign =>
  MODULE_CARD_DESIGN_IDS.includes(value as ModuleCardDesign);

export const toModuleCardDesign = (value: unknown): ModuleCardDesign =>
  isModuleCardDesign(value) ? value : DEFAULT_MODULE_CARD_DESIGN;
