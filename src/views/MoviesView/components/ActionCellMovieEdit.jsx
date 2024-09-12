import { Button, TableRow, TableCell } from '@mui/material'
import { useDispatch } from 'react-redux'
import { editMovie } from '../../../redux/moviesReducer'
import { useState } from 'react'
import { useField } from '../../../hooks/useField'
import InputText from '../../MoviesForm/components/InputText'

const ActionCellMovieEdit = ({
  field,
  value,
  fieldKey,
  movieId,
  typeInput = '',
  resetValue = '',
  validationFuntion,
  min,
  minlenght,
}) => {
  const dispatch = useDispatch()
  const fieldInput = useField(typeInput, value)
  const [isEditable, setIsEditable] = useState(false)

  const handleEditField = () => {
    const movieToUpdate = {
      [fieldKey]: fieldInput.value,
    }
    dispatch(editMovie(movieToUpdate, movieId)).then(() => {
      setIsEditable(false)
    })
  }

  const handleDeleteField = () => {
    const movieToUpdate = {
      [fieldKey]: resetValue,
    }
    dispatch(editMovie(movieToUpdate, movieId))
  }

  return (
    <TableRow>
      <TableCell>{field}</TableCell>
      <TableCell>
        {isEditable ? (
          <InputText
            inputProps={{ ...fieldInput.input, min, minlenght }}
            validate={validationFuntion}
          />
        ) : (
          value
        )}
      </TableCell>
      <TableCell>
        {isEditable ? (
          <>
            <Button onClick={handleEditField}>Guardar</Button>
            <Button
              onClick={() => {
                setIsEditable(false)
              }}
            >
              Cancelar
            </Button>
          </>
        ) : (
          <Button onClick={() => setIsEditable(true)}>Editar</Button>
        )}
        <Button onClick={handleDeleteField}>Borrar</Button>
      </TableCell>
    </TableRow>
  )
}

export default ActionCellMovieEdit
