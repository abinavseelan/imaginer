import React from 'react';

import {
  ClickableText,
  ColorSquare,
  ControlCenter,
  ControlCenterOptions,
  Controls,
  DownloadCTA,
  DrawArea,
  Left,
  LeftInfo,
  MainContainer,
  RightInfo,
  Top,
} from './styles';

import { IDesktopProps, IDesktopState } from './types';

import TextInput from 'Components/TextInput';
import Dropdown from 'Components/Dropdown';

import { ColorList, themeConstants } from 'Src/shared/styles';
import downloader from 'Src/shared/utils/downloader';
import getPreviewStyles from 'Src/shared/utils/getPreviewStyles';

class Desktop extends React.PureComponent<IDesktopProps, IDesktopState> {
  public drawArea: React.RefObject<HTMLDivElement>;

  constructor(props: any) {
    super(props);

    this.state = {
      color: themeConstants.colors.buttons.primary,
      format: '.png',
      height: '400',
      width: '400',
    };

    this.drawArea = React.createRef();
  }

  public getPreviewStyles = () => {
    const drawArea = this.drawArea && this.drawArea.current || null;
    const { height, width, color, format } = this.state;

    if (!drawArea) {
      return {
        backgroundColor: color,
        height: `${height}px`,
        width: `${width}px`,
      };
    }

    return getPreviewStyles(drawArea, {
      color,
      format,
      height: Number(height),
      width: Number(width),
    });
  }

  public downloadImage = () => {
    const { width, height, color, format } = this.state;
    downloader({
      color,
      format,
      height: Number(height),
      width: Number(width),
    });
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

  public handleFormatSelection = (option: string) => {
    if (!option) {
      return;
    }

    this.setState({
      format: option,
    });
  }

  public randomizeColor = () => {
    const length = ColorList.length;
    const randomValue = Math.floor(Math.random() * length);

    this.setState({
      color: ColorList[randomValue],
    });
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
                type='number'
                label='Width'
                name='width'
                right={<RightInfo>px</RightInfo>}
                value={this.state.width}
                onChange={this.handleInput}
              />

              <TextInput
                type='number'
                label='Height'
                name='height'
                right={<RightInfo>px</RightInfo>}
                value={this.state.height}
                onChange={this.handleInput}
              />

              <TextInput
                type='text'
                label='Color'
                name='color'
                left={
                    <LeftInfo>
                      <ColorSquare color={this.state.color}/>
                    </LeftInfo>
                }
                right={<ClickableText onClick={this.randomizeColor}>Randomize!</ClickableText>}
                value={this.state.color}
                onChange={this.handleInput}
              />

              <Dropdown
                label='Format'
                value={this.state.format}
                values={[
                  { id: 'png', label: '.png' },
                  { id: 'jpg', label: '.jpg' },
                ]}
                onChange={this.handleFormatSelection}
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
            <div style={this.getPreviewStyles()} className='preview'>
              <Top>{this.state.width}px</Top>
              <Left>{this.state.height}px</Left>
            </div>
        </DrawArea>
      </MainContainer>
    );
  }
}

export default Desktop;
