import { createContext, useEffect, useState } from 'react'

import { api } from '../services/api'

import { useNavigate } from 'react-router-dom'

import { Slide, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const UserContext = createContext({})

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null)
  const [loading, setLoading ] = useState(false)
  const navigate = useNavigate()

  const currentPath = window.location.pathname

  useEffect(() => {    
    const token = localStorage.getItem('@TOKEN')
    
    const loadUser = async () => {
      if(token){       
        try {
          setLoading(true)
          const { data } = await api.get('/profile', {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })

          const updatedUserData = {
            token: token,
            user: data
          }

          setUserData(updatedUserData)
  
          navigate(currentPath) 
      
        } catch(error){
          toast.error('Ups, tivemos um problema', {
            transition: Slide,
            autoClose: 2000
          })
          localStorage.removeItem('@TOKEN')
                  
        } finally {
          setLoading(false)
        }
      }    
    }
    loadUser()

  }, [])


  const loginUser = async (formData) => {    
    try {     
      const {data} = await api.post('/sessions', formData)
      localStorage.setItem('@TOKEN', data.token)
      setUserData(data)
        
      toast.success('Login realizado com sucesso!', {
        transition: Slide,
        autoClose: 2000
      })  
      navigate('/home')
    
    } catch (error) {
      toast.error('Verifique seu email e/ou password!', {
        transition: Slide,
        autoClose: 1500
      })

    }
  }

  const logoutUser = () => {
    localStorage.removeItem('@TOKEN')
   
    toast.success('Logout realizado com sucesso!', {
      transition: Slide,
      autoClose: 1500,
    })
    setUserData(null)
    navigate('/')
  }

  const addUser = async (formData) => {
    try {
      setLoading(true)

      const responsePromise = api.post('/users', formData)
      const response = await responsePromise

      await Promise.resolve() 

      await toast.promise(
        responsePromise,
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