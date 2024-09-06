import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setNotification } from '../../redux/notificationReducer'
import { useMovie } from '../../hooks/useMovie'
import Loader from '../../components/Loader/Loader'
import InputPoster from './components/InputPoster'
import { Divider } from '@mui/material'
import InputStills from './components/InputStills'

const MoviesFilesForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const id = useParams().id
  const { loading, movie, error } = useMovie(id)

  if (loading) return <Loader isActive={true} />

  if (error) {
    dispatch(
      setNotification({
        message: 'Error al cargar la película, vuelva a intentarlo',
        style: 'error',
      }),
    )
    setTimeout(() => {
      navigate('/')
    }, 5000)
  }

  console.log(movie)
  return (
    <>
      <h3>{movie.title}</h3>
      <h4>Carga de archivos</h4>
      <InputPoster poster={movie.poster} movieId={movie.id} />
      <Divider />
      <InputStills stills={movie.stills} movieId={movie.id} />
    </>
  )
}

export default MoviesFilesForm
