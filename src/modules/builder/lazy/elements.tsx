import React from 'react'
import GroupButtonRenderer from '@/modules/core/components/shared/GroupButtonRenderer'
import { Box } from '@mui/material'
import { ELEMENT_TYPE } from '@/modules/builder/interfaces/elements/components'
import TabsRenderer from '@/modules/core/components/shared/TabsRenderer'
import { ElementItem } from '@/modules/core/components/common/ElementBuilderRenderer/types'
// import es from 'dayjs/locale/es' // Importa el locale español de dayjs
// import dayjs from 'dayjs'
// dayjs.locale(es)

export const TextField: any = React.lazy(
  () => import('@/modules/core/components/shared/TextField')
)

export const NumberField = (props: any) => (
  <TextField type='number' {...props} />
)

export const Autocomplete: any = React.lazy(
  () => import('@/modules/core/components/shared/AutocompleteField')
)

export const Checkbox: any = React.lazy(
  () => import('@/modules/core/components/shared/CheckboxPreview')
)
export const EmailPreview: any = React.lazy(
  () => import('@/modules/core/components/shared/EmailPreview')
)
export const InputPassword: any = React.lazy(
  () => import('@/modules/core/components/shared/Forms/InputPassword')
)
export const InputPrice: any = React.lazy(
  () => import('@/modules/core/components/shared/Forms/Input/Price')
)
export const BasicSelect: any = React.lazy(
  () => import('@/modules/core/components/shared/Select')
)
export const RadioGroupPreview: any = React.lazy(
  () => import('@/modules/core/components/shared/RadioGroupPreview')
)
export const LazyBasicDatePicker: any = React.lazy(
  () => import('@/modules/core/components/shared/BasicDatePicker')
)
export const LazyBasicDateField: any = React.lazy(
  () => import('@/modules/core/components/shared/BasicDateField')
)
export const LazyBasicTimeField: any = React.lazy(
  () => import('@/modules/core/components/shared/BasicTimeField')
)
export const LazyBasicTimeRangeField: any = React.lazy(
  () => import('@/modules/core/components/shared/BasicTimeRangeField')
)
export const LazyDatePickerModal: any = React.lazy(
  () => import('@/modules/core/components/shared/DatePickerModal')
)
export const LazyRangePicker: any = React.lazy(
  () => import('@/modules/core/components/shared/BasicDateRangePicker')
)
export const LazyTimePicker: any = React.lazy(
  () => import('@/modules/core/components/shared/BasicTimePickerField')
)
export const LazyTimePickerModal: any = React.lazy(
  () => import('@/modules/core/components/shared/BasicTimePickerModalField')
)

interface InlineComponentProps {
  component: any
}

export const newInlineComponent = ({
  component: Component,
  ...props
}: InlineComponentProps) => {
  return <Component {...props} style={{ width: '100%' }} />
}

type Definitions = {
  [key in ELEMENT_TYPE]?: any
}

export const DEFINITIONS: Definitions = {
  INPUT: TextField,
  TEXTFIELD: TextField,
  NUMBER: NumberField,
  EMAIL: EmailPreview,
  SELECT: Autocomplete,
  BASIC_SELECT: BasicSelect,
  GROUP_BUTTON: GroupButtonRenderer,
  PASSWORD: InputPassword,
  PRICE: InputPrice,
  CHECKBOX: Checkbox,
  RADIO_GROUP: RadioGroupPreview,
  DATE_FIELD: LazyBasicDateField,
  TIME_FIELD: LazyBasicTimeField,
  TIME_RANGE_FIELD: LazyBasicTimeRangeField,
  TIME_DESKTOP: LazyTimePicker,
  TIME_MOBILE: LazyTimePickerModal,
  DATE_PICKER: LazyBasicDatePicker,
  DATE_PICKER_MODAL: LazyDatePickerModal,
  RANGE_PICKER: LazyRangePicker,
  TABS: TabsRenderer,
  BOX: newInlineComponent({ component: Box }),
}

export const getElement = (element: ELEMENT_TYPE): ElementItem | undefined => {
  if (element in DEFINITIONS) {
    const elementInstance = DEFINITIONS[element]
    return elementInstance
  }
}
