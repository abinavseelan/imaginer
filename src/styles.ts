import Styled, { createGlobalStyle } from 'styled-components';

const themeConstants = {
  black: '#333333',
  grey: '#eee',
  purple: '#9879F4',
};

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Source Sans Pro', sans-serif;
    margin: 0;
    min-height: 100vh;
    height: 100%;
    background-color: ${themeConstants.grey};
  }
`;

export const MainContainer = Styled.div`
  display: flex;
  min-height: 100vh;
`;

export const Column = Styled.div`
  flex: 1;

  display: flex;
  ${(props: { vCenter?: boolean; hCenter?: boolean; }) => `
    ${props.vCenter ? 'align-items: center' : ''}
    ${props.hCenter ? 'justify-content: center' : ''}
  `}
`;
