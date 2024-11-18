import * as yupUtil from 'yup'
import { YupRule } from './types'
import { getMessage } from './default-messages'
import { EMAIL_REGEX, URL_REGEX } from '@/modules/core/constants/regex'

class YupBuilder {
  schema: Record<string, yupUtil.AnySchema> = {}

  constructor() {}

  static newInstance() {
    return new YupBuilder()
  }

  static createRule({
    type,
    required,
    isUrl,
    isEmail,
    pattern,
    min,
    max,
  }: YupRule): yupUtil.AnySchema | undefined {
    const yupMethod = yupUtil[type] as () => yupUtil.AnySchema

    if (!yupMethod) {
      return
    }

    let schema: any = yupMethod().typeError(getMessage({ type }))

    if (required !== undefined && required?.value) {
      const message = getMessage({
        type: 'required',
        defaultMessage: required.message,
      })

      schema = schema.required(message).typeError(message)
    }

    if (isUrl !== undefined) {
      schema = schema.matches(
        URL_REGEX,
        getMessage({
          type: 'url',
          defaultMessage: isUrl.message,
        })
      )
    }

    if (isEmail !== undefined) {
      schema = schema.matches(
        EMAIL_REGEX,
        getMessage({
          type: 'email',
          defaultMessage: isEmail.message,
        })
      )
    }

    if (pattern?.value !== undefined) {
      schema = schema.matches(
        pattern.value,
        getMessage({
          type: 'pattern',
          value: String(pattern.value),
          defaultMessage: pattern.message,
        })
      )
    }

    if (min?.value !== undefined) {
      schema = schema.min(
        min.value,
        getMessage({
          type: 'min',
          value: min.value,
          defaultMessage: min.message,
        })
      )
    }

    if (max?.value !== undefined) {
      schema = schema.max(
        max.value,
        getMessage({
          type: 'max',
          value: max.value,
          defaultMessage: max.message,
        })
      )
    }

    return schema
  }

  addRule(params: YupRule) {
    const schema = YupBuilder.createRule(params)

    this.schema[params.name!] = schema!

    return this
  }

  pushRule(name: string, rule: yupUtil.AnySchema) {
    this.schema[name] = rule
  }

  static string = yupUtil.string
  static number = yupUtil.number
  static date = yupUtil.date
  static object = yupUtil.object
  static boolean = yupUtil.boolean

  build() {
    return yupUtil.object(this.schema)
  }
}

export default YupBuilder
