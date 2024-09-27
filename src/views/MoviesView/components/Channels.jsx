import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
} from '@mui/material'
import { useDispatch } from 'react-redux'
import { editMovie } from '../../../redux/moviesReducer'
import { useState } from 'react'
import InputText from '../../MoviesForm/components/InputText'
import { useField } from '../../../hooks/useField'
import { validateUrl, validateMinLength } from '../../../utils/validationInputs'

const Channels = ({ channels, movieId }) => {
  const dispatch = useDispatch()
  const [addChannelActive, setAddChannelActive] = useState(false)
  const plataform = useField()
  const url = useField('url')

  const handleAddField = () => {
    const channelsToUpdate = [
      ...channels,
      { plataform: plataform.value, url: url.value },
    ]
    const movieToUpdate = {
      channels: channelsToUpdate,
    }
    dispatch(editMovie(movieToUpdate, movieId)).then(() => {
      setAddChannelActive(false)
      url.reset()
      plataform.reset()
    })
  }

  const handleDeleteField = id => {
    const channelsToUpdate = channels.filter(channel => channel._id !== id)
    const movieToUpdate = {
      channels: channelsToUpdate,
    }
    dispatch(editMovie(movieToUpdate, movieId))
  }

  return (
    <>
      <h6>Canales</h6>
      <div>
        {addChannelActive && (
          <>
            <div style={{ display: 'flex', gap: '1rem' }}>
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
            </div>
            <Button onClick={handleAddField}>Guardar</Button>
          </>
        )}
        <Button onClick={() => setAddChannelActive(!addChannelActive)}>
          {addChannelActive ? 'Cancelar' : 'Agregar'}
        </Button>
      </div>
      <Table aria-label='simple table'>
        {channels && channels.length > 0 ? (
          <>
            <TableHead>
              <TableRow>
                <TableCell>Plataforma</TableCell>
                <TableCell>Enlace</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {channels.map(channel => (
                <TableRow key={channel._id}>
                  <TableCell>{channel.plataform}</TableCell>
                  <TableCell>{channel.url}</TableCell>
                  <TableCell>
                    <Button onClick={() => handleDeleteField(channel._id)}>
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
              <TableCell>No se registra ninguna plataforma.</TableCell>
            </TableRow>
          </TableBody>
        )}
      </Table>
    </>
  )
}

export default Channels
