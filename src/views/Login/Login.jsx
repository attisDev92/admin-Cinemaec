import { useDispatch } from 'react-redux'
import { useField } from '../../hooks/useField'
import { loginAdmin } from '../../redux/adminReducer'
import styles from './Login.module.css'
import { Button, Card, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const username = useField()
  const password = useField()

  const handleSubmit = e => {
    e.preventDefault()
    const credentials = {
      username: username.input.value,
      password: password.input.value,
    }

    dispatch(loginAdmin(credentials)).then(() => {
      username.reset()
      password.reset()
      navigate('/')
    })
  }

  return (
    <Card className={styles.Login}>
      <div>
        <img src='/assets/icons/rea_logo_b.png' alt='REA' />
        <h2>LOGIN</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <TextField
          id='standard-basic'
          label='Username'
          variant='standard'
          {...username.input}
        />
        <TextField
          id='standard-basic'
          label='Password'
          variant='standard'
          {...password.input}
        />
        <Button variant='outlined' type='submit'>
          Ingresar
        </Button>
      </form>
    </Card>
  )
}

export default Login
