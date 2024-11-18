import { MessageDetail } from './types'

export const getMessage = ({ type, defaultMessage, value }: MessageDetail) => {
  if (defaultMessage) {
    return defaultMessage
  }

  switch (type) {
    case 'required':
    case 'string':
      return 'El campo es requerido'
    case 'number':
      return 'Debes ingresar un número'
    case 'boolean':
      return 'Debes seleccionar una opción'
    case 'object':
      return 'Debes seleccionar una opción'
    case 'min':
      return `Ingresa mínimo ${value} dígitos`
    case 'max':
      return `Ingresa máximo ${value} dígitos`
    case 'date':
      return 'Ingresa una fecha válida'
    case 'array':
      return 'Debe agregar al menos un elemento'
    case 'url':
      return 'Debe ingresar una URL válida'
    case 'email':
      return 'Debe ingresar un correo válido'
    case 'pattern':
      return `El patrón no coincide: ${value}`
    default:
      return 'El campo es requerido'
  }
}
