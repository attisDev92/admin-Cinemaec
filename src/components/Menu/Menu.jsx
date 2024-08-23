import { List, ListSubheader } from '@mui/material'
import { useSelector } from 'react-redux'
import { menuItems } from '../../data/menuData'
import Styles from './Menu.module.css'
import MenuButton from './MenuButton'
import LogoutButton from './components/LogoutButton'

const Menu = () => {
  const admin = useSelector(state => state.admin)

  return (
    <div className={Styles.menu__bar}>
      <h4>{admin.username}</h4>
      <nav>
        <List>
          <ListSubheader component='div' id='nested-list-subheader'>
            Catálogo de Películas
          </ListSubheader>
          {menuItems.movies.map((item, i) => (
            <MenuButton
              key={i + 1}
              name={item.name}
              url={item.url}
              Icon={item.icon}
            />
          ))}
          <ListSubheader component='div' id='nested-list-subheader'>
            Banco de Contenidos | REA
          </ListSubheader>
          {menuItems.rea.map((item, i) => (
            <MenuButton
              key={i + 1}
              name={item.name}
              url={item.url}
              Icon={item.icon}
            />
          ))}
          <ListSubheader component='div' id='nested-list-subheader'>
            Administración Usuarios
          </ListSubheader>
          {menuItems.users.map((item, i) => (
            <MenuButton
              key={i + 1}
              name={item.name}
              url={item.url}
              Icon={item.icon}
            />
          ))}
        </List>
      </nav>
      <LogoutButton />
    </div>
  )
}

export default Menu
