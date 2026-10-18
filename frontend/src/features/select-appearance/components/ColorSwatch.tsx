import { ART_PALETTES, type ArtColor } from "@/shared/config";

interface IColorSwatchProps {
  color: ArtColor;
}

export const ColorSwatch = ({ color }: IColorSwatchProps) => {
  const palette = ART_PALETTES[color];

  return (
    <span className="grid size-9 place-items-center rounded-full" style={{ background: palette.background }}>
      <span className="size-4 rounded-full" style={{ background: palette.primary }} />
    </span>
  );
};
