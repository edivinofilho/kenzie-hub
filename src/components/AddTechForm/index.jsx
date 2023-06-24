import { useForm } from 'react-hook-form'
import { useContext } from 'react'
import { TechContext } from '../../providers/TechContext'

import { Input } from '../Input/Input'
import { Select } from '../Select/Select'
import { Button } from '../Button'

import { StyledAddTechForm } from './styles'

export const AddTechForm = ( ) => {
  const {register, handleSubmit} = useForm({
    mode: 'onBlur',
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

      <Button type="button" text={"Cadastrar Tecnologia"} onClick={handleSubmit(submitNewTech)} />

    </StyledAddTechForm>
  )
}