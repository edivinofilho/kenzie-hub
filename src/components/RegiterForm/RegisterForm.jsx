import { useForm } from 'react-hook-form'
import { RegisterFormSchema } from './RegisterFormSchema'
import { Input } from '../Input/Input'
import { zodResolver } from '@hookform/resolvers/zod'
import { api } from '../../services/api'
import { useNavigate } from 'react-router-dom'

import { Slide, ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const RegisterForm = () => {
  const {register, handleSubmit, formState: {errors}, watch, reset} = useForm({
    resolver: zodResolver(RegisterFormSchema)
  })

  const navigate = useNavigate()

  const addUser = async (formData) => {
    try {
      const {data} = await api.post('/users', formData)

      toast.success('Conta criada com sucesso!', {
        transition: Slide,
        autoClose: 1500
      })
      
      setTimeout(() => { navigate('/') }, 1500)

      console.log('Conta criada com sucesso!')
    } catch (error) {
      console.log(error)

      console.log('Deu ruim!')

      toast.error('Ops! Algo deu errado', {
        transition: Slide,
        autoClose: 1500
      })
    }
  }

  const submit = (formData) => {
    delete formData.confirm
    formData.course_module = watch('course_module')
    
    addUser(formData)
    console.log(formData)
    
    reset()
  }

    
  return (
    <>
      <form onSubmit={handleSubmit(submit)}>
        <Input label="Nome" type="text" {...register("name")} />
        {errors.name ?  <p>{errors.name.message}</p> : null}

        <Input label="Email" type="email" {...register("email")} />
        {errors.email ?  <p>{errors.email.message}</p> : null}

        <Input label="Senha" type="password" {...register("password")} />
        {errors.password ?  <p>{errors.password.message}</p> : null}

        <Input label="Confirmar Senha" type="password" {...register("confirm")} />
        {errors.confirm ?  <p>{errors.confirm.message}</p> : null}

        <Input label="Bio" type="text" {...register("bio")} />
        {errors.bio ?  <p>{errors.bio.message}</p> : null}

        <Input label="Contato" type="text" {...register("contact")} />
        {errors.contact ?  <p>{errors.contact.message}</p> : null}

        <select label="Módulos" {...register("course_module")}>
          <option value="Primeiro Módulo">Primeiro Módulo</option>
          <option value="Segundo Módulo">Segundo Módulo</option>
          <option value="Terceiro Módulo">Terceiro Módulo</option>
          <option value="Quarto Módulo">Quarto Módulo</option>
          <option value="Quinto Módulo">Quinto Módulo</option>
          <option value="Sexto Módulo">Sexto Módulo</option>
        </select>


        <button type='submit'>Cadastrar</button>

      </form>
      <ToastContainer></ToastContainer>
    </>
  )
}