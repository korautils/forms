import React, { forwardRef } from 'react'
import { IconButton, InputAdornment, TextField } from '@mui/material'
import { SIZES } from '@/modules/core/components/shared/Types/types'
import { Visibility, VisibilityOff } from '@mui/icons-material'

interface Props {
  className?: string
  size?: SIZES
  label?: string
  value?: string
  onChange?: any
  helperText?: string
  placeholder?: string
  error?: boolean
  fullWidth?: boolean
  color?: any
}

const InputPassword: React.FC<Props> = forwardRef<any, Props>(
  (
    { className, label, size, placeholder, helperText, error, ...props },
    ref
  ) => {
    const [showPassword, setShowPassword] = React.useState(false)

    const handleClickShowPassword = () => setShowPassword((show) => !show)

    const handleMouseDownPassword = (
      event: React.MouseEvent<HTMLButtonElement>
    ) => {
      event.preventDefault()
    }

    return (
      <TextField
        {...props}
        label={label}
        type={showPassword ? 'text' : 'password'}
        size={size}
        placeholder={placeholder}
        error={error}
        helperText={helperText}
        InputProps={{
          endAdornment: (
            <InputAdornment position='end'>
              <IconButton
                aria-label='toggle password visibility'
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge='end'
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
        }}
        inputRef={ref}
      />
    )
  }
)

InputPassword.displayName = 'InputPassword'

export default InputPassword
