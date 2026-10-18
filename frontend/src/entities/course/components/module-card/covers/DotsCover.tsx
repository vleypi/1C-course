import { DOT_FIELD } from "@/entities/course/constants/module-cover.constant";
import type { ICoverArtProps } from "@/entities/course/interfaces/module-cover.interface";
import { buildCircleDots } from "@/entities/course/utils/dot-pattern.util";
import { DotGrid } from "@/entities/course/components/module-card/covers/DotGrid";

export const DotsCover = ({ seed, palette, viewBox }: ICoverArtProps) => (
  <DotGrid
    dots={buildCircleDots(seed)}
    palette={palette}
    viewBox={viewBox}
    litRadius={DOT_FIELD.litRadius}
    dimRadius={DOT_FIELD.dimRadius}
    dimOpacity={DOT_FIELD.dimOpacity}
  />
);
