import axios from 'axios'
const baseURL = import.meta.env.VITE_BACKEND_CINEMA_URI

const getConfig = token => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
}

export const login = async credentials => {
  const res = await axios.post(`${baseURL}/admin/login`, credentials)
  return res.data
}

export const verifyLogin = async token => {
  const res = await axios.get(`${baseURL}/admin/login`, getConfig(token))
  return res.data
}
