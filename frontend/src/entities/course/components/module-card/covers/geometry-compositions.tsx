import type { ComponentType } from "react";
import type { ICoverPaletteProps } from "@/entities/course/interfaces/module-cover.interface";

const SunComposition = ({ palette }: ICoverPaletteProps) => (
  <>
    <circle cx="240" cy="80" r="90" fill={palette.primary} />
    <circle cx="90" cy="60" r="26" fill={palette.secondary} />
  </>
);

const ArchComposition = ({ palette }: ICoverPaletteProps) => (
  <>
    <path d="M185 160V95a55 55 0 0 1 110 0v65Z" fill={palette.primary} />
    <circle cx="85" cy="70" r="30" fill={palette.secondary} />
  </>
);

const PairComposition = ({ palette }: ICoverPaletteProps) => (
  <>
    <circle cx="130" cy="80" r="62" fill={palette.primary} />
    <circle cx="205" cy="80" r="62" fill={palette.secondary} fillOpacity="0.85" />
  </>
);

const CornerComposition = ({ palette }: ICoverPaletteProps) => (
  <>
    <path d="M0 0h140A140 140 0 0 1 0 140Z" fill={palette.primary} />
    <circle cx="235" cy="100" r="42" fill={palette.secondary} />
  </>
);

const HorizonComposition = ({ palette }: ICoverPaletteProps) => (
  <>
    <circle cx="160" cy="170" r="110" fill={palette.primary} />
    <circle cx="255" cy="45" r="18" fill={palette.secondary} />
  </>
);

export const GEOMETRY_COMPOSITIONS: readonly ComponentType<ICoverPaletteProps>[] = [
  SunComposition,
  ArchComposition,
  PairComposition,
  CornerComposition,
  HorizonComposition,
];
