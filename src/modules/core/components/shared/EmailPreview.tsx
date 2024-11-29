import { TextField } from '@mui/material'
import { NormalProps } from './types'

interface Props extends NormalProps {}

const EmailPreview: React.FC<Props> = ({
  label,
  value,
  placeholder,
  onChange,
  ...props
}) => {
  return (
    <TextField
      type="email"
      label={label}
      size="small"
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      fullWidth
      {...props}
    />
  )
}

export default EmailPreview
