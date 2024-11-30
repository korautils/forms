import useValidate from '@/modules/builder/hooks/useValidate'
import FormBuilder from '@/modules/builder/classes/builders/FormBuilder'
import useApiRequest from '@/modules/builder/hooks/useApiRequest'
import {
  generateQueryParams,
  replacePlaceholders,
  replacePlaceholdersInObject,
} from '@/modules/builder/utils/fetch-utils'
import { ApiRequestConfig } from '@/modules/builder/interfaces/general'

interface Props {
  form: FormBuilder
}

const useGenericSubmit = ({ form }: Props) => {
  const { loading, error, response, fetchData, getUrl } = useApiRequest()
  const schema = form.getSchema().build()
  const {
    register,
    control,
    watch,
    setValue,
    getValues,
    reset,
    errors,
    handleSubmit,
  } = useValidate({ schema, initialData: form.getInitialData() })

  const parseApiConfig = (formData: any): ApiRequestConfig => {
    const api = form.getApi()!
    const data = { ...(api.data || {}), ...formData }

    //Lo primero será parsear la url:
    const finalUrl = replacePlaceholders(getUrl(api.url), data)
    const urlObject = new URL(finalUrl)

    const queryParams = generateQueryParams(api.params, data)
    Object.entries(queryParams).forEach(([key, value]) => {
      urlObject.searchParams.append(key, value as any)
    })

    const finalData = api.dataTemplate
      ? replacePlaceholdersInObject({ ...api.dataTemplate }, data)
      : data

    return {
      ...form.getApi()!,
      url: urlObject.toString(),
      data: { ...(api.data || {}), ...finalData },
    }
  }

  const submit = (data: any) => {
    if (!form.getApi()) {
      return
    }
    const parsedConfig = parseApiConfig(data)
    fetchData(parsedConfig)
  }

  return {
    register,
    control,
    watch,
    setValue,
    getValues,
    reset,
    errors,
    handleSubmit,
    submit,
    loading,
    error,
    response,
  }
}

export default useGenericSubmit
