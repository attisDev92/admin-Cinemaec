import { Routes, Route } from 'react-router-dom'
import BuildingPage from '../views/NotFound/BuildingPage'
import AdminOptions from '../components/AdminOptions/AdminOptions'

const ReaRoutes = () => {
  return (
    <Routes>
      <Route path='' element={<AdminOptions />} />
      <Route path='requests' element={<BuildingPage />} />
      <Route path='requests/:id' element={<BuildingPage />} />
      <Route path='requests/edit/:id' element={<BuildingPage />} />
      <Route path='scheduled' element={<BuildingPage />} />
      <Route path='scheduled/:id' element={<BuildingPage />} />
      <Route path='scheduled/edit/:id' element={<BuildingPage />} />
      <Route path='feedback' element={<BuildingPage />} />
      <Route path='feedback/:id' element={<BuildingPage />} />
      <Route path='feedback/edit/:id' element={<BuildingPage />} />
      <Route path='dashbords' element={<BuildingPage />} />
    </Routes>
  )
}

export default ReaRoutes
