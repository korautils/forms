// import { ELEMENT_TYPE } from '@/modules/dashboard/interfaces/components'
import ComponentBuilder from '@/modules/builder/classes/builders/ElementBuilder'
import { ElementProps, OriginElement } from '@/modules/builder/interfaces/elements/types'
import ElementBuilder from '@/modules/builder/classes/builders/ElementBuilder'
import { YupRule } from '@/modules/builder/classes/builders/yup-builder/types'
import { ELEMENT_TYPE } from '@/modules/builder/interfaces/elements/components'

class ElementFactory {
  static renderElement(
    type: ELEMENT_TYPE,
    props: ElementProps,
    origin: OriginElement = 'DEFAULT'
  ) {
    return this.createComponent(type, props).build({ origin })
  }

  private static parseNumValidationValue(value: string | number | undefined) {
    let compiledValue

    if (typeof value === 'string') {
      compiledValue = { value: Number(value) }
    } else if (value !== undefined) {
      compiledValue = { value }
    }

    return compiledValue
  }

  private static processValidations(
    type: ELEMENT_TYPE,
    props: ElementProps,
    element: ElementBuilder
  ) {
    const yupRule: YupRule = {
      type: 'string',
      required: { value: props.required ? true : false },
      min: this.parseNumValidationValue(props.minLength),
      max: this.parseNumValidationValue(props.maxLength),
      pattern: { value: props.pattern },
    }

    if (type === 'SELECT') {
      element.addValidation({
        ...yupRule,
        type: 'object',
      })
    } else if (
      (type === 'INPUT' && props.type === 'email') ||
      type === 'EMAIL'
    ) {
      element.addValidation({
        ...yupRule,
        type: 'string',
        isEmail: { value: true },
      })
    } else {
      element.addValidation({
        ...yupRule,
        type: 'string',
      })
    }

    return element
  }

  static composeComponent(type: ELEMENT_TYPE, props: ElementProps) {
    const element = this.createComponent(type, props)
    //Aquí debería tomar todas las cosas de validación y demás...
    this.processValidations(type, props, element)

    return element
  }

  static createComponent(
    type: ELEMENT_TYPE,
    props: ElementProps
  ): ElementBuilder {
    const builder = new ComponentBuilder()

    switch (type) {
      case 'INPUT':
        return builder.textField(props)
      case 'EMAIL':
        return builder.email(props)
      case 'NUMBER':
        return builder
          .textField()
          .withProps({ type: 'number' })
          .withProps(props)

      case 'PRICE':
        return builder.inputPrice(props)
      case 'PASSWORD':
        return builder.password(props)
      case 'SELECT':
        return builder.autocomplete(props)
      case 'BASIC_SELECT':
        return builder.selectBasic(props)
      case 'CHECKBOX':
        return builder.checkbox(props)
      case 'RADIO_GROUP':
        return builder.radioGroup(props)
      case 'DATE_FIELD':
        return builder.dateField(props)
      case 'TIME_FIELD':
        return builder.timeField(props)
      case 'TIME_RANGE_FIELD':
        return builder.timeRangeField(props)
      case 'TIME_DESKTOP':
        return builder.timeDesktop(props)
      case 'TIME_MOBILE':
        return builder.timeMobile(props)
      case 'DATE_PICKER':
        return builder.datePicker(props)
      case 'DATE_PICKER_MODAL':
        return builder.datePickerModal(props)
      case 'RANGE_PICKER':
        return builder.rangePicker(props)
      case 'BUTTON':
        return builder.button(props as any)
      case 'BOX':
        return builder.box(props)
      default:
        return builder.textField(props)
    }
  }
}

export default ElementFactory
