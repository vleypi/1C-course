import type { ReactNode } from "react";
import type { IModule } from "@/entities/course/interfaces/course.interface";
import { courseRepository } from "@/entities/course/services/course.instance";
import { getModuleCoverPalette } from "@/entities/course/utils/module-cover.util";
import { toAccentStyle } from "@/entities/course/utils/module-theme.util";

interface IModuleThemeProps {
  module: IModule;
  className?: string;
  children: ReactNode;
}

export const ModuleTheme = ({ module, className, children }: IModuleThemeProps) => (
  <div className={className} style={toAccentStyle(getModuleCoverPalette(courseRepository.getModulePosition(module.slug)))}>
    {children}
  </div>
);
