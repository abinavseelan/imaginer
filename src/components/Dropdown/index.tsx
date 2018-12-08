import React from 'react';

import { IDropdownProps, IDropdownState } from './types';

import {
  InputWrapper,
  MenuOption,
  MenuWrapper,
  Wrapper,
} from './styles';

class Dropdown extends React.PureComponent<IDropdownProps, IDropdownState> {
  public state = {
    open: false,
  };

  public toggleDropdown = () => {
    document.removeEventListener('click', this.toggleDropdown);

    this.setState((prevState: IDropdownState) => ({
      ...prevState,
      open: !prevState.open,
    }), () => {
      if (this.state.open) {
        document.addEventListener('click', this.toggleDropdown);
      }
    });
  }

  public setOption = (e: React.SyntheticEvent) => {
    const { target } = e;
    const { dataset } = target as HTMLDivElement;

    if (!dataset.value) {
      return;
    }

    this.props.onChange(dataset.value);
  }

  public render() {
    return (
      <Wrapper>
        <label>{this.props.label}</label>
        <InputWrapper onClick={this.toggleDropdown}>
          {this.props.value}
        </InputWrapper>
        <MenuWrapper open={this.state.open} onClick={this.setOption}>
          {
            this.props.values.map((value) => (
              <MenuOption data-value={value.label} key={value.id}>
                {value.label}
              </MenuOption>
            ))
          }
        </MenuWrapper>
      </Wrapper>
    );
  }
}

export default Dropdown;
