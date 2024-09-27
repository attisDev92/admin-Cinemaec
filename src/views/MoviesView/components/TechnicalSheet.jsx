import { Table, TableCell, TableRow, TableBody } from '@mui/material'
import ActionCellMovieEdit from './ActionCellMovieEdit'
import { validateMinNumber } from '../../../utils/validationInputs'
import GenreField from './GenreField'
import SubgenreField from './SubgenreField'
import { useDispatch } from 'react-redux'
import { editMovie } from '../../../redux/moviesReducer'
import CountryField from './CountryField'
import LanguageField from './LanguageField'
import SubtitlesField from './SubtitlesField'
import TargetField from './TargetField'

const TechnicalSheet = ({ movie }) => {
  const dispatch = useDispatch()

  const handleEditField = movieToUpdate => {
    dispatch(editMovie(movieToUpdate, movie.id))
  }

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
          <GenreField genre={movie.genre} handleEditField={handleEditField} />
          <SubgenreField
            subgenre={movie.sub_genre}
            handleEditField={handleEditField}
          />
          <CountryField
            country={movie.country}
            handleEditField={handleEditField}
          />
          <LanguageField
            language={movie.language}
            handleEditField={handleEditField}
          />
          <SubtitlesField
            subtitles={movie.subtitles}
            handleEditField={handleEditField}
          />
          <TargetField
            target={movie.target}
            handleEditField={handleEditField}
          />
        </TableBody>
      </Table>
    </>
  )
}

export default TechnicalSheet
