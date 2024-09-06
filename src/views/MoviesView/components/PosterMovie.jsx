import { Button, ImageList, ImageListItem } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const PosterMovie = ({ movieId, poster }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/movies/${movieId}/files`)
  }

  return (
    <>
      <h5>Afiche</h5>
      {poster && poster.url && poster.url.trim() !== '' ? (
        <ImageList>
          <ImageListItem>
            <img src={poster.url} />
          </ImageListItem>
        </ImageList>
      ) : (
        <p>No tiene afiche.</p>
      )}
      <Button variant='contained' onClick={handleClick}>
        Editar imagen
      </Button>
    </>
  )
}

export default PosterMovie
