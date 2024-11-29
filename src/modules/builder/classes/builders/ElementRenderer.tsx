import React from 'react'
import { Box } from '@mui/material'

import { ElementProps } from '@/modules/builder/interfaces/elements/types'
import { ELEMENT_TYPE } from '@/modules/builder/interfaces/elements/components'

interface Props extends ElementProps {
  elementType: ELEMENT_TYPE
  component: any
}

const ElementRenderer: React.FC<Props> = React.forwardRef(function Element(
  {
    elementType,
    component: Component,
    name,
    label,
    labelVariant,
    required,
    minLength,
    maxLength,
    pattern,
    ...props
  },
  ref: any
) {
  const savedLabel = label

  if (labelVariant === 'UNLABELING') {
    label = ''
  }

  return (
    <Box
      ref={ref}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '3px',
        width: '100%',
        '.label-component': {
          fontWeight: 'bold',
          display: 'block',
        },
      }}
    >
      {labelVariant === 'UNLABELING' && elementType !== 'CHECKBOX' && (
        <label className='label-component' htmlFor={name}>
          {savedLabel}:
        </label>
      )}
      <Component
        name={name}
        label={`${label}${required ? ' *' : ''}`}
        pattern={pattern}
        {...props}
      />
    </Box>
  )
})

export default ElementRenderer
