import { getProp, isArrayEmpty } from '@/modules/core/utils'
import { KORA_PROJECT_ID } from '@/modules/core/constants/localStorageConstants'
import { ApiRequestConfig, ObjectKeys, TableItem } from '../interfaces/general'
import { getLocalStorageFromKey } from '@/modules/core/utils/localStorage'

export const getTableItems = (
  status: any,
  path: string
): ObjectKeys | undefined => {
  const itemsList = getProp(status, path)
  if (isArrayEmpty(itemsList)) {
    return
  }

  const items: ObjectKeys = {}
  itemsList.forEach((item: TableItem) => {
    items[item.name] = item.value
  })

  return items
}

export const getFormData = (status: any, path: string) => {
  const itemsList = getProp(status, path)
  if (isArrayEmpty(itemsList)) {
    return
  }

  const bodyParams = new FormData()

  const items: ObjectKeys = {}
  itemsList.forEach((item: TableItem) => {
    bodyParams.append(item.name, item.value)
  })

  return items
}

export const getApiData = (status: any): ApiRequestConfig | undefined => {
  if (!getProp(status, 'url')) {
    return
  }

  return {
    url: getProp(status, 'url'),
    method: getProp(status, 'method'),
    responseType: getProp(status, 'responseType.value'),
    headers: getTableItems(status, 'tabs.headers'),
    params: getTableItems(status, 'tabs.params'),
    format: getProp(status, 'format.value'),
    data:
      getProp(status, 'format.value') === 'JSON'
        ? JSON.parse(getProp(status, 'dataTemplate'))
        : getTableItems(status, 'tabs.bodyparams'),
    extraValues: {
      format: getProp(status, 'format.value'),
    },
  }
}

export const objectToQueryParams = (object: Record<string, any>): string => {
  if (!object || Object.keys(object).length === 0) {
    return ''
  }

  const queryParams = new URLSearchParams(object).toString()
  return `?${queryParams}`
}

export const replacePlaceholders = (template: string, data: any) => {
  const keypathRegex = /\$\{([^\}]+)\}/g
  const replacedValue = template.replace(
    keypathRegex,
    (_: any, key: string) => {
      const value = getProp(data, key) || ''
      return value
    }
  )

  const getKeynameRegex = /\$\{([^}]+)\}/
  const match = template.match(getKeynameRegex)

  if (replacedValue == '[object Object]' && match) {
    const keyname = match[1]
    return getProp(data, keyname, replacedValue)
  }

  return replacedValue
}

export function replacePlaceholdersInObject(
  templateObject: any,
  data: any
): any {
  if (typeof templateObject === 'string') {
    return replacePlaceholders(templateObject, data)
  } else if (Array.isArray(templateObject)) {
    // Reemplazar en cada elemento del array
    return templateObject.map((item) => replacePlaceholdersInObject(item, data))
  } else if (typeof templateObject === 'object' && templateObject !== null) {
    // Recorrer y reemplazar en objetos
    const result: any = {}
    for (let key in templateObject) {
      if (
        typeof templateObject[key] === 'object' &&
        templateObject[key] !== null &&
        'parser' in templateObject[key]
      ) {
        // Detectar si es un ParserObject y procesar su valor y parser
        const { value, parser } = templateObject[key]
        const replacedValue = replacePlaceholders(value, data) // Reemplaza los placeholders en el valor
        // Ejecutar el parser con el valor reemplazado, si existe
        result[key] =
          typeof parser === 'function' ? parser(replacedValue) : replacedValue
      } else {
        // Reemplazar normalmente para objetos anidados
        result[key] = replacePlaceholdersInObject(templateObject[key], data)
      }
    }
    return result
  }
}

export function generateQueryParams(params: any = {}, data: any) {
  return Object.keys(params).map((key) => ({ [key]: data[key] }))
}

export const getProjectId = () => {
  return getLocalStorageFromKey({ key: KORA_PROJECT_ID })
}
