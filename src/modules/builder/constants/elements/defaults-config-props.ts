import { AvailableProp } from '../../interfaces/elements/types'

export const defaultProps: Array<AvailableProp> = [
  {
    label: 'ID/Clave [name]',
    propName: 'name',
    type: 'string',
    component: 'input',
    order: 0,
  },
  {
    label: 'Etiqueta [label]',
    propName: 'label',
    type: 'string',
    component: 'input',
    order: 1,
  },
  {
    label: 'Lontitud mínima',
    propName: 'minLength',
    type: 'number',
    order: 3,
  },
  {
    label: 'Longitud máxima',
    propName: 'maxLength',
    type: 'number',
    order: 4,
  },
  {
    label: 'Requerido',
    propName: 'required',
    type: 'boolean',
    component: 'checkbox',
    order: 1000,
  },
  {
    label: 'Pattern',
    propName: 'pattern',
    type: 'string',
    component: 'input',
    order: 1000,
    // Así se asociarán reglas entre props:
    // rules: [
    //   [
    //     {
    //       field: 'required',
    //       operator: '==',
    //       value: true,
    //     },
    //   ],
    // ],
  },
  {
    label: 'Variante',
    propName: 'variant',
    component: 'select',
    type: 'number',
    propagate: true,
    options: [
      {
        label: 'Con label acoplado',
        value: 'LABELING',
        default: true,
      },
      {
        label: 'Con label desacoplado',
        value: 'UNLABELING',
      },
    ],
    order: 999,
  },
  {
    label: 'Orden',
    propName: 'order',
    type: 'number',
    component: 'number',
    order: 1000,
  },
]

export const optionsProps: Array<AvailableProp> = [
  {
    label: 'ID/Clave [name]',
    propName: 'name',
    type: 'string',
    component: 'input',
    order: 0,
  },
  {
    label: 'Etiqueta [label]',
    propName: 'label',
    type: 'string',
    component: 'input',
    order: 1,
  },
  {
    label: 'Valor por defecto',
    propName: 'defaultValue',
    type: 'object',
    order: 2,
  },
  {
    label: 'Requerido',
    propName: 'required',
    type: 'boolean',
    component: 'checkbox',
    order: 1000,
  },
  {
    label: 'Opciones',
    propName: 'defaultValue',
    type: 'object',
    component: 'options',
    order: 3,
  },
  {
    label: 'Orden',
    propName: 'order',
    type: 'number',
    component: 'number',
    order: 1000,
  },
]

export const dateProps: Array<AvailableProp> = []
