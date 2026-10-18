import type {
  IModuleCardDesignConfig,
  ModuleCardDesign,
} from "@/entities/course/interfaces/module-card-design.interface";

export const MODULE_CARD_DESIGNS: Record<ModuleCardDesign, IModuleCardDesignConfig> = {
  dither: { layout: "stacked", cover: "dither" },
  fullBleed: { layout: "fullBleed", cover: "geometry" },
  dotNumber: { layout: "stacked", cover: "dotNumber" },
  dots: { layout: "stacked", cover: "dots" },
  bigNumber: { layout: "stacked", cover: "bigNumber" },
  stripes: { layout: "stacked", cover: "stripes" },
  editorial: { layout: "editorial", cover: "subject" },
  framed: { layout: "framed", cover: "subject" },
  subject: { layout: "stacked", cover: "subject" },
};

export const MODULE_CARD_DESIGN_IDS = Object.keys(MODULE_CARD_DESIGNS) as ModuleCardDesign[];

export const DEFAULT_MODULE_CARD_DESIGN: ModuleCardDesign = "dither";
