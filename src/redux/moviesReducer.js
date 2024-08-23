import { createSlice } from '@reduxjs/toolkit'
import { setNotification } from './notificationReducer'
import { createMovie, getAllMovies } from '../services/movies'

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
  },
})

export const { initMovies, addNewMovie } = moviesSlice.actions

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
      const formData = new FormData()

      for (const [key, value] of Object.entries(newMovie)) {
        if (key === 'poster') {
          formData.append(key, value)
        } else if (key === 'stills' && Array.isArray(value)) {
          value.forEach(item => formData.append(key, item))
        } else if (Array.isArray(value)) {
          formData.append(key, JSON.stringify(value))
        } else if (typeof value === 'object' && value !== null) {
          formData.append(key, JSON.stringify(value))
        } else {
          formData.append(key, value)
        }
      }

      const response = await createMovie(formData)
      console.log(response)
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

export default moviesSlice.reducer
