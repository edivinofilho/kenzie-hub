import { useForm } from 'react-hook-form'
import { useContext } from 'react'
import { UserContext } from '../../providers/UserContext'
import { TechContext } from '../../providers/TechContext'

import { api } from '../../services/api'

import { Input } from '../Input/Input'
import { Select } from '../Select/Select'

import { Slide, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { StyledEditTechForm, StyledButtonContainer} from './styles'

export const EditTechForm = ({ tech }) => {
  const token = localStorage.getItem('@TOKEN')
  const { userData, setUserData } = useContext(UserContext)
  const {register, handleSubmit} = useForm({
    mode: 'onBlur',
  })
  const { setEditModalIsOpen } = useContext(TechContext)

  const submitUpdatedTech = async (formData) => {
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
      toast.error('Ups, houve um problema. Tente novamente!', {
        transition: Slide,
        autoClose: 2000
      })

      setEditModalIsOpen(false)
    }
  }

  const deleteTech = async (tech) => {

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
       toast.error('Ups, houve um problema. Tente novamente!', {
        transition: Slide,
        autoClose: 2000
      })

      setEditModalIsOpen(false)
    }
  
  }

  return(
    <StyledEditTechForm onSubmit={handleSubmit(submitUpdatedTech)}>
      <Input label="Nome" type="text" placeholder={`${tech.title}`} disabled={true} className="notAble"/>

      <Select label="Selecionar Status" defaultValue={tech.status} {...register("status")}>
        <option value="Iniciante">Iniciante</option>
        <option value="Intermediário">Intermediário</option>
        <option value="Avançado">Avançado</option>
      </Select>
      
      <StyledButtonContainer>
        <button type="submit" className="saveButton" >Salvar alterações</button>
        <button type="button" className="excludeButton" onClick={() => deleteTech(tech)}>Excluir</button>
      </StyledButtonContainer>

    </StyledEditTechForm>
  )
}