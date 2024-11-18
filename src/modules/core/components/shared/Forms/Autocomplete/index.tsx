import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'

export interface Props {
  id?: string
  name?: string
  options?: any
  label?: string
  keyId?: string
  keyText?: string
  value?: any
  onChange?: any
  required?: boolean
  open?: boolean
  error?: boolean
  getOptionLabel?: any
  onOpen?: any
  onClose?: any
  getOptionSelected?: any
  className?: string
  filterOptions?: any
  onInputChange?: any
  helperText?: string
  multiple?: boolean
  limitTags?: number
  placeholder?: string
}

const AutocompleteCustom: React.FC<Props> = ({
  id,
  name = '',
  options = [],
  label = '',
  multiple,
  keyText = 'label',
  value = '',
  onChange,
  error = false,
  open,
  getOptionLabel = null,
  className,
  helperText,
  limitTags,
  placeholder,
}) => {
  return (
    <Autocomplete
      id={id || name}
      open={open}
      multiple={multiple}
      noOptionsText="Sin opciones"
      limitTags={limitTags}
      disablePortal
      className={className}
      onChange={(event: any, obj) => {
        console.log(event)
        onChange({ target: { name: name, value: obj } })
      }}
      getOptionLabel={
        getOptionLabel
          ? getOptionLabel
          : (option: any) => {
              return Object.keys(option).length ? option[keyText] : ''
            }
      }
      options={options}
      value={value}
      fullWidth={true}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          size="small"
          error={error}
          helperText={helperText}
          placeholder={placeholder}
        />
      )}
    />
  )
}

export default AutocompleteCustom
