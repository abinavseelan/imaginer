import Styled, { createGlobalStyle } from 'styled-components';

const themeConstants = {
  colors: {
    background: {
      alternate: '#ffffff',
      primary: '#010102',
    },
    buttons: {
      primary: '#0066FF',
    },
    text: {
      alternate: '#010102',
      primary: '#ffffff',
      secondary: '#B7B7B7',
    },
  },

  spacing: {
    large: '16px',
    small: '4px',
  },

  fontSize: {
    default: '16px',
    large: '32px',
    xLarge: '48px',
  },
};

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: ${themeConstants.fontSize.default};
    margin: 0;
    min-height: 100vh;
  }
`;
