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

export const ColorList = [
  '#f44336',
  '#e91e63',
  '#9c27b0',
  '#673ab7',
  '#3f51b5',
  '#2196f3',
  '#03a9f4',
  '#00bcd4',
  '#009688',
  '#4caf50',
  '#8bc34a',
  '#cddc39',
  '#ffeb3b',
  '#ffc107',
  '#ff9800',
  '#ff5722',
];

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
