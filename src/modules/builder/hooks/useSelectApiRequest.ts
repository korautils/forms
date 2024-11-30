import { OptionSelect, RenderProps } from '@/modules/builder/interfaces/elements/types'
import useApiRequest from '@/modules/builder/hooks/useApiRequest'
import { useCallback, useEffect } from 'react'
import { getProp, isArrayEmpty } from '@/modules/core/utils'
import { getValueFromPath } from '@/modules/builder/utils'
import { getDataFromPath } from '@/modules/builder/utils/index'
import { ApiRequestConfig } from '@/modules/builder/interfaces/general'
import { Option } from '@/modules/builder/interfaces/elements/components'

interface Props {
  renderProps?: RenderProps
  api?: ApiRequestConfig
  options?: Array<OptionSelect>
}

const useSelectApiRequest = ({ api, renderProps, options }: Props) => {
  const { fetchData, loading, response } = useApiRequest()

  const parseOptions = (renderProps?: RenderProps): Array<Option> => {
    if (loading || !renderProps || !response) {
      return []
    }

    const data: Array<any> = getDataFromPath(
      getProp(response, 'data'),
      renderProps.value
    )

    if (!isArrayEmpty(data)) {
      return data.map((item) => ({
        ...(renderProps.includeAll ? { ...item } : {}),
        label: getValueFromPath(item, renderProps.label),
        value: getValueFromPath(item, renderProps.value),
      }))
    }

    return []
  }

  const launch = useCallback(() => {
    if (api) {
      fetchData(api)
    }
  }, [api, fetchData])

  useEffect(() => {
    launch()
  }, [launch])

  const optionsList =
    (isArrayEmpty(options) ? parseOptions(renderProps) : options) || []

  return { optionsList }
}

export default useSelectApiRequest
