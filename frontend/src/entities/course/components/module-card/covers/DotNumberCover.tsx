import { DOT_MATRIX } from "@/entities/course/constants/module-cover.constant";
import type { ICoverArtProps } from "@/entities/course/interfaces/module-cover.interface";
import { buildNumberDots } from "@/entities/course/utils/dot-pattern.util";
import { DotGrid } from "@/entities/course/components/module-card/covers/DotGrid";

export const DotNumberCover = ({ mark, palette, viewBox }: ICoverArtProps) => (
  <DotGrid
    dots={buildNumberDots(mark)}
    palette={palette}
    viewBox={viewBox}
    litRadius={DOT_MATRIX.litRadius}
    dimRadius={DOT_MATRIX.dimRadius}
    dimOpacity={DOT_MATRIX.dimOpacity}
  />
);
