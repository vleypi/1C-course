import {
  BAYER_MATRIX,
  BAYER_MATRIX_SIZE,
  DITHER_FIELD,
  DITHER_GRID,
  MODULE_COVER_PALETTES,
} from "@/entities/course/constants/module-cover.constant";
import type { IDitherLayers, IModuleCoverPalette } from "@/entities/course/interfaces/module-cover.interface";

const getBayerThreshold = (column: number, row: number): number =>
  (BAYER_MATRIX[(column % BAYER_MATRIX_SIZE) + (row % BAYER_MATRIX_SIZE) * BAYER_MATRIX_SIZE] + 0.5) /
  BAYER_MATRIX.length;

const getFieldValue = (column: number, row: number, seed: number): number => {
  const wave =
    0.5 +
    0.5 *
      Math.sin(column * DITHER_FIELD.waveFrequencyX + seed * DITHER_FIELD.wavePhaseX) *
      Math.cos(row * DITHER_FIELD.waveFrequencyY - seed);
  const focusX = DITHER_FIELD.glowFocusStart + ((seed * DITHER_FIELD.glowFocusStep) % DITHER_FIELD.glowFocusRange);
  const distance = Math.hypot(
    column / DITHER_GRID.columns - focusX,
    (row / DITHER_GRID.rows - DITHER_FIELD.glowFocusY) * DITHER_FIELD.glowStretchY,
  );
  const glow = Math.max(0, 1 - distance * DITHER_FIELD.glowFalloff);
  return wave * DITHER_FIELD.waveWeight + glow * DITHER_FIELD.glowWeight;
};

const toSquarePath = (column: number, row: number): string => {
  const size = DITHER_GRID.cellSize;
  return `M${column * size} ${row * size}h${size}v${size}h-${size}Z`;
};

export const buildDitherLayers = (seed: number): IDitherLayers => {
  const layers: IDitherLayers = { base: "", highlight: "" };
  for (let row = 0; row < DITHER_GRID.rows; row += 1) {
    for (let column = 0; column < DITHER_GRID.columns; column += 1) {
      const value = getFieldValue(column, row, seed);
      const threshold = getBayerThreshold(column, row);
      if (value > threshold + DITHER_FIELD.highlightOffset) layers.highlight += toSquarePath(column, row);
      else if (value > threshold) layers.base += toSquarePath(column, row);
    }
  }
  return layers;
};

export const getModuleCoverPalette = (seed: number): IModuleCoverPalette =>
  MODULE_COVER_PALETTES[seed % MODULE_COVER_PALETTES.length];
