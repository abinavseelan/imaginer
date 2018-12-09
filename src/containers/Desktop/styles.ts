import Styled from 'styled-components';

import { themeConstants } from 'Src/shared/styles';

export const MainContainer = Styled.div`
  display: flex;
  flex-direction: row;
`;

export const ControlCenter = Styled.div`
  flex: 2;
  height: 100vh;

  background-color: ${themeConstants.colors.background.primary};

  color: ${themeConstants.colors.text.primary};

  display: flex;
  flex-direction: column;
`;

export const DrawArea = Styled.div`
  flex: 5;
  max-height: 100vh;
  margin: ${themeConstants.spacing.xxLarge};

  background-color: ${themeConstants.colors.background.alternate};

  display: flex;
  justify-content: center;
  align-items: center;

  .preview {
    transition: width 0.15s ease-out;
    transition: height 0.15s ease-out;
    will-change: height, width;

    position: relative;
  }
`;

export const Top = Styled.p`
  position: absolute;
  top: -50px;
  left: 50%;
`;

export const Left = Styled.p`
  position: absolute;
  top: 50%;
  left: -50px;
  transform: rotate(-90deg);
`;

export const ControlCenterOptions = Styled.div`
  flex: 22;

  padding: ${themeConstants.spacing.xxLarge};

  h1, h2 {
    margin: ${themeConstants.spacing.medium} 0;
  }

  h1 {
    font-size: ${themeConstants.fontSize.xLarge};
  }

  h2 {
    color: ${themeConstants.colors.text.secondary};
    font-size: ${themeConstants.fontSize.medium};
  }
`;

export const DownloadCTA = Styled.div`
  flex: 1;
  min-height: 60px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${themeConstants.colors.buttons.primary};
  font-size: ${themeConstants.fontSize.default};
  cursor: pointer;

  transition: all 0.15s ease-out;

  &:hover {
    background-color: ${themeConstants.colors.buttons.primaryHover};
  }
`;

export const Controls = Styled.div`
  margin: ${themeConstants.spacing.xxLarge} 0;
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
