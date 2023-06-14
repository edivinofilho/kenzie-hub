import { useState } from 'react'

import { useForm } from 'react-hook-form'
import { RegisterFormSchema } from './RegisterFormSchema'

import { Input } from '../Input/Input'
import { Select } from '../Select/Select'

import { zodResolver } from '@hookform/resolvers/zod'
import { api } from '../../services/api'
import { useNavigate } from 'react-router-dom'

import { Slide, ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { StyledRegisterForm, StyledErrorMsg } from './styles'

export const RegisterForm = () => {
  
  const {register, handleSubmit, formState: {errors, isDirty}, watch, reset} = useForm({
    mode: "onBlur",
    resolver: zodResolver(RegisterFormSchema)
  })
 
  const [loading, setLoading ] = useState(false)
  const isFormValid = !isDirty || !Object.keys(errors).length === 0 && isDirty

  const navigate = useNavigate()

  const addUser = async (formData) => {
    try {
      setLoading(true)

      const {data} = await api.post('/users', formData)

      toast.success('Conta criada com sucesso!', {
        transition: Slide,
        autoClose: 2300
      })
      
      setTimeout(() => { navigate('/') }, 2000)

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
    console.log(formData)
    
    reset()
  }

    
  return (
    <>
      <StyledRegisterForm onSubmit={handleSubmit(submit)}>
        <Input label="Nome" type="text" placeholder="Digite aqui seu nome" {...register("name")} />
        <StyledErrorMsg>{errors.name ?  <p>{errors.name.message}</p> : null}</StyledErrorMsg>

        <Input label="Email" type="email" placeholder="Digite aqui seu email" {...register("email")} />
        <StyledErrorMsg>{errors.email ?  <p>{errors.email.message}</p> : null}</StyledErrorMsg>

        <Input label="Senha" type="password" placeholder="Digite aqui sua senha" {...register("password")} />
        <StyledErrorMsg>{errors.password ?  <p>{errors.password.message}</p> : null}</StyledErrorMsg>

        <Input label="Confirmar Senha" type="password" placeholder="Digite novamente sua senha" {...register("confirm")} />
        <StyledErrorMsg>{errors.confirm ?  <p>{errors.confirm.message}</p> : null}</StyledErrorMsg>

        <Input label="Bio" type="text" placeholder="Fale sobre você" {...register("bio")} />
        <StyledErrorMsg>{errors.bio ?  <p>{errors.bio.message}</p> : null}</StyledErrorMsg>

        <Input label="Contato" type="text" placeholder="Opção de contato" {...register("contact")} />
        <StyledErrorMsg>{errors.contact ?  <p>{errors.name.message}</p> : null}</StyledErrorMsg>
        <Select label="Módulos" {...register("course_module")}/>

        <button type="submit" disabled={loading || isFormValid} className={isFormValid ? "active" : ""}>
          {loading ? "Cadastrando..." : "Cadastrar"}
        </button>

      </StyledRegisterForm>
      <ToastContainer theme="dark"></ToastContainer>
    </>
  )
}