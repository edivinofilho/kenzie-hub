import { useForm } from 'react-hook-form'
import { Input } from '../Input/Input'
import { Select } from '../Select/Select'

export const RegisterForm = () => {
  const {register, handleSubmit} = useForm()

  const submit = (formData) => {
    console.log(formData)
  }
  
  return (
    <form onSubmit={handleSubmit(submit)}>
      <Input label="Nome" type="text" {...register("name")} />
      <Input label="Email" type="email" {...register("email")} />
      <Input label="Senha" type="password" {...register("password")} />
      <Input label="Confirmar Senha" type="password" {...register("password")} />
      <Input label="Bio" type="text" {...register("bio")} />
      <Input label="Contato" type="text" {...register("contact")} />

      <Select label="Módulos" id="course_module" {...register("course_module")}
        options={[
          { value: 'Primeiro Módulo', label: 'Primeiro Módulo' },
          { value: 'Segundo Módulo', label: 'Segundo Módulo' },
          { value: 'Terceiro Módulo', label: 'Terceiro Módulo' },
          { value: 'Quarto Módulo', label: 'Quarto Módulo' },
          { value: 'Quinto Módulo', label: 'Quinto Módulo' },
          { value: 'Sexto Módulo', label: 'Sexto Módulo' },
        ]} />

      <button type='submit'>Cadastrar</button>
    </form>
  )
}