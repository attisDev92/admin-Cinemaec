import {
  Button,
  TableCell,
  TableRow,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material'
import { useState } from 'react'
import { useField } from '../../../hooks/useField'
import { useDispatch } from 'react-redux'
import { setNotification } from '../../../redux/notificationReducer'
import { editMovie } from '../../../redux/moviesReducer'
import { validateTwoNames } from '../../../utils/validationInputs'
import InputText from '../../MoviesForm/components/InputText'

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

const ActionCellTechnicalTeam = ({ member, technicalTeam, movieId }) => {
  const dispatch = useDispatch()
  const [currentTeam, setCurrentTeam] = useState([...technicalTeam])

  const handleDeleteField = () => {
    const teamToUpdate = currentTeam.filter(person => person._id !== member._id)
    setCurrentTeam(teamToUpdate)
    console.log(currentTeam)
    const movieToUpdate = {
      technicalTeam: teamToUpdate,
    }
    dispatch(editMovie(movieToUpdate, movieId))
  }

  return (
    <TableRow>
      <TableCell>{member.name}</TableCell>
      <TableCell>{member.role}</TableCell>
      <TableCell>
        <Button onClick={handleDeleteField}>Borrar</Button>
      </TableCell>
    </TableRow>
  )
}

export default ActionCellTechnicalTeam
