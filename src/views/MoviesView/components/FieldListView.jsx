import EditButton from '../../../components/Buttons/EditButton'
import { useDispatch } from 'react-redux'
import { editMovie } from '../../../redux/moviesReducer'
import { Button } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import EditOffIcon from '@mui/icons-material/EditOff'
import { useState } from 'react'
import AddInputForm from '../../MoviesForm/components/AddInputForm'

const FieldListView = ({
  array,
  fieldKey,
  movieId,
  label,
  nameList,
  placeHolder,
}) => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const [isEditable, setIsEditable] = useState(false)
  const [arrayEdited, setArrayEdited] = useState(array)

  const handleEdit = () => {
    setLoading(true)
    const movieToUpdate = {
      [fieldKey]: arrayEdited,
    }
    dispatch(editMovie(movieToUpdate, movieId)).then(() => {
      setLoading(false)
      setIsEditable(false)
    })
  }

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <h5>{label}</h5>
        {isEditable ? (
          <Button onClick={() => setIsEditable(false)}>
            <EditOffIcon />
          </Button>
        ) : (
          <Button onClick={() => setIsEditable(true)}>
            <EditIcon />
          </Button>
        )}
      </div>
      {isEditable ? (
        <>
          <AddInputForm
            label={placeHolder}
            nameList={nameList}
            array={arrayEdited}
            setArray={setArrayEdited}
          />
          <EditButton loading={loading} handleClick={handleEdit} />
        </>
      ) : (
        <>
          {array && array.length > 0 ? (
            <ul>
              {array.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>No hay registros en esta lista. </p>
          )}
        </>
      )}
    </>
  )
}

export default FieldListView
