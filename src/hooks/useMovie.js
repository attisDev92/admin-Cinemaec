import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setNotification } from '../redux/notificationReducer'

export const useMovie = id => {
  const movies = useSelector(state => state.movies)
  const [movie, setMovie] = useState(null)
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!movies) {
      setLoading(true)
      dispatch(
        setNotification({
          message: 'Error al cargar la película',
          style: 'error',
        }),
      )
      setLoading(false)
    }

    if (movies) {
      setMovie(movies.find(movie => movie.id === id))
      setLoading(false)
    }
  }, [movies, id, dispatch])

  return {
    movie,
    loading,
  }
}
