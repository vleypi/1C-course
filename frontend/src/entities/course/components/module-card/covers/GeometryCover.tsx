import type { ICoverArtProps } from "@/entities/course/interfaces/module-cover.interface";
import { CoverCanvas } from "@/entities/course/components/module-card/covers/CoverCanvas";
import { GEOMETRY_COMPOSITIONS } from "@/entities/course/components/module-card/covers/geometry-compositions";

export const GeometryCover = ({ seed, palette, viewBox }: ICoverArtProps) => {
  const Composition = GEOMETRY_COMPOSITIONS[seed % GEOMETRY_COMPOSITIONS.length];

  return (
    <CoverCanvas palette={palette} viewBox={viewBox}>
      <Composition palette={palette} />
    </CoverCanvas>
  );
};
