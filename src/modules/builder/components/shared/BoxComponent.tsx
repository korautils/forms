import React from 'react'
import { Box } from '@mui/material'
import { BoxProps } from '../../classes/builders/element-props'

interface Props extends BoxProps {
  formHandler?: any // Define como opcional si es necesario
  parentName?: string // Define como opcional si es necesario
}

const BoxComponent: React.FC<Props> = ({
  formHandler,
  parentName,
  children,
}) => {
  const cloneChildren = (children: React.ReactNode) => {
    if (React.isValidElement(children)) {
      // Si es un único elemento React, clonar y agregar props
      return React.cloneElement(children as any, { formHandler, parentName })
    } else if (Array.isArray(children)) {
      // Si es un arreglo de elementos React, clonar cada uno y agregar props
      return children.map((child, index) =>
        React.isValidElement(child)
          ? React.cloneElement(child as any, {
              formHandler,
              parentName,
              key: index,
            })
          : child
      )
    } else {
      // Si no es un elemento React, simplemente retornarlo
      return children
    }
  }

  return <Box>{cloneChildren(children as any)}</Box>
}

export default BoxComponent
