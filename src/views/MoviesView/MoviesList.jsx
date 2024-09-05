import { useDispatch, useSelector } from 'react-redux'
import { DataGrid, GridToolbar, GridActionsCellItem } from '@mui/x-data-grid'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import EditNoteIcon from '@mui/icons-material/EditNote'
import PreviewIcon from '@mui/icons-material/Preview'
import { deleteMovie } from '../../redux/moviesReducer'
import { useNavigate } from 'react-router-dom'

const MoviesList = () => {
  const movies = useSelector(state => state.movies)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleView = id => {
    navigate(`/movies/${id}`)
  }

  const handleEdit = id => {
    navigate(`/movies/${id}/files`)
  }

  const handleDelete = id => {
    dispatch(deleteMovie(id))
  }

  const columns = [
    { field: 'title', headerName: 'Nombre', width: 160 },
    { field: 'director', headerName: 'Director', width: 130 },
    { field: 'productionCompany', headerName: 'Casa Productora', width: 130 },
    { field: 'runTime', headerName: 'Duración', type: 'number', width: 100 },
    { field: 'realeseYear', headerName: 'Año de estreno', width: 100 },
    { field: 'country', headerName: 'País', width: 130 },
    { field: 'language', headerName: 'Idioma', width: 130 },
    { field: 'subtitles', headerName: 'Subtítulos', width: 130 },
    { field: 'genre', headerName: 'Género', width: 150 },
    { field: 'sub_genre', headerName: 'Sub-generos', width: 150 },
    { field: 'target', headerName: 'Clasificación', width: 130 },
    {
      field: 'reaInformation',
      headerName: 'Disponible en REA',
      width: 100,
    },
    {
      field: 'reaInformation.territoryLicense',
      headerName: 'Disponible en REA',
      width: 100,
    },
    {
      field: 'reaInformation.expiration',
      headerName: 'Disponible en REA',
      width: 100,
    },
    {
      field: 'actions',
      headerName: 'Opciones',
      width: 130,
      cellClassName: 'actions',
      renderCell: ({ id }) => {
        return (
          <>
            <GridActionsCellItem
              icon={<PreviewIcon />}
              label='Vista / Edición'
              onClick={() => handleView(id)}
              color='inherit'
            />
            <GridActionsCellItem
              icon={<EditNoteIcon />}
              label='Editar imagenes'
              className='textPrimary'
              onClick={() => handleEdit(id)}
              color='inherit'
            />
            <GridActionsCellItem
              icon={<DeleteForeverIcon />}
              label='Borrar'
              onClick={() => handleDelete(id)}
              color='inherit'
            />
          </>
        )
      },
    },
  ]

  return (
    <div>
      <h2>Catálogo de películas</h2>
      <div style={{ height: 500, width: '100%' }}>
        <DataGrid
          key={movies.length}
          rows={movies}
          columns={columns}
          getRowId={row => row.id}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[10, 15, 20]}
          slots={{
            toolbar: GridToolbar,
          }}
        />
      </div>
    </div>
  )
}

export default MoviesList
