import { useParams } from 'react-router-dom'
import { Card, Divider } from '@mui/material'
import style from './MoviesView.module.css'
import dayjs from 'dayjs'
import CastTable from './components/CastTable'
import TechnicalSheet from './components/TechnicalSheet'
import TechnicalTeam from './components/TechnicalTeam'
import FestivalsList from './components/FestivalsList'
import Channels from './components/Channels'
import ContactMovie from './components/ContactMovie'
import InfoRea from './components/InfoRea'
import ImagesStills from './components/ImagesStills'
import PosterMovie from './components/PosterMovie'
import { useMovie } from '../../hooks/useMovie'
import Loader from '../../components/Loader/Loader'

const MovieLayout = () => {
  const id = useParams().id
  const { movie, loading } = useMovie(id)

  if (loading) {
    return <Loader isActive={true} />
  }

  console.log(movie)
  return (
    <>
      <h3>{movie.title}</h3>
      <Card className={style.movie__card}>
        <h6>Director:</h6>
        <p> {movie.director}</p>
        <h6>Casa productora:</h6>
        <p>{movie.productionCompany}</p>
        <Divider />
        <h6>Storyline:</h6>
        <p>{movie.storyLine}</p>
        <h6>Sinopsis:</h6>
        <p>{movie.plot}</p>
        <Divider />
        <PosterMovie poster={movie.poster} movieId={movie.id} />
        <Divider />
        <TechnicalSheet movie={movie} />
        <ImagesStills stills={movie.stills} movieId={movie.id} />
        <Divider />
        <TechnicalTeam team={movie.technicalTeam} />
        <CastTable cast={movie.cast} />
        <FestivalsList
          festivals={movie.festivals}
          awards={movie.awards}
          funding={movie.funding}
        />
        <Divider />
        <Channels channels={movie.channels} />
        <ContactMovie contacts={movie.contacts} />
        <InfoRea reaInformation={movie.reaInformation} />
        <Divider />
        <p>
          Fecha de creación del registro:{' '}
          {dayjs(movie.created).format('DD/MM/YYYY')}
        </p>
      </Card>
    </>
  )
}

export default MovieLayout
