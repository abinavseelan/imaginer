import React from 'react';
import { render } from 'react-dom';

class App extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <p>Hello World!</p>
    );
  }
}

render(<App />, document.getElementById('app'));
