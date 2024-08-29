import { MenuItem, FormControl, InputLabel, Select } from '@mui/material'

const SelectMultipleChoice = ({ items, name, label, inputProps, required }) => {
  const options = items
    ? items.map(item => (
        <MenuItem key={item} value={item}>
          {item}
        </MenuItem>
      ))
    : []

  return (
    <FormControl fullWidth>
      <InputLabel id={`${name}-label`}>
        {label} (puede seleccionar varios)
      </InputLabel>
      <Select
        id={name}
        labelId={`${name}-label`}
        multiple
        required={required}
        {...inputProps}
      >
        {options}
      </Select>
    </FormControl>
  )
}

export default SelectMultipleChoice
