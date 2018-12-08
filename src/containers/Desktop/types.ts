export interface IDesktopProps {}

export interface IDesktopState {
  width: string;
  color: string;
  height: string;
}

export enum Dimension {
  width = 'width',
  height = 'height',
}

export interface IDimensions {
  width: number;
  height: number;
}
