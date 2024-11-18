import { SelectWrapper } from './styles'
import MuiSelect, { SelectChangeEvent } from '@mui/material/Select'
import { uuidv4 } from '@/modules/core/utils'

import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
} from '@mui/material'
import { ElementProps } from '@/modules/builder/interfaces/elements/types'
import React from 'react'

interface SelectOption {
  label?: any
  value?: string
}

interface Props extends ElementProps {
  value?: string
  showNone?: boolean
  defaultNoneText?: string
  options?: Array<SelectOption>
}

const Select: React.FC<Props> = React.forwardRef(function Field(
  {
    id = uuidv4(),
    name = uuidv4(),
    label,
    size = 'small',
    defaultNoneText = 'None',
    value,
    helperText,
    onChange,
    options,
    showNone = true,
    error,
  },
  ref
) {
  const onChangeFn = (event: SelectChangeEvent) => {
    const newValue = event.target.value
    onChange(event, newValue)
  }

  return (
    <SelectWrapper>
      <FormControl size={size} fullWidth error={error}>
        {label && <InputLabel id={`label_${id}`}>{label}</InputLabel>}

        <MuiSelect
          ref={ref}
          name={name}
          labelId={`label_${id}`}
          id={`select_${id}`}
          value={value}
          label={label}
          onChange={onChangeFn}
        >
          {showNone && (
            <MenuItem value="Kora_None">
              <em>{defaultNoneText}</em>
            </MenuItem>
          )}

          {options?.map((option, index) => (
            <MenuItem value={option.value} key={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </MuiSelect>
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
      </FormControl>
    </SelectWrapper>
  )
})

export default Select
