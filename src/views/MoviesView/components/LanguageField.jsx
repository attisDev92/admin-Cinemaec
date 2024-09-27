import { Button, TableCell, TableRow } from '@mui/material'
import { useState } from 'react'
import { useField } from '../../../hooks/useField'
import SelectInputLanguages from '../../MoviesForm/components/SelectInputLanguages'

const LanguageField = ({ language, handleEditField }) => {
  const [isEditable, setIsEditable] = useState(false)
  const languageField = useField('select', [])

  const handleEdit = () => {
    handleEditField({ language: languageField.value })
    languageField.reset()
    setIsEditable(false)
  }

  return (
    <TableRow>
      <TableCell>Idioma:</TableCell>
      {isEditable ? (
        <TableCell>
          <SelectInputLanguages
            inputProps={languageField.input}
            name='language'
            label='Idioma'
          />
        </TableCell>
      ) : (
        <TableCell>{language.join(', ')}</TableCell>
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

export default LanguageField
