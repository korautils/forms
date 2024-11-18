import * as React from 'react'
import { ApiRequestCofingModalWrapper } from './styles'
import { API_REQUEST_TYPE, getForm } from './api-request-modal-form-builder'
import {
  objectToTableData,
  stringToOption,
} from '@/modules/builder/utils/index'
import { ApiRequestConfigFormState } from './types'
import { KoraComponentProps } from '@/modules/builder/interfaces/elements/components'
import { getProp } from '@/modules/core/utils/index'
import ModalDialog from '@/modules/core/components/shared/ModalDialog'

interface Props {
  type: API_REQUEST_TYPE
  open?: boolean
  onChange?: any
  handleClose?: any
  currentComponent: KoraComponentProps
}

const ApiRequestConfigModal: React.FC<Props> = ({
  type = 'form',
  currentComponent,
  open = false,
  onChange,
  handleClose,
}) => {
  const getInitialData = (): ApiRequestConfigFormState => {
    return {
      url: getProp(currentComponent, 'api.url'),
      method: getProp(currentComponent, 'api.method'),
      responseType: stringToOption(
        getProp(currentComponent, 'api.responseType'),
        false
      ),
      format: stringToOption(getProp(currentComponent, 'api.format')),
      tabs: {
        tabValue: getProp(currentComponent, 'api.extraValues.tabValue'),
        headers: objectToTableData(getProp(currentComponent, 'api.headers')),
        params: objectToTableData(getProp(currentComponent, 'api.params')),
        bodyparams: objectToTableData(
          getProp(
            currentComponent,
            'api.dataTemplate',
            getProp(currentComponent, 'api.data')
          )
        ),
      },
      renderProps: currentComponent.renderProps,
      dataTemplate: JSON.stringify(
        getProp(currentComponent, 'api.dataTemplate')
      ),
    }
  }

  return (
    <ModalDialog
      minWidth={600}
      paddingBody={0}
      open={open}
      handleClose={handleClose}
      showFooter={false}
      disableBackdropAction
    >
      <ApiRequestCofingModalWrapper>
        {getForm({
          type,
          initialData: getInitialData(),
          onChange: onChange,
          handleClose,
          extraData: {},
        })}
      </ApiRequestCofingModalWrapper>
    </ModalDialog>
  )
}

export default ApiRequestConfigModal
