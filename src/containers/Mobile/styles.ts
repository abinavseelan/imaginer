import Styled from 'styled-components';

import { themeConstants } from 'Src/shared/styles';

export const MainContainer = Styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const Header = Styled.header`
  flex: 0.75;
  display: flex;
  align-items: center;
  justify-conten: center;

  flex-direction: column;

  padding: ${themeConstants.spacing.large} 0;
  background-color: ${themeConstants.colors.background.primary};

  h1, h2 {
    margin: 0;
  }

  h1 {
    color: ${themeConstants.colors.text.primary};
    font-size: ${themeConstants.fontSize.medium};
  }

  h2 {
    color: ${themeConstants.colors.text.secondary};
    font-size: ${themeConstants.fontSize.default};
  }
`;

export const DrawArea = Styled.div`
  flex: 6;

  margin: ${themeConstants.spacing.large};
  background-color: ${themeConstants.colors.background.alternate};

  display: flex;
  justify-content: center;
  align-items: center;

  max-width: 100vw;

  div {
    transition: width 0.15s ease-out;
    transition: height 0.15s ease-out;
    will-change: height, width;
  }
`;

export const ControlCenter = Styled.div`
  flex: 3;
  background-color: ${themeConstants.colors.background.primary};
  display: flex;
  color: ${themeConstants.colors.text.primary};
`;

export const PaginationButton = Styled.div`
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${themeConstants.colors.text.alternate};
`;

export const ControlWrapper = Styled.div`
  flex: 6;
  padding: ${themeConstants.spacing.medium};
`;

export const DownloadCTA = Styled.div`
  flex: 1;
  cursor: pointer;
  transition: all 0.15s ease-out;

  &:hover {
    background-color: ${themeConstants.colors.buttons.primaryHover};
  }

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${themeConstants.colors.text.primary};
  background-color: ${themeConstants.colors.buttons.primary};
  font-size: ${themeConstants.fontSize.default};
`;

export const RightInfo = Styled.div`
  padding: 0 ${themeConstants.spacing.large};
`;

export const LeftInfo = Styled.div`
  padding-left: ${themeConstants.spacing.large};
`;

export const ColorSquare = Styled.div`
  width: 16px;
  height: 16px;
  ${(props: { color: string }) => `
    background-color: ${props.color};
  `}
`;

export const ClickableText = Styled.div`
  cursor: pointer;
  padding: 0 ${themeConstants.spacing.large};
`;
