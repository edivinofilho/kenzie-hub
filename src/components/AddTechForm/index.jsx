import { useForm } from "react-hook-form"
import { useContext } from "react"
import { UserContext } from "../../providers/UserContext"
import { TechContext } from "../../providers/TechContext"

import { api } from '../../services/api'

import { Input } from "../Input/Input"
import { Select } from "../Select/Select"
import { Button } from "../Button"

import { StyledAddTechForm } from './styles'
// import { set } from "zod"

export const AddTechForm = () => {
  
  // const { userData, setUserData } = useContext(UserContext)
  const {register, handleSubmit, formState: {errors}, reset} = useForm({
    mode: 'onBlur',
    // resolver: zodResolver(LoginFormSchema)
  })

  const { submitNewTech } = useContext(TechContext)
  
  return(
    <StyledAddTechForm onSubmit={handleSubmit(submitNewTech)}>
      <Input label="Nome" type="text" placeholder="Digite aqui seu nome" {...register("title")}/>

      <Select label="Selecionar Status" {...register("status")}>
        <option value="Iniciante">Iniciante</option>
        <option value="Intermediário">Intermediário</option>
        <option value="Avançado">Avançado</option>
      </Select>

      <Button type="submit" text={"Cadastrar Tecnologia"}/>

    </StyledAddTechForm>
  )
}