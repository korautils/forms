import FormBuilder from '@/modules/builder/classes/builders/FormBuilder'
import { FormContext } from '@/modules/builder/storage/FormContext'
import { useContext, useEffect } from 'react'

interface Props {
  form: FormBuilder
  // control?: Control<FieldValues, any>
  // watch?: UseFormWatch<FieldValues>
  // setValue?: UseFormSetValue<FieldValues>
}

const useFormState = ({ form }: Props) => {
  const { forms, addForm } = useContext(FormContext)

  useEffect(() => {
    addForm(form.getId()!)
  }, [])
}

export default useFormState
