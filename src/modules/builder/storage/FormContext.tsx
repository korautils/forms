import { createContext, useState } from 'react'
import { ContextProps } from '@/modules/core/interfaces/context'

interface Forms {
  [key: string]: any
}

export interface FormContextProps {
  forms: Forms
  setForms: (forms: Forms) => void
  addForm: (formId: string) => void
}

export const FormContext = createContext({} as FormContextProps)

export const FormContextProvider = ({ children }: ContextProps) => {
  const [forms, setForms] = useState<Forms>({})

  const addForm = (formId: string) => {
    if (formId in forms) {
      return
    }

    setForms((oldForms) => ({ ...oldForms, [formId]: {} }))
  }

  return (
    <FormContext.Provider value={{ forms, setForms, addForm }}>
      {children}
    </FormContext.Provider>
  )
}
