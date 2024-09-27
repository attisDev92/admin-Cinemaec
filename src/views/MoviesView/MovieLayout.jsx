import { useParams } from 'react-router-dom'
import { Card, Divider } from '@mui/material'
import style from './MoviesView.module.css'
import dayjs from 'dayjs'
import TechnicalSheet from './components/TechnicalSheet'
import TechnicalTeam from './components/TechnicalTeam'
import Channels from './components/Channels'
import ContactMovie from './components/ContactMovie'
import InfoRea from './components/InfoRea'
import ImagesStills from './components/ImagesStills'
import PosterMovie from './components/PosterMovie'
import { useMovie } from '../../hooks/useMovie'
import Loader from '../../components/Loader/Loader'
import TextFieldEdit from './components/TextFieldEdit'
import {
  validateMinLength,
  validateTitle,
  validateTwoNames,
  validateUrl,
} from '../../utils/validationInputs'
import FieldListView from './components/FieldListView'

const MovieLayout = () => {
  const id = useParams().id
  const { movie, loading } = useMovie(id)

  if (loading) {
    return <Loader isActive={true} />
  }

  return (
    <>
      <TextFieldEdit
        fieldKey={'title'}
        value={movie.title}
        movieId={movie.id}
        verifyFunction={validateTitle}
        label='Título'
      />
      <Card className={style.movie__card}>
        <TextFieldEdit
          fieldKey={'director'}
          value={movie.director}
          movieId={movie.id}
          verifyFunction={validateTwoNames}
          label='Director'
        />
        <TextFieldEdit
          fieldKey={'productionCompany'}
          value={movie.productionCompany}
          movieId={movie.id}
          verifyFunction={validateMinLength}
          label='Casa productora'
        />
        <Divider />
        <TextFieldEdit
          fieldKey={'storyLine'}
          value={movie.storyLine}
          movieId={movie.id}
          label='Storyline'
        />
        <TextFieldEdit
          fieldKey={'plot'}
          value={movie.plot}
          movieId={movie.id}
          label='Sinopsis'
        />
        <Divider />
        <TextFieldEdit
          fieldKey={'trailer'}
          value={movie.trailer}
          movieId={movie.id}
          verifyFunction={validateUrl}
          label='Trailer'
        />
        <Divider />
        <PosterMovie poster={movie.poster} movieId={movie.id} />
        <Divider />
        <TechnicalSheet movie={movie} />
        <ImagesStills stills={movie.stills} movieId={movie.id} />
        <Divider />
        <TechnicalTeam team={movie.technicalTeam} movieId={movie.id} />
        <Divider />
        <FieldListView
          array={movie.cast}
          movieId={movie.id}
          fieldKey='cast'
          label='Reparto registrado:'
          nameList='Reparto'
          placeHolder='Agregar reparto'
        />
        <Divider />
        <FieldListView
          array={movie.festivals}
          movieId={movie.id}
          fieldKey='festivals'
          label='Festivales registrados'
          nameList='Festivales'
          placeHolder='Agregar festival'
        />
        <Divider />
        <FieldListView
          array={movie.awards}
          movieId={movie.id}
          fieldKey='awards'
          label='Premios y reconocimientos recibidos'
          nameList='Premios y reconocimientos'
          placeHolder='Agregar premio o reconocimiento'
        />
        <Divider />
        <FieldListView
          array={movie.funding}
          movieId={movie.id}
          fieldKey='funding'
          label='Financiamiento obtenido'
          nameList='Financiamiento'
          placeHolder='Agregar financiamiento'
        />
        <Divider />
        <Channels channels={movie.channels} movieId={movie.id} />
        <ContactMovie contact={movie.contact} movieId={movie.id} />
        <InfoRea reaInformation={movie.reaInformation} movieId={movie.id} />
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
