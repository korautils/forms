import * as React from 'react'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import { ItemOptionProps } from '../../../builder/interfaces/elements/components'

interface Props {
  label?: string
  value?: string
  onChange?: any
  options?: Array<ItemOptionProps>
}

export default function RowRadioButtonsGroup({
  label,
  value,
  options = [
    { value: 'male', label: 'Hombre' },
    { value: 'female', label: 'Mujer' },
  ],
  onChange,
}: Props) {
  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">{label}</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={value}
        onChange={onChange}
      >
        {options.map((item, index) => (
          <FormControlLabel
            value={item.value}
            control={<Radio />}
            label={item.label as any}
            key={index}
          />
        ))}
      </RadioGroup>
    </FormControl>
  )
}
