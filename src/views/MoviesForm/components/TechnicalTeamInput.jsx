import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material'
import InputText from './InputText'
import { useField } from '../../../hooks/useField'
import { validateTwoNames } from '../../../utils/validationInputs'
import { useDispatch } from 'react-redux'
import { setNotification } from '../../../redux/notificationReducer'

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

const TechnicalTeamInput = ({ technicalTeam, setTechnicalTeam }) => {
  const name = useField()
  const role = useField()
  const dispatch = useDispatch()

  const handleAddTechnicalPerson = () => {
    if (!role.value) {
      return dispatch(
        setNotification({
          message: 'Debe seleccionar un cargo antes de agregar una persona.',
          style: 'error',
        }),
      )
    }

    const duplicatePerson = technicalTeam.find(
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

    setTechnicalTeam([...technicalTeam, newTechnialPerson])
    name.reset()
    role.reset()
  }

  return (
    <>
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
      <Button onClick={handleAddTechnicalPerson} variant='outlined'>
        Agregar
      </Button>
    </>
  )
}

export default TechnicalTeamInput
