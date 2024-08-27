import { ImageList, ImageListItem } from '@mui/material'

const ImagesStills = ({ stills }) => {
  return (
    <>
      <h5>Fotogramas</h5>
      {stills && stills.length > 0 ? (
        <ImageList cols={2}>
          {stills.map((item, i) => (
            <ImageListItem key={i}>
              <img src={item} />
            </ImageListItem>
          ))}
        </ImageList>
      ) : (
        <p>No cuenta con fotogramas</p>
      )}
    </>
  )
}

export default ImagesStills
