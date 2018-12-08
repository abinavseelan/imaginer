import Styled from 'styled-components';

import { themeConstants } from 'Src/shared/styles';

export const Wrapper = Styled.div`
  margin: ${themeConstants.spacing.xLarge} 0;

  label {
    color: ${themeConstants.colors.text.secondary};
    display: block;
  }

  input {
    border: none;
    outline: none;
    padding: ${themeConstants.spacing.medium} ${themeConstants.spacing.large};
    margin: ${themeConstants.spacing.medium} 0;
    font-size: ${themeConstants.fontSize.default};
    color: ${themeConstants.colors.text.primary};

    flex-grow: 1;
    background: transparent;
  }
`;

export const InputWrapper = Styled.div`
  margin: ${themeConstants.spacing.medium} 0;
  border: 2px solid ${themeConstants.colors.border.default};

  display: flex;
  align-items: center;
`;
