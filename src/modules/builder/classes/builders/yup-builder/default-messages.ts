import { MessageDetail } from './types'

export const getMessage = ({ type, defaultMessage, value }: MessageDetail) => {
  if (defaultMessage) {
    return defaultMessage
  }

  switch (type) {
    case 'required':
    case 'string':
      return 'This field is required'
    case 'number':
      return 'You must enter a number'
    case 'boolean':
      return 'You must select an option'
    case 'object':
      return 'You must select an option'
    case 'min':
      return `Enter at least ${value} digits`
    case 'max':
      return `Enter at most ${value} digits`
    case 'date':
      return 'Enter a valid date'
    case 'array':
      return 'You must add at least one element'
    case 'url':
      return 'You must enter a valid URL'
    case 'email':
      return 'You must enter a valid email'
    case 'pattern':
      return `The pattern does not match: ${value}`
    default:
      return 'This field is required'
  }
}
