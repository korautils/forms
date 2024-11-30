import dayjs from 'dayjs'
import { KoraComponentProps } from '@/modules/builder/interfaces/elements/components'

export interface ItemComponentProps extends KoraComponentProps {
  details?: {
    title: string
    description: string
  }
}

export interface CollectionGroupProps {
  icon?: string
  title: string
  collection: Array<ItemComponentProps>
}

export const ELEMENTS_AVAILABLE_LIST: Array<CollectionGroupProps> = [
  {
    title: 'Básicos',
    collection: [
      {
        id: '1',
        type: 'INPUT',
        label: 'Campo de texto',
        value: 'John Smitch',
        details: {
          title: 'Campo de texto',
          description:
            'Usa este componente para capturar textos alfanúmericos como (nombres, apellidos, etc).',
        },
      },
      {
        id: '6',
        type: 'EMAIL',
        label: 'Correo electrónico',
        value: 'support@kora.com',
        details: {
          title: 'Correo electrónico',
          description:
            'Usa este componente para capturar correos electrónicos.',
        },
      },
      {
        id: '2',
        type: 'NUMBER',
        label: 'Campo númerico',
        value: '3000',
        details: {
          title: 'Campo númerico',
          description:
            'Usa este componente para capturar datos númericos como (edad, valores, etc).',
        },
      },
      {
        id: '2.1',
        type: 'PRICE',
        label: 'Precio',
        value: '3000',
        details: {
          title: 'Campo númerico con formato',
          description:
            'Usa este componente para capturar valores y aplicar formato ($10.000, $20.000, etc).',
        },
      },
      {
        id: '7',
        type: 'PASSWORD',
        label: 'Contraseña',
        value: '12345',
        details: {
          title: 'Contraseña',
          description:
            'Usa este componente para capturar contraseñas de usuario.',
        },
      },
      {
        id: '3.1',
        type: 'BASIC_SELECT',
        label: 'Selector básico',
        value: '',
        details: {
          title: 'Selector básico',
          description:
            'Usa este componente para mostrar opciones y capturar la elección del usuario.',
        },
      },
      {
        id: '3',
        type: 'SELECT',
        label: 'Selector de opciones',
        value: 'Opción 1',
        details: {
          title: 'Selector de opciones',
          description:
            'Usa este componente para mostrar opciones y capturar la elección del usuario.',
        },
      },
      {
        id: '4',
        type: 'CHECKBOX',
        label: 'Checkbox',
        details: {
          title: 'Checkbox',
          description:
            'Usa este componente para capturar opciones binarias o múltiples.',
        },
      },
      {
        id: '5',
        type: 'RADIO_GROUP',
        label: 'Género',
        value: 'male',
        details: {
          title: 'Radio Group',
          description:
            'Usa este componente para capturar opciones múltiples con única respuesta.',
        },
      },
    ],
  },
  {
    icon: 'CalendarMonth',
    title: 'Fechas & Tiempo',
    collection: [
      {
        id: '1.1',
        type: 'DATE_FIELD',
        label: 'Campo de fecha',
        value: dayjs('2000-02-02'),
        details: {
          title: 'Campo de fecha',
          description: 'Usa este componente para capturar fechas por teclado.',
        },
      },
      {
        id: '1.1.1',
        type: 'TIME_FIELD',
        label: 'Campo de hora',
        value: dayjs('2022-04-17T15:00'),
        details: {
          title: 'Campo de hora',
          description: 'Usa este componente para capturar horas por teclado.',
        },
      },
      {
        id: '1.1.1.2',
        type: 'TIME_RANGE_FIELD',
        label: 'Desde - Hasta',
        value: [dayjs('2022-04-17T15:00'), dayjs('2022-04-21T18:00')],
        details: {
          title: 'Intérvalo de hora',
          description:
            'Usa este componente para capturar intérvalo de hora por teclado.',
        },
      },
      {
        id: '1.1.1.3',
        type: 'TIME_DESKTOP',
        label: 'Selector de hora',
        value: dayjs('2022-04-17T15:00'),
        details: {
          title: 'Selector de hora',
          description: 'Usa este componente para seleccionar horas.',
        },
      },
      {
        id: '1.1.1.4',
        type: 'TIME_MOBILE',
        label: 'Selector de hora modal',
        value: dayjs('2022-04-17T15:00'),
        details: {
          title: 'Selector de hora modal',
          description:
            'Usa este componente para capturar intérvalo de hora por teclado.',
        },
      },
      {
        id: '1.2',
        type: 'DATE_PICKER',
        label: 'Selector de fecha',
        value: dayjs('2022-04-17'),
        details: {
          title: 'Selector de fecha',
          description: 'Usa este componente para capturar fechas.',
        },
      },
      {
        id: '1.3',
        type: 'DATE_PICKER_MODAL',
        label: 'Seleccionar fecha modal',
        value: dayjs('2022-04-17'),
        details: {
          title: 'Selector de fecha modal',
          description:
            'Usa este componente para capturar fechas con selectores.',
        },
      },
      // https://mui.com/x/react-date-pickers/date-calendar/
      // {
      //   id: '1.4',
      //   type: 'WEEK_PICKER',
      //   label: 'Selector de semana',
      //   details: {
      //     title: 'Selector de semana',
      //     description:
      //       'Usa este componente para seleccionar semanas.',
      //   },
      // },
      {
        id: '1.5',
        type: 'RANGE_PICKER',
        label: 'Desde - Hasta',
        value: [dayjs('2022-04-17T15:00'), dayjs('2022-04-21T18:00')],
        details: {
          title: 'Intérvalo de fechas',
          description:
            'Usa este componente para seleccionar intérvalo de fechas.',
        },
      },
    ],
  },
]
