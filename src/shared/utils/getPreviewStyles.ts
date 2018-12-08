import { Dimension, IDimensions } from 'Src/shared/types';

function constrain(type: Dimension, dimensions: IDimensions, maxDimensions: IDimensions) {
  const { width, height } = dimensions;
  const { width: maxWidth, height: maxHeight } = maxDimensions;
  const aspectRatio = width / height;

  if (type === Dimension.width && width > maxWidth) {
    return {
      height: maxWidth / aspectRatio,
      width: maxWidth,
    };
  }
  if (type === Dimension.height && height > maxHeight) {
    return {
      height: maxHeight,
      width: maxHeight * aspectRatio,
    };
  }
  return { width, height };
}

export default function getPreviewStyles(
  element: HTMLDivElement,
  width: number,
  height: number,
  color: string,
) {
  const { width: MAX_WIDTH, height: MAX_HEIGHT } = element.getBoundingClientRect();
  let newWidth = width;
  let newHeight = height;

  if (newWidth > MAX_WIDTH) {
    const widthConstrained = constrain(Dimension.width, {
      height: newHeight,
      width: newWidth,
    }, {
        height: MAX_HEIGHT,
        width: MAX_WIDTH,
      });
    newWidth = widthConstrained.width;
    newHeight = widthConstrained.height;
  }

  if (newHeight > MAX_HEIGHT) {
    const heightConstrained = constrain(Dimension.height, {
      height: newHeight,
      width: newWidth,
    }, {
        height: MAX_HEIGHT,
        width: MAX_WIDTH,
      });
    newWidth = heightConstrained.width;
    newHeight = heightConstrained.height;
  }

  return {
    backgroundColor: color,
    height: `${newHeight}px`,
    width: `${newWidth}px`,
  };
}
