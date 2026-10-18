import type { IModuleCoverPalette } from "@/entities/course/interfaces/module-cover.interface";
import type { IDot } from "@/entities/course/utils/dot-pattern.util";
import { CoverCanvas } from "@/entities/course/components/module-card/covers/CoverCanvas";

interface IDotGridProps {
  dots: IDot[];
  palette: IModuleCoverPalette;
  viewBox?: string;
  litRadius: number;
  dimRadius: number;
  dimOpacity: number;
}

export const DotGrid = ({ dots, palette, viewBox, litRadius, dimRadius, dimOpacity }: IDotGridProps) => (
  <CoverCanvas palette={palette} viewBox={viewBox}>
    {dots.map(({ x, y, lit }) => (
      <circle
        key={`${x}-${y}`}
        cx={x}
        cy={y}
        r={lit ? litRadius : dimRadius}
        fill={lit ? palette.primary : palette.secondary}
        fillOpacity={lit ? 1 : dimOpacity}
      />
    ))}
  </CoverCanvas>
);
