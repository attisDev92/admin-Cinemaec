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
import ActionCellTechnicalTeam from './ActionCellTechnicalTeam'

const technicalRole = [
  'Guionista',
  'Productor/a',
  'Director/a de fotografía',
  'Director/a de arte',
  'Sonido',
  'Montaje',
  'Postproducción',
  'Musicalización',
]

const TechnicalTeam = ({ team, movieId }) => {
  const dispatch = useDispatch()
  const [isAddActive, setIsAddActive] = useState(false)
  const name = useField()
  const role = useField()
  const [currentTeam, setCurrentTeam] = useState([...team])
  const handleAddField = () => {
    if (!role.value) {
      return dispatch(
        setNotification({
          message: 'Debe seleccionar un cargo antes de agregar una persona.',
          style: 'error',
        }),
      )
    }

    const duplicatePerson = currentTeam.find(
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

    const newTechnialPerson = {
      name: name.value,
      role: role.value,
    }

    setCurrentTeam([...currentTeam, newTechnialPerson])

    const movieToEdit = {
      technicalTeam: currentTeam,
    }

    console.log(movieToEdit)

    dispatch(editMovie(movieToEdit, movieId)).then(() => {
      setIsAddActive(false)
      name.reset()
      role.reset()
    })
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
                <ActionCellTechnicalTeam
                  key={member._id}
                  member={member}
                  technicalTeam={team}
                  movieId={movieId}
                />
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
