import { TextField } from '@mui/material'

const TextInput = ({ id, label, required, minLength, valdidationRegex }) => {
  return (
    <TextField
      id={id}
      label={label}
      variant='standard'
      required={required && true}
      inputProps={{ minLength: minLength }}
    />
  )
}

export default TextInput
