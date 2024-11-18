import React, { forwardRef } from 'react'
import Checkbox from '@mui/material/Checkbox'
import { CheckboxWrapper } from './styles'
import { FormHelperText, Typography } from '@mui/material'
import classNames from 'classnames'

interface Props {
  className?: string
  label?: string | React.ReactElement | React.ReactElement[]
  helperText?: string
  name?: string
  error?: boolean
  onChange?: (event: any) => void
}

const CheckboxLabel: React.FC<Props> = forwardRef<any, Props>(
  ({ className, label, helperText, error, ...props }, ref) => {
    return (
      <CheckboxWrapper className={classNames(className, { error })}>
        <div className="fieldContainer">
          <Checkbox {...props} inputRef={ref} />
          <Typography>{label}</Typography>
        </div>
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
      </CheckboxWrapper>
    )
  }
)

CheckboxLabel.displayName = 'CheckboxLabel'

export default CheckboxLabel
