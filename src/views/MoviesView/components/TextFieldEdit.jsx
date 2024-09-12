import { Button } from '@mui/material'
import { useState } from 'react'
import { useField } from '../../../hooks/useField'
import EditButton from '../../../components/Buttons/EditButton'
import { useDispatch } from 'react-redux'
import { editMovie } from '../../../redux/moviesReducer'
import EditIcon from '@mui/icons-material/Edit'
import EditOffIcon from '@mui/icons-material/EditOff'
import InputText from '../../MoviesForm/components/InputText'

const TextFieldEdit = ({ value, movieId, verifyFunction, fieldKey, label }) => {
  const dispatch = useDispatch()
  const [isEditable, setIsEditable] = useState(false)
  const [loading, setLoading] = useState(false)
  const valueField = useField()

  const handleEditValue = () => {
    setLoading(true)
    const movieToUpdate = {
      [fieldKey]: valueField.value,
    }
    dispatch(editMovie(movieToUpdate, movieId)).then(() => {
      setLoading(false)
      setIsEditable(false)
    })
  }

  return (
    <>
      <h5>{label}</h5>
      {!isEditable ? (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <p>{value}</p>
          <Button onClick={() => setIsEditable(true)}>
            <EditIcon />
          </Button>
        </div>
      ) : (
        <>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <InputText
              inputProps={{ ...valueField.input, minLength: 1 }}
              validate={verifyFunction}
            />
            <Button onClick={() => setIsEditable(false)}>
              <EditOffIcon />
            </Button>
          </div>
          <EditButton loading={loading} handleClick={handleEditValue} />
        </>
      )}
    </>
  )
}
export default TextFieldEdit
