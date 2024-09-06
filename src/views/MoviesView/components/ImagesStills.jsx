import { Button, ImageList, ImageListItem } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const ImagesStills = ({ movieId, stills }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/movies/${movieId}/files`)
  }

  return (
    <>
      <h5>Fotogramas</h5>
      {stills && stills.length > 0 ? (
        <ImageList cols={2}>
          {stills.map((item, i) => (
            <ImageListItem key={i}>
              <img src={item.url} />
            </ImageListItem>
          ))}
        </ImageList>
      ) : (
        <p>No cuenta con fotogramas</p>
      )}
      <Button variant='contained' onClick={handleClick}>
        Editar imágenes
      </Button>
    </>
  )
}

export default ImagesStills
