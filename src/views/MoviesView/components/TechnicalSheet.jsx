import { Table, TableCell, TableRow, TableBody } from '@mui/material'

const TechnicalSheet = ({ movie }) => {
  return (
    <>
      <h6>Ficha técnica:</h6>
      <Table aria-label='simple table'>
        <TableBody>
          <TableRow>
            <TableCell>Año de estreno:</TableCell>
            <TableCell>{movie.realeseYear}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Duración:</TableCell>
            <TableCell>
              {movie.runTime} minutos /{' '}
              {movie.runTime > 60 ? 'Largometraje' : 'Cortometraje'}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Genero:</TableCell>
            <TableCell> {movie.genre} </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Sub - genero:</TableCell>
            <TableCell>{movie.sub_genre.join(', ')}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>País:</TableCell>
            <TableCell>{movie.country}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Idioma:</TableCell>
            <TableCell>{movie.language.join(', ')}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Subtítulos:</TableCell>
            <TableCell>
              {movie.subtitles.length > 0
                ? movie.subtitles.join(', ')
                : 'No tiene subtítulos'}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Clasificación:</TableCell>
            <TableCell>{movie.target}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  )
}

export default TechnicalSheet
