import { useForm } from 'react-hook-form'
import { Input } from '../Input/Input'
import { api } from '../../services/api'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

import { Slide, ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const LoginForm = () => {
  const [userData, setUserData] = useState()

  const { register, handleSubmit, reset } = useForm()

  const navigate = useNavigate()

  const loginUser = async (formData) => {
    try {
      
      const {data} = await api.post('/sessions', formData)
      
      setUserData(data)
      
      toast.success('Login realizado com sucesso!', {
        transition: Slide,
        autoClose: 1500
      })
      
      setTimeout(() => {
        navigate('/home', { state: { userData: data } })
      }, 2000)
   
    } catch (error) {
      console.log(error)

      toast.error('Verifique seu email e/ou password!', {
        transition: Slide,
        autoClose: 1500
      })

    }
  }

  const submit = (formData) => {
    console.log(formData)
    loginUser(formData)

    reset()
  }
  
  return (
    <form onSubmit={handleSubmit(submit)}>
      <Input label="Email" type="email" {...register("email")} />
     
      <Input label="Password" type="password" {...register("password")} />
     
      <button type="submit">Entrar</button>
      <ToastContainer></ToastContainer>
    </form>
  )
}