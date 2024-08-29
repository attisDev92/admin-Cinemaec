import { TextField } from '@mui/material'
import { useState } from 'react'

const InputText = ({
  name,
  label,
  required,
  fullWidth,
  validate,
  inputProps,
  rows,
  multiline,
}) => {
  const [error, setError] = useState(false)
  const [helperText, setHelperText] = useState('')

  const handleBlur = () => {
    if (validate) {
      const validationError = validate(inputProps)
      setError(!!validationError)
      setHelperText(validationError || '')
    }
  }

  return (
    <TextField
      id={name}
      label={label}
      variant='standard'
      required={required}
      fullWidth={fullWidth}
      error={error}
      helperText={helperText}
      onBlur={handleBlur}
      inputProps={inputProps}
      rows={rows}
      multiline={multiline}
    />
  )
}

export default InputText
