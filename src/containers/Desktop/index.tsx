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

import TextInput from 'Components/TextInput';

class Desktop extends React.PureComponent<{}, {}> {
  public state = {
    color: '',
    height: '',
    width: '',
  };

  public handleInput = (e: React.SyntheticEvent)  => {
    const { target } = e;

    if (!target) {
      return;
    }

    const { name, value } = target as HTMLInputElement;

    this.setState({
      [name]: value,
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
        <Canvas />
      </MainContainer>
    );
  }
}

export default Desktop;
