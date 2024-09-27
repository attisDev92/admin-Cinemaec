import { Button, TableCell, TableRow } from '@mui/material'
import { useState } from 'react'
import { useField } from '../../../hooks/useField'
import SelectMultipleChoice from '../../MoviesForm/components/SelectMultipleChoice'

const SubgenreField = ({ subgenre, handleEditField }) => {
  const [isEditable, setIsEditable] = useState(false)
  const subgenreField = useField('select', [])

  const handleEdit = () => {
    handleEditField({ sub_genre: subgenreField.value })
    subgenreField.reset()
    setIsEditable(false)
  }

  return (
    <TableRow>
      <TableCell>Sub-generos:</TableCell>
      {isEditable ? (
        <TableCell>
          <SelectMultipleChoice
            name='sub-genre'
            label='Sub-genero'
            required={true}
            inputProps={subgenreField.input}
            items={[
              'Acción',
              'Animación',
              'Aventuras',
              'Bélico',
              'Biográfico',
              'Ciencia Ficción',
              'Científico',
              'Comedia',
              'Deportivo',
              'Drama',
              'Educativo',
              'Etnográfico',
              'Experimental',
              'Fantástico',
              'Histórico',
              'Investigación Periodística',
              'Medioambiente',
              'Musical',
              'Policial',
              'Político Social',
              'Romántico',
              'Suspenso',
              'Terror',
              'Viajes',
              'Familiar',
            ]}
          />
        </TableCell>
      ) : (
        <TableCell>{subgenre.join(', ')}</TableCell>
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

export default SubgenreField
