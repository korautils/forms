import React from 'react'
import classNames from 'classnames'
import {
  FieldValues,
  RegisterOptions,
  UseFormRegister,
  useForm,
} from 'react-hook-form'

interface FieldProps<T extends string> {
  form?: any
  children?: React.ReactElement | React.ReactElement[]
  name?: T extends string ? T : unknown
  options?: RegisterOptions<FieldValues, T>
}

export const Field: React.FC<FieldProps<string>> = ({
  form,
  options,
  name,
  children,
}) => {
  if (!name) {
    console.error('Field component requires a name prop.')
    return null
  }

  const registeredField = form?.register(name, options)

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child as React.ReactElement, {
        name: name,
        register: registeredField,
      })
    }
    return child
  })

  return <>{childrenWithProps}</>
}

interface Props {
  className?: string
  onSubmit?: (data: any) => void
  children?: React.ReactElement | React.ReactElement[]
}

export const FormComponent: React.FC<Props> = ({ className, children }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  return <form className={classNames(className)}>{children}</form>
}
