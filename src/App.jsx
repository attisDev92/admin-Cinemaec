import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setAdmin, verifyLoginToken } from './redux/adminReducer'
import Login from './views/Login/Login'
import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'
import Notification from './components/AlertNotification/Notification'
import NotFound from './views/NotFound/NotFound'
import AdminOptions from './components/AdminOptions/AdminOptions'
import MoviesRoutes from './Routes/MoviesRoutes'
import ReaRoutes from './Routes/ReaRoutes'
import UsersRoutes from './Routes/UsersRoutes'
import ProtectedRoute from './Routes/ProtectRoute'
import styles from './styles/App.module.css'
import Loader from './components/Loader/Loader'

function App() {
  const dispatch = useDispatch()
  const admin = useSelector(state => state.admin)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loggedAdminJSON = window.localStorage.getItem('adminCinemaec')

    if (loggedAdminJSON) {
      const admin = JSON.parse(loggedAdminJSON)
      dispatch(verifyLoginToken(admin))
    }
    setLoading(false)
  }, [dispatch])

  if (loading) {
    return <Loader isActive={true} />
  }

  return (
    <>
      <Header />
      {admin.token ? <Menu /> : null}
      <main className={styles.body__container}>
        <Notification />
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path='/movies/*' element={<MoviesRoutes />} />
            <Route path='/rea/*' element={<ReaRoutes />} />
            <Route path='/users/*' element={<UsersRoutes />} />
          </Route>

          <Route
            path='/'
            element={!admin.token ? <Login /> : <AdminOptions />}
          />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
    </>
  )
}

export default App
