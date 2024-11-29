import React from 'react'
import { uuidv4 } from '@/modules/core/utils'
import { AutocompleteFieldWrapper } from './styles'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'

import {
  ElementProps,
  FormHandlerProps,
  OptionSelect,
} from '@/modules/builder/interfaces/elements/types'
import useSelectApiRequest from '@/modules/builder/hooks/useSelectApiRequest'

interface Props extends Omit<ElementProps, 'value'> {
  name: string
  value?: OptionSelect | OptionSelect[] | null
  formHandler?: FormHandlerProps
  options: Array<OptionSelect>
}

const AutocompleteField: React.FC<Props> = React.forwardRef(function Field(
  {
    name = uuidv4(),
    label,
    value = null,
    options = [],
    onChange,
    formHandler,
    error,
    helperText,
    renderProps,
    required,
    api,
    multiple,
    ...props
  },
  ref
) {
  // const [inputValue, setInputValue] = React.useState('')
  const { optionsList } = useSelectApiRequest({
    renderProps,
    api,
    options,
  })

  // const selectedValue = multiple ? optionsList.filter(item => item?.value ===)
  //   optionsList.find((item) => item?.value === value?.value) || null

  const selectedValue = multiple
    ? optionsList.filter((item) =>
        (value as OptionSelect[])?.some(
          (selectedItem: any) => selectedItem.value === item.value
        )
      )
    : optionsList.find(
        (item) => item?.value === (value as OptionSelect)?.value
      ) || null

  return (
    <AutocompleteFieldWrapper>
      <Autocomplete
        ref={ref}
        id={name || uuidv4()}
        value={selectedValue}
        multiple={multiple}
        onChange={(event: any, newValue: any) => {
          typeof onChange === 'function' &&
            onChange({ target: { name, value: newValue } })
        }}
        // inputValue={inputValue}
        // onInputChange={(event, newInputValue) => {
        //   setInputValue(newInputValue)
        // }}
        options={optionsList}
        getOptionLabel={(option) => option?.label || ''}
        isOptionEqualToValue={(option, value) => option?.value === value?.value}
        renderInput={(params) => (
          <TextField
            {...params}
            label={label}
            helperText={helperText}
            error={error}
          />
        )}
        fullWidth
        {...props}
      />
    </AutocompleteFieldWrapper>
  )
})

export default React.memo(AutocompleteField)
