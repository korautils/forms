import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { ObjectUtils } from '@/modules/core/utils'
import objectPath from 'object-path'

interface Props {
  schema?: any
  initialData?: any
}

const useValidate = ({ schema, initialData }: Props) => {
  const {
    register: registerOriginal,
    watch,
    reset,
    handleSubmit,
    control,
    formState: { errors },
    setValue,
    getValues,
    setError,
    resetField,
    trigger,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
    values: initialData,
  })

  const register = (name: any) => {
    return {
      ...registerOriginal(name),
      error: ObjectUtils.has(errors, name),
      helperText: objectPath.get(errors, `${name}.message`),
    }
  }

  return {
    register,
    handleSubmit,
    watch,
    setValue,
    getValues,
    reset,
    control,
    errors,
    resetField,
    setError,
    trigger,
  }
}

export default useValidate
