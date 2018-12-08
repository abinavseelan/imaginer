import React from 'react';

import {
  Canvas,
  ColorSquare,
  ControlCenter,
  ControlCenterOptions,
  Controls,
  DownloadCTA,
  LeftInfo,
  MainContainer,
  RightInfo,
} from './styles';

import { IDesktopProps, IDesktopState } from './types';

import TextInput from 'Components/TextInput';

class Desktop extends React.PureComponent<IDesktopProps, IDesktopState> {
  public canvas: React.ReactNode;

  constructor(props: any) {
    super(props);

    this.state = {
      color: '',
      height: '',
      width: '',
    };

    this.canvas = React.createRef();
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
          <DownloadCTA>
            Download
          </DownloadCTA>
        </ControlCenter>
        <Canvas id='canvas'/>
      </MainContainer>
    );
  }
}

export default Desktop;
