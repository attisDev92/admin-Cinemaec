import axios from 'axios'
const baseURL = import.meta.env.VITE_BACKEND_CINEMA_URI

let token = null

export const setToken = newToken => {
  return (token = `Bearer ${newToken}`)
}

const getConfig = () => {
  return {
    headers: {
      Authorization: token,
    },
  }
}

export const getAllMovies = async () => {
  const res = await axios.get(`${baseURL}/movies`)
  return res.data
}

export const getMovie = async id => {
  const res = await axios.get(`${baseURL}/movies/${id}`)
  return res.data
}

export const sendMovieFiles = async movieFiles => {
  const res = await axios.put(
    `${baseURL}/movies/files`,
    movieFiles,
    getConfig(),
  )
  return res.data
}

export const destroyMovieFiles = async (fileId, movieId) => {
  const res = await axios.delete(
    `${baseURL}/movies/files/${fileId}`,
    movieId,
    getConfig(),
  )
  return res.data
}

export const createMovie = async newMovie => {
  const res = await axios.post(`${baseURL}/movies`, newMovie, getConfig())
  return res.data
}

export const destroyMovie = async id => {
  const res = await axios.delete(`${baseURL}/movies/${id}`, getConfig())
  return res.data
}
