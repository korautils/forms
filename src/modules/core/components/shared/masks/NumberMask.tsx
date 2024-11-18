import React from 'react'
import { NumericFormat } from 'react-number-format'

const NumberMask = React.forwardRef((props, ref) => {
  return <NumericFormat {...props} getInputRef={ref} />
})

NumberMask.displayName = 'NumberMask'

export default NumberMask
