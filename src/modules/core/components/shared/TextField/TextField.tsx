import React from 'react'
import MuiTextField from '@mui/material/TextField'

import { ElementProps } from '@/modules/builder/interfaces/elements/types'

interface Props extends ElementProps {
  pattern?: string
}

const TextField: React.FC<Props> = React.forwardRef(function Element(
  { value, onChange, pattern, color, ...props },
  ref: any
) {
  const { formHandler, ...elementProps } = props

  const handlePatternRegex = (event: any) => {
    const { value } = event.target
    if (!pattern || value === '' || new RegExp(pattern).test(value)) {
      onChange(event)
      return
    }
  }

  return (
    <MuiTextField
      {...(elementProps as any)}
      color={color}
      value={value}
      onChange={handlePatternRegex}
    />
  )
})

export default TextField
