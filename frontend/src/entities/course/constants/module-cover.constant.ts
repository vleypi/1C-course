import { ART_COLORS, ART_PALETTES } from "@/shared/config";
import type { IModuleCoverPalette } from "@/entities/course/interfaces/module-cover.interface";

export const MODULE_COVER_PALETTES: readonly IModuleCoverPalette[] = ART_COLORS.map((color) => ART_PALETTES[color]);

export const DITHER_GRID = {
  columns: 40,
  rows: 20,
  cellSize: 8,
} as const;

export const BAYER_MATRIX_SIZE = 4;

export const BAYER_MATRIX = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5] as const;

export const DITHER_FIELD = {
  waveFrequencyX: 0.22,
  waveFrequencyY: 0.3,
  wavePhaseX: 1.7,
  waveWeight: 0.45,
  glowWeight: 0.75,
  glowFocusStart: 0.3,
  glowFocusStep: 0.37,
  glowFocusRange: 0.5,
  glowFocusY: 0.6,
  glowStretchY: 0.6,
  glowFalloff: 1.8,
  highlightOffset: 0.45,
} as const;

export const COVER_VIEWBOX = {
  width: 320,
  height: 160,
} as const;

export const COVER_FULL_VIEWBOX = `0 0 ${COVER_VIEWBOX.width} ${COVER_VIEWBOX.height}`;

export const COVER_BACKGROUND_BLEED = 160;

export const DOT_FIELD = {
  columns: 16,
  rows: 8,
  spacing: 20,
  offset: 10,
  dimRadius: 3,
  litRadius: 6,
  circleRadius: 3.6,
  circleCenterStart: 4,
  circleCenterStep: 5,
  circleCenterRange: 10,
  dimOpacity: 0.15,
} as const;

export const DOT_MATRIX = {
  columns: 20,
  rows: 9,
  spacing: 16,
  offsetX: 8,
  offsetY: 16,
  glyphWidth: 5,
  glyphHeight: 7,
  glyphGap: 1,
  firstGlyphRow: 1,
  rightEdgeColumn: 19,
  dimRadius: 2.5,
  litRadius: 5.5,
  dimOpacity: 0.15,
} as const;

export const DOT_DIGITS: Readonly<Record<string, readonly string[]>> = {
  "0": ["01110", "10001", "10011", "10101", "11001", "10001", "01110"],
  "1": ["00100", "01100", "00100", "00100", "00100", "00100", "01110"],
  "2": ["01110", "10001", "00001", "00010", "00100", "01000", "11111"],
  "3": ["11110", "00001", "00001", "01110", "00001", "00001", "11110"],
  "4": ["00010", "00110", "01010", "10010", "11111", "00010", "00010"],
  "5": ["11111", "10000", "11110", "00001", "00001", "10001", "01110"],
  "6": ["00110", "01000", "10000", "11110", "10001", "10001", "01110"],
  "7": ["11111", "00001", "00010", "00100", "01000", "01000", "01000"],
  "8": ["01110", "10001", "10001", "01110", "10001", "10001", "01110"],
  "9": ["01110", "10001", "10001", "01111", "00001", "00010", "01100"],
};

export const LIT_DOT = "1";
