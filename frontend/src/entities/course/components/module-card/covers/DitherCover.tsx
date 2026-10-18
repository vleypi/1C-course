import type { ICoverArtProps } from "@/entities/course/interfaces/module-cover.interface";
import { buildDitherLayers } from "@/entities/course/utils/module-cover.util";
import { CoverCanvas } from "@/entities/course/components/module-card/covers/CoverCanvas";

export const DitherCover = ({ seed, palette, viewBox }: ICoverArtProps) => {
  const layers = buildDitherLayers(seed);

  return (
    <CoverCanvas palette={palette} viewBox={viewBox}>
      <path d={layers.base} fill={palette.primary} fillOpacity={0.55} />
      <path d={layers.highlight} fill={palette.secondary} />
    </CoverCanvas>
  );
};
