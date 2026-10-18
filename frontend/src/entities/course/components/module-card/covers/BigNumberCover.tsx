import type { ICoverArtProps } from "@/entities/course/interfaces/module-cover.interface";
import { CoverCanvas } from "@/entities/course/components/module-card/covers/CoverCanvas";

export const BigNumberCover = ({ mark, palette, viewBox }: ICoverArtProps) => (
  <CoverCanvas palette={palette} viewBox={viewBox}>
    <text
      x="316"
      y="200"
      textAnchor="end"
      fontFamily="var(--font-jetbrains-mono), monospace"
      fontSize="176"
      fontWeight="900"
      letterSpacing="-8"
      fill={palette.primary}
    >
      {mark}
    </text>
  </CoverCanvas>
);
