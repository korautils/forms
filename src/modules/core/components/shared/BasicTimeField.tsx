import * as React from 'react'
import dayjs from 'dayjs'

import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { TimeField } from '@mui/x-date-pickers/TimeField'
import { InputAdornment } from '@mui/material'
import KeyboardIcon from '@mui/icons-material/Keyboard'

interface Props {
  label?: string
  value?: any
  onChange?: any
}

export default function BasicTimeField({ label, value, onChange }: Props) {
  return (
    <DemoContainer components={['TimeField']}>
      <TimeField
        label={label}
        value={value ? value : null}
        onChange={(val) => {
          const dayjsValue = dayjs(val)
          onChange({ target: { value: dayjsValue } })
        }}
        size="small"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end" title="Entrada por teclado">
              <KeyboardIcon color="action" />
            </InputAdornment>
          ),
        }}
      />
    </DemoContainer>
  )
}
