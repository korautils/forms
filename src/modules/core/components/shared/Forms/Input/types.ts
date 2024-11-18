import { SIZES, VARIANT } from "../../Types/types";
import { GenericProps } from "../../Types/Core";

export interface Callback {
  (event: any): void;
}

export interface InputPropItem {
  startAdornment?: any;
  endAdornment?: any;
}

export interface Props extends GenericProps {
  key?: any;
  forwardRef?: any;
  id?: string;
  type?: string;
  name?: string;
  label?: string;
  className?: string;
  placeholder?: string;
  value?: string;
  disabled?: boolean;
  required?: boolean;
  fullWidth?: boolean;
  helperText?: string;
  pattern?: string;
  minLength?: number;
  maxLength?: number;
  size?: SIZES;
  variant?: VARIANT;
  InputProps?: Array<InputPropItem> | any;
  onChange?: Callback;
  error?: boolean;
}

export interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}
