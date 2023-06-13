import logo from '../../assets/logo.png'
import { LoginForm } from '../../components/LoginForm/LoginForm'
// import { Link } from 'react-router-dom'


import { StyledFormContainer, StyledLink } from './styles'

export const LoginPage = () => {
  return (
    <>
      <header>
        <img src={ logo } alt='Logo da Kenzie Hub na cor rosa' />
      </header>
      <StyledFormContainer> 
        <h1>Login</h1>
        <LoginForm />
        <p>Ainda não possui uma conta?</p>
        <StyledLink to='/register'>Cadastre-se</StyledLink>
      </StyledFormContainer>
    </>
  )
}