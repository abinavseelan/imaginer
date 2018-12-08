export interface IOption {
  id: string;
  label: string;
}

export interface IDropdownProps {
  label: string;
  value: string;
  values: IOption[];
  onChange: (value: string) => void;
}

export interface IDropdownState {
  open: boolean;
}
