import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material'
import { useField } from '../../../hooks/useField'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setNotification } from '../../../redux/notificationReducer'
import InputText from '../../MoviesForm/components/InputText'
import { validateTwoNames } from '../../../utils/validationInputs'
import { editMovie } from '../../../redux/moviesReducer'

const technicalRole = [
  'Guionista',
  'Productor/a',
  'Producción ejecutiva',
  'Asistente de Dirección',
  'Director/a de fotografía',
  'Diseño de producción',
  'Director/a de arte',
  'Diseño de vestuario',
  'Sonido',
  'Diseño de Sonido',
  'Música original',
  'Musicalización',
  'Dirección de casting',
  'Montaje',
  'Postproducción',
]

const TechnicalTeam = ({ team, movieId }) => {
  const dispatch = useDispatch()
  const [isAddActive, setIsAddActive] = useState(false)
  const name = useField()
  const role = useField()

  const handleAddField = () => {
    if (!role.value) {
      return dispatch(
        setNotification({
          message: 'Debe seleccionar un cargo antes de agregar una persona.',
          style: 'error',
        }),
      )
    }

    const duplicatePerson = team.find(
      person => person.name === name.value && person.role === role.value,
    )

    if (duplicatePerson) {
      return dispatch(
        setNotification({
          message: 'La persona ya está registrada con ese cargo',
          style: 'error',
        }),
      )
    }

    const movieToEdit = {
      technicalTeam: [...team, { name: name.value, role: role.value }],
    }

    dispatch(editMovie(movieToEdit, movieId)).then(() => {
      setIsAddActive(false)
      name.reset()
      role.reset()
    })
  }

  const handleDeleteField = id => {
    const teamToUpdate = team.filter(person => person._id !== id)

    const movieToUpdate = {
      technicalTeam: teamToUpdate,
    }
    dispatch(editMovie(movieToUpdate, movieId))
  }

  return (
    <>
      <h5>Equipo técnico</h5>
      <div>
        {isAddActive && (
          <>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <InputText
                name='name'
                label='Nombre y Apellido'
                fullWidth={true}
                inputProps={{ ...name.input, mincharts: 5 }}
                validate={validateTwoNames}
              />
              <FormControl fullWidth>
                <InputLabel id='role'>Cargo</InputLabel>
                <Select {...role.input}>
                  {technicalRole.map((role, i) => (
                    <MenuItem key={i} value={role}>
                      {role}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <Button onClick={handleAddField}>Agregar</Button>
          </>
        )}
        <Button onClick={() => setIsAddActive(!isAddActive)}>
          {isAddActive ? 'Cancelar' : 'Agregar'}
        </Button>
      </div>
      <Table aria-label='simple table'>
        {team && team.length > 0 ? (
          <>
            <TableHead>
              <TableRow>
                <TableCell>Nombre</TableCell>
                <TableCell>Cargo</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {team.map(member => (
                <TableRow key={member._id}>
                  <TableCell>{member.name}</TableCell>
                  <TableCell>{member.role}</TableCell>
                  <TableCell>
                    <Button onClick={() => handleDeleteField(member._id)}>
                      Borrar
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </>
        ) : (
          <TableBody>
            <TableRow>
              <TableCell>
                Aún no se registran personas en el equipo técnico
              </TableCell>
            </TableRow>
          </TableBody>
        )}
      </Table>
    </>
  )
}

export default TechnicalTeam
