import { Alert } from '@mui/material'
import { useSelector } from 'react-redux'

const styles = {
  position: 'fixed',
  top: '10rem',
  width: '90%',
}

const Notification = () => {
  const notification = useSelector(state => state.notification)
  if (!notification.active) {
    return null
  }

  return (
    <div style={styles}>
      <Alert severity={notification.style}> {notification.message} </Alert>
    </div>
  )
}

export default Notification
