import { ART_COLORS, type ArtColor, DEFAULT_ART_COLOR } from "@/shared/config";

export const isArtColor = (value: unknown): value is ArtColor => ART_COLORS.includes(value as ArtColor);

export const toArtColor = (value: unknown): ArtColor => (isArtColor(value) ? value : DEFAULT_ART_COLOR);
