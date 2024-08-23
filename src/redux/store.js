import { configureStore } from '@reduxjs/toolkit'
import notification from './notificationReducer'
import admin from './adminReducer'
import movies from './moviesReducer'

const store = configureStore({
  reducer: {
    notification,
    admin,
    movies,
  },
})

export default store
