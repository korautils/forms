import {
  Control,
  FieldErrors,
  FieldValues,
  UseFormReset,
  UseFormSetValue,
  UseFormWatch,
} from 'react-hook-form'
import { ApiRequestConfig, ChildrenElement } from '../general'
import { ELEMENT_TYPE, INPUT_VARIANTS, ItemOptionProps } from './components'

export type PROP_NAMES =
  | 'name'
  | 'label'
  | 'defaultValue'
  | 'required'
  | 'minLength'
  | 'maxLength'
  | 'minValue'
  | 'maxValue'
  | 'order'
  | 'variant'
  | 'placeholder'
  | 'pattern'
  | 'hashedPassword'
  | 'hashedType'
  | 'showNone'
  | 'defaultNoneText'

export type PROP_TYPES = 'string' | 'number' | 'object' | 'boolean' | 'any'
export type PROP_COMPONENT =
  | 'input'
  | 'select'
  | 'number'
  | 'options'
  | 'checkbox'

export interface SelectOption {
  label: string
  value: string
  default?: boolean
}

export interface OptionSelect {
  label: string
  value: string
  default?: boolean
}

export interface StepItem {
  label?: ChildrenElement
  body?: any
}

export type CONDITIONAL_OPERATORS = '==' | '>=' | '<=' | '>' | '<' | '!='

export type Rule = {
  field: PROP_NAMES
  operator: CONDITIONAL_OPERATORS
  value: any
}

export interface AvailableProp {
  label: string
  component?: PROP_COMPONENT
  propName: PROP_NAMES //Será el prop de los campos en front
  type: PROP_TYPES //Lo usaré para definir los tipos en las bases de datos
  order?: number
  options?: SelectOption[]
  propagate?: boolean
  rules?: Rule[][]
}

export type AvailableKeyProps = {
  [k in ELEMENT_TYPE]?: Array<AvailableProp>
}

export interface ElementProps {
  id?: string
  name?: string
  label?: string
  labelVariant?: INPUT_VARIANTS
  type?: React.InputHTMLAttributes<unknown>['type']
  size?: 'small' | 'medium'
  value?: string | object
  options?: Array<ItemOptionProps>
  onChange?: any
  renderInput?: any
  placeholder?: string
  style?: React.CSSProperties
  children?: ChildrenElement
  error?: boolean
  helperText?: string
  showNone?: boolean
  steps?: Array<StepItem>
  api?: ApiRequestConfig
  renderProps?: RenderProps
  disabled?: boolean
  formHandler?: FormHandlerProps
  className?: string
  required?: boolean
  minLength?: number | string
  maxLength?: number | string
  pattern?: string
  inputProps?: { maxLength: number | string }
  InputProps?: any
  multiple?: boolean
  limitTags?: number
  renderGroup?: any
  groupBy?: any
  onInput?: any
  renderOption?: any
  disableCloseOnSelect?: boolean
  // watchStatePath?: string
}

export type OriginElement = 'DEMO' | 'DEFAULT'

export interface BuildProps {
  field?: any
  origin?: OriginElement
  formHandler?: FormHandlerProps
}

export interface FormHandlerProps {
  control?: Control<FieldValues, any>
  watch?: UseFormWatch<FieldValues>
  setValue?: UseFormSetValue<FieldValues>
  reset?: UseFormReset<FieldValues>
  errors?: FieldErrors<FieldValues>
}

export interface RenderProps {
  label: string
  value: string
  includeAll?: boolean
}

interface BaseRule {
  fieldName: string
  operator: CONDITIONAL_OPERATORS
  value: any
}

interface ExtraRule {
  visible?: boolean
  disabled?: boolean
  action?: any
}

type CompleteRule = BaseRule & ExtraRule // Regla completa con todos los campos

// Regla que solo tiene visible (campo opcional)
type PartialVisibleRule = {
  visible: boolean
} & Partial<Omit<BaseRule, 'fieldName' | 'operator' | 'value'>>

type PartialActionRule = {
  action: any
} & Partial<Omit<BaseRule, 'fieldName' | 'operator' | 'value'>>

type PartialDisabledRule = {
  disabled: boolean
} & Partial<Omit<BaseRule, 'fieldName' | 'operator' | 'value'>>

// Tipo que combina ambas opciones
export type ElementRule =
  | CompleteRule
  | PartialVisibleRule
  | PartialActionRule
  | PartialDisabledRule
