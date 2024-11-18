import { FormHandlerProps } from '@/modules/builder/interfaces/elements/types'
import AccordionComponent from '../../../shared/Accordion/Accordion'
import EmptyResponse from './EmptyResponse'
import { HttpHeadersWrapper } from './styles'
import { getProp } from '@/modules/core/utils'
import StatusIndicator from './StatusIndicator'
import { objectToQueryParams } from '@/modules/builder/utils/fetch-utils'
import { ChildrenElement } from '@/modules/builder/interfaces/general'
import ComponentLayout from './ComponentLayout'

interface Props {
  loading?: boolean
  formHandler?: FormHandlerProps
  response?: any
}

interface ItemProps {
  label: ChildrenElement
  value: ChildrenElement
}

const HttpHeaders: React.FC<Props> = ({
  loading,
  formHandler = {},
  response,
}) => {
  // const {watch} = formHandler

  // const state = watch ? watch() : null
  // console.log('STATE', state)

  const renderItems = (items: Array<ItemProps>) => {
    return items?.map((item, index) => (
      <ComponentLayout key={index} label={item.label}>
        <span className="truncate">{item.value as any}</span>
      </ComponentLayout>
    ))
  }

  const getHeaders = (response: any) => {
    const headerParts = ['headers', 'config.headers']
    let headersList: Array<ItemProps & { origin: 'config' | 'response' }> = []

    headerParts.forEach((headerKey) => {
      let headers = getProp(response, headerKey)

      if (headers) {
        Object.keys(headers).forEach((item) => {
          const value = getProp(response, `${headerKey}.${item}`)
          if (value) {
            headersList.push({
              label: item,
              value,
              origin: headerKey.search('config') >= 0 ? 'config' : 'response',
            })
          }
        })
      }
    })

    return headersList
  }

  const headersList = getHeaders(response)
  const headersConfigList = headersList.filter(
    (item) => item.origin === 'config'
  )
  const headersResponseList = headersList.filter(
    (item) => item.origin === 'response'
  )

  const getGeneralProps = (response: any) => {
    const generalProps = [
      {
        label: 'Request URL',
        value: `${getProp(response, 'config.url')}${objectToQueryParams(
          getProp(response, 'config.params')
        )}`,
      },
      {
        label: 'Request Method',
        value: `${getProp(response, 'config.method', '')}`.toUpperCase(),
      },
      {
        label: 'Status Code',
        value: (
          <span className="status-container">
            <StatusIndicator
              statusCode={getProp(response, 'status')}
              size={16}
            />
            <span className="statis-text">{getProp(response, 'status')}</span>
          </span>
        ),
      },
    ]

    if (getProp(response, 'statusText')) {
      generalProps.push({
        label: 'Status Text',
        value: getProp(response, 'statusText'),
      })
    }

    return generalProps
  }

  return (
    <HttpHeadersWrapper>
      {(loading || !response) && <EmptyResponse loading={loading} />}

      {!loading && response && (
        <AccordionComponent
          formHandler={formHandler}
          options={[
            {
              label: 'General',
              value: 'general',
              content: renderItems(getGeneralProps(response)),
            },
            {
              label: `Response Headers (${headersResponseList.length})`,
              value: 'response_headers',
              content: renderItems(headersResponseList),
            },
            {
              label: `Request Headers (${headersConfigList.length})`,
              value: 'request_headers',
              content: renderItems(headersConfigList),
            },
          ]}
        />
      )}
    </HttpHeadersWrapper>
  )
}

export default HttpHeaders
