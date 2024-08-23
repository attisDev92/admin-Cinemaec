import { MenuItem, Select, FormControl, InputLabel } from '@mui/material'

const SelectInputForm = ({
  name,
  placeholer,
  options,
  setInputValue,
  value,
}) => {
  const handleSelectValue = event => {
    setInputValue(event.target.value)
  }

  return (
    <FormControl fullWidth>
      <InputLabel id={`${name}_label`}>{placeholer}</InputLabel>
      <Select
        labelId={`${name}_`}
        id={name}
        value={value}
        label={placeholer}
        onChange={handleSelectValue}
        required
      >
        {options.map((option, i) => (
          <MenuItem key={i + 1} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default SelectInputForm
