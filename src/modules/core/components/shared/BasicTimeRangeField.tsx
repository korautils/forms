import * as React from 'react'
import dayjs, { Dayjs } from 'dayjs'
import { InputAdornment } from '@mui/material'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { SingleInputTimeRangeField } from '@mui/x-date-pickers-pro/SingleInputTimeRangeField'
import { DateRange } from '@mui/x-date-pickers-pro/models'
import KeyboardIcon from '@mui/icons-material/Keyboard'

interface Props {
  label?: string
  value?: DateRange<Dayjs>
  onChange: any
}

export default function BasicTimeRangeField({ label, value, onChange }: Props) {
  return (
    <DemoContainer components={['SingleInputTimeRangeField']}>
      <SingleInputTimeRangeField
        label={label}
        value={value}
        onChange={(val: any) => {
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
