import logo from '../../assets/logo.png'

import { useContext, useState } from 'react'
import { UserContext } from '../../providers/UserContext'
import { useForm } from 'react-hook-form'

import { Slide, ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { StyledHomeNav, StyledHomeHeader, StyledMain, StyledTechTitle } from './styles'
import { StyledImg } from '../LoginPage/styles'
import { StyledButton } from '../RegisterPage/styles'

import { TechList } from '../../components/TechList/index'

import { Modal } from '../../components/Modal/index'
import { Input } from '../../components/Input/Input'
import { Select } from '../../components/Select/Select'
import { Button } from '../../components/Button'
import { AddTechForm } from '../../components/AddTechForm'
import { EditTechForm } from '../../components/EditTechForm'


export const HomePage = () => {
  const { userData, logoutUser } = useContext(UserContext)
  const [isOpen, setIsOpen] = useState(false)
  const [editModalIsOpen, setEditModalIsOpen] = useState(false)

  const {register, handleSubmit, formState: {errors}, reset} = useForm({
    mode: 'onBlur',
    // resolver: zodResolver(LoginFormSchema)
  })
   
  return (
    <>
      <StyledHomeNav>
        <div>
          <StyledImg src={ logo } alt="Logo da Kenzie Hub na cor rosa"/>
          
          <StyledButton to="/" onClick={logoutUser}>Sair</StyledButton>
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
        <StyledTechTitle>
          <h2>Technologias</h2>
          <button onClick={() => setIsOpen(true)}>+</button>
          <button onClick={() => setEditModalIsOpen(true)}>*</button>

        </StyledTechTitle>

        {isOpen ?
        <Modal title={"Cadastrar Tecnologia"} setIsOpen={setIsOpen}>
          <AddTechForm />
        </Modal> 
        : null}

        {editModalIsOpen ?
        <Modal title={"Tecnologia Detalhes"} setIsOpen={setEditModalIsOpen}>
          <EditTechForm />
        </Modal> 
        : null}
        
        <TechList />
      </StyledMain>
    </>
  )
}