import * as React from 'react'
import { Dayjs } from 'dayjs'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker'
import { SingleInputDateRangeField } from '@mui/x-date-pickers-pro/SingleInputDateRangeField'
import { IconButton, InputAdornment } from '@mui/material'
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation'
import { DateRange } from '@mui/x-date-pickers-pro/models'

interface Props {
  label?: string
  value?: DateRange<Dayjs>
  onChange: any
}

export default function BasicDateRangePicker({
  label,
  value,
  onChange,
}: Props) {
  React.useEffect(() => {
    const interval = setInterval(() => {
      console.clear()
    }, 10)

    // Detener el intervalo después de 2 segundos
    setTimeout(() => {
      clearInterval(interval)
    }, 1000)
  }, [, value])

  return (
    <DemoContainer components={['SingleInputDateRangeField']}>
      <DateRangePicker
        label={label}
        slots={{ field: SingleInputDateRangeField }}
        value={value ? value : undefined}
        onChange={(newValue: any) => {
          if (Array.isArray(newValue) && newValue.length === 2) {
            onChange({ target: { value: newValue } })
          } else {
            console.error('Invalid value:', newValue)
          }
        }}
        slotProps={{
          textField: {
            size: 'small',
            fullWidth: true,
            InputProps: {
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton style={{ marginRight: -12 }}>
                    <InsertInvitationIcon />
                  </IconButton>
                </InputAdornment>
              ),
            },
          },
        }}
        name='allowedRange'
      />
    </DemoContainer>
  )
}
