import { FormHandlerProps } from '@/modules/builder/interfaces/elements/types'
import { CheckPropsWrapper } from './styles'
import CircleIcon from '@mui/icons-material/Circle'
import { getProp, isArrayEmpty, isValidObject } from '@/modules/core/utils'
import { objectToTableData } from '@/modules/builder/utils'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { Alert } from '@mui/material'
import ButtonComponent from '@/modules/core/components/shared/Button'

interface Props {
  formHandler?: FormHandlerProps
  handleClose?: any
}

const CheckProps: React.FC<Props> = ({ formHandler = {}, handleClose }) => {
  const { watch } = formHandler

  const data = watch!()

  const isValidApi = [200, 201, 204].includes(getProp(data, 'response.status'))

  const onClickEndConfiguration = () => {
    handleClose(data)
  }

  return (
    <CheckPropsWrapper>
      {!isValidApi && (
        <Alert severity='error'>
          La API no es válida, por favor verifica y ejecuta tu API en el paso
          anterior para conocer que ha sucedido.
        </Alert>
      )}

      {isValidApi && (
        <Alert severity='info'>
          <p>
            !Éxito! Tu API ha respondido con el código{' '}
            <strong>{getProp(data, 'response.status')}</strong>, lo que
            significa que todo está funcionando correctamente. Revisa la
            configuración a continuación para asegurarte de que todo esté como
            lo necesitas y, cuando estés listo, haz clic en{' '}
            <strong style={{ opacity: 0.8 }}>
              <i>'finalizar configuración'</i>
            </strong>
          </p>
        </Alert>
      )}

      <div className='grid-table'>
        <div className='row'>
          <div className='item'>
            <div className='col label'>URL:</div>
            <div className='col'>{getProp(data, 'url')}</div>
          </div>
        </div>

        <div className='row'>
          <div className='item'>
            <div className='col label'>Method:</div>
            <div className='col'>{getProp(data, 'method')}</div>
          </div>
        </div>

        <div className='row'>
          <div className='item'>
            <div className='col label'>Response Type:</div>
            <div className='col'>{getProp(data, 'responseType.value')}</div>
          </div>
        </div>

        {!isArrayEmpty(getProp(data, 'tabs.headers')) && (
          <div className='row'>
            <div className='item'>
              <div className='col label full-width'>
                <CircleIcon className='icon' /> Headers (
                {getProp(data, 'tabs.headers').length}):
              </div>
            </div>

            <div className='sub-items'>
              {getProp(data, 'tabs.headers').map((item: any, index: number) => (
                <div className='item' key={index}>
                  <div className='col label'>- {getProp(item, 'name')}</div>
                  <div className='col'>{getProp(item, 'value')}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {!isArrayEmpty(getProp(data, 'tabs.params')) && (
          <div className='row'>
            <div className='item'>
              <div className='col label full-width'>
                <CircleIcon className='icon' />
                Params ({getProp(data, 'tabs.params').length}):
              </div>
            </div>

            <div className='sub-items'>
              {getProp(data, 'tabs.params').map((item: any, index: number) => (
                <div className='item' key={index}>
                  <div className='col label'>- {getProp(item, 'name')}</div>
                  <div className='col'>{getProp(item, 'value')}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {!isArrayEmpty(getProp(data, 'tabs.bodyparams')) && (
          <div className='row'>
            <div className='item'>
              <div className='col label full-width'>
                <CircleIcon className='icon' />
                BodyParams ({getProp(data, 'tabs.bodyparams').length}):
              </div>
            </div>

            <div className='sub-items'>
              {getProp(data, 'tabs.bodyparams').map(
                (item: any, index: number) => (
                  <div className='item' key={index}>
                    <div className='col label'>- {getProp(item, 'name')}</div>
                    <div className='col'>{getProp(item, 'value')}</div>
                  </div>
                )
              )}
            </div>
          </div>
        )}

        {isValidObject(getProp(data, 'dataTemplate')) &&
          getProp(data, 'method') !== 'GET' &&
          getProp(data, 'format') === 'JSON' && (
            <div className='row'>
              <div className='item'>
                <div className='col label full-width'>
                  <CircleIcon className='icon' />
                  Body params (
                  {
                    Object.keys(JSON.parse(getProp(data, 'dataTemplate')))
                      .length
                  }
                  ):
                </div>
              </div>

              <div className='sub-items'>
                {objectToTableData(
                  JSON.parse(getProp(data, 'dataTemplate'))
                ).map((item: any, index: number) => (
                  <div className='item' key={index}>
                    <div className='col label'>- {getProp(item, 'name')}</div>
                    <div className='col'>{getProp(item, 'value')}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
      </div>

      <ButtonComponent
        fullWidth
        className='mt-1'
        onClick={onClickEndConfiguration}
        disabled={!isValidApi}
      >
        <CheckCircleIcon
          className='icon'
          style={{ fontSize: '1.2em', marginRight: 4 }}
        />
        Finalizar configuración
      </ButtonComponent>
    </CheckPropsWrapper>
  )
}

export default CheckProps
