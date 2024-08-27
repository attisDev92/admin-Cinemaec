import { useDispatch } from 'react-redux'
import { useField } from '../../hooks/useField'
import { loginAdmin } from '../../redux/adminReducer'
import styles from './Login.module.css'
import { Button, Card, TextField } from '@mui/material'
import Loader from '../../components/Loader/Loader'
import { useState } from 'react'

const Login = () => {
  const dispatch = useDispatch()
  const username = useField()
  const password = useField()
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    setIsLoading(true)
    const credentials = {
      username: username.input.value,
      password: password.input.value,
    }

    dispatch(loginAdmin(credentials))
      .then(() => {
        username.reset()
        password.reset()
        setIsLoading(false)
      })
      .catch(() => {
        setIsLoading(false)
      })
  }

  return (
    <>
      <Loader isActive={isLoading} />
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
    </>
  )
}

export default Login
