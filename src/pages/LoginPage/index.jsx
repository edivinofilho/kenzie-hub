import logo from '../../assets/logo.png'
import { LoginForm } from '../../components/LoginForm/LoginForm'
import { Link } from 'react-router-dom'

export const LoginPage = () => {
  return (
    <>
      <header>
        <img src={ logo } alt='Logo da Kenzie Hub na cor rosa' />
      </header>
      <h1>Login Page</h1>
      <LoginForm />
      <p>Ainda não possui uma conta?</p>
      <Link to='/register'>Cadastre-se</Link>
    </>
  )
}