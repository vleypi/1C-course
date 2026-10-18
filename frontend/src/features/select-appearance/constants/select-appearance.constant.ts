import type { ModuleCardDesign } from "@/entities/course";
import type { ArtColor } from "@/shared/config";

export const SELECT_APPEARANCE_TEXT = {
  avatar: "Аватар",
  style: "Стиль",
  color: "Цвет",
  preview: "Так выглядят модули на главной",
} as const;

export const MODULE_CARD_DESIGN_NAMES: Record<ModuleCardDesign, string> = {
  dither: "Дизеринг",
  fullBleed: "Во всю карточку",
  dotNumber: "Число из точек",
  dots: "Точки",
  bigNumber: "Огромный номер",
  stripes: "Полосы",
  editorial: "Редакционная",
  framed: "Рамка с уголками",
  subject: "Про предмет",
};

export const ART_COLOR_NAMES: Record<ArtColor, string> = {
  green: "Зелёный",
  indigo: "Индиго",
  brick: "Кирпичный",
  teal: "Бирюзовый",
  plum: "Сливовый",
  blue: "Синий",
};
