import { useParams } from 'react-router-dom'
import InputPoster from './components/InputPoster'
import { Divider } from '@mui/material'
import InputStills from './components/InputStills'
import { useMovie } from '../../hooks/useMovie'
import Loader from '../../components/Loader/Loader'

const MoviesFilesForm = () => {
  const id = useParams().id
  const { movie, loading } = useMovie(id)

  if (loading) {
    return <Loader isActive={true} />
  }

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
