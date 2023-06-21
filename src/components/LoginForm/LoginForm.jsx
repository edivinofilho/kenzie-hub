import { useForm } from 'react-hook-form'
import { useContext, useState } from 'react'
import { UserContext } from '../../providers/UserContext'

import { zodResolver } from '@hookform/resolvers/zod'
import { LoginFormSchema } from './LoginFormSchema'

import { Input } from '../Input/Input'

import 'react-toastify/dist/ReactToastify.css'

import { StyledForm, StyledIconContainer, StyledLinkContainer } from './styles'
import { StyledErrorMsg } from '../RegiterForm/styles'

import { RiEyeLine, RiEyeOffLine } from 'react-icons/ri'


export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false)
 
  const {register, handleSubmit, formState: {errors}, reset} = useForm({
    mode: 'onBlur',
    resolver: zodResolver(LoginFormSchema)
  })

  const { loginUser } = useContext(UserContext)

  const passwordInput = () => {
    return (
      <StyledIconContainer>
        <Input label="Password" className="password" type={showPassword ? "text" : "password"} placeholder="Digite aqui sua senha" 
        {...register("password")} />
                
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
    loginUser(formData)
    reset()
  }
  
  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <Input label="Email" type="email" placeholder="Digite aqui seu email"  {...register("email")} />
      {errors.email ?  <StyledErrorMsg>{errors.email.message}</StyledErrorMsg> : null}
     
      {passwordInput()}
     
      <button type="submit">Entrar</button>
    </StyledForm>
  )
}