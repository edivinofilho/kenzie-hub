import logo from '../../assets/logo.png'

import { useLocation, Link, useNavigate } from 'react-router-dom'

import { Slide, ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const HomePage = () => {

  const location = useLocation()
  const userData = location.state && location.state.userData

  const navigate = useNavigate()

  const handleLogout = () => {

    toast.success('Logout realizado com sucesso!', {
      transition: Slide,
      autoClose: 1500,
    })

    navigate('/')
  }

  return (
    <>
    <nav>
      <img src={ logo } alt='Logo da Kenzie Hub na cor rosa'/>
      
      <Link to='/' onClick={handleLogout}>Sair</Link>
    </nav>
    
    <header>
      <h1>Olá, {userData.user.name}</h1>
      <p>{userData.user.course_module}</p>

      <ToastContainer></ToastContainer>
    </header>

    <main>
      <h2>Que pena! Estamos em desenvolvimento :(</h2>
      <p>Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
    </main>
    </>
  )
}