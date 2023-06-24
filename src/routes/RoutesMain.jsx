import { Route, Routes } from 'react-router-dom'

import { LoginPage } from '../pages/LoginPage'
import { RegisterPage } from '../pages/RegisterPage'
import { HomePage } from '../pages/HomePage'
import { ProtectedRoutes } from './ProtectedRoutes'
import { PublicRoutes } from './PublicRoutes'

export const RoutesMain = () => {
  return (
    <Routes>
      <Route element={<PublicRoutes />}>
        <Route index element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Route>

      <Route element={<ProtectedRoutes />}>
        <Route path='/home' element={<HomePage />} />
      </Route>
    </Routes>
  )
}