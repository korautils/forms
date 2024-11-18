import { ChildrenElement } from "../general"
import { ElementProps } from "./types"

export type ELEMENT_TYPE =
  | 'INPUT'
  | 'TEXTFIELD'
  | 'NUMBER'
  | 'PRICE'
  | 'SELECT'
  | 'BASIC_SELECT'
  | 'RADIO_GROUP'
  | 'CHECKBOX'
  | 'EMAIL'
  | 'PASSWORD'
  | 'DATE_FIELD'
  | 'TIME_FIELD'
  | 'TIME_RANGE_FIELD'
  | 'TIME_DESKTOP'
  | 'TIME_MOBILE'
  | 'DATE_PICKER'
  | 'DATE_PICKER_MODAL'
  | 'RANGE_PICKER'
  | 'NORMAL_FILE'
  | 'FILE_DROP'
  | 'TABS'
  | 'GROUP_BUTTON'
  | 'BOX'
  | 'STEPPER'
  | 'BUTTON'
// | 'WEEK_PICKER'

export type INPUT_VARIANTS = 'LABELING' | 'UNLABELING'

export interface Option {
  value: string
  label: string
}

export interface KoraComponentProps extends ElementProps {
  type?: ELEMENT_TYPE
  order?: number
}

export interface ItemOptionProps {
  id?: string
  value?: string
  label?: ChildrenElement
  icon?: ChildrenElement
  variant?: 'contained' | 'outlined'
  type?: 'API' | 'DEFAULT'
  children?: ChildrenElement
  visible?: boolean
}
