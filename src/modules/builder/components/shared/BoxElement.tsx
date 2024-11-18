import React from 'react'
import { Box } from '@mui/material'
// import { ChildrenElement } from '@/modules/core/interfaces/general'
import { FormHandlerProps } from '../../interfaces/elements/types'

interface Props {
  children?: any
  formHandler?: FormHandlerProps
  withHandler?: boolean
}

const BoxElement: React.FC<Props> = ({
  children,
  formHandler,
  withHandler = true,
}) => {
  return (
    <Box>
      {typeof children !== 'function' &&
        React.isValidElement(children) &&
        !withHandler &&
        children}

      {typeof children !== 'function' &&
        React.isValidElement(children) &&
        withHandler &&
        React.cloneElement(children as any, {
          formHandler,
        })}

      {typeof children === 'function' && children(formHandler)}
    </Box>
  )
}

export default BoxElement
