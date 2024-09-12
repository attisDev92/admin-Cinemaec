import { Table, TableCell, TableRow, TableBody } from '@mui/material'
import ActionCellMovieEdit from './ActionCellMovieEdit'
import { validateMinNumber } from '../../../utils/validationInputs'

const TechnicalSheet = ({ movie }) => {
  return (
    <>
      <h6>Ficha técnica:</h6>
      <Table aria-label='simple table'>
        <TableBody>
          <ActionCellMovieEdit
            field='Año de estreno:'
            value={movie.realeseYear}
            fieldKey='realeseYear'
            typeInput='number'
            movieId={movie.id}
            resetValue={1900}
            min={1900}
            validationFuntion={validateMinNumber}
          />
          <ActionCellMovieEdit
            field='Duración:'
            value={movie.runTime}
            fieldKey='runTime'
            typeInput='number'
            movieId={movie.id}
            resetValue={1}
            min={1}
            validationFuntion={validateMinNumber}
          />
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
