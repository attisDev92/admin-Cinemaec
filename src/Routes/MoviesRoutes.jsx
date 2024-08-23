import { Routes, Route } from 'react-router-dom'
import BuildingPage from '../views/NotFound/BuildingPage'
import React from 'react'
import AdminOptions from '../components/AdminOptions/AdminOptions'
import MoviesList from '../views/Movies/MoviesList'
import MoviesForm from '../views/Movies/MoviesForm'

const MoviesRoutes = () => {
  return (
    <Routes>
      <Route path='create' element={<MoviesForm />} />
      <Route path='list' element={<MoviesList />} />
      <Route path=':id' element={<BuildingPage />} />
      <Route path='edit/:id' element={<BuildingPage />} />
      <Route path='' element={<AdminOptions />} />
    </Routes>
  )
}

export default MoviesRoutes
