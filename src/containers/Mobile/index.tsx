import React from 'react';

import { IMobileProps, IMobileState } from './types';

import {
  ActionControls,
  ClickableText,
  ColorSquare,
  ControlCenter,
  ControlWrapper,
  DownloadCTA,
  DrawArea,
  Header,
  Left,
  LeftInfo,
  MainContainer,
  PaginationButton,
  PaginationIndicators,
  RightInfo,
  Top,
} from './styles';

import { ColorList, themeConstants } from 'Src/shared/styles';
import downloader from 'Src/shared/utils/downloader';
import getPreviewStyles from 'Src/shared/utils/getPreviewStyles';

import TextInput from 'Components/TextInput';
import Dropdown from 'Components/Dropdown';

class Mobile extends React.PureComponent<IMobileProps, IMobileState> {
  public drawArea: React.RefObject<HTMLDivElement>;

  constructor(props: any) {
    super(props);

    this.state = {
      color: themeConstants.colors.buttons.primary,
      format: '.png',
      height: '200',
      pagination: 0,
      width: '200',
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

  public handleInput = (e: React.SyntheticEvent) => {
    const { target } = e;

    if (!target) {
      return;
    }

    const { name, value } = target as HTMLInputElement;

    const newState: IMobileState = {
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

  public renderControl = (pagination: number) => {
    switch (pagination) {
      case 0: {
        return (
          <TextInput
            type='number'
            label='Width'
            name='width'
            right={<RightInfo>px</RightInfo>}
            value={this.state.width}
            onChange={this.handleInput}
          />
        );
      }

      case 1: {
        return (
          <TextInput
            type='number'
            label='Height'
            name='height'
            right={<RightInfo>px</RightInfo>}
            value={this.state.height}
            onChange={this.handleInput}
          />
        );
      }

      case 2: {
        return (
          <TextInput
            type='text'
            label='Color'
            name='color'
            left={
              <LeftInfo>
                <ColorSquare color={this.state.color} />
              </LeftInfo>
            }
            right={<ClickableText onClick={this.randomizeColor}>Randomize!</ClickableText>}
            value={this.state.color}
            onChange={this.handleInput}
          />
        );
      }

      case 3: {
        return (
          <Dropdown
            label='Format'
            value={this.state.format}
            values={[
              { id: 'png', label: '.png' },
              { id: 'jpg', label: '.jpg' },
            ]}
            onChange={this.handleFormatSelection}
          />
        );
      }

      default: {
        return (
          <TextInput
            type='number'
            label='Width'
            name='width'
            right={<RightInfo>px</RightInfo>}
            value={this.state.width}
            onChange={this.handleInput}
          />
        );
      }
    }
  }

  public paginate = (mode: string) => {
    if (mode === 'prev') {
      this.setState((prevState: IMobileState) => ({
        ...prevState,
        pagination: prevState.pagination - 1,
      }));
    } else if (mode === 'next') {
      this.setState((prevState: IMobileState) => ({
        ...prevState,
        pagination: prevState.pagination + 1,
      }));
    }
  }
  public render() {
    return (
      <MainContainer>
        <Header>
          <h1>Imaginer.</h1>
          <h2>Download custom sized images</h2>
        </Header>
        <DrawArea ref={this.drawArea}>
          <div style={this.getPreviewStyles()} className='preview'>
            <Top>{this.state.width}px</Top>
            <Left>{this.state.height}px</Left>
          </div>
        </DrawArea>
        <ControlCenter>
          <ActionControls>
            {
              this.state.pagination !== 0
                ? (
                  <PaginationButton onClick={() => this.paginate('prev')}>
                    &lsaquo;
                  </PaginationButton>
                )
                : <PaginationButton />
            }
            <ControlWrapper>
              {this.renderControl(this.state.pagination)}
            </ControlWrapper>
            {
              this.state.pagination !== 3
                ? (
                  <PaginationButton onClick={() => this.paginate('next')}>
                    &rsaquo;
                  </PaginationButton>
                )
                : <PaginationButton />
            }
          </ActionControls>
          <PaginationIndicators>
            {
              [1, 2, 3, 4].map((_, index) => (
                <div key={index} className={index === this.state.pagination ? 'current' : ''} />
              ))
            }
          </PaginationIndicators>
        </ControlCenter>
        <DownloadCTA onClick={this.downloadImage}>
          Download
        </DownloadCTA>
      </MainContainer>
    );
  }
}

export default Mobile;
