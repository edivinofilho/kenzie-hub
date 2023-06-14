import logo from '../../assets/logo.png'

import { RegisterForm } from '../../components/RegiterForm/RegisterForm'

import { StyledRegisterFormContainer, StyledRegisterHeader, StyledButton } from './styles'
import { StyledImg } from '../LoginPage/styles'

export const RegisterPage = () => {
  return (
    <>
      <StyledRegisterHeader>
        <StyledImg src={ logo } alt='Logo da Kenzie Hub na cor rosa' />
        <StyledButton to='/'>Volta</StyledButton> 
      </StyledRegisterHeader>
      <StyledRegisterFormContainer>
        <h1>Crie sua conta</h1>
        <p>Rápido e grátis, vamos nessa</p>
        <RegisterForm />
      </StyledRegisterFormContainer>
    </>

  )
}