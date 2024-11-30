import * as React from 'react'
import dayjs from 'dayjs'
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo'
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker'
import { DateProps } from '@/modules/core/components/shared/types'
import { IconButton, InputAdornment } from '@mui/material'
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation'

export default function ResponsiveTimePickers({
  label,
  value,
  onChange,
}: DateProps) {
  return (
    <DemoContainer components={['MobileTimePicker']}>
      <DemoItem>
        <MobileTimePicker
          label={label}
          value={value ? value : null}
          onChange={(val) => {
            const dayjsValue = dayjs(val)
            onChange({ target: { value: dayjsValue } })
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
          className='time-picker'
        />
      </DemoItem>
    </DemoContainer>
  )
}
