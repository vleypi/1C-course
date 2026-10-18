import type { ICoverArtProps } from "@/entities/course/interfaces/module-cover.interface";
import { CoverCanvas } from "@/entities/course/components/module-card/covers/CoverCanvas";
import { GeometryCover } from "@/entities/course/components/module-card/covers/GeometryCover";
import { SUBJECT_ILLUSTRATIONS } from "@/entities/course/components/module-card/covers/subject-illustrations";

export const SubjectCover = ({ mark, seed, palette, viewBox }: ICoverArtProps) => {
  const Illustration = SUBJECT_ILLUSTRATIONS[seed];
  if (!Illustration) return <GeometryCover mark={mark} seed={seed} palette={palette} viewBox={viewBox} />;

  return (
    <CoverCanvas palette={palette} viewBox={viewBox}>
      <Illustration palette={palette} />
    </CoverCanvas>
  );
};
