export interface IModuleCoverPalette {
  background: string;
  primary: string;
  secondary: string;
}

export interface IDitherLayers {
  base: string;
  highlight: string;
}

export interface ICoverArtProps {
  mark: string;
  seed: number;
  palette: IModuleCoverPalette;
  viewBox?: string;
}

export interface ICoverFrame {
  x: number;
  y: number;
  size: number;
}

export interface ICoverPaletteProps {
  palette: IModuleCoverPalette;
}
