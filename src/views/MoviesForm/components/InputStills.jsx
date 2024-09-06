import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addFile, deleteFile } from '../../../redux/moviesReducer'
import { styled } from '@mui/material/styles'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import UploadButton from '../../../components/Buttons/UploadButton'
import { setNotification } from '../../../redux/notificationReducer'
import styles from '../MoviesForm.module.css'
import { Button, ImageList } from '@mui/material'
import ImagesCardDeleteButton from './ImagesCardDeleteButton'
import { useNavigate } from 'react-router-dom'

const InputStills = ({ stills, movieId }) => {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [filename, setFilename] = useState('')
  const [file, setFile] = useState()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  })

  const handleChangeFile = ({ target }) => {
    setSuccess(false)
    const selectedFile = target.files[0]
    const maxSizeInBytes = 5 * 1024 * 1024

    if (selectedFile.size > maxSizeInBytes) {
      dispatch(
        setNotification({
          message: 'El archivo pesa más de 5mb',
          style: 'error',
        }),
      )
      return
    }
    setFile(selectedFile)
    setFilename(selectedFile.name)
  }

  const handleUploadFile = async e => {
    e.preventDefault()
    setLoading(true)

    if (!file) {
      dispatch(
        setNotification({
          message: 'No se ha seleccionado ningún archivo',
          error: 'error',
        }),
      )
    }

    const formData = new FormData()
    formData.append('stills', file)
    formData.append('movieId', movieId)

    try {
      await dispatch(addFile(formData))
      setSuccess(true)
    } finally {
      setLoading(false)
    }
  }

  const handleDeleteImages = fileId => {
    dispatch(deleteFile(fileId, movieId)).then(() => {
      navigate(`/movies/${movieId}/files`)
    })
  }

  return (
    <div className={styles.inputImages}>
      <form onSubmit={handleUploadFile} encType='multipart/form-data'>
        <h4>Fotogramas</h4>
        <p>
          {stills.length >= 5
            ? 'Número máximo de fotogramas, debe eliminar un archivo antes de subir uno nuevo'
            : 'Seleccionar archivo:'}
        </p>
        <p>{file ? filename : 'No se ha seleccionado ningún archivo'}</p>
        <Button
          type='file'
          component='label'
          variant='contained'
          role={undefined}
          tabIndex={-1}
          startIcon={<CloudUploadIcon />}
          disabled={stills.length >= 5 ? true : false}
        >
          Seleccionar fotograma
          <VisuallyHiddenInput
            type='file'
            accept='.jpg, .png, .webp'
            onChange={handleChangeFile}
          />
        </Button>
        <UploadButton loading={loading} success={success} type='submit' />
        <p>Guardar imagen</p>
      </form>
      <div className={styles.stills__container}>
        {stills.length > 0 ? (
          <ImageList cols={2}>
            {stills.map((item, i) => (
              <ImagesCardDeleteButton
                item={item}
                movieId={movieId}
                key={i}
                deleteImageFunc={handleDeleteImages}
              />
            ))}
          </ImageList>
        ) : (
          <p>No cuenta con fotogramas</p>
        )}
      </div>
    </div>
  )
}

export default InputStills
