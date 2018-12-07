import React from 'react';
import { render } from 'react-dom';

import {
  Column,
  GlobalStyle,
  MainContainer,
} from './styles';

class App extends React.PureComponent<any, any> {
  public render() {
    return (
      <div>
        <GlobalStyle />
        <MainContainer>
          <Column vCenter hCenter>
            Left
          </Column>
          <Column vCenter hCenter>
            Right
          </Column>
        </MainContainer>
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
