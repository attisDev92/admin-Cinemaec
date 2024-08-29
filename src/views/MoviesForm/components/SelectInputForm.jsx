import { MenuItem, Select, FormControl, InputLabel } from '@mui/material'

const SelectInputForm = ({ name, label, options, required, inputProps }) => {
  return (
    <FormControl fullWidth>
      <InputLabel id={`${name}_label`}>{label}</InputLabel>
      <Select
        labelId={`${name}_label`}
        id={name}
        label={label}
        required={required}
        {...inputProps}
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
