import { Link } from 'react-router-dom'
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material'

const MenuButton = ({ name, url, Icon }) => {
  return (
    <ListItemButton>
      <ListItemIcon>
        {' '}
        <Icon />{' '}
      </ListItemIcon>
      <Link to={url}>
        <ListItemText>{name}</ListItemText>
      </Link>
    </ListItemButton>
  )
}

export default MenuButton
