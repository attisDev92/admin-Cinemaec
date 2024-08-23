import { Route, Routes } from 'react-router-dom'
import BuildingPage from '../views/NotFound/BuildingPage'
import AdminOptions from '../components/AdminOptions/AdminOptions'

const UsersRoutes = () => {
  return (
    <Routes>
      <Route path='' element={<AdminOptions />} />
      <Route path='users' element={<BuildingPage />} />
      <Route path='users/:id' element={<BuildingPage />} />
      <Route path='users/edit/:id' element={<BuildingPage />} />
      <Route path='cinemas' element={<BuildingPage />} />
      <Route path='cinemas/:id' element={<BuildingPage />} />
      <Route path='cinemas/edit/:id' element={<BuildingPage />} />
      <Route path='dashboards' element={<BuildingPage />} />
    </Routes>
  )
}

export default UsersRoutes
