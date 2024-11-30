import { OptionSelect } from '@/modules/builder/interfaces/elements/types'
import { getProp, isArrayEmpty, uuidv4 } from '@/modules/core/utils'
import { TableItem } from '@/modules/builder/interfaces/general'

export const arrayToOptions = (array: Array<string>) => {
  if (isArrayEmpty(array)) {
    return []
  }

  return array.map((item) => ({ label: item, value: item }))
}

export const stringToOption = (string: string, upperCase: boolean = true): OptionSelect | undefined => {
  if (!string) {
    return
  }

  return {
    label: upperCase ? string.toUpperCase() : string,
    value: upperCase ? string.toUpperCase() : string,
  }
}

export const objectToTableData = (object: TableItem) => {
  const objectKeys = object ? Object.keys(object) : []

  const data: Array<any> = []

  if (objectKeys.length > 0) {
    for (const key in object) {
      if (object.hasOwnProperty(key)) {
        data.push({
          id: uuidv4(),
          name: key,
          value: getProp(object, key),
        })
      }
    }
  }

  return data
}

/**
 * Ordena las claves de un objeto colocando las claves con valores de tipo array al final.
 * @param {Object} obj - El objeto cuyas claves se quieren ordenar.
 * @returns {Array<string>} - Un array con las claves del objeto ordenadas.
 */
export const sortKeysByType = (obj: any) => {
  return Object.keys(obj).sort((a, b) => {
    const isArrayA = Array.isArray(obj[a])
    const isArrayB = Array.isArray(obj[b])

    if (isArrayA && !isArrayB) {
      return 1 // `a` después de `b` si `a` es un array y `b` no lo es
    } else if (!isArrayA && isArrayB) {
      return -1 // `a` antes de `b` si `a` no es un array y `b` sí lo es
    }
    return 0 // Mantén el orden si ambos son arrays o ninguno lo es
  })
}

export const limitArrayChilds = (obj: any) => {
  if (Array.isArray(obj) && !isArrayEmpty(obj)) {
    return obj.slice(0, 1)
  }

  return obj
}

export const getValueFromPath = (obj: object, path: string): any => {
  const parts = path.split('.')

  let pathSummary = []
  let lastFound = null

  for (const path of parts.reverse()) {
    pathSummary.push(path)

    const pathTemp = [...pathSummary].reverse().join('.')
    const value = getProp(obj, pathTemp)

    if (value) {
      lastFound = pathTemp
    }
  }

  return getProp(obj, lastFound || path)
}

export const getDataFromPath = (obj: object, path: string) => {
  const parts = path.split('.')

  let pathSummary = []
  let lastFound = null

  for (const path of parts) {
    pathSummary.push(path)
    const _path = [...pathSummary].join('.')
    const value = getProp(obj, _path)

    if (value && Array.isArray(value)) {
      lastFound = _path
    }

    const finalPath = lastFound || path
    let finalValue = ['[0]', '0'].includes(finalPath)
      ? obj
      : getProp(obj, finalPath)
    return finalValue
  }
}

export const parseNum = (num: number | string | undefined) => {
  if (num === undefined || num === '') {
    return
  }

  if (typeof num === 'string') {
    return Number(num)
  }

  return num
}
