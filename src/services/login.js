import axios from 'axios'
const baseURL = import.meta.env.VITE_BACKEND_CINEMA_URI

export const login = async credentials => {
  const res = await axios.post(`${baseURL}/admin/login`, credentials)
  return res.data
}
