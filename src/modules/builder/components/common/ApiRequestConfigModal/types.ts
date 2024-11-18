import { HTTP_METHODS, TableItem } from "@/modules/builder/interfaces/general"

export interface ApiRequestConfigFormState {
  url?: string
  method?: HTTP_METHODS
  stepper?: string
  format?: any
  tabs?: {
    headers?: Array<TableItem>
    params?: Array<TableItem>
    bodyparams?: Array<TableItem>
    tabValue?: 'params' | 'body' | 'headers'
  }
  responseType?: { label: string; value: string }
  renderProps?: {
    value: string
    label: string
  }
  dataTemplate?: string
}
