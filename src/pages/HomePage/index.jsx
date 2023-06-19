import logo from '../../assets/logo.png'

import { useLocation, Link, useNavigate } from 'react-router-dom'

import { Slide, ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { StyledHomeNav, StyledHomeHeader, StyledMain } from './styles'
import { StyledImg } from '../LoginPage/styles'
import { StyledButton } from '../RegisterPage/styles'

import { TechList } from '../../components/TechList/index'

export const HomePage = () => {

  const location = useLocation()
  const userData = location.state && location.state.userData

  const navigate = useNavigate()

  const handleLogout = () => {

    localStorage.clear()
    
    toast.success('Logout realizado com sucesso!', {
      transition: Slide,
      autoClose: 1500,
    })

    navigate('/')
  }

  return (
    <>
      <StyledHomeNav>
        <div>
          <StyledImg src={ logo } alt='Logo da Kenzie Hub na cor rosa'/>
          
          <StyledButton to='/' onClick={handleLogout}>Sair</StyledButton>
        </div>
      </StyledHomeNav>
      
      <StyledHomeHeader>
        <div>
          <h1>Olá, {userData.user.name}</h1>
          <p>{userData.user.course_module}</p>
        </div>

        <ToastContainer></ToastContainer>
      </StyledHomeHeader>

      <StyledMain>
        <h2>Technologias</h2>
        <TechList />
      </StyledMain>
    </>
  )
}