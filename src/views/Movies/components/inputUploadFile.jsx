import { Button, Card } from '@mui/material'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import { styled } from '@mui/material/styles'
import { useState } from 'react'
import { setNotification } from '../../../redux/notificationReducer'
import { useDispatch } from 'react-redux'

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
})

const UploadFile = ({ label, setFile, limitImages }) => {
  const dispatch = useDispatch()
  const [selectedFiles, setSelectedFiles] = useState(
    limitImages > 1 ? [] : null,
  )
  const [hasFilesSelected, setHasFilesSelected] = useState(false)

  const sizeFileComprovation = file => {
    if (file.size > 5 * 1024 * 1024) {
      dispatch(
        setNotification({
          message: 'El archivo pesa más de 5mb',
          style: 'error',
        }),
      )
      return
    }
  }

  const handleUploadFile = e => {
    const files = e.target.files

    if (limitImages === 1) {
      const newFile = files[0]
      sizeFileComprovation(newFile)
      const fileURL = URL.createObjectURL(newFile)
      setFile(newFile)
      setSelectedFiles(fileURL)
      setHasFilesSelected(true)
    } else if (limitImages > 1) {
      if (files.length > limitImages) {
        dispatch(
          setNotification({
            message: 'Has superado el límite máximo de imágenes de este campo',
            style: 'error',
          }),
        )
        return
      }
      const filesUrl = []
      const newFiles = Array.from(files)
      newFiles.forEach(file => {
        sizeFileComprovation(file)
        filesUrl.push(URL.createObjectURL(file))
        setFile(prevFiles => [...prevFiles, file])
      })
      setSelectedFiles(filesUrl)
      setHasFilesSelected(true)
    }
  }

  const handleClearFile = () => {
    setSelectedFiles(null)
    setFile(limitImages > 1 ? [] : null)
  }

  return (
    <>
      <Button
        type='file'
        component='label'
        role={undefined}
        variant='contained'
        tabIndex={-1}
        startIcon={<CloudUploadIcon />}
      >
        {label}
        <VisuallyHiddenInput
          type='file'
          accept='image/jpg'
          multiple={limitImages > 1}
          onChange={handleUploadFile}
        />
      </Button>
      {hasFilesSelected && (
        <div style={{ display: 'flex', flexFlow: 'row wrap' }}>
          {Array.isArray(selectedFiles) ? ( // Check if selectedFiles is an array
            selectedFiles.map((fileUrl, index) => (
              <Card
                key={index}
                sx={{ maxWidth: 200, marginRight: 10, marginBottom: 10 }}
              >
                <img src={fileUrl} alt={`Preview ${index + 1}`} width='200' />
                <Button
                  onClick={() => {
                    const newFiles = [...selectedFiles]
                    newFiles.splice(index, 1)
                    setSelectedFiles(newFiles)
                    setFile(prevFiles =>
                      prevFiles.filter((f, i) => i !== index),
                    )
                  }}
                >
                  Borrar
                </Button>
              </Card>
            ))
          ) : (
            <Card sx={{ maxWidth: 200 }}>
              <img src={selectedFiles} alt='Preview' width='200' />
              <Button onClick={handleClearFile}>Borrar</Button>
            </Card>
          )}
        </div>
      )}
    </>
  )
}

export default UploadFile
