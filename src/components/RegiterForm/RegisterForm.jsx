import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { Input } from '../Input/Input'
import { Select } from '../Select/Select'

import { zodResolver } from '@hookform/resolvers/zod'
import { RegisterFormSchema } from './RegisterFormSchema'
import { api } from '../../services/api'

import { toast, Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { StyledRegisterForm, StyledErrorMsg } from './styles'


export const RegisterForm = () => { 
  const {register, handleSubmit, formState: {errors, isValid}, watch, reset} = useForm({
    mode: 'onBlur',
    resolver: zodResolver(RegisterFormSchema)
  })

  
  const [loading, setLoading ] = useState(false)
     
  const navigate = useNavigate()

  const addUser = async (formData) => {
    try {
      setLoading(true)

      const response = await api.post('/users', formData)

      await toast.promise(
        new Promise((resolve) => {
          resolve(response)
          }),
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

  const submit = (formData) => {
    delete formData.confirm
    formData.course_module = watch('course_module')
    
    addUser(formData)
       
    reset()
  }

  return (
    <>
      <StyledRegisterForm onSubmit={handleSubmit(submit)}>
        <Input label="Nome" type="text" placeholder="Digite aqui seu nome" {...register("name")} />
        {errors.name ?  <StyledErrorMsg>{errors.name.message}</StyledErrorMsg> : null}

        <Input label="Email" type="email" placeholder="Digite aqui seu email" {...register("email")} />
        {errors.email ?  <StyledErrorMsg>{errors.email.message}</StyledErrorMsg> : null}

        <Input label="Senha" type="password" placeholder="Digite aqui sua senha" {...register("password")} />
        {errors.password ?  <StyledErrorMsg>{errors.password.message}</StyledErrorMsg> : null}

        <Input label="Confirmar Senha" type="password" placeholder="Confirme sua senha" {...register("confirm")} />
        {errors.confirm ?  <StyledErrorMsg>{errors.confirm.message}</StyledErrorMsg> : null}

        <Input label="Bio" type="text" placeholder="Fale sobre você" {...register("bio")} />
        {errors.bio ?  <StyledErrorMsg>{errors.bio.message}</StyledErrorMsg> : null}

        <Input label="Contato" type="text" placeholder="Opção de contato" {...register("contact")} />
        {errors.contact ?  <StyledErrorMsg>{errors.contact.message}</StyledErrorMsg> : null}

        <Select label="Módulos" {...register("course_module")}/>

        <button type="submit" className={isValid ? 'active' : ''} disabled={!isValid}>
          {loading ? "Cadastrando..." : "Cadastrar"}
        </button>

      </StyledRegisterForm>
    </>
  )
}