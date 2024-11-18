import { ElementProps } from '@/modules/builder/interfaces/elements/types'
import MuiTextField from '@mui/material/TextField'
import InputMask from 'react-input-mask'

interface Props extends ElementProps {
  pattern?: string
}

const TextFieldWithMask: React.FC<Props> = ({ pattern, ...props }) => {
  const renderTextField = ({
    value,
    onChange,
  }: {
    value: string
    onChange: any
  }) => {
    return <MuiTextField {...props as any} value={value} onChange={onChange} />
  }

  return pattern ? (
    <InputMask mask={'999999'} maskChar="">
      {() =>
        renderTextField({
          value: String(props.value),
          onChange: props.onChange,
        })
      }
    </InputMask>
  ) : (
    renderTextField({ value: String(props.value), onChange: props.onChange })
  )
}

export default TextFieldWithMask
