import { Button, TableCell, TableRow } from '@mui/material'
import { useState } from 'react'
import { useField } from '../../../hooks/useField'
import SelectInputForm from '../../MoviesForm/components/SelectInputForm'

const GenreField = ({ genre, handleEditField }) => {
  const [isEditable, setIsEditable] = useState(false)
  const genreField = useField()

  const handleEdit = () => {
    handleEditField({ genre: genreField.value })
    genreField.reset()
    setIsEditable(false)
  }

  return (
    <TableRow>
      <TableCell>Genero:</TableCell>
      {isEditable ? (
        <TableCell>
          <SelectInputForm
            name='genre'
            label='Genero'
            required={true}
            options={['Ficción', 'Documental']}
            inputProps={genreField.input}
          />
        </TableCell>
      ) : (
        <TableCell> {genre} </TableCell>
      )}
      <TableCell>
        {isEditable && <Button onClick={handleEdit}>Guardar</Button>}
        <Button onClick={() => setIsEditable(!isEditable)}>
          {isEditable ? 'Cancelar' : 'Editar'}
        </Button>
      </TableCell>
    </TableRow>
  )
}

export default GenreField
