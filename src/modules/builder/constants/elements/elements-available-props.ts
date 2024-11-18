import { AvailableKeyProps } from '../../interfaces/elements/types'
import { defaultProps, optionsProps } from './defaults-config-props'

export const AVAILABLE_PROPS: AvailableKeyProps = {
  INPUT: [
    ...defaultProps,
    {
      label: 'Valor por defecto',
      propName: 'defaultValue',
      type: 'string',
      order: 5,
    },
    {
      label: 'Placeholder',
      propName: 'placeholder',
      type: 'string',
      order: 6,
    },
  ],
  EMAIL: [
    ...defaultProps,
    {
      label: 'Valor por defecto',
      propName: 'defaultValue',
      type: 'string',
      order: 2,
    },
    {
      label: 'Placeholder',
      propName: 'placeholder',
      type: 'string',
      order: 4,
    },
  ],
  NUMBER: [
    ...defaultProps,
    {
      label: 'Valor por defecto',
      propName: 'defaultValue',
      type: 'string',
      order: 2,
    },
    {
      label: 'Valor mínimo',
      propName: 'minValue',
      type: 'number',
      component: 'number',
      order: 4,
    },
    {
      label: 'Valor máximo',
      propName: 'maxValue',
      type: 'number',
      component: 'number',
      order: 5,
    },
  ],
  PRICE: [
    ...defaultProps,
    {
      label: 'Valor por defecto',
      propName: 'defaultValue',
      type: 'string',
      order: 2,
    },
  ],
  PASSWORD: [
    ...defaultProps,
    {
      label: 'Contraseña cifrada',
      propName: 'hashedPassword',
      type: 'boolean',
      component: 'checkbox',
      order: 5,
    },
    {
      label: 'Tipo de cifrado',
      propName: 'hashedType',
      type: 'string',
      component: 'select',
      options: [{ label: 'HS256', value: 'HS256', default: true }],
      order: 6,
      rules: [
        [
          {
            field: 'hashedPassword',
            operator: '==',
            value: true,
          },
        ],
      ],
    },
    {
      label: 'Valor por defecto',
      propName: 'defaultValue',
      type: 'string',
      order: 1,
    },
  ],
  SELECT: [...optionsProps],
  BASIC_SELECT: [
    ...optionsProps,
    {
      label: 'Mostrar opción ninguno',
      propName: 'showNone',
      type: 'boolean',
      component: 'checkbox',
      order: 4,
    },
    {
      label: 'Texto opción ninguno',
      propName: 'defaultNoneText',
      type: 'string',
      component: 'input',
      order: 5,
      rules: [[{ field: 'showNone', operator: '==', value: true }]],
    },
  ],
  CHECKBOX: [
    ...defaultProps,
    {
      label: 'Valor por defecto',
      propName: 'defaultValue',
      type: 'boolean',
      order: 2,
    },
  ],
  RADIO_GROUP: optionsProps,
  DATE_FIELD: [...defaultProps],
  DATE_PICKER: [...defaultProps],
  DATE_PICKER_MODAL: [...defaultProps],
  TIME_DESKTOP: [...defaultProps],
  TIME_FIELD: [...defaultProps],
  TIME_MOBILE: [...defaultProps],
  TIME_RANGE_FIELD: [...defaultProps],
  FILE_DROP: [...defaultProps],
  NORMAL_FILE: [...defaultProps],
  RANGE_PICKER: [...defaultProps],
}
