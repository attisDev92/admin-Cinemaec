import { useState } from 'react'

export const useField = (type = 'text', initialValue = '') => {
  const [value, setValue] = useState(initialValue)

  const onChange = e => {
    setValue(e.target.value)
  }

  const reset = () => {
    setValue(initialValue)
  }
  return {
    reset,
    input: {
      type,
      value,
      onChange,
    },
  }
}
