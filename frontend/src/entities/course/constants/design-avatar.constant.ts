import type { ModuleCardDesign } from "@/entities/course/interfaces/module-card-design.interface";
import type { ICoverFrame } from "@/entities/course/interfaces/module-cover.interface";

export const AVATAR_MARK = "1";

export const DESIGN_AVATAR_SEEDS: Record<ModuleCardDesign, number> = {
  dither: 2,
  fullBleed: 0,
  dotNumber: 0,
  dots: 1,
  bigNumber: 0,
  stripes: 0,
  editorial: 1,
  framed: 2,
  subject: 0,
};

export const DESIGN_AVATAR_FRAMES: Record<ModuleCardDesign, ICoverFrame> = {
  dither: { x: 113, y: 30, size: 120 },
  fullBleed: { x: 45, y: -15, size: 190 },
  dotNumber: { x: 178, y: 10, size: 140 },
  dots: { x: 110, y: 10, size: 160 },
  bigNumber: { x: 188, y: 61, size: 150 },
  stripes: { x: 80, y: 0, size: 160 },
  editorial: { x: 87, y: 13, size: 170 },
  framed: { x: 65, y: -15, size: 190 },
  subject: { x: 85, y: 5, size: 150 },
};

export const AVATAR_SIZE_CLASSES = {
  sm: "size-9",
  md: "size-14",
  lg: "size-32",
} as const;

export type AvatarSize = keyof typeof AVATAR_SIZE_CLASSES;
