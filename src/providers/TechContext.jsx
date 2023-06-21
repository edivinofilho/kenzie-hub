import { useState, createContext, useContext } from "react"
import { api } from '../services/api'

import { UserContext } from './UserContext'

export const TechContext = createContext({})

export const TechProvider = ({ children }) => {
  const { userData, setUserData } = useContext(UserContext)
  
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

      setUserData(updatedUserData)
      // reset()

      console.log(updatedUserData)
      
    } catch (error) {
      console.log(error)
    }
  }
 
  const editTech = (event) => {
    console.log(event.target)
  }

  return (
    <TechContext.Provider value={{ submitNewTech }}>
      {children}
    </TechContext.Provider>
  )
}