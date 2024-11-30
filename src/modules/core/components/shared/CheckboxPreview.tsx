import { Checkbox, FormControlLabel } from '@mui/material'
import { NormalProps } from '@/modules/core/components/shared/types'

interface Props extends NormalProps {}

const CheckboxPreview: React.FC<Props> = ({ label, onChange, ...props }) => {
  return (
    <FormControlLabel
      control={<Checkbox defaultChecked onChange={onChange} {...props} />}
      label={label}
    />
  )
}

export default CheckboxPreview
