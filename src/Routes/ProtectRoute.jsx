import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProtectedRoute = ({ children }) => {
  const admin = useSelector(state => state.admin)

  if (!admin.token) {
    return <Navigate to='/' replace />
  }

  return <Outlet />
}

export default ProtectedRoute
