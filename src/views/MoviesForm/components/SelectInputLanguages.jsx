import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { useFetchCountries } from '../../../hooks/useCountries'

const SelectInputLanguages = ({ inputProps, name, label }) => {
  const { languagesList } = useFetchCountries()

  const options = languagesList
    ? languagesList.map(language => (
        <MenuItem key={language} value={language}>
          {language}
        </MenuItem>
      ))
    : []

  return (
    <FormControl fullWidth>
      <InputLabel id={`${name}-label`}>
        {label} (puede seleccionar varios)
      </InputLabel>
      <Select id={name} labelId={`${name}-label`} multiple {...inputProps}>
        {options}
      </Select>
    </FormControl>
  )
}

export default SelectInputLanguages
