import { useSelector } from 'react-redux'
import { DataGrid, GridToolbar, GridActionsCellItem } from '@mui/x-data-grid'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import EditNoteIcon from '@mui/icons-material/EditNote'
import PreviewIcon from '@mui/icons-material/Preview'

const MoviesList = () => {
  const movies = useSelector(state => state.movies)

  const handleView = id => {
    console.log('view', id)
  }

  const handleEdit = id => {
    console.log('edit', id)
  }

  const handleDelete = id => {
    console.log('delete', id)
  }
  const columns = [
    { field: 'title', headerName: 'Nombre', width: 160 },
    { field: 'director', headerName: 'Director', width: 130 },
    { field: 'time', headerName: 'Duración', type: 'number', width: 100 },
    {
      field: 'feactureFilm',
      headerName: 'Largo/Corto',
      width: 130,
    },
    {
      field: 'genre',
      headerName: 'Género',
      width: 150,
      valueFormater: params => params.join(', '),
    },
    { field: 'year', headerName: 'Año', width: 100 },
    { field: 'country', headerName: 'País', width: 130 },
    { field: 'target', headerName: 'Clasificación edad', width: 130 },
    {
      field: 'animation',
      headerName: 'Animación',
      width: 100,
      type: 'boolean',
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
              label='Preview'
              onClick={() => handleView(id)}
              color='inherit'
            />
            <GridActionsCellItem
              icon={<EditNoteIcon />}
              label='Edit'
              className='textPrimary'
              onClick={() => handleEdit(id)}
              color='inherit'
            />
            <GridActionsCellItem
              icon={<DeleteForeverIcon />}
              label='Delete'
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
          rows={movies}
          columns={columns}
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
