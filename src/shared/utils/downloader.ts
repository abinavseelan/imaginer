import { IImageMeta } from 'Src/shared/types';

function getFormat(formatString: string) {
  switch (formatString) {
    case '.png': {
      return 'image/png';
    }

    case '.jpg': {
      return 'image/jpeg';
    }

    default: {
      return 'image/png';
    }
  }
}

export default function downloader(imageMeta: IImageMeta) {
  const canvas = document.createElement('canvas');
  canvas.width = imageMeta.width;
  canvas.height = imageMeta.height;
  const ctx = canvas.getContext('2d');

  if (ctx) {
    ctx.fillStyle = imageMeta.color;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  const url = canvas.toDataURL(getFormat(imageMeta.format), 1.0);

  const a = document.createElement('a');
  a.download = `${imageMeta.width}x${imageMeta.height}${imageMeta.format}`;
  a.href = url;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
