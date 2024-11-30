import { Box } from '@mui/material'
import FormBuilder from '@/modules/builder/classes/builders/FormBuilder'
import useGenericSubmit from '@/modules/builder/hooks/useGenericSubmit'
import FormRenderer from '@/modules/core/components/common/renderers/FormPreview/FormRenderer'
import { useEffect } from 'react'
import { FieldsetWrapper } from '@/modules/core/components/shared/Forms/Fieldset/styles'
import AlertResponse from '@/modules/core/components/common/renderers/FormPreview/AlertResponse'
import { FormHandlerProps } from '@/modules/builder/interfaces/elements/types'

interface Props {
  form: FormBuilder
  formHandler?: FormHandlerProps
}

const FormPreview: React.FC<Props> = ({ form }) => {
  const {
    control,
    errors,
    watch,
    reset,
    setValue,
    error,
    loading,
    handleSubmit,
    submit,
    response,
  } = useGenericSubmit({
    form,
  })

  const watchValues = watch()

  useEffect(() => {
    if (typeof form.getHandleOnChange() === 'function') {
      form.getHandleOnChange()(watchValues)
    }
  }, [watchValues, form])

  const getFormProps = (): any => {
    const withApi = form.getApi()
    return {
      component: withApi ? 'form' : 'div',
      onSubmit: withApi ? handleSubmit(submit) : undefined,
      sx: { width: '100%' },
    }
  }

  return (
    <Box {...getFormProps()}>
      {form.getApi()!! && (
        <AlertResponse
          form={form}
          loading={loading}
          response={response}
          error={error}
        />
      )}

      <FieldsetWrapper disabled={loading}>
        <FormRenderer
          form={form}
          formHandler={{
            control,
            errors,
            watch,
            setValue,
            reset,
          }}
        />
      </FieldsetWrapper>
    </Box>
  )
}

export default FormPreview
