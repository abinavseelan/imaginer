export enum Dimension {
  width = 'width',
  height = 'height',
}

export interface IDimensions {
  width: number;
  height: number;
}

export interface IImageMeta {
  width: number;
  height: number;
  color: string;
  format: string;
}
