import metadata from 'libphonenumber-js/metadata.min.json'
import { CountryCode, parsePhoneNumber } from 'libphonenumber-js'
import { get as getPropFn, del as delProp } from 'object-path'
import { v4 as uuidv4 } from 'uuid'
import { KoraComponentProps } from '@/modules/builder/interfaces/elements/components'

type PathKey = string | number

export function countryToFlag(isoCode: string) {
  if (!isoCode) {
    return ''
  }
  const country =
    typeof String.fromCodePoint !== 'undefined'
      ? isoCode
          .toUpperCase()
          .replace(/./g, (char) =>
            String.fromCodePoint(char.charCodeAt(0) + 127397)
          )
      : isoCode
  return country
}

export const getPrefix = (countryCode?: string) => {
  if (!countryCode) {
    return '1'
  }

  return metadata.countries[countryCode as CountryCode]?.[0]
}

export const getParts = ({ geoip, value }: any) => {
  let codeNumber = getPrefix(geoip?.country),
    phone = ''
  try {
    if (value) {
      const parsedNumber = parsePhoneNumber(value)
      codeNumber = parsedNumber.countryCallingCode
      phone = parsedNumber.nationalNumber
    }
  } catch (error) {}

  return { codeNumber, phone }
}

export const ObjectUtils = {
  has: (obj: any, path: any) => {
    const keys = path.split('.')
    return keys.every(
      (key: any) => obj != null && obj.hasOwnProperty(key) && (obj = obj[key])
    )
  },
  remove: (obj: Record<string, any>, keysToRemove: PathKey[]) => {
    const newObj = { ...obj }
    keysToRemove.forEach((key) => {
      delProp(newObj, key)
    })
    return newObj
  },
}

export const getProp = (object: any, path: string, defaultValue?: any) => {
  if (!object) {
    return defaultValue
  }

  return getPropFn(object, path, defaultValue)
}

export const getMany = (object: object | undefined, keyPaths: string[]) => {
  if (typeof object !== 'object' || Array.isArray(object)) {
    return []
  }

  const gotten = keyPaths.map((keyPath) => {
    const gottenValue = getProp(object, keyPath)
    return gottenValue
  })

  return gotten
}

export const slugify = (str: string): string => {
  if (typeof str != 'string') {
    return ''
  }

  return str
    .toLowerCase() // Convertir a minúsculas
    .normalize('NFD') // Descomponer caracteres especiales
    .replace(/[\u0300-\u036f]/g, '') // Eliminar diacríticos
    .replace(/[^a-z0-9 ]/g, '') // Eliminar caracteres especiales excepto letras y números
    .trim() // Eliminar espacios en blanco al inicio y al final
    .replace(/\s+/g, '-') // Reemplazar espacios con guiones
    .replace(/-+/g, '-') // Reemplazar guiones consecutivos con un solo guión
}

export const pascalCaseToSnakeCase = (iconName: string | undefined) => {
  if (!iconName || typeof iconName !== 'string') {
    return iconName
  }

  return iconName
    .replace(/([a-z])([A-Z])/g, '$1_$2') // Inserta guión bajo entre minúscula y mayúscula
    .toLowerCase() // Convierte todo a minúsculas
}

export interface NodeItem {
  id: number | string
  parent: number
  text: string
  droppable: boolean
  type: { id: string; label: string }
  url: string
  icon: any
  children?: NodeItem[]
}

export const convertToTreeData = (flatData: any): NodeItem[] => {
  // Objeto para almacenar los nodos por id para un acceso rápido
  const nodesById: { [key: number]: NodeItem } = {}

  // Primero, creamos un objeto por id para acceder a los nodos de manera eficiente
  flatData.forEach((node: any) => {
    nodesById[node.id] = {
      ...node,
      children: [], // Inicializamos un array para los hijos de cada nodo
    }
  })

  // Luego, creamos la estructura de árbol
  const tree: NodeItem[] = []
  flatData.forEach((node: any) => {
    // Si el nodo tiene un parent diferente de sí mismo, lo agregamos como hijo del parent
    if (node.parent !== node.id) {
      const parentNode = nodesById[node.parent]
      if (parentNode) {
        parentNode.children?.push(nodesById[node.id])
      } else {
        // Si el parent no existe en nodesById, lo agregamos al árbol principal
        tree.push(nodesById[node.id])
      }
    } else {
      // Si el nodo no tiene parent (o parent igual a sí mismo), lo agregamos al árbol principal
      tree.push(nodesById[node.id])
    }
  })

  return tree
}

export { uuidv4 }

export const getRandomDecimal = (
  min: number,
  max: number,
  decimalPlaces: number = 2
): number => {
  const factor = Math.pow(10, decimalPlaces)
  return Math.floor((Math.random() * (max - min) + min) * factor) / factor
}

export const removeBearer = (token: string): string => {
  return token.replace(/^Bearer\s/, '')
}

export const formatBearerToken = (token: string): string => {
  return `Bearer ${token}`
}

export const isUUIDv4 = (id: string) => {
  const uuidv4Regex =
    /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
  return uuidv4Regex.test(id)
}

export const isMongoId = (id?: string) => {
  if (!id) {
    return false
  }

  const mongoObjectIdRegex = /^[0-9a-fA-F]{24}$/
  return mongoObjectIdRegex.test(id)
}

export const getLocationPathname = (): any => {
  if (typeof window !== 'undefined') {
    const pathname = location?.pathname
    const replacedPathname = pathname.replace(/^\/[^\/]+\//, '/')
    return replacedPathname
  }
}

export const isJSON = (str: string) => {
  const jsonRegex = /^[\],:{}\s]*$/.test(
    str
      .replace(/\\["\\\/bfnrtu]/g, '@')
      .replace(
        /"[^"\\\n\r]*"|\b(true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)\b/g,
        ']'
      )
      .replace(/(?:^|:|,)(?:\s*\[)+/g, '')
  )

  return jsonRegex
}

export const orderComponents = (_listComponents: Array<KoraComponentProps>) => {
  return _listComponents.sort(
    (a, b) => getProp(a, 'order', 0) - getProp(b, 'order', 0)
  )
}

export const isArrayEmpty = <T>(array: T[] | undefined): boolean => {
  return !array || array.length === 0 || !Array.isArray(array)
}

export const isValidObject = (valor: string) => {
  try {
    // Primero verificamos si el valor es nulo o una cadena vacía
    if (valor === null || valor === '') {
      return false
    }

    // Intentamos parsear el valor como JSON
    const objeto = JSON.parse(valor)

    // Verificamos si el resultado es un objeto
    return objeto && typeof objeto === 'object' && !Array.isArray(objeto)
  } catch (e) {
    // Si ocurre un error en el parseo, no es un JSON válido
    return false
  }
}
