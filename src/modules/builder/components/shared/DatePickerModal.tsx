import * as React from 'react'
import dayjs from 'dayjs'
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo'
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker'
import { IconButton, InputAdornment } from '@mui/material'
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation'
import { Dayjs } from 'dayjs'

interface Props {
  label?: string
  value?: Dayjs
  onChange: any
}

export default function DatePickerModal({ label, value, onChange }: Props) {
  return (
    <DemoContainer components={['MobileDatePicker']}>
      <DemoItem>
        <MobileDatePicker
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
                  <InputAdornment position="end">
                    <IconButton style={{ marginRight: -12 }}>
                      <InsertInvitationIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              },
            },
            field: {
              clearable: true,
            },
          }}
        />
      </DemoItem>
    </DemoContainer>
  )
}
