import { Table, TableCell, TableRow, TableBody } from '@mui/material'

const TechnicalSheet = ({ movie }) => {
  return (
    <>
      <h6>Ficha técnica:</h6>
      <Table aria-label='simple table'>
        <TableBody>
          <TableRow>
            <TableCell>Año:</TableCell>
            <TableCell>{movie.year}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Duración:</TableCell>
            <TableCell>
              {movie.time} minutos /{' '}
              {movie.time > 60 ? 'Largometraje' : 'Cortometraje'}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Formato:</TableCell>
            <TableCell>Ficción o Documental {movie.animation} </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Genero:</TableCell>
            <TableCell>{movie.genre.join(', ')}</TableCell>
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
              {movie.subtitles
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
