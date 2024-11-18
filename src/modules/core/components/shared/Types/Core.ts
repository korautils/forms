export type Attributes =
  | "id"
  | "name"
  | "label"
  | "required"
  | "placeholder"
  | "minLength"
  | "maxLength"
  | "withDecimals"
  | "mask"
  | "pattern"
  | "rows"
  | "min"
  | "max"
  | "minValue"
  | "maxValue"
  | "limitTags"
  | "group"
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "options";

export type ItemCode =
  | "TextField"
  | "Password"
  | "Number"
  | "Price"
  | "SelectSearch"
  | "Tags"
  | "TagsWithCheckbox"
  | "Textarea"
  | "LimitTags";

export type InputTypes = "text" | "number" | "checkbox" | "price" | "options";

export type ErrorType = "required" | "minLenght" | "maxLenght";

export interface ErrorMessage {
  type: ErrorType;
  message: string;
}

export interface OptionItem {
  id: any;
  label: string;
}

export interface InputProp {
  attr: Attributes;
  label: string;
  required: boolean;
  type: InputTypes;
  isAttribute?: boolean;
  isValidation?: boolean;
  minValue?: any;
  maxValue?: any;
  errorMessages?: Array<ErrorMessage>;
  tooltip?: string;
  options?: Array<OptionItem>;
  fullWidth?: boolean;
  group?: Array<InputProp>;
  defaultValue?: any;
}

export interface Attribute {
  name: Attributes;
  value: string | number | boolean | Array<OptionItem>;
}

export interface ItemComponent {
  id?: string;
  code: ItemCode;
  label: string;
  checked?: boolean;
  props: Array<InputProp>;
  attributes?: Array<Attribute>;
}

export interface GroupResource {
  code: string;
  label: string;
  description?: string;
  items?: Array<ItemComponent>;
}

export interface GenericProps { }
