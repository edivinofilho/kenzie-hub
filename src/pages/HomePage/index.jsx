import logo from '../../assets/logo.png'

import { useContext } from 'react'
import { UserContext } from '../../providers/UserContext'
import { TechContext } from '../../providers/TechContext'
import { useForm } from 'react-hook-form'

import 'react-toastify/dist/ReactToastify.css'

import { StyledHomeNav, StyledHomeHeader, StyledMain, StyledTechTitle } from './styles'
import { StyledImg } from '../LoginPage/styles'
import { StyledButton } from '../RegisterPage/styles'

import { TechList } from '../../components/TechList/index'
import { Modal } from '../../components/Modal/index'
import { AddTechForm } from '../../components/AddTechForm'


export const HomePage = () => {
  const { userData, logoutUser } = useContext(UserContext)
  const { isOpen, setIsOpen } = useContext(TechContext)
   
  return (
    <>
      <StyledHomeNav>
        <div>
          <StyledImg src={ logo } alt="Logo da Kenzie Hub na cor rosa"/>
          
          <StyledButton to="/" onClick={logoutUser}>Sair</StyledButton>
        </div>
      </StyledHomeNav>
      
      <StyledHomeHeader>
        {userData !== null ? (
          <div>
            <h1>Olá, {userData.user.name}</h1>
            <p>{userData.user.course_module}</p>
          </div>
          ) : (
          <p>Loading...</p>
          )}
      </StyledHomeHeader>

      <StyledMain>
        <StyledTechTitle>
          <h2>Technologias</h2>
          <button onClick={() => setIsOpen(true)}>+</button>
        </StyledTechTitle>

        {isOpen ?
        <Modal title={"Cadastrar Tecnologia"} setModalState={()=> setIsOpen(false)}>
          <AddTechForm />
        </Modal> 
        : null}

        <TechList />
      </StyledMain>
    </>
  )
}