import * as React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete'
import { CountryType, countries, getOrderedCountries } from '@/modules/core/components/shared/CountrySelect/countriesList'
import { countryToFlag } from '@/modules/core/utils'

interface Props {
  label?: string
  value?: string
  helperText?: string
  error?: boolean
  onChange: (event: any, value: CountryType) => void
}

const CountrySelect: React.FC<Props> = ({
  label,
  value,
  error,
  helperText,
  onChange,
}) => {
  const customFilterOptions = createFilterOptions({
    matchFrom: 'any',
    stringify: (option: any) =>
      `+${option?.phone} ${option?.label} ${option?.code}`,
  })

  const getSelectedOption = (value?: string) => {
    const selected = countries.find((item) => item.phone === value)
    return selected
  }

  return (
    <Autocomplete
      id="country-select-demo"
      value={getSelectedOption(value)}
      options={getOrderedCountries()}
      getOptionLabel={(option) =>
        `${countryToFlag(option.code)} +${option.phone}`
      }
      filterOptions={customFilterOptions}
      onChange={onChange}
      autoHighlight
      disablePortal
      fullWidth
      renderOption={(props, option) => (
        <Box
          component="li"
          sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
          {...props}
        >
          <img
            loading="lazy"
            width="20"
            srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
            alt=""
          />
          +{option.phone} ({option.label})
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          error={error}
          label={label}
          helperText={helperText}
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
        />
      )}
    />
  )
}

export default CountrySelect
