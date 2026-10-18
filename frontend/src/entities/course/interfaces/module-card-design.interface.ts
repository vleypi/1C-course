import type { ReactNode } from "react";
import type { IModule } from "@/entities/course/interfaces/course.interface";

export type ModuleCardDesign =
  | "dither"
  | "fullBleed"
  | "dotNumber"
  | "dots"
  | "bigNumber"
  | "stripes"
  | "editorial"
  | "framed"
  | "subject";

export type ModuleCardLayout = "stacked" | "fullBleed" | "framed" | "editorial";

export type ModuleCoverKind = "dither" | "geometry" | "dotNumber" | "dots" | "bigNumber" | "stripes" | "subject";

export interface IModuleCardDesignConfig {
  layout: ModuleCardLayout;
  cover: ModuleCoverKind;
}

export interface IModuleCardLayoutProps {
  module: IModule;
  available: boolean;
  cover: ReactNode;
  footer?: ReactNode;
}
