import AddIcon from '@mui/icons-material/Add'
import LocalMoviesIcon from '@mui/icons-material/LocalMovies'
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead'
import SlideshowIcon from '@mui/icons-material/Slideshow'
import BorderColorIcon from '@mui/icons-material/BorderColor'
import InsightsIcon from '@mui/icons-material/Insights'
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import CameraIndoorIcon from '@mui/icons-material/CameraIndoor'

export const menuItems = {
  movies: [
    {
      name: 'Películas',
      url: '/movies/list',
      icon: LocalMoviesIcon,
    },
    {
      name: 'Agregar',
      url: '/movies/create',
      icon: AddIcon,
    },
  ],
  rea: [
    {
      name: 'Programación',
      url: '/rea/scheduled',
      icon: SlideshowIcon,
    },
    {
      name: 'Solicitudes',
      url: '/rea/requests',
      icon: MarkEmailReadIcon,
    },
    {
      name: 'Feedback',
      url: '/rea/feedback',
      icon: BorderColorIcon,
    },
    {
      name: 'Estadísticas',
      url: '/rea/dashbords',
      icon: InsightsIcon,
    },
  ],
  users: [
    {
      name: 'Espacios REA',
      url: '/users/cinemas',
      icon: CameraIndoorIcon,
    },
    {
      name: 'Usuarios BC',
      url: '/users/users',
      icon: AccountBoxIcon,
    },
    {
      name: 'Estadísticas',
      url: '/users/dashboards',
      icon: InsightsIcon,
    },
  ],
}
