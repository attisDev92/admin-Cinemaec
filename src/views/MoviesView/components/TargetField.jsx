import { Button, TableCell, TableRow } from '@mui/material'
import { useState } from 'react'
import { useField } from '../../../hooks/useField'
import SelectInputForm from '../../MoviesForm/components/SelectInputForm'

const TargetField = ({ target, handleEditField }) => {
  const [isEditable, setIsEditable] = useState(false)
  const targetField = useField()

  const handleEdit = () => {
    handleEditField({ target: targetField.value })
    targetField.reset()
    setIsEditable(false)
  }

  return (
    <TableRow>
      <TableCell>Genero:</TableCell>
      {isEditable ? (
        <TableCell>
          <SelectInputForm
            name='target'
            label='Clasificación'
            required={true}
            options={[
              'Todo público',
              'Infantil',
              '-12 bajo supervisión',
              '+12 años',
              '+15 años',
              '+18 años',
            ]}
            inputProps={targetField.input}
          />
        </TableCell>
      ) : (
        <TableCell> {target} </TableCell>
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

export default TargetField
