import Styled from 'styled-components';

import { themeConstants } from 'Src/shared/styles';

export const Wrapper = Styled.div`
  margin: ${themeConstants.spacing.xLarge} 0;
  position: relative;

  label {
    color: ${themeConstants.colors.text.secondary};
    display: block;
  }
`;

export const InputWrapper = Styled.div`
  margin: ${themeConstants.spacing.medium} 0;
  padding: ${themeConstants.spacing.large};
  border: 2px solid ${themeConstants.colors.border.default};

  display: flex;
  align-items: center;

  cursor: pointer;
`;

export const MenuWrapper = Styled.div`
  position: absolute;
  right: 0;
  border: 2px solid ${themeConstants.colors.border.default};
  padding: ${themeConstants.spacing.medium};

  transition: all 0.15s ease-out;

  ${(props: { open: boolean; }) => `
    ${!props.open ? 'opacity: 0;' : 'opacity: 1;'}
  `}
`;

export const MenuOption = Styled.div`
  cursor: pointer;
  padding: ${themeConstants.spacing.medium};
  min-width: 150px;

  &:hover {
    background-color: ${themeConstants.colors.background.alternate};
    color: ${themeConstants.colors.text.alternate};
  }
`;
