export type BASIC_TABLE_ELEMENTS =
  | 'text'
  | 'number'
  | 'select'
  | 'checkbox'
  | 'span'

export interface SelectItemOption {
  label?: string
  value?: string
}

export interface Props {
  type: BASIC_TABLE_ELEMENTS
  name?: string
  value?: string
  options?: Array<SelectItemOption>
  onChange?: any
}

const BasicInput: React.FC<Props> = ({ type, name, value, onChange }) => {
  return <input type={type} name={name} onChange={onChange} value={value} />
}

const BasicSpan: React.FC<Props> = ({ value }) => {
  return <span>{value}</span>
}

const BasicSelect: React.FC<Props> = ({
  type,
  name,
  value,
  onChange,
  options,
}) => {
  return <select></select>
}

interface BasicElement {
  [key: string]: React.FC<Props>
}

export const basicElements: BasicElement = {
  text: BasicInput,
  number: BasicInput,
  select: BasicSelect,
  span: BasicSpan,
}
