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

import { IDesktopProps, IDesktopState } from './types';
import { Dimension, IDimensions } from 'Src/shared/types';

import TextInput from 'Components/TextInput';

import { themeConstants } from 'Src/shared/styles';
import downloader from 'Src/shared/utils/downloader';
import getPreviewStyles from 'Src/shared/utils/getPreviewStyles';

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

    return getPreviewStyles(drawArea, Number(width), Number(height), color);
  }

  public downloadImage = () => {
    const { width, height, color } = this.state;
    downloader(Number(width), Number(height), color);
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
