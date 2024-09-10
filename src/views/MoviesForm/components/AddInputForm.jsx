import { Button } from '@mui/material'
import { useField } from '../../../hooks/useField'
import { useDispatch } from 'react-redux'
import { setNotification } from '../../../redux/notificationReducer'
import InputText from './InputText'

const AddInputForm = ({
  name,
  label,
  nameList,
  array,
  setArray,
  fullWidth,
  validate,
}) => {
  const fieldValue = useField()
  const dispatch = useDispatch()

  const addValueToArray = () => {
    if (!fieldValue.value) {
      return dispatch(
        setNotification({
          message: `Esta intentando agregar un campo vacio`,
          style: 'error',
        }),
      )
    }

    if (validate) {
      const validateResult = validate(fieldValue.input)
      if (validateResult.length > 0) {
        return dispatch(
          setNotification({
            message: validateResult,
            style: 'error',
          }),
        )
      }
    }

    const valueDuplicate = array.find(value => value === fieldValue.value)

    if (valueDuplicate) {
      return dispatch(
        setNotification({
          message: 'El valor ya se encuentra agregado a la lista',
          style: 'error',
        }),
      )
    }
    setArray([...array, fieldValue.value])
    fieldValue.reset()
  }

  const removeValue = indexToRemove => {
    setArray(array.filter((_, i) => i !== indexToRemove))
  }

  return (
    <>
      <InputText
        name={name}
        label={label}
        fullWidth={fullWidth}
        inputProps={fieldValue.input}
        validate={validate}
      />
      <Button onClick={addValueToArray} variant='outlined'>
        Agregar
      </Button>
      <div>
        <p>{nameList}:</p>
        <ul>
          {array.map((value, i) => (
            <li
              key={i + 1}
              onClick={() => removeValue(i)}
              style={{ cursor: 'pointer' }}
            >
              {value}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default AddInputForm
