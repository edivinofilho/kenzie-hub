import { useState, createContext, useContext } from 'react'
import { api } from '../services/api'

import { UserContext } from './UserContext'

import { Slide, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const TechContext = createContext({})

export const TechProvider = ({ children }) => {
  const { userData, setUserData } = useContext(UserContext)
  const [ isOpen, setIsOpen ] = useState(false)
  const [ editModalIsOpen, setEditModalIsOpen] = useState(false)

  const submitNewTech = async (formData) => {
    const token = localStorage.getItem('@TOKEN')
    const updatedTechs = [...userData.user.techs, formData]
    const updatedUserData = {
      ...userData,
      user: { ...userData.user, 
        techs: updatedTechs}
    }

    try {
      const { data } = await api.post(`/users/techs`, formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      toast.success('Tech adicionada com sucesso!', {
        transition: Slide,
        autoClose: 2000
      })
      
      setUserData(updatedUserData)
    
      setIsOpen(false)
            
    } catch (error) {
      toast.error('Ups, houve um problema. Tente novamente!', {
        transition: Slide,
        autoClose: 2000
      })
    
      setIsOpen(false)

    }
  }

  const submitUpdatedTech = async (formData, tech) => {
    const token = localStorage.getItem('@TOKEN')

    try {
      await api.put(`/users/techs/${tech.id}`, formData, 
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      tech.status = formData.status

      toast.success('Tech editada com sucesso!', {
        transition: Slide,
        autoClose: 2000
      })
      
      setEditModalIsOpen(false)

    } catch (error) {
      console.log(error)
      toast.error('Ups, houve um problema. Tente novamente!', {
        transition: Slide,
        autoClose: 2000
      })

      setEditModalIsOpen(false)
    }
  }

  const deleteTech = async (tech) => {
    const token = localStorage.getItem('@TOKEN')
    
    try {
      await api.delete(`/users/techs/${tech.id}`,{
          headers: {
            Authorization: `Bearer ${token}`
          }
      })

      const updatedTechs = userData.user.techs.filter((item) => item.id !== tech.id)

      const updatedUserData = { ...userData, user: { ...userData.user, techs: updatedTechs } }

      setUserData(updatedUserData)

      toast.success('Tech excluída com sucesso!', {
        transition: Slide,
        autoClose: 2000
      })

      setEditModalIsOpen(false)

    } catch (error) {
      console.log(error)
       toast.error('Ups, houve um problema. Tente novamente!', {
        transition: Slide,
        autoClose: 2000
      })

      setEditModalIsOpen(false)
    }
  }
   
  return (
    <TechContext.Provider value={{ submitNewTech, submitUpdatedTech, deleteTech, isOpen, setIsOpen, editModalIsOpen, setEditModalIsOpen }}>
      {children}
    </TechContext.Provider>
  )
}