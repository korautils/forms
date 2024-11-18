import React, { forwardRef } from 'react'
import { TextField } from '@mui/material'
import { SIZES } from '@/modules/core/components/shared/Types/types'

interface Props {
  type?: 'text' | 'email'
  className?: string
  size?: SIZES
  label?: string
  value?: string
  onChange?: any
  helperText?: string
  placeholder?: string
  error?: boolean
}

const Input: React.FC<Props> = forwardRef<any, Props>(
  (
    { className, label, type, size, placeholder, helperText, error, ...props },
    ref
  ) => {
    const handleMouseDownPassword = (
      event: React.MouseEvent<HTMLButtonElement>
    ) => {
      event.preventDefault()
    }

    return (
      <TextField
        {...props}
        type={type}
        size={size}
        placeholder={placeholder}
        error={error}
        helperText={helperText}
        inputRef={ref}
        fullWidth
      />
    )
  }
)

Input.displayName = 'Input'

export default Input
