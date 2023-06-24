import { useContext } from 'react'
import { UserContext } from '../../providers/UserContext'
import { Navigate, Outlet } from 'react-router-dom'

export const PublicRoutes = () => {
  const { userData } = useContext(UserContext)

  return !userData ? <Outlet /> : <Navigate to="/home" />
}