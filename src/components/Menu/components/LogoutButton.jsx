import { Button } from '@mui/material'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import { useDispatch } from 'react-redux'
import { removeAdmin } from '../../../redux/adminReducer'
import { useNavigate } from 'react-router-dom'
import styles from '../Menu.module.css'

const LogoutButton = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(removeAdmin())
    navigate('/')
  }
  return (
    <Button
      className={styles.logout__button}
      variant='outlined'
      startIcon={<ExitToAppIcon />}
      onClick={handleLogout}
    >
      LogOut
    </Button>
  )
}

export default LogoutButton
