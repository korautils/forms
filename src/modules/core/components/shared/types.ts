import { DateRange } from '@mui/x-date-pickers-pro/models'
import { Dayjs } from 'dayjs'

export interface BaseProps {
  name?: string
  label?: string
  placeholder?: string
  onChange: any
}

export interface DateRangeProps extends BaseProps {
  value?: DateRange<Dayjs>
}

export interface DateProps extends BaseProps {
  value?: Dayjs
}

export interface NormalProps extends BaseProps {
  value?: string | number | object
}
