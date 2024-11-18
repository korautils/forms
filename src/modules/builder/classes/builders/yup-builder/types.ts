import * as yupUtil from 'yup'

export type YUP_TYPES =
  | 'string'
  | 'number'
  | 'boolean'
  | 'date'
  | 'object'
  | 'array'

export type VALIDATION_TYPES =
  | 'required'
  | 'url'
  | 'min'
  | 'max'
  | 'email'
  | 'pattern'
  | YUP_TYPES

export interface MessageDetail {
  type: VALIDATION_TYPES
  value?: string | number
  defaultMessage?: string
}

interface ValidationDetail<T> {
  value: T
  message?: string
}

export interface YupRule {
  name?: string
  type: YUP_TYPES
  required?: ValidationDetail<boolean>
  isUrl?: ValidationDetail<boolean>
  isEmail?: ValidationDetail<boolean>
  pattern?: ValidationDetail<string | RegExp | undefined>
  min?: ValidationDetail<number>
  max?: ValidationDetail<number>
}

export type YupSchema = yupUtil.AnySchema
