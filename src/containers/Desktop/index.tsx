import React from 'react';

import {
  ColorSquare,
  ControlCenter,
  ControlCenterOptions,
  Controls,
  DownloadCTA,
  DrawArea,
  LeftInfo,
  MainContainer,
  RightInfo,
} from './styles';

import { Dimension, IDesktopProps, IDesktopState, IDimensions } from './types';

import TextInput from 'Components/TextInput';

import { themeConstants } from 'Src/shared/styles';

class Desktop extends React.PureComponent<IDesktopProps, IDesktopState> {
  public drawArea: React.RefObject<HTMLDivElement>;

  constructor(props: any) {
    super(props);

    this.state = {
      color: themeConstants.colors.buttons.primary,
      height: '400',
      width: '400',
    };

    this.drawArea = React.createRef();
  }

  public constrain = (type: Dimension, dimensions: IDimensions, maxDimensions: IDimensions) => {
    const { width, height } = dimensions;
    const { width: maxWidth, height: maxHeight } = maxDimensions;
    const aspectRatio = width / height;

    if (type === Dimension.width && width > maxWidth) {
      return {
        height: maxWidth / aspectRatio,
        width: maxWidth,
      };
    }
    if ( type === Dimension.height && height > maxHeight) {
      return {
        height: maxHeight,
        width: maxHeight * aspectRatio,
      };
    }
    return { width, height };
  }

  public getPreviewStyles = () => {
    const drawArea = this.drawArea && this.drawArea.current || null;
    const { height, width, color } = this.state;

    if (!drawArea) {
      return {
        backgroundColor: color,
        height: `${height}px`,
        width: `${width}px`,
      };
    }

    const { width: MAX_WIDTH, height: MAX_HEIGHT } = drawArea.getBoundingClientRect();
    let newWidth = parseInt(width, 10);
    let newHeight = parseInt(height, 10);

    if (newWidth > MAX_WIDTH) {
      const widthConstrained = this.constrain(Dimension.width, {
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
      const heightConstrained = this.constrain(Dimension.height, {
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

  public downloadImage = () => {
    const { width, height, color } = this.state;

    const canvas = document.createElement('canvas');
    canvas.width = Number(width);
    canvas.height = Number(height);
    const ctx = canvas.getContext('2d');

    if (ctx) {
      ctx.fillStyle = color;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    const url = canvas.toDataURL();

    const a = document.createElement('a');
    a.download = `${width}x${height}.png`;
    a.href = url;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  public handleInput = (e: React.SyntheticEvent)  => {
    const { target } = e;

    if (!target) {
      return;
    }

    const { name, value } = target as HTMLInputElement;

    const newState: IDesktopState = {
      ...this.state,
      [name]: value,
    };

    this.setState(newState);
  }

  public render() {
    return (
      <MainContainer>
        <ControlCenter>
          <ControlCenterOptions>
            <h1>
              Imaginer.
            </h1>
            <h2>
              Download custom sized images
            </h2>

            <Controls>
              <TextInput
                label='Width'
                name='width'
                right={<RightInfo>px</RightInfo>}
                value={this.state.width}
                onChange={this.handleInput}
              />

              <TextInput
                label='Height'
                name='height'
                right={<RightInfo>px</RightInfo>}
                value={this.state.height}
                onChange={this.handleInput}
              />

              <TextInput
                label='Color'
                name='color'
                left={
                    <LeftInfo>
                      <ColorSquare color={this.state.color}/>
                    </LeftInfo>
                }
                value={this.state.color}
                onChange={this.handleInput}
              />
            </Controls>
          </ControlCenterOptions>
          <DownloadCTA
            onClick={this.downloadImage}
          >
            Download
          </DownloadCTA>
        </ControlCenter>
        <DrawArea ref={this.drawArea}>
          <div style={this.getPreviewStyles()} />
        </DrawArea>
      </MainContainer>
    );
  }
}

export default Desktop;
