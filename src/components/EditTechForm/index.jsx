import { useForm } from "react-hook-form"
import { useContext } from "react"
import { UserContext } from "../../providers/UserContext"
import { TechContext } from "../../providers/TechContext"

import { Input } from "../Input/Input"
import { Select } from "../Select/Select"
import { Button } from "../Button"

import { StyledEditTechForm, StyledButtonContainer} from './styles'

export const EditTechForm = () => {
  
  const {register, handleSubmit, formState: {errors}, reset} = useForm({
    mode: 'onBlur',

  })
  
  return(
    <StyledEditTechForm onSubmit={handleSubmit()}>
      <Input label="Nome" type="text" placeholder="Digite aqui seu nome" disabled={true} className="notAble"/>

      <Select label="Selecionar Status" {...register("status")}>
        <option value="Iniciante">Iniciante</option>
        <option value="Intermediário">Intermediário</option>
        <option value="Avançado">Avançado</option>
      </Select>
      
      <StyledButtonContainer>
        <button type="submit" className="saveButton">Salvar alterações</button>
        <button type="submit" className="excludeButton">Excluir</button>
      </StyledButtonContainer>

    </StyledEditTechForm>
  )
}