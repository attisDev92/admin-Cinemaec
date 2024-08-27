import { ImageList, ImageListItem } from '@mui/material'

const PosterMovie = ({ poster }) => {
  return (
    <>
      <h5>Afiche</h5>
      {poster ? (
        <ImageList>
          <ImageListItem>
            <img src={poster} />
          </ImageListItem>
        </ImageList>
      ) : (
        <p>No tiene afiche.</p>
      )}
    </>
  )
}

export default PosterMovie
