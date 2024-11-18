import ElementBuilder from '@/modules/builder/classes/builders/ElementBuilder'
// import { Grid } from '../../ModulesCreator/styles'
import { BodyFormWrapper } from './styles'
import FormBuilder from '@/modules/builder/classes/builders/FormBuilder'
import ParamsForm from '../ParamsForm'
import { FORMAT_OPTIONS } from './options'
import { FormHandlerProps } from '@/modules/builder/interfaces/elements/types'
import BodyEditor from './BodyEditor'
import WarningIcon from '@mui/icons-material/Warning'
import { Grid } from '../../renderers/FormPreview/styles'

interface Props {
  name?: string
  parentName?: string
  formHandler?: FormHandlerProps
}

const BodyForm: React.FC<Props> = ({ formHandler = {}, parentName }) => {
  const { watch } = formHandler
  const method = watch!('method')
  const getForm = () => {
    const newForm = FormBuilder.newForm().setFormHandler(formHandler)

    newForm
      .addItem(
        ElementBuilder.newElement()
          .select({
            name: 'format',
            label: 'Formato',
            options: FORMAT_OPTIONS.filter(
              (item) => ['JSON', 'FORM_DATA'].includes(item.value.toUpperCase())
            ),
          })
          .setFullWidth()
          .setStyles({ marginTop: 3 })
      )
      .addItem(
        ElementBuilder.newElement()
          .box({
            children: (
              <ParamsForm
                id='bodyparams'
                variant='unborder'
                formHandler={formHandler}
                parentName={parentName}
              />
            ),
          })
          .setFullWidth()
          .addRule([
            {
              fieldName: 'format.value',
              operator: '==',
              value: 'FORM_DATA',
            },
            { visible: true },
          ])
      )
      .addItem(
        ElementBuilder.newElement()
          .box({
            children: (
              <BodyEditor name='dataTemplate' formHandler={formHandler} />
            ),
          })
          .setFullWidth()
          .addRule([
            {
              fieldName: 'format.value',
              operator: '==',
              value: 'JSON',
            },
            { visible: true },
          ])
      )

    return newForm.build()
  }

  return (
    <BodyFormWrapper>
      <Grid>
        {['POST', 'PUT', 'DELETE'].includes(method) ? (
          getForm()
        ) : (
          <span
            className='flex'
            style={{ gap: 3, margin: 2, opacity: 0.8, alignItems: 'center' }}
          >
            <WarningIcon style={{ fontSize: '1em' }} /> No permitido para el
            método http seleccionado ({method}).
          </span>
        )}
      </Grid>
    </BodyFormWrapper>
  )
}

export default BodyForm
