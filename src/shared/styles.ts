import Styled, { createGlobalStyle } from 'styled-components';

export const themeConstants = {
  colors: {
    background: {
      alternate: '#ffffff',
      primary: '#010102',
    },
    border: {
      default: '#fff',
      focused: '#0066FF',
    },
    buttons: {
      primary: '#0066FF',
      primaryHover: '#004ec3',
    },
    text: {
      alternate: '#010102',
      primary: '#ffffff',
      secondary: '#B7B7B7',
    },
  },

  spacing: {
    large: '16px',
    medium: '8px',
    small: '4px',
    xLarge: '32px',
    xxLarge: '48px',
  },

  fontSize: {
    default: '16px',
    large: '32px',
    medium: '24px',
    xLarge: '48px',
  },
};

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-weight: 400;
  }

  body {
    font-family: 'Roboto', sans-serif;
    font-size: ${themeConstants.fontSize.default};
    margin: 0;
    min-height: 100vh;
  }
`;
