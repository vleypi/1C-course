export type ArtColor = "green" | "indigo" | "brick" | "teal" | "plum" | "blue";

export interface IArtPalette {
  background: string;
  primary: string;
  secondary: string;
}

export const ART_PALETTES: Record<ArtColor, IArtPalette> = {
  green: { background: "#2f4b3c", primary: "#8fc1a9", secondary: "#e8e1d3" },
  indigo: { background: "#3b3f6b", primary: "#9aa5e6", secondary: "#f0c8b4" },
  brick: { background: "#6b3b3b", primary: "#e59a7c", secondary: "#f3e3d3" },
  teal: { background: "#22495a", primary: "#6cc3c9", secondary: "#f2d6c2" },
  plum: { background: "#4d3b63", primary: "#c49ad8", secondary: "#efe4f2" },
  blue: { background: "#384a63", primary: "#8fb3e0", secondary: "#e9eef5" },
};

export const ART_COLORS = Object.keys(ART_PALETTES) as ArtColor[];

export const DEFAULT_ART_COLOR: ArtColor = "green";
