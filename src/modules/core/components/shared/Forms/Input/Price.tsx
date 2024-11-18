import React, { forwardRef } from 'react'
import { Props, CustomProps } from './types'
import { NumericFormat } from 'react-number-format'
import { TextField } from '@mui/material'

//@ts-ignore
const NumericFormatCustom = React.forwardRef<NumericFormat<any>, CustomProps>(
  function NumericFormatCustom(props, ref) {
    const { onChange, ...other } = props

    return (
      <NumericFormat
        {...other}
        getInputRef={ref}
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: values.value,
            },
          })
        }}
        thousandSeparator
        valueIsNumericString
        prefix="$"
      />
    )
  }
)

const InputPriceComponent: React.FC<Props> = ({
  key,
  forwardRef,
  id,
  name,
  className = '',
  size = 'small',
  label = '',
  variant = 'outlined',
  fullWidth = true,
  error = false,
  required = false,
  pattern,
  minLength,
  maxLength,
  helperText,
  disabled = false,
  onChange,
  ...props
}) => {
  return (
    <TextField
      key={key}
      ref={forwardRef as any}
      className={className}
      id={id}
      name={name}
      size={size}
      label={label}
      required={required}
      value={props.value}
      disabled={disabled}
      variant={variant}
      onChange={onChange}
      fullWidth={fullWidth}
      helperText={helperText}
      error={error}
      InputProps={{
        inputComponent: NumericFormatCustom as any,
      }}
      {...props}
    />
  )
}

const InputPrice = forwardRef((props: Props, ref) => (
  <InputPriceComponent {...props} forwardRef={ref} />
))
InputPrice.displayName = 'InputPrice'
export default InputPrice
