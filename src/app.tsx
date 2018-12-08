import React from 'react';
import { render } from 'react-dom';

import {
  GlobalStyle,
} from './shared/styles';

import DesktopApp from './containers/Desktop';
import MobileApp from './containers/Mobile';

const App = () => {
  const width = window.innerWidth;

  return (
    <div>
      <GlobalStyle />
      {
        width > 768
          ? (
            <DesktopApp />
          )
          : (
            <MobileApp />
          )
      }
    </div>
  );
};

render(<App />, document.getElementById('app'));
