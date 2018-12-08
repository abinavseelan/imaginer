import React from 'react';

import { IMobileProps, IMobileState } from './types';

import {
  ControlCenter,
  DownloadCTA,
  DrawArea,
  Header,
  MainContainer,
} from './styles';

class Mobile extends React.PureComponent<IMobileProps, IMobileState> {
  public render() {
    return (
      <MainContainer>
        <Header>
          <h1>Imaginer.</h1>
          <h2>Download custom sized images</h2>
        </Header>
        <DrawArea>
          <div />
        </DrawArea>
        <ControlCenter />
        <DownloadCTA>Download</DownloadCTA>
      </MainContainer>
    );
  }
}

export default Mobile;
