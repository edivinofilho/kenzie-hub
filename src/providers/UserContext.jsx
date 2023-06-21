import { createContext, useState } from 'react'

import { api } from '../services/api'

import { useNavigate } from 'react-router-dom'

import { Slide, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const UserContext = createContext({})

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null)
  const [loading, setLoading ] = useState(false)
  const navigate = useNavigate()

  const loginUser = async (formData) => {    

    try {
      
      const {data} = await api.post('/sessions', formData)
      
      console.log(data.user)
      localStorage.setItem('@TOKEN', data.token)
      localStorage.setItem('@USERID', data.user.id)
      
      setUserData(data)
      
      toast.success('Login realizado com sucesso!', {
        transition: Slide,
        autoClose: 2000
      })
      
      navigate('/home')
    
    } catch (error) {
      console.log(error)

      toast.error('Verifique seu email e/ou password!', {
        transition: Slide,
        autoClose: 1500
      })

    }
  }

  const logoutUser = () => {
    localStorage.removeItem('@TOKEN')
    localStorage.removeItem('@USERID')

    toast.success('Logout realizado com sucesso!', {
      transition: Slide,
      autoClose: 1500,
    })

    navigate('/')
  }

  const addUser = async (formData) => {
    console.log(formData)
    try {
      setLoading(true)

      const response = await api.post('/users', formData)

      await toast.promise(
        Promise.resolve(response), 
        {
          pending: 'Enviando seus dados...',
          success: 'Conta criada com sucesso!',
          error: 'Ops! Algo deu errado',
          transition: Slide,
          autoClose: 1800
        }
      )

      navigate('/')

    } catch (error) {
      console.log(error)

      toast.error('Ops! Algo deu errado', {
        transition: Slide,
        autoClose: 1500
      })
      
    } finally {
      setLoading(false)
    }
  }

  return (
    <UserContext.Provider value={{ userData, setUserData, loginUser, logoutUser, addUser, loading }}>
      {children}
    </UserContext.Provider>
  )
}