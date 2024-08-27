import { Button, TextField } from '@mui/material'
import { useField } from '../../hooks/useField'
import { useState } from 'react'
import styles from './MoviesForm.module.css'
import AddInputForm from './components/AddInputForm'
import SelectInputForm from './components/SelectInputForm'
import DateInput from './components/DateInput'
import dayjs from 'dayjs'
import AddMovieChannels from './components/addChannelsMovie'
import UploadFile from './components/inputUploadFile'
import { createNewMovie } from '../../redux/moviesReducer'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Loader from '../../components/Loader/Loader'

const MoviesForm = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [isLoader, setIsLoader] = useState(false)
  const title = useField()
  const director = useField()
  const [screenplayers, setScreenplayers] = useState([])
  const storyLine = useField()
  const sinopsis = useField()
  const [feactureFilm, setFeactureFilm] = useState('')
  const time = useField('number')
  const [genre, setGenre] = useState([])
  const year = useField('number')
  const country = useField()
  const [language, setLenguages] = useState([])
  const [subtitles, setSubtitles] = useState([])
  const [target, setTarget] = useState('')
  const [animation, setAnimation] = useState('')
  const [festivals, setFestivals] = useState([])
  const [awards, setAwards] = useState([])
  const [availableREA, setAvailableREA] = useState('')
  const [expirationRea, setExpirationRea] = useState(dayjs())
  const [reaChannels, setReaChannels] = useState([])
  const [movieChannels, setMovieChannels] = useState([])
  const contactName = useField()
  const contactPhone = useField('tel')
  const contactMail = useField('email')
  const trailer = useField()
  const [poster, setPoster] = useState(null)
  const [stills, setStills] = useState([])

  const handleSubmitMovie = e => {
    setIsLoader(true)
    e.preventDefault()
    const newMovie = {
      title: title.input.value,
      director: director.input.value,
      screenplayers,
      storyLine: storyLine.input.value,
      sinopsis: sinopsis.input.value,
      feactureFilm,
      time: time.input.value,
      genre,
      year: year.input.value,
      country: country.input.value,
      language,
      subtitles,
      target,
      animation: animation === 'Sí' ? true : false,
      festivals,
      awards,
      reaInformation: {
        available: availableREA === 'Sí' ? true : false,
        expiration: expirationRea ? expirationRea.toISOString() : null,
        territoryLicense: reaChannels ? reaChannels : [],
      },
      channels: movieChannels,
      contact: {
        name: contactName.input.value,
        phone: contactPhone.input.value,
        mail: contactMail.input.value,
      },
      trailer: trailer.input.value,
      poster,
      stills,
    }

    dispatch(createNewMovie(newMovie))
      .then(() => {
        setIsLoader(false)
        window.alert('Se creo una nueva película')
        navigate('/movies/list')
      })
      .cathc()
  }

  return (
    <>
      <Loader isActive={isLoader} />
      <form
        className={styles.movies__form}
        onSubmit={handleSubmitMovie}
        encType='multipart/form-data'
      >
        <fieldset>
          <TextField
            id='title'
            label='Nombre de la obra'
            variant='standard'
            required
            inputProps={{ minLength: 1 }}
            fullWidth
            {...title.input}
          />
        </fieldset>
        <fieldset>
          <TextField
            id='director'
            label='Director'
            variant='standard'
            inputProps={{ minLength: 5 }}
            required
            {...director.input}
          />
        </fieldset>
        <fieldset>
          <AddInputForm
            name='screenplayers'
            placeholder='Agregar guionista'
            nameList='Guionista/s'
            inputs={screenplayers}
            setInputs={setScreenplayers}
          />
        </fieldset>
        <fieldset>
          <TextField
            id='storyline'
            label='Storyline'
            variant='standard'
            required
            inputProps={{ maxLength: 150, minLength: 40 }}
            helperText={`${storyLine.input.value.length}/ min${40}, max${150}`}
            multiline
            rows={4}
            fullWidth
            {...storyLine.input}
          />
          <TextField
            id='sinopsis'
            label='Sinopsis'
            variant='standard'
            required
            inputProps={{ maxLength: 500, minLength: 100 }}
            helperText={`${sinopsis.input.value.length}/ min: ${150}, max: ${500}`}
            multiline
            rows={4}
            fullWidth
            {...sinopsis.input}
          />
        </fieldset>
        <fieldset>
          <SelectInputForm
            name='feactureFilm'
            placeholer='Duración'
            options={['Largometraje', 'Cortometraje']}
            value={feactureFilm}
            setInputValue={setFeactureFilm}
          />
          <TextField
            id='time'
            label='Duración (minutos)'
            variant='standard'
            required
            inputProps={{ min: 1 }}
            fullWidth
            {...time.input}
          />
          <TextField
            id='year'
            label='Año'
            variant='standard'
            required
            inputProps={{ min: 1900 }}
            fullWidth
            {...year.input}
          />
        </fieldset>
        <fieldset>
          <TextField
            id='country'
            label='País'
            variant='standard'
            required
            inputProps={{ minLength: 5 }}
            {...country.input}
          />

          <AddInputForm
            name='genre'
            placeholder='Agregar genero'
            nameList='Géneros'
            inputs={genre}
            setInputs={setGenre}
          />
        </fieldset>
        <fieldset>
          <AddInputForm
            name='language'
            placeholder='Agregar idioma'
            nameList='Idiomas'
            inputs={language}
            setInputs={setLenguages}
          />
        </fieldset>
        <fieldset>
          <AddInputForm
            name='subtitles'
            placeholder='Agregar subtítulos'
            nameList='Subtítulos'
            inputs={subtitles}
            setInputs={setSubtitles}
          />
        </fieldset>
        <fieldset>
          <AddInputForm
            name='awards'
            placeholder='Agregar premio'
            nameList='Premios'
            inputs={awards}
            setInputs={setAwards}
          />
        </fieldset>
        <fieldset>
          <AddInputForm
            name='festivals'
            placeholder='Agregar festivales'
            nameList='Festivales'
            inputs={festivals}
            setInputs={setFestivals}
          />
        </fieldset>
        <fieldset>
          <SelectInputForm
            name='target'
            placeholer='Clasificación'
            options={[
              'Todo público',
              'Infantil',
              '+12 años',
              '+15 años',
              '+18 años',
            ]}
            value={target}
            setInputValue={setTarget}
          />
          <SelectInputForm
            name='animation'
            placeholer='Animación'
            options={['Sí', 'No']}
            value={animation}
            setInputValue={setAnimation}
          />
          <SelectInputForm
            name='availableREA'
            placeholer='disponible para REA'
            options={['Sí', 'No']}
            value={availableREA}
            setInputValue={setAvailableREA}
          />
        </fieldset>
        {availableREA === 'Sí' && (
          <>
            <p>Información para obras que pertenecen al Banco de Contenidos:</p>
            <fieldset>
              <AddInputForm
                name='rea-territory'
                placeholder='Agregar canal de exhibición'
                nameList='Canales permitidos'
                inputs={reaChannels}
                setInputs={setReaChannels}
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
        <p>Datos de contacto del titular, distribuidor o agente de ventas:</p>
        <fieldset>
          <TextField
            id='contact-name'
            label='Nombre de Contacto'
            variant='standard'
            required
            fullWidth
            {...contactName.input}
          />
          <TextField
            id='contact-phone'
            label='Teléfono de contacto'
            variant='standard'
            required
            fullWidth
            {...contactPhone.input}
          />
          <TextField
            id='contact-mail'
            label='Email de contacto'
            required
            variant='standard'
            fullWidth
            {...contactMail.input}
          />
        </fieldset>
        <p>Link del trailer o teaser de la obra:</p>
        <fieldset>
          <TextField
            id='trailer'
            label='Link de Trailer'
            variant='standard'
            required
            inputProps={{ minLength: 5 }}
            {...trailer.input}
          />
        </fieldset>
        <p>Subir afiche y hasta 5 fotogramas (máximo 5mb por archivo):</p>
        <fieldset>
          <UploadFile
            label={'Subir Afiche'}
            setFile={setPoster}
            limitImages={1}
          />
        </fieldset>
        <fieldset>
          <UploadFile
            label={'Subir Fotogramas'}
            setFile={setStills}
            limitImages={5}
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
