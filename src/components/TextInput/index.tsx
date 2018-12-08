import React from 'react';

import { InputWrapper, Wrapper } from './styles';

import { ITextInputProps } from './types';

const TextInput = (props: ITextInputProps) => {
  return (
    <Wrapper>
      <label>{props.label}</label>
      <InputWrapper>
        {
          props.left
        }
        <input
          type='text'
          name={props.name}
          value={props.value}
          onChange={props.onChange}
        />
        {
          props.right
        }
      </InputWrapper>
    </Wrapper>
  );
};

export default TextInput;
