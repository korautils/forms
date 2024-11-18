import FormBuilder from '@/modules/builder/classes/builders/FormBuilder'
import { FormHandlerProps } from '@/modules/builder/interfaces/elements/types'
import ButtonComponent from '@/modules/core/components/shared/Button'
import { ResponseViewerWrapper } from './styles'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import EmptyResponse from './EmptyResponse'
import { getProp } from '@/modules/core/utils'
import useApiRequest from '@/modules/builder/hooks/useApiRequest'
import { CircularProgress } from '@mui/material'
import HttpHeaders from './HttpHeaders'
import ResponsePreview from './ResponsePreview'
import { getApiData } from '@/modules/builder/utils/fetch-utils'
import { useCallback } from 'react'
import ElementBuilder from '@/modules/builder/classes/builders/ElementBuilder'
import { ApiRequestConfig } from '@/modules/builder/interfaces/general'

interface Props {
  formHandler?: FormHandlerProps
  extraData?: Record<string, any>
}

const ResponseViewer: React.FC<Props> = ({ formHandler = {}, extraData }) => {
  const { fetchData, loading } = useApiRequest()
  const { watch, setValue } = formHandler
  const formData = watch ? watch() : null
  const dataType = getProp(formData, 'responseType.value')

  const getForm = () => {
    const form = FormBuilder.newForm().setFormHandler(formHandler)

    form.addItem(
      ElementBuilder.newElement().tabs({
        name: 'responseTab',
        options: [
          {
            label: 'Headers',
            value: 'headers',
            children: (
              <HttpHeaders
                loading={loading}
                response={getProp(formData, 'response')}
              />
            ),
          },
          {
            label: 'Preview',
            value: 'preview',
            children: (
              <ResponsePreview
                loading={loading}
                data={getProp(formData, 'response.data')}
                dataType={dataType}
              />
            ),
          },
          {
            label: 'Payload',
            value: 'payload',
            children: <EmptyResponse loading={loading} />,
            visible: false,
          },
          {
            label: 'Response',
            value: 'response',
            children: (
              <ResponsePreview
                loading={loading}
                data={getProp(formData, 'response')}
                dataType={dataType}
              />
            ),
          },
        ],
      })
    )

    return form.build()
  }

  const handleExecuteQuery = useCallback(() => {
    const apiRequestConfig: ApiRequestConfig | undefined = getApiData(formData)
    if (!apiRequestConfig) return

    apiRequestConfig.data = extraData
      ? {
          ...extraData,
          ...(apiRequestConfig.data ? apiRequestConfig.data : {}),
        }
      : apiRequestConfig.data

    fetchData({ method: 'POST', url: '/test_api', data: apiRequestConfig })
      .then((response) => {
        if (setValue) {
          setValue(
            'response',
            getProp(response, 'data.detail') &&
              getProp(response, 'status') === 400
              ? {
                  ...response,
                  config: {
                    ...response.config,
                    url: apiRequestConfig.url,
                    method: apiRequestConfig.method,
                  },
                }
              : response.data
          )
        }
      })
      .catch((error) => {
        console.error('ERROR:', error)
      })
  }, [formData, extraData, fetchData, setValue])

  // useEffect(() => {
  //   handleExecuteQuery();
  // }, [handleExecuteQuery]);

  return (
    <ResponseViewerWrapper>
      <ButtonComponent
        variant='contained'
        onClick={handleExecuteQuery}
        disabled={loading}
      >
        {loading ? (
          <>
            <CircularProgress />
            Esperando respuesta...
          </>
        ) : (
          <>
            <RocketLaunchIcon className='icon-margin' />
            Ejecutar API
          </>
        )}
      </ButtonComponent>

      <div className='response-tabs-container'>{getForm()}</div>
    </ResponseViewerWrapper>
  )
}

export default ResponseViewer
