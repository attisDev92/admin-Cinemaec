import { TextField, Button } from '@mui/material'
import { useField } from '../../../hooks/useField'
import { useDispatch } from 'react-redux'
import { setNotification } from '../../../redux/notificationReducer'

const AddInputForm = ({ name, placeholder, nameList, inputs, setInputs }) => {
  const inputValue = useField()
  const dispatch = useDispatch()

  const addValue = () => {
    if (!inputValue.input.value) {
      return dispatch(
        setNotification({
          message: `El campo ${placeholder} está vacio`,
          style: 'error',
        }),
      )
    }
    setInputs(inputs.concat(inputValue.input.value))
    inputValue.reset()
  }

  const removeValue = indexToRemove => {
    setInputs(inputs.filter((_, i) => i !== indexToRemove))
  }

  return (
    <>
      <TextField
        id={name}
        label={placeholder}
        variant='standard'
        {...inputValue.input}
      />
      <Button onClick={addValue} variant='outlined'>
        Agregar
      </Button>

      <p>{nameList}:</p>
      <ul>
        {inputs.map((input, i) => (
          <li
            key={i + 1}
            onClick={() => removeValue(i)}
            style={{ cursor: 'pointer' }}
          >
            {input}
          </li>
        ))}
      </ul>
    </>
  )
}

export default AddInputForm
