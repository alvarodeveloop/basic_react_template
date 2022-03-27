import { lazy } from 'react'
import Loader from '../components/UI/loader'
import { useSelector } from 'react-redux'
import { RootState } from '../store'
import { Route, Routes, Navigate } from 'react-router-dom'
import AuthPage from '../pages/auth/AuthPage'
import AuthLayout from '../layouts/authlayout'
import PrivateLayout from '../layouts/privatelayout/PrivateLayout'
import PrivateRoutesComponent from './PrivateRoutesComponent'
/**
 * Application main routing handler.
 *
 * @returns {React.ReactElement} Application main router.
 */

const AppRouterHandler: React.FC = () => {
  return (
    <Routes>
      <Route
        path={'/'}
        element={
          <AuthLayout>
            <AuthPage />
          </AuthLayout>
        }
      ></Route>
      <Route
        path={'/*'}
        element={
          <PrivateLayout>
            <PrivateRoutesComponent />
          </PrivateLayout>
        }
      ></Route>
    </Routes>
  )
}

export default AppRouterHandler
