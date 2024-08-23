import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
  name: 'notification',
  initialState: {
    message: '',
    active: false,
    style: '',
  },
  reducers: {
    activeNotification(state, action) {
      if (action.payload) {
        state.message = action.payload.message
        state.active = true
        state.style = action.payload.style
      } else {
        state.message = 'Un error ha ocurrido, vuelva a intentar'
        state.active = false
        state.style = ''
      }
    },
    desactiveNotification(state) {
      state.message = ''
      state.active = false
      state.style = ''
    },
  },
})

export const { activeNotification, desactiveNotification } =
  notificationSlice.actions

export const setNotification = (message, style) => {
  return dispatch => {
    dispatch(activeNotification(message, style))
    setTimeout(() => {
      dispatch(desactiveNotification())
    }, 5000)
  }
}

export default notificationSlice.reducer
