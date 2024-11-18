import { URL_REGEX } from '@/modules/core/constants/regex'
import { formatBearerToken, getProp } from '@/modules/core/utils'
import axios, { AxiosError } from 'axios'
import { useState, useCallback, useContext } from 'react'
import { getProjectId } from '../utils/fetch-utils'
import { ApiRequestConfig } from '../interfaces/general'
import { AxiosConfig } from '@/modules/config/axios'
// import { API_SERVER } from '@/config/axios'

type TYPE = 'single' | 'multiple'

const useApiRequest = () => {
  const authToken = '',
    refreshToken = ''
  const [loading, setLoading] = useState<boolean>(false)
  const [responses, setResponse] = useState<any[]>([])
  const [error, setError] = useState<AxiosError | null>(null)
  const [type, setType] = useState<TYPE>('single')
  const HOST_URL = AxiosConfig.API_SERVER

  const axiosInstance = axios.create({
    headers: {
      'Content-Type': 'application/json',
      // Authorization: formatBearerToken(authToken || ''),
    },
  })

  const initializateStates = (type: TYPE) => {
    setLoading(true)
    setType(type)
    setError(null)
    setResponse([])
  }

  const getUrl = (url: string): string => {
    if (URL_REGEX.test(url)) {
      return url
    }

    const formattedUrl = url.startsWith('/') ? url.substring(1) : url
    return `${HOST_URL}/${formattedUrl}`
  }

  const fetchData = useCallback(async (config: ApiRequestConfig) => {
    initializateStates('single')

    try {
      const response = await axiosInstance({
        url: getUrl(config.url),
        method: config.method,
        headers: config.headers,
        params: config.params,
        data: config.data,
        timeout: config.timeout,
        responseType: config.responseType,
        auth: config.auth,
      })

      callCallbacks({ response, config: [config] })
      return response
    } catch (error) {
      console.log(error)
      callCallbacks({ error, config: [config] })
      return getProp(error, 'response')
    } finally {
      setLoading(false)
    }
  }, [])

  const callCallbacks = ({
    error,
    response,
    config,
  }: {
    error?: any
    response?: any
    config: ApiRequestConfig[]
  }) => {
    for (const cfg of config) {
      if (error && typeof cfg.onError === 'function') {
        cfg.onError(error)
      }

      if (!error && typeof cfg.onSuccess === 'function') {
        cfg.onSuccess(response)
      }
    }

    if (response) {
      setResponse(type === 'single' ? [response] : response)
    }

    if (error) {
      setError(error as AxiosError)
      setResponse([(error as AxiosError).response])
    }
  }

  const fetchMultipleData = useCallback(async (configs: ApiRequestConfig[]) => {
    initializateStates('multiple')

    try {
      const promises = configs.map((config) =>
        axiosInstance({
          url: config.url,
          method: config.method,
          headers: config.headers,
          params: config.params,
          data: config.data,
          timeout: config.timeout,
          responseType: config.responseType,
          auth: config.auth,
        })
      )

      const responses = await Promise.all(promises)
      callCallbacks({ response: responses, config: configs })
      return responses
    } catch (error) {
      callCallbacks({ error, config: configs })
    } finally {
      setLoading(false)
    }
  }, [])

  return {
    fetchData,
    fetchMultipleData,
    loading,
    response: type === 'single' ? responses[0] : responses,
    error,
    getUrl,
  }
}

export default useApiRequest
