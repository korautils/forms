import * as React from 'react'
import dayjs from 'dayjs'
import { TimePicker } from '@mui/x-date-pickers/TimePicker'
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo'
import { DateProps } from './types'

export default function ResponsiveTimePickers({
  label,
  value,
  onChange,
}: DateProps) {
  return (
    <DemoContainer components={['TimePicker']}>
      <DemoItem>
        <TimePicker
          label={label}
          value={value ? value : null}
          onChange={(val) => {
            const dayjsValue = dayjs(val)
            onChange({ target: { value: dayjsValue } })
          }}
          slotProps={{ textField: { size: 'small', fullWidth: true } }}
          className='time-picker'
        />
      </DemoItem>
    </DemoContainer>
  )
}
