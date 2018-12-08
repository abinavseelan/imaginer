export interface ITextInputProps {
  name: string;
  label: React.ReactNode;
  left?: React.ReactNode;
  value: string;
  onChange: (e: React.SyntheticEvent) => void;
  right?: React.ReactNode;
}
