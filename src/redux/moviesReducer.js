import { createSlice } from '@reduxjs/toolkit'
import { setNotification } from './notificationReducer'
import { createMovie, destroyMovie, getAllMovies } from '../services/movies'

const moviesSlice = createSlice({
  name: 'movies',
  initialState: [],
  reducers: {
    initMovies(state, action) {
      return action.payload
    },
    addNewMovie(state, action) {
      state.push(action.payload)
    },
    removeMovie(state, action) {
      const id = action.payload
      state.filter(movie => movie.id !== id)
    },
  },
})

export const { initMovies, addNewMovie, removeMovie } = moviesSlice.actions

export const getInitialMovies = () => {
  return async dispatch => {
    try {
      const response = await getAllMovies()
      dispatch(initMovies(response))
    } catch (error) {
      console.error(error)
      dispatch(
        setNotification({
          message: 'error al cargar las películas',
          style: 'error',
        }),
      )
    }
  }
}

export const createNewMovie = newMovie => {
  return async dispatch => {
    try {
      const response = await createMovie(newMovie)
      dispatch(addNewMovie(response))
    } catch (error) {
      console.error(error)
      dispatch(
        setNotification({
          message: 'error al crear una nueva película',
          style: 'error',
        }),
      )
    }
  }
}

export const addFile = newFile => {
  return async dispatch => {
    try {
    } catch (error) {}
  }
}

export const deleteMovie = id => {
  return async dispatch => {
    try {
      const response = await destroyMovie(id)
      console.log(response)
      dispatch(removeMovie(id))
      dispatch(
        setNotification({
          message: 'La película ha sido eliminada',
          style: 'warn',
        }),
      )
    } catch (error) {
      dispatch(
        setNotification({
          message: 'Error al eliminar la película',
          style: 'error',
        }),
      )
    }
  }
}

export default moviesSlice.reducer
