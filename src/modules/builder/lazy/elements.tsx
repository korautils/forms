import React from 'react'
import es from 'dayjs/locale/es' // Importa el locale español de dayjs
import dayjs from 'dayjs'
// import { ELEMENT_TYPE } from '../../dashboard/interfaces/components'
import GroupButtonRenderer from '../components/shared/GroupButtonRenderer'
import TabsRenderer from '../components/shared/TabsRenderer'
import { Box } from '@mui/material'
import { ElementItem } from '../components/common/ElementBuilderRenderer/types'
import { ELEMENT_TYPE } from '../interfaces/elements/components'
dayjs.locale(es) // Configura dayjs con el locale español

// Lazy-loaded components
// export const TextField = React.lazy(() => import('@mui/material/TextField'))
export const TextField:any = React.lazy(
  () => import('@/modules/builder/components/shared/TextField')
)

export const NumberField = (props: any) => (
  <TextField type="number" {...props} />
)

export const Autocomplete:any = React.lazy(
  () => import('@/modules/builder/components/shared/AutocompleteField')
)
export const Checkbox:any = React.lazy(
  () => import('@/modules/builder/components/shared/CheckboxPreview')
)
export const EmailPreview:any = React.lazy(
  () => import('@/modules/builder/components/shared/EmailPreview')
)
export const InputPassword:any = React.lazy(
  () => import('@/modules/core/components/shared/Forms/InputPassword')
)
export const InputPrice:any = React.lazy(
  () => import('@/modules/core/components/shared/Forms/Input/Price')
)
export const BasicSelect:any = React.lazy(
  () => import('@/modules/core/components/shared/Select')
)
export const RadioGroupPreview:any = React.lazy(
  () => import('@/modules/builder/components/shared/RadioGroupPreview')
)
export const LazyBasicDatePicker:any = React.lazy(
  () => import('@/modules/builder/components/shared/BasicDatePicker')
)
export const LazyBasicDateField:any = React.lazy(
  () => import('@/modules/builder/components/shared/BasicDateField')
)
export const LazyBasicTimeField:any = React.lazy(
  () => import('@/modules/builder/components/shared/BasicTimeField')
)
export const LazyBasicTimeRangeField:any = React.lazy(
  () => import('@/modules/builder/components/shared/BasicTimeRangeField')
)
export const LazyDatePickerModal:any = React.lazy(
  () => import('@/modules/builder/components/shared/DatePickerModal')
)
export const LazyRangePicker:any = React.lazy(
  () => import('@/modules/builder/components/shared/BasicDateRangePicker')
)
export const LazyTimePicker:any = React.lazy(
  () => import('@/modules/builder/components/shared/BasicTimePickerField')
)
export const LazyTimePickerModal:any = React.lazy(
  () => import('@/modules/builder/components/shared/BasicTimePickerModalField')
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
