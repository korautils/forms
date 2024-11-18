import { ELEMENT_TYPE } from '@/modules/builder/interfaces/elements/components'
import {
  ElementProps,
  FormHandlerProps,
  OriginElement,
} from '@/modules/builder/interfaces/elements/types'
// import { ELEMENT_TYPE } from '@/modules/dashboard/interfaces/components'
import { Control, FieldErrors, FieldValues } from 'react-hook-form'

export interface ReactHookFormValues {
  control?: Control<FieldValues, any>
  errors?: FieldErrors<FieldValues>
}

export interface Props {
  element: ELEMENT_TYPE
  props: ElementProps
  origin?: OriginElement
  form?: FormHandlerProps
}

export type ElementItem = React.FC<ElementProps>
