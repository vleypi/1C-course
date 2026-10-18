import type { CSSProperties } from "react";
import type { IModuleCoverPalette } from "@/entities/course/interfaces/module-cover.interface";

export const toAccentStyle = (palette: IModuleCoverPalette): CSSProperties =>
  ({ "--color-accent": palette.primary }) as CSSProperties;
