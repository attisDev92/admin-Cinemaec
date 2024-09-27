import { Button, TableCell, TableRow } from '@mui/material'
import { useState } from 'react'
import { useField } from '../../../hooks/useField'
import SelectInputCountry from '../../MoviesForm/components/SelectInputCountry'

const CountryField = ({ country, handleEditField }) => {
  const [isEditable, setIsEditable] = useState(false)
  const countryField = useField('select', [])

  const handleEdit = () => {
    handleEditField({ country: countryField.value })
    countryField.reset()
    setIsEditable(false)
  }

  return (
    <TableRow>
      <TableCell>País:</TableCell>
      {isEditable ? (
        <TableCell>
          <SelectInputCountry country={countryField} />
        </TableCell>
      ) : (
        <TableCell>{country.join(', ')}</TableCell>
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

export default CountryField
