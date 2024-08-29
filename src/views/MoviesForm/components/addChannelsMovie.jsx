import { TextField, Button } from '@mui/material'
import { useField } from '../../../hooks/useField'
import { useDispatch } from 'react-redux'
import { setNotification } from '../../../redux/notificationReducer'
import InputText from './InputText'
import { validateMinLength, validateUrl } from '../../../utils/validationInputs'

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
      <InputText
        name='plataform'
        label='Plataforma'
        fullWidth={true}
        inputProps={{ ...plataform.input, minLength: 5, mincharts: 5 }}
        validate={validateMinLength}
      />

      <InputText
        name='link'
        label='Link'
        fullWidth={true}
        inputProps={url.input}
        validate={validateUrl}
      />
      <Button onClick={addValue} variant='outlined'>
        Agregar
      </Button>
    </>
  )
}

export default AddMovieChannels
