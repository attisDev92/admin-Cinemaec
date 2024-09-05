import { Routes, Route } from 'react-router-dom'
import BuildingPage from '../views/NotFound/BuildingPage'
import React from 'react'
import AdminOptions from '../components/AdminOptions/AdminOptions'
import MoviesList from '../views/MoviesView/MoviesList'
import MoviesForm from '../views/MoviesForm/MoviesForm'
import MovieLayout from '../views/MoviesView/MovieLayout'
import MoviesFilesForm from '../views/MoviesForm/MoviesFilesForm'

const MoviesRoutes = () => {
  return (
    <Routes>
      <Route path='create' element={<MoviesForm />} />
      <Route path='list' element={<MoviesList />} />
      <Route path=':id' element={<MovieLayout />} />
      <Route path='/:id/files' element={<MoviesFilesForm />} />
      <Route path='' element={<AdminOptions />} />
    </Routes>
  )
}

export default MoviesRoutes
