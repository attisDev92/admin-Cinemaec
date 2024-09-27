import { Button, TableCell, TableRow } from '@mui/material'
import { useState } from 'react'
import { useField } from '../../../hooks/useField'
import SelectInputLanguages from '../../MoviesForm/components/SelectInputLanguages'

const SubtitlesField = ({ subtitles, handleEditField }) => {
  const [isEditable, setIsEditable] = useState(false)
  const subtitlesField = useField('select', [])

  const handleEdit = () => {
    handleEditField({ subtitles: subtitlesField.value })
    subtitlesField.reset()
    setIsEditable(false)
  }

  return (
    <TableRow>
      <TableCell>Idioma:</TableCell>
      {isEditable ? (
        <TableCell>
          <SelectInputLanguages
            inputProps={subtitlesField.input}
            name='subtitles'
            label='Subtítulos'
          />
        </TableCell>
      ) : (
        <TableCell>
          {subtitles.length > 0 ? subtitles.join(', ') : 'No tiene subtítulos'}
        </TableCell>
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

export default SubtitlesField
