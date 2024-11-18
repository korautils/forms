import { arrayToOptions } from '@/modules/builder/utils'
import ParamsForm from './ParamsForm'
import BodyForm from './BodyForm'
import ResponseViewer from './ResponseViewer'
import IconLabel from '@/modules/builder/components/shared/IconLabel'

import {
  HTTP_METHODS,
  RESPONSE_TYPE_VALUES,
} from '@/modules/builder/interfaces/general'

import PropsSelection from './PropsSelection'
import FormBuilder from '@/modules/builder/classes/builders/FormBuilder'
import ElementBuilder from '@/modules/builder/classes/builders/ElementBuilder'
import CheckProps from './CheckProps'

const METHODS: Array<HTTP_METHODS> = ['GET', 'POST']
const RESPONSE_TYPES: Array<RESPONSE_TYPE_VALUES> = [
  'json',
  'arraybuffer',
  'blob',
  'document',
  'text',
  'stream',
]

export const getAPIForm = () => {
  const formBuilder = FormBuilder.newForm().setCols(8)

  formBuilder
    .addItem(
      ElementBuilder.newElement()
        .selectBasic({
          name: 'method',
          label: 'Método http',
          options: arrayToOptions(METHODS),
          showNone: false,
          value: arrayToOptions(METHODS)[0],
        })
        .setGridColumn(2)
        .addValidation({
          type: 'string',
          required: { value: true, message: 'Método inválido' },
        })
    )
    .addItem(
      ElementBuilder.newElement()
        .textField({ name: 'url', label: 'Api URL' })
        .setGridColumn(6)
        .addValidation({
          type: 'string',
          required: { value: true },
          isUrl: { value: true, message: 'Ingresa una URL válida' },
        })
    )
    .addItem(
      ElementBuilder.newElement()
        .select({
          name: 'responseType',
          label: 'Tipo de respuesta',
          options: arrayToOptions(
            RESPONSE_TYPES.filter((item) => item == 'json')
          ),
        })
        .setFullWidth()
        .addValidation({
          type: 'object',
          required: { value: true, message: 'Selecciona una opción válida' },
        })
    )
    .addItem(
      ElementBuilder.newElement()
        .tabs({
          name: 'tabs',
          options: [
            {
              label: 'Params',
              value: 'params',
              children: <ParamsForm id='params' variant='unborder' />,
            },
            {
              label: 'Body',
              value: 'body',
              children: <BodyForm />,
            },
            {
              label: 'Headers',
              value: 'headers',
              children: <ParamsForm id='headers' variant='unborder' />,
            },
          ],
        })
        .setFullWidth()
    )

  return formBuilder
}

export type API_REQUEST_TYPE = 'select' | 'form'

const getSteps = ({
  type,
  handleClose,
  extraData,
}: {
  type: API_REQUEST_TYPE
  handleClose: any
  onChange?: any
  extraData?: Record<string, any>
}) => {
  const basicSteps = [
    {
      label: <IconLabel icon='Api' label='Configurar API' />,
      body: getAPIForm(),
    },
    {
      label: <IconLabel icon='Science' label='Probar API' />,
      body: <ResponseViewer extraData={extraData} />,
    },
    {
      label: <IconLabel icon='Check' label='Verificar' />,
      body: <CheckProps handleClose={handleClose} />,
    },
  ]

  const selectSteps = [
    ...basicSteps,
    {
      label: <IconLabel icon='Tune' label='Selección de propiedades' />,
      body: <PropsSelection name='renderProps' />,
    },
    {
      label: <IconLabel icon='Preview' label='Revisión final' />,
      body: <span>Element Viewer</span>, // He pasado el handleClose, pero me gustaría agregar un observer para estos casos, lo ideal es que el ElementBuilder tenga un módulo para agregar observers
    },
  ]

  const formSteps = [...basicSteps]

  if (type === 'select') {
    return selectSteps
  }

  if (type === 'form') {
    return formSteps
  }
}

export const getForm = ({
  type,
  initialData,
  onChange,
  handleClose,
  extraData,
}: {
  initialData: any
  onChange: any
  handleClose: any
  type: API_REQUEST_TYPE
  extraData?: Record<string, any>
}) => {
  const formStepper = FormBuilder.newForm(initialData)

  formStepper.addItem(
    ElementBuilder.newElement().stepper({
      name: 'stepper',
      steps: getSteps({ type, handleClose, extraData, onChange }) as any,
    })
  )

  return formStepper.build()
}
