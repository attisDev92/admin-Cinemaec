import { useEffect, useState } from 'react'
import { getMovie } from '../services/movies'
import { useDispatch } from 'react-redux'
import { setNotification } from '../redux/notificationReducer'

export const useMovie = id => {
  const [movie, setMovie] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true)
        const response = await getMovie(id)
        setMovie(response)
      } catch (error) {
        setError(error)
        dispatch(
          setNotification({
            message: 'Error al cargar la película',
            style: 'error',
          }),
        )
      } finally {
        setLoading(false)
      }
    }

    fetchMovie()
  }, [id])

  return {
    movie,
    loading,
    error,
  }
}
