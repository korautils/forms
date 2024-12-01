import React from 'react'
import { ButtonProps } from '@mui/material'
import { ELEMENT_TYPE } from '@/modules/builder/interfaces/elements/components'
import { ElementProps } from '@/modules/builder/interfaces/elements/types'

export type CommonProps = Pick<
  ElementProps,
  | 'id'
  | 'name'
  | 'label'
  | 'disabled'
  | 'error'
  | 'helperText'
  | 'labelVariant'
  | 'size'
  | 'style'
  | 'value'
  | 'onChange'
  | 'className'
  | 'required'
>

const commonProps: Array<keyof CommonProps> = [
  'id',
  'name',
  'label',
  'disabled',
  'error',
  'helperText',
  'labelVariant',
  'size',
  'style',
  'value',
  'onChange',
  'className',
  'disabled',
  'required',
]

export type InputProps = CommonProps &
  Pick<
    ElementProps,
    'placeholder' | 'type' | 'inputProps' | 'InputProps' | 'onInput'
  >

export type PasswordProps = InputProps

export type EmailProps = InputProps

export type PriceProps = InputProps

export type CheckboxProps = CommonProps

export type StepperProps = Pick<
  ElementProps,
  | 'children'
  | 'steps'
  | 'className'
  | 'id'
  | 'formHandler'
  | 'value'
  | 'onChange'
  | 'name'
>

export type TabsProps = Pick<
  ElementProps,
  | 'options'
  | 'name'
  | 'value'
  | 'onChange'
  | 'formHandler'
  | 'className'
  | 'disabled'
  // | 'watchStatePath'
>

export type BoxProps = Pick<
  ElementProps,
  'children' | 'style' | 'formHandler'
> & { withHandler?: boolean }

export type SelectProps = CommonProps &
  Pick<ElementProps, 'api' | 'options' | 'renderProps'>

export type ElementButtonProps = ButtonProps &
  Pick<ElementProps, 'label' | 'className' | 'children'> & {
    variant?: 'text' | 'outlined' | 'contained' | 'black-camera'
    icon?: React.ReactElement
    circular?: boolean
    unshadow?: boolean
    tooltipTitle?: string
  }

export type BasicSelectProps = CommonProps &
  Pick<ElementProps, 'options' | 'showNone'>

export function extractValidProps<T extends ELEMENT_TYPE>(
  type: T,
  props: Partial<ElementProps>
): Partial<ElementProps> {
  // Obtener las propiedades válidas para el tipo dado
  const validKeys: any = ValidElementProps[type] || []

  // Filtrar las propiedades válidas del objeto props
  const filteredProps = Object.keys(props).reduce<Partial<ElementProps>>(
    (acc: any, key) => {
      if (validKeys.includes(key as any)) {
        acc[key as any] = props[key as keyof ElementProps]
      }
      return acc
    },
    {} as Partial<ElementProps>
  )

  return filteredProps
}

type ValidPropsMapping<T extends ELEMENT_TYPE> = {
  [K in T]?: Array<keyof ElementProps | ElementButtonProps>
}

type ValidProps = ValidPropsMapping<ELEMENT_TYPE>

function getPropsArray<K extends keyof any>(...props: K[]): any[] {
  return props
}

export const ValidElementProps: ValidProps = {
  INPUT: getPropsArray<keyof InputProps>(
    'placeholder',
    'InputProps',
    'type',
    'onInput',
    ...commonProps
  ),
  TEXTFIELD: getPropsArray(
    'placeholder',
    'InputProps',
    'onInput',
    ...commonProps
  ),
  PASSWORD: getPropsArray('placeholder', ...commonProps),
  EMAIL: getPropsArray<keyof EmailProps>('placeholder', ...commonProps),
  CHECKBOX: getPropsArray<keyof CheckboxProps>(...commonProps),
  SELECT: getPropsArray<keyof SelectProps>(
    'options',
    'renderProps',
    'api',
    ...commonProps
  ),
  RADIO_GROUP: getPropsArray('options', ...commonProps),
  DATE_FIELD: getPropsArray(...commonProps),
  TIME_FIELD: getPropsArray(...commonProps),
  TIME_RANGE_FIELD: getPropsArray(...commonProps),
  TIME_DESKTOP: getPropsArray(...commonProps),
  TIME_MOBILE: getPropsArray(...commonProps),
  DATE_PICKER: getPropsArray(...commonProps),
  DATE_PICKER_MODAL: getPropsArray(...commonProps),
  RANGE_PICKER: getPropsArray(...commonProps),
  BASIC_SELECT: getPropsArray<keyof BasicSelectProps>(
    'showNone',
    'options',
    'size',
    ...commonProps
  ),
  BOX: getPropsArray<keyof BoxProps>(
    'children',
    'style',
    'formHandler',
    'withHandler'
  ),
  STEPPER: getPropsArray<keyof StepperProps>(
    'children',
    'className',
    'formHandler',
    'id',
    'steps',
    'name',
    'value'
  ),
  TABS: getPropsArray<keyof TabsProps>(
    'name',
    'className',
    'disabled',
    'formHandler',
    'onChange',
    'options',
    'value'
    // 'watchStatePath'
  ),
  BUTTON: getPropsArray<keyof ElementButtonProps>(
    'type',
    'label',
    'variant',
    'className',
    'circular',
    'fullWidth',
    'tooltipTitle',
    'icon',
    'unshadow',
    'children',
    'color',
    'size',
    'onClick'
  ),
  PRICE: getPropsArray<keyof PriceProps>('placeholder', ...commonProps),
}
