import { useForm } from 'react-hook-form'
import { Input } from '../Input/Input'
import { api } from '../../services/api'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

import { Slide, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { StyledForm, StyledIconContainer, StyledLinkContainer } from './styles'

import { RiEyeLine, RiEyeOffLine } from 'react-icons/ri'


export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false)

  const [userData, setUserData] = useState()
  const { register, handleSubmit, reset } = useForm()
  const navigate = useNavigate()

  const loginUser = async (formData) => {
    try {
      
      const {data} = await api.post('/sessions', formData)
      
      localStorage.setItem('userData', JSON.stringify(data))
      
      setUserData(data)
      
      toast.success('Login realizado com sucesso!', {
        transition: Slide,
        autoClose: 2000
      })
      
      navigate('/home', { state: { userData: data } })
    
    } catch (error) {
      console.log(error)

      toast.error('Verifique seu email e/ou password!', {
        transition: Slide,
        autoClose: 1500
      })

    }
  }

  const passwordInput = () => {
    return (
      <StyledIconContainer>
        <Input label="Password" type={showPassword ? 'text' : 'password'} placeholder="Digite aqui sua senha" {...register("password")} />
        
        {showPassword ? (
        <StyledLinkContainer onClick={() => setShowPassword(false)}>
          <RiEyeOffLine />
        </StyledLinkContainer>) : (
        <StyledLinkContainer onClick={() => setShowPassword(true)}>
          <RiEyeLine />
        </StyledLinkContainer>
        )}
      </StyledIconContainer>
    )
  }

  const submit = (formData) => {
    console.log(formData)
    loginUser(formData)

    reset()
  }
  
  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <Input label="Email" type="email" placeholder="Digite aqui seu email" {...register("email")} />
     
      {passwordInput()}
     
      <button type="submit">Entrar</button>
    </StyledForm>
  )
}