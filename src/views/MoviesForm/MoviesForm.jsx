import { useField } from '../../hooks/useField'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createNewMovie } from '../../redux/moviesReducer'
import AddInputForm from './components/AddInputForm'
import SelectInputForm from './components/SelectInputForm'
import DateInput from './components/DateInput'
import Loader from '../../components/Loader/Loader'
import InputText from './components/InputText'
import TechnicalTeamInput from './components/TechnicalTeamInput'
import TechnicalTeam from '../MoviesView/components/TechnicalTeam'
import SelectInputCountry from './components/SelectInputCountry'
import SelectInputLanguages from './components/SelectInputLanguages'
import SelectMultipleChoice from './components/SelectMultipleChoice'
import Channels from '../MoviesView/components/Channels'
import dayjs from 'dayjs'
import {
  validateTwoNames,
  validateMinLength,
  validateTitle,
  validateUrl,
  validateMinNumber,
  validatePhoneNumber,
  validateMail,
} from '../../utils/validationInputs'
import { Button, TextField } from '@mui/material'
import styles from './MoviesForm.module.css'
import AddMovieChannels from './components/AddMovieChannels'

const MoviesForm = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [isLoader, setIsLoader] = useState(false)

  const title = useField()
  const director = useField()
  const productionCompany = useField()
  const storyLine = useField()
  const plot = useField()
  const trailer = useField()
  const [technicalTeam, setTechnicalTeam] = useState([])
  const [cast, setCast] = useState([])
  const runTime = useField('number', 0)
  const realeseYear = useField('number', 0)
  const country = useField('select', '')
  const language = useField('select', [])
  const subtitles = useField('select', [])
  const genres = useField('select', '')
  const subGenres = useField('select', [])
  const target = useField('select', '')
  const [festivals, setFestivals] = useState([])
  const [awards, setAwards] = useState([])
  const [funding, setFunding] = useState([])
  const availableRea = useField('select', '')
  const [expirationRea, setExpirationRea] = useState(dayjs())
  const reaChannels = useField('select', [])
  const [movieChannels, setMovieChannels] = useState([])
  const contactName = useField()
  const contactRole = useField()
  const contactPhone = useField('tel')
  const contactMail = useField('email')

  const handleSubmitMovie = async e => {
    setIsLoader(true)
    e.preventDefault()

    const newMovie = {
      title: title.value,
      director: director.value,
      productionCompany: productionCompany.value,
      storyLine: storyLine.value,
      plot: plot.value,
      trailer: trailer.value,
      technicalTeam,
      cast,
      runTime: runTime.value,
      realeseYear: realeseYear.value,
      country: country.value,
      language: language.value,
      subtitles: subtitles.value,
      genre: genres.value,
      sub_genre: subGenres.value,
      target: target.value,
      festivals,
      awards,
      funding,
      reaInformation:
        availableRea === 'Sí'
          ? {
              available: true,
              expiration: expirationRea.toDate(),
              territoryLicense: reaChannels.value,
            }
          : {
              available: false,
            },
      channels: movieChannels,
      contact: {
        name: contactName.value,
        role: contactRole.value,
        phone: contactPhone.value,
        mail: contactMail.value,
      },
    }

    try {
      const createdMovie = await dispatch(createNewMovie(newMovie))
      if (createdMovie && createdMovie.id) {
        navigate(`/movies/${createdMovie.id}/files`)
      }
    } finally {
      setIsLoader(false)
    }
  }

  return (
    <>
      <Loader isActive={isLoader} />
      <form className={styles.movies__form} onSubmit={handleSubmitMovie}>
        <fieldset>
          <InputText
            name='title'
            label='Nombre de la película'
            required={true}
            fullWidth={true}
            inputProps={{ ...title.input, minLength: 1 }}
            validate={validateTitle}
          />
        </fieldset>
        <fieldset>
          <InputText
            name='director'
            label='Director (nombre y apellido)'
            required={true}
            fullWidth={true}
            inputProps={{ ...director.input, mincharts: 5 }}
            validate={validateTwoNames}
          />
          <InputText
            name='productionCompany'
            label='Nombre de la casa productora'
            required={false}
            fullWidth={true}
            inputProps={{
              ...productionCompany.input,
              mincharts: 5,
            }}
            validate={validateMinLength}
          />
        </fieldset>
        <fieldset>
          <TextField
            id='storyline'
            label='Storyline'
            variant='standard'
            required
            inputProps={{ maxLength: 150, minLength: 50 }}
            helperText={`${storyLine.value.length} / min: ${50}, max: ${150}`}
            multiline
            rows={4}
            fullWidth
            {...storyLine.input}
          />
        </fieldset>
        <fieldset>
          <TextField
            id='plot'
            label='Sinopsis'
            variant='standard'
            required
            inputProps={{ maxLength: 500, minLength: 100 }}
            helperText={`${plot.value.length} / min: ${150}, max: ${500}`}
            multiline
            rows={4}
            fullWidth
            {...plot.input}
          />
        </fieldset>
        <fieldset>
          <InputText
            name='trailer'
            label='Link de Trailer o teaser de la obra'
            required={false}
            fullWidth={true}
            inputProps={{
              ...trailer.input,
            }}
            validate={validateUrl}
          />
        </fieldset>
        <p>Agrega personas del equipo técnico</p>
        <fieldset>
          <TechnicalTeamInput
            technicalTeam={technicalTeam}
            setTechnicalTeam={setTechnicalTeam}
          />
        </fieldset>
        <TechnicalTeam team={technicalTeam} />
        <p>Agregar los nombres del reparto:</p>
        <fieldset>
          <AddInputForm
            name='cast'
            label='Agregar nombre y apellido'
            nameList='Reparto'
            array={cast}
            setArray={setCast}
            validate={validateTwoNames}
          />
        </fieldset>
        <p>Ficha técnica</p>
        <fieldset>
          <InputText
            name='runTime'
            label='Duración (minutos)'
            required={true}
            inputProps={{ ...runTime.input, min: 1 }}
            fullWidth={true}
            validate={validateMinNumber}
          />
          <InputText
            name='realeseYear'
            label='Año de estreno'
            required={true}
            inputProps={{ ...realeseYear.input, min: 1900 }}
            fullWidth={true}
            validate={validateMinNumber}
          />
          <SelectInputCountry country={country} />
        </fieldset>
        <fieldset>
          <SelectInputLanguages
            inputProps={language.input}
            name='language'
            label='Idioma'
          />
          <SelectInputLanguages
            inputProps={subtitles.input}
            name='subtitles'
            label='Subtítulos'
          />
        </fieldset>
        <fieldset>
          <SelectInputForm
            name='genre'
            label='Genero'
            required={true}
            options={['Ficción', 'Documental']}
            inputProps={genres.input}
          />
          <SelectMultipleChoice
            name='sub-genre'
            label='Sub-genero'
            required={true}
            inputProps={subGenres.input}
            items={[
              'Acción',
              'Animación',
              'Aventuras',
              'Bélico',
              'Biográfico',
              'Ciencia Ficción',
              'Científico',
              'Comedia',
              'Deportivo',
              'Drama',
              'Educativo',
              'Etnográfico',
              'Experimental',
              'Fantástico',
              'Histórico',
              'Investigación Periodística',
              'Medioambiente',
              'Musical',
              'Policial',
              'Político Social',
              'Romántico',
              'Suspenso',
              'Terror',
              'Viajes',
              'Familiar',
            ]}
          />
          <SelectInputForm
            name='target'
            label='Clasificación'
            required={true}
            options={[
              'Todo público',
              'Infantil',
              '-12 bajo supervisión',
              '+12 años',
              '+15 años',
              '+18 años',
            ]}
            inputProps={target.input}
          />
        </fieldset>
        <fieldset>
          <AddInputForm
            name='awards'
            label='Agregar premio'
            nameList='Premios'
            array={awards}
            setArray={setAwards}
            fullWidth={false}
          />
        </fieldset>
        <fieldset>
          <AddInputForm
            name='festivals'
            label='Agregar festivales'
            nameList='Festivales'
            array={festivals}
            setArray={setFestivals}
            fullWidth={false}
          />
        </fieldset>
        <fieldset>
          <AddInputForm
            name='funding'
            label='Agregar fondos recibidos'
            nameList='Fondos recibidos'
            array={funding}
            setArray={setFunding}
            fullWidth={false}
          />
        </fieldset>
        <p>Información para obras que pertenecen al Banco de Contenidos:</p>
        <fieldset>
          <SelectInputForm
            name='availableREA'
            label='disponible para REA'
            options={['Sí', 'No']}
            required={true}
            inputProps={availableRea.input}
          />
        </fieldset>
        {availableRea.value === 'Sí' && (
          <>
            <fieldset>
              <SelectMultipleChoice
                name='rea-territory'
                label='Canales de exhibición'
                items={['Nacional', 'Internacional', 'Retina Latina']}
                inputProps={reaChannels.input}
                required={true}
              />
            </fieldset>
            <fieldset>
              <DateInput
                placeholder='Expiración REA'
                setValue={setExpirationRea}
                value={expirationRea}
                disablePast={true}
              />
            </fieldset>
          </>
        )}
        <p>Plataformas donde se encuentra disponible al público la obra:</p>
        <fieldset>
          <AddMovieChannels
            plataforms={movieChannels}
            setPlataforms={setMovieChannels}
          />
        </fieldset>
        <Channels channels={movieChannels} />
        <p>Datos de contacto del titular, distribuidor o agente de ventas:</p>
        <fieldset>
          <InputText
            name='contact-name'
            label='Nombre de Contacto'
            fullWidth={true}
            inputProps={contactName.input}
            validate={validateTwoNames}
          />
          <InputText
            name='contact-role'
            label='Cargo del Contacto'
            fullWidth={true}
            inputProps={{ ...contactRole.input, mincharts: 1 }}
            validate={validateMinLength}
          />
        </fieldset>
        <fieldset>
          <InputText
            id='contact-phone'
            label='Teléfono de contacto'
            fullWidth={true}
            inputProps={contactPhone.input}
            validate={validatePhoneNumber}
          />
          <InputText
            id='contact-mail'
            label='Email de contacto'
            fullWidth={true}
            inputProps={contactMail.input}
            validate={validateMail}
          />
        </fieldset>

        <Button type='submit' variant='outlined'>
          Crear nueva película
        </Button>
      </form>
    </>
  )
}

export default MoviesForm
