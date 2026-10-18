import { DOT_DIGITS, DOT_FIELD, DOT_MATRIX, LIT_DOT } from "@/entities/course/constants/module-cover.constant";

export interface IDot {
  x: number;
  y: number;
  lit: boolean;
}

const createDots = (columns: number, rows: number, isLit: (column: number, row: number) => boolean) =>
  Array.from({ length: columns * rows }, (_, index) => {
    const column = index % columns;
    const row = Math.floor(index / columns);
    return { column, row, lit: isLit(column, row) };
  });

export const buildCircleDots = (seed: number): IDot[] => {
  const centerColumn =
    DOT_FIELD.circleCenterStart + ((seed * DOT_FIELD.circleCenterStep) % DOT_FIELD.circleCenterRange);
  const centerRow = DOT_FIELD.rows / 2;

  return createDots(DOT_FIELD.columns, DOT_FIELD.rows, (column, row) =>
    Math.hypot(column - centerColumn, row - centerRow) < DOT_FIELD.circleRadius,
  ).map(({ column, row, lit }) => ({
    x: DOT_FIELD.offset + column * DOT_FIELD.spacing,
    y: DOT_FIELD.offset + row * DOT_FIELD.spacing,
    lit,
  }));
};

export const buildNumberDots = (label: string): IDot[] => {
  const glyphs = label.split("").flatMap((char) => DOT_DIGITS[char] ?? []);
  const glyphStep = DOT_MATRIX.glyphWidth + DOT_MATRIX.glyphGap;
  const digits = glyphs.length / DOT_MATRIX.glyphHeight;
  const firstColumn = DOT_MATRIX.rightEdgeColumn - digits * glyphStep;

  const isLit = (column: number, row: number): boolean => {
    const localColumn = column - firstColumn;
    const glyphRow = row - DOT_MATRIX.firstGlyphRow;
    const digit = Math.floor(localColumn / glyphStep);
    const glyphColumn = localColumn % glyphStep;
    if (localColumn < 0 || digit >= digits || glyphColumn >= DOT_MATRIX.glyphWidth) return false;
    if (glyphRow < 0 || glyphRow >= DOT_MATRIX.glyphHeight) return false;
    return glyphs[digit * DOT_MATRIX.glyphHeight + glyphRow][glyphColumn] === LIT_DOT;
  };

  return createDots(DOT_MATRIX.columns, DOT_MATRIX.rows, isLit).map(({ column, row, lit }) => ({
    x: DOT_MATRIX.offsetX + column * DOT_MATRIX.spacing,
    y: DOT_MATRIX.offsetY + row * DOT_MATRIX.spacing,
    lit,
  }));
};
