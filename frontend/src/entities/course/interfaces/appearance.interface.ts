import type { ArtColor } from "@/shared/config";
import type { ModuleCardDesign } from "@/entities/course/interfaces/module-card-design.interface";

export interface IAppearance {
  design: ModuleCardDesign;
  color: ArtColor;
}

export type AppearanceOverrides = Partial<IAppearance>;

export interface IPreferenceWriter {
  write(key: string, value: string): void;
}
