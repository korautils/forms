import * as React from 'react'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import dayjs, { Dayjs } from 'dayjs'

interface Props {
  label?: string
  value?: Dayjs
  onChange: any
}

export default function BasicDatePicker({ label, value, onChange }: Props) {
  return (
    <DemoContainer components={['DatePicker']}>
      <DatePicker
        label={label}
        value={value ? value : null}
        onChange={(val) => {
          const dayjsValue = dayjs(val)
          onChange({ target: { value: dayjsValue } })
        }}
        format='DD/MM/YYYY'
        slotProps={{
          textField: { size: 'small', fullWidth: true },
          field: { clearable: true },
        }}
      />
    </DemoContainer>
  )
}
