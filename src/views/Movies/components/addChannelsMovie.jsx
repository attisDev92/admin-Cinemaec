import { TextField, Button } from '@mui/material'
import { useField } from '../../../hooks/useField'
import { useDispatch } from 'react-redux'
import { setNotification } from '../../../redux/notificationReducer'

const AddMovieChannels = ({ plataforms, setPlataforms }) => {
  const plataform = useField()
  const url = useField('url')

  const dispatch = useDispatch()

  const addValue = () => {
    if (!plataform.input.value || !url.input.value) {
      return dispatch(
        setNotification({
          message: 'El nombre de la plataforma o el link está vacio',
          style: 'error',
        }),
      )
    }
    const newPlataform = {
      plataform: plataform.input.value,
      url: url.input.value,
    }
    setPlataforms(plataforms.concat(newPlataform))
    plataform.reset()
    url.reset()
  }

  return (
    <>
      <TextField
        id='plataform'
        label='Plataforma'
        variant='standard'
        inputProps={{ minLength: 5 }}
        {...plataform.input}
      />
      <TextField
        id='link'
        label='Link'
        variant='standard'
        inputProps={{ minLength: 5 }}
        type='url'
        {...url.input}
      />
      <Button onClick={addValue} variant='outlined'>
        Agregar
      </Button>
      <ul>
        <p>Plataformas:</p>
        {plataforms.map((plataform, i) => (
          <li key={i + 1}>
            {plataform.plataform}: {plataform.url}{' '}
          </li>
        ))}
      </ul>
    </>
  )
}

export default AddMovieChannels
