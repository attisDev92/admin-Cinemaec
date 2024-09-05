import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addFile } from '../../../redux/moviesReducer'
import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import UploadButton from '../../../components/Buttons/UploadButton'
import { setNotification } from '../../../redux/notificationReducer'

const InputPoster = ({ poster, movieId }) => {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [filename, setFilename] = useState('')
  const [file, setFile] = useState()
  const dispatch = useDispatch()

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

  const handleUploadFile = async () => {
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
    formData.append('poster', file)
    formData.append('movieId', movieId)

    try {
      await dispatch(addFile(formData))
      setSuccess(true)
    } catch (error) {
      console.log(error)
      setSuccess(false)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <form onSubmit={handleUploadFile} encType='multipart/form-data'>
        <p>Seleccionar archivo:</p>
        <Button
          type='file'
          component='label'
          variant='contained'
          role={undefined}
          tabIndex={-1}
          startIcon={<CloudUploadIcon />}
        >
          Cargar Afiche
          <VisuallyHiddenInput
            type='file'
            accept='.jpg, .png, .webp'
            onChange={handleChangeFile}
          />
        </Button>
        <p>{file ? filename : 'No se ha seleccionado ningún archivo'}</p>
        <p>Guarda y sube la imagen</p>
        <UploadButton loading={loading} success={success} type='submit' />
      </form>
    </div>
  )
}

export default InputPoster
