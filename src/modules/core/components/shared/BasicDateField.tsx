import * as React from 'react'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { DateField } from '@mui/x-date-pickers/DateField'
import dayjs from 'dayjs'
import { InputAdornment } from '@mui/material'
import KeyboardIcon from '@mui/icons-material/Keyboard'

interface Props {
  label?: string
  value?: any
  onChange?: any
}

const BasicDateField: React.FC<Props> = ({ label, value, onChange }) => {
  return (
    <DemoContainer components={['DateField']}>
      <DateField
        label={label}
        value={value ? value : null}
        onChange={(val) => {
          const dayjsValue = dayjs(val)
          onChange({ target: { value: dayjsValue } })
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end" title="Entrada por teclado">
              <KeyboardIcon color="action" />
            </InputAdornment>
          ),
        }}
        size="small"
        fullWidth
      />
    </DemoContainer>
  )
}

export default BasicDateField
