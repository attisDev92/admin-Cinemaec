import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { useFetchCountries } from '../../../hooks/useCountries'

const SelectInputCountry = ({ country }) => {
  const { countries } = useFetchCountries()

  const options = countries
    ? countries.map(countryName => (
        <MenuItem key={countryName} value={countryName}>
          {countryName}
        </MenuItem>
      ))
    : []

  return (
    <FormControl fullWidth>
      <InputLabel id='country-label'>País</InputLabel>
      <Select
        id='country'
        {...country.input}
        labelId='country-label'
        multiple
        required
      >
        {options}
      </Select>
    </FormControl>
  )
}

export default SelectInputCountry
