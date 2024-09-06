import { useState } from 'react'
import DeleteButton from '../../../components/Buttons/DeleteButton'
import { ImageListItem } from '@mui/material'

const ImagesCardDeleteButton = ({ item, deleteImageFunc }) => {
  const [loading, setLoading] = useState(false)

  const handleDelete = fileId => {
    setLoading(true)
    deleteImageFunc(fileId)
  }

  return (
    <ImageListItem>
      <img src={item.url} />
      <DeleteButton
        loading={loading}
        label='Borrar'
        handleClick={() => handleDelete(item._id)}
      />
    </ImageListItem>
  )
}

export default ImagesCardDeleteButton
