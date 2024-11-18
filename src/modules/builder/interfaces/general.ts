import { ReactNode } from 'react'
import { AxiosError, AxiosResponse } from 'axios'
import { FormHandlerProps } from '@/modules/builder/interfaces/elements/types'
import { CallbackType } from '@/modules/core/components/shared/Types/types'
import { FORMAT_TYPES } from '../components/common/ApiRequestConfigModal/BodyForm/options'

export type GQLQueryName = 'user' | 'users' | 'file' | 'products' | 'links'

export type GQLResult<T extends GQLQueryName, U> = {
  [key in T]: U
}

export type ChildrenCallbackAttach = ({
  imageSrc,
  handleClick,
}: {
  imageSrc?: string
  handleClick?: CallbackType<any>
}) => React.ReactElement | React.ReactElement[]

export type ActionUpload = 'UPDATE_PROFILE' | 'UPDATE_COVER'

export interface Action {
  label: string
  icon?: React.ReactElement | React.ReactElement[]
  variant?: 'contained' | 'outlined'
  color?: 'primary' | 'secondary' | 'default'
  onClick?: () => void
  loading?: boolean
  disabled?: boolean
  className?: string
  styles?: any
  href?: string
}

export type ThemeMode = 'light' | 'dark'

export type ChildrenElement =
  | ((formHandler?: FormHandlerProps) => ReactNode)
  | string
  | React.ReactElement
  | React.ReactElement[]
  | ReactNode

export type HTTP_METHODS = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
export type RESPONSE_TYPE_VALUES =
  | 'json'
  | 'arraybuffer'
  | 'blob'
  | 'document'
  | 'text'
  | 'stream'

export interface ObjectKeys {
  [key: string]: string | number
}

export interface TableItem {
  id: string
  name: string
  value: string
}

export interface ApiRequestConfig<T = any> {
  url: string
  method: HTTP_METHODS
  headers?: ObjectKeys
  params?: ObjectKeys
  data?: any
  timeout?: number
  format?: FORMAT_TYPES
  responseType?:
    | 'json'
    | 'arraybuffer'
    | 'blob'
    | 'document'
    | 'text'
    | 'stream'
  auth?: {
    username: string
    password: string
  }
  onUploadProgress?: (progressEvent: ProgressEvent) => void
  onDownloadProgress?: (progressEvent: ProgressEvent) => void
  extraValues?: {
    tabValue?: 'params' | 'body' | 'headers'
    format?: RESPONSE_TYPE_VALUES
  }
  dataTemplate?: DateTemplate
  showSucessAlert?: boolean
  statusMessages?: StatusMessages
  onSuccess?: (response: AxiosResponse<T>) => void
  onError?: (error: AxiosError) => void
}

export interface StatusMessages {
  200?: string // OK
  201?: string // Created
  204?: string // No Content
  400?: string // Bad Request
  401?: string // Unauthorized
  403?: string // Forbidden
  404?: string // Not Found
  405?: string // Method Not Allowed
  409?: string // Conflict
  422?: string // Unprocessable Entity
  500?: string // Internal Server Error
  502?: string // Bad Gateway
  503?: string // Service Unavailable
  DEFAULT?: string
}

export interface ParserObject {
  value: string
  parser?: (value: any) => any
}

type TemplateValue<T = string> = T extends string
  ? string | number
  : T extends { value: string }
  ? ParserObject
  : never

interface DateTemplate {
  [key: string]:
    | DateTemplate
    | TemplateValue
    | TemplateValue<ParserObject>
    | DateTemplate[]
}

export interface AuthResponse {
  accessToken: string
  refreshToken: string
}

export interface KoraHandleResponse<T = any> {
  onSuccessHandle?: (response: AxiosResponse<T>) => void
  onErrorHandle?: (response: AxiosError) => void
}

export type MODULE_TYPE = 'NORMAL_FORM' | 'REPORTER' | 'FILTER'

export type LANGUAGES_EDITOR =
  | 'javascript'
  | 'typescript'
  | 'json'
  | 'plaintext'
  | 'text'
  | 'sql'
  | 'postgres'
