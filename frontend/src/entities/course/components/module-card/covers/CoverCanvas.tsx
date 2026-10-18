import type { ReactNode } from "react";
import {
  COVER_BACKGROUND_BLEED,
  COVER_FULL_VIEWBOX,
  COVER_VIEWBOX,
} from "@/entities/course/constants/module-cover.constant";
import type { IModuleCoverPalette } from "@/entities/course/interfaces/module-cover.interface";

interface ICoverCanvasProps {
  palette: IModuleCoverPalette;
  viewBox?: string;
  children: ReactNode;
}

export const CoverCanvas = ({ palette, viewBox = COVER_FULL_VIEWBOX, children }: ICoverCanvasProps) => (
  <svg viewBox={viewBox} preserveAspectRatio="xMidYMid slice" className="size-full" aria-hidden="true">
    <rect
      x={-COVER_BACKGROUND_BLEED}
      y={-COVER_BACKGROUND_BLEED}
      width={COVER_VIEWBOX.width + COVER_BACKGROUND_BLEED * 2}
      height={COVER_VIEWBOX.height + COVER_BACKGROUND_BLEED * 2}
      fill={palette.background}
    />
    {children}
  </svg>
);
