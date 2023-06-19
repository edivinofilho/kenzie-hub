import logo from '../../assets/logo.png'

import { useState } from 'react'

import { useLocation, Link, useNavigate } from 'react-router-dom'

import { Slide, ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { StyledHomeNav, StyledHomeHeader, StyledMain } from './styles'
import { StyledImg } from '../LoginPage/styles'
import { StyledButton } from '../RegisterPage/styles'

import { TechList } from '../../components/TechList/index'
// import Modal from 'react-modal'
// Modal.setAppElement(document.body)

import { ModalAddTech } from '../../components/Modal/index'


export const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  const location = useLocation()
  const userData = location.state && location.state.userData

  const navigate = useNavigate()

  const [ techList, setTechList ] = useState([])

  const handleLogout = () => {
    localStorage.removeItem('@TOKEN')
    localStorage.removeItem('@USERID')

    toast.success('Logout realizado com sucesso!', {
      transition: Slide,
      autoClose: 1500,
    })

    navigate('/')
  }

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <StyledHomeNav>
        <div>
          <StyledImg src={ logo } alt="Logo da Kenzie Hub na cor rosa"/>
          
          <StyledButton to="/" onClick={handleLogout}>Sair</StyledButton>
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
        <div>
          <h2>Technologias</h2>
          <button onClick={openModal}>+</button>
        </div>
        <TechList />
      </StyledMain>
    </>
  )
}