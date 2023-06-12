// import { Logo } from '../../assets/logo.png'

import { RegisterForm } from '../../components/RegiterForm/RegisterForm'

export const RegisterPage = () => {
  return (
    <>
      <header>
        <img src='#' alt='Logo da Kenzie Hub na cor rosa' />
        <button>Volta</button> {/* Elemento será componentizado */}
      </header>
      <main>
        <RegisterForm />
      </main>
    </>

  )
}