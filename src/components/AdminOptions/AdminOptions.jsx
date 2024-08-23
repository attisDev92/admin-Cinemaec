import { useTheme } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import styles from './AdminOptions.module.css'
import { List } from '@mui/material'
import { menuItems } from '../../data/menuData'
import MenuButton from '../Menu/MenuButton'

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  }
}

const AdminOptions = () => {
  const { username } = useSelector(state => state.admin)
  const theme = useTheme()
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div className={styles.options__container}>
      <h4>Perfil {username}</h4>
      <p>Menú de administrador</p>
      <Box sx={{ bgcolor: 'background.paper', width: 'auto' }}>
        <AppBar position='static'>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor='secondary'
            textColor='inherit'
            variant='fullWidth'
            aria-label='full width tabs example'
          >
            <Tab label='Catálogo de películas' {...a11yProps(0)} />
            <Tab label='Banco de Contenidos' {...a11yProps(1)} />
            <Tab label='Usuarios y espacios REA' {...a11yProps(2)} />
          </Tabs>
        </AppBar>

        <TabPanel value={value} index={0} dir={theme.direction}>
          <p>
            Aquí podrás registrar nuevas películas, acceder al listado completo,
            editar y borrar películas.
          </p>
          <List>
            {menuItems.movies.map((item, i) => (
              <MenuButton
                id={i}
                name={item.name}
                url={item.url}
                Icon={item.icon}
              />
            ))}
          </List>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <p>
            Aquí podrás revisar las películas programadas del Banco de
            Contenidos, revisar nuevas solicitudes de prestamo, revisar
            retroalimentación de las exhibiciones anteriores y gestionar y
            revisar todos los datos del banco de contenidos.
          </p>
          <List>
            {menuItems.rea.map((item, i) => (
              <MenuButton
                id={i}
                name={item.name}
                url={item.url}
                Icon={item.icon}
              />
            ))}
          </List>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <p>
            Aquí podrás acceder al listado de usuarios del Banco de Contenidos y
            Espacios miembros de REA. Revisar solicitudes de ingreso y gestionar
            los perfiles de los usuarios registrados. Además acceder a todos los
            datos de los usuarios.
          </p>
          <List>
            {menuItems.users.map((item, i) => (
              <MenuButton
                id={i}
                name={item.name}
                url={item.url}
                Icon={item.icon}
              />
            ))}
          </List>
        </TabPanel>
      </Box>
    </div>
  )
}

export default AdminOptions
