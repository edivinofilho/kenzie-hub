import logo from '../../assets/logo.png'
import { LoginForm } from '../../components/LoginForm/LoginForm'

import { StyledHeader, StyledImg } from './styles'

import { StyledFormContainer, StyledLink } from './styles'

export const LoginPage = () => {
  return (
    <>
      <StyledHeader>
        <StyledImg src={ logo } alt='Logo da Kenzie Hub na cor rosa' />
      </StyledHeader>
      <StyledFormContainer> 
        <h1>Login</h1>
        <LoginForm />
        <p>Ainda não possui uma conta?</p>
        <StyledLink to='/register'>Cadastre-se</StyledLink>
      </StyledFormContainer>
    </>
  )
}