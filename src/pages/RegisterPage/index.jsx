import logo from '../../assets/logo.png'

import { RegisterForm } from '../../components/RegiterForm/RegisterForm'

import { Link } from 'react-router-dom'

export const RegisterPage = () => {
  return (
    <>
      <header>
        <img src={ logo } alt='Logo da Kenzie Hub na cor rosa' />
        <Link to='/'>Volta</Link> {/* Elemento será componentizado */}
      </header>
      <main>
        <RegisterForm />
      </main>
    </>

  )
}